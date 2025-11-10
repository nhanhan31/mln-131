import React from 'react';
import styled from 'styled-components';
import { FaShip, FaRoute, FaGlobeAmericas, FaEye } from 'react-icons/fa';
import ImageFrame from '../components/ImageFrame';

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
          <HeroTitle>Hưởng theo nhu cầu</HeroTitle>
          <HeroDescription>
            Mục tiêu cao nhất của xã hội cộng sản chủ nghĩa - 
            Khi mọi người được thỏa mãn đầy đủ nhu cầu chính đáng
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      <TimelineSection>
        <TimelineContainer>
          <SectionTitle>Khái niệm cơ bản</SectionTitle>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', margin: '2rem 0' }}>
            <ImageFrame
              src="/images/placeholder-communism-1.jpg"
              alt="Xã hội cộng sản"
              caption="Xã hội cộng sản - Mục tiêu cao nhất"
            />
            <ImageFrame
              src="/images/placeholder-communism-2.jpg"
              alt="Của cải dồi dào"
              caption="Của cải vật chất dồi dào"
            />
          </div>
          
          <IntroText>
            "Hưởng theo nhu cầu" là nguyên tắc phân phối trong giai đoạn cao của chủ nghĩa cộng sản, 
            khi xã hội đã đạt đến trình độ phát triển kinh tế – xã hội rất cao. Mỗi cá nhân được thỏa mãn 
            đầy đủ, toàn diện các nhu cầu chính đáng của mình mà không còn phụ thuộc vào mức đóng góp lao động như trong giai đoạn đầu.
          </IntroText>

          <HighlightBox>
            <HighlightTitle>
              <FaRoute /> Công thức thể hiện
            </HighlightTitle>
            <HighlightText style={{ fontSize: '1.3rem', fontWeight: '600', color: '#2C5F8D', textAlign: 'center' }}>
              "Làm theo năng lực, hưởng theo nhu cầu"
            </HighlightText>
          </HighlightBox>
          
          <ImageFrame
            src="/images/placeholder-needs.jpg"
            alt="Hưởng theo nhu cầu"
            caption="Nguyên tắc hưởng theo nhu cầu trong CNCS"
          />

          <TimelineWrapper>
            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>Cơ sở 1</TimelinePeriod>
                <TimelineTitle>Lực lượng sản xuất phát triển cao</TimelineTitle>
                <TimelineDescription>
                  Lực lượng sản xuất phát triển cao, tạo ra của cải xã hội dồi dào, vượt xa nhu cầu vật chất – tinh thần cơ bản của con người.
                </TimelineDescription>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>Cơ sở 2</TimelinePeriod>
                <TimelineTitle>Chế độ công hữu vững chắc</TimelineTitle>
                <TimelineDescription>
                  Chế độ công hữu về tư liệu sản xuất được xác lập vững chắc, không còn bóc lột hay chiếm hữu tư nhân.
                </TimelineDescription>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>Cơ sở 3</TimelinePeriod>
                <TimelineTitle>Ý thức xã hội cao</TimelineTitle>
                <TimelineDescription>
                  Ý thức xã hội và ý thức cộng đồng phát triển ở trình độ cao: mỗi người lao động tự giác, sống vì lợi ích chung.
                </TimelineDescription>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>Cơ sở 4</TimelinePeriod>
                <TimelineTitle>Năng suất lao động xã hội cao</TimelineTitle>
                <TimelineDescription>
                  Năng suất lao động xã hội đạt mức đủ để phân phối sản phẩm không còn theo nguyên tắc "ai làm nhiều hưởng nhiều", mà theo nhu cầu của mỗi người.
                </TimelineDescription>
              </TimelineCard>
            </TimelineItem>
          </TimelineWrapper>

          <SectionTitle style={{ marginTop: '4rem' }}>Nội dung và đặc điểm</SectionTitle>
          
          <TimelineWrapper>
            <TimelineItem>
              <TimelineCard>
                <TimelineTitle>Phân phối theo nhu cầu</TimelineTitle>
                <TimelineDescription>
                  Phân phối của cải vật chất và phúc lợi xã hội dựa trên nhu cầu chính đáng của từng cá nhân.
                </TimelineDescription>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelineTitle>Xóa bỏ phân hóa giàu nghèo</TimelineTitle>
                <TimelineDescription>
                  Không còn tình trạng phân hóa giàu nghèo, không còn giai cấp bóc lột – xã hội đạt tới công bằng, bình đẳng thực chất.
                </TimelineDescription>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelineTitle>Đảm bảo đầy đủ nhu cầu</TimelineTitle>
                <TimelineDescription>
                  Các nhu cầu như: nhà ở, giáo dục, y tế, văn hóa, giải trí… đều được đảm bảo đầy đủ, miễn phí hoặc theo phúc lợi xã hội chung.
                </TimelineDescription>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelineTitle>Lao động là nhu cầu tự thân</TimelineTitle>
                <TimelineDescription>
                  Lao động trở thành nhu cầu tự thân, không còn bị cưỡng bức, vì con người làm việc không phải để mưu sinh mà để cống hiến, sáng tạo và phát triển toàn diện.
                </TimelineDescription>
              </TimelineCard>
            </TimelineItem>
          </TimelineWrapper>
        </TimelineContainer>
      </TimelineSection>

      <SignificanceSection>
        <TimelineContainer>
          <SectionTitle>Ý nghĩa của nguyên tắc "Hưởng theo nhu cầu"</SectionTitle>
          <SignificanceGrid>
            <SignificanceCard>
              <SignificanceIcon><FaGlobeAmericas /></SignificanceIcon>
              <SignificanceTitle>Mục tiêu cao nhất</SignificanceTitle>
              <SignificanceText>
                Thể hiện mục tiêu cao nhất của chủ nghĩa cộng sản: giải phóng con người khỏi sự nghèo đói, bất công, áp bức.
              </SignificanceText>
            </SignificanceCard>

            <SignificanceCard>
              <SignificanceIcon><FaRoute /></SignificanceIcon>
              <SignificanceTitle>Phát triển toàn diện con người</SignificanceTitle>
              <SignificanceText>
                Tạo điều kiện cho con người phát triển toàn diện về trí tuệ, thể chất, tinh thần trong một xã hội văn minh.
              </SignificanceText>
            </SignificanceCard>

            <SignificanceCard>
              <SignificanceIcon><FaEye /></SignificanceIcon>
              <SignificanceTitle>Xây dựng xã hội lý tưởng</SignificanceTitle>
              <SignificanceText>
                Xây dựng một xã hội phồn vinh, công bằng, dân chủ, văn minh - động lực tinh thần to lớn để nhân dân phấn đấu.
              </SignificanceText>
            </SignificanceCard>
          </SignificanceGrid>
          
          <div style={{ marginTop: '3rem', textAlign: 'center', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#B8860B', marginBottom: '1rem' }}>Tóm lại</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify', color: '#333' }}>
              <strong>"Hưởng theo nhu cầu"</strong> là một nguyên tắc phân phối chỉ có thể thực hiện khi xã hội đạt trình độ phát triển rất cao, 
              là đích đến của quá trình xây dựng chủ nghĩa xã hội và cộng sản chủ nghĩa. 
              Đây là sự khác biệt căn bản giữa xã hội cộng sản với các hình thái kinh tế – xã hội trước đó.
            </p>
          </div>
        </TimelineContainer>
      </SignificanceSection>
    </JourneyContainer>
  );
};

export default Journey;