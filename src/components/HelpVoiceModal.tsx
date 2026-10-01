import React from 'react';
import { X, Volume2, Mic, HelpCircle, CheckCircle, ShieldCheck, HeartHandshake } from 'lucide-react';
import { LanguageCode } from '../types';

interface HelpVoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: LanguageCode;
  onSpeakText: (text: string) => void;
}

export const HelpVoiceModal: React.FC<HelpVoiceModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onSpeakText,
}) => {
  if (!isOpen) return null;

  const getHelpContent = () => {
    switch (currentLang) {
      case 'ta':
        return {
          title: 'டிசா (DISA) எவ்வாறு செயல்படுகிறது?',
          subtitle: 'முதல்முறை ஸ்மார்ட்போன் பயன்படுத்தும் பெண்களுக்கான எளிய வழிகாட்டி',
          steps: [
            {
              step: '1',
              title: 'பெரிய மைக் பட்டனை தொடவும்',
              desc: 'திரையில் உள்ள பெரிய சிவப்பு மைக் பட்டனை ஒரு முறை தொடுங்கள்.'
            },
            {
              step: '2',
              title: 'உங்கள் மொழியில் இயல்பாக பேசுங்கள்',
              desc: 'எடுத்துக்காட்டு: "எனக்கு தையல் மிஷின் வாங்க அரசு உதவி கிடைக்குமா?" அல்லது "மகளிர் உரிமைத் தொகை எப்படி பெறுவது?" என்று பேசுங்கள்.'
            },
            {
              step: '3',
              title: 'டிசா எளிய தமிழில் விளக்கம் தரும்',
              desc: 'அரசு திட்டங்கள், எவ்வளவு பணம் கிடைக்கும், என்னென்ன ஆவணங்கள் தேவை என்பதை டிசா தெளிவாக வாசித்து காட்டும்.'
            },
            {
              step: '4',
              title: 'அரசு மையத்திற்கு சென்று விண்ணப்பியுங்கள்',
              desc: 'அருகிலுள்ள இ-சேவை மையம், பஞ்சாயத்து அலுவலகம் அல்லது வங்கியில் எளிய முறையில் விண்ணப்பிக்கலாம்.'
            }
          ],
          audioText: 'வணக்கம்! டிசா என்பது பெண்களுக்கான அரசு உதவி திட்டங்களை கண்டறியும் குரல் உதவியாளர். பெரிய மைக் பட்டனை தொட்டு உங்கள் கேள்வியை பேசுங்கள். டிசா எளிய தமிழில் உங்களுக்கு பதில் சொல்லும்.'
        };
      case 'hi':
        return {
          title: 'दिशा (DISA) कैसे काम करती है?',
          subtitle: 'महिलाओं और पहली बार फोन चलाने वालों के लिए आसान मार्गदर्शिका',
          steps: [
            {
              step: '1',
              title: 'बड़े माइक बटन को छुएं',
              desc: 'स्क्रीन पर दिख रहे बड़े लाल माइक बटन को एक बार दबाएं।'
            },
            {
              step: '2',
              title: 'अपनी भाषा में बोलकर पूछें',
              desc: 'जैसे: "सिलाई मशीन या छोटा व्यापार शुरू करने के लिए क्या योजना है?" या "मातृ वंदना का पैसा कैसे मिलेगा?"'
            },
            {
              step: '3',
              title: 'दिशा बोलकर और लिखकर समझाएगी',
              desc: 'योजना के फायदे, जरूरी कागजात और नियम दिशा सरल भाषा में पढ़कर सुनाएगी।'
            },
            {
              step: '4',
              title: 'सरकारी केंद्र पर आवेदन करें',
              desc: 'पास के जन सेवा केंद्र (CSC), बैंक या पंचायत में बिना किसी बिचौलिए के आवेदन करें।'
            }
          ],
          audioText: 'नमस्ते! दिशा महिलाओं के लिए सरकारी योजनाओं को खोजने वाला आवाज सहायक है। बड़े माइक बटन को दबाकर अपना प्रश्न पूछें। दिशा आसान भाषा में आपको पूरी जानकारी बोलकर सुनाएगी।'
        };
      default:
        return {
          title: 'How DISA Works',
          subtitle: 'Voice-first government scheme guide for women',
          steps: [
            {
              step: '1',
              title: 'Tap the Large Microphone Button',
              desc: 'Tap the large microphone button in the center of the screen.'
            },
            {
              step: '2',
              title: 'Speak Naturally in Your Language',
              desc: 'Ask about tailoring loans, maternity support, girl child education, pensions, or housing.'
            },
            {
              step: '3',
              title: 'DISA Explains in Simple Words',
              desc: 'DISA reads the answer aloud and shows you benefits, eligibility, and documents checklist.'
            },
            {
              step: '4',
              title: 'Apply Safely at Official Govt Centers',
              desc: 'Follow step-by-step guidance at your nearest Gram Panchayat, e-Sevai / CSC, or bank.'
            }
          ],
          audioText: 'Welcome to DISA, your voice assistant for Indian government schemes for women. Simply tap the big microphone button and ask any question in your language. DISA will guide you step by step.'
        };
    }
  };

  const content = getHelpContent();

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#FBF8F5] w-full max-w-xl rounded-3xl border border-stone-200 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-white border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-rose-50 text-rose-700">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-stone-900">
                {content.title}
              </h2>
              <p className="text-xs text-stone-500 font-medium">
                {content.subtitle}
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

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4">
          {/* Read aloud guide button */}
          <button
            onClick={() => onSpeakText(content.audioText)}
            className="w-full p-3 rounded-2xl bg-gradient-to-r from-rose-500 to-amber-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm hover:opacity-95 transition-opacity"
          >
            <Volume2 className="w-4 h-4" />
            <span>🔊 Listen to Voice Tutorial / ஆடியோ வழிகாட்டி கேட்க</span>
          </button>

          {/* Steps */}
          <div className="space-y-3">
            {content.steps.map((st) => (
              <div key={st.step} className="p-3.5 rounded-xl bg-white border border-stone-200 flex items-start gap-3 shadow-2xs">
                <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-800 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {st.step}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-stone-900">
                    {st.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2 font-medium">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>DISA is free and strictly protects your privacy. You can use it as many times as you want.</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-100/80 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold hover:bg-stone-800 transition-colors"
          >
            Close / சரி
          </button>
        </div>
      </div>
    </div>
  );
};
