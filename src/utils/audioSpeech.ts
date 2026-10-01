// Helper for Web Audio / TTS and Speech Recognition

class AudioSpeechManager {
  private currentAudio: HTMLAudioElement | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private recognition: any = null;
  private isListening: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = true;
      }
    }
  }

  // Speak text using either Server-side Gemini TTS (gemini-3.8-flash-lite-tts) or Browser Web Speech
  async speakText(
    text: string,
    speechLangCode: string = 'en-IN',
    onStart?: () => void,
    onEnd?: () => void
  ): Promise<void> {
    this.stopSpeaking();

    // Clean text for natural speech reading (strip markdown symbols)
    const cleanText = text
      .replace(/[*_#`~[\]()]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (!cleanText) return;

    // Try calling server-side Gemini TTS endpoint first
    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: cleanText }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.audioBase64) {
          const audio = new Audio(`data:audio/wav;base64,${data.audioBase64}`);
          this.currentAudio = audio;

          audio.onplay = () => onStart?.();
          audio.onended = () => {
            this.currentAudio = null;
            onEnd?.();
          };
          audio.onerror = () => {
            this.currentAudio = null;
            this.speakWithBrowserFallback(cleanText, speechLangCode, onStart, onEnd);
          };

          await audio.play();
          return;
        }
      }
    } catch (err) {
      console.warn('Server TTS failed, falling back to browser speech synthesis:', err);
    }

    // Fallback to browser SpeechSynthesis
    this.speakWithBrowserFallback(cleanText, speechLangCode, onStart, onEnd);
  }

  // Browser speech synthesis fallback
  speakWithBrowserFallback(
    text: string,
    langCode: string,
    onStart?: () => void,
    onEnd?: () => void
  ) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      onEnd?.();
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    this.currentUtterance = utterance;
    utterance.lang = langCode;
    utterance.rate = 0.95; // Gentle and comfortable speed for clarity
    utterance.pitch = 1.05;

    // Try to find regional voice matching the language
    const voices = window.speechSynthesis.getVoices();
    const matchingVoice = voices.find(
      (v) => v.lang.toLowerCase() === langCode.toLowerCase() || v.lang.startsWith(langCode.slice(0, 2))
    );
    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }

    utterance.onstart = () => onStart?.();
    utterance.onend = () => {
      this.currentUtterance = null;
      onEnd?.();
    };
    utterance.onerror = () => {
      this.currentUtterance = null;
      onEnd?.();
    };

    window.speechSynthesis.speak(utterance);
  }

  // Stop currently playing speech
  stopSpeaking() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.currentUtterance = null;
  }

  // Check if browser supports speech recognition
  isSpeechRecognitionSupported(): boolean {
    return !!this.recognition;
  }

  // Start speech-to-text recognition
  startListening(
    langCode: string,
    onResult: (transcript: string, isFinal: boolean) => void,
    onError: (error: string) => void,
    onEnd: () => void
  ) {
    if (!this.recognition) {
      onError('Speech recognition not supported on this browser. You can type in the box below.');
      return;
    }

    this.stopSpeaking(); // stop any audio talking when user starts speaking

    try {
      this.recognition.lang = langCode;
      this.isListening = true;

      this.recognition.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        if (finalTranscript) {
          onResult(finalTranscript.trim(), true);
        } else if (interimTranscript) {
          onResult(interimTranscript.trim(), false);
        }
      };

      this.recognition.onerror = (event: any) => {
        this.isListening = false;
        onError(event.error || 'Mic error');
      };

      this.recognition.onend = () => {
        this.isListening = false;
        onEnd();
      };

      this.recognition.start();
    } catch (e: any) {
      this.isListening = false;
      console.warn('Recognition start error:', e);
      onError(e.message || 'Could not start microphone');
    }
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        // ignore
      }
      this.isListening = false;
    }
  }
}

export const audioSpeech = new AudioSpeechManager();
