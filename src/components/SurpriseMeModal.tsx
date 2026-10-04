import React, { useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import { CATEGORIES, CategoryId } from '../data/starterDeck';
import { playPopSound, playStarSound } from '../utils/sound';

interface SurpriseMeModalProps {
  isOpen: boolean;
  currentGoalCount: number;
  currentCategory: CategoryId | 'all';
  onClose: () => void;
  onApplySurprise: (goalCount: number, category: CategoryId | 'all') => void;
}

export const SurpriseMeModal: React.FC<SurpriseMeModalProps> = ({
  isOpen,
  currentGoalCount,
  currentCategory,
  onClose,
  onApplySurprise,
}) => {
  const [wordCount, setWordCount] = useState<number>(currentGoalCount);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>(currentCategory);

  if (!isOpen) return null;

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleConfirm = () => {
    playStarSound();
    onApplySurprise(wordCount, selectedCategory);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl rounded-3xl bg-[#FFFDF9] p-6 md:p-7 shadow-2xl border-2 border-amber-300 max-h-[92vh] overflow-y-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl" aria-hidden="true">🪄</span>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                Surprise Me Today!
              </h2>
              <p className="text-sm text-slate-600">
                Pick how many words and choose a fun adventure theme!
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-2xl bg-slate-100 text-slate-600 hover:bg-slate-200"
            aria-label="Close magic wand modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Choose 1 to 10 words */}
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <span className="font-display text-lg font-bold text-slate-900">
              1. How many words today? (1–10)
            </span>
            <span className="text-sm font-semibold text-amber-800 tabular-nums">
              {wordCount} {wordCount === 1 ? 'Star ⭐' : 'Stars ⭐'}
            </span>
          </div>
          <div className="mt-3 grid grid-cols-5 sm:grid-cols-10 gap-2">
            {numbers.map((num) => {
              const active = wordCount === num;
              return (
                <button
                  key={num}
                  type="button"
                  onClick={() => {
                    playPopSound();
                    setWordCount(num);
                  }}
                  className={`tactile-btn min-h-[52px] rounded-2xl font-display text-xl font-bold tabular-nums border-2 transition-colors ${
                    active
                      ? 'bg-amber-500 text-white border-amber-600 shadow-[0_4px_0_0_#B45309]'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-amber-300'
                  }`}
                >
                  {num}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Choose Theme */}
        <div className="mt-6">
          <span className="font-display text-lg font-bold text-slate-900 block">
            2. Pick Today’s Theme
          </span>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    playPopSound();
                    setSelectedCategory(cat.id);
                  }}
                  className={`tactile-btn flex flex-col items-start p-4 rounded-2xl border-2 text-left transition-colors ${
                    active
                      ? 'bg-amber-50 border-amber-500 shadow-[0_4px_0_0_#D97706]'
                      : 'bg-white border-slate-200 hover:border-amber-300'
                  }`}
                >
                  <span className="text-3xl mb-1.5" aria-hidden="true">
                    {cat.emoji}
                  </span>
                  <span className="font-display text-base font-bold text-slate-900">
                    {cat.label}
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                    {cat.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={handleConfirm}
          className="tactile-btn mt-7 w-full min-h-[58px] rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-display text-xl font-bold shadow-[0_5px_0_0_#B45309] flex items-center justify-center gap-2.5"
        >
          <Sparkles className="w-6 h-6" />
          <span>Pick Today’s {wordCount} {wordCount === 1 ? 'Word' : 'Words'}! 🪄</span>
        </button>
      </div>
    </div>
  );
};
