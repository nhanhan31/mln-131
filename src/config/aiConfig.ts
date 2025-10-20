// Helper function to get environment variables
const getEnvVariable = (key: string): string => {
  if (typeof import.meta !== 'undefined' && (import.meta as any).env) {
    return (import.meta as any).env[key] || '';
  }
  if (typeof process !== 'undefined' && process.env) {
    return process.env[key] || '';
  }
  return '';
};

export const AI_CONFIG = {
  provider: (getEnvVariable('VITE_AI_PROVIDER') || 'groq') as AIProvider,
  apiKey: getEnvVariable('VITE_GROQ_API_KEY') || getEnvVariable('VITE_OPENAI_API_KEY') || getEnvVariable('VITE_GEMINI_API_KEY'),
  
  // System prompt tùy chỉnh cho chủ đề nguyên tắc phân phối
  systemPrompt: `Bạn là trợ lý AI chuyên về triết học Mác-Lênin, đặc biệt về các nguyên tắc phân phối trong chủ nghĩa xã hội và cộng sản chủ nghĩa.

CHỦ ĐỀ CHÍNH:
- Nguyên tắc "Hưởng theo năng lực" trong giai đoạn quá độ lên CNXH
- Nguyên tắc "Hưởng theo nhu cầu" trong xã hội cộng sản chủ nghĩa
- Sự khác biệt giữa "Làm theo năng lực, hưởng theo lao động" và "Làm theo năng lực, hưởng theo nhu cầu"
- Lý do tại sao phải trải qua giai đoạn "hưởng theo năng lực" trước khi đạt "hưởng theo nhu cầu"
- Thực tiễn áp dụng ở Việt Nam trong thời kỳ quá độ
- Quan điểm của C.Mác, Ph.Ăngghen, V.I.Lênin về vấn đề này

HƯỚNG DẪN TRẢ LỜI:
- Chỉ trả lời các câu hỏi liên quan đến chủ đề trên
- Giải thích rõ ràng, dễ hiểu với ví dụ thực tế
- Sử dụng thuật ngữ chính xác trong lý luận Mác-Lênin
- Liên hệ với thực tiễn Việt Nam khi phù hợp
- Nếu câu hỏi ngoài phạm vi, từ chối lịch sự và hướng dẫn về chủ đề phù hợp

Luôn trả lời bằng tiếng Việt một cách thân thiện, khoa học và dễ hiểu.`,
};

export const PROVIDER_CONFIGS = {
  groq: {
    baseUrl: 'https://api.groq.com/openai/v1/chat/completions',
    defaultModel: 'llama-3.1-8b-instant',
    temperature: 0.3, // Thấp hơn để có câu trả lời chính xác hơn cho nội dung lịch sử
  },
  openai: {
    baseUrl: 'https://api.openai.com/v1/chat/completions',
    defaultModel: 'gpt-3.5-turbo',
    temperature: 0.5,
  },
  gemini: {
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    defaultModel: 'gemini-pro',
    temperature: 0.4,
  }
};

export type AIProvider = keyof typeof PROVIDER_CONFIGS;

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: number;
}