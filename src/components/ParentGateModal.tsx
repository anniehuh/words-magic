import React, { useState, useEffect } from 'react';
import { Lock, X } from 'lucide-react';
import { playPopSound, playTryAgainSound } from '../utils/sound';

interface ParentGateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const ParentGateModal: React.FC<ParentGateModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [numA, setNumA] = useState(4);
  const [numB, setNumB] = useState(3);
  const [errorShake, setErrorShake] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Default to 4 + 3 or similar simple sum between 5 and 9
      const pairs: Array<[number, number]> = [
        [4, 3],
        [5, 2],
        [3, 5],
        [6, 3],
        [4, 4],
      ];
      const chosen = pairs[Math.floor(Math.random() * pairs.length)];
      setNumA(chosen[0]);
      setNumB(chosen[1]);
      setErrorShake(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const correctAnswer = numA + numB;
  const choices = [4, 5, 6, 7, 8, 9, 10, 11];

  const handlePick = (val: number) => {
    if (val === correctAnswer) {
      playPopSound();
      onSuccess();
    } else {
      playTryAgainSound();
      setErrorShake(true);
      setTimeout(() => setErrorShake(false), 400);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div
        className={`w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl border border-slate-200 transition-transform ${
          errorShake ? 'translate-x-2' : ''
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-slate-900">
                Grown-Ups Only
              </h2>
              <p className="text-xs text-slate-500">
                Parent Gate · Protects streaks & custom decks
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100"
            aria-label="Close parent gate"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-center border border-slate-200/80">
          <p className="text-sm font-semibold text-slate-600">
            Tap the answer to unlock Parent Mode:
          </p>
          <p className="font-display text-4xl font-bold text-slate-900 mt-2 tabular-nums">
            What is {numA} + {numB}?
          </p>
          {errorShake && (
            <p className="text-xs font-semibold text-rose-600 mt-2">
              Oops! Ask a grown-up for help.
            </p>
          )}
        </div>

        <div className="mt-5 grid grid-cols-4 gap-2.5">
          {choices.map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => handlePick(num)}
              className="tactile-btn min-h-[56px] rounded-2xl border-2 border-slate-200 bg-white font-display text-2xl font-bold text-slate-800 hover:border-amber-400 hover:bg-amber-50 tabular-nums"
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
