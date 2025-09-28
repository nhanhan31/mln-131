import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Layout from './components/Layout';
import Home from './pages/Home';
import HistoricalContext from './pages/HistoricalContext';
import Journey from './pages/Journey';
import Activities from './pages/Activities';
import ChatBox from './components/ChatBox';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historical-context" element={<HistoricalContext />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </Layout>
        
        {/* AI ChatBot - Always available across all pages */}
        <ChatBox
          title="Trợ lý Lịch sử Hồ Chí Minh"
          subtitle="Chuyên gia AI về hành trình tại Pháp"
          primaryColor="#1976d2"
          initialMessage="Xin chào! Tôi là trợ lý AI chuyên về lịch sử Hồ Chí Minh tại Pháp (1911-1923). 

Tôi có thể giúp bạn tìm hiểu về:
• Hành trình ra đi năm 1911
• Cuộc sống và hoạt động tại Pháp
• Quá trình hình thành tư tưởng cách mạng
• Các tác phẩm và bài viết quan trọng
• Ý nghĩa lịch sử của giai đoạn này

Bạn muốn tìm hiểu về khía cạnh nào?"
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;