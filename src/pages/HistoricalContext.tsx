import React from 'react';
import styled from 'styled-components';
import { FaIndustry, FaUsers, FaExclamationTriangle } from 'react-icons/fa';

const HistoricalContextContainer = styled.div`
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

const ContentSection = styled.section`
  padding: 4rem 0;
`;

const ContentContainer = styled.div`
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

const VietnamSituationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SituationCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  border-top: 4px solid ${props => props.theme.colors.accent};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
`;

const MovementSection = styled.div`
  background: ${props => props.theme.colors.surface};
  padding: 3rem 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  margin: 3rem 0;
`;

const MovementTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const MovementList = styled.div`
  display: grid;
  gap: 2rem;
`;

const MovementItem = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.md};
  border-left: 4px solid ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.sm};
`;

const MovementName = styled.h4`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const MovementPeriod = styled.span`
  color: ${props => props.theme.colors.accent};
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: block;
`;

const MovementDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  margin: 0;
  line-height: 1.6;
`;

const GlobalInfluenceSection = styled.div`
  margin: 4rem 0;
`;

const InfluenceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const InfluenceCard = styled.div`
  background: ${props => props.theme.colors.gradient.hero};
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 2px solid ${props => props.theme.colors.primary}30;
`;

const InfluenceTitle = styled.h4`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const InfluenceText = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
`;

const ReasonSection = styled.div`
  background: ${props => props.theme.colors.gradient.primary};
  color: white;
  padding: 3rem 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  margin: 3rem 0;
  text-align: center;
`;

const ReasonTitle = styled.h3`
  color: white;
  margin-bottom: 2rem;
`;

const ReasonList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
`;

const ReasonItem = styled.li`
  background: rgba(255, 255, 255, 0.1);
  margin: 1rem 0;
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.md};
  backdrop-filter: blur(10px);
  text-align: left;
`;

const ConclusionSection = styled.div`
  background: white;
  padding: 3rem 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  margin: 3rem 0;
  text-align: center;
`;

const ContextImageSection = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
`;

const ContextImage = styled.div`
  max-width: 500px;
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  overflow: hidden;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
  }
`;

const ImageCaption = styled.div`
  padding: 1rem;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  text-align: center;
  font-weight: 500;
`;

const PatrioticMovementImages = styled.div`
  margin: 3rem 0;
`;

const MovementImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const MovementImageCard = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.md};
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }
`;

const MovementCaption = styled.div`
  padding: 1rem;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  text-align: center;
  font-weight: 500;
