import React from 'react';
import styled from 'styled-components';
import { FaNewspaper, FaUsers, FaFlag, FaStar, FaHandshake } from 'react-icons/fa';

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
          <HeroTitle>Hoạt động tại Pháp (1917–1923)</HeroTitle>
          <HeroDescription>
            Từ thanh niên yêu nước đến chiến sĩ cộng sản quốc tế - Giai đoạn hình thành tư tưởng cách mạng
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      <TimelineSection>
        <TimelineContainer>
          <SectionTitle>Dòng thời gian hoạt động</SectionTitle>
          <IntroText>
            Từ 1917 đến 1923, Hồ Chí Minh trải qua giai đoạn quan trọng tại Pháp. Đặc biệt từ 1919, Người bắt đầu 
            hoạt động chính trị tích cực: gửi yêu sách quốc tế, tham gia phong trào cộng sản, thành lập tổ chức, 
            viết báo và xác định con đường cứu nước thông qua cách mạng vô sản.
          </IntroText>

          <ActivitiesGrid>
            <ActivityCard>
              <ActivityHeader>
                <ActivityYear>1917–1918</ActivityYear>
                <ActivityTitle>
                  <FaHandshake />
                  Ở lại Pháp thời chiến
                </ActivityTitle>
              </ActivityHeader>
              <ActivityContent>
                <ActivityDescription>
                  Trong Thế chiến I, Nguyễn Ái Quốc ở lại Pháp, lao động kiếm sống và quan sát thực trạng xã hội. Thời kỳ này Người chưa hoạt động chính trị tích cực.
                </ActivityDescription>
                <ActivityDetails>
                  <ActivityDetail>
                    Lao động kiếm sống trong thời kỳ chiến tranh
                  </ActivityDetail>
                  <ActivityDetail>
                    Quan sát và tìm hiểu xã hội Pháp
                  </ActivityDetail>
                  <ActivityDetail>
                    Chuẩn bị nền tảng cho hoạt động chính trị sau chiến tranh
                  </ActivityDetail>
                </ActivityDetails>
              </ActivityContent>
            </ActivityCard>

            <ActivityCard>
              <ActivityHeader>
                <ActivityYear>1919</ActivityYear>
                <ActivityTitle>
                  <FaFlag />
                  Bản yêu sách của nhân dân An Nam
                </ActivityTitle>
              </ActivityHeader>
              <ActivityContent>
                <ActivityDescription>
                  Gửi "Bản yêu sách của nhân dân An Nam" tới Hội nghị Versailles, yêu cầu các quyền tự do, 
                  dân chủ cho nhân dân Việt Nam.
                </ActivityDescription>
                
                <ActivityImageContainer>
                   <img src="/images/versailles-petition-1919.jpg" alt="Bản yêu sách của nhân dân An Nam gửi tới Hội nghị Versailles" />
                </ActivityImageContainer>
                <ActivityImageCaption>Bản yêu sách của nhân dân An Nam gửi tới Hội nghị Versailles (1919)</ActivityImageCaption>
                
                <ActivityDetails>
                  <ActivityDetail>
                    Lần đầu tiên tiếng nói chính thức của một người Việt Nam trên diễn đàn quốc tế
                  </ActivityDetail>
                  <ActivityDetail>
                    Khẳng định ý chí độc lập và nhân quyền của dân tộc Việt Nam
                  </ActivityDetail>
                  <ActivityDetail>
                    Mở đầu cho con đường ngoại giao cách mạng của Hồ Chí Minh
                  </ActivityDetail>
                </ActivityDetails>
              </ActivityContent>
            </ActivityCard>

            <ActivityCard>
              <ActivityHeader>
                <ActivityYear>Tháng 7/1920</ActivityYear>
                <ActivityTitle>
                  <FaStar />
                  Đọc Luận cương của Lenin
                </ActivityTitle>
              </ActivityHeader>
              <ActivityContent>
                <ActivityDescription>
                  Nguyễn Ái Quốc đọc "Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa" của Lenin, đăng trên báo L'Humanité.
                </ActivityDescription>
                <ActivityDetails>
                  <ActivityDetail>
                    Nhận ra con đường giải phóng dân tộc phải gắn liền với cách mạng vô sản
                  </ActivityDetail>
                  <ActivityDetail>
                    Đánh dấu bước ngoặt lớn trong tư tưởng cách mạng
                  </ActivityDetail>
                  <ActivityDetail>
                    Hình thành nền tảng lý luận cho hoạt động cách mạng sau này
                  </ActivityDetail>
                </ActivityDetails>
              </ActivityContent>
            </ActivityCard>

            <ActivityCard>
              <ActivityHeader>
                <ActivityYear>Tháng 12/1920</ActivityYear>
                <ActivityTitle>
                  <FaStar />
                  Đại hội Tours
                </ActivityTitle>
              </ActivityHeader>
              <ActivityContent>
                <ActivityDescription>
                  Nguyễn Ái Quốc tham dự Đại hội Tours của Đảng Xã hội Pháp và bỏ phiếu tán thành gia nhập Quốc tế Cộng sản.
                </ActivityDescription>
                <ActivityDetails>
                  <ActivityDetail>
                    Trở thành một trong những thành viên đầu tiên đi theo xu hướng cộng sản
                  </ActivityDetail>
                  <ActivityDetail>
                    Đặt nền móng cho sự gắn bó giữa cách mạng Việt Nam và phong trào vô sản quốc tế
                  </ActivityDetail>
                  <ActivityDetail>
                    Chính thức gia nhập phong trào cộng sản quốc tế
                  </ActivityDetail>
                </ActivityDetails>
              </ActivityContent>
            </ActivityCard>

            <ActivityCard>
              <ActivityHeader>
                <ActivityYear>1921–1922</ActivityYear>
                <ActivityTitle>
                  <FaNewspaper />
                  Hội Liên hiệp thuộc địa và báo Le Paria
                </ActivityTitle>
              </ActivityHeader>
              <ActivityContent>
                <ActivityDescription>
                  Thành lập Hội Liên hiệp thuộc địa và sáng lập báo Le Paria (Người cùng khổ).
                </ActivityDescription>
                
                <ActivityImageContainer>
                  <img src="/images/le-paria-newspaper.jpg" alt="Báo Le Paria" />
                </ActivityImageContainer>
                <ActivityImageCaption>Báo Le Paria - Cơ quan ngôn luận của Hội Liên hiệp thuộc địa</ActivityImageCaption>
                
                <ActivityDetails>
                  <ActivityDetail>
                    Kết nối các dân tộc bị áp bức tại Pháp và châu Âu
                  </ActivityDetail>
                  <ActivityDetail>
                    Kêu gọi đoàn kết các dân tộc thuộc địa chống lại áp bức
                  </ActivityDetail>
                  <ActivityDetail>
                    Quảng bá tư tưởng giải phóng dân tộc gắn với phong trào cách mạng quốc tế
                  </ActivityDetail>
                  <ActivityDetail>
                    Sử dụng báo chí như một vũ khí tuyên truyền mạnh mẽ
                  </ActivityDetail>
                </ActivityDetails>
              </ActivityContent>
            </ActivityCard>

            <ActivityCard>
              <ActivityHeader>
                <ActivityYear>Cuối năm 1923</ActivityYear>
                <ActivityTitle>
                  <FaUsers />
                  Rời Pháp sang Liên Xô
                </ActivityTitle>
              </ActivityHeader>
              <ActivityContent>
                <ActivityDescription>
                  Nguyễn Ái Quốc rời Paris sang Moscow, bắt đầu thời kỳ hoạt động tại Quốc tế Cộng sản.
                </ActivityDescription>
                <ActivityDetails>
                  <ActivityDetail>
                    Bước vào giai đoạn chuẩn bị cho bước phát triển mới của cách mạng Việt Nam
                  </ActivityDetail>
                  <ActivityDetail>
                    Hướng đến việc thành lập Đảng Cộng sản Việt Nam sau này
                  </ActivityDetail>
                  <ActivityDetail>
                    Hoàn thành giai đoạn học tập và trưởng thành tại Pháp
                  </ActivityDetail>
                  <ActivityDetail>
                    Chuẩn bị cho sứ mệnh lịch sử tại quê hương
                  </ActivityDetail>
                </ActivityDetails>
              </ActivityContent>
            </ActivityCard>
          </ActivitiesGrid>
        </TimelineContainer>
      </TimelineSection>

      <HeritageSection>
        <TimelineContainer>
          <HeritageTitle>Di sản lịch sử</HeritageTitle>
          <HeritageGrid>
            <HeritageCard>
              <HeritageImageContainer>
                <img src="/images/ho-chi-minh-communist-party-france.jpg" alt="Hồ Chí Minh và Đảng Cộng sản Pháp" />
              </HeritageImageContainer>
              <HeritageCaption>
                <HeritageCaptionTitle>Hồ Chí Minh và Đảng Cộng sản Pháp</HeritageCaptionTitle>
                <HeritageCaptionText>
                  Bác Hồ cùng các đồng chí trong Đảng Cộng sản Pháp, nơi Người học hỏi và phát triển tư tưởng Marxism-Leninism.
                </HeritageCaptionText>
              </HeritageCaption>
            </HeritageCard>
            
            <HeritageCard>
              <HeritageImageContainer>
                <img src="/images/ho-chi-minh-writing.jpg" alt="Hồ Chí Minh viết báo" />
              </HeritageImageContainer>
              <HeritageCaption>
                <HeritageCaptionTitle>Hồ Chí Minh viết báo</HeritageCaptionTitle>
                <HeritageCaptionText>
                  Hình ảnh Bác Hồ chăm chú viết báo, truyền bá tư tưởng cách mạng và kêu gọi đoàn kết các dân tộc bị áp bức.
                </HeritageCaptionText>
              </HeritageCaption>
            </HeritageCard>
            
           
          </HeritageGrid>
        </TimelineContainer>
      </HeritageSection>

      <ConclusionSection>
        <TimelineContainer>
          <ConclusionTitle>Kết luận và ý nghĩa lịch sử</ConclusionTitle>
          <ConclusionText>
            Hành trình Hồ Chí Minh tại Pháp không chỉ là một chuyến đi học hỏi, quan sát, mà thực sự là một 
            bước ngoặt lịch sử làm thay đổi vận mệnh cách mạng Việt Nam.
          </ConclusionText>
          <ConclusionText>
            Trong thời kỳ này, Người đã đặt những viên gạch nền móng đầu tiên cho tư tưởng cách mạng giải phóng dân tộc 
            và lựa chọn con đường độc lập dân tộc gắn liền với chủ nghĩa xã hội – một định hướng mang tính quyết định 
            cho thắng lợi của cách mạng Việt Nam sau này.
          </ConclusionText>
          <ConclusionText style={{ fontWeight: '600', fontSize: '1.2rem' }}>
            "Từ một thanh niên yêu nước, Nguyễn Tất Thành đã trưởng thành thành Nguyễn Ái Quốc - 
            một chiến sĩ cộng sản quốc tế, người sáng lập ra Đảng Cộng sản Việt Nam và lãnh đạo dân tộc 
            ta giành được độc lập, tự do."
          </ConclusionText>
        </TimelineContainer>
      </ConclusionSection>
    </ActivitiesContainer>
  );
};

export default Activities;