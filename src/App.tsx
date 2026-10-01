import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  RotateCcw, 
  Sparkles, 
  MessageSquare, 
  Volume2, 
  VolumeX, 
  AlertCircle,
  HelpCircle,
  PhoneCall,
  CheckCircle2,
  BookOpen,
  FileCheck
} from 'lucide-react';
import { Header } from './components/Header';
import { SafetyBanner } from './components/SafetyBanner';
import { VoiceMicButton } from './components/VoiceMicButton';
import { ConversationView } from './components/ConversationView';
import { SampleVoicePrompts } from './components/SampleVoicePrompts';
import { SchemesCatalogModal } from './components/SchemesCatalogModal';
import { DocumentsReadinessModal } from './components/DocumentsReadinessModal';
import { HelpVoiceModal } from './components/HelpVoiceModal';
import { audioSpeech } from './utils/audioSpeech';
import { SUPPORTED_LANGUAGES } from './utils/languages';
import { LanguageCode, ChatMessage, UserProfileState } from './types';
import { OFFICIAL_SCHEMES } from './data/schemesData';

export default function App() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('ta'); // Default to Tamil as emphasized in user brief
  const [voiceAutoPlay, setVoiceAutoPlay] = useState<boolean>(true);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [currentlySpeakingText, setCurrentlySpeakingText] = useState<string | null>(null);
  const [interimTranscript, setInterimTranscript] = useState<string>('');
  const [textInput, setTextInput] = useState<string>('');
  const [userProfile, setUserProfile] = useState<UserProfileState>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Modals state
  const [isCatalogOpen, setIsCatalogOpen] = useState<boolean>(false);
  const [isDocsChecklistOpen, setIsDocsChecklistOpen] = useState<boolean>(false);
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) || SUPPORTED_LANGUAGES[0];

  // Initial welcome message generator based on language
  const getInitialMessage = (lang: LanguageCode): ChatMessage => {
    switch (lang) {
      case 'ta':
        return {
          id: 'welcome-ta',
          sender: 'disa',
          text: 'வணக்கம் சகோதரி! நான் டிசா (DISA). பெண்களுக்கு கிடைக்கும் அரசு நலத்திட்டங்களை கண்டறிய நான் உங்களுக்கு உதவுகிறேன். உங்கள் கேள்வியை மைக்கை அழுத்தி கேளுங்கள்.',
          timestamp: new Date(),
          quickOptions: [
            'எனக்கு என்ன அரசு திட்டங்கள் கிடைக்கும்?',
            'தையல் மிஷின் வாங்க கடன் கிடைக்குமா?',
            'மாதாந்திர ₹1,000 உரிமைத் தொகை'
          ]
        };
      case 'hi':
        return {
          id: 'welcome-hi',
          sender: 'disa',
          text: 'नमस्ते दीदी! मैं दिशा (DISA) हूँ। महिलाओं के लिए लाभकारी सरकारी योजनाओं को जानने में मैं आपकी मदद करूंगी। माइक बटन दबाकर बोलें।',
          timestamp: new Date(),
          quickOptions: [
            'महिलाओं के लिए सरकारी योजनाएं क्या हैं?',
            'सिलाई मशीन व छोटा व्यापार शुरू करना है',
            'मातृ वंदना योजना ₹5,000'
          ]
        };
      case 'te':
        return {
          id: 'welcome-te',
          sender: 'disa',
          text: 'నమస్కారం! నేను డిసా (DISA). మహిళలకు ఉపయోగపడే ప్రభుత్వ పథకాలను తెలుసుకోవడానికి నేను మీకు సహాయం చేస్తాను. మైక్ నొక్కి మాట్లాడండి.',
          timestamp: new Date(),
          quickOptions: [
            'మహిళల పథకాలు ఏమున్నాయి?',
            'స్వయం ఉపాధి రుణాలు'
          ]
        };
      default:
        return {
          id: 'welcome-en',
          sender: 'disa',
          text: 'Hello Sister! I am DISA. I help women discover and benefit from Indian government schemes. Tap the microphone and speak your question.',
          timestamp: new Date(),
          quickOptions: [
            'What schemes are available for women?',
            'How to get a tailoring / business loan?',
            'Maternity cash assistance'
          ]
        };
    }
  };

  const [messages, setMessages] = useState<ChatMessage[]>([getInitialMessage('ta')]);

  // When language changes, update initial welcome message if conversation is clean
  const handleLanguageChange = (newLang: LanguageCode) => {
    setCurrentLang(newLang);
    audioSpeech.stopSpeaking();
    setIsSpeaking(false);
    setCurrentlySpeakingText(null);

    if (messages.length <= 1) {
      const newWelcome = getInitialMessage(newLang);
      setMessages([newWelcome]);
      if (voiceAutoPlay) {
        speakText(newWelcome.text, newLang);
      }
    }
  };

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    if (messages.length > 1) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isProcessing]);

  // Speech Output handler
  const speakText = (text: string, langCode: LanguageCode = currentLang) => {
    const langObj = SUPPORTED_LANGUAGES.find((l) => l.code === langCode) || currentLangObj;
    setCurrentlySpeakingText(text);
    setIsSpeaking(true);

    audioSpeech.speakText(
      text,
      langObj.speechCode,
      () => {
        setIsSpeaking(true);
      },
      () => {
        setIsSpeaking(false);
        setCurrentlySpeakingText(null);
      }
    );
  };

  const stopSpeaking = () => {
    audioSpeech.stopSpeaking();
    setIsSpeaking(false);
    setCurrentlySpeakingText(null);
  };

  // Speech-to-Text handlers
  const handleStartListening = () => {
    setErrorMessage(null);
    stopSpeaking();
    setInterimTranscript('');

    audioSpeech.startListening(
      currentLangObj.speechCode,
      (transcript, isFinal) => {
        setInterimTranscript(transcript);
        if (isFinal && transcript.trim()) {
          setIsListening(false);
          setInterimTranscript('');
          handleSendMessage(transcript.trim());
        }
      },
      (error) => {
        setIsListening(false);
        console.warn('Speech recognition error:', error);
        setErrorMessage('Could not hear voice clearly. Please tap the mic again or type your question below.');
      },
      () => {
        setIsListening(false);
      }
    );
    setIsListening(true);
  };

  const handleStopListening = () => {
    audioSpeech.stopListening();
    setIsListening(false);
    if (interimTranscript.trim()) {
      handleSendMessage(interimTranscript.trim());
      setInterimTranscript('');
    }
  };

  // Sending a message (Spoken, Typed, Quick Option, or Preset Prompt)
  const handleSendMessage = async (userText: string) => {
    if (!userText || !userText.trim() || isProcessing) return;

    setErrorMessage(null);
    stopSpeaking();

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText.trim(),
      timestamp: new Date(),
    };

    const updatedHistory = [...messages, userMessage];
    setMessages(updatedHistory);
    setTextInput('');
    setIsProcessing(true);

    try {
      // Build conversation history for API
      const historyPayload = messages.slice(-6).map((m) => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText.trim(),
          history: historyPayload,
          language: currentLang,
          userProfile: userProfile,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned error ${res.status}`);
      }

      const data = await res.json();

      const assistantMessage: ChatMessage = {
        id: `disa-${Date.now()}`,
        sender: 'disa',
        text: data.reply || 'மன்னிக்கவும், தகவலைப் பெற முடியவில்லை. மீண்டும் ஒருமுறை கேட்கவும்.',
        timestamp: new Date(),
        matchedSchemes: data.matchedSchemes || [],
        quickOptions: data.quickOptions || [],
        isProfileQuestion: data.isAskingProfileQuestion,
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // If user provided state or details, keep profile updated
      if (data.detectedState) {
        setUserProfile((prev) => ({ ...prev, state: data.detectedState }));
      }

      // Voice read aloud if enabled
      if (voiceAutoPlay && assistantMessage.text) {
        speakText(assistantMessage.text, currentLang);
      }
    } catch (err: any) {
      console.error('Chat error:', err);
      // Fallback response with offline database matching
      const fallbackSchemes = OFFICIAL_SCHEMES.slice(0, 2);
      const fallbackMsg: ChatMessage = {
        id: `disa-fallback-${Date.now()}`,
        sender: 'disa',
        text: currentLang === 'ta'
          ? 'கண்டிப்பாக சகோதரி! பெண்களுக்கு பல முக்கிய அரசு திட்டங்கள் உள்ளன. கீழே உள்ள திட்டங்களை நீங்கள் பார்க்கலாம்.'
          : currentLang === 'hi'
          ? 'जरूर दीदी! महिलाओं के लिए कई महत्वपूर्ण सरकारी योजनाएं उपलब्ध हैं। नीचे दी गई योजनाओं को देखें।'
          : 'Certainly! There are beneficial government schemes for women. Please check the schemes below.',
        timestamp: new Date(),
        matchedSchemes: fallbackSchemes,
        quickOptions: ['தையல் மிஷின் உதவி', 'வட்டி இல்லா கடன்', 'மகப்பேறு உதவி']
      };
      setMessages((prev) => [...prev, fallbackMsg]);
      if (voiceAutoPlay) {
        speakText(fallbackMsg.text, currentLang);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  // Reset conversation to fresh start
  const handleResetConversation = () => {
    stopSpeaking();
    setUserProfile({});
    const welcome = getInitialMessage(currentLang);
    setMessages([welcome]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F5] text-stone-900 font-sans selection:bg-rose-100 selection:text-rose-900">
      {/* Sticky Header */}
      <Header
        currentLang={currentLang}
        onSelectLang={handleLanguageChange}
        voiceAutoPlay={voiceAutoPlay}
        onToggleVoiceAutoPlay={() => {
          if (voiceAutoPlay) {
            stopSpeaking();
          }
          setVoiceAutoPlay(!voiceAutoPlay);
        }}
        onOpenHelp={() => setIsHelpOpen(true)}
        onOpenDocsChecklist={() => setIsDocsChecklistOpen(true)}
        onOpenSchemesCatalog={() => setIsCatalogOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-4 flex flex-col">
        {/* Safety & Anti-Fraud Banner */}
        <SafetyBanner currentLang={currentLang} />

        {/* Central Voice First Hero Section (Prominent when conversation is fresh) */}
        <div className="bg-white/80 backdrop-blur-xs border border-stone-200/80 rounded-3xl p-5 sm:p-7 shadow-xs mt-4">
          <div className="text-center max-w-lg mx-auto">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              DISA – AI Scheme Assistant
            </h1>
            <p className="text-sm sm:text-base font-semibold text-rose-700 mt-1">
              “Speak. Discover. Benefit.”
            </p>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
              {currentLang === 'ta'
                ? 'அரசு இணையதளங்களை தேட வேண்டிய அவசியமில்லை. உங்கள் தாய்மொழியில் இயல்பாக பேசி திட்டங்களை தெரிந்துகொள்ளுங்கள்.'
                : currentLang === 'hi'
                ? 'सरकारी वेबसाइटों पर भटकने की जरूरत नहीं। अपनी भाषा में बोलकर तुरंत सरकारी योजनाओं की जानकारी पाएं।'
                : 'No need to navigate complex government portals. Simply speak in your own language to discover beneficial schemes.'}
            </p>
          </div>

          {/* Large Visible Voice Mic Button */}
          <VoiceMicButton
            isListening={isListening}
            isProcessing={isProcessing}
            isSpeaking={isSpeaking}
            onStartListening={handleStartListening}
            onStopListening={handleStopListening}
            onStopSpeaking={stopSpeaking}
            currentLangObj={currentLangObj}
            interimTranscript={interimTranscript}
          />

          {/* Sample Spoken Questions */}
          {messages.length <= 1 && (
            <SampleVoicePrompts
              currentLang={currentLang}
              onSelectPrompt={handleSendMessage}
            />
          )}
        </div>

        {/* Error Notification if any */}
        {errorMessage && (
          <div className="mt-3 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs font-semibold text-rose-800 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
            <button
              onClick={() => setErrorMessage(null)}
              className="text-stone-400 hover:text-stone-700"
            >
              ✕
            </button>
          </div>
        )}

        {/* Conversation Stream */}
        <div className="my-6 flex-1">
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-500 uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5 text-rose-600" />
              <span>Conversation with DISA</span>
            </div>
            {messages.length > 1 && (
              <button
                onClick={handleResetConversation}
                className="text-xs font-semibold text-stone-500 hover:text-rose-700 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restart fresh / புதிய தொடக்கம்</span>
              </button>
            )}
          </div>

          <ConversationView
            messages={messages}
            currentLang={currentLang}
            onSpeakText={(text) => speakText(text)}
            onSelectQuickOption={(opt) => handleSendMessage(opt)}
            currentlySpeakingText={currentlySpeakingText}
          />

          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Floating Bottom Input Bar for text/mic accessibility */}
      <footer className="sticky bottom-0 z-20 bg-white/95 backdrop-blur-md border-t border-stone-200 py-3 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-2">
          {/* Quick Mic in footer */}
          <button
            onClick={isListening ? handleStopListening : handleStartListening}
            disabled={isProcessing}
            title={isListening ? 'Stop listening' : 'Tap to speak'}
            className={`p-3 rounded-2xl flex items-center justify-center transition-all ${
              isListening
                ? 'bg-rose-600 text-white animate-pulse shadow-md'
                : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
            }`}
          >
            <VoiceMicButtonMinimal isListening={isListening} />
          </button>

          {/* Text Input for quiet places or users who prefer typing */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(textInput);
            }}
            className="flex-1 flex items-center gap-2"
          >
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder={
                currentLang === 'ta'
                  ? 'இங்கு தட்டச்சு செய்யவும் அல்லது மேலே உள்ள மைக்கை அழுத்தவும்...'
                  : currentLang === 'hi'
                  ? 'यहाँ टाइप करें या ऊपर दिया माइक बटन दबाएं...'
                  : 'Type your question or tap the mic button above...'
              }
              className="flex-1 px-4 py-3 rounded-2xl border border-stone-300 bg-[#FBF8F5] text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white shadow-2xs"
            />
            <button
              type="submit"
              disabled={!textInput.trim() || isProcessing}
              className="p-3 rounded-2xl bg-rose-700 hover:bg-rose-800 disabled:opacity-40 text-white transition-all shadow-xs cursor-pointer"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </footer>

      {/* Modals */}
      <SchemesCatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        currentLang={currentLang}
        onSpeakText={(text) => speakText(text)}
      />

      <DocumentsReadinessModal
        isOpen={isDocsChecklistOpen}
        onClose={() => setIsDocsChecklistOpen(false)}
        currentLang={currentLang}
        onSelectSchemeToAsk={(prompt) => handleSendMessage(prompt)}
      />

      <HelpVoiceModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
        currentLang={currentLang}
        onSpeakText={(text) => speakText(text)}
      />
    </div>
  );
}

// Minimal mic icon helper for footer bar
function VoiceMicButtonMinimal({ isListening }: { isListening: boolean }) {
  return (
    <div className="relative">
      <div className="w-5 h-5 flex items-center justify-center font-bold">
        {isListening ? (
          <span className="w-3.5 h-3.5 bg-white rounded-xs animate-ping" />
        ) : (
          <span className="text-base">🎙️</span>
        )}
      </div>
    </div>
  );
}
