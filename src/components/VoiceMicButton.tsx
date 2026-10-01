import React from 'react';
import { Mic, MicOff, Square, Sparkles, Loader2, Volume2 } from 'lucide-react';
import { LanguageOption } from '../types';

interface VoiceMicButtonProps {
  isListening: boolean;
  isProcessing: boolean;
  isSpeaking: boolean;
  onStartListening: () => void;
  onStopListening: () => void;
  onStopSpeaking: () => void;
  currentLangObj: LanguageOption;
  interimTranscript?: string;
}

export const VoiceMicButton: React.FC<VoiceMicButtonProps> = ({
  isListening,
  isProcessing,
  isSpeaking,
  onStartListening,
  onStopListening,
  onStopSpeaking,
  currentLangObj,
  interimTranscript,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-4 px-2">
      {/* Dynamic status pill */}
      <div className="h-8 flex items-center justify-center mb-3">
        {isListening ? (
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold animate-pulse border border-rose-200">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
            <span>{currentLangObj.listeningText}</span>
          </div>
        ) : isProcessing ? (
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold border border-amber-200">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-700" />
            <span>DISA is finding the best schemes...</span>
          </div>
        ) : isSpeaking ? (
          <button
            onClick={onStopSpeaking}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold hover:bg-emerald-200 border border-emerald-200 transition-colors"
          >
            <Volume2 className="w-3.5 h-3.5 animate-bounce text-emerald-700" />
            <span>DISA is speaking (Tap to pause)</span>
            <Square className="w-3 h-3 ml-1 fill-emerald-800" />
          </button>
        ) : (
          <div className="text-xs font-semibold text-stone-500 tracking-wide uppercase">
            {currentLangObj.micPrompt}
          </div>
        )}
      </div>

      {/* Big Mic Button with Pulsing Wave Rings */}
      <div className="relative flex items-center justify-center">
        {/* Pulsing rings when listening */}
        {isListening && (
          <>
            <div className="absolute w-32 h-32 rounded-full bg-rose-400/20 animate-ping pointer-events-none" />
            <div className="absolute w-28 h-28 rounded-full bg-rose-500/30 animate-pulse pointer-events-none" />
          </>
        )}

        {/* Pulsing waves when speaking */}
        {isSpeaking && (
          <div className="absolute w-28 h-28 rounded-full bg-emerald-400/20 animate-pulse pointer-events-none" />
        )}

        {/* Main accessible button */}
        <button
          onClick={() => {
            if (isListening) {
              onStopListening();
            } else if (isSpeaking) {
              onStopSpeaking();
            } else {
              onStartListening();
            }
          }}
          disabled={isProcessing}
          aria-label={isListening ? 'Stop listening' : currentLangObj.tapToSpeakText}
          className={`relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-xl focus:outline-none focus:ring-4 ${
            isListening
              ? 'bg-rose-600 text-white ring-rose-300 scale-105 shadow-rose-500/40'
              : isSpeaking
              ? 'bg-emerald-600 text-white ring-emerald-300 shadow-emerald-500/40'
              : 'bg-gradient-to-tr from-rose-600 via-rose-500 to-amber-500 text-white hover:opacity-95 hover:scale-102 ring-rose-200 active:scale-95 shadow-rose-600/30'
          }`}
        >
          {isListening ? (
            <Square className="w-10 h-10 fill-current animate-pulse" />
          ) : isProcessing ? (
            <Loader2 className="w-10 h-10 animate-spin" />
          ) : isSpeaking ? (
            <Volume2 className="w-10 h-10 animate-pulse" />
          ) : (
            <Mic className="w-11 h-11 drop-shadow-sm" />
          )}

          <span className="text-[11px] font-bold mt-1 tracking-tight text-white/95">
            {isListening ? 'Stop' : isSpeaking ? 'Mute' : currentLangObj.tapToSpeakText}
          </span>
        </button>
      </div>

      {/* Interim live speech transcript */}
      {interimTranscript && isListening && (
        <div className="mt-3 max-w-md text-center px-4 py-2 bg-white/90 border border-stone-200 rounded-lg shadow-xs text-sm text-stone-700 italic">
          “{interimTranscript}”
        </div>
      )}
    </div>
  );
};
