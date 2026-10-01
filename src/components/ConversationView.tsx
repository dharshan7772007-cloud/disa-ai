import React from 'react';
import { Volume2, VolumeX, User, Bot, Sparkles, ArrowRight } from 'lucide-react';
import { ChatMessage, LanguageCode } from '../types';
import { SchemeCard } from './SchemeCard';

interface ConversationViewProps {
  messages: ChatMessage[];
  currentLang: LanguageCode;
  onSpeakText: (text: string) => void;
  onSelectQuickOption: (optionText: string) => void;
  currentlySpeakingText: string | null;
}

export const ConversationView: React.FC<ConversationViewProps> = ({
  messages,
  currentLang,
  onSpeakText,
  onSelectQuickOption,
  currentlySpeakingText,
}) => {
  return (
    <div className="space-y-6">
      {messages.map((msg) => {
        const isUser = msg.sender === 'user';
        const isSpeaking = currentlySpeakingText === msg.text;

        return (
          <div
            key={msg.id}
            className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-full`}
          >
            {/* Sender Indicator */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-500 mb-1 px-1">
              {isUser ? (
                <>
                  <span>You (Spoken / Typed)</span>
                  <div className="w-5 h-5 rounded-full bg-stone-300 text-stone-700 flex items-center justify-center">
                    <User className="w-3 h-3" />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-[10px]">
                    D
                  </div>
                  <span className="text-rose-900 font-bold">DISA Assistant</span>
                </>
              )}
            </div>

            {/* Bubble */}
            <div
              className={`relative max-w-2xl rounded-2xl p-4 sm:p-5 shadow-xs transition-colors ${
                isUser
                  ? 'bg-rose-700 text-white rounded-tr-xs font-medium text-base sm:text-lg leading-relaxed'
                  : 'bg-white border border-stone-200/90 text-stone-900 rounded-tl-xs text-base sm:text-lg leading-relaxed'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="flex-1 whitespace-pre-wrap">{msg.text}</p>

                {/* Read Aloud button for DISA responses */}
                {!isUser && (
                  <button
                    onClick={() => onSpeakText(msg.text)}
                    title={isSpeaking ? 'Currently reading...' : 'Read this answer aloud'}
                    className={`shrink-0 p-2 rounded-xl transition-colors border ${
                      isSpeaking
                        ? 'bg-rose-600 text-white border-rose-600 animate-pulse'
                        : 'bg-stone-50 text-stone-700 hover:bg-rose-50 hover:text-rose-700 border-stone-200'
                    }`}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Quick option buttons if DISA asked a question */}
              {!isUser && msg.quickOptions && msg.quickOptions.length > 0 && (
                <div className="mt-4 pt-3 border-t border-stone-100">
                  <span className="text-xs font-bold text-stone-500 block mb-2">
                    Quick Answer (Tap to reply) / தொட்டு பதிலளிக்க:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {msg.quickOptions.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => onSelectQuickOption(opt)}
                        className="px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 text-sm font-semibold border border-rose-200 transition-all hover:scale-102 active:scale-98 shadow-2xs flex items-center gap-1.5"
                      >
                        <span>{opt}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-rose-600" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Matched Scheme Cards */}
            {!isUser && msg.matchedSchemes && msg.matchedSchemes.length > 0 && (
              <div className="w-full max-w-3xl mt-4 space-y-4">
                <div className="flex items-center gap-2 px-1 text-xs font-bold text-rose-800 uppercase tracking-wide">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Matching Official Government Schemes ({msg.matchedSchemes.length})</span>
                </div>
                {msg.matchedSchemes.map((scheme) => (
                  <SchemeCard
                    key={scheme.id}
                    scheme={scheme}
                    currentLang={currentLang}
                    onSpeakScheme={(text) => onSpeakText(text)}
                    isCurrentlySpeaking={currentlySpeakingText === scheme.simpleWhat.en}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
