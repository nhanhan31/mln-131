import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Typography, Box, Button, Radio, RadioGroup, FormControlLabel, FormControl, LinearProgress, Card, Chip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Cancel, EmojiEvents, Refresh } from '@mui/icons-material';

const PageContainer = styled(Container)`
  padding: 60px 20px;
  max-width: 900px;
  min-height: 80vh;
`;

const QuizCard = styled(Card)`
  margin: 30px 0;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: visible;
`;

const QuestionBox = styled(Box)`
  background: linear-gradient(135deg, #d32f2f 0%, #c62828 100%);
  color: white;
  padding: 24px;
  border-radius: 12px 12px 0 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  }
`;

const AnswerBox = styled(Box)`
  padding: 30px;
`;

const AnswerOption = styled(FormControlLabel)<{ iscorrect?: string; isselected?: string }>`
  margin: 12px 0;
  padding: 16px;
  border-radius: 12px;
  border: 2px solid ${props => {
    if (props.iscorrect === 'true') return '#4caf50';
    if (props.isselected === 'true' && props.iscorrect === 'false') return '#f44336';
    return '#e0e0e0';
  }};
  background: ${props => {
    if (props.iscorrect === 'true') return '#e8f5e9';
    if (props.isselected === 'true' && props.iscorrect === 'false') return '#ffebee';
    return 'white';
  }};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => {
      if (props.iscorrect === 'true') return '#e8f5e9';
      if (props.isselected === 'true' && props.iscorrect === 'false') return '#ffebee';
      return '#f5f5f5';
    }};
    border-color: ${props => {
      if (props.iscorrect === 'true') return '#4caf50';
      if (props.isselected === 'true' && props.iscorrect === 'false') return '#f44336';
      return '#d32f2f';
    }};
  }
`;

const ResultBox = styled(motion.div)`
  text-align: center;
  padding: 40px;
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  border-radius: 16px;
  margin: 30px 0;
`;

const ScoreDisplay = styled(Typography)`
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #d32f2f 0%, #ff9800 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 20px 0;
`;

const ProgressContainer = styled(Box)`
  margin: 20px 0;
`;

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'Dễ' | 'Trung bình' | 'Khó' | 'Rất khó';
}

// Bộ câu hỏi cấp độ DỄ
const easyQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Nguyên tắc phân phối nào được áp dụng trong thời kỳ quá độ lên chủ nghĩa xã hội?",
    options: [
      "Hưởng theo nhu cầu",
      "Làm theo năng lực, hưởng theo lao động",
      "Bình quân chủ nghĩa tuyệt đối",
      "Phân phối theo vốn góp"
    ],
    correctAnswer: 1,
    explanation: "Trong thời kỳ quá độ lên CNXH, nguyên tắc 'Làm theo năng lực, hưởng theo lao động' được áp dụng. Đây là nguyên tắc phù hợp với trình độ phát triển lực lượng sản xuất và ý thức con người.",
    category: "Cơ bản",
    difficulty: "Dễ"
  },
  {
    id: 2,
    question: "Nguyên tắc 'Hưởng theo nhu cầu' được thực hiện trong giai đoạn nào?",
    options: [
      "Thời kỳ quá độ lên CNXH",
      "Xã hội chủ nghĩa",
      "Xã hội cộng sản cao cấp",
      "Xã hội tư bản chủ nghĩa"
    ],
    correctAnswer: 2,
    explanation: "Nguyên tắc 'Hưởng theo nhu cầu' chỉ có thể thực hiện trong xã hội cộng sản cao cấp, khi lực lượng sản xuất phát triển cao độ và của cải vật chất dồi dào.",
    category: "Cơ bản",
    difficulty: "Dễ"
  },
  {
    id: 3,
    question: "Việt Nam hiện nay đang ở giai đoạn nào?",
    options: [
      "Xã hội cộng sản",
      "Thời kỳ quá độ lên chủ nghĩa xã hội",
      "Xã hội tư bản",
      "Xã hội phong kiến"
    ],
    correctAnswer: 1,
    explanation: "Việt Nam đang trong thời kỳ quá độ lên chủ nghĩa xã hội, thực hiện công nghiệp hóa, hiện đại hóa đất nước với định hướng xã hội chủ nghĩa.",
    category: "Thực tiễn",
    difficulty: "Dễ"
  },
  {
    id: 4,
    question: "Cơ sở vật chất để thực hiện nguyên tắc 'Hưởng theo nhu cầu' là gì?",
    options: [
      "Sản xuất của cải vật chất dồi dào",
      "Có nhiều tiền trong ngân khố",
      "Nhập khẩu hàng hóa từ nước ngoài",
      "Phân phối lại của cải từ người giàu"
    ],
    correctAnswer: 0,
    explanation: "Điều kiện tiên quyết là lực lượng sản xuất phát triển cao độ, có khả năng sản xuất ra của cải vật chất dồi dào đáp ứng mọi nhu cầu hợp lý của con người.",
    category: "Điều kiện",
    difficulty: "Dễ"
  },
  {
    id: 5,
    question: "Trong xã hội cộng sản cao cấp, người ta làm việc vì mục đích gì?",
    options: [
      "Vì lương cao và thưởng",
      "Vì đáp ứng nhu cầu của bản thân và xã hội",
      "Vì sợ bị phạt",
      "Vì cạnh tranh với người khác"
    ],
    correctAnswer: 1,
    explanation: "Trong xã hội cộng sản, lao động trở thành nhu cầu thiết yếu đầu tiên của đời sống. Con người làm việc vì ý thức cao độ, vì sự phát triển của cá nhân và xã hội.",
    category: "Ý thức",
    difficulty: "Dễ"
  }
];

