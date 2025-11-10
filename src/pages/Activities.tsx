/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { FaNewspaper, FaUsers, FaFlag, FaStar, FaHandshake } from 'react-icons/fa';
import ImageFrame from '../components/ImageFrame';

const ActivitiesContainer = styled.div`
  min-height: 100vh;
  padding: 2rem 0;
`;

const HeroSection = styled.section`
  background: ${props => props.theme.colors.gradient.secondary};
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
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
`;

const ActivitiesGrid = styled.div`
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ActivityCard = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  overflow: hidden;
  transition: all 0.3s ease;
  border-top: 4px solid ${props => props.theme.colors.primary};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const ActivityHeader = styled.div`
  background: ${props => props.theme.colors.gradient.hero};
  padding: 2rem;
  border-bottom: 2px solid ${props => props.theme.colors.primary}20;
`;

const ActivityYear = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 0.5rem;
`;

const ActivityTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ActivityContent = styled.div`
  padding: 2rem;
`;

const ActivityDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const ActivityDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ActivityDetail = styled.li`
  color: ${props => props.theme.colors.text};
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;
  
  &:before {
    content: '▶';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.accent};
    font-size: 0.8rem;
    top: 0.1rem;
  }
`;

const ActivityImageContainer = styled.div`
  margin: 1.5rem 0;
  background: white;
  border-radius: ${props => props.theme.borderRadius.md};
  box-shadow: ${props => props.theme.shadows.sm};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    display: block;
  }
  
  /* Placeholder khi chưa có ảnh */
  &:empty:before {
    content: "Vị trí cho ảnh lịch sử";
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    color: ${props => props.theme.colors.textLight};
    font-style: italic;
    background: ${props => props.theme.colors.gradient.hero};
  }
`;

const ActivityImageCaption = styled.div`
  padding: 1rem;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  font-style: italic;
`;

const HeritageSection = styled.section`
  padding: 4rem 0;
  background: ${props => props.theme.colors.surface};
`;

const HeritageTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.text};
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
`;

const HeritageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const HeritageCard = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.md};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const HeritageImageContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
  background: ${props => props.theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textLight};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  &::before {
    
    position: absolute;
    font-size: 0.9rem;
    opacity: 0.7;
  }
`;

const HeritageCaption = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const HeritageCaptionTitle = styled.h4`
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
  font-weight: 600;
  font-size: 1.1rem;
`;

const HeritageCaptionText = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.9rem;
  line-height: 1.4;
`;

const ConclusionSection = styled.section`
  background: ${props => props.theme.colors.gradient.primary};
  color: white;
  padding: 4rem 2rem;
  margin: 4rem 0;
  border-radius: ${props => props.theme.borderRadius.lg};
  text-align: center;
`;

const ConclusionTitle = styled.h3`
  color: white;
  margin-bottom: 2rem;
`;

const ConclusionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto 1.5rem;
  opacity: 0.95;
`;

const Activities = () => {
  return (
    <ActivitiesContainer className="fade-in">
      <HeroSection>
        <HeroContent>
          <HeroTitle>Vì sao phải qua "Hưởng theo năng lực"?</HeroTitle>
          <HeroDescription>
            Giải thích tại sao muốn đạt "hưởng theo nhu cầu" phải trải qua giai đoạn "hưởng theo năng lực"
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      <TimelineSection>
        <TimelineContainer>
          <SectionTitle>Khái quát</SectionTitle>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', margin: '2rem 0' }}>
            <ImageFrame
              src="/images/placeholder-transition-step1.jpg"
              alt="Giai đoạn 1"
              caption="Hưởng theo năng lực - Giai đoạn tích lũy"
            />
            <ImageFrame
              src="/images/placeholder-transition-step2.jpg"
              alt="Giai đoạn 2"
              caption="Hưởng theo nhu cầu - Giai đoạn lý tưởng"
            />
          </div>
          
          <IntroText>
            "Hưởng theo năng lực" nghĩa là ai làm nhiều, cống hiến nhiều thì được hưởng nhiều – phản ánh sự công bằng trong giai đoạn quá độ lên CNXH. 
            "Hưởng theo nhu cầu" nghĩa là ai cần gì cũng được đáp ứng, thể hiện mức phát triển cao nhất của xã hội cộng sản.
            <br/><br/>
            Hai hình thái này giống như hai nấc thang phát triển:
          </IntroText>

          <ActivitiesGrid>
            <ActivityCard>
              <ActivityHeader>
                <ActivityYear>Bậc 1</ActivityYear>
                <ActivityTitle>
                  <FaHandshake />
                  Giai đoạn xây nền tảng vật chất
                </ActivityTitle>
              </ActivityHeader>
              <ActivityContent>
                <ActivityDescription>
                  "Hưởng theo năng lực" - Giai đoạn tích lũy, xây dựng cơ sở vật chất và nâng cao ý thức con người
                </ActivityDescription>
              </ActivityContent>
            </ActivityCard>

            <ActivityCard>
              <ActivityHeader>
                <ActivityYear>Bậc 2</ActivityYear>
                <ActivityTitle>
                  <FaStar />
                  Giai đoạn lý tưởng
                </ActivityTitle>
              </ActivityHeader>
              <ActivityContent>
                <ActivityDescription>
                  "Hưởng theo nhu cầu" - Khi xã hội đã phát triển cao, của cải dồi dào và con người phát triển toàn diện
                </ActivityDescription>
              </ActivityContent>
            </ActivityCard>
          </ActivitiesGrid>

          <IntroText style={{ marginTop: '3rem', fontStyle: 'italic', background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #2C5F8D' }}>
            <strong>Ví dụ minh họa:</strong> Trong học tập – khi còn học sinh, bạn phải tự nỗ lực để đạt kết quả (hưởng theo năng lực). 
            Khi trưởng thành, xã hội phát triển và đảm bảo phúc lợi toàn dân, ai cũng có thể được chăm sóc, được học hành, được hưởng theo nhu cầu.
          </IntroText>

          <SectionTitle style={{ marginTop: '4rem' }}>Lý do phải trải qua "Hưởng theo năng lực"</SectionTitle>

          <ActivitiesGrid>
            <ActivityCard>
              <ActivityHeader>
                <ActivityTitle>
                  <FaFlag />
                  Về kinh tế
                </ActivityTitle>
              </ActivityHeader>
              <ActivityContent>
                <ActivityDescription>
                  Ở giai đoạn đầu, năng suất lao động thấp, vật chất chưa dồi dào. Nếu "hưởng theo nhu cầu" ngay, xã hội sẽ thiếu hụt, mất động lực sản xuất. 
                  "Hưởng theo năng lực" giúp khuyến khích làm việc, tạo ra của cải, phát triển sản xuất.
                </ActivityDescription>
                
                <ActivityDetails>
                  <ActivityDetail>
                    <strong>Ví dụ:</strong> Thời kỳ đầu đổi mới ở Việt Nam (1986), đất nước còn nghèo, nên ai lao động nhiều sẽ có thu nhập cao hơn.
                  </ActivityDetail>
                  <ActivityDetail>
                    Nhờ đó, năng suất tăng, đời sống cải thiện → tạo nền tảng để tiến dần đến bình đẳng và phúc lợi cho mọi người.
                  </ActivityDetail>
                </ActivityDetails>
              </ActivityContent>
            </ActivityCard>

            <ActivityCard>
              <ActivityHeader>
                <ActivityTitle>
                  <FaUsers />
                  Về con người – ý thức xã hội
                </ActivityTitle>
              </ActivityHeader>
              <ActivityContent>
                <ActivityDescription>
                  Trong giai đoạn quá độ, con người vẫn còn tư tưởng cá nhân, so bì, ích kỷ. Phải "hưởng theo năng lực" để rèn luyện ý thức trách nhiệm, 
                  tính tự giác và tinh thần tập thể.
                </ActivityDescription>
                
                <ActivityDetails>
                  <ActivityDetail>
                    <strong>Ví dụ:</strong> Một công nhân làm việc chăm chỉ, tạo ra giá trị cao → được khen thưởng, tăng lương.
                  </ActivityDetail>
                  <ActivityDetail>
                    Điều đó giúp hình thành thói quen cống hiến và lao động tích cực – nền tảng để sau này xã hội tự giác, không cần so đo quyền lợi cá nhân nữa.
                  </ActivityDetail>
                </ActivityDetails>
              </ActivityContent>
            </ActivityCard>

            <ActivityCard>
              <ActivityHeader>
                <ActivityTitle>
                  <FaNewspaper />
                  Về điều kiện xã hội – kỹ thuật
                </ActivityTitle>
              </ActivityHeader>
              <ActivityContent>
                <ActivityDescription>
                  "Hưởng theo nhu cầu" chỉ có thể tồn tại khi khoa học – công nghệ phát triển, sản xuất tự động hóa, vật chất dư thừa. 
                  Vì thế, xã hội cần thời gian để xây dựng cơ sở vật chất – kỹ thuật vững mạnh, đào tạo nguồn nhân lực, và hoàn thiện thể chế.
                </ActivityDescription>
                
                <ActivityDetails>
                  <ActivityDetail>
                    <strong>Ví dụ:</strong> Ngày nay, ở các nước phát triển, robot và công nghệ AI dần thay thế sức người → 
                    con người có thể hưởng thụ nhiều dịch vụ miễn phí (giáo dục, y tế, công nghệ công cộng).
                  </ActivityDetail>
                  <ActivityDetail>
                    Đó chính là dấu hiệu tiến dần đến "hưởng theo nhu cầu".
                  </ActivityDetail>
                </ActivityDetails>
              </ActivityContent>
            </ActivityCard>
          </ActivitiesGrid>
        </TimelineContainer>
      </TimelineSection>

      <ConclusionSection>
        <TimelineContainer>
          <ConclusionTitle>Kết luận</ConclusionTitle>
          <ConclusionText>
            "Hưởng theo năng lực" là bước trung gian tất yếu trong tiến trình đi lên CNXH. 
          </ConclusionText>
          <ConclusionText>
            Giai đoạn này giúp phát triển kinh tế, nâng cao ý thức con người và hoàn thiện điều kiện xã hội, 
            để sau này con người có thể sống, lao động và hưởng thụ theo nhu cầu một cách công bằng, văn minh.
          </ConclusionText>
          <ConclusionText style={{ fontWeight: '600', fontSize: '1.2rem', marginTop: '2rem' }}>
            "Không thể nhảy cóc từ xã hội nghèo nàn, lạc hậu lên xã hội cộng sản hoàn chỉnh. 
            Phải trải qua quá trình tích lũy, phát triển và rèn luyện để tiến tới lý tưởng cao đẹp."
          </ConclusionText>
        </TimelineContainer>
      </ConclusionSection>
    </ActivitiesContainer>
  );
};

export default Activities;