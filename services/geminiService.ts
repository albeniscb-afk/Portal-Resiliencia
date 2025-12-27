
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiResponse = async (userPrompt: string): Promise<string> => {
  if (!API_KEY) return "Erro: Chave de API não configurada.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `Você é uma assistente empática, profissional e acolhedora do "Portal Resiliência". 
        Seu objetivo é fornecer informações sobre como identificar violência doméstica, oferecer suporte emocional básico e orientar sobre recursos legais e de segurança (como o Ligue 180 no Brasil). 
        
        Regras cruciais:
        1. Nunca substitua o conselho médico ou policial de emergência.
        2. Se o usuário estiver em perigo imediato, recomende fortemente ligar para a polícia (190) ou para o atendimento à mulher (180).
        3. Use uma linguagem inclusiva, calma e não julgadora.
        4. Responda em Português do Brasil.
        5. Mantenha as respostas concisas e focadas em segurança e empoderamento.`,
        temperature: 0.7,
        topP: 0.8,
      },
    });

    return response.text || "Desculpe, não consegui processar sua solicitação no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao conectar com o serviço de assistência. Por favor, tente novamente mais tarde.";
  }
};