// Bộ câu hỏi cấp độ TRUNG BÌNH
const mediumQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Tại sao phải trải qua giai đoạn 'Hưởng theo lao động' trước khi đến 'Hưởng theo nhu cầu'?",
    options: [
      "Do quy định của Đảng",
      "Do trình độ phát triển lực lượng sản xuất chưa đủ cao",
      "Do truyền thống văn hóa",
      "Do áp lực quốc tế"
    ],
    correctAnswer: 1,
    explanation: "Lực lượng sản xuất chưa phát triển đến mức có thể sản xuất của cải dồi dào, ý thức con người chưa đạt trình độ cao, và điều kiện kỹ thuật chưa cho phép thực hiện nguyên tắc 'Hưởng theo nhu cầu'.",
    category: "Lý do",
    difficulty: "Trung bình"
  },
  {
    id: 2,
    question: "Đặc điểm nào KHÔNG phải của nguyên tắc 'Làm theo năng lực, hưởng theo lao động'?",
    options: [
      "Khuyến khích lao động nhiều hơn",
      "Phân phối bình quân cho tất cả mọi người",
      "Gắn kết chặt chẽ giữa mức hưởng và mức đóng góp",
      "Chống bệnh bình quân chủ nghĩa"
    ],
    correctAnswer: 1,
    explanation: "Nguyên tắc 'Hưởng theo lao động' không phải là bình quân chủ nghĩa. Ai làm nhiều, làm tốt sẽ hưởng nhiều hơn, khuyến khích tính tích cực sáng tạo trong lao động.",
    category: "Đặc điểm",
    difficulty: "Trung bình"
  },
  {
    id: 3,
    question: "Ý thức con người trong thời kỳ 'Hưởng theo lao động' như thế nào?",
    options: [
      "Đã đạt trình độ cao nhất",
      "Vẫn còn hạn chế, cần giáo dục cải tạo",
      "Hoàn toàn không cần giáo dục",
      "Giống xã hội tư bản"
    ],
    correctAnswer: 1,
    explanation: "Ý thức con người chưa đạt trình độ cao, vẫn còn tàn dư tư tưởng cũ, cần được giáo dục, cải tạo từng bước để hình thành nhân cách mới xã hội chủ nghĩa.",
    category: "Ý thức",
    difficulty: "Trung bình"
  },
  {
    id: 4,
    question: "Nhiệm vụ chủ yếu của thời kỳ quá độ lên CNXH là gì?",
    options: [
      "Chỉ phát triển công nghiệp",
      "Chỉ cải tạo tư tưởng con người",
      "Vừa cải tạo xã hội chủ nghĩa, vừa xây dựng CSVCKT của CNXH",
      "Chỉ phát triển nông nghiệp"
    ],
    correctAnswer: 2,
    explanation: "Thời kỳ quá độ có hai nhiệm vụ chiến lược: cải tạo xã hội chủ nghĩa các thành phần kinh tế phi XHCN và xây dựng cơ sở vật chất - kỹ thuật của chủ nghĩa xã hội.",
    category: "Nhiệm vụ",
    difficulty: "Trung bình"
  },
  {
    id: 5,
    question: "Theo Marx trong 'Phê phán Cương lĩnh Gotha', giai đoạn đầu của CNXH có đặc điểm gì?",
    options: [
      "Đã có của cải dồi dào như CNCS",
      "Vẫn mang dấu ấn của xã hội cũ",
      "Hoàn toàn không còn chênh lệch",
      "Mọi người đều hưởng như nhau"
    ],
    correctAnswer: 1,
    explanation: "Marx chỉ ra rằng giai đoạn đầu của CNXH vẫn mang dấu ấn về kinh tế, đạo đức, tinh thần của xã hội cũ mà nó mới thoát ra. Do đó phải áp dụng nguyên tắc 'hưởng theo lao động'.",
    category: "Lý luận",
    difficulty: "Trung bình"
  }
];

// Bộ câu hỏi cấp độ KHÓ
const hardQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Bản chất của chủ nghĩa xã hội theo quan điểm Mác - Lênin là gì?",
    options: [
      "Nhà nước quản lý mọi thứ",
      "Xóa bỏ chế độ tư hữu về TLSX, xây dựng chế độ công hữu",
      "Phân chia đều của cải cho mọi người",
      "Cấm hoạt động kinh tế tư nhân"
    ],
    correctAnswer: 1,
    explanation: "Bản chất của CNXH là xóa bỏ chế độ tư hữu tư bản chủ nghĩa về tư liệu sản xuất, thiết lập chế độ công hữu, xây dựng nền kinh tế có kế hoạch phục vụ lợi ích nhân dân.",
    category: "Bản chất",
    difficulty: "Khó"
  },
  {
    id: 2,
    question: "Mâu thuẫn cơ bản nào của thời kỳ quá độ đòi hỏi phải áp dụng nguyên tắc 'hưởng theo lao động'?",
    options: [
      "Mâu thuẫn giữa lực lượng sản xuất với quan hệ sản xuất",
      "Mâu thuẫn giữa nhu cầu vô hạn và khả năng sản xuất còn hạn chế",
      "Mâu thuẫn giữa công nhân và nông dân",
      "Mâu thuẫn giữa miền Bắc và miền Nam"
    ],
    correctAnswer: 1,
    explanation: "Nhu cầu con người ngày càng tăng nhưng khả năng sản xuất của cải còn hạn chế do trình độ lực lượng sản xuất chưa cao. Do đó cần phân phối theo lao động để khuyến khích sản xuất và công bằng.",
    category: "Mâu thuẫn",
    difficulty: "Khó"
  },
  {
    id: 3,
    question: "Trong thời kỳ quá độ, vai trò của Nhà nước đối với phân phối là gì?",
    options: [
      "Để thị trường tự do điều tiết hoàn toàn",
      "Điều tiết phân phối để đảm bảo công bằng xã hội và định hướng XHCN",
      "Phân chia đều của cải cho mọi người",
      "Chỉ quan tâm đến tăng trưởng kinh tế"
    ],
    correctAnswer: 1,
    explanation: "Nhà nước XHCN phải điều tiết phân phối thông qua chính sách thuế, lương tối thiểu, an sinh xã hội... để vừa khuyến khích lao động vừa đảm bảo công bằng, tránh phân hóa giàu nghèo.",
    category: "Vai trò Nhà nước",
    difficulty: "Khó"
  },
  {
    id: 4,
    question: "Tại sao nói 'Hưởng theo lao động' vừa là tiến bộ vừa chưa hoàn thiện?",
    options: [
      "Vì nó loại bỏ bóc lột nhưng vẫn còn bất bình đẳng do năng lực khác nhau",
      "Vì nó chỉ áp dụng cho công nhân",
      "Vì nó giống với chủ nghĩa tư bản",
      "Vì nó không công bằng"
    ],
    correctAnswer: 0,
    explanation: "Nguyên tắc này tiến bộ vì loại bỏ bóc lột, ai làm được hưởng. Nhưng chưa hoàn thiện vì người có năng lực cao sẽ hưởng nhiều hơn, còn chênh lệch - chưa thể đáp ứng theo nhu cầu.",
    category: "Phân tích",
    difficulty: "Khó"
  },
  {
    id: 5,
    question: "Điều kiện nào KHÔNG phải là tiền đề để chuyển từ 'hưởng theo lao động' sang 'hưởng theo nhu cầu'?",
    options: [
      "Lực lượng sản xuất phát triển cao độ",
      "Ý thức con người đạt trình độ cộng sản",
      "Tất cả các nước trên thế giới đều là CNCS",
      "Của cải vật chất dồi dào"
    ],
    correctAnswer: 2,
    explanation: "Không cần tất cả các nước đều là CNCS. Điều kiện cần là: LLSX phát triển cao, của cải dồi dào, ý thức cộng sản được hình thành, lao động trở thành nhu cầu.",
    category: "Điều kiện chuyển đổi",
    difficulty: "Khó"
  }
];

