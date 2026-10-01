import React, { useState } from 'react';
import { X, Search, Filter, BookOpen, ShieldCheck } from 'lucide-react';
import { OFFICIAL_SCHEMES, Scheme } from '../data/schemesData';
import { LanguageCode } from '../types';
import { SchemeCard } from './SchemeCard';

interface SchemesCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: LanguageCode;
  onSpeakText: (text: string) => void;
}

export const SchemesCatalogModal: React.FC<SchemesCatalogModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onSpeakText,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'All Schemes' },
    { id: 'self_employment', label: 'Self-Employment & Loans' },
    { id: 'health_maternity', label: 'Health & Maternity' },
    { id: 'child_welfare', label: 'Girl Child & Education' },
    { id: 'skill_development', label: 'Tailoring & Skills' },
    { id: 'housing', label: 'Housing' },
    { id: 'financial', label: 'Direct Grants' },
    { id: 'social_security', label: 'Pensions' },
  ];

  const filteredSchemes = OFFICIAL_SCHEMES.filter((s) => {
    const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
    const matchesState = selectedState === 'all' || s.state === 'All India' || s.state === selectedState;
    const matchesSearch =
      searchQuery === '' ||
      s.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.name.ta && s.name.ta.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (s.name.hi && s.name.hi.toLowerCase().includes(searchQuery.toLowerCase())) ||
      s.simpleWhat.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesState && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#FBF8F5] w-full max-w-4xl max-h-[90vh] rounded-3xl border border-stone-200 shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-white border-b border-stone-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-stone-900">
                Official Government Schemes Directory
              </h2>
              <p className="text-xs text-stone-500 font-medium">
                Verified Central & State Schemes for Women in India
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Controls */}
        <div className="p-4 bg-white/70 border-b border-stone-200 space-y-3 shrink-0">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search scheme name, tailoring, sewing, ₹1000, pregnancy, loan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 bg-white text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          {/* Category filter buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-rose-700 text-white shadow-2xs font-bold'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Schemes List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1">
          {filteredSchemes.length === 0 ? (
            <div className="text-center py-12 text-stone-500">
              <p className="text-base font-semibold">No schemes match your filter.</p>
              <p className="text-xs mt-1">Try clearing your search query or selecting "All Schemes".</p>
            </div>
          ) : (
            filteredSchemes.map((scheme) => (
              <SchemeCard
                key={scheme.id}
                scheme={scheme}
                currentLang={currentLang}
                onSpeakScheme={onSpeakText}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
