import { AI_CONFIG, PROVIDER_CONFIGS, ChatMessage, AIProvider } from '../config/aiConfig';

export const sendMessageToAI = async (
  message: string, 
  previousMessages: ChatMessage[] = []
): Promise<string> => {
  try {
    const { provider, apiKey, systemPrompt } = AI_CONFIG;

    // Format messages for API
    const formattedMessages = previousMessages
      .filter(msg => msg.role === 'user' || msg.role === 'assistant')
      .map(msg => ({
        role: msg.role,
        content: msg.content
      }));

    const messages = [
      { role: 'system' as const, content: systemPrompt },
      ...formattedMessages,
      { role: 'user' as const, content: message }
    ];

    // Call API based on provider
    if (provider === 'groq' && apiKey) {
      return await sendToGroq(messages, apiKey);
    } else if (provider === 'openai' && apiKey) {
      return await sendToOpenAI(messages, apiKey);
    } else {
      // Fallback to mock response for development/testing
      return getHoChiMinhMockResponse(message);
    }
  } catch (error) {
    console.error("Error in sendMessageToAI:", error);
    return "Xin lỗi, đã có lỗi xảy ra khi kết nối với AI. Vui lòng thử lại sau.";
  }
};

// Function to call Groq API
const sendToGroq = async (messages: any[], apiKey: string): Promise<string> => {
  const { baseUrl, defaultModel, temperature } = PROVIDER_CONFIGS.groq;
  
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: defaultModel,
      temperature: temperature,
      messages: messages,
      stream: false
    })
  });

  if (!response.ok) {
    throw new Error(`Groq API error: ${response.status} - ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || 'Không có nội dung trả về từ AI.';
};

// Function to call OpenAI API
const sendToOpenAI = async (messages: any[], apiKey: string): Promise<string> => {
  const { baseUrl, defaultModel, temperature } = PROVIDER_CONFIGS.openai;
  
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: defaultModel,
      temperature: temperature,
      messages: messages
    })
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.status} - ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || 'Không có nội dung trả về từ AI.';
};

// Mock responses for testing offline - specific to Ho Chi Minh historical content
const getHoChiMinhMockResponse = (message: string): string => {
  const lowerMsg = message.toLowerCase();
  
  // Greetings
  if (lowerMsg.includes('xin chào') || lowerMsg.includes('hello') || lowerMsg.includes('chào')) {
    return 'Xin chào! Tôi là trợ lý AI chuyên về lịch sử Hồ Chí Minh. Tôi có thể giúp bạn tìm hiểu về hành trình của Bác tại Pháp từ 1911-1923. Bạn muốn biết điều gì?';
  }
  
  // Questions about departure/journey
  if (lowerMsg.includes('ra đi') || lowerMsg.includes('xuất cảnh') || lowerMsg.includes('1911')) {
    return 'Năm 1911, Nguyễn Tất Thành rời Việt Nam tại cảng Nhà Rồng (Sài Gòn) với ý định tìm đường cứu nước. Lúc đó Người mới 21 tuổi, làm phụ bếp trên tàu Amiral Latouche-Tréville với tên Ba (được gọi là Văn Ba).';
  }
  
  // Questions about France period
  if (lowerMsg.includes('pháp') || lowerMsg.includes('paris') || lowerMsg.includes('versailles')) {
    return 'Tại Pháp, Hồ Chí Minh đã trải qua nhiều giai đoạn quan trọng: làm thợ ảnh, viết báo, tham gia hoạt động chính trị. Điểm nhấn lớn là việc gửi "Bản yêu sách của nhân dân An Nam" tại Hội nghị Versailles 1919 và gia nhập Đảng Cộng sản Pháp năm 1920.';
  }
  
  // Questions about Communist Party
  if (lowerMsg.includes('cộng sản') || lowerMsg.includes('đảng') || lowerMsg.includes('1920')) {
    return 'Năm 1920, Hồ Chí Minh gia nhập Đảng Cộng sản Pháp sau khi đọc "Sơ thảo luận cương về vấn đề dân tộc và thuộc địa" của Lenin. Đây là bước ngoặt quan trọng trong việc hình thành tư tưởng cách mạng của Người.';
  }
  
  // Questions about writings/journalism
  if (lowerMsg.includes('báo') || lowerMsg.includes('viết') || lowerMsg.includes('le paria')) {
    return 'Hồ Chí Minh đã viết báo tại Pháp, đặc biệt là báo "Le Paria" (Người cùng khổ) từ 1922-1923. Qua báo chí, Người kêu gọi đoàn kết các dân tộc thuộc địa chống lại ách áp bức thực dân.';
  }
  
  // Questions about impact/influence
  if (lowerMsg.includes('ảnh hưởng') || lowerMsg.includes('tác động') || lowerMsg.includes('ý nghĩa')) {
    return 'Hành trình tại Pháp có ý nghĩa quyết định trong việc hình thành nhân cách và tư tưởng cách mạng của Hồ Chí Minh. Từ một thanh niên yêu nước, Người đã trở thành một chiến sĩ cộng sản quốc tế với con đường cứu nước rõ ràng.';
  }
  
  // Default response for off-topic or unclear questions
  if (lowerMsg.includes('thời tiết') || lowerMsg.includes('thể thao') || lowerMsg.includes('giải trí')) {
    return 'Tôi chuyên về lịch sử Hồ Chí Minh, đặc biệt là giai đoạn tại Pháp (1911-1923). Bạn có muốn tìm hiểu về hành trình ra đi, các hoạt động tại Pháp, hay quá trình hình thành tư tưởng cách mạng của Bác không?';
  }
  
  return `Cảm ơn bạn đã hỏi về "${message}". Tôi có thể giúp bạn tìm hiểu về:
  
• Hành trình ra đi năm 1911
• Cuộc sống và công việc tại Pháp  
• Hoạt động chính trị và báo chí
• Quá trình gia nhập Đảng Cộng sản Pháp
• Ý nghĩa lịch sử của giai đoạn này

Bạn muốn tìm hiểu về khía cạnh nào?`;
};

// Utility function to validate message content
export const isValidMessage = (message: string): boolean => {
  return message.trim().length > 0 && message.trim().length <= 1000;
};

// Utility function to clean message content
export const cleanMessage = (message: string): string => {
  return message.trim().replace(/\s+/g, ' ');
};