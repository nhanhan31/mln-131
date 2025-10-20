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

// Mock responses for testing offline - specific to distribution principles
const getHoChiMinhMockResponse = (message: string): string => {
  const lowerMsg = message.toLowerCase();
  
  // Greetings
  if (lowerMsg.includes('xin chào') || lowerMsg.includes('hello') || lowerMsg.includes('chào')) {
    return 'Xin chào! Tôi là trợ lý AI chuyên về nguyên tắc phân phối trong chủ nghĩa xã hội và cộng sản. Tôi có thể giúp bạn hiểu về "Hưởng theo năng lực" và "Hưởng theo nhu cầu". Bạn muốn biết điều gì?';
  }
  
  // Questions about "distribution according to ability"
  if (lowerMsg.includes('năng lực') || lowerMsg.includes('theo lao động') || lowerMsg.includes('quá độ')) {
    return 'Trong giai đoạn quá độ lên CNXH, nguyên tắc chủ yếu là "Làm theo năng lực, hưởng theo lao động". Điều này có nghĩa ai làm nhiều, đóng góp nhiều thì được hưởng nhiều hơn. Đây là nguyên tắc công bằng tương đối, khuyến khích lao động và phát triển sản xuất.';
  }
  
  // Questions about "distribution according to needs"
  if (lowerMsg.includes('nhu cầu') || lowerMsg.includes('cộng sản chủ nghĩa') || lowerMsg.includes('lý tưởng')) {
    return 'Trong giai đoạn cao của CNCS, nguyên tắc là "Làm theo năng lực, hưởng theo nhu cầu". Khi đó, của cải xã hội dồi dào, mọi người được đáp ứng đầy đủ các nhu cầu chính đáng mà không còn phụ thuộc vào mức đóng góp lao động. Đây là mục tiêu cao nhất của xã hội cộng sản.';
  }
  
  // Questions about differences
  if (lowerMsg.includes('khác biệt') || lowerMsg.includes('so sánh') || lowerMsg.includes('phân biệt')) {
    return '"Hưởng theo lao động" là phân phối dựa vào kết quả lao động, còn chưa hoàn thiện vì còn chênh lệch. "Hưởng theo nhu cầu" là phân phối dựa vào nhu cầu chính đáng, thể hiện sự công bằng hoàn toàn khi xã hội đã phát triển cao.';
  }
  
  // Questions about why
  if (lowerMsg.includes('tại sao') || lowerMsg.includes('vì sao') || lowerMsg.includes('lý do')) {
    return 'Phải qua "hưởng theo năng lực" vì: 1) Năng suất lao động còn thấp, chưa đủ của cải cho mọi người; 2) Con người còn tư tưởng cá nhân, cần rèn luyện; 3) Khoa học-công nghệ chưa đủ phát triển. Không thể nhảy cóc ngay lên "hưởng theo nhu cầu" được.';
  }
  
  // Questions about Vietnam
  if (lowerMsg.includes('việt nam') || lowerMsg.includes('thực tiễn') || lowerMsg.includes('hiện nay')) {
    return 'Việt Nam đang trong thời kỳ quá độ lên CNXH, áp dụng nguyên tắc "làm theo năng lực, hưởng theo lao động" kết hợp với các chính sách an sinh xã hội. Nhà nước chú trọng công bằng xã hội, phát triển kinh tế để dần tiến tới mục tiêu cao hơn.';
  }
  
  // Questions about Marx/Lenin
  if (lowerMsg.includes('mác') || lowerMsg.includes('lênin') || lowerMsg.includes('gotha')) {
    return 'Karl Marx đã phân tích rõ trong "Phê phán Cương lĩnh Gotha": giai đoạn đầu của CNXH thực hiện phân phối theo lao động, giai đoạn cao của CNCS mới thực hiện phân phối theo nhu cầu. Đây là quan điểm khoa học về sự phát triển của xã hội.';
  }
  
  // Default response for off-topic
  if (lowerMsg.includes('thời tiết') || lowerMsg.includes('thể thao') || lowerMsg.includes('giải trí')) {
    return 'Tôi chuyên về nguyên tắc phân phối trong CNXH và CNCS. Bạn có muốn tìm hiểu về "hưởng theo năng lực", "hưởng theo nhu cầu", hay thực tiễn Việt Nam không?';
  }
  
  return `Cảm ơn bạn đã hỏi về "${message}". Tôi có thể giúp bạn tìm hiểu về:
  
• Nguyên tắc "Hưởng theo năng lực" trong thời kỳ quá độ
• Nguyên tắc "Hưởng theo nhu cầu" trong CNCS
• Sự khác biệt giữa hai nguyên tắc
• Lý do phải trải qua "hưởng theo năng lực"
• Thực tiễn Việt Nam

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