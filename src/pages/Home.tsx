import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaMapMarkedAlt, FaBookOpen, FaUsers } from 'react-icons/fa';

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
          <HeroTitle>Hành trình Hồ Chí Minh tại Pháp</HeroTitle>
          <HeroSubtitle>
            Khám phá giai đoạn quan trọng từ 1911 đến 1923 - thời kỳ hình thành tư tưởng cách mạng 
            của vị lãnh tụ vĩ đại của dân tộc Việt Nam
          </HeroSubtitle>
        </HeroContent>
        </HeroContentWrapper>
      </HeroSection>

      <IntroSection>
        <IntroContent>
          <IntroTitle>Giới thiệu chung</IntroTitle>
          <IntroText>
            <p>
              Hành trình Hồ Chí Minh tại Pháp (1911–1923) là một trong những <span className="highlight">giai đoạn đặc biệt và có ý nghĩa bước ngoặt</span> trong cuộc đời hoạt động cách mạng của Người. 
              Đây không chỉ đơn thuần là một chuyến đi dài ngày ở nước ngoài, mà còn là một <span className="highlight">hành trình lịch sử để tìm kiếm, khám phá và khẳng định con đường cứu nước đúng đắn</span> cho dân tộc Việt Nam.
            </p>
            <p>
              Trong giai đoạn này, từ một thanh niên yêu nước với khát vọng độc lập dân tộc, Hồ Chí Minh từng bước trưởng thành để trở thành một <span className="highlight">chiến sĩ cộng sản quốc tế</span>, 
              gắn bó vận mệnh dân tộc Việt Nam với phong trào cách mạng toàn cầu.
            </p>
            <p>
              Có thể thấy, hành trình tại Pháp chính là nơi ươm mầm những <span className="highlight">bước chuyển biến quan trọng nhất trong tư tưởng và lý tưởng cách mạng</span> của Hồ Chí Minh.
            </p>
          </IntroText>
        </IntroContent>
      </IntroSection>

      <HighlightsSection>
        <HighlightsContainer>
          <HighlightsTitle>Những khía cạnh tiêu biểu</HighlightsTitle>
          <HighlightsGrid>
            <HighlightCard>
              <HighlightIcon><FaMapMarkedAlt /></HighlightIcon>
              <HighlightTitle>Khát vọng dân tộc</HighlightTitle>
              <HighlightText>
                Ra đi với mong muốn tìm con đường giải phóng dân tộc Việt Nam khỏi ách thống trị thực dân.
              </HighlightText>
            </HighlightCard>
            
            <HighlightCard>
              <HighlightIcon><FaBookOpen /></HighlightIcon>
              <HighlightTitle>Nhận thức chính trị</HighlightTitle>
              <HighlightText>
                Quan sát, trải nghiệm để nhận ra bản chất áp bức của chủ nghĩa thực dân và xã hội tư bản.
              </HighlightText>
            </HighlightCard>
            
            <HighlightCard>
              <HighlightIcon><FaUsers /></HighlightIcon>
              <HighlightTitle>Bước ngoặt lý tưởng</HighlightTitle>
              <HighlightText>
                Tìm thấy ánh sáng chủ nghĩa Mác – Lênin, từ đó xác định con đường cách mạng vô sản.
              </HighlightText>
            </HighlightCard>
          </HighlightsGrid>
        </HighlightsContainer>
      </HighlightsSection>

      <TimelineSection>
        <TimelineContainer>
          <h2 className="text-center">Những điểm nhấn nổi bật</h2>
          
          <TimelineItem>
            <TimelineYear>1911</TimelineYear>
            <TimelineContent>
              <TimelineTitle>Quyết định ra đi tìm đường cứu nước</TimelineTitle>
              <TimelineDescription>
                Nguyễn Tất Thành rời Tổ quốc tại Bến Nhà Rồng, bắt đầu chuyến đi lịch sử nhằm tìm con đường mới cho dân tộc.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineYear>1919</TimelineYear>
            <TimelineContent>
              <TimelineTitle>"Bản yêu sách của nhân dân An Nam"</TimelineTitle>
              <TimelineDescription>
                Hồ Chí Minh gửi bản yêu sách tới Hội nghị Versailles, yêu cầu quyền tự do, dân chủ cho nhân dân Việt Nam.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineYear>1920</TimelineYear>
            <TimelineContent>
              <TimelineTitle>Gia nhập Đảng Cộng sản Pháp</TimelineTitle>
              <TimelineDescription>
                Đánh dấu bước ngoặt: Hồ Chí Minh tiếp nhận chủ nghĩa Mác – Lênin và lựa chọn con đường cách mạng vô sản.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineYear>1922</TimelineYear>
            <TimelineContent>
              <TimelineTitle>Viết báo Le Paria (Người cùng khổ)</TimelineTitle>
              <TimelineDescription>
                Qua ngòi bút báo chí, kêu gọi đoàn kết các dân tộc thuộc địa chống lại ách áp bức.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </TimelineContainer>
      </TimelineSection>

      <HistoricalImagesSection>
        <TimelineContainer>
          <SectionTitle>Hình ảnh lịch sử</SectionTitle>
          <ImageGallery>
            <ImageCard>
              <ImagePlaceholder>
                <img src="/images/ben-nha-rong-1911.jpg" alt="Bến Nhà Rồng năm 1911" />
              </ImagePlaceholder>
            </ImageCard>
            <ImageCard>
              <ImagePlaceholder>
                <img src="/images/ho-chi-minh-young.jpg" alt="Hồ Chí Minh thời trẻ" />
              </ImagePlaceholder>
            </ImageCard>
            <ImageCard>
              <ImagePlaceholder>
                <img src="/images/versailles-conference-1919.jpg" alt="Hội nghị Versailles 1919" />
              </ImagePlaceholder>
            </ImageCard>
          </ImageGallery>
        </TimelineContainer>
      </HistoricalImagesSection>

      <CallToActionSection>
        <CTAContent>
          <CTATitle>Khám phá chi tiết hành trình lịch sử</CTATitle>
          <CTAText>
            Tìm hiểu sâu hơn về từng giai đoạn quan trọng trong cuộc đời và sự nghiệp cách mạng của Hồ Chí Minh tại Pháp
          </CTAText>
          <CTAButton to="/historical-context">
            Bắt đầu khám phá <FaArrowRight />
          </CTAButton>
        </CTAContent>
      </CallToActionSection>
    </HomeContainer>
  );
};

export default Home;