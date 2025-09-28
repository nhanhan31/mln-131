import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TextField,
  IconButton,
  CircularProgress,
  Typography,
  Box,
  Avatar,
  Tooltip
} from '@mui/material';
import {
  Send as SendIcon,
  Close as CloseIcon,
  Chat as ChatIcon,
  History as HistoryIcon
} from '@mui/icons-material';
import styled from 'styled-components';
import { sendMessageToAI, isValidMessage, cleanMessage } from '../utils/aiService';
import { ChatMessage } from '../config/aiConfig';

// Styled components for better integration with the existing design
const ChatContainer = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 400px;
  height: 600px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: calc(100vw - 40px);
    height: calc(100vh - 100px);
    bottom: 10px;
    right: 20px;
    left: 20px;
  }
`;

const ChatHeader = styled(Box)`
  background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
  color: white;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/ho-chi-minh-young.jpg') center/cover;
    opacity: 0.1;
  }
`;

const MessagesContainer = styled(Box)`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #fafafa;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }
`;

const MessageBubble = styled(Box)<{ isUser: boolean }>`
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  background: ${props => props.isUser 
    ? 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)' 
    : 'white'};
  color: ${props => props.isUser ? 'white' : '#333'};
  padding: 12px 16px;
  border-radius: ${props => props.isUser ? '20px 20px 4px 20px' : '20px 20px 20px 4px'};
  max-width: 80%;
  word-wrap: break-word;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease-out;
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const InputContainer = styled(Box)`
  padding: 16px 20px;
  background: white;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 25px;
    background: #f5f5f5;
    
    &:hover {
      background: #eeeeee;
    }
    
    &.Mui-focused {
      background: white;
    }
  }
`;

const ToggleButton = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
`;

interface ChatBoxProps {
  title?: string;
  subtitle?: string;
  primaryColor?: string;
  initialMessage?: string;
}

const ChatBox = ({
  title = "Trợ lý Lịch sử",
  subtitle = "Chuyên gia về Hồ Chí Minh",
  primaryColor = "#1976d2",
  initialMessage = "Xin chào! Tôi là trợ lý AI chuyên về lịch sử Hồ Chí Minh tại Pháp (1911-1923). Tôi có thể giúp bạn tìm hiểu về hành trình lịch sử này. Bạn muốn biết điều gì?"
}: ChatBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: initialMessage,
        timestamp: Date.now()
      }]);
    }
  }, [initialMessage, messages.length]);

  // Auto scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Load chat history from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem('hochiminh-chat-history');
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      } catch (error) {
        console.error('Failed to load chat history:', error);
      }
    }
  }, []);

  // Save chat history to localStorage
  useEffect(() => {
    if (messages.length > 1) { // Only save if there are user messages
      localStorage.setItem('hochiminh-chat-history', JSON.stringify(messages));
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!isValidMessage(inputValue) || isLoading) return;

    const cleanedMessage = cleanMessage(inputValue);
    const userMessage: ChatMessage = {
      role: 'user',
      content: cleanedMessage,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError('');

    try {
      const aiResponse = await sendMessageToAI(cleanedMessage, messages);
      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: aiResponse,
        timestamp: Date.now()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Không thể kết nối với AI. Vui lòng thử lại.');
      
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: 'Xin lỗi, hiện tại tôi gặp sự cố kỹ thuật. Vui lòng thử lại sau ít phút. Trong thời gian chờ đợi, bạn có thể khám phá các trang khác của website để tìm hiểu thêm về hành trình Hồ Chí Minh tại Pháp.',
        timestamp: Date.now()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearHistory = () => {
    setMessages([{
      role: 'assistant',
      content: initialMessage,
      timestamp: Date.now()
    }]);
    localStorage.removeItem('hochiminh-chat-history');
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <ToggleButton
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Tooltip title="Trò chuyện với AI về lịch sử Hồ Chí Minh" placement="left">
            <IconButton
              onClick={() => setIsOpen(true)}
              sx={{
                backgroundColor: primaryColor,
                color: 'white',
                width: 64,
                height: 64,
                '&:hover': {
                  backgroundColor: '#1565c0',
                },
                boxShadow: '0 4px 16px rgba(25, 118, 210, 0.3)',
              }}
            >
              <ChatIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </ToggleButton>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <ChatContainer
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 20 }}
          >
            {/* Header */}
            <ChatHeader>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, position: 'relative', zIndex: 1 }}>
                <Avatar
                  sx={{ 
                    width: 40, 
                    height: 40, 
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    border: '2px solid rgba(255,255,255,0.3)'
                  }}
                >
                  <HistoryIcon />
                </Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
                    {title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.85rem' }}>
                    {subtitle}
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 1, position: 'relative', zIndex: 1 }}>
                <Tooltip title="Xóa lịch sử trò chuyện">
                  <IconButton
                    onClick={clearHistory}
                    sx={{ color: 'white', opacity: 0.8, '&:hover': { opacity: 1 } }}
                    size="small"
                  >
                    <HistoryIcon />
                  </IconButton>
                </Tooltip>
                
                <Tooltip title="Đóng">
                  <IconButton
                    onClick={() => setIsOpen(false)}
                    sx={{ color: 'white', opacity: 0.8, '&:hover': { opacity: 1 } }}
                    size="small"
                  >
                    <CloseIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </ChatHeader>

            {/* Messages */}
            <MessagesContainer>
              {messages.map((msg, index) => (
                <MessageBubble key={`${msg.timestamp}-${index}`} isUser={msg.role === 'user'}>
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.4,
                      whiteSpace: 'pre-wrap',
                      fontSize: '0.9rem'
                    }}
                  >
                    {msg.content}
                  </Typography>
                </MessageBubble>
              ))}

              {isLoading && (
                <Box sx={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CircularProgress size={16} />
                  <Typography variant="body2" color="text.secondary">
                    Đang suy nghĩ...
                  </Typography>
                </Box>
              )}

              <div ref={messagesEndRef} />
            </MessagesContainer>

            {/* Input */}
            <InputContainer>
              <StyledTextField
                fullWidth
                placeholder="Hỏi về hành trình Hồ Chí Minh tại Pháp..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                size="small"
                multiline
                maxRows={3}
                variant="outlined"
              />
              <Tooltip title={!isValidMessage(inputValue) ? 'Vui lòng nhập tin nhắn hợp lệ' : 'Gửi tin nhắn'}>
                <span>
                  <IconButton
                    onClick={handleSendMessage}
                    disabled={!isValidMessage(inputValue) || isLoading}
                    sx={{
                      color: primaryColor,
                      backgroundColor: isValidMessage(inputValue) ? `${primaryColor}15` : 'transparent',
                      '&:hover': {
                        backgroundColor: `${primaryColor}25`,
                      },
                      '&:disabled': {
                        color: '#ccc'
                      }
                    }}
                  >
                    <SendIcon />
                  </IconButton>
                </span>
              </Tooltip>
            </InputContainer>
          </ChatContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBox;