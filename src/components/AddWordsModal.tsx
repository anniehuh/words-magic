import React, { useState } from 'react';
import {
  Mic,
  Plus,
  RotateCcw,
  Sparkles,
  Trash2,
  Volume2,
  X,
  CheckCircle2,
  Loader2,
  Download,
} from 'lucide-react';
import {
  CATEGORIES,
  CategoryId,
  FlashcardConcept,
  LANGUAGES,
  LANGUAGE_ORDER,
} from '../data/starterDeck';
import {
  playPopSound,
  playStarSound,
  speakText,
  VoiceEngineMode,
  getAvailableBrowserVoices,
  getPreferredBrowserVoice,
  setPreferredBrowserVoice,
} from '../utils/sound';
import { getKoreanPhoneticSeparated } from '../utils/korean';
import { PWAInstallButton } from './PWAInstallButton';

interface AddWordsModalProps {
  isOpen: boolean;
  onClose: () => void;
  allCards: FlashcardConcept[];
  voiceEngine: VoiceEngineMode;
  onChangeVoiceEngine: (mode: VoiceEngineMode) => void;
  onAddCustomCard: (card: FlashcardConcept) => void;
  onDeleteCustomCard: (id: string) => void;
  onResetQuestAndStreak: () => void;
  streakDays: number;
}

