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
  if (lowerMsg.includes('xin chào') || lowerMsg.includes('hello') || lowerMsg.includes('chào') || lowerMsg.includes('hi')) {
    return 'Xin chào! 👋 Tôi là trợ lý AI chuyên về nguyên tắc phân phối trong chủ nghĩa xã hội và cộng sản chủ nghĩa.\n\nTôi có thể giúp bạn hiểu về:\n\n🔹 "Hưởng theo lao động" trong giai đoạn quá độ\n🔹 "Hưởng theo nhu cầu" trong xã hội cộng sản\n🔹 Tại sao phải qua "hưởng theo lao động"\n🔹 Thực tiễn áp dụng tại Việt Nam\n\nBạn muốn tìm hiểu điều gì?';
  }
  
  // Questions about "distribution according to labor/ability"
  if (lowerMsg.includes('năng lực') || lowerMsg.includes('theo lao động') || lowerMsg.includes('quá độ') || lowerMsg.includes('cnxh')) {
    return '📚 **"HƯỞNG THEO LAO ĐỘNG"** - Nguyên tắc của giai đoạn quá độ lên CNXH:\n\n✅ **Công thức:** "Làm theo năng lực, hưởng theo lao động"\n\n✅ **Ý nghĩa:** Ai làm nhiều, đóng góp nhiều → được hưởng nhiều hơn\n\n✅ **Mục đích:** \n- Khuyến khích người lao động phát huy năng lực\n- Tạo động lực phát triển sản xuất\n- Công bằng tương đối phù hợp với điều kiện\n\n📝 **Ví dụ Việt Nam:** Chính sách lương theo năng suất, khen thưởng người lao động giỏi, thu nhập gắn với kết quả công việc.\n\nBạn muốn tìm hiểu thêm về khía cạnh nào?';
  }
  
  // Questions about "distribution according to needs"
  if (lowerMsg.includes('nhu cầu') || lowerMsg.includes('cộng sản chủ nghĩa') || lowerMsg.includes('lý tưởng') || lowerMsg.includes('cncs')) {
    return '🌟 **"HƯỞNG THEO NHU CẦU"** - Mục tiêu cao nhất của CNCS:\n\n✨ **Công thức:** "Làm theo năng lực, hưởng theo nhu cầu"\n\n✨ **Đặc điểm:**\n- Mọi người được đáp ứng đầy đủ nhu cầu chính đáng\n- Không còn phụ thuộc vào mức đóng góp lao động\n- Của cải xã hội dồi dào\n- Con người phát triển toàn diện\n\n🔧 **Điều kiện:**\n- Năng suất lao động rất cao\n- Khoa học công nghệ phát triển mạnh\n- Ý thức cộng đồng cao\n- Tư liệu sản xuất công hữu vững chắc\n\n💡 Đây là lý tưởng mà nhân loại phấn đấu, khi xã hội đã vượt qua giai đoạn quá độ.';
  }
  
  // Questions about differences
  if (lowerMsg.includes('khác biệt') || lowerMsg.includes('so sánh') || lowerMsg.includes('phân biệt') || lowerMsg.includes('khác nhau')) {
    return '⚖️ **SO SÁNH HAI NGUYÊN TẮC:**\n\n**1️⃣ "Hưởng theo lao động" (Giai đoạn CNXH):**\n- Phân phối dựa vào kết quả lao động\n- Còn chênh lệch thu nhập\n- Phù hợp khi của cải chưa dồi dào\n- Công bằng tương đối\n\n**2️⃣ "Hưởng theo nhu cầu" (Giai đoạn CNCS):**\n- Phân phối dựa vào nhu cầu chính đáng\n- Không còn chênh lệch, bình đẳng thực chất\n- Yêu cầu của cải dư thừa\n- Công bằng hoàn toàn\n\n🔄 **Mối quan hệ:** Không đối lập mà kế thừa - phát triển. Giai đoạn 1 là bước đệm cần thiết để tiến tới giai đoạn 2.';
  }
  
  // Questions about why/reasons
  if (lowerMsg.includes('tại sao') || lowerMsg.includes('vì sao') || lowerMsg.includes('lý do') || lowerMsg.includes('nguyên nhân')) {
    return '❓ **TẠI SAO PHẢI QUA "HƯỞNG THEO LAO ĐỘNG"?**\n\n**1. Về kinh tế 💰:**\n- Năng suất lao động còn thấp\n- Của cải chưa dồi dào đủ cho mọi người\n- Nếu "hưởng theo nhu cầu" ngay → thiếu hụt, mất động lực sản xuất\n\n**2. Về con người 👥:**\n- Ý thức con người còn hạn chế, có tư tưởng cá nhân\n- Cần rèn luyện tinh thần trách nhiệm, tự giác\n- Thói quen "ai làm nhiều, hưởng nhiều" tạo động lực cống hiến\n\n**3. Về khoa học - kỹ thuật 🔬:**\n- Công nghệ chưa đủ phát triển\n- Chưa tự động hóa sản xuất\n- Cần thời gian xây dựng cơ sở vật chất\n\n⚠️ **Kết luận:** Không thể "nhảy cóc" lên CNCS. Phải trải qua quá trình tích lũy, phát triển từng bước.';
  }
  
  // Questions about Vietnam
  if (lowerMsg.includes('việt nam') || lowerMsg.includes('vn') || lowerMsg.includes('thực tiễn') || lowerMsg.includes('hiện nay') || lowerMsg.includes('ứng dụng')) {
    return '🇻🇳 **THỰC TIỄN VIỆT NAM:**\n\n**📍 Hiện trạng:**\nViệt Nam đang trong thời kỳ quá độ lên CNXH với nền kinh tế thị trường định hướng XHCN.\n\n**💼 Nguyên tắc phân phối:**\n- Chủ yếu: "Làm theo năng lực, hưởng theo lao động"\n- Kết hợp: Phân phối theo vốn, theo hiệu quả kinh doanh\n- Bổ sung: An sinh xã hội, phúc lợi công cộng\n\n**🎯 Chính sách cụ thể:**\n✅ Lương theo năng suất, vị trí việc làm\n✅ Giáo dục phổ cập miễn phí\n✅ Bảo hiểm y tế toàn dân\n✅ Chính sách xóa đói giảm nghèo\n✅ Trợ cấp xã hội cho người yếu thế\n\n**🌱 Định hướng:** Phát triển kinh tế đi đôi với tiến bộ và công bằng xã hội, từng bước tiến tới mục tiêu cao hơn.';
  }
  
  // Questions about Marx/Lenin
  if (lowerMsg.includes('mác') || lowerMsg.includes('marx') || lowerMsg.includes('lênin') || lowerMsg.includes('lenin') || lowerMsg.includes('gotha') || lowerMsg.includes('ăngghen') || lowerMsg.includes('engels')) {
    return '📖 **QUAN ĐIỂM MÁC-LÊNIN:**\n\n**Karl Marx trong "Phê phán Cương lĩnh Gotha" (1875):**\n\n"Trong giai đoạn đầu của xã hội cộng sản (tức CNXH), mỗi người đóng góp theo khả năng và nhận lại tương xứng với lao động của mình."\n\n"Trong giai đoạn cao hơn của xã hội cộng sản, khi của cải vật chất tăng lên dồi dào, mới có thể thực hiện nguyên tắc: Làm theo năng lực, hưởng theo nhu cầu."\n\n**V.I. Lenin:**\nNhấn mạnh CNXH là giai đoạn quá độ cần thiết, không thể nhảy cóc từ xã hội cũ lên CNCS ngay được.\n\n**Ý nghĩa:**\nĐây là cơ sở khoa học cho con đường phát triển của các nước XHCN, trong đó có Việt Nam.';
  }
  
  // Questions about examples
  if (lowerMsg.includes('ví dụ') || lowerMsg.includes('minh họa') || lowerMsg.includes('cụ thể')) {
    return '💡 **VÍ DỤ MINH HỌA:**\n\n**Ví dụ 1 - Trong học tập:**\n📚 Giai đoạn "hưởng theo lao động": Học sinh phải tự nỗ lực học tập → ai chăm chỉ được điểm cao, học bổng\n🎓 Giai đoạn "hưởng theo nhu cầu": Mọi người đều được học tập miễn phí, có điều kiện phát triển tối đa năng lực\n\n**Ví dụ 2 - Trong lao động:**\n⚙️ Giai đoạn "hưởng theo lao động": Công nhân làm nhiều giờ, năng suất cao → lương cao hơn\n🏭 Giai đoạn "hưởng theo nhu cầu": Robot, AI làm việc thay người → mọi người đều có mức sống tốt mà không cần làm nhiều\n\n**Ví dụ 3 - Việt Nam thực tế:**\n🇻🇳 Hiện nay: Giáo viên giỏi được thưởng, bác sĩ giỏi thu nhập cao (hưởng theo lao động)\n🇻🇳 Mục tiêu: Y tế, giáo dục miễn phí chất lượng cao cho tất cả (tiến dần đến hưởng theo nhu cầu)';
  }
  
  // Default response for off-topic
  if (lowerMsg.includes('thời tiết') || lowerMsg.includes('thể thao') || lowerMsg.includes('giải trí') || lowerMsg.includes('phim') || lowerMsg.includes('nhạc')) {
    return '😊 Xin lỗi, tôi chỉ chuyên về **nguyên tắc phân phối trong CNXH và CNCS**.\n\nTôi có thể giúp bạn về:\n\n✅ "Hưởng theo lao động" vs "Hưởng theo nhu cầu"\n✅ Lý do phải qua giai đoạn quá độ\n✅ Thực tiễn Việt Nam\n✅ Quan điểm Mác-Lênin\n✅ Ví dụ minh họa cụ thể\n\nBạn có muốn tìm hiểu về chủ đề nào trong những điều trên không?';
  }
  
  return `Cảm ơn bạn đã quan tâm! 🙏\n\nTôi có thể giúp bạn tìm hiểu về:\n\n📌 **"Hưởng theo lao động"** - Nguyên tắc giai đoạn quá độ\n📌 **"Hưởng theo nhu cầu"** - Mục tiêu xã hội cộng sản\n📌 **Sự khác biệt** giữa hai nguyên tắc\n📌 **Lý do** tại sao phải qua giai đoạn quá độ\n📌 **Thực tiễn Việt Nam** trong thời kỳ quá độ\n📌 **Quan điểm Mác-Lênin** về vấn đề phân phối\n\nBạn muốn tìm hiểu về khía cạnh nào? Hãy hỏi tôi nhé! 😊`;
};

// Utility function to validate message content
export const isValidMessage = (message: string): boolean => {
  return message.trim().length > 0 && message.trim().length <= 1000;
};

// Utility function to clean message content
export const cleanMessage = (message: string): string => {
  return message.trim().replace(/\s+/g, ' ');
};