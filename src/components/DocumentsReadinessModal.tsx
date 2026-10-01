import React, { useState } from 'react';
import { X, FileCheck, CheckCircle2, Circle, ArrowRight, ShieldCheck } from 'lucide-react';
import { OFFICIAL_SCHEMES, Scheme } from '../data/schemesData';
import { LanguageCode } from '../types';

interface DocumentsReadinessModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: LanguageCode;
  onSelectSchemeToAsk: (schemeName: string) => void;
}

const COMMON_DOCS = [
  { id: 'aadhaar', label: 'Aadhaar Card (ஆதார் அட்டை)', icon: '🪪' },
  { id: 'ration', label: 'Ration Card / Family Card (குடும்ப அட்டை)', icon: '🍚' },
  { id: 'bank', label: 'Bank Passbook linked to Aadhaar (வங்கி கணக்கு புத்தகம்)', icon: '🏦' },
  { id: 'photos', label: '2 Passport Size Photos (புகைப்படங்கள்)', icon: '📷' },
  { id: 'income', label: 'Income Certificate (வருமான சான்றிதழ்)', icon: '📜' },
  { id: 'mcp', label: 'Mother & Child Protection Card (தாய்-சேய் நல அட்டை)', icon: '🤱' },
  { id: 'birth', label: 'Child Birth Certificate (பிறப்பு சான்றிதழ்)', icon: '👶' },
  { id: 'electricity', label: 'Electricity Bill (மின் இணைப்பு அட்டை)', icon: '⚡' },
  { id: 'shg', label: 'Self Help Group Passbook (சுய உதவிக்குழு புத்தகம்)', icon: '🤝' },
];

export const DocumentsReadinessModal: React.FC<DocumentsReadinessModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onSelectSchemeToAsk,
}) => {
  const [selectedDocs, setSelectedDocs] = useState<string[]>(['aadhaar', 'bank', 'ration']);

  if (!isOpen) return null;

  const toggleDoc = (id: string) => {
    setSelectedDocs((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  // Find schemes where user holds the primary requirements (Aadhaar, Ration, Bank)
  const readySchemes = OFFICIAL_SCHEMES.filter((scheme) => {
    const hasAadhaar = selectedDocs.includes('aadhaar');
    const hasBank = selectedDocs.includes('bank');
    const hasRation = selectedDocs.includes('ration');

    if (!hasAadhaar || !hasBank) return false;

    if (scheme.id === 'pm-matru-vandana') {
      return selectedDocs.includes('mcp') || hasRation;
    }
    if (scheme.id === 'sukanya-samriddhi') {
      return selectedDocs.includes('birth');
    }
    if (scheme.id === 'tn-kmut') {
      return hasRation && selectedDocs.includes('electricity');
    }
    if (scheme.id === 'lakhpati-didi') {
      return selectedDocs.includes('shg') || hasRation;
    }

    return true;
  });

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#FBF8F5] w-full max-w-2xl max-h-[90vh] rounded-3xl border border-stone-200 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-white border-b border-stone-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-stone-900">
                Document Readiness Check
              </h2>
              <p className="text-xs text-stone-500 font-medium">
                Select the documents you have in hand to see instant matching schemes
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

        {/* Document Selection Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1">
          <div>
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2.5">
              1. Tap the documents you have at home:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {COMMON_DOCS.map((doc) => {
                const isSelected = selectedDocs.includes(doc.id);
                return (
                  <button
                    key={doc.id}
                    onClick={() => toggleDoc(doc.id)}
                    className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      isSelected
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold shadow-2xs'
                        : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <span className="text-base">{doc.icon}</span>
                      <span>{doc.label}</span>
                    </div>
                    {isSelected ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <Circle className="w-4 h-4 text-stone-300 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Matching Box */}
          <div className="pt-3 border-t border-stone-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                2. Schemes you can apply for right now ({readySchemes.length}):
              </h3>
            </div>

            <div className="space-y-2">
              {readySchemes.map((scheme) => {
                const title = (scheme.name as any)[currentLang] || scheme.name.en;
                return (
                  <div
                    key={scheme.id}
                    className="p-3.5 rounded-xl bg-white border border-stone-200 flex items-center justify-between gap-3 shadow-2xs hover:border-emerald-300 transition-colors"
                  >
                    <div>
                      <h4 className="font-bold text-sm text-stone-900 leading-snug">
                        {title}
                      </h4>
                      <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                        {scheme.simpleWhat.en}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectSchemeToAsk(`Tell me step-by-step how to apply for ${scheme.name.en}`);
                      }}
                      className="shrink-0 px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold flex items-center gap-1 border border-rose-200 transition-colors"
                    >
                      <span>Ask DISA</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-100/80 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
          <span className="flex items-center gap-1 font-semibold text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Original documents are never given to anyone — only self-attested photocopies.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-800 text-white rounded-xl font-bold hover:bg-stone-900 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
