/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaMapMarkedAlt, FaBookOpen, FaUsers } from 'react-icons/fa';
import ImageFrame from '../components/ImageFrame';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: ${props => props.theme.colors.gradient.hero};
  padding: 6rem 0 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/ho-chi-minh-hero.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  z-index: 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.colors.gradient.hero};
    opacity: 0.8;
  }
`;

const HeroContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeroTitle = styled.h1`
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.8s ease;
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: ${props => props.theme.colors.textLight};
  max-width: 800px;
  margin: 0 auto 2rem;
  animation: fadeInUp 0.8s ease 0.2s both;
`;

const IntroSection = styled.section`
  padding: 4rem 0;
  background: ${props => props.theme.colors.background};
`;

const IntroContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const IntroText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 2rem;

  .highlight {
    background: linear-gradient(120deg, ${props => props.theme.colors.accent}30 0%, ${props => props.theme.colors.accent}30 100%);
    background-repeat: no-repeat;
    background-size: 100% 40%;
    background-position: 0 75%;
    padding: 2px 4px;
    font-weight: 500;
  }
`;

const IntroTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text};
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  font-weight: 700;
`;

const HighlightsSection = styled.section`
  padding: 4rem 0;
  background: ${props => props.theme.colors.surface};
`;

const HighlightsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HighlightsTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.text};
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  font-weight: 700;
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HighlightCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  transition: all 0.3s ease;
  border-top: 4px solid ${props => props.theme.colors.primary};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const HighlightIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const HighlightTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const HighlightText = styled.p`
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 1.5rem;
`;

const TimelineSection = styled.section`
  padding: 4rem 0;
  background: ${props => props.theme.colors.background};
`;

const TimelineContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  border-left: 4px solid ${props => props.theme.colors.accent};

  &:hover {
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const TimelineYear = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.accent};
  min-width: 100px;
  margin-right: 2rem;

  @media (max-width: 768px) {
    min-width: 80px;
    margin-right: 1rem;
  }
`;

const TimelineContent = styled.div`
  flex: 1;
`;

const TimelineTitle = styled.h4`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const TimelineDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  margin: 0;
  font-size: 1rem;
`;

const CallToActionSection = styled.section`
  padding: 4rem 0;
  background: ${props => props.theme.colors.gradient.primary};
  text-align: center;
  color: white;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const CTATitle = styled.h2`
  color: white;
  margin-bottom: 1.5rem;
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  color: ${props => props.theme.colors.primary};
  padding: 1rem 2rem;
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
    color: ${props => props.theme.colors.secondary};
  }
`;

const HistoricalImagesSection = styled.section`
  padding: 4rem 0;
  background: ${props => props.theme.colors.surface};
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.text};
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ImageCard = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const ImagePlaceholder = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  background: ${props => props.theme.colors.gradient.hero};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textLight};
  font-style: italic;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  /* Fallback khi chưa có ảnh */
  &:empty:before {
    content: "Vị trí cho ảnh lịch sử";
    text-align: center;
  }
`;

const ImageCaption = styled.div`
  padding: 1rem;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  text-align: center;
  background: white;
  font-weight: 500;
`;

const Home = () => {
  return (
    <HomeContainer className="fade-in">
      <HeroSection>
        <HeroImage />
        <HeroContentWrapper>
        <HeroContent>
          <HeroTitle>Hưởng theo nhu cầu và Hưởng theo năng lực</HeroTitle>
          <HeroSubtitle>
            Tìm hiểu về hai nguyên tắc phân phối quan trọng trong quá trình xây dựng xã hội chủ nghĩa và cộng sản chủ nghĩa
          </HeroSubtitle>
        </HeroContent>
        </HeroContentWrapper>
      </HeroSection>

      <IntroSection>
        <IntroContent>
          <IntroTitle>Giới thiệu đề tài</IntroTitle>
          
          <ImageGallery>
            <ImageFrame
              src="/images/placeholder-intro-1.jpg"
              alt="Chủ nghĩa Mác-Lênin"
              caption="Học thuyết Mác - Lênin về phân phối"
            />
            <ImageFrame
              src="/images/placeholder-intro-2.jpg"
              alt="Xã hội công bằng"
              caption="Hướng tới xã hội công bằng, văn minh"
            />
          </ImageGallery>
          
          <IntroText>
            <p>
              Trong lịch sử phát triển xã hội loài người, con người luôn hướng tới một cuộc sống tốt đẹp hơn — nơi mà ai cũng được thỏa mãn đầy đủ nhu cầu vật chất và tinh thần. 
              <span className="highlight">Chủ nghĩa xã hội và đặc biệt là chủ nghĩa cộng sản</span> mà C. Mác và Ph. Ăngghen đã nêu ra, chính là hình thái xã hội lý tưởng đó.
            </p>
            <p>
              Tuy nhiên, để đạt tới xã hội mà <span className="highlight">"mỗi người làm theo năng lực, hưởng theo nhu cầu"</span>, loài người không thể "nhảy cóc" mà phải trải qua những giai đoạn phát triển nhất định.
            </p>
            <p>
              Ở giai đoạn đầu — tức là <span className="highlight">thời kỳ quá độ lên chủ nghĩa xã hội</span> — nguyên tắc phân phối chủ yếu vẫn là <span className="highlight">"làm theo năng lực, hưởng theo lao động"</span>. 
              Chỉ khi lực lượng sản xuất đạt đến trình độ rất cao, của cải vật chất dồi dào, ý thức xã hội được nâng cao, thì con người mới có thể tiến tới hình thái "hưởng theo nhu cầu".
            </p>
          </IntroText>
          
          <ImageFrame
            src="/images/placeholder-intro-3.jpg"
            alt="Quá trình phát triển xã hội"
            caption="Quá trình phát triển từ XHCN đến CNCS"
          />
        </IntroContent>
      </IntroSection>

      <HighlightsSection>
        <HighlightsContainer>
          <HighlightsTitle>Những khái niệm cơ bản</HighlightsTitle>
          <HighlightsGrid>
            <HighlightCard>
              <HighlightIcon><FaMapMarkedAlt /></HighlightIcon>
              <HighlightTitle>Hưởng theo năng lực</HighlightTitle>
              <HighlightText>
                Nguyên tắc phân phối trong giai đoạn quá độ lên chủ nghĩa xã hội: "Làm theo năng lực, hưởng theo lao động"
              </HighlightText>
            </HighlightCard>
            
            <HighlightCard>
              <HighlightIcon><FaBookOpen /></HighlightIcon>
              <HighlightTitle>Hưởng theo nhu cầu</HighlightTitle>
              <HighlightText>
                Mục tiêu cao nhất của xã hội cộng sản chủ nghĩa: "Làm theo năng lực, hưởng theo nhu cầu"
              </HighlightText>
            </HighlightCard>
            
            <HighlightCard>
              <HighlightIcon><FaUsers /></HighlightIcon>
              <HighlightTitle>Quá trình phát triển</HighlightTitle>
              <HighlightText>
                Muốn đạt "hưởng theo nhu cầu" phải trải qua giai đoạn "hưởng theo năng lực" - một quá trình tất yếu khách quan
              </HighlightText>
            </HighlightCard>
          </HighlightsGrid>
        </HighlightsContainer>
      </HighlightsSection>

      <TimelineSection>
        <TimelineContainer>
          <h2 className="text-center">Những vấn đề chính</h2>
          
          <TimelineItem>
            <TimelineYear>Phần 1</TimelineYear>
            <TimelineContent>
              <TimelineTitle>Giới thiệu đề tài</TimelineTitle>
              <TimelineDescription>
                Nêu vấn đề về hai nguyên tắc phân phối: "hưởng theo nhu cầu" và "hưởng theo năng lực" trong quá trình phát triển xã hội
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineYear>Phần 2</TimelineYear>
            <TimelineContent>
              <TimelineTitle>Hưởng theo năng lực</TimelineTitle>
              <TimelineDescription>
                Đặc điểm của nguyên tắc "hưởng theo năng lực" trong giai đoạn quá độ lên chủ nghĩa xã hội
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineYear>Phần 3</TimelineYear>
            <TimelineContent>
              <TimelineTitle>Hưởng theo nhu cầu</TimelineTitle>
              <TimelineDescription>
                Mục tiêu cuối cùng của xã hội cộng sản chủ nghĩa - khi mọi người được hưởng theo nhu cầu chính đáng
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineYear>Phần 4</TimelineYear>
            <TimelineContent>
              <TimelineTitle>Vì sao phải qua hưởng theo năng lực</TimelineTitle>
              <TimelineDescription>
                Giải thích lý do tại sao muốn đạt "hưởng theo nhu cầu" phải trải qua giai đoạn "hưởng theo năng lực"
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineYear>Phần 5</TimelineYear>
            <TimelineContent>
              <TimelineTitle>Kết luận và liên hệ thực tiễn</TimelineTitle>
              <TimelineDescription>
                Liên hệ với thực tiễn Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </TimelineContainer>
      </TimelineSection>

      <CallToActionSection>
        <CTAContent>
          <CTATitle>Tìm hiểu chi tiết các nội dung</CTATitle>
          <CTAText>
            Khám phá sâu hơn về từng phần trong hành trình phát triển xã hội từ "hưởng theo năng lực" đến "hưởng theo nhu cầu"
          </CTAText>
          <CTAButton to="/about">
            Bắt đầu tìm hiểu <FaArrowRight />
          </CTAButton>
        </CTAContent>
      </CallToActionSection>
    </HomeContainer>
  );
};

export default Home;