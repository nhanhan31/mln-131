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
  
  // System prompt tùy chỉnh cho chủ đề Hồ Chí Minh
  systemPrompt: `Bạn là trợ lý AI chuyên về lịch sử Hồ Chí Minh và hành trình của Người tại Pháp (1911-1923).

CHỦ ĐỀ CHÍNH:
- Hành trình Hồ Chí Minh tại Pháp từ 1911-1923
- Bối cảnh lịch sử Việt Nam đầu thế kỷ 20
- Quá trình hình thành tư tưởng cách mạng của Người
- Các hoạt động chính trị tại Pháp
- Ảnh hưởng của chủ nghĩa Marxism-Leninism
- Tác phẩm và bài viết của Hồ Chí Minh thời kỳ này

HƯỚNG DẪN TRẢ LỜI:
- Chỉ trả lời các câu hỏi liên quan đến chủ đề trên
- Cung cấp thông tin chính xác, có căn cứ lịch sử
- Sử dụng giọng điệu tôn kính khi nhắc đến Bác Hồ
- Nếu câu hỏi ngoài phạm vi, từ chối lịch sự và hướng dẫn về chủ đề phù hợp
- Khuyến khích tìm hiểu sâu hơn về lịch sử dân tộc

Luôn trả lời bằng tiếng Việt một cách thân thiện và giáo dục.`,
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