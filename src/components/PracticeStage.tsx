import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Mic, Volume2, Check, Sparkles, Ear, Puzzle, Headphones, Play } from 'lucide-react';
import {
  FlashcardConcept,
  LanguageCode,
  LANGUAGES,
  DistractorItem,
} from '../data/starterDeck';
import {
  playPopSound,
  playStarSound,
  playTryAgainSound,
  speakText,
  VoiceEngineMode,
} from '../utils/sound';
import { getKoreanPhoneticSeparated } from '../utils/korean';

export type PracticeActivityType = 'missing-word' | 'listen-pick' | 'shadowing';

interface PracticeStageProps {
  card: FlashcardConcept;
  allCards: FlashcardConcept[];
  lang: LanguageCode;
  voiceEngine: VoiceEngineMode;
  isStarred: boolean;
  onEarnStar: (cardId: string) => void;
  onNextCard: () => void;
}

export const PracticeStage: React.FC<PracticeStageProps> = ({
  card,
  allCards,
  lang,
  voiceEngine,
  isStarred,
  onEarnStar,
  onNextCard,
}) => {
  const [activity, setActivity] = useState<PracticeActivityType>('missing-word');
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [shadowDone, setShadowDone] = useState(false);
  const [spokenFeedback, setSpokenFeedback] = useState<string | null>(null);
  const [userVoiceUrl, setUserVoiceUrl] = useState<string | null>(null);
  const [isPlayingUserVoice, setIsPlayingUserVoice] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const entry = card[lang];
  const langConfig = LANGUAGES[lang];

  // Helper for consistent romanized text (separated syllables for Korean)
  const getDisplayPhonetic = (word: string, phonetic: string) => {
    return lang === 'ko' ? getKoreanPhoneticSeparated(word, phonetic) : phonetic;
  };

  // Reset state when card, language, or activity changes
  useEffect(() => {
    setSelectedChoice(null);
    setIsCorrect(null);
    setIsRecording(false);
    setShadowDone(false);
    setSpokenFeedback(null);
    setUserVoiceUrl(null);
    setIsPlayingUserVoice(false);

    // Auto-speak prompt in Kid Voice when switching to Missing Word, Listen & Pick, or Shadowing
    const timer = setTimeout(() => {
      speakText(entry.word, lang, 'kid', voiceEngine);
    }, 180);

    return () => clearTimeout(timer);
  }, [card.id, lang, activity, entry.word, voiceEngine]);

  // Build 3 choices for "Tap the Missing Word"
  const missingWordChoices = useMemo(() => {
    const targetOption: DistractorItem & { isTarget: boolean } = {
      word: entry.word,
      phonetic: entry.phonetic,
      emoji: card.emoji,
      english: card.english,
      isTarget: true,
    };

    const distractors = (entry.practice.distractors || []).slice(0, 2).map((d) => ({
      ...d,
      isTarget: false,
    }));

    const combined = [targetOption, ...distractors];
    const seed = card.id.charCodeAt(0) + lang.charCodeAt(0);
    return combined.sort((a, b) =>
      ((a.word.charCodeAt(0) + seed) % 5) - ((b.word.charCodeAt(0) + seed) % 5)
    );
  }, [card.id, card.emoji, card.english, entry, lang]);

  // Build 4 picture cards for "Listen & Pick"
  const listenPickOptions = useMemo(() => {
    const others = allCards
      .filter((c) => c.id !== card.id)
      .sort(
        (a, b) =>
          ((a.id.charCodeAt(0) + card.id.length) % 7) -
          ((b.id.charCodeAt(0) + card.id.length) % 7)
      )
      .slice(0, 3);
    const allFour = [card, ...others];
    return allFour.sort(
      (a, b) =>
        ((a.english.charCodeAt(0) + lang.charCodeAt(0)) % 5) -
        ((b.english.charCodeAt(0) + lang.charCodeAt(0)) % 5)
    );
  }, [card, allCards, lang]);

  const handleChoiceTap = (choiceWord: string, isTarget: boolean) => {
    setSelectedChoice(choiceWord);
    speakText(choiceWord, lang, 'kid', voiceEngine);

    if (isTarget) {
      setIsCorrect(true);
      playStarSound();
      onEarnStar(card.id);
    } else {
      setIsCorrect(false);
      playTryAgainSound();
    }
  };

  const handleShadowMicTap = async () => {
    if (isRecording) {
      // Stop early if tapped again
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        mediaRecorderRef.current.stop();
      }
      return;
    }

    playPopSound();
    setIsRecording(true);
    setSpokenFeedback(null);
    setUserVoiceUrl(null);
    audioChunksRef.current = [];

    // Start recording real user audio
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
          if (event.data && event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
          if (blob.size > 200) {
            const url = URL.createObjectURL(blob);
            setUserVoiceUrl(url);
          }
          stream.getTracks().forEach((track) => track.stop());
        };

        mediaRecorder.start();
      }
    } catch {
      // Permission denied or unsupported — fall back gracefully
    }

    const SpeechRec =
      (window as unknown as { SpeechRecognition?: any; webkitSpeechRecognition?: any })
        .SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: any }).webkitSpeechRecognition;

    let finished = false;
    const finishShadowSuccess = (heardText?: string) => {
      if (finished) return;
      finished = true;
      setIsRecording(false);
      setShadowDone(true);
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        try {
          mediaRecorderRef.current.stop();
        } catch {}
      }
      if (heardText) {
        setSpokenFeedback(`Heard: “${heardText}”`);
      }
      playStarSound();
      onEarnStar(card.id);
    };

    const fallbackTimer = setTimeout(() => {
      finishShadowSuccess();
    }, 2800);

    if (SpeechRec) {
      try {
        const recognition = new SpeechRec();
        recognition.lang = langConfig.speechLang;
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onresult = (e: any) => {
          clearTimeout(fallbackTimer);
          const transcript = e.results?.[0]?.[0]?.transcript;
          finishShadowSuccess(transcript);
        };

        recognition.onerror = () => {};
        recognition.start();
      } catch {
        // Fallback timer handles completion gracefully
      }
    }
  };

  const handlePlayUserRecording = () => {
    if (!userVoiceUrl) return;
    setIsPlayingUserVoice(true);
    playPopSound();
    const audio = new Audio(userVoiceUrl);
    audio.onended = () => setIsPlayingUserVoice(false);
    audio.onerror = () => setIsPlayingUserVoice(false);
    audio.play().catch(() => setIsPlayingUserVoice(false));
  };

  return (
    <div className="rounded-3xl bg-white p-5 sm:p-7 border border-slate-200/90 shadow-sm">
      {/* Sub-navigation for the 3 Kid Practice Modes */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl w-full sm:w-auto">
          <button
            type="button"
            onClick={() => {
              playPopSound();
              setActivity('missing-word');
            }}
            className={`tactile-btn flex-1 sm:flex-initial min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 whitespace-nowrap transition-colors ${
              activity === 'missing-word'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Puzzle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>1. Missing Word</span>
          </button>

          <button
            type="button"
            onClick={() => {
              playPopSound();
              setActivity('listen-pick');
            }}
            className={`tactile-btn flex-1 sm:flex-initial min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 whitespace-nowrap transition-colors ${
              activity === 'listen-pick'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Ear className="w-4 h-4 text-sky-600 shrink-0" />
            <span>2. Listen & Pick</span>
          </button>

          <button
            type="button"
            onClick={() => {
              playPopSound();
              setActivity('shadowing');
            }}
            className={`tactile-btn flex-1 sm:flex-initial min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 whitespace-nowrap transition-colors ${
              activity === 'shadowing'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Mic className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>3. Say Out Loud</span>
          </button>
        </div>

        <div className="text-xs font-semibold text-slate-500">
          🧒 Kid Voice Active · Tap to Play
        </div>
      </div>

      {/* MODE 1: TAP THE MISSING WORD */}
      {activity === 'missing-word' && (
        <div
          className={`mt-5 rounded-3xl ${langConfig.softSurface} p-5 sm:p-7 border-2 ${langConfig.accentBorder} text-center`}
        >
          {/* Main target language sentence with blank */}
          <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-snug flex items-center justify-center flex-wrap gap-2">
            <span>{entry.practice.sentenceBefore}</span>
            <span
              className={`inline-flex items-center gap-1.5 px-4 py-1 rounded-2xl border-2 ${
                isCorrect
                  ? 'bg-emerald-100 border-emerald-500 text-emerald-900'
                  : 'bg-white border-dashed border-amber-400 text-amber-700'
              }`}
            >
              {isCorrect ? (
                <span>{entry.word}</span>
              ) : (
                <span className="font-extrabold text-2xl text-amber-700 px-2.5">?</span>
              )}
            </span>
            <span>{entry.practice.sentenceAfter}</span>
          </div>

          {/* Phonetic sentence BELOW target sentence */}
          {(entry.practice.sentenceBeforePhonetic || entry.phonetic) && (
            <p className="text-sm sm:text-base font-semibold text-amber-900/90 mt-2">
              {lang === 'ko'
                ? getKoreanPhoneticSeparated(entry.practice.sentenceBefore, entry.practice.sentenceBeforePhonetic)
                : entry.practice.sentenceBeforePhonetic}{' '}
              <span className="underline decoration-amber-500 font-bold text-slate-900">
                {isCorrect ? getDisplayPhonetic(entry.word, entry.phonetic) : '_____'}
              </span>{' '}
              {lang === 'ko'
                ? getKoreanPhoneticSeparated(entry.practice.sentenceAfter, entry.practice.sentenceAfterPhonetic)
                : entry.practice.sentenceAfterPhonetic}
            </p>
          )}

          {/* English translation BELOW phonetic reading */}
          <p className="mt-1.5 text-sm sm:text-base font-semibold text-slate-600">
            “{entry.practice.englishHint}”
          </p>

          {/* 3 Big Choice Cards RIGHT BELOW the English translation:
              Order inside each choice: Emoji -> Word -> Romanized reading below -> English below that */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {missingWordChoices.map((choice) => {
              const isChosen = selectedChoice === choice.word;
              const showRight = isChosen && choice.isTarget;
              const showWrong = isChosen && !choice.isTarget;
              const displayPhonetic = getDisplayPhonetic(choice.word, choice.phonetic);

              return (
                <button
                  key={choice.word}
                  type="button"
                  onClick={() => handleChoiceTap(choice.word, choice.isTarget)}
                  className={`tactile-btn min-h-[110px] p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-1 transition-all ${
                    showRight
                      ? 'bg-emerald-50 border-emerald-500 shadow-[0_5px_0_0_#059669]'
                      : showWrong
                      ? 'bg-rose-50 border-rose-400 shadow-[0_5px_0_0_#E11D48]'
                      : 'bg-white border-slate-200 hover:border-amber-400 shadow-[0_5px_0_0_#E2E8F0]'
                  }`}
                >
                  <span className="text-3xl" aria-hidden="true">
                    {choice.emoji}
                  </span>
                  <span className="font-display text-xl font-bold text-slate-900">
                    {choice.word}
                  </span>
                  <span className="text-xs font-bold text-amber-800">
                    {displayPhonetic}
                  </span>
                  <span className="text-xs font-medium text-slate-600">
                    {choice.english}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Listen to Full Sentence & Slow at the BOTTOM */}
          <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-center gap-3 flex-wrap">
            <button
              type="button"
              onClick={() =>
                speakText(
                  `${entry.practice.sentenceBefore}${entry.word}${entry.practice.sentenceAfter}`,
                  lang,
                  'kid',
                  voiceEngine
                )
              }
              className="tactile-btn inline-flex items-center gap-2 min-h-[46px] px-5 py-2 rounded-2xl bg-white border-2 border-slate-200 text-xs sm:text-sm font-bold text-slate-800 hover:bg-slate-50 shadow-sm"
            >
              <Volume2 className="w-4 h-4 text-amber-600" />
              <span>Listen to Full Sentence</span>
            </button>
            <button
              type="button"
              onClick={() =>
                speakText(
                  `${entry.practice.sentenceBefore}${entry.word}${entry.practice.sentenceAfter}`,
                  lang,
                  'kid',
                  voiceEngine,
                  undefined,
                  true
                )
              }
              className="tactile-btn inline-flex items-center gap-1.5 min-h-[46px] px-4 py-2 rounded-2xl bg-white border-2 border-slate-200 text-xs sm:text-sm font-bold text-slate-800 hover:bg-slate-50 shadow-sm"
            >
              <span>🐢 Slow</span>
            </button>
          </div>
        </div>
      )}

      {/* MODE 2: LISTEN & PICK */}
      {activity === 'listen-pick' && (
        <div
          className={`mt-5 rounded-3xl ${langConfig.softSurface} p-5 sm:p-7 border-2 ${langConfig.accentBorder} text-center`}
        >
          {/* Target learning word on TOP */}
          <div className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
            “{entry.word}”
          </div>
          {/* Romanized reading directly BELOW learning word */}
          <p className="text-sm sm:text-base font-bold text-amber-800 mt-1">
            {getDisplayPhonetic(entry.word, entry.phonetic)}
          </p>
          {/* English translation / instruction below */}
          <p className="mt-1 text-sm sm:text-base font-semibold text-slate-600">
            Listen and tap the matching picture below!
          </p>

          {/* 4 Picture Choice Cards RIGHT BELOW the prompt:
              Order: Emoji -> Word -> Romanized reading below -> English below that */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {listenPickOptions.map((item) => {
              const itemEntry = item[lang];
              const isTarget = item.id === card.id;
              const isChosen = selectedChoice === itemEntry.word;
              const showRight = isChosen && isTarget;
              const showWrong = isChosen && !isTarget;
              const itemPhonetic = getDisplayPhonetic(itemEntry.word, itemEntry.phonetic);

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleChoiceTap(itemEntry.word, isTarget)}
                  className={`tactile-btn min-h-[136px] p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-1 ${
                    showRight
                      ? 'bg-emerald-50 border-emerald-500 shadow-[0_5px_0_0_#059669]'
                      : showWrong
                      ? 'bg-rose-50 border-rose-400 shadow-[0_5px_0_0_#E11D48]'
                      : 'bg-white border-slate-200 hover:border-sky-400 shadow-[0_5px_0_0_#E2E8F0]'
                  }`}
                >
                  <span className="text-5xl" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <span className="font-display text-lg font-bold text-slate-900 mt-1">
                    {itemEntry.word}
                  </span>
                  <span className="text-xs font-bold text-amber-800">
                    {itemPhonetic}
                  </span>
                  <span className="text-xs font-medium text-slate-600">
                    {item.english}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Listen & Slow buttons at the BOTTOM */}
          <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-center gap-3 flex-wrap">
            <button
              type="button"
              onClick={() => speakText(entry.word, lang, 'kid', voiceEngine)}
              className={`tactile-btn min-h-[48px] px-6 py-2.5 rounded-2xl ${langConfig.accentButton} font-display text-sm sm:text-base font-bold flex items-center gap-2`}
            >
              <Volume2 className="w-5 h-5" />
              <span>Listen: “{entry.word}”</span>
            </button>
            <button
              type="button"
              onClick={() => speakText(entry.word, lang, 'kid', voiceEngine, undefined, true)}
              className="tactile-btn inline-flex items-center gap-1.5 min-h-[48px] px-4 py-2.5 rounded-2xl bg-white border-2 border-slate-200 text-xs sm:text-sm font-bold text-slate-800 hover:bg-slate-50 shadow-sm"
            >
              <span>🐢 Slow</span>
            </button>
          </div>
        </div>
      )}

      {/* MODE 3: REPEAT OUT LOUD (SHADOWING) */}
      {activity === 'shadowing' && (
        <div
          className={`mt-5 rounded-3xl ${langConfig.softSurface} p-5 sm:p-7 border-2 ${langConfig.accentBorder} text-center`}
        >
          <p className="text-xs font-semibold text-slate-600">
            Listen to the Kid Voice, then tap the big microphone and say it out loud!
          </p>

          <div className="mt-4 flex flex-col items-center">
            <div className="text-6xl mb-2" aria-hidden="true">
              {card.emoji}
            </div>
            {/* Learning word on TOP */}
            <div className="font-display text-4xl sm:text-5xl font-bold text-slate-900">
              {entry.word}
            </div>
            {/* Romanized reading directly BELOW learning word */}
            <div className="text-base font-bold text-amber-800 mt-1">
              {getDisplayPhonetic(entry.word, entry.phonetic)}
            </div>
            {/* English translation directly BELOW romanized reading */}
            <div className="text-sm font-semibold text-slate-600 mt-0.5">
              ({card.english})
            </div>

            <div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => handleShadowMicTap()}
                className={`tactile-btn min-h-[64px] px-8 py-3.5 rounded-2xl font-display text-xl font-bold text-white flex items-center gap-3 ${
                  isRecording
                    ? 'bg-rose-500 shadow-[0_5px_0_0_#BE123C] animate-pulse'
                    : 'bg-emerald-600 hover:bg-emerald-700 shadow-[0_5px_0_0_#065F46]'
                }`}
              >
                <Mic className="w-6 h-6" />
                <span>
                  {isRecording
                    ? 'Listening... Say it now! 🎙️'
                    : shadowDone
                    ? 'Awesome Voice! Say Again 🎤'
                    : 'Tap & Say Out Loud! 🎤'}
                </span>
              </button>

              {/* Requirement #7: Hear What I Said Button */}
              {userVoiceUrl && (
                <button
                  type="button"
                  onClick={handlePlayUserRecording}
                  disabled={isPlayingUserVoice}
                  className="tactile-btn min-h-[64px] px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 font-display text-lg font-bold text-white shadow-[0_5px_0_0_#B45309] flex items-center gap-2"
                >
                  <Headphones className="w-6 h-6" />
                  <span>{isPlayingUserVoice ? 'Playing... 🎵' : 'Listen 🎧'}</span>
                </button>
              )}
            </div>

            {spokenFeedback && (
              <p className="mt-3 text-xs font-semibold text-emerald-700">
                {spokenFeedback}
              </p>
            )}

            <div className="mt-6 pt-4 border-t border-slate-200/70 w-full flex items-center justify-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => speakText(entry.word, lang, 'kid', voiceEngine)}
                className="tactile-btn min-h-[46px] px-5 py-2 rounded-2xl border-2 border-slate-200 bg-white hover:bg-slate-50 font-display text-sm font-bold text-slate-800 flex items-center gap-2"
              >
                <Volume2 className="w-4 h-4 text-amber-600" />
                <span>Hear Kid Voice Again</span>
              </button>

              <button
                type="button"
                onClick={() => speakText(entry.word, lang, 'kid', voiceEngine, undefined, true)}
                className="tactile-btn min-h-[46px] px-4 py-2 rounded-2xl border-2 border-slate-200 bg-white hover:bg-slate-50 font-display text-sm font-bold text-slate-800 flex items-center gap-1.5"
              >
                <span>🐢 Slow</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Celebratory Feedback Banner when child gets it right or completes shadowing */}
      {(isCorrect === true || shadowDone) && (
        <div className="mt-5 rounded-2xl bg-emerald-50 border-2 border-emerald-400 p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
              <Check className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-display text-lg font-bold text-emerald-950">
                ¡Bravo! Great Job! ⭐ {isStarred ? 'Star Earned!' : ''}
              </p>
              <p className="text-xs text-emerald-800">
                {entry.word} ({getDisplayPhonetic(entry.word, entry.phonetic)}) = {card.english} {card.emoji}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              playPopSound();
              onNextCard();
            }}
            className="tactile-btn w-full sm:w-auto min-h-[48px] px-6 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-display text-base font-bold shadow-[0_4px_0_0_#065F46] flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4" />
            <span>Next Word →</span>
          </button>
        </div>
      )}

      {isCorrect === false && (
        <div className="mt-4 rounded-2xl bg-rose-50 border border-rose-200 p-3 text-center text-sm font-bold text-rose-800">
          Almost! Listen closely and tap another picture! 🎵
        </div>
      )}
    </div>
  );
};

