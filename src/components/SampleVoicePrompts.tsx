import React from 'react';
import { Sparkles, MessageCircleQuestion } from 'lucide-react';
import { SAMPLE_VOICE_PROMPTS } from '../utils/languages';
import { LanguageCode } from '../types';

interface SampleVoicePromptsProps {
  currentLang: LanguageCode;
  onSelectPrompt: (promptText: string) => void;
}

export const SampleVoicePrompts: React.FC<SampleVoicePromptsProps> = ({
  currentLang,
  onSelectPrompt,
}) => {
  // Filter prompts for current language, or fallback to Tamil/Hindi/English
  const filtered = SAMPLE_VOICE_PROMPTS.filter((p) => p.lang === currentLang);
  const promptsToShow = filtered.length > 0 ? filtered : SAMPLE_VOICE_PROMPTS.slice(0, 4);

  const getHeading = () => {
    switch (currentLang) {
      case 'ta':
        return 'அல்லது இந்த கேள்விகளை தொட்டு கேளுங்கள்:';
      case 'hi':
        return 'या इनमें से कोई भी प्रश्न पूछें:';
      default:
        return 'Or tap to ask one of these popular questions:';
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-4">
      <div className="flex items-center gap-1.5 text-xs font-bold text-stone-600 mb-2 px-1">
        <MessageCircleQuestion className="w-4 h-4 text-rose-600" />
        <span>{getHeading()}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {promptsToShow.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectPrompt(item.text)}
            className="text-left p-3 rounded-xl bg-white hover:bg-rose-50/70 border border-stone-200 hover:border-rose-300 text-stone-800 text-xs sm:text-sm font-medium transition-all hover:scale-[1.01] active:scale-[0.99] shadow-2xs flex items-start gap-2.5 group cursor-pointer"
          >
            <span className="text-base shrink-0 group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            <div className="flex-1">
              <span className="block font-semibold text-stone-900 leading-snug">
                “{item.text}”
              </span>
              <span className="text-[11px] text-stone-600 block mt-0.5">
                {item.category}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
