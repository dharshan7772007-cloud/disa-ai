import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { OFFICIAL_SCHEMES, SAFETY_GUIDELINES } from './src/data/schemesData.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize GoogleGenAI SDK with required telemetry header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// GET /api/schemes - Directory of all verified schemes
app.get('/api/schemes', (req: Request, res: Response) => {
  const { category, state, search } = req.query;
  let filtered = [...OFFICIAL_SCHEMES];

  if (category && typeof category === 'string' && category !== 'all') {
    filtered = filtered.filter((s) => s.category === category);
  }

  if (state && typeof state === 'string' && state !== 'all') {
    filtered = filtered.filter(
      (s) => s.state === 'All India' || s.state.toLowerCase() === state.toLowerCase()
    );
  }

  if (search && typeof search === 'string') {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (s) =>
        s.name.en.toLowerCase().includes(q) ||
        (s.name.ta && s.name.ta.toLowerCase().includes(q)) ||
        (s.name.hi && s.name.hi.toLowerCase().includes(q)) ||
        s.simpleWhat.en.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  res.json({ schemes: filtered, safety: SAFETY_GUIDELINES });
});

// POST /api/chat - DISA conversational scheme assistant
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, history = [], language = 'auto', userProfile = {} } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    // Build context about known verified government schemes for DISA
    const schemesBrief = OFFICIAL_SCHEMES.map((s) => ({
      id: s.id,
      name_en: s.name.en,
      name_ta: s.name.ta,
      name_hi: s.name.hi,
      category: s.category,
      state: s.state,
      simpleWhat: s.simpleWhat.en,
      mainBenefits: s.mainBenefits.en,
      eligibility: s.eligibility.en,
      documentsRequired: s.documentsRequired.en,
      whereToApply: s.whereToApply.en,
      officialWebsite: s.officialWebsite,
    }));

    const systemPrompt = `
You are "DISA" (டிசா / दिशा), an AI Government Scheme Assistant for Women.
Tagline: "Speak. Discover. Benefit."

YOUR MISSION:
Help women, especially women with limited literacy, first-time smartphone users, and rural/semi-urban women, independently discover and understand Indian government schemes and benefits.
Users interact by speaking or typing naturally in their own language.

CORE COMMUNICATION RULES:
1. VERY SIMPLE WORDS, SHORT SENTENCES:
   - Speak in clear, warm, conversational, everyday words.
   - Maximum 2 to 3 short sentences per response. Never write long essays or bureaucratic paragraphs.
   - Do NOT use complicated government terminology, legal clauses, or English jargon.
2. SAME LANGUAGE ALWAYS:
   - If the user speaks in Tamil (தமிழ்), reply ONLY in pure simple Tamil!
   - If the user speaks in Hindi (हिंदी), reply ONLY in pure simple Hindi!
   - If the user speaks in Telugu, Kannada, Bengali, Marathi, or English, reply in that exact language.
3. ONE SIMPLE QUESTION AT A TIME:
   - If you need to know their state, age, or occupation to match a scheme, ask ONLY ONE question at a time!
   - Example 1: "வணக்கம் சகோதரி! நான் உங்களுக்கு உதவ தயாராக உள்ளேன். நீங்கள் எந்த மாநிலத்தில் வசிக்கிறீர்கள்?" (Tamil)
   - Example 2: "नमस्ते दीदी! मैं आपकी पूरी मदद करूंगी। पहले बताइए, आप किस राज्य में रहती हैं?" (Hindi)
4. MATCH WITH REAL OFFICIAL SCHEMES:
   - Recommend only authentic, verified Indian government schemes (Central or State schemes).
   - Relevant schemes in database include:
     - Lakhpati Didi Scheme (NRLM self-help group loans ₹1-5 Lakhs, skill training)
     - Pradhan Mantri Matru Vandana Yojana (PMMVY, ₹5,000-₹6,000 maternity cash)
     - Pradhan Mantri Mudra Yojana for Women (Collateral-free business loans up to ₹50,000 to ₹20 Lakhs)
     - Sukanya Samriddhi Yojana (8.2% guaranteed savings for girl child under 10)
     - PM Vishwakarma Scheme (Free sewing machine / ₹15,000 tool grant for tailoring, 5-day training + ₹500/day stipend)
     - Pradhan Mantri Ujjwala Yojana (Free gas connection, chulha, cylinder subsidy)
     - Pradhan Mantri Awas Yojana (PMAY ₹1.2-2.5 Lakh concrete pucca house in woman's name)
     - Kalaignar Magalir Urimai Thogai (Tamil Nadu ₹1,000 monthly cash grant)
     - Pudhumai Penn Scheme (Tamil Nadu ₹1,000 monthly higher education grant for girl students)
     - Indira Gandhi National Widow Pension (Monthly pension for widowed women)
     - Stand-Up India (Greenfield enterprise loan ₹10L - ₹1Cr for women entrepreneurs)
5. STEP-BY-STEP GUIDANCE:
   - Never just say "apply online". Say: "First keep your Aadhaar card ready. Next visit your nearby Gram Panchayat or e-Sevai / CSC center. I will guide you on each step."
6. SAFETY & PRIVACY (CRITICAL):
   - NEVER ask for passwords, OTPs, ATM PINs, UPI PINs, or bank account credentials.
   - State schemes are free; remind users never to pay money to middlemen.
   - Direct them to official government sources and centers.

AVAILABLE SCHEMES IN DISA DATABASE:
${JSON.stringify(schemesBrief, null, 2)}

CURRENT USER PROFILE ACCUMULATED SO FAR:
${JSON.stringify(userProfile)}

OUTPUT FORMAT:
You MUST respond in clean JSON format matching this structure:
{
  "reply": "The spoken short explanation/response in the user's language (max 2-3 simple sentences).",
  "detectedLanguage": "ta" | "hi" | "en" | "te" | "kn" | "bn" | "mr" | "other",
  "matchedSchemeIds": ["lakhpati-didi", "pm-mudra-women"], // Array of scheme IDs from database that match, or empty array if still gathering profile
  "isAskingProfileQuestion": true | false, // true if asking for State/Age/Occupation next
  "nextSuggestedStep": "Short one-liner next step or reassurance in user language",
  "quickOptions": ["தமிழ்நாடு", "கேரளா", "பிற மாநிலம்"] // 2-3 optional simple tap buttons to help non-typists answer quickly, or empty array
}
`;

    const contents = [
      { role: 'user', parts: [{ text: systemPrompt }] },
      { role: 'model', parts: [{ text: '{"reply": "Understood. I will act as DISA with warm, simple, localized speech, one question at a time.", "detectedLanguage": "en", "matchedSchemeIds": [], "isAskingProfileQuestion": false, "nextSuggestedStep": "", "quickOptions": []}' }] },
      ...history.map((h: { role: string; content: string }) => ({
        role: h.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: h.content }],
      })),
      { role: 'user', parts: [{ text: message }] },
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: contents as any,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.3,
      },
    });

    const rawText = response.text || '{}';
    let parsedData;
    try {
      parsedData = JSON.parse(rawText);
    } catch {
      parsedData = {
        reply: rawText,
        detectedLanguage: 'en',
        matchedSchemeIds: [],
        isAskingProfileQuestion: false,
        nextSuggestedStep: '',
        quickOptions: [],
      };
    }

    // Attach full scheme objects for any matched IDs so frontend can render rich cards effortlessly
    const matchedSchemes = parsedData.matchedSchemeIds
      ? OFFICIAL_SCHEMES.filter((s) => parsedData.matchedSchemeIds.includes(s.id))
      : [];

    res.json({
      ...parsedData,
      matchedSchemes,
      safety: SAFETY_GUIDELINES,
    });
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    res.status(500).json({
      error: 'Failed to process conversation',
      details: error.message,
    });
  }
});

// POST /api/tts - High Quality Voice Speech Generation
app.post('/api/tts', async (req: Request, res: Response) => {
  try {
    const { text, voice = 'Kore' } = req.body;

    if (!text || typeof text !== 'string') {
      res.status(400).json({ error: 'Text is required for TTS' });
      return;
    }

    if (!process.env.GEMINI_API_KEY) {
      res.json({ fallback: true, message: 'No GEMINI_API_KEY provided; using browser TTS' });
      return;
    }

    // Use gemini-3.8-flash-lite-tts per SKILL.md
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash-lite-tts',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: text.slice(0, 500), // Keep concise for snappy mobile voice playback
              speechMetadata: {
                style: 'Clear, gentle, warm, patient female voice guide for accessibility',
              },
            },
          ],
        },
      ],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: voice || 'Kore' },
          },
        },
      },
    });

    const base64Audio =
      response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (base64Audio) {
      res.json({
        audioBase64: base64Audio,
        mimeType: 'audio/wav',
        fallback: false,
      });
    } else {
      res.json({ fallback: true, message: 'No audio data returned; using browser TTS' });
    }
  } catch (error: any) {
    console.warn('TTS error (falling back to client synthesis):', error.message);
    res.json({ fallback: true, error: error.message });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`DISA Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
