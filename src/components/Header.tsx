import React from 'react';
import { Volume2, VolumeX, HelpCircle, ShieldCheck, FileCheck, BookOpen, Globe } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '../utils/languages';
import { LanguageCode } from '../types';

interface HeaderProps {
  currentLang: LanguageCode;
  onSelectLang: (lang: LanguageCode) => void;
  voiceAutoPlay: boolean;
  onToggleVoiceAutoPlay: () => void;
  onOpenHelp: () => void;
  onOpenDocsChecklist: () => void;
  onOpenSchemesCatalog: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onSelectLang,
  voiceAutoPlay,
  onToggleVoiceAutoPlay,
  onOpenHelp,
  onOpenDocsChecklist,
  onOpenSchemesCatalog,
}) => {
  const currentLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) || SUPPORTED_LANGUAGES[0];

  return (
    <header className="sticky top-0 z-30 bg-[#FBF8F5]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-600 via-rose-500 to-amber-500 flex items-center justify-center text-white shadow-sm font-bold text-xl tracking-tight">
            D
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl sm:text-2xl text-stone-900 tracking-tight">
                DISA
              </span>
              <span className="hidden sm:inline-flex text-xs font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                Government Scheme Assistant
              </span>
            </div>
            <p className="text-xs font-medium text-stone-600">
              “Speak. Discover. Benefit.”
            </p>
          </div>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Language Selector */}
          <div className="relative inline-flex items-center">
            <label htmlFor="lang-select" className="sr-only">Choose Language</label>
            <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-stone-300 bg-white text-stone-800 text-xs sm:text-sm font-semibold hover:border-stone-400 focus-within:ring-2 focus-within:ring-rose-500 shadow-xs">
              <Globe className="w-3.5 h-3.5 text-stone-500 shrink-0" />
              <select
                id="lang-select"
                value={currentLang}
                onChange={(e) => onSelectLang(e.target.value as LanguageCode)}
                className="bg-transparent border-none outline-none cursor-pointer pr-1 font-medium"
              >
                {SUPPORTED_LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.nativeLabel} ({l.label})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Voice Auto-Play Toggle */}
          <button
            onClick={onToggleVoiceAutoPlay}
            title={voiceAutoPlay ? 'Auto-Voice Read Aloud: Enabled' : 'Auto-Voice Read Aloud: Muted'}
            className={`p-2 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors ${
              voiceAutoPlay
                ? 'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100'
                : 'bg-white border-stone-300 text-stone-600 hover:bg-stone-100'
            }`}
          >
            {voiceAutoPlay ? <Volume2 className="w-4 h-4 text-rose-600" /> : <VolumeX className="w-4 h-4 text-stone-400" />}
            <span className="hidden md:inline">{voiceAutoPlay ? 'Voice On' : 'Voice Off'}</span>
          </button>

          {/* Catalog of All Schemes */}
          <button
            onClick={onOpenSchemesCatalog}
            title="Browse all 11+ official schemes"
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 text-xs sm:text-sm font-medium flex items-center gap-1.5 shadow-xs transition-colors"
          >
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span className="hidden sm:inline">All Schemes</span>
          </button>

          {/* Document Checklist helper */}
          <button
            onClick={onOpenDocsChecklist}
            title="Document readiness checklist"
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 text-xs sm:text-sm font-medium flex items-center gap-1.5 shadow-xs transition-colors"
          >
            <FileCheck className="w-4 h-4 text-emerald-600" />
            <span className="hidden md:inline">Docs Check</span>
          </button>

          {/* Help button */}
          <button
            onClick={onOpenHelp}
            title="How to use DISA"
            className="p-2 rounded-lg border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 shadow-xs transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-stone-600" />
            <span className="sr-only">Help</span>
          </button>
        </div>
      </div>
    </header>
  );
};