// Bộ câu hỏi cấp độ RẤT KHÓ
const veryHardQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Theo quan điểm Mác - Lênin, mối quan hệ biện chứng giữa 'làm theo năng lực' và 'hưởng theo lao động' trong thời kỳ quá độ là gì?",
    options: [
      "Hai yếu tố độc lập, không liên quan",
      "'Làm theo năng lực' là khả năng, 'hưởng theo lao động' là kết quả cụ thể của việc phát huy năng lực đó",
      "Chỉ cần làm theo năng lực, không cần quan tâm hưởng",
      "Hai yếu tố đối lập, mâu thuẫn nhau"
    ],
    correctAnswer: 1,
    explanation: "Đây là mối quan hệ biện chứng: mỗi người đóng góp theo năng lực (tiềm năng), nhưng được hưởng dựa trên lao động thực tế (kết quả). Điều này vừa khuyến khích phát huy năng lực, vừa đảm bảo công bằng phân phối.",
    category: "Phân tích cao cấp",
    difficulty: "Rất khó"
  },
  {
    id: 2,
    question: "Trong bối cảnh toàn cầu hóa và cách mạng công nghiệp 4.0, thách thức lớn nhất đối với việc duy trì nguyên tắc 'hưởng theo lao động' ở Việt Nam là gì?",
    options: [
      "Sự phân hóa thu nhập do chênh lệch về trình độ công nghệ và tri thức",
      "Thiếu lao động giản đơn",
      "Quá nhiều người giàu",
      "Không có thị trường lao động"
    ],
    correctAnswer: 0,
    explanation: "Cách mạng 4.0 tạo ra khoảng cách lớn giữa lao động tri thức cao và lao động giản đơn. Thách thức là làm sao vừa khuyến khích tri thức, vừa đảm bảo công bằng xã hội, không để phân hóa quá sâu.",
    category: "Ứng dụng hiện đại",
    difficulty: "Rất khó"
  },
  {
    id: 3,
    question: "Phê phán quan điểm: 'Việt Nam nên bỏ định hướng XHCN vì thị trường tự do hiệu quả hơn trong phân phối'?",
    options: [
      "Đúng, vì thị trường luôn công bằng",
      "Sai, vì thị trường tự do dẫn đến phân hóa, bất công; cần kết hợp thị trường với điều tiết XHCN",
      "Đúng, vì CNXH lỗi thời",
      "Sai, vì phải bỏ hoàn toàn thị trường"
    ],
    correctAnswer: 1,
    explanation: "Thị trường tự do có hiệu quả kinh tế nhưng dẫn đến bất công, phân hóa giàu nghèo. Việt Nam kết hợp ưu điểm của thị trường (hiệu quả) với điều tiết Nhà nước XHCN (công bằng) - đây là sáng tạo phù hợp.",
    category: "Phê phán",
    difficulty: "Rất khó"
  },
  {
    id: 4,
    question: "Vận dụng quy luật phủ định của phủ định: Tại sao xã hội cộng sản 'hưởng theo nhu cầu' lại là phủ định cao hơn của xã hội nguyên thủy 'công hữu nguyên thủy'?",
    options: [
      "Vì cả hai đều công hữu nên giống nhau hoàn toàn",
      "CNCS kế thừa tinh thần công hữu nhưng trên cơ sở LLSX hiện đại, ý thức cao, không còn thiếu thốn",
      "Không có mối liên hệ giữa hai xã hội này",
      "CNCS lạc hậu hơn xã hội nguyên thủy"
    ],
    correctAnswer: 1,
    explanation: "Theo quy luật phủ định của phủ định: CNCS phủ định CNTB (tư hữu) nhưng kế thừa xã hội nguyên thủy (công hữu) ở trình độ cao hơn - có LLSX hiện đại, của cải dồi dào, con người phát triển toàn diện.",
    category: "Triết học",
    difficulty: "Rất khó"
  },
  {
    id: 5,
    question: "Theo bạn, biểu hiện nào sau đây CHỨ MINH Việt Nam đang vận dụng đúng nguyên tắc 'hưởng theo lao động' trong thời kỳ quá độ?",
    options: [
      "Trả lương theo vị trí, trình độ, hiệu quả công việc; có chính sách ưu đãi người có năng lực",
      "Trả lương bình quân cho tất cả mọi người",
      "Chỉ trả lương cao cho lãnh đạo",
      "Không có chính sách lương tối thiểu"
    ],
    correctAnswer: 0,
    explanation: "Việt Nam trả lương theo vị trí, năng lực, đóng góp (hưởng theo lao động), đồng thời có lương tối thiểu, BHXH, trợ cấp xã hội (đảm bảo an sinh). Đây là vận dụng đúng nguyên tắc XHCN.",
    category: "Vận dụng thực tiễn",
    difficulty: "Rất khó"
  }
];