export const AddWordsModal: React.FC<AddWordsModalProps> = ({
  isOpen,
  onClose,
  allCards,
  voiceEngine,
  onChangeVoiceEngine,
  onAddCustomCard,
  onDeleteCustomCard,
  onResetQuestAndStreak,
  streakDays,
}) => {
  const [englishInput, setEnglishInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('snacks');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isListeningVoice, setIsListeningVoice] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [lastCreatedCard, setLastCreatedCard] = useState<FlashcardConcept | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const [, setVoiceRefreshTick] = useState(0);

  if (!isOpen) return null;

  const handleVoiceInput = () => {
    const SpeechRec =
      (window as unknown as { SpeechRecognition?: any; webkitSpeechRecognition?: any })
        .SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: any }).webkitSpeechRecognition;

    if (!SpeechRec) {
      setErrorMsg('Voice dictation is not supported on this browser. Please type the English word.');
      return;
    }

    try {
      const recognition = new SpeechRec();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      setIsListeningVoice(true);
      setErrorMsg(null);

      recognition.onresult = (event: any) => {
        const transcript = event.results?.[0]?.[0]?.transcript || '';
        if (transcript) {
          setEnglishInput(transcript.replace(/[.!?]/g, '').trim());
        }
        setIsListeningVoice(false);
      };

      recognition.onerror = () => {
        setIsListeningVoice(false);
      };

      recognition.onend = () => {
        setIsListeningVoice(false);
      };

      recognition.start();
    } catch {
      setIsListeningVoice(false);
    }
  };

  const handleGenerateCard = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = englishInput.trim();
    if (!trimmed || isGenerating) return;

    // Check if already in starter deck (case-insensitive)
    const existing = allCards.find(
      (c) => c.english.toLowerCase() === trimmed.toLowerCase()
    );
    if (existing) {
      setLastCreatedCard(existing);
      setEnglishInput('');
      playStarSound();
      return;
    }

    setIsGenerating(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/generate-word', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          englishWord: trimmed,
          category: selectedCategory,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.card) {
        throw new Error(data.error || 'Could not generate card right now.');
      }

      onAddCustomCard(data.card);
      setLastCreatedCard(data.card);
      setEnglishInput('');
      playStarSound();
    } catch (err: any) {
      setErrorMsg(err?.message || 'Failed to generate card. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const customCards = allCards.filter((c) => c.isCustom);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-3xl rounded-3xl bg-white p-6 md:p-8 shadow-2xl border-2 border-sky-100 max-h-[92vh] overflow-y-auto text-black">
        {/* Header: Purely "Add Words" */}
        <div className="flex items-center justify-between pb-4 border-b border-sky-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-sky-100 border border-sky-200 flex items-center justify-center text-2xl shadow-sm text-sky-600 shrink-0">
              ➕
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-black">
                Add Words
              </h2>
              <p className="text-sm font-medium text-black">
                Type or speak any word to add it instantly to your deck ({allCards.length} words in library)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-2xl bg-sky-50 text-black hover:bg-sky-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Section 1: One-Word Voice/Text Box (White Background with Black Font) */}
        <div className="mt-6 rounded-3xl bg-white p-5 md:p-6 border-2 border-sky-200 shadow-sm text-black">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="font-display text-lg font-bold text-black flex items-center gap-2">
              <span className="w-7 h-7 rounded-xl bg-sky-200/80 text-black flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-black" />
              </span>
              <span>Make a New Flashcard</span>
            </h3>
            <span className="text-xs font-semibold text-black bg-sky-100/90 px-2.5 py-1 rounded-full border border-sky-200">
              Auto-creates Korean (한글), Mandarin (中文), Spanish & Kid Talk
            </span>
          </div>

          <form onSubmit={handleGenerateCard} className="mt-4 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1 flex items-center">
              <input
                type="text"
                value={englishInput}
                onChange={(e) => setEnglishInput(e.target.value)}
                placeholder='Type or speak 1 English word (e.g., "Ice cream", "Dinosaur")'
                className="w-full min-h-[48px] rounded-2xl border-2 border-sky-300 bg-white pl-4 pr-12 py-2.5 text-base font-medium text-black placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:outline-none transition-all shadow-sm"
              />
              <button
                type="button"
                onClick={handleVoiceInput}
                title="Dictate English word with microphone"
                className={`absolute right-2 w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                  isListeningVoice
                    ? 'bg-rose-500 text-white animate-pulse'
                    : 'bg-sky-100 text-black hover:bg-sky-200'
                }`}
              >
                <Mic className="w-4 h-4 text-black" />
              </button>
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as CategoryId)}
              aria-label="Word Category"
              className="min-h-[48px] rounded-2xl border-2 border-sky-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-black focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:outline-none transition-all shadow-sm"
            >
              {CATEGORIES.filter((c) => c.id !== 'all').map((cat) => (
                <option key={cat.id} value={cat.id} className="text-black">
                  {cat.emoji} {cat.label}
                </option>
              ))}
            </select>

            <button
              type="submit"
              disabled={isGenerating || !englishInput.trim()}
              className="tactile-btn min-h-[48px] rounded-2xl bg-sky-500 hover:bg-sky-600 disabled:opacity-50 px-5 py-2.5 text-sm font-bold text-white flex items-center justify-center gap-2 whitespace-nowrap shrink-0 shadow-[0_3px_0_0_#0284C7] active:translate-y-0.5 transition-all"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Making Card...</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 stroke-[3] text-white" />
                  <span>Add Word</span>
                </>
              )}
            </button>
          </form>

          {/* Quick 1-Tap Suggestion Buttons in Black Text */}
          <div className="mt-3.5 flex items-center gap-2 flex-wrap text-xs text-black">
            <span className="font-semibold text-black">Quick ideas:</span>
            {['Dinosaur', 'Rainbow', 'Train', 'Watermelon', 'Butterfly'].map((idea) => (
              <button
                key={idea}
                type="button"
                onClick={() => setEnglishInput(idea)}
                className="px-2.5 py-1 rounded-xl bg-white hover:bg-sky-100 text-black border border-sky-200 font-semibold shadow-xs transition-colors"
              >
                +{idea}
              </button>
            ))}
          </div>

          {errorMsg && (
            <p className="mt-3 text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-2 rounded-xl border border-rose-200">
              {errorMsg}
            </p>
          )}

          {lastCreatedCard && (
            <div className="mt-4 rounded-2xl bg-white p-4 border-2 border-sky-300 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="font-display font-bold text-black">
                    Added “{lastCreatedCard.english}” {lastCreatedCard.emoji} to Deck!
                  </span>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-sm">
                {LANGUAGE_ORDER.map((code) => {
                  const entryItem = lastCreatedCard[code];
                  const displayPhon =
                    code === 'ko'
                      ? getKoreanPhoneticSeparated(entryItem.word, entryItem.phonetic)
                      : entryItem.phonetic;

                  return (
                    <button
                      key={code}
                      type="button"
                      onClick={() =>
                        speakText(entryItem.word, code, 'kid', voiceEngine)
                      }
                      className="flex items-center justify-between p-2.5 rounded-xl bg-sky-50/60 hover:bg-sky-100/70 border border-sky-200 text-left transition-colors"
                    >
                      <div>
                        {/* Word on top */}
                        <div className="font-display text-base font-bold text-black">
                          {entryItem.word}
                        </div>
                        {/* Romanized reading below */}
                        <div className="text-xs font-semibold text-black">
                          {displayPhon}
                        </div>
                        {/* Language label below */}
                        <div className="text-xs text-black/75">
                          {LANGUAGES[code].flag} {code === 'ko' ? '한글' : code === 'zh' ? '中文' : 'Español'}
                        </div>
                      </div>
                      <Volume2 className="w-4 h-4 text-sky-600 shrink-0" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Section 2: Voice Choice & Progress */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white p-5 border border-slate-200">
            <h3 className="font-display text-base font-bold text-slate-900">
              Kid Voice Settings
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Select your favorite voice engine for Korean, Mandarin, and Spanish.
            </p>
            <div className="mt-3 grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl">
              <button
                type="button"
                onClick={() => {
                  playPopSound();
                  onChangeVoiceEngine('neural');
                }}
                className={`py-2 px-2.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                  voiceEngine === 'neural'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🧒 Kid Voice
              </button>
              <button
                type="button"
                onClick={() => {
                  playPopSound();
                  onChangeVoiceEngine('gemini');
                }}
                className={`py-2 px-2.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                  voiceEngine === 'gemini'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🎭 AI Kid Voice
              </button>
              <button
                type="button"
                onClick={() => {
                  playPopSound();
                  onChangeVoiceEngine('browser');
                }}
                className={`py-2 px-2.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                  voiceEngine === 'browser'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                📱 Offline Device
              </button>
            </div>

            {voiceEngine === 'browser' && (
              <div className="mt-3 space-y-2 border-t border-slate-100 pt-3">
                <p className="text-[11px] text-slate-500">
                  Device voice override:
                </p>
                {LANGUAGE_ORDER.map((code) => {
                  const voices = getAvailableBrowserVoices(code);
                  if (voices.length === 0) return null;
                  return (
                    <div key={code} className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-semibold text-slate-700 shrink-0">
                        {LANGUAGES[code].flag} {LANGUAGES[code].name}:
                      </span>
                      <select
                        value={getPreferredBrowserVoice(code)}
                        onChange={(e) => {
                          setPreferredBrowserVoice(code, e.target.value);
                          setVoiceRefreshTick((t) => t + 1);
                          speakText(LANGUAGES[code].greeting, code, 'word', 'browser');
                        }}
                        className="flex-1 max-w-[220px] rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-800 truncate"
                      >
                        <option value="">Auto Best Voice</option>
                        {voices.map((v) => (
                          <option key={v.voiceURI} value={v.voiceURI}>
                            {v.name} ({v.lang})
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="rounded-2xl bg-white p-5 border border-slate-200 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-base font-bold text-slate-900">
                Deck & Streak Progress
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Current Streak: <strong className="text-slate-800 tabular-nums">{streakDays} {streakDays === 1 ? 'Day' : 'Days'}</strong> · Total Cards: <strong className="text-slate-800 tabular-nums">{allCards.length} Words</strong>
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href="/words-magic-source.zip"
                  download="words-magic-source.zip"
                  className="tactile-btn min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 flex items-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Code (.ZIP)</span>
                </a>
                <PWAInstallButton />
              </div>
              {!confirmReset ? (
                <button
                  type="button"
                  onClick={() => setConfirmReset(true)}
                  className="min-h-[44px] px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Today’s Stars</span>
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      onResetQuestAndStreak();
                      setConfirmReset(false);
                    }}
                    className="min-h-[40px] px-3 py-1.5 rounded-xl bg-rose-600 text-white text-xs font-bold"
                  >
                    Confirm Reset
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmReset(false)}
                    className="min-h-[40px] px-2.5 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Custom Words List (if any) */}
        {customCards.length > 0 && (
          <div className="mt-6">
            <h3 className="font-display text-base font-bold text-slate-900">
              Your Custom Added Words ({customCards.length})
            </h3>
            <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {customCards.map((card) => (
                <div
                  key={card.id}
                  className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{card.emoji}</span>
                    <div>
                      <div className="font-display font-bold text-sm text-slate-900">
                        {card.english}
                      </div>
                      <div className="text-xs text-slate-500">
                        {card.ko.word} ({getKoreanPhoneticSeparated(card.ko.word, card.ko.phonetic)}) · {card.zh.word} ({card.zh.phonetic}) · {card.es.word}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onDeleteCustomCard(card.id)}
                    className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-xl text-rose-500 hover:bg-rose-50"
                    aria-label={`Delete ${card.english}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