`;

const HistoricalContext: React.FC = () => {
  return (
    <HistoricalContextContainer className="fade-in">
      <HeroSection>
        <HeroContent>
          <HeroTitle>Hoàn cảnh lịch sử</HeroTitle>
          <HeroDescription>
            Bối cảnh Việt Nam và thế giới đầu thế kỷ XX - Những nhân tố quyết định đến quyết định ra đi tìm đường cứu nước của Nguyễn Tất Thành
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <ContentContainer>
          <SectionTitle>Tình hình Việt Nam đầu thế kỷ XX</SectionTitle>
          <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', color: '#6C757D' }}>
            Đầu thế kỷ XX, đất nước Việt Nam đang chìm trong ách thống trị nặng nề của thực dân Pháp
          </p>
          
          <ContextImageSection>
            <ContextImage>
              <img src="/images/vietnam-colonial-period.jpg" alt="Việt Nam thời kỳ thực dân" />
              <ImageCaption>Việt Nam dưới sự thống trị của thực dân Pháp đầu thế kỷ XX</ImageCaption>
            </ContextImage>
          </ContextImageSection>
          
          <VietnamSituationGrid>
            <SituationCard>
              <CardIcon><FaUsers /></CardIcon>
              <CardTitle>Chính trị</CardTitle>
              <CardDescription>
                Bộ máy cai trị thực dân – phong kiến kìm hãm, chèn ép mọi phong trào yêu nước. 
                Quyền lực tập trung trong tay thực dân Pháp và tầng lớp phong kiến thân Pháp.
              </CardDescription>
            </SituationCard>

            <SituationCard>
              <CardIcon><FaIndustry /></CardIcon>
              <CardTitle>Kinh tế</CardTitle>
              <CardDescription>
                Người dân bị bóc lột tàn bạo thông qua sưu cao, thuế nặng; ruộng đất tập trung trong tay địa chủ và thực dân. 
                Nền kinh tế phục vụ cho lợi ích của Pháp.
              </CardDescription>
            </SituationCard>

            <SituationCard>
              <CardIcon><FaExclamationTriangle /></CardIcon>
              <CardTitle>Xã hội</CardTitle>
              <CardDescription>
                Đời sống nhân dân cực khổ, đói nghèo triền miên; văn hóa, giáo dục bị thực dân kìm hãm, 
                nhằm phục vụ chính sách nô dịch và duy trì sự thống trị.
              </CardDescription>
            </SituationCard>
          </VietnamSituationGrid>

          <MovementSection>
            <MovementTitle>Các phong trào yêu nước và thất bại</MovementTitle>
            <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#6C757D' }}>
              Trong bối cảnh đó, nhiều phong trào yêu nước đã nổ ra nhưng đều thất bại:
            </p>
            
            <MovementList>
              <MovementItem>
                <MovementName>Phong trào Cần Vương</MovementName>
                <MovementPeriod>(1885–1896)</MovementPeriod>
                <MovementDescription>
                  Do các sĩ phu văn thân lãnh đạo, kêu gọi "phò vua đuổi giặc". Tuy có tinh thần yêu nước cao 
                  nhưng thất bại vì lực lượng phân tán, thiếu tổ chức thống nhất và vũ khí lạc hậu.
                </MovementDescription>
              </MovementItem>

              <MovementItem>
                <MovementName>Phong trào Đông Du</MovementName>
                <MovementPeriod>(1905–1909)</MovementPeriod>
                <MovementDescription>
                  Do Phan Bội Châu khởi xướng, đưa thanh niên sang Nhật Bản học tập quân sự và khoa học. 
                  Song bị chính quyền Nhật Bản trục xuất vì lợi ích quan hệ với Pháp.
                </MovementDescription>
              </MovementItem>

              <MovementItem>
                <MovementName>Phong trào Duy Tân</MovementName>
                <MovementPeriod>(1906–1908)</MovementPeriod>
                <MovementDescription>
                  Do Phan Chu Trinh lãnh đạo, kêu gọi cải cách ôn hòa, học tập văn minh phương Tây. 
                  Nhưng không được thực dân Pháp chấp nhận và bị đàn áp dữ dội.
                </MovementDescription>
              </MovementItem>
            </MovementList>
            
            <div style={{ textAlign: 'center', marginTop: '2rem', fontStyle: 'italic', color: '#DC143C' }}>
              <strong>Tất cả các con đường cứu nước trên đều thất bại, để lại một khoảng trống về phương hướng và niềm tin.</strong>
            </div>
            
            <PatrioticMovementImages>
              <MovementImageGrid>
                <MovementImageCard>
                  <img src="/images/can-vuong-movement.jpg" alt="Phong trào Cần Vương" />
                  <MovementCaption>Phong trào Cần Vương (1885-1896)</MovementCaption>
                </MovementImageCard>
                <MovementImageCard>
                  <img src="/images/dong-du-movement.jpg" alt="Phong trào Đông Du" />
                  <MovementCaption>Phong trào Đông Du (1905-1909)</MovementCaption>
                </MovementImageCard>
              </MovementImageGrid>
            </PatrioticMovementImages>
          </MovementSection>

          <GlobalInfluenceSection>
            <SectionTitle>Ảnh hưởng quốc tế</SectionTitle>
            <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem', color: '#6C757D' }}>
              Trong khi Việt Nam chìm trong khổ nạn, thế giới đầu thế kỷ XX lại có nhiều biến động lớn:
            </p>

            <InfluenceGrid>
              <InfluenceCard>
                <InfluenceTitle>Chủ nghĩa thực dân lan rộng</InfluenceTitle>
                <InfluenceText>
                  Không chỉ Việt Nam, mà khắp châu Á và châu Phi đều bị các cường quốc phương Tây áp bức, 
                  chia cắt, biến thành thuộc địa để phục vụ cho sự phát triển tư bản của chúng.
                </InfluenceText>
              </InfluenceCard>

              <InfluenceCard>
                <InfluenceTitle>Trào lưu tư tưởng tiến bộ</InfluenceTitle>
                <InfluenceText>
                  Ảnh hưởng từ cách mạng tư sản Pháp, Mỹ đem đến khẩu hiệu "tự do, bình đẳng, bác ái". 
                  Tuy nhiên, những lý tưởng này không được áp dụng cho các dân tộc thuộc địa.
                </InfluenceText>
              </InfluenceCard>

              <InfluenceCard>
                <InfluenceTitle>Phong trào công nhân quốc tế</InfluenceTitle>
                <InfluenceText>
                  Sự ra đời của Quốc tế II, Quốc tế III khẳng định con đường đấu tranh của giai cấp vô sản. 
                  Đặc biệt, Cách mạng Tháng Mười Nga (1917) mở ra kỷ nguyên mới.
                </InfluenceText>
              </InfluenceCard>
            </InfluenceGrid>

            <div className="quote" style={{ margin: '3rem 0', textAlign: 'center' }}>
              "Cách mạng Tháng Mười Nga (1917) – mở ra kỷ nguyên mới, báo hiệu rằng các dân tộc bị áp bức 
              hoàn toàn có thể vùng lên giành độc lập thông qua con đường cách mạng vô sản."
            </div>
          </GlobalInfluenceSection>

          <ReasonSection>
            <ReasonTitle>Nguyên nhân ra đi tìm đường cứu nước</ReasonTitle>
            <p style={{ marginBottom: '2rem', opacity: '0.9' }}>
              Trước bối cảnh đất nước và quốc tế, Nguyễn Tất Thành nhận thấy:
            </p>
            
            <ReasonList>
              <ReasonItem>
                <strong>Các con đường cứu nước cũ đều không hiệu quả:</strong> Đấu tranh vũ trang tự phát thất bại, 
                con đường cầu viện Nhật hay cải lương ôn hòa cũng không thành công.
              </ReasonItem>
              
              <ReasonItem>
                <strong>Khát vọng tìm một con đường mới:</strong> Một con đường khác biệt, độc lập, 
                không lặp lại vết xe đổ của các phong trào đi trước.
              </ReasonItem>
              
              <ReasonItem>
                <strong>Tầm nhìn vượt ra ngoài biên giới:</strong> Người hiểu rằng muốn cứu nước không thể chỉ nhìn 
                trong phạm vi Việt Nam, mà cần phải đi ra thế giới, tận mắt học hỏi và tìm kiếm giải pháp triệt để.
              </ReasonItem>
            </ReasonList>
          </ReasonSection>

          <ConclusionSection>
            <h3 style={{ color: '#B8860B', marginBottom: '1.5rem' }}>Kết luận về bối cảnh</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify', marginBottom: '1.5rem' }}>
              Hoàn cảnh lịch sử đầu thế kỷ XX đã đặt dân tộc Việt Nam trước ngõ cụt: đất nước bị đô hộ, 
              nhân dân khốn khổ, phong trào yêu nước thất bại.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify', marginBottom: '1.5rem' }}>
              Cùng lúc, thế giới lại dấy lên những tư tưởng tiến bộ và cách mạng, mở ra cơ hội tìm con đường giải phóng mới.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify', fontWeight: '600', color: '#DC143C' }}>
              Trong bối cảnh đó, sự lựa chọn ra đi của Nguyễn Tất Thành là tất yếu và mang tính thời đại. 
              Đây là điểm khởi đầu cho một hành trình tìm đường cứu nước độc lập, không lệ thuộc, 
              và sau này đã thay đổi vận mệnh cả dân tộc.
            </p>
          </ConclusionSection>
        </ContentContainer>
      </ContentSection>
    </HistoricalContextContainer>
  );
};

export default HistoricalContext;