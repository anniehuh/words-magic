import React, { useState } from 'react';
import { Download, Smartphone, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  if (isInstalled) {
    return null;
  }

  return (
    <>
      {isInstallable ? (
        <button
          type="button"
          onClick={install}
          className="tactile-btn min-h-[44px] flex items-center gap-2 rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-slate-800 whitespace-nowrap shrink-0"
        >
          <Download className="w-4 h-4 shrink-0" />
          <span>{compact ? 'Install App' : 'Add to Home Screen'}</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setShowGuide(true)}
          className="tactile-btn min-h-[44px] flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 whitespace-nowrap shrink-0"
        >
          <Smartphone className="w-4 h-4 text-amber-600 shrink-0" />
          <span>{isIOS ? 'Install on iPad/iPhone' : 'Full-Screen App Guide'}</span>
        </button>
      )}

      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-bold text-slate-900">
                Kid-Safe Full-Screen Mode 📱
              </h3>
              <button
                type="button"
                onClick={() => setShowGuide(false)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100"
                aria-label="Close guide"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Add <strong>LinguaPals Kids</strong> to your tablet or phone Home Screen so your child can tap freely without accidentally hitting browser address bars or back buttons.
            </p>
            <div className="mt-4 space-y-3 rounded-2xl bg-amber-50/70 p-4 border border-amber-200/70 text-sm text-slate-800">
              <p className="font-semibold text-amber-950">On iPad or iPhone (Safari):</p>
              <ol className="list-decimal list-inside space-y-1.5 text-slate-700">
                <li>Tap the <strong>Share</strong> icon in the Safari toolbar.</li>
                <li>Scroll down and tap <strong>Add to Home Screen</strong>.</li>
                <li>Launch from your Home Screen for clean full-screen play!</li>
              </ol>
              <div className="pt-2 border-t border-amber-200/60">
                <p className="font-semibold text-amber-950">On Android / Chrome Tablet:</p>
                <p className="text-slate-700 mt-0.5">
                  Tap the browser menu <strong>(⋮)</strong> and choose <strong>Install App</strong> or <strong>Add to Home Screen</strong>.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowGuide(false)}
              className="tactile-btn mt-5 w-full min-h-[48px] rounded-2xl bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-800"
            >
              Got It!
            </button>
          </div>
        </div>
      )}
    </>
  );
};
