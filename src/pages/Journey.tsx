import React from 'react';
import styled from 'styled-components';
import { FaShip, FaRoute, FaGlobeAmericas, FaEye } from 'react-icons/fa';

const JourneyContainer = styled.div`
  min-height: 100vh;
  padding: 2rem 0;
`;

const HeroSection = styled.section`
  background: ${props => props.theme.colors.gradient.primary};
  padding: 4rem 0;
  color: white;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeroTitle = styled.h1`
  color: white;
  margin-bottom: 1rem;
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
`;

const TimelineSection = styled.section`
  padding: 4rem 0;
`;

const TimelineContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: ${props => props.theme.colors.accent};
  }
`;

const IntroText = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
`;

const TimelineWrapper = styled.div`
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${props => props.theme.colors.primary};
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 80px;
  
  @media (max-width: 768px) {
    padding-left: 60px;
  }
  
  &:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${props => props.theme.colors.accent};
    border: 4px solid white;
    box-shadow: 0 0 0 4px ${props => props.theme.colors.accent};
    
    @media (max-width: 768px) {
      left: 10px;
      width: 16px;
      height: 16px;
    }
  }
`;

const TimelineCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  border-left: 4px solid ${props => props.theme.colors.primary};
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const TimelinePeriod = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 1rem;
`;

const TimelineTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const TimelineDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.7;
  margin-bottom: 1rem;
`;

const TimelineDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const TimelineDetail = styled.li`
  color: ${props => props.theme.colors.text};
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  
  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.accent};
    font-weight: bold;
  }
`;

const HighlightBox = styled.div`
  background: ${props => props.theme.colors.gradient.hero};
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 2px solid ${props => props.theme.colors.primary}40;
  margin: 2rem 0;
`;

const HighlightTitle = styled.h4`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HighlightText = styled.p`
  color: ${props => props.theme.colors.text};
  margin: 0;
  line-height: 1.7;
`;

const SignificanceSection = styled.section`
  background: ${props => props.theme.colors.surface};
  padding: 4rem 2rem;
  margin: 4rem 0;
  border-radius: ${props => props.theme.borderRadius.lg};
`;

const SignificanceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const SignificanceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  text-align: center;
  border-top: 4px solid ${props => props.theme.colors.primary};
`;

const SignificanceIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const SignificanceTitle = styled.h4`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const SignificanceText = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
  margin: 0;
`;

const JourneyMapSection = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
`;

const MapContainer = styled.div`
  max-width: 700px;
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    display: block;
  }
`;

const MapCaption = styled.div`
  padding: 1rem;
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
  text-align: center;
  font-weight: 500;
`;

const JourneyImageContainer = styled.div`
  margin: 2rem 0;
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
  }
`;

const JourneyImageCaption = styled.div`
  padding: 1rem;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  font-style: italic;
`;

const Journey: React.FC = () => {
  return (
    <JourneyContainer className="fade-in">
      <HeroSection>
        <HeroContent>
          <HeroTitle>Hành trình sang Pháp (1911–1917)</HeroTitle>
          <HeroDescription>
            Quá trình di chuyển, trải nghiệm và học hỏi qua nhiều quốc gia - 
            Nền tảng chuẩn bị cho bước ngoặt lịch sử trong tư tưởng cách mạng
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      <TimelineSection>
        <TimelineContainer>
          <SectionTitle>Hành trình chi tiết</SectionTitle>
          <IntroText>
            Hành trình sang Pháp của Hồ Chí Minh (1911–1917) là một quá trình di chuyển, trải nghiệm và học hỏi qua nhiều quốc gia. 
            Trong những năm này, Người làm nhiều nghề, quan sát xã hội và tích lũy kinh nghiệm thực tế.
          </IntroText>
          
          <JourneyMapSection>
            <MapContainer>
              <img src="/images/ho-chi-minh-journey-map.jpg" alt="Bản đồ hành trình Hồ Chí Minh 1911-1917" />
              <MapCaption>Bản đồ hành trình của Hồ Chí Minh qua các châu lục </MapCaption>
            </MapContainer>
          </JourneyMapSection>

          <TimelineWrapper>
            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>1911</TimelinePeriod>
                <TimelineTitle>Rời Việt Nam</TimelineTitle>
                <TimelineDescription>
                  Ngày 5/6/1911, Nguyễn Tất Thành lên tàu Amiral Latouche-Tréville tại Bến Nhà Rồng, Sài Gòn, 
                  bắt đầu hành trình tìm con đường cứu nước độc lập.
                </TimelineDescription>
                <HighlightBox>
                  <HighlightTitle>
                    <FaShip /> Điểm khởi đầu lịch sử
                  </HighlightTitle>
                  <HighlightText>
                    Đây là khoảnh khắc quyết định, đánh dấu bước ngoặt từ một thanh niên yêu nước địa phương 
                    thành một nhà cách mạng quốc tế tương lai. Quyết định này thể hiện tầm nhìn xa và khát vọng 
                    tìm con đường mới cho dân tộc.
                  </HighlightText>
                </HighlightBox>
                
                <JourneyImageContainer>
                  <img src="/images/ben-nha-rong-departure.jpg" alt="Bến Nhà Rồng năm 1911" />
                  <JourneyImageCaption>Bến Nhà Rồng nơi Nguyễn Tất Thành lên tàu ra đi (5/6/1911)</JourneyImageCaption>
                </JourneyImageContainer>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>1911 – 1912</TimelinePeriod>
                <TimelineTitle>Tàu và bến cảng châu Phi</TimelineTitle>
                <TimelineDescription>
                  Đi qua châu Phi (Ai Cập, Senegal…), làm quen với môi trường và con người mới.
                </TimelineDescription>
                <TimelineDetails>
                  <TimelineDetail>Quan sát đời sống bản địa bị thực dân áp bức</TimelineDetail>
                  <TimelineDetail>Chứng kiến cảnh người dân chịu thuế nặng và lao động khổ cực</TimelineDetail>
                  <TimelineDetail>Bắt đầu hiểu về sự tàn bạo của chủ nghĩa thực dân trên quy mô toàn cầu</TimelineDetail>
                </TimelineDetails>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>1912 – 1913</TimelinePeriod>
                <TimelineTitle>Pháp và các cảng châu Âu</TimelineTitle>
                <TimelineDescription>
                  Đến Marseille, Pháp, làm phụ bếp, bồi bàn tại nhà hàng, khách sạn.
                </TimelineDescription>
                <TimelineDetails>
                  <TimelineDetail>Học kỹ năng sinh tồn và tổ chức công việc</TimelineDetail>
                  <TimelineDetail>Trải nghiệm đời sống lao động bình dân đô thị châu Âu</TimelineDetail>
                  <TimelineDetail>Tiếp xúc với văn hóa và xã hội phương Tây từ góc độ người lao động</TimelineDetail>
                </TimelineDetails>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>1913 – 1914</TimelinePeriod>
                <TimelineTitle>Anh và Tây Ban Nha</TimelineTitle>
                <TimelineDescription>
                  Di chuyển qua Anh và Tây Ban Nha, làm nhiều công việc lao động phổ thông như thợ ảnh, phụ việc cảng.
                </TimelineDescription>
                <TimelineDetails>
                  <TimelineDetail>Quan sát sự phân hóa giai cấp và bất công xã hội</TimelineDetail>
                  <TimelineDetail>Chứng kiến sự phát triển công nghiệp và đô thị tại các nước tư bản</TimelineDetail>
                  <TimelineDetail>Tích lũy kinh nghiệm về tổ chức xã hội và quan hệ lao động</TimelineDetail>
                </TimelineDetails>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>1914 – 1915</TimelinePeriod>
                <TimelineTitle>Châu Mỹ</TimelineTitle>
                <TimelineDescription>
                  Qua Hoa Kỳ, tiếp xúc đời sống công nhân nhập cư, lao động nặng nhọc nhưng vẫn bị phân biệt chủng tộc.
                </TimelineDescription>
                <TimelineDetails>
                  <TimelineDetail>Nhận thức sâu sắc về chênh lệch giàu nghèo</TimelineDetail>
                  <TimelineDetail>Chứng kiến sự áp bức dân da màu trong "đất nước tự do"</TimelineDetail>
                  <TimelineDetail>Hiểu rõ hơn về mâu thuẫn của xã hội tư bản</TimelineDetail>
                </TimelineDetails>
                <HighlightBox>
                  <HighlightTitle>
                    <FaGlobeAmericas /> Mở rộng tầm nhìn quốc tế
                  </HighlightTitle>
                  <HighlightText>
                    Trải nghiệm tại Mỹ giúp Hồ Chí Minh nhận ra rằng chủ nghĩa thực dân và áp bức không chỉ 
                    xảy ra ở thuộc địa mà còn tồn tại ngay trong lòng các nước "văn minh", dưới hình thức phân biệt chủng tộc.
                  </HighlightText>
                </HighlightBox>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>1915 – 1916</TimelinePeriod>
                <TimelineTitle>Trở lại châu Âu</TimelineTitle>
                <TimelineDescription>
                  Quay trở lại Bồ Đào Nha, Pháp, tiếp tục làm nhiều nghề để tích lũy kiến thức và vốn sống.
                </TimelineDescription>
                <TimelineDetails>
                  <TimelineDetail>Quan sát phong trào công nhân và đời sống lao động</TimelineDetail>
                  <TimelineDetail>Nghiên cứu sự áp bức thực dân từ nhiều góc độ khác nhau</TimelineDetail>
                  <TimelineDetail>Ghi nhận bản chất bất công của xã hội tư bản</TimelineDetail>
                </TimelineDetails>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>1916 – 1917</TimelinePeriod>
                <TimelineTitle>Chuẩn bị trở lại Pháp</TimelineTitle>
                <TimelineDescription>
                  Tích lũy kinh nghiệm lao động, kỹ năng sinh tồn và quan sát xã hội nhiều nơi.
                </TimelineDescription>
                <TimelineDetails>
                  <TimelineDetail>Nhận thức hình thành về bản chất tàn bạo của chủ nghĩa thực dân</TimelineDetail>
                  <TimelineDetail>Chuẩn bị tư tưởng và trải nghiệm cho giai đoạn tiếp theo</TimelineDetail>
                  <TimelineDetail>Định hình được phương hướng hoạt động cách mạng tương lai</TimelineDetail>
                </TimelineDetails>
                <HighlightBox>
                  <HighlightTitle>
                    <FaEye /> Tích lũy kinh nghiệm quý báu
                  </HighlightTitle>
                  <HighlightText>
                    Sau 6 năm đi khắp thế giới, Nguyễn Tất Thành đã tích lũy được một lượng kinh nghiệm khổng lồ 
                    về xã hội, chính trị và con người. Điều này sẽ là nền tảng vững chắc cho hoạt động cách mạng 
                    tích cực trong giai đoạn 1917-1923.
                  </HighlightText>
                </HighlightBox>
              </TimelineCard>
            </TimelineItem>
          </TimelineWrapper>
        </TimelineContainer>
      </TimelineSection>

      <SignificanceSection>
        <TimelineContainer>
          <SectionTitle>Ý nghĩa và tầm quan trọng</SectionTitle>
          <SignificanceGrid>
            <SignificanceCard>
              <SignificanceIcon><FaGlobeAmericas /></SignificanceIcon>
              <SignificanceTitle>Mở rộng tầm nhìn thế giới</SignificanceTitle>
              <SignificanceText>
                Hành trình qua nhiều quốc gia giúp Hồ Chí Minh mở rộng tầm nhìn, nhận ra bất công và áp bức 
                của chủ nghĩa thực dân trên quy mô toàn cầu, không chỉ riêng Việt Nam.
              </SignificanceText>
            </SignificanceCard>

            <SignificanceCard>
              <SignificanceIcon><FaRoute /></SignificanceIcon>
              <SignificanceTitle>Tích lũy kinh nghiệm thực tế</SignificanceTitle>
              <SignificanceText>
                Lao động nhiều nghề và quan sát đời sống lao động giúp Người tích lũy kinh nghiệm thực tế về 
                xã hội, tâm lý con người và các phương thức tổ chức.
              </SignificanceText>
            </SignificanceCard>

            <SignificanceCard>
              <SignificanceIcon><FaEye /></SignificanceIcon>
              <SignificanceTitle>Chuẩn bị tư tưởng cách mạng</SignificanceTitle>
              <SignificanceText>
                Đây là nền tảng chuẩn bị tư tưởng và trải nghiệm cho bước ngoặt cách mạng 
                khi trở lại Pháp và tham gia hoạt động chính trị tích cực (1917–1923).
              </SignificanceText>
            </SignificanceCard>
          </SignificanceGrid>
        </TimelineContainer>
      </SignificanceSection>
    </JourneyContainer>
  );
};

export default Journey;