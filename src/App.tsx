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
import About from './pages/About';
import SocialismTransition from './pages/SocialismTransition';
import Quiz from './pages/Quiz';
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
            <Route path="/about" element={<About />} />
            <Route path="/socialism-transition" element={<SocialismTransition />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </Layout>
        
        {/* AI ChatBot - Always available across all pages */}
        <ChatBox
          title="Trợ lý Lý luận Mác-Lênin"
          subtitle="Chuyên gia AI về nguyên tắc phân phối"
          primaryColor="#d32f2f"
          initialMessage="Xin chào! 👋 Tôi là trợ lý AI chuyên về nguyên tắc phân phối trong CNXH và CNCS.

Tôi có thể giúp bạn tìm hiểu về:

🔹 Hưởng theo lao động (giai đoạn quá độ)
🔹 Hưởng theo nhu cầu (xã hội cộng sản)
🔹 Sự khác biệt giữa hai nguyên tắc
🔹 Tại sao phải qua giai đoạn quá độ
🔹 Thực tiễn áp dụng tại Việt Nam
🔹 Quan điểm Mác-Lênin

Bạn muốn tìm hiểu về vấn đề nào?"
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;