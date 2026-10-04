/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  Volume2,
  Sparkles,
  Star,
  ChevronLeft,
  ChevronRight,
  Flame,
  MessageCircle,
  Gamepad2,
  BookOpen,
  Check,
  Play,
  Plus,
  Mic,
  Headphones,
} from 'lucide-react';
import {
  STARTER_DECK,
  LANGUAGES,
  LANGUAGE_ORDER,
  CATEGORIES,
  LanguageCode,
  CategoryId,
  FlashcardConcept,
} from './data/starterDeck';
import {
  unlockBrowserAudio,
  speakText,
  playPopSound,
  playStarSound,
  playQuestCompleteFanfare,
  VoiceEngineMode,
  prefetchCardAudio,
} from './utils/sound';
import { getKoreanPhoneticSeparated } from './utils/korean';
import { PracticeStage } from './components/PracticeStage';
import { SurpriseMeModal } from './components/SurpriseMeModal';
import { AddWordsModal } from './components/AddWordsModal';
import { PWAInstallButton } from './components/PWAInstallButton';
import { OfflineIndicator } from './components/OfflineIndicator';

const STORAGE_KEYS = {
  CUSTOM_CARDS: 'linguapals_custom_cards_v1',
  STREAK: 'linguapals_streak_days_v1',
  LAST_COMPLETED_DATE: 'linguapals_last_completed_date_v1',
  VOICE_ENGINE: 'linguapals_voice_engine_v3',
};

