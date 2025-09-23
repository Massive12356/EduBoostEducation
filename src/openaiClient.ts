// src/openaiClient.ts
import OpenAI from 'openai';

// ⚠️ Only for demos — never expose your key in production.
// In production, call your own backend endpoint.
export const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // define in .env
  dangerouslyAllowBrowser: true, // allows SDK to run in the browser
});
