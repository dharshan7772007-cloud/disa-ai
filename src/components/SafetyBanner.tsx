import React from 'react';
import { ShieldCheck, PhoneCall, AlertTriangle } from 'lucide-react';
import { LanguageCode } from '../types';

interface SafetyBannerProps {
  currentLang: LanguageCode;
}

export const SafetyBanner: React.FC<SafetyBannerProps> = ({ currentLang }) => {
  const getBannerText = () => {
    switch (currentLang) {
      case 'ta':
        return {
          title: 'பாதுகாப்பு உறுதி:',
          body: 'டிசா ஒருபோதும் உங்கள் கடவுச்சொல் (Password), OTP, அல்லது வங்கி ATM / UPI PIN கேட்காது. அரசு திட்டங்கள் அனைத்தும் இலவசம். புரோக்கர்களுக்கு பணம் கொடுக்க வேண்டாம்.',
          helpline: 'அரசு பெண்கள் உதவி எண்: 181 | குடிமக்கள் உதவி: 14449'
        };
      case 'hi':
        return {
          title: 'सुरक्षा सूचना:',
          body: 'दिशा कभी भी आपका पासवर्ड, ओटीपी (OTP), या एटीएम/यूपीआई पिन नहीं पूछेगी। सभी सरकारी योजनाएं निशुल्क हैं। बिचौलियों को पैसे न दें।',
          helpline: 'महिला हेल्पलाइन: 181 | नागरिक सहायता: 14449'
        };
      default:
        return {
          title: 'Safe & Secure:',
          body: 'DISA will never ask for your passwords, OTP, or ATM / UPI PIN. All government schemes are 100% free to apply. Never pay money to middlemen.',
          helpline: 'National Women Helpline: 181 | Citizen Helpline: 14449'
        };
    }
  };

  const text = getBannerText();

  return (
    <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3 sm:p-3.5 text-xs text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
      <div className="flex items-start gap-2.5">
        <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-amber-950 mr-1">{text.title}</span>
          <span className="text-amber-900/90">{text.body}</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 shrink-0 bg-white/80 border border-amber-300/70 px-2.5 py-1 rounded-md text-[11px] font-semibold text-amber-900">
        <PhoneCall className="w-3.5 h-3.5 text-amber-700" />
        <span>{text.helpline}</span>
      </div>
    </div>
  );
};
