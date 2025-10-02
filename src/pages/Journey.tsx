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
            Hành trình ra nước ngoài của Nguyễn Tất Thành (1911–1917) là giai đoạn khám phá thế giới, từ việc rời Việt Nam
            đến khi bắt đầu hoạt động chính trị tại Pháp. Đây là thời kỳ tích lũy kinh nghiệm và hình thành nhận thức về thế giới.
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
                <TimelinePeriod>5/6/1911</TimelinePeriod>
                <TimelineTitle>Rời Bến Nhà Rồng</TimelineTitle>
                <TimelineDescription>
                  Nguyễn Tất Thành lên tàu Amiral Latouche-Tréville tại Bến Nhà Rồng (Sài Gòn),
                  xin làm phụ bếp trên tàu và bắt đầu hành trình ra nước ngoài tìm đường cứu nước.
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
                <TimelinePeriod>1911</TimelinePeriod>
                <TimelineTitle>Hành trình trên biển - Đến Pháp</TimelineTitle>
                <TimelineDescription>
                  Trong thời gian làm phụ bếp trên tàu, Nguyễn Tất Thành đi qua nhiều cảng
                  (Colombo, Port Said...) và cuối cùng đến Pháp (Marseille/Le Havre).
                </TimelineDescription>
                <TimelineDetails>
                  <TimelineDetail>Làm phụ bếp trên tàu, học hỏi kỹ năng sinh tồn</TimelineDetail>
                  <TimelineDetail>Đi qua các cảng quốc tế, quan sát đời sống nhiều nơi</TimelineDetail>
                  <TimelineDetail>Đặt chân đến nước Pháp lần đầu tiên</TimelineDetail>
                  <TimelineDetail>Giai đoạn đầu của chuyến đi biển và tiếp xúc với thế giới</TimelineDetail>
                </TimelineDetails>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>Khoảng 1912-1913</TimelinePeriod>
                <TimelineTitle>Có dấu hiệu ở Hoa Kỳ (chưa xác thực hoàn toàn)</TimelineTitle>
                <TimelineDescription>
                  Có bằng chứng gián tiếp về việc Nguyễn Tất Thành từng ở Hoa Kỳ (New York, Boston),
                  nhưng các tài liệu này chưa được xác thực hoàn toàn.
                </TimelineDescription>
                <TimelineDetails>
                  <TimelineDetail>Một thư gửi chính quyền thực dân từ New York ngày 15/12/1912</TimelineDetail>
                  <TimelineDetail>Lời kể về việc làm ở Boston (Parker House) - chưa có bằng chứng rõ ràng</TimelineDetail>
                  <TimelineDetail>Hồ sơ quản lý không tìm thấy bằng chứng xác thực</TimelineDetail>
                  <TimelineDetail>Được coi là có bằng chứng gián tiếp, cần nghiên cứu thêm</TimelineDetail>
                </TimelineDetails>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>Khoảng 1913-1917</TimelinePeriod>
                <TimelineTitle>Chủ yếu ở Anh (London và các khu vực lân cận)</TimelineTitle>
                <TimelineDescription>
                  Nguyễn Tất Thành sống và làm các công việc lao động ở Anh trong thời gian dài nhất.
                  Đây là giai đoạn quan trọng để tiếp xúc với đời sống công nhân và phong trào công đoàn.
                </TimelineDescription>
                <TimelineDetails>
                  <TimelineDetail>Làm bếp, thợ bánh, phụ việc trên tuyến phà Newhaven-Dieppe</TimelineDetail>
                  <TimelineDetail>Tiếp xúc trực tiếp với đời sống công nhân Anh</TimelineDetail>
                  <TimelineDetail>Quan sát phong trào công đoàn và đấu tranh giai cấp</TimelineDetail>
                  <TimelineDetail>Tích lũy kinh nghiệm về tổ chức lao động và xã hội công nghiệp</TimelineDetail>
                </TimelineDetails>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>Cuối giai đoạn 1913-1917</TimelinePeriod>
                <TimelineTitle>Trải nghiệm tại Anh và chuẩn bị định hướng</TimelineTitle>
                <TimelineDescription>
                  Trong thời gian ở Anh, Nguyễn Tất Thành tích lũy được nhiều kinh nghiệm quý báu
                  về xã hội công nghiệp và phong trào lao động.
                </TimelineDescription>
                <TimelineDetails>
                  <TimelineDetail>Quan sát sự phân hóa giai cấp trong xã hội tư bản</TimelineDetail>
                  <TimelineDetail>Học hỏi về tổ chức công đoàn và đấu tranh của công nhân</TimelineDetail>
                  <TimelineDetail>Nhận thức về bất công xã hội và áp bức giai cấp</TimelineDetail>
                  <TimelineDetail>Chuẩn bị tư tưởng cho hoạt động chính trị tiếp theo</TimelineDetail>
                </TimelineDetails>
                <HighlightBox>
                  <HighlightTitle>
                    <FaGlobeAmericas /> Mở rộng tầm nhìn quốc tế
                  </HighlightTitle>
                  <HighlightText>
                    Thời gian ở Anh giúp Nguyễn Tất Thành hiểu rõ hơn về xã hội công nghiệp,
                    phong trào công nhân và bản chất của chủ nghĩa tư bản. Đây là nền tảng quan trọng
                    cho hoạt động cách mạng sau này.
                  </HighlightText>
                </HighlightBox>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>1917 - 1919</TimelinePeriod>
                <TimelineTitle>Đến Pháp và bắt đầu bước vào hoạt động chính trị</TimelineTitle>
                <TimelineDescription>
                  Nguyễn Tất Thành (sau này gọi là Nguyễn Ái Quốc / Hồ Chí Minh) tự khai là đã đến Paris từ London vào năm 1917;
                  tuy nhiên tư liệu hành chính và hồ sơ mật thám Pháp ghi nhận dấu vết rõ rệt của ông từ khoảng giữa năm 1919.
                  Do vậy có sự khác biệt giữa lời kể cá nhân và hồ sơ hành chính.
                </TimelineDescription>
                <TimelineDetails>
                  <TimelineDetail>Có mâu thuẫn giữa ký ức/tường thuật cá nhân và hồ sơ hành chính Pháp (ghi nhận rõ từ 1919).</TimelineDetail>
                  <TimelineDetail>Bắt đầu sinh hoạt cùng cộng đồng người An Nam ở Paris và tiếp cận các hoạt động báo chí, tuy báo chí chuyên nghiệp của ông xuất hiện rõ hơn sau này (Le Paria, 1922).</TimelineDetail>
                  <TimelineDetail>Tham gia các hoạt động của phong trào người An Nam tại Pháp, xây dựng quan hệ với các nhà xã hội chủ nghĩa và cộng sản Pháp.</TimelineDetail>
                  <TimelineDetail>Giai đoạn này là bước khởi động dẫn tới sự tham gia chính thức hơn vào phong trào cộng sản (hướng tới Đại hội Tours, 1920).</TimelineDetail>
                </TimelineDetails>
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