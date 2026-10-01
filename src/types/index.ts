import { Scheme } from '../data/schemesData';

export type LanguageCode = 'ta' | 'hi' | 'en' | 'te' | 'kn' | 'mr' | 'bn';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  speechCode: string;
  welcomeVoiceText: string;
  micPrompt: string;
  listeningText: string;
  tapToSpeakText: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'disa';
  text: string;
  timestamp: Date;
  matchedSchemes?: Scheme[];
  quickOptions?: string[];
  isProfileQuestion?: boolean;
  audioPlaying?: boolean;
}

export interface UserProfileState {
  state?: string;
  ageGroup?: string;
  occupation?: string;
  maritalStatus?: string;
  incomeCategory?: string;
  interests?: string[];
}