export default function App() {
  // Audio Unlock State ("Tap-to-Start" Rule for iOS/iPad Safari & Chrome)
  const [audioUnlocked, setAudioUnlocked] = useState<boolean>(false);

  // Selected Language ('ko' | 'zh' | 'es' — defaults to Korean per user request)
  const [lang, setLang] = useState<LanguageCode>('ko');

  // Custom AI-generated cards persisted in localStorage
  const [customCards, setCustomCards] = useState<FlashcardConcept[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CUSTOM_CARDS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Voice Engine Mode ('neural' = HD Kid Voice default, 'gemini' = AI Kid Voice, 'browser' = Offline Device Voice)
  const [voiceEngine, setVoiceEngine] = useState<VoiceEngineMode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.VOICE_ENGINE) as VoiceEngineMode | null;
      if (saved === 'neural' || saved === 'gemini' || saved === 'browser') {
        return saved;
      }
      return 'neural';
    } catch {
      return 'neural';
    }
  });

  // Daily cards goal count
  const [questGoalCount, setQuestGoalCount] = useState<number>(5);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [questCardIds, setQuestCardIds] = useState<string[]>(() =>
    STARTER_DECK.slice(0, 5).map((c) => c.id)
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Star progress for today's words
  const [starredIds, setStarredIds] = useState<string[]>([]);
  const [questCompleteBanner, setQuestCompleteBanner] = useState<boolean>(false);

  // Streak counter
  const [streakDays, setStreakDays] = useState<number>(() => {
    try {
      const saved = Number(localStorage.getItem(STORAGE_KEYS.STREAK));
      return Number.isFinite(saved) && saved > 0 ? saved : 3;
    } catch {
      return 3;
    }
  });

  // Active view mode ('learn' shows Flashcard + Kid Conversation, 'practice' shows Tap & Match)
  const [activeTab, setActiveTab] = useState<'learn' | 'practice'>('learn');
  const [showFullLibrary, setShowFullLibrary] = useState<boolean>(false);

  // Card voice recording & playback state (Requirement #7)
  const [isCardRecording, setIsCardRecording] = useState<boolean>(false);
  const [cardRecordedAudioUrl, setCardRecordedAudioUrl] = useState<string | null>(null);
  const [isPlayingCardVoice, setIsPlayingCardVoice] = useState<boolean>(false);
  const cardMediaRecorderRef = useRef<MediaRecorder | null>(null);
  const cardAudioChunksRef = useRef<Blob[]>([]);

  // Modals
  const [isSurpriseOpen, setIsSurpriseOpen] = useState<boolean>(false);
  const [isAddWordsOpen, setIsAddWordsOpen] = useState<boolean>(false);

  // Image fallback tracking
  const [brokenAvatars, setBrokenAvatars] = useState<Record<string, boolean>>({});

  // Combined library (built-in concepts + custom cards)
  const allCards = useMemo(
    () => [...customCards, ...STARTER_DECK],
    [customCards]
  );

  // Active cards for today
  const questCards = useMemo(() => {
    const resolved = questCardIds
      .map((id) => allCards.find((c) => c.id === id))
      .filter((c): c is FlashcardConcept => Boolean(c));
    return resolved.length > 0 ? resolved : allCards.slice(0, questGoalCount);
  }, [questCardIds, allCards, questGoalCount]);

  const currentCard = questCards[currentIndex] || questCards[0] || allCards[0];
  const currentEntry = currentCard[lang];
  const langConfig = LANGUAGES[lang];

  // Syllable separated Korean phonetic or standard phonetic
  const displayPhonetic = useMemo(() => {
    if (!currentEntry) return '';
    return lang === 'ko'
      ? getKoreanPhoneticSeparated(currentEntry.word, currentEntry.phonetic)
      : currentEntry.phonetic;
  }, [currentEntry, lang]);

  // Reset voice recording when card or language changes
  useEffect(() => {
    setCardRecordedAudioUrl(null);
    setIsCardRecording(false);
    setIsPlayingCardVoice(false);
  }, [currentCard.id, lang]);

  // Save custom cards
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_CARDS, JSON.stringify(customCards));
    } catch {
      // Ignore storage quota errors
    }
  }, [customCards]);

  // Save voice engine preference
  const handleChangeVoiceEngine = (mode: VoiceEngineMode) => {
    setVoiceEngine(mode);
    try {
      localStorage.setItem(STORAGE_KEYS.VOICE_ENGINE, mode);
    } catch {
      // Ignore
    }
  };

  // Pre-warm HD Kid Neural audio for current and next card
  useEffect(() => {
    if (!currentEntry || voiceEngine !== 'neural') return;
    const nextCard = questCards[(currentIndex + 1) % questCards.length];
    const toPrefetch = [
      currentEntry.word,
      currentEntry.dialogue.mom.text,
      currentEntry.dialogue.kid.text,
      nextCard ? nextCard[lang].word : '',
    ];
    prefetchCardAudio(toPrefetch, lang);
  }, [currentCard.id, currentIndex, questCards, lang, currentEntry, voiceEngine]);

  // Auto-play pronunciation whenever card or language changes (once audio is unlocked)
  useEffect(() => {
    if (!audioUnlocked || !currentEntry) return;
    const timer = setTimeout(() => {
      speakText(currentEntry.word, lang, 'kid', voiceEngine);
    }, 150);
    return () => clearTimeout(timer);
  }, [audioUnlocked, currentCard.id, lang, currentEntry, voiceEngine]);

  // Start Adventure (unlocks browser audio & speaks immediately)
  const handleStartAdventure = () => {
    unlockBrowserAudio();
    setAudioUnlocked(true);
    playStarSound();
    setTimeout(() => {
      speakText(currentEntry.word, lang, 'kid', voiceEngine);
    }, 120);
  };

  // Switch Language
  const handleSelectLanguage = (newLang: LanguageCode) => {
    if (!audioUnlocked) {
      unlockBrowserAudio();
      setAudioUnlocked(true);
    }
    playPopSound();
    setLang(newLang);
  };

  // Trigger celebration
  const triggerQuestCelebration = useCallback(() => {
    playQuestCompleteFanfare();
    setQuestCompleteBanner(true);

    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
      });
    } catch {
      // Fallback
    }

    const todayStr = new Date().toISOString().slice(0, 10);
    try {
      const lastDate = localStorage.getItem(STORAGE_KEYS.LAST_COMPLETED_DATE);
      if (lastDate !== todayStr) {
        const nextStreak = streakDays + 1;
        setStreakDays(nextStreak);
        localStorage.setItem(STORAGE_KEYS.STREAK, String(nextStreak));
        localStorage.setItem(STORAGE_KEYS.LAST_COMPLETED_DATE, todayStr);
      }
    } catch {
      setStreakDays((prev) => prev + 1);
    }

    setTimeout(() => {
      speakText(
        "Great job! You're done for today! See you tomorrow!",
        'en',
        'mom',
        false
      );
    }, 650);
  }, [streakDays]);

  // Earn a star for a card
  const handleEarnStar = useCallback(
    (cardId: string) => {
      if (!audioUnlocked) {
        unlockBrowserAudio();
        setAudioUnlocked(true);
      }
      setStarredIds((prev) => {
        if (prev.includes(cardId)) return prev;
        const updated = [...prev, cardId];
        if (updated.length >= questCards.length) {
          setTimeout(() => triggerQuestCelebration(), 250);
        }
        return updated;
      });
    },
    [audioUnlocked, questCards.length, triggerQuestCelebration]
  );

  // Requirement #7: Record Child's Voice and allow "Listen to What I Said" playback
  const handleCardMicTap = async () => {
    if (isCardRecording) {
      if (cardMediaRecorderRef.current && cardMediaRecorderRef.current.state === 'recording') {
        try {
          cardMediaRecorderRef.current.stop();
        } catch {}
      }
      return;
    }

    playPopSound();
    setIsCardRecording(true);
    setCardRecordedAudioUrl(null);
    cardAudioChunksRef.current = [];

    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        cardMediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
          if (event.data && event.data.size > 0) {
            cardAudioChunksRef.current.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const blob = new Blob(cardAudioChunksRef.current, { type: 'audio/webm' });
          if (blob.size > 200) {
            const url = URL.createObjectURL(blob);
            setCardRecordedAudioUrl(url);
          }
          stream.getTracks().forEach((track) => track.stop());
        };

        mediaRecorder.start();
      }
    } catch {
      // Permission denied or unsupported
    }

    setTimeout(() => {
      setIsCardRecording(false);
      if (cardMediaRecorderRef.current && cardMediaRecorderRef.current.state === 'recording') {
        try {
          cardMediaRecorderRef.current.stop();
        } catch {}
      }
      playStarSound();
      handleEarnStar(currentCard.id);
    }, 2800);
  };

  const handlePlayCardRecordedVoice = () => {
    if (!cardRecordedAudioUrl) return;
    setIsPlayingCardVoice(true);
    playPopSound();
    const audio = new Audio(cardRecordedAudioUrl);
    audio.onended = () => setIsPlayingCardVoice(false);
    audio.onerror = () => setIsPlayingCardVoice(false);
    audio.play().catch(() => setIsPlayingCardVoice(false));
  };

  // Apply "Pick Today's Words" Magic Wand (1-10 words + theme)
  const handleApplySurprise = (goalCount: number, category: CategoryId | 'all') => {
    if (!audioUnlocked) {
      unlockBrowserAudio();
      setAudioUnlocked(true);
    }
    setQuestGoalCount(goalCount);
    setSelectedCategory(category);

    const pool =
      category === 'all'
        ? [...allCards]
        : allCards.filter((c) => c.category === category);

    const sourcePool = pool.length >= goalCount ? pool : [...allCards];
    const shuffled = [...sourcePool].sort(() => Math.random() - 0.5);
    const chosen = shuffled.slice(0, goalCount).map((c) => c.id);

    setQuestCardIds(chosen);
    setCurrentIndex(0);
    setStarredIds([]);
    setQuestCompleteBanner(false);
  };

  // Add custom AI-generated word
  const handleAddCustomCard = (newCard: FlashcardConcept) => {
    setCustomCards((prev) => [newCard, ...prev]);
    setQuestCardIds((prev) => [newCard.id, ...prev.slice(0, Math.max(0, questGoalCount - 1))]);
    setCurrentIndex(0);
  };

  const handleDeleteCustomCard = (id: string) => {
    setCustomCards((prev) => prev.filter((c) => c.id !== id));
    setQuestCardIds((prev) => {
      const remaining = prev.filter((cid) => cid !== id);
      if (remaining.length === 0) {
        return STARTER_DECK.slice(0, questGoalCount).map((c) => c.id);
      }
      return remaining;
    });
    setCurrentIndex(0);
  };

  const handleResetQuestAndStreak = () => {
    setStarredIds([]);
    setQuestCompleteBanner(false);
    setCurrentIndex(0);
  };

  // Play both Mom and Kid dialogue lines sequentially
  const handlePlayBothDialogue = () => {
    if (!audioUnlocked) {
      unlockBrowserAudio();
      setAudioUnlocked(true);
    }
    const cleanMom = currentEntry.dialogue.mom.text.replace(/[!¡?¿"“”'‘’]/g, ' ').trim();
    const cleanKid = currentEntry.dialogue.kid.text.replace(/[!¡?¿"“”'‘’]/g, ' ').trim();
    speakText(cleanMom, lang, 'mom', voiceEngine, () => {
      setTimeout(() => {
        speakText(cleanKid, lang, 'kid', voiceEngine);
      }, 350);
    });
  };

  const isCurrentStarred = starredIds.includes(currentCard.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-slate-900">
      <OfflineIndicator />

      {/* Header: Words Magic Wordmark + 3 Tiles (Word & Talk, Tap & Match, + Add Words) */}
      <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-2.5 px-3 sm:px-8 py-3 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-slate-200/80">
        {/* Zone 1: Wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab('learn');
          }}
          className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 whitespace-nowrap flex items-center gap-2"
        >
          <span className="text-2xl" aria-hidden="true">🪄</span>
          <span>Words Magic</span>
        </a>

        {/* 3 Tiles Next to Each Other: Word & Talk, Tap & Match, + Add Words */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto max-w-full pb-0.5">
          {/* Tile 1: Word & Talk */}
          <button
            type="button"
            onClick={() => {
              playPopSound();
              setActiveTab('learn');
            }}
            className={`tactile-btn min-h-[42px] px-3 sm:px-4 py-1.5 rounded-2xl border-2 font-display text-xs sm:text-sm font-bold flex items-center gap-1.5 whitespace-nowrap transition-all ${
              activeTab === 'learn'
                ? 'bg-amber-200 text-amber-950 border-amber-300 shadow-[0_3px_0_0_#FCD34D]'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 shadow-[0_2px_0_0_#E2E8F0]'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-800" />
            <span>Word & Talk</span>
          </button>

          {/* Tile 2: Tap & Match */}
          <button
            type="button"
            onClick={() => {
              playPopSound();
              setActiveTab('practice');
            }}
            className={`tactile-btn min-h-[42px] px-3 sm:px-4 py-1.5 rounded-2xl border-2 font-display text-xs sm:text-sm font-bold flex items-center gap-1.5 whitespace-nowrap transition-all ${
              activeTab === 'practice'
                ? 'bg-emerald-500 text-white border-emerald-600 shadow-[0_3px_0_0_#065F46]'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 shadow-[0_2px_0_0_#E2E8F0]'
            }`}
          >
            <Gamepad2 className="w-4 h-4 text-emerald-600" />
            <span>Tap & Match</span>
          </button>

          {/* Tile 3: + Add Words */}
          <button
            type="button"
            onClick={() => {
              playPopSound();
              setIsAddWordsOpen(true);
            }}
            className="tactile-btn min-h-[42px] px-3 sm:px-4 py-1.5 rounded-2xl border-2 border-sky-300 bg-sky-50 hover:bg-sky-100 text-sky-950 font-display text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-[0_3px_0_0_#BAE6FD] whitespace-nowrap transition-all"
          >
            <Plus className="w-4 h-4 text-sky-600 stroke-[3]" />
            <span>+ Add Words</span>
          </button>

          <PWAInstallButton compact />
        </div>
      </header>

      {/* Main Content Container */}
      <main id="top" className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7 space-y-6">
        {/* Tap-to-Start Welcome Banner */}
        {!audioUnlocked && (
          <section className="rounded-3xl bg-amber-50/70 border-2 border-amber-200 p-5 sm:p-6 flex items-center justify-center text-center shadow-sm">
            <div className="flex items-center gap-4 text-center flex-col sm:flex-row">
              <div className="text-5xl shrink-0" aria-hidden="true">
                🚀
              </div>
              <div>
                <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                  Ready for Today’s Language Adventure?
                </h1>
                <p className="text-sm sm:text-base font-semibold text-slate-700 mt-1">
                  Tap the language button and voice button to start today's adventure 🚀
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 3. Inside language tile: Just keep the emoji and letter (Korean as "한글", Mandarin as "中文", Spanish as "Español") */}
        <section aria-label="Choose Language">
          <div className="grid grid-cols-3 gap-3 sm:gap-5">
            {LANGUAGE_ORDER.map((code) => {
              const cfg = LANGUAGES[code];
              const isSelected = lang === code;
              const displayLabel = code === 'ko' ? '한글' : code === 'zh' ? '中文' : 'Español';
              const displayEmoji = cfg.flag;

              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => handleSelectLanguage(code)}
                  className={`tactile-btn rounded-3xl py-4 sm:py-5 px-3 border-2 text-center transition-all flex flex-col sm:flex-row items-center justify-center gap-2.5 ${
                    isSelected
                      ? `${cfg.softSurface} ${cfg.accentBorder} shadow-[0_6px_0_0_rgba(15,23,42,0.12)] scale-[1.02]`
                      : 'bg-white border-slate-200/90 hover:border-slate-300 opacity-85 hover:opacity-100'
                  }`}
                >
                  <span className="text-3xl sm:text-4xl" aria-hidden="true">
                    {displayEmoji}
                  </span>
                  <span className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {displayLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 4. Just below language tile put voice choice */}
          <div className="mt-3.5 flex items-center justify-center">
            <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200/90 rounded-2xl shadow-sm w-full max-w-sm sm:max-w-md justify-between">
              {(
                [
                  { id: 'neural', label: '🧒 Kid Voice' },
                  { id: 'gemini', label: '🎭 AI Kid' },
                  { id: 'browser', label: '📱 Device' },
                ] as Array<{ id: VoiceEngineMode; label: string }>
              ).map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => {
                    playPopSound();
                    handleChangeVoiceEngine(v.id);
                    if (!audioUnlocked) {
                      unlockBrowserAudio();
                      setAudioUnlocked(true);
                    }
                    speakText(currentEntry.word, lang, 'kid', v.id);
                  }}
                  className={`flex-1 py-2 px-2 sm:px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center whitespace-nowrap ${
                    voiceEngine === v.id
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Pick today's Word tile on top and below there add Word & Talk and Tap & Match */}
        <section className="rounded-3xl bg-white p-5 sm:p-6 border-2 border-amber-200 shadow-sm text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">🪄</span>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                Pick Today’s Words
              </h2>
            </div>

            <button
              type="button"
              onClick={() => {
                playPopSound();
                handleApplySurprise(questGoalCount, selectedCategory);
              }}
              className="tactile-btn min-h-[44px] px-5 py-2 rounded-2xl bg-amber-200 hover:bg-amber-300 text-amber-950 font-display text-sm font-bold border-2 border-amber-300 shadow-[0_4px_0_0_#FCD34D] flex items-center justify-center gap-2 whitespace-nowrap self-center sm:self-auto transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>Shuffle Today’s Words! 🎲</span>
            </button>
          </div>

          {/* Centered Number Tiles 1 to 10 */}
          <div className="mt-4 flex items-center justify-center">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 max-w-full">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => {
                    playPopSound();
                    handleApplySurprise(num, selectedCategory);
                  }}
                  className={`min-w-[36px] sm:min-w-[42px] min-h-[36px] sm:min-h-[42px] rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold transition-all tabular-nums ${
                    questGoalCount === num
                      ? 'bg-amber-300 text-amber-950 shadow-[0_3px_0_0_#FCD34D] font-extrabold scale-110'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Chips (Verbs, Adjectives, Animals, Snacks, Colors, Family, Playground, Others) */}
          <div className="mt-3.5 flex items-center justify-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    playPopSound();
                    handleApplySurprise(questGoalCount, cat.id);
                  }}
                  className={`min-h-[36px] px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors shrink-0 ${
                    active
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Below Pick Today's Words tile: Word & Talk and Tap & Match */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl w-full max-w-md justify-between border border-slate-200/80 shadow-inner">
            <button
              type="button"
              onClick={() => {
                playPopSound();
                setActiveTab('learn');
              }}
              className={`flex-1 min-h-[46px] px-4 py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 whitespace-nowrap transition-all ${
                activeTab === 'learn'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>Word & Talk</span>
            </button>
            <button
              type="button"
              onClick={() => {
                playPopSound();
                setActiveTab('practice');
              }}
              className={`flex-1 min-h-[46px] px-4 py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 whitespace-nowrap transition-all ${
                activeTab === 'practice'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Gamepad2 className="w-4 h-4 text-emerald-600" />
              <span>Tap & Match</span>
            </button>
          </div>
        </div>

        {/* Quest Complete Celebration Banner */}
        {questCompleteBanner && (
          <section className="rounded-3xl bg-emerald-50 border-2 border-emerald-400 p-6 text-center shadow-sm">
            <div className="text-4xl mb-2" aria-hidden="true">
              🎉⭐⭐⭐⭐⭐🎉
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-emerald-950">
              Great job! You’re done for today! See you tomorrow!
            </h2>
            <p className="text-sm font-semibold text-emerald-800 mt-1 flex items-center justify-center gap-2">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>+1 Day Streak! You are now on a {streakDays}-day adventure streak!</span>
            </p>
            <div className="mt-4 flex items-center justify-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={() =>
                  speakText(
                    "Great job! You're done for today! See you tomorrow!",
                    'en',
                    'mom',
                    false
                  )
                }
                className="tactile-btn min-h-[46px] px-5 py-2.5 rounded-2xl bg-white border border-emerald-300 font-display text-sm font-bold text-emerald-900 flex items-center gap-2"
              >
                <Volume2 className="w-4 h-4" />
                <span>Hear Celebration</span>
              </button>
              <button
                type="button"
                onClick={() => setIsSurpriseOpen(true)}
                className="tactile-btn min-h-[46px] px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-display text-sm font-bold shadow-[0_4px_0_0_#065F46] flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Pick New Words to Keep Playing 🪄</span>
              </button>
            </div>
          </section>
        )}

        {/* MAIN STAGE: LEARN OR PRACTICE */}
        {activeTab === 'learn' ? (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* LEFT COLUMN (7 cols): Giant Kid-Friendly Audio Flashcard */}
            <div
              className={`lg:col-span-7 rounded-3xl ${langConfig.softSurface} border-2 ${langConfig.accentBorder} p-6 sm:p-8 flex flex-col justify-between relative`}
            >
              {/* Top Card Kicker: Card Counter & Category */}
              <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-bold text-slate-600">
                <span>
                  Card {currentIndex + 1} of {questCards.length} ·{' '}
                  {CATEGORIES.find((c) => c.id === currentCard.category)?.label || 'Word'}
                </span>
                <span className="font-semibold text-slate-500">
                  {lang === 'ko' ? '한글' : lang === 'zh' ? '中文' : 'Español'}
                </span>
              </div>

              {/* 6, 8, 9: Eliminate "Romanized Reading" label; put learning word on top, romanized reading below, English below that */}
              <div className="my-6 text-center flex flex-col items-center">
                {/* Giant Tap-to-Speak Emoji Picture */}
                <button
                  type="button"
                  onClick={() => {
                    if (!audioUnlocked) {
                      unlockBrowserAudio();
                      setAudioUnlocked(true);
                    }
                    speakText(currentEntry.word, lang, 'kid', voiceEngine);
                  }}
                  aria-label={`Listen to ${currentEntry.word}`}
                  className="tactile-btn w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-white border-2 border-slate-200/80 shadow-sm flex items-center justify-center text-7xl sm:text-8xl hover:scale-[1.02] transition-transform"
                >
                  {currentCard.emoji}
                </button>

                {/* Big Target Word on Top */}
                <h2 className="font-display text-5xl sm:text-6xl font-bold text-slate-900 mt-5 tracking-tight">
                  {currentEntry.word}
                </h2>

                {/* Romanized reading directly BELOW learning word (no "Romanized Reading" label!) */}
                <p className="font-sans text-xl sm:text-2xl font-bold text-amber-800 tracking-wide mt-2">
                  {displayPhonetic}
                </p>

                {/* English translation directly BELOW romanized reading */}
                <p className="text-lg sm:text-xl font-bold text-slate-600 mt-1">
                  {currentCard.english}
                </p>

                {/* Action Buttons: Listen + Slow + I Said It (with Requirement #7 Listen to What I Said) */}
                <div className="mt-6 flex items-center justify-center gap-2.5 flex-wrap w-full">
                  <button
                    type="button"
                    onClick={() => {
                      if (!audioUnlocked) {
                        unlockBrowserAudio();
                        setAudioUnlocked(true);
                      }
                      speakText(currentEntry.word, lang, 'kid', voiceEngine);
                    }}
                    className={`tactile-btn min-h-[56px] px-6 py-3 rounded-2xl ${langConfig.accentButton} font-display text-lg sm:text-xl font-bold flex items-center gap-2.5 whitespace-nowrap`}
                  >
                    <Volume2 className="w-6 h-6" />
                    <span>Listen: “{currentEntry.word}”</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (!audioUnlocked) {
                        unlockBrowserAudio();
                        setAudioUnlocked(true);
                      }
                      speakText(currentEntry.word, lang, 'kid', voiceEngine, undefined, true);
                    }}
                    title="Hear slow, clear pronunciation"
                    className="tactile-btn min-h-[56px] px-4 py-3 rounded-2xl border-2 border-slate-200 bg-white hover:bg-slate-50 font-display text-base font-bold text-slate-800 shadow-[0_4px_0_0_#CBD5E1] flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <span>🐢 Slow</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCardMicTap}
                    className={`tactile-btn min-h-[56px] px-5 py-3 rounded-2xl font-display text-base sm:text-lg font-bold border-2 flex items-center gap-2 whitespace-nowrap ${
                      isCardRecording
                        ? 'bg-rose-500 text-white border-rose-600 shadow-[0_4px_0_0_#9F1239] animate-pulse'
                        : isCurrentStarred
                        ? 'bg-emerald-600 text-white border-emerald-700 shadow-[0_4px_0_0_#065F46]'
                        : 'bg-white text-slate-900 border-amber-400 hover:bg-amber-50 shadow-[0_4px_0_0_#F59E0B]'
                    }`}
                  >
                    <Mic className="w-5 h-5" />
                    <span>
                      {isCardRecording
                        ? 'Listening... 🎙️'
                        : isCurrentStarred
                        ? 'Said It! ⭐'
                        : 'I Said It! 🎤'}
                    </span>
                  </button>

                  {/* Requirement #7: Listen to What I Said */}
                  {cardRecordedAudioUrl && (
                    <button
                      type="button"
                      onClick={handlePlayCardRecordedVoice}
                      disabled={isPlayingCardVoice}
                      className="tactile-btn min-h-[56px] px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-display text-base sm:text-lg font-bold shadow-[0_4px_0_0_#B45309] flex items-center gap-2 whitespace-nowrap"
                    >
                      <Headphones className="w-5 h-5" />
                      <span>{isPlayingCardVoice ? 'Playing... 🎵' : 'Listen 🎧'}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Bottom Prev / Practice / Next Bar */}
              <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => {
                    playPopSound();
                    setCurrentIndex((prev) =>
                      prev > 0 ? prev - 1 : questCards.length - 1
                    );
                  }}
                  className="tactile-btn min-h-[48px] px-4 py-2 rounded-2xl bg-white border border-slate-200 font-display text-sm font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Prev</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playPopSound();
                    setActiveTab('practice');
                  }}
                  className="tactile-btn min-h-[48px] px-4 py-2 rounded-2xl bg-white border border-slate-200 font-display text-sm font-bold text-emerald-800 hover:bg-emerald-50 flex items-center gap-1.5"
                >
                  <Gamepad2 className="w-4 h-4 text-emerald-600" />
                  <span>Play Tap & Match</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playPopSound();
                    setCurrentIndex((prev) =>
                      prev < questCards.length - 1 ? prev + 1 : 0
                    );
                  }}
                  className="tactile-btn min-h-[48px] px-4 py-2 rounded-2xl bg-slate-900 text-white font-display text-sm font-bold hover:bg-slate-800 flex items-center gap-1.5"
                >
                  <span>Next</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN (5 cols): Everyday Kid Conversation */}
            <div className="lg:col-span-5 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-amber-600" />
                    <h3 className="font-display text-xl font-bold text-slate-900">
                      Everyday Kid Talk
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={handlePlayBothDialogue}
                    className="tactile-btn min-h-[40px] px-3.5 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 text-xs font-bold flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Play Both Lines</span>
                  </button>
                </div>

                <div className="mt-4 space-y-4">
                  {/* Speaker A: Mom — Learning text on top, Romanized reading below, English below */}
                  <button
                    type="button"
                    onClick={() => {
                      if (!audioUnlocked) {
                        unlockBrowserAudio();
                        setAudioUnlocked(true);
                      }
                      const cleanMom = currentEntry.dialogue.mom.text.replace(/[!¡?¿"“”'‘’]/g, ' ').trim();
                      speakText(
                        cleanMom,
                        lang,
                        'mom',
                        voiceEngine
                      );
                    }}
                    className="tactile-btn w-full text-left rounded-2xl bg-amber-50/80 hover:bg-amber-100/70 border border-amber-200 p-4 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl" aria-hidden="true">
                          👩
                        </span>
                        <span className="font-display text-sm font-bold text-amber-950">
                          Speaker A · Mom
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800">
                        <Volume2 className="w-4 h-4" />
                        <span>Tap to Listen</span>
                      </span>
                    </div>

                    {/* Learning text on TOP */}
                    <p className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-2 leading-snug">
                      “{currentEntry.dialogue.mom.text}”
                    </p>
                    {/* Romanized reading directly BELOW learning text */}
                    <p className="mt-1 text-xs font-bold text-amber-800">
                      {lang === 'ko'
                        ? getKoreanPhoneticSeparated(currentEntry.dialogue.mom.text, currentEntry.dialogue.mom.phonetic)
                        : currentEntry.dialogue.mom.phonetic}
                    </p>
                    {/* English translation directly BELOW romanized reading */}
                    <p className="text-xs font-medium text-slate-600 mt-0.5">
                      “{currentEntry.dialogue.mom.english}”
                    </p>
                  </button>

                  {/* Speaker B: Kid — Learning text on top, Romanized reading below, English below */}
                  <button
                    type="button"
                    onClick={() => {
                      if (!audioUnlocked) {
                        unlockBrowserAudio();
                        setAudioUnlocked(true);
                      }
                      const cleanKid = currentEntry.dialogue.kid.text.replace(/[!¡?¿"“”'‘’]/g, ' ').trim();
                      speakText(
                        cleanKid,
                        lang,
                        'kid',
                        voiceEngine
                      );
                      handleEarnStar(currentCard.id);
                    }}
                    className="tactile-btn w-full text-left rounded-2xl bg-sky-50/80 hover:bg-sky-100/70 border border-sky-200 p-4 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl" aria-hidden="true">
                          🧒
                        </span>
                        <span className="font-display text-sm font-bold text-sky-950">
                          Speaker B · Kid
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-sky-800">
                        <Volume2 className="w-4 h-4" />
                        <span>Tap to Listen</span>
                      </span>
                    </div>

                    {/* Learning text on TOP */}
                    <p className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-2 leading-snug">
                      “{currentEntry.dialogue.kid.text}”
                    </p>
                    {/* Romanized reading directly BELOW learning text */}
                    <p className="mt-1 text-xs font-bold text-sky-800">
                      {lang === 'ko'
                        ? getKoreanPhoneticSeparated(currentEntry.dialogue.kid.text, currentEntry.dialogue.kid.phonetic)
                        : currentEntry.dialogue.kid.phonetic}
                    </p>
                    {/* English translation directly BELOW romanized reading */}
                    <p className="text-xs font-medium text-slate-600 mt-0.5">
                      “{currentEntry.dialogue.kid.english}”
                    </p>
                  </button>
                </div>
              </div>

              {/* Prompt to jump straight to Tap & Match */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-slate-500">
                  Ready to play with “{currentEntry.word}”?
                </span>
                <button
                  type="button"
                  onClick={() => {
                    playPopSound();
                    setActiveTab('practice');
                  }}
                  className="tactile-btn min-h-[44px] px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display text-sm font-bold shadow-[0_3px_0_0_#065F46] flex items-center gap-1.5 whitespace-nowrap"
                >
                  <Gamepad2 className="w-4 h-4" />
                  <span>Tap & Match Game →</span>
                </button>
              </div>
            </div>
          </section>
        ) : (
          /* Practice Mode: "Tap & Match" */
          <PracticeStage
            card={currentCard}
            allCards={allCards}
            lang={lang}
            voiceEngine={voiceEngine}
            isStarred={isCurrentStarred}
            onEarnStar={handleEarnStar}
            onNextCard={() => {
              setCurrentIndex((prev) =>
                prev < questCards.length - 1 ? prev + 1 : 0
              );
            }}
          />
        )}

        {/* 1. Explore Themes Section (with Verbs, Adjectives, Others added) */}
        <section className="pt-4 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-xl font-bold text-slate-900">
                Explore Themes ({allCards.length} {langConfig.name} Cards)
              </h2>
              <p className="text-xs text-slate-500">
                Tap any picture below to jump to that word, or filter by category.
              </p>
            </div>

            {/* Category Filter Bar + All Cards Toggle */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat.id;
                const count =
                  cat.id === 'all'
                    ? allCards.length
                    : allCards.filter((c) => c.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      playPopSound();
                      handleApplySurprise(questGoalCount, cat.id);
                    }}
                    className={`min-h-[40px] px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors shrink-0 ${
                      active
                        ? 'bg-slate-900 text-white'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.label}</span>
                    <span className="opacity-70 tabular-nums">({count})</span>
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => {
                  playPopSound();
                  setShowFullLibrary((prev) => !prev);
                }}
                className={`min-h-[40px] px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors shrink-0 border ${
                  showFullLibrary
                    ? 'bg-amber-500 text-white border-amber-600'
                    : 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100'
                }`}
              >
                {showFullLibrary
                  ? `Showing All ${
                      selectedCategory === 'all'
                        ? allCards.length
                        : allCards.filter((c) => c.category === selectedCategory).length
                    } Cards`
                  : `Browse All ${allCards.length} Cards`}
              </button>

              <button
                type="button"
                onClick={() => {
                  playPopSound();
                  setIsAddWordsOpen(true);
                }}
                className="min-h-[40px] px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors shrink-0 bg-sky-50 border border-sky-300 text-sky-900 hover:bg-sky-100 flex items-center gap-1.5 shadow-sm"
              >
                <Plus className="w-3.5 h-3.5 text-sky-600 stroke-[3]" />
                <span>+ Add Word</span>
              </button>
            </div>
          </div>

          {/* Cards Strip: Word on top -> Romanized reading below -> English translation below */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-3">
            {(showFullLibrary
              ? selectedCategory === 'all'
                ? allCards
                : allCards.filter((c) => c.category === selectedCategory)
              : questCards
            ).map((item) => {
              const itemEntry = item[lang];
              const isSelected = item.id === currentCard.id;
              const earned = starredIds.includes(item.id);
              const itemPhonetic =
                lang === 'ko'
                  ? getKoreanPhoneticSeparated(itemEntry.word, itemEntry.phonetic)
                  : itemEntry.phonetic;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    playPopSound();
                    const existingIdx = questCards.findIndex((q) => q.id === item.id);
                    if (existingIdx >= 0) {
                      setCurrentIndex(existingIdx);
                    } else {
                      setQuestCardIds((prev) => [
                        item.id,
                        ...prev.slice(0, Math.max(0, questGoalCount - 1)),
                      ]);
                      setCurrentIndex(0);
                    }
                    if (!audioUnlocked) {
                      unlockBrowserAudio();
                      setAudioUnlocked(true);
                    }
                    speakText(itemEntry.word, lang, 'kid', voiceEngine);
                  }}
                  className={`tactile-btn p-3.5 rounded-2xl border-2 text-left transition-all flex items-center justify-between gap-2 ${
                    isSelected
                      ? `${langConfig.softSurface} ${langConfig.accentBorder} shadow-sm`
                      : 'bg-white border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-3xl shrink-0" aria-hidden="true">
                      {item.emoji}
                    </span>
                    <div className="min-w-0">
                      {/* Learning word on TOP */}
                      <div className="font-display text-base font-bold text-slate-900 truncate">
                        {itemEntry.word}
                      </div>
                      {/* Romanized reading directly BELOW learning word */}
                      <div className="text-[11px] font-bold text-amber-800 truncate">
                        {itemPhonetic}
                      </div>
                      {/* English translation directly BELOW romanized reading */}
                      <div className="text-[11px] text-slate-500 truncate">
                        {item.english}
                      </div>
                    </div>
                  </div>
                  {earned && (
                    <Star className="w-4 h-4 text-amber-500 fill-amber-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </section>
      </main>

      {/* Modals */}
      <SurpriseMeModal
        isOpen={isSurpriseOpen}
        currentGoalCount={questGoalCount}
        currentCategory={selectedCategory}
        onClose={() => setIsSurpriseOpen(false)}
        onApplySurprise={handleApplySurprise}
      />

      {/* 2. Add Words Modal */}
      <AddWordsModal
        isOpen={isAddWordsOpen}
        onClose={() => setIsAddWordsOpen(false)}
        allCards={allCards}
        voiceEngine={voiceEngine}
        onChangeVoiceEngine={handleChangeVoiceEngine}
        onAddCustomCard={handleAddCustomCard}
        onDeleteCustomCard={handleDeleteCustomCard}
        onResetQuestAndStreak={handleResetQuestAndStreak}
        streakDays={streakDays}
      />
    </div>
  );
}

