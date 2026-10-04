import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import zlib from 'zlib';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

// Helper to create solid/styled valid PNG icons for PWA compliance (192x192, 512x512, 180x180)
function createValidPng(width: number, height: number, isMaskable = false): Buffer {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  function crc32(buf: Buffer): number {
    let c = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      c ^= buf[i];
      for (let k = 0; k < 8; k++) {
        c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      }
    }
    return (c ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type: string, data: Buffer): Buffer {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crcBuf = Buffer.alloc(4);
    const combined = Buffer.concat([typeBuf, data]);
    crcBuf.writeUInt32BE(crc32(combined), 0);
    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const rawData = Buffer.alloc(height * (1 + width * 4));
  const cx = width / 2;
  const cy = height / 2;
  const maxR = (Math.min(width, height) / 2) * (isMaskable ? 0.72 : 0.82);

  for (let y = 0; y < height; y++) {
    const rowStart = y * (1 + width * 4);
    rawData[rowStart] = 0; // filter type 0
    for (let x = 0; x < width; x++) {
      const idx = rowStart + 1 + x * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < maxR * 0.55) {
        // Golden Star Center (#F59E0B)
        rawData[idx] = 245;
        rawData[idx + 1] = 158;
        rawData[idx + 2] = 11;
        rawData[idx + 3] = 255;
      } else if (dist < maxR) {
        // Warm Cream Circle (#FFFBEB)
        rawData[idx] = 255;
        rawData[idx + 1] = 251;
        rawData[idx + 2] = 235;
        rawData[idx + 3] = 255;
      } else {
        // Coral-Amber Brand Background (#EA580C)
        rawData[idx] = 234;
        rawData[idx + 1] = 88;
        rawData[idx + 2] = 12;
        rawData[idx + 3] = 255;
      }
    }
  }

  const compressed = zlib.deflateSync(rawData);
  const iend = Buffer.alloc(0);

  return Buffer.concat([
    signature,
    makeChunk('IHDR', ihdr),
    makeChunk('IDAT', compressed),
    makeChunk('IEND', iend),
  ]);
}

function ensurePwaIcons() {
  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const icons: Array<{ name: string; size: number; maskable?: boolean }> = [
    { name: 'pwa-192x192.png', size: 192 },
    { name: 'pwa-512x512.png', size: 512 },
    { name: 'pwa-maskable-512x512.png', size: 512, maskable: true },
    { name: 'apple-touch-icon.png', size: 180 },
  ];
  for (const icon of icons) {
    const filePath = path.join(publicDir, icon.name);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, createValidPng(icon.size, icon.size, icon.maskable));
    }
  }
}

function getGeminiClient() {
  return new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

async function startServer() {
  ensurePwaIcons();

  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '2mb' }));

  // Generate a complete trilingual kid-friendly flashcard from a single English word
  app.post('/api/generate-word', async (req, res) => {
    try {
      const { englishWord, category = 'snacks' } = req.body;
      if (!englishWord || typeof englishWord !== 'string') {
        res.status(400).json({ error: 'Please provide an English word.' });
        return;
      }

      const ai = getGeminiClient();

      const prompt = `Create a playful, kid-friendly flashcard for a young child (ages 3-8) for the English word/concept: "${englishWord.trim()}".
Include translations, phonetic guides, a simple 2-line Mom & Kid everyday conversation, and a fill-in-the-blank practice sentence for:
1. Spanish (es)
2. Simplified Mandarin Chinese (zh) - MUST include accurate Pinyin with tone marks (e.g., "bīngqílín") AND Simplified Chinese characters (e.g., "冰淇淋") for the word, dialogue lines, and practice sentences.
3. Korean (ko) - MUST include Hangul (e.g., "강아지") AND accurate Romanized reading separated by each character with spaces (e.g., "gang a ji", NOT "gangaji") for the word, dialogue lines, and practice sentences.

Rules for Kid Scenarios:
- Dialogues must be locked to playground talk, animals, food/snacks, toys, family, action verbs, simple feelings/adjectives, and everyday fun things.
- Speaker A (Mom) asks a warm, simple question or makes a cheerful observation using the word.
- Speaker B (Kid) responds enthusiastically using simple kid language.
- Practice sentence must have a blank where the target word goes (split into sentenceBefore and sentenceAfter), plus 2 silly/playful wrong choices (distractors) with their own emoji, word, and phonetic reading.`;

      const langSchema = {
        type: Type.OBJECT,
        properties: {
          word: {
            type: Type.STRING,
            description: 'The word in the target script (Spanish word, Simplified Chinese characters, or Korean Hangul).',
          },
          phonetic: {
            type: Type.STRING,
            description: 'Required phonetic guide: Pinyin with tone marks for Mandarin, Romanization for Korean, or simple syllable guide for Spanish.',
          },
          dialogue: {
            type: Type.OBJECT,
            properties: {
              mom: {
                type: Type.OBJECT,
                properties: {
                  text: { type: Type.STRING, description: 'Mom line in target script.' },
                  phonetic: { type: Type.STRING, description: 'Full Pinyin (with tone marks) or Korean Romanization for Mom line.' },
                  english: { type: Type.STRING, description: 'English meaning of Mom line.' },
                },
                required: ['text', 'phonetic', 'english'],
              },
              kid: {
                type: Type.OBJECT,
                properties: {
                  text: { type: Type.STRING, description: 'Kid line in target script.' },
                  phonetic: { type: Type.STRING, description: 'Full Pinyin (with tone marks) or Korean Romanization for Kid line.' },
                  english: { type: Type.STRING, description: 'English meaning of Kid line.' },
                },
                required: ['text', 'phonetic', 'english'],
              },
            },
            required: ['mom', 'kid'],
          },
          practice: {
            type: Type.OBJECT,
            properties: {
              sentenceBefore: { type: Type.STRING, description: 'Part of the sentence before the missing target word.' },
              sentenceBeforePhonetic: { type: Type.STRING, description: 'Pinyin or Romanization for sentenceBefore.' },
              sentenceAfter: { type: Type.STRING, description: 'Part of the sentence after the missing target word (can be empty string or punctuation).' },
              sentenceAfterPhonetic: { type: Type.STRING, description: 'Pinyin or Romanization for sentenceAfter.' },
              englishHint: { type: Type.STRING, description: 'Full English translation of the practice sentence with ____ for the blank.' },
              distractors: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    word: { type: Type.STRING },
                    phonetic: { type: Type.STRING },
                    emoji: { type: Type.STRING },
                    english: { type: Type.STRING },
                  },
                  required: ['word', 'phonetic', 'emoji', 'english'],
                },
              },
            },
            required: [
              'sentenceBefore',
              'sentenceBeforePhonetic',
              'sentenceAfter',
              'sentenceAfterPhonetic',
              'englishHint',
              'distractors',
            ],
          },
        },
        required: ['word', 'phonetic', 'dialogue', 'practice'],
      };

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction:
            'You are an expert early-childhood trilingual language educator specializing in Spanish, Mandarin Chinese (Pinyin with tone marks + Simplified Hanzi), and Korean (Revised Romanization + Hangul) for children ages 3 to 8.',
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              english: { type: Type.STRING, description: 'Clean Title Case English word' },
              emoji: { type: Type.STRING, description: 'Single vivid matching emoji' },
              category: {
                type: Type.STRING,
                description: 'One of: animals, snacks, colors, family, playground, verbs, adjectives, others',
              },
              es: langSchema,
              zh: langSchema,
              ko: langSchema,
            },
            required: ['english', 'emoji', 'category', 'es', 'zh', 'ko'],
          },
        },
      });

      const rawText = response.text;
      if (!rawText) {
        throw new Error('Empty response from Gemini model.');
      }

      const parsed = JSON.parse(rawText.trim());
      res.json({
        card: {
          id: `custom-${Date.now()}`,
          english: parsed.english || englishWord.trim(),
          emoji: parsed.emoji || '🌟',
          category: ['animals', 'snacks', 'colors', 'family', 'playground', 'verbs', 'adjectives', 'others'].includes(parsed.category)
            ? parsed.category
            : category,
          isCustom: true,
          es: parsed.es,
          zh: parsed.zh,
          ko: parsed.ko,
        },
      });
    } catch (error: any) {
      console.error('Error in /api/generate-word:', error);
      res.status(500).json({
        error: error?.message || 'Failed to generate flashcard with AI.',
      });
    }
  });

  // Server-side in-memory audio caches for instant replay
  const neuralAudioCache = new Map<string, Buffer>();
  const geminiAudioCache = new Map<string, string>();

  // HD Kid Neural Voice stream (Fetches slow prosodic female neural speech so client Web Audio can pitch-shift +28% into a natural 6-year-old child voice at normal tempo)
  app.get('/api/neural-tts', async (req, res) => {
    try {
      const rawText = String(req.query.text || '').trim();
      const lang = String(req.query.lang || 'ko').trim();
      const role = String(req.query.role || 'kid').trim();

      if (!rawText) {
        res.status(400).json({ error: 'Missing text parameter' });
        return;
      }

      // Strip punctuation so upstream Google TTS / browser never speaks punctuation mark names
      const text = rawText.replace(/[!¡?¿"“”'‘’]/g, ' ').replace(/\s+/g, ' ').trim() || rawText;

      const tlMap: Record<string, string> = {
        ko: 'ko-KR',
        zh: 'zh-CN',
        es: 'es-MX',
        en: 'en-US',
      };
      const tl = tlMap[lang] || 'ko-KR';
      // Use slow prosodic articulation (0.24) for kid/word roles so when the client plays back at 1.28x playbackRate,
      // the pitch & vocal tract formants shift up +4.3 semitones into a real child's voice while tempo lands right at ~0.96x!
      const ttsSpeed = role === 'mom' ? '0.85' : '0.24';
      const cacheKey = `v3:${tl}:${ttsSpeed}:${text}`;

      const cachedBuf = neuralAudioCache.get(cacheKey);
      if (cachedBuf) {
        res.setHeader('Content-Type', 'audio/mpeg');
        res.setHeader('Cache-Control', 'public, max-age=86400');
        res.send(cachedBuf);
        return;
      }

      const url = `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${encodeURIComponent(
        tl
      )}&ttsspeed=${ttsSpeed}&q=${encodeURIComponent(text)}`;

      const upstream = await fetch(url, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        },
      });

      if (!upstream.ok) {
        throw new Error(`Upstream neural TTS returned ${upstream.status}`);
      }

      const arrayBuf = await upstream.arrayBuffer();
      const buffer = Buffer.from(arrayBuf);

      if (neuralAudioCache.size > 600) {
        const firstKey = neuralAudioCache.keys().next().value;
        if (firstKey) neuralAudioCache.delete(firstKey);
      }
      neuralAudioCache.set(cacheKey, buffer);

      res.setHeader('Content-Type', 'audio/mpeg');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      res.send(buffer);
    } catch (error: any) {
      console.error('Error in /api/neural-tts:', error);
      res.status(502).json({ error: 'Neural TTS unavailable' });
    }
  });

  // Cloud AI Kid Voice (Gemini TTS — uses 'Leda' high-pitched young girl voice for Kid/Word, 'Aoede' warm female voice for Mom; NEVER male 'Puck')
  app.post('/api/tts', async (req, res) => {
    try {
      const { text: rawText, lang, role = 'kid' } = req.body;
      if (!rawText || typeof rawText !== 'string') {
        res.status(400).json({ error: 'Missing text for TTS' });
        return;
      }

      // Strip punctuation so TTS never speaks punctuation mark names
      const text = rawText.replace(/[!¡?¿"“”'‘’]/g, ' ').replace(/\s+/g, ' ').trim() || rawText;

      const isMomRole = role === 'mom';
      // Leda = highest, brightest youthful girl voice; Aoede = warm motherly female voice
      const voiceName = isMomRole ? 'Aoede' : 'Leda';
      const cacheKey = `v3:${lang}:${voiceName}:${role}:${text}`;
      const cached = geminiAudioCache.get(cacheKey);
      if (cached) {
        res.json({ audioBase64: cached, mimeType: 'audio/wav' });
        return;
      }

      const ai = getGeminiClient();
      const langLabel =
        lang === 'zh'
          ? 'Standard Mainland Mandarin Chinese (Putonghua) with accurate four tones'
          : lang === 'ko'
          ? 'Standard Seoul Korean with natural, cute articulation'
          : 'Warm, clear Latin American Spanish';

      const stylePrompt = isMomRole
        ? `Warm, gentle, loving mother speaking native ${langLabel} softly to a young child`
        : `High-pitched, adorable, cheerful 5-year-old little girl speaking native ${langLabel} with a bright, cute child voice`;

      const ttsModels = ['gemini-3.8-flash-lite-tts', 'gemini-3.8-flash-tts'];
      let base64Audio: string | undefined;

      for (const modelName of ttsModels) {
        try {
          const response = await ai.models.generateContent({
            model: modelName,
            contents: [
              {
                role: 'user',
                parts: [
                  {
                    text,
                    speechMetadata: {
                      style: stylePrompt,
                    },
                  } as any,
                ],
              },
            ],
            config: {
              responseModalities: ['AUDIO'],
              speechConfig: {
                voiceConfig: {
                  prebuiltVoiceConfig: { voiceName },
                },
              },
            },
          });
          base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
          if (base64Audio) break;
        } catch (innerErr) {
          console.warn(`TTS model ${modelName} busy, trying fallback...`);
        }
      }

      if (!base64Audio) {
        throw new Error('No audio returned from Gemini TTS');
      }

      if (geminiAudioCache.size > 300) {
        const firstKey = geminiAudioCache.keys().next().value;
        if (firstKey) geminiAudioCache.delete(firstKey);
      }
      geminiAudioCache.set(cacheKey, base64Audio);

      res.json({ audioBase64: base64Audio, mimeType: 'audio/wav' });
    } catch (error: any) {
      console.error('Error in /api/tts:', error);
      res.status(500).json({ error: error?.message || 'Cloud TTS failed' });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`LinguaPals Kids server running on http://localhost:${PORT}`);
  });
}

startServer();
