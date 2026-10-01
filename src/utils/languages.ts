import { LanguageOption, LanguageCode } from '../types';

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: 'ta',
    label: 'Tamil',
    nativeLabel: 'தமிழ்',
    speechCode: 'ta-IN',
    welcomeVoiceText: 'வணக்கம்! நான் டிசா (DISA). பெண்களுக்கு கிடைக்கும் அரசு உதவிகளை கண்டுபிடிக்க நான் உதவுகிறேன். மைக் பட்டனை அழுத்தி உங்கள் கேள்வியை கேளுங்கள்.',
    micPrompt: 'மைக் அழுத்தி பேசுங்கள்',
    listeningText: 'நான் கேட்கிறேன்... பேசுங்கள்',
    tapToSpeakText: 'தொட்டு பேசுங்கள்'
  },
  {
    code: 'hi',
    label: 'Hindi',
    nativeLabel: 'हिंदी',
    speechCode: 'hi-IN',
    welcomeVoiceText: 'नमस्ते! मैं दिशा (DISA) हूँ। महिलाओं के लिए लाभकारी सरकारी योजनाओं को जानने में मैं आपकी मदद करूंगी। माइक बटन दबाकर बोलें।',
    micPrompt: 'माइक दबाकर बोलें',
    listeningText: 'मैं सुन रही हूँ... बोलिए',
    tapToSpeakText: 'बोलने के लिए दबाएं'
  },
  {
    code: 'en',
    label: 'English',
    nativeLabel: 'English',
    speechCode: 'en-IN',
    welcomeVoiceText: 'Hello! I am DISA. I help women easily discover and benefit from Indian government schemes. Tap the microphone and speak your question.',
    micPrompt: 'Tap and speak',
    listeningText: 'Listening... speak now',
    tapToSpeakText: 'Tap to speak'
  },
  {
    code: 'te',
    label: 'Telugu',
    nativeLabel: 'తెలుగు',
    speechCode: 'te-IN',
    welcomeVoiceText: 'నమస్కారం! నేను డిసా. మహిళలకు ఉపయోగపడే ప్రభుత్వ పథకాలను తెలుసుకోవడానికి నేను సహాయం చేస్తాను. మైక్ నొక్కి మాట్లాడండి.',
    micPrompt: 'మైక్ నొక్కి మాట్లాడండి',
    listeningText: 'వింటున్నాను... మాట్లాడండి',
    tapToSpeakText: 'మాట్లాడటానికి నొక్కండి'
  },
  {
    code: 'kn',
    label: 'Kannada',
    nativeLabel: 'ಕನ್ನಡ',
    speechCode: 'kn-IN',
    welcomeVoiceText: 'ನಮಸ್ಕಾರ! ನಾನು ಡಿಸಾ. ಮಹಿಳೆಯರ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ತಿಳಿಯಲು ನಾನು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತೇನೆ. ಮೈಕ್ ಒತ್ತಿ ಮಾತನಾಡಿ.',
    micPrompt: 'ಮೈಕ್ ಒತ್ತಿ ಮಾತನಾಡಿ',
    listeningText: 'ಕೇಳಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದೇನೆ... ಮಾತನಾಡಿ',
    tapToSpeakText: 'ಮಾತನಾಡಲು ಒತ್ತಿ'
  },
  {
    code: 'mr',
    label: 'Marathi',
    nativeLabel: 'मराठी',
    speechCode: 'mr-IN',
    welcomeVoiceText: 'नमस्कार! मी दिशा आहे. महिलांसाठी शासकीय योजना शोधण्यात मी मदत करेन. माइक दाबा आणि बोला.',
    micPrompt: 'माइक दाबा आणि बोला',
    listeningText: 'ऐकत आहे... बोला',
    tapToSpeakText: 'बोलण्यासाठी स्पर्श करा'
  },
  {
    code: 'bn',
    label: 'Bengali',
    nativeLabel: 'বাংলা',
    speechCode: 'bn-IN',
    welcomeVoiceText: 'নমস্কার! আমি দিশা। মহিলাদের জন্য সরকারি সুযোগ-সুবিধা জানতে আমি আপনাকে সাহায্য করব। মাইক টিপে বলুন।',
    micPrompt: 'মাইক টিপে বলুন',
    listeningText: 'শুনছি... বলুন',
    tapToSpeakText: 'বলতে স্পর্শ করুন'
  }
];

export interface SamplePrompt {
  id: string;
  lang: LanguageCode;
  text: string;
  category: string;
  icon: string;
}

export const SAMPLE_VOICE_PROMPTS: SamplePrompt[] = [
  // Tamil samples
  {
    id: 'ta-1',
    lang: 'ta',
    text: 'எனக்கு பெண்களுக்கு கிடைக்கும் அரசு உதவிகள் என்ன?',
    category: 'பொதுவான உதவிகள்',
    icon: '✨'
  },
  {
    id: 'ta-2',
    lang: 'ta',
    text: 'சுயதொழில் அல்லது தையல் மிஷின் வாங்க அரசு கடன் கிடைக்குமா?',
    category: 'சுயதொழில் & தையல்',
    icon: '🧵'
  },
  {
    id: 'ta-3',
    lang: 'ta',
    text: 'கர்ப்பிணி பெண்களுக்கு கிடைக்கும் ₹5,000 மருத்துவ உதவி எப்படி பெறுவது?',
    category: 'கர்ப்பிணி உதவி',
    icon: '🤱'
  },
  {
    id: 'ta-4',
    lang: 'ta',
    text: 'பெண் குழந்தைகளின் படிப்புக்கு செல்வமகள் சேமிப்பு திட்டம் பற்றி சொல்லுங்கள்',
    category: 'பெண் குழந்தை சேமிப்பு',
    icon: '👧'
  },
  {
    id: 'ta-5',
    lang: 'ta',
    text: 'தமிழ்நாடு மகளிர் உரிமைத் தொகை ₹1,000 எப்படி விண்ணப்பிப்பது?',
    category: 'மாதாந்திர ₹1,000',
    icon: '🪙'
  },

  // Hindi samples
  {
    id: 'hi-1',
    lang: 'hi',
    text: 'महिलाओं के लिए सरकारी योजनाएं क्या हैं?',
    category: 'सभी योजनाएं',
    icon: '✨'
  },
  {
    id: 'hi-2',
    lang: 'hi',
    text: 'सिलाई मशीन और छोटा व्यापार शुरू करने के लिए क्या लोन मिलेगा?',
    category: 'सिलाई व स्वरोजगार',
    icon: '🧵'
  },
  {
    id: 'hi-3',
    lang: 'hi',
    text: 'गर्भवती महिलाओं को ₹5,000 मातृ वंदना योजना कैसे मिलेगी?',
    category: 'मातृ वंदना',
    icon: '🤱'
  },
  {
    id: 'hi-4',
    lang: 'hi',
    text: 'बेटी की पढ़ाई और शादी के लिए सुकन्या योजना के नियम क्या हैं?',
    category: 'सुकन्या समृद्धि',
    icon: '👧'
  },
  {
    id: 'hi-5',
    lang: 'hi',
    text: 'मुफ्त गैस कनेक्शन और पक्का मकान कैसे मिलेगा?',
    category: 'गैस व आवास',
    icon: '🏠'
  },

  // English samples
  {
    id: 'en-1',
    lang: 'en',
    text: 'What government schemes are available for women in India?',
    category: 'All Schemes',
    icon: '✨'
  },
  {
    id: 'en-2',
    lang: 'en',
    text: 'How can I get a loan or free machine for a tailoring business?',
    category: 'Self Employment',
    icon: '🧵'
  },
  {
    id: 'en-3',
    lang: 'en',
    text: 'Tell me about financial support for pregnant mothers',
    category: 'Maternity Support',
    icon: '🤱'
  },
  {
    id: 'en-4',
    lang: 'en',
    text: 'How to apply for Sukanya Samriddhi Yojana for my daughter?',
    category: 'Girl Child Welfare',
    icon: '👧'
  }
];
