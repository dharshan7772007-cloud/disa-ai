import React, { useState } from 'react';
import { 
  CheckCircle, 
  ExternalLink, 
  Volume2, 
  FileText, 
  MapPin, 
  CheckSquare, 
  Square, 
  Building2, 
  HelpCircle,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { Scheme } from '../data/schemesData';
import { LanguageCode } from '../types';

interface SchemeCardProps {
  scheme: Scheme;
  currentLang: LanguageCode;
  onSpeakScheme: (textToRead: string) => void;
  isCurrentlySpeaking?: boolean;
}

export const SchemeCard: React.FC<SchemeCardProps> = ({
  scheme,
  currentLang,
  onSpeakScheme,
  isCurrentlySpeaking = false,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'steps' | 'documents'>('overview');
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});

  // Localized text resolution
  const langKey = (currentLang === 'ta' || currentLang === 'hi' || currentLang === 'te') ? currentLang : 'en';
  
  const schemeTitle = scheme.name[langKey] || scheme.name.en;
  const categoryTitle = scheme.categoryLabel[langKey as 'ta' | 'hi' | 'en'] || scheme.categoryLabel.en;
  const whatIsIt = scheme.simpleWhat[langKey as 'ta' | 'hi' | 'en'] || scheme.simpleWhat.en;
  const benefitsList = scheme.mainBenefits[langKey as 'ta' | 'hi' | 'en'] || scheme.mainBenefits.en;
  const eligibilityList = scheme.eligibility[langKey as 'ta' | 'hi' | 'en'] || scheme.eligibility.en;
  const docsList = scheme.documentsRequired[langKey as 'ta' | 'hi' | 'en'] || scheme.documentsRequired.en;
  const stepsList = scheme.stepsToApply[langKey as 'ta' | 'hi' | 'en'] || scheme.stepsToApply.en;
  const whereToApply = scheme.whereToApply[langKey as 'ta' | 'hi' | 'en'] || scheme.whereToApply.en;

  const toggleDoc = (index: number) => {
    setCheckedDocs((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleReadAloud = () => {
    // Generate simple spoken summary for voice reader
    const speechSummary = `${schemeTitle}. ${whatIsIt}. முக்கிய நன்மைகள்: ${benefitsList.slice(0, 2).join('. ')}. எங்கே விண்ணப்பிக்க வேண்டும்: ${whereToApply}.`;
    onSpeakScheme(speechSummary);
  };

  const allDocsChecked = docsList.length > 0 && docsList.every((_, idx) => checkedDocs[idx]);

  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow overflow-hidden text-stone-900">
      {/* Top Banner & Header */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-stone-50 via-white to-rose-50/40 border-b border-stone-100">
        <div className="flex items-start justify-between gap-3">
          <div>
            {/* Category and Jurisdiction (unboxed clean text per design constitution) */}
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 mb-1">
              <span className="text-rose-700">{categoryTitle}</span>
              <span aria-hidden="true">·</span>
              <span>{scheme.state}</span>
              {scheme.isOfficialVerified && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-700 flex items-center gap-1 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 inline" /> Verified Govt Scheme
                  </span>
                </>
              )}
            </div>

            <h3 className="text-lg sm:text-xl font-extrabold text-stone-900 tracking-tight leading-snug">
              {schemeTitle}
            </h3>
            {scheme.name.en !== schemeTitle && (
              <p className="text-xs font-medium text-stone-500 mt-0.5">
                {scheme.name.en}
              </p>
            )}
          </div>

          {/* Voice Read Aloud Button */}
          <button
            onClick={handleReadAloud}
            title="Read this scheme aloud"
            className="shrink-0 p-2 sm:px-3 sm:py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
          >
            <Volume2 className={`w-4 h-4 ${isCurrentlySpeaking ? 'animate-bounce text-rose-600' : ''}`} />
            <span className="hidden sm:inline">Listen</span>
          </button>
        </div>

        {/* 1-sentence What is it */}
        <div className="mt-3 p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 text-stone-800 text-sm leading-relaxed">
          <span className="font-bold text-amber-950 block text-xs uppercase tracking-wider mb-1">
            What is it? / இது என்ன திட்டம்?
          </span>
          {whatIsIt}
        </div>
      </div>

      {/* Tabs Control */}
      <div className="flex items-center border-b border-stone-200 bg-stone-50/70 px-4 pt-2 gap-2 text-xs sm:text-sm font-semibold">
        <button
          onClick={() => setActiveTab('overview')}
          className={`pb-2.5 px-2 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'overview'
              ? 'border-rose-600 text-rose-700 font-bold'
              : 'border-transparent text-stone-600 hover:text-stone-900'
          }`}
        >
          Benefits & Eligibility
        </button>
        <button
          onClick={() => setActiveTab('steps')}
          className={`pb-2.5 px-2 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'steps'
              ? 'border-rose-600 text-rose-700 font-bold'
              : 'border-transparent text-stone-600 hover:text-stone-900'
          }`}
        >
          <span>Step-by-Step Guide</span>
          <span className="px-1.5 py-0.2 rounded-full bg-rose-100 text-rose-800 text-[10px]">
            {stepsList.length} Steps
          </span>
        </button>
        <button
          onClick={() => setActiveTab('documents')}
          className={`pb-2.5 px-2 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'documents'
              ? 'border-rose-600 text-rose-700 font-bold'
              : 'border-transparent text-stone-600 hover:text-stone-900'
          }`}
        >
          <span>Documents Checklist</span>
          {allDocsChecked && (
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
          )}
        </button>
      </div>

      {/* Tab Contents */}
      <div className="p-4 sm:p-5">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* Main Benefits */}
            <div>
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Main Benefits / நன்மைகள்:
              </h4>
              <ul className="space-y-1.5">
                {benefitsList.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-stone-800">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Basic Eligibility */}
            <div className="pt-2 border-t border-stone-100">
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                Who Can Apply? / தகுதி:
              </h4>
              <ul className="space-y-1">
                {eligibilityList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Where to apply box */}
            <div className="mt-3 p-3 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-stone-900 block">
                  Where to Apply in Person:
                </span>
                <span className="text-xs sm:text-sm text-stone-700">
                  {whereToApply}
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'steps' && (
          <div className="space-y-3">
            <p className="text-xs text-stone-500 font-medium">
              Follow these simple steps one by one. You do not need any agent or middleman.
            </p>
            <div className="space-y-2.5 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-rose-100">
              {stepsList.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-3 pl-1">
                  <div className="w-7 h-7 rounded-full bg-rose-600 text-white font-bold text-xs flex items-center justify-center shrink-0 z-10 shadow-xs">
                    {idx + 1}
                  </div>
                  <div className="bg-stone-50/90 hover:bg-stone-50 border border-stone-200/70 p-3 rounded-xl text-xs sm:text-sm text-stone-800 flex-1 leading-relaxed">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-700">
                Check what you already have in hand:
              </span>
              <span className="text-xs font-semibold text-rose-700">
                {Object.values(checkedDocs).filter(Boolean).length} of {docsList.length} ready
              </span>
            </div>

            <div className="space-y-2">
              {docsList.map((doc, idx) => {
                const isChecked = !!checkedDocs[idx];
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleDoc(idx)}
                    className={`w-full text-left p-3 rounded-xl border flex items-center gap-3 transition-colors ${
                      isChecked
                        ? 'bg-emerald-50/60 border-emerald-300 text-emerald-950 font-medium'
                        : 'bg-stone-50/50 border-stone-200 text-stone-800 hover:bg-stone-50'
                    }`}
                  >
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <Square className="w-5 h-5 text-stone-400 shrink-0" />
                    )}
                    <span className="text-xs sm:text-sm">{doc}</span>
                  </button>
                );
              })}
            </div>

            {allDocsChecked && (
              <div className="p-3 bg-emerald-100/70 border border-emerald-300 rounded-xl text-xs font-bold text-emerald-900 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-700" />
                <span>You have all required documents! You are ready to apply at the nearest center.</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer: Official Website Verification & Helpline */}
      <div className="px-4 py-3 bg-stone-100/70 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs text-stone-600">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="font-semibold text-stone-800">
            Official Source:
          </span>
          <a
            href={scheme.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-700 hover:text-rose-800 font-bold underline flex items-center gap-1"
          >
            {scheme.officialWebsite.replace('https://', '')}
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {scheme.tollFreeHelpline && (
          <div className="flex items-center gap-1.5 text-stone-700 font-medium">
            <PhoneCall className="w-3.5 h-3.5 text-stone-500" />
            <span>Toll-Free Helpline: <strong>{scheme.tollFreeHelpline}</strong></span>
          </div>
        )}
      </div>
    </div>
  );
};