const allQuestionSets = [
  { name: 'Dễ', questions: easyQuestions, color: '#4caf50' },
  { name: 'Trung bình', questions: mediumQuestions, color: '#ff9800' },
  { name: 'Khó', questions: hardQuestions, color: '#f44336' },
  { name: 'Rất khó', questions: veryHardQuestions, color: '#9c27b0' }
];

const Quiz: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [currentQuestions, setCurrentQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  const handleLevelSelect = (levelIndex: number) => {
    setSelectedLevel(levelIndex);
    setCurrentQuestions(allQuestionSets[levelIndex].questions);
    setAnsweredQuestions(new Array(allQuestionSets[levelIndex].questions.length).fill(false));
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
  };

  const handleBackToLevelSelection = () => {
    setSelectedLevel(null);
    setCurrentQuestions([]);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || currentQuestions.length === 0) return;
    
    setIsAnswerSubmitted(true);
    const isCorrect = selectedAnswer === currentQuestions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestion] = true;
    setAnsweredQuestions(newAnsweredQuestions);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(currentQuestions.length).fill(false));
    setIsAnswerSubmitted(false);
  };

  const progress = currentQuestions.length > 0 ? ((currentQuestion + 1) / currentQuestions.length) * 100 : 0;
  const currentQ = currentQuestions.length > 0 ? currentQuestions[currentQuestion] : null;

  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#d32f2f', textAlign: 'center', mb: 2 }}>
          Kiểm Tra Kiến Thức 📝
        </Typography>
        
        <Typography variant="h6" sx={{ textAlign: 'center', color: '#666', mb: 4 }}>
          Nguyên tắc phân phối trong CNXH và CNCS
        </Typography>

        {/* Level Selection Screen */}
        {selectedLevel === null && !showResult && (
          <Box sx={{ maxWidth: 800, margin: '0 auto' }}>
            <Typography variant="h5" sx={{ textAlign: 'center', mb: 4, color: '#333', fontWeight: 600 }}>
              Chọn cấp độ kiểm tra 🎯
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 3 }}>
              {allQuestionSets.map((set, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    onClick={() => handleLevelSelect(index)}
                    sx={{
                      cursor: 'pointer',
                      background: `linear-gradient(135deg, ${set.color}15 0%, ${set.color}30 100%)`,
                      border: `2px solid ${set.color}`,
                      borderRadius: 3,
                      p: 3,
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: `linear-gradient(135deg, ${set.color}25 0%, ${set.color}40 100%)`,
                        boxShadow: `0 8px 24px ${set.color}40`,
                      }
                    }}
                  >
                    <Typography variant="h4" sx={{ mb: 1 }}>
                      {index === 0 && '😊'}
                      {index === 1 && '🤔'}
                      {index === 2 && '😤'}
                      {index === 3 && '🔥'}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: set.color, mb: 1 }}>
                      {set.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      {set.questions.length} câu hỏi
                    </Typography>
                  </Card>
                </motion.div>
              ))}
            </Box>
            
            <Box sx={{ mt: 4, p: 3, background: '#f5f5f5', borderRadius: 2 }}>
              <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'center' }}>
                💡 <strong>Gợi ý:</strong> Bắt đầu từ cấp độ Dễ để làm quen, sau đó tăng dần độ khó để kiểm tra kiến thức sâu hơn!
              </Typography>
            </Box>
          </Box>
        )}

        {/* Quiz Screen */}
        {selectedLevel !== null && !showResult && currentQ && (
          <>
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button
                onClick={handleBackToLevelSelection}
                sx={{ color: '#666' }}
              >
                ← Chọn lại cấp độ
              </Button>
              <Chip 
                label={`Cấp độ: ${allQuestionSets[selectedLevel].name}`}
                sx={{ 
                  backgroundColor: allQuestionSets[selectedLevel].color,
                  color: 'white',
                  fontWeight: 600
                }}
              />
            </Box>

            <ProgressContainer>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Câu hỏi {currentQuestion + 1}/{currentQuestions.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Điểm: {score}/{currentQuestions.length}
                </Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={progress} 
                sx={{ 
                  height: 8, 
                  borderRadius: 4,
                  backgroundColor: '#e0e0e0',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: allQuestionSets[selectedLevel].color
                  }
                }} 
              />
            </ProgressContainer>

            <QuizCard>
              <QuestionBox>
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    <Chip 
                      label={currentQ.category} 
                      sx={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)', 
                        color: 'white',
                        fontWeight: 600
                      }} 
                    />
                    <Chip 
                      label={currentQ.difficulty}
                      sx={{ 
                        backgroundColor: 'rgba(255,255,255,0.3)', 
                        color: 'white',
                        fontWeight: 600
                      }} 
                    />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, lineHeight: 1.5 }}>
                    {currentQ.question}
                  </Typography>
                </Box>
              </QuestionBox>

              <AnswerBox>
                <FormControl component="fieldset" fullWidth>
                  <RadioGroup value={selectedAnswer} onChange={(e) => handleAnswerSelect(parseInt(e.target.value))}>
                    {currentQ.options.map((option, index) => (
                      <AnswerOption
                        key={index}
                        value={index}
                        control={<Radio />}
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <Typography>{option}</Typography>
                            {isAnswerSubmitted && index === currentQ.correctAnswer && (
                              <CheckCircle sx={{ color: '#4caf50', ml: 2 }} />
                            )}
                            {isAnswerSubmitted && index === selectedAnswer && index !== currentQ.correctAnswer && (
                              <Cancel sx={{ color: '#f44336', ml: 2 }} />
                            )}
                          </Box>
                        }
                        iscorrect={isAnswerSubmitted && index === currentQ.correctAnswer ? 'true' : 'false'}
                        isselected={isAnswerSubmitted && index === selectedAnswer ? 'true' : 'false'}
                        disabled={isAnswerSubmitted}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>

                <AnimatePresence>
                  {isAnswerSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <Box sx={{ 
                        mt: 3, 
                        p: 2, 
                        backgroundColor: selectedAnswer === currentQ.correctAnswer ? '#e8f5e9' : '#fff3e0',
                        borderRadius: 2,
                        border: `2px solid ${selectedAnswer === currentQ.correctAnswer ? '#4caf50' : '#ff9800'}`
                      }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#333' }}>
                          {selectedAnswer === currentQ.correctAnswer ? '✅ Chính xác!' : '📚 Giải thích:'}
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.6, color: '#555' }}>
                          {currentQ.explanation}
                        </Typography>
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                  {!isAnswerSubmitted ? (
                    <Button
                      variant="contained"
                      size="large"
                      onClick={handleSubmitAnswer}
                      disabled={selectedAnswer === null}
                      sx={{
                        background: 'linear-gradient(135deg, #d32f2f 0%, #c62828 100%)',
                        color: 'white',
                        px: 4,
                        py: 1.5,
                        borderRadius: 3,
                        fontWeight: 600,
                        '&:hover': {
                          background: 'linear-gradient(135deg, #c62828 0%, #b71c1c 100%)',
                        }
                      }}
                    >
                      Trả lời
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      size="large"
                      onClick={handleNextQuestion}
                      sx={{
                        background: 'linear-gradient(135deg, #4caf50 0%, #388e3c 100%)',
                        color: 'white',
                        px: 4,
                        py: 1.5,
                        borderRadius: 3,
                        fontWeight: 600,
                        '&:hover': {
                          background: 'linear-gradient(135deg, #388e3c 0%, #2e7d32 100%)',
                        }
                      }}
                    >
                      {currentQuestion < currentQuestions.length - 1 ? 'Câu tiếp theo →' : 'Xem kết quả 🎯'}
                    </Button>
                  )}
                </Box>
              </AnswerBox>
            </QuizCard>
          </>
        )}

        {/* Result Screen */}
        {showResult && selectedLevel !== null && (
          <ResultBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <EmojiEvents sx={{ fontSize: '5rem', color: '#ff9800', mb: 2 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Hoàn thành bài kiểm tra!
            </Typography>
            
            <Chip 
              label={`Cấp độ: ${allQuestionSets[selectedLevel].name}`}
              sx={{ 
                mb: 2,
                backgroundColor: allQuestionSets[selectedLevel].color,
                color: 'white',
                fontWeight: 600,
                fontSize: '1rem',
                px: 2,
                py: 1
              }}
            />
            
            <ScoreDisplay>
              {score}/{currentQuestions.length}
            </ScoreDisplay>
            
            <Typography variant="h6" sx={{ mb: 1, color: '#666' }}>
              {score === currentQuestions.length && "🎉 Xuất sắc! Bạn đã nắm vững kiến thức!"}
              {score >= currentQuestions.length * 0.7 && score < currentQuestions.length && "👏 Tốt lắm! Bạn đã hiểu khá rõ!"}
              {score >= currentQuestions.length * 0.5 && score < currentQuestions.length * 0.7 && "💪 Khá tốt! Hãy xem lại một số phần!"}
              {score < currentQuestions.length * 0.5 && "📖 Cần ôn tập thêm! Đọc lại nội dung nhé!"}
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 3, color: '#666' }}>
              Tỷ lệ chính xác: {((score / currentQuestions.length) * 100).toFixed(0)}%
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Refresh />}
                onClick={handleRestartQuiz}
                sx={{
                  background: 'linear-gradient(135deg, #d32f2f 0%, #c62828 100%)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 600,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #c62828 0%, #b71c1c 100%)',
                  }
                }}
              >
                Làm lại
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                onClick={handleBackToLevelSelection}
                sx={{
                  borderColor: '#d32f2f',
                  color: '#d32f2f',
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: '#c62828',
                    backgroundColor: '#ffebee',
                  }
                }}
              >
                Chọn cấp độ khác
              </Button>
            </Box>
          </ResultBox>
        )}
      </motion.div>
    </PageContainer>
  );
};

export default Quiz;
