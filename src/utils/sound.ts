import { LanguageCode, LANGUAGES } from '../data/starterDeck';

export type VoiceEngineMode = 'neural' | 'gemini' | 'browser';

let audioCtx: AudioContext | null = null;
const cloudAudioCache = new Map<string, string>();
const neuralArrayBufferCache = new Map<string, ArrayBuffer>();
let currentHtmlAudio: HTMLAudioElement | null = null;
let currentBufferSource: AudioBufferSourceNode | null = null;

// Optional user-selected browser voice URI per language
const preferredBrowserVoiceURI: Partial<Record<LanguageCode, string>> = {};

export function setPreferredBrowserVoice(lang: LanguageCode, voiceURI: string): void {
  if (!voiceURI) {
    delete preferredBrowserVoiceURI[lang];
  } else {
    preferredBrowserVoiceURI[lang] = voiceURI;
  }
}

export function getPreferredBrowserVoice(lang: LanguageCode): string {
  return preferredBrowserVoiceURI[lang] || '';
}

export function getAvailableBrowserVoices(lang: LanguageCode): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return [];
  const targetBcp47 = LANGUAGES[lang].speechLang;
  const langPrefix = targetBcp47.split('-')[0].toLowerCase();
  return window.speechSynthesis
    .getVoices()
    .filter((v) => v.lang.toLowerCase().startsWith(langPrefix));
}

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function unlockBrowserAudio(): void {
  const ctx = getAudioContext();
  if (ctx) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    gain.gain.value = 0.001;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(0);
    osc.stop(ctx.currentTime + 0.02);
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    window.speechSynthesis.getVoices();
  }
}

export function playPopSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(420, now);
  osc.frequency.exponentialRampToValueAtTime(680, now + 0.08);
  gain.gain.setValueAtTime(0.14, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.09);
}

export function playStarSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
  notes.forEach((freq, idx) => {
    const start = ctx.currentTime + idx * 0.075;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, start);
    gain.gain.setValueAtTime(0.2, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + 0.28);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(start);
    osc.stop(start + 0.29);
  });
}

export function playTryAgainSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(300, now);
  osc.frequency.linearRampToValueAtTime(240, now + 0.18);
  gain.gain.setValueAtTime(0.15, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.21);
}

export function playQuestCompleteFanfare(): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const melody = [
    { f: 523.25, t: 0, d: 0.12 },
    { f: 659.25, t: 0.12, d: 0.12 },
    { f: 783.99, t: 0.24, d: 0.12 },
    { f: 1046.5, t: 0.36, d: 0.35 },
    { f: 783.99, t: 0.55, d: 0.12 },
    { f: 1046.5, t: 0.68, d: 0.45 },
  ];
  melody.forEach((n) => {
    const start = ctx.currentTime + n.t;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(n.f, start);
    gain.gain.setValueAtTime(0.22, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + n.d);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(start);
    osc.stop(start + n.d + 0.02);
  });
}

// Score browser voices so Korean (ko-KR), Mandarin (zh-CN) & Spanish ALWAYS pick child/young female voices and NEVER male voices
function rankBrowserVoice(v: SpeechSynthesisVoice, langCode: LanguageCode | 'en'): number {
  let score = 0;
  const name = v.name.toLowerCase();
  const lang = v.lang.toLowerCase();

  if (langCode === 'zh' && (lang === 'zh-cn' || lang === 'zh_cn')) score += 50;
  if (langCode === 'ko' && (lang === 'ko-kr' || lang === 'ko_kr')) score += 50;
  if (langCode === 'es' && (lang === 'es-mx' || lang === 'es-es' || lang === 'es-us')) score += 40;

  // Strongly penalize ALL known male voices across Windows, macOS, iOS, Android, and Chrome
  const maleVoiceKeywords = [
    'male',
    'man',
    'guy',
    'injoon',
    'in-joon',
    'hyunsu',
    'bongjin',
    'gookmin',
    'yunxi',
    'yunjian',
    'kangkang',
    'yunyang',
    'yunhao',
    'yunze',
    'eddy',
    'reed',
    'rocko',
    'grandpa',
    'daniel',
    'jorge',
    'juan',
    'carlos',
    'diego',
    'alvaro',
    'álvaro',
    'pablo',
    'tomas',
    'tomás',
    'alonso',
    'david',
    'mark',
    'james',
    'richard',
    'george',
    'fred',
    'ralph',
    'albert',
    'bruce',
    'junior',
  ];
  for (const mkw of maleVoiceKeywords) {
    if (name.includes(mkw)) score -= 500;
  }

  // Strongly boost dedicated child/girl/young-female voices
  const childAndFemaleKeywords = [
    'seohyeon',
    'seo-hyeon',
    'xiaoshuang',
    'xiaoyi',
    'xiaoxiao',
    'shanshan',
    'ting-ting',
    'tingting',
    'meijia',
    'sunhi',
    'sun-hi',
    'yuna',
    'sora',
    'jian',
    'paulina',
    'monica',
    'mónica',
    'paloma',
    'elena',
    'elvira',
    'marina',
    'sabina',
    'samantha',
    'victoria',
    'karen',
    'child',
    'kid',
    'girl',
    'female',
  ];
  for (const kw of childAndFemaleKeywords) {
    if (name.includes(kw)) score += 120;
  }

  const qualityKeywords = ['natural', 'neural', 'premium', 'enhanced', 'siri', 'google'];
  for (const qkw of qualityKeywords) {
    if (name.includes(qkw)) score += 20;
  }

  if (name.includes('compact') || name.includes('espeak')) {
    score -= 60;
  }

  return score;
}

function speakWithBrowserVoice(
  rawText: string,
  langCode: LanguageCode | 'en',
  role: 'word' | 'mom' | 'kid' = 'word',
  slow = false,
  onEnd?: () => void
): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    onEnd?.();
    return;
  }

  window.speechSynthesis.cancel();

  // Strip punctuation marks so buggy browser voices never read "Exclamation point" out loud
  const cleanText = rawText.replace(/[!¡?¿"“”'‘’]/g, ' ').replace(/\s+/g, ' ').trim() || rawText;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  const targetBcp47 = langCode === 'en' ? 'en-US' : LANGUAGES[langCode].speechLang;
  utterance.lang = targetBcp47;

  const voices = window.speechSynthesis.getVoices();
  const langPrefix = targetBcp47.split('-')[0].toLowerCase();
  const matchingVoices = voices.filter((v) => v.lang.toLowerCase().startsWith(langPrefix));

  if (matchingVoices.length > 0) {
    const customURI = langCode !== 'en' ? preferredBrowserVoiceURI[langCode] : undefined;
    const explicitMatch = customURI
      ? matchingVoices.find((v) => v.voiceURI === customURI)
      : undefined;

    if (explicitMatch) {
      utterance.voice = explicitMatch;
    } else {
      const sorted = [...matchingVoices].sort(
        (a, b) => rankBrowserVoice(b, langCode) - rankBrowserVoice(a, langCode)
      );
      utterance.voice = sorted[0];
    }
  } else {
    // If NO native voice for this language is installed on the user device:
    // DO NOT allow the system's default English voice to speak!
    // An English voice cannot pronounce Korean/Chinese and will just read punctuation names like "Exclamation point".
    if (langCode !== 'en') {
      fetchNeuralArrayBuffer(cleanText, langCode, role).then((buf) => {
        if (buf) {
          playWithKidVoiceProcessor(buf, role, slow, 'neural', onEnd);
        } else {
          onEnd?.();
        }
      }).catch(() => onEnd?.());
      return;
    }
  }

  // Use a bright, unmistakable child pitch (1.48) for 'word' and 'kid' roles, and warm female pitch (1.12) for 'mom'
  utterance.pitch = role === 'mom' ? 1.12 : 1.48;
  utterance.rate = slow ? 0.72 : role === 'word' ? 0.94 : 0.98;

  if (onEnd) {
    utterance.onend = () => onEnd();
    utterance.onerror = () => onEnd();
  }

  window.speechSynthesis.speak(utterance);
}

async function fetchNeuralArrayBuffer(
  text: string,
  langCode: LanguageCode | 'en',
  role: 'word' | 'mom' | 'kid' = 'kid'
): Promise<ArrayBuffer | null> {
  const effectiveRole = role === 'mom' ? 'mom' : 'kid';
  const key = `v3:${langCode}:${effectiveRole}:${text}`;
  const cached = neuralArrayBufferCache.get(key);
  if (cached) return cached;

  try {
    const params = new URLSearchParams({
      text,
      lang: langCode,
      role: effectiveRole,
    });
    const res = await fetch(`/api/neural-tts?${params.toString()}`);
    if (!res.ok) return null;
    const arrayBuffer = await res.arrayBuffer();
    if (arrayBuffer.byteLength < 100) return null;
    neuralArrayBufferCache.set(key, arrayBuffer);
    return arrayBuffer;
  } catch {
    return null;
  }
}

// Pre-warm HD Kid Neural Audio in the background so tapping or flipping cards has 0ms latency
export function prefetchCardAudio(
  words: string[],
  langCode: LanguageCode
): void {
  if (typeof navigator !== 'undefined' && !navigator.onLine) return;
  words.forEach((text) => {
    if (text) {
      fetchNeuralArrayBuffer(text, langCode, 'kid').catch(() => {});
    }
  });
}

// Play decoded audio through a cross-browser Web Audio Kid-Voice acoustic chain.
// IMPORTANT: Never use playbackRate < 1.0 on AudioBufferSourceNode, because slowing down an audio buffer
// drops the fundamental frequency into a male register!
// Instead:
// - For 'neural' source (which is synthesized at slow prosodic speed 0.24 on the server), we play at
//   playbackRate = 1.28 (normal) or 1.15 (slow). That shifts BOTH pitch (F0 -> ~285Hz) and vocal-tract formants
//   UP by +3.5 to +4.3 semitones into a cheerful 6-year-old child voice while keeping tempo natural!
// - For 'gemini' source (already generated by 'Leda' young girl voice at normal tempo), we play at
//   playbackRate = 1.18 (kid/word) or 1.04 (mom).
async function playWithKidVoiceProcessor(
  rawBuffer: ArrayBuffer,
  role: 'word' | 'mom' | 'kid',
  slow: boolean,
  sourceType: 'neural' | 'gemini' = 'neural',
  onEnd?: () => void
): Promise<boolean> {
  const ctx = getAudioContext();
  if (!ctx) return false;

  if (ctx.state === 'suspended') {
    try {
      await ctx.resume();
    } catch {}
  }

  try {
    const bufferCopy = rawBuffer.slice(0);
    const audioBuffer = await ctx.decodeAudioData(bufferCopy);

    if (currentBufferSource) {
      try {
        currentBufferSource.stop();
      } catch {
        // Ignore
      }
      currentBufferSource = null;
    }

    const source = ctx.createBufferSource();
    source.buffer = audioBuffer;

    // Cross-browser Kid Pitch & Formant Shift via playbackRate > 1.0 (works identically in Safari, iOS, Chrome, Edge)
    let rate = 1.34;
    if (sourceType === 'neural') {
      if (role === 'mom') {
        rate = slow ? 1.04 : 1.10;
      } else {
        // Server generated slow prosody (0.24), so 1.34x raises pitch & formants +5.0 semitones (+34%) into a bright 6-year-old child voice at natural ~0.96x tempo!
        rate = slow ? 1.20 : 1.34;
      }
    } else {
      // Gemini 'Leda' girl voice
      if (role === 'mom') {
        rate = slow ? 1.0 : 1.05;
      } else {
        rate = slow ? 1.14 : 1.22;
      }
    }
    source.playbackRate.value = rate;

    // 1. High-pass filter at 220Hz for Kid voice to remove any adult chest resonance
    const highpass = ctx.createBiquadFilter();
    highpass.type = 'highpass';
    highpass.frequency.value = role === 'mom' ? 130 : 220;

    // 2. Peaking filter at 3100 Hz to add bright, clear 6-year-old child vocal-tract sparkle
    const formantBoost = ctx.createBiquadFilter();
    formantBoost.type = 'peaking';
    formantBoost.frequency.value = 3100;
    formantBoost.Q.value = 1.0;
    formantBoost.gain.value = role === 'mom' ? 1.5 : 4.8;

    // 3. Output gain
    const gainNode = ctx.createGain();
    gainNode.gain.value = 1.2;

    source.connect(highpass);
    highpass.connect(formantBoost);
    formantBoost.connect(gainNode);
    gainNode.connect(ctx.destination);

    currentBufferSource = source;
    source.onended = () => {
      if (currentBufferSource === source) {
        currentBufferSource = null;
      }
      onEnd?.();
    };

    source.start(0);
    return true;
  } catch {
    // Fallback to HTML5 Audio with preservesPitch = false so playbackRate > 1.0 shifts pitch up to a child voice
    try {
      const blob = new Blob([rawBuffer], {
        type: sourceType === 'gemini' ? 'audio/wav' : 'audio/mpeg',
      });
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      if ('preservesPitch' in audio) {
        (audio as any).preservesPitch = false;
      }
      if ('mozPreservesPitch' in audio) {
        (audio as any).mozPreservesPitch = false;
      }
      if ('webkitPreservesPitch' in audio) {
        (audio as any).webkitPreservesPitch = false;
      }
      audio.playbackRate =
        role === 'mom' ? 1.06 : slow ? 1.15 : sourceType === 'neural' ? 1.28 : 1.18;
      currentHtmlAudio = audio;
      audio.onended = () => {
        URL.revokeObjectURL(url);
        onEnd?.();
      };
      audio.onerror = () => {
        URL.revokeObjectURL(url);
        onEnd?.();
      };
      await audio.play();
      return true;
    } catch {
      return false;
    }
  }
}

export async function speakText(
  rawText: string,
  langCode: LanguageCode | 'en',
  role: 'word' | 'mom' | 'kid' = 'word',
  voiceEngine: boolean | VoiceEngineMode = 'neural',
  onEnd?: () => void,
  slow = false
): Promise<void> {
  // Strip punctuation so no voice engine ever speaks "Exclamation point" or "Question mark"
  const text = rawText.replace(/[!¡?¿"“”'‘’]/g, ' ').replace(/\s+/g, ' ').trim() || rawText;

  if (currentBufferSource) {
    try {
      currentBufferSource.stop();
    } catch {
      // Ignore
    }
    currentBufferSource = null;
  }
  if (currentHtmlAudio) {
    currentHtmlAudio.pause();
    currentHtmlAudio = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  const mode: VoiceEngineMode =
    typeof voiceEngine === 'boolean'
      ? voiceEngine
        ? 'gemini'
        : 'neural'
      : voiceEngine;

  const isOffline = typeof navigator !== 'undefined' && !navigator.onLine;
  if (isOffline || mode === 'browser') {
    speakWithBrowserVoice(text, langCode, role, slow, onEnd);
    return;
  }

  // Mode 1: HD Kid Voice (Default — Slow prosody neural stream pitched +28% up into a 6-year-old child voice)
  if (mode === 'neural') {
    const rawBuffer = await fetchNeuralArrayBuffer(text, langCode, role);
    if (rawBuffer) {
      const played = await playWithKidVoiceProcessor(rawBuffer, role, slow, 'neural', onEnd);
      if (played) return;
    }
    speakWithBrowserVoice(text, langCode, role, slow, onEnd);
    return;
  }

  // Mode 2: Gemini AI Kid Voice ('Leda' young girl voice + child pitch boost)
  const cacheKey = `v3:${langCode}:${role}:${text}`;
  const cachedBase64 = cloudAudioCache.get(cacheKey);

  if (cachedBase64) {
    const bin = atob(cachedBase64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const played = await playWithKidVoiceProcessor(bytes.buffer, role, slow, 'gemini', onEnd);
    if (played) return;
  }

  try {
    const res = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, lang: langCode, role }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.audioBase64) {
        cloudAudioCache.set(cacheKey, data.audioBase64);
        const bin = atob(data.audioBase64);
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        const played = await playWithKidVoiceProcessor(bytes.buffer, role, slow, 'gemini', onEnd);
        if (played) return;
      }
    }
  } catch {
    // Fall through to HD Kid Neural stream
  }

  // Automatic fallback to HD Kid Neural Voice
  const fallbackBuffer = await fetchNeuralArrayBuffer(text, langCode, role);
  if (fallbackBuffer) {
    const played = await playWithKidVoiceProcessor(fallbackBuffer, role, slow, 'neural', onEnd);
    if (played) return;
  }

  speakWithBrowserVoice(text, langCode, role, slow, onEnd);
}
