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
          <HeroTitle>Kết luận và liên hệ thực tiễn</HeroTitle>
          <HeroDescription>
            Liên hệ với thực tiễn Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <ContentContainer>
          <SectionTitle>Kết luận chung về hai nguyên tắc phân phối</SectionTitle>
          
          <VietnamSituationGrid>
            <SituationCard>
              <CardIcon><FaUsers /></CardIcon>
              <CardTitle>"Làm theo năng lực, hưởng theo lao động"</CardTitle>
              <CardDescription>
                Là nguyên tắc chủ yếu trong giai đoạn quá độ lên chủ nghĩa xã hội. 
                Mỗi người có trách nhiệm đóng góp cho xã hội theo khả năng lao động của mình và được hưởng phần tương xứng với công sức đóng góp đó.
              </CardDescription>
            </SituationCard>

            <SituationCard>
              <CardIcon><FaIndustry /></CardIcon>
              <CardTitle>"Làm theo năng lực, hưởng theo nhu cầu"</CardTitle>
              <CardDescription>
                Là mục tiêu cuối cùng của xã hội cộng sản chủ nghĩa, khi năng suất lao động xã hội đạt mức cao, 
                của cải dư thừa, đáp ứng được mọi nhu cầu chính đáng của con người.
              </CardDescription>
            </SituationCard>

            <SituationCard>
              <CardIcon><FaExclamationTriangle /></CardIcon>
              <CardTitle>Mối quan hệ kế thừa - phát triển</CardTitle>
              <CardDescription>
                Hai nguyên tắc này không đối lập, mà có mối quan hệ kế thừa – phát triển: 
                nguyên tắc "hưởng theo lao động" là bước đệm tất yếu để tiến tới "hưởng theo nhu cầu".
              </CardDescription>
            </SituationCard>
          </VietnamSituationGrid>

          <MovementSection>
            <MovementTitle>Liên hệ thực tiễn Việt Nam trong thời kỳ quá độ</MovementTitle>
            <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#6C757D', lineHeight: '1.8' }}>
              Việt Nam đang trong giai đoạn quá độ lên chủ nghĩa xã hội – nền kinh tế nhiều thành phần vận hành theo cơ chế thị trường định hướng xã hội chủ nghĩa.
            </p>
            
            <MovementList>
              <MovementItem>
                <MovementName>Nguyên tắc phân phối hiện nay</MovementName>
                <MovementDescription>
                  Vì điều kiện kinh tế – xã hội chưa đạt trình độ cao, nên nguyên tắc phân phối chủ yếu hiện nay là:
                  <br/><br/>
                  <strong style={{ color: '#2C5F8D', fontSize: '1.1rem' }}>👉 "Làm theo năng lực, hưởng theo lao động"</strong>
                  <br/><br/>
                  <strong>👉 Kết hợp với các hình thức phân phối khác:</strong> phân phối theo vốn, theo hiệu quả kinh doanh, theo phúc lợi xã hội…
                </MovementDescription>
              </MovementItem>

              <MovementItem>
                <MovementName>Tiến bộ và công bằng xã hội</MovementName>
                <MovementDescription>
                  Nhà nước chú trọng thực hiện tiến bộ và công bằng xã hội ngay trong từng bước phát triển, 
                  không đợi đến khi kinh tế phát triển cao mới giải quyết vấn đề xã hội.
                  <br/><br/>
                  <strong>🏥 Ví dụ:</strong> giáo dục phổ cập, bảo hiểm y tế, chính sách trợ cấp xã hội, xóa đói giảm nghèo, phúc lợi công cộng.
                </MovementDescription>
              </MovementItem>
            </MovementList>
          </MovementSection>

          <GlobalInfluenceSection>
            <SectionTitle>Những bước đi cụ thể để tiến tới mục tiêu</SectionTitle>
            <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem', color: '#6C757D' }}>
              Để tiến tới mục tiêu "hưởng theo nhu cầu", Việt Nam cần thực hiện:
            </p>

            <InfluenceGrid>
              <InfluenceCard>
                <InfluenceTitle>Phát triển lực lượng sản xuất</InfluenceTitle>
                <InfluenceText>
                  Đẩy mạnh công nghiệp hóa – hiện đại hóa, chuyển đổi số, nâng cao năng suất lao động để tạo ra của cải dồi dào.
                </InfluenceText>
              </InfluenceCard>

              <InfluenceCard>
                <InfluenceTitle>Xây dựng quan hệ sản xuất mới</InfluenceTitle>
                <InfluenceText>
                  Củng cố quan hệ sản xuất mới, phù hợp trình độ phát triển của lực lượng sản xuất, đảm bảo công bằng và hiệu quả.
                </InfluenceText>
              </InfluenceCard>

              <InfluenceCard>
                <InfluenceTitle>Tăng cường an sinh xã hội</InfluenceTitle>
                <InfluenceText>
                  Tăng cường hệ thống an sinh – phúc lợi xã hội, tạo điều kiện để thu hẹp khoảng cách giàu nghèo.
                </InfluenceText>
              </InfluenceCard>

              <InfluenceCard>
                <InfluenceTitle>Phát triển con người toàn diện</InfluenceTitle>
                <InfluenceText>
                  Nâng cao ý thức cộng đồng, tinh thần tương trợ xã hội, rèn luyện đạo đức và trách nhiệm xã hội.
                </InfluenceText>
              </InfluenceCard>

              <InfluenceCard>
                <InfluenceTitle>Hoàn thiện thể chế kinh tế</InfluenceTitle>
                <InfluenceText>
                  Hoàn thiện thể chế kinh tế thị trường định hướng XHCN, vừa thúc đẩy tăng trưởng, vừa bảo đảm công bằng xã hội.
                </InfluenceText>
              </InfluenceCard>
            </InfluenceGrid>
          </GlobalInfluenceSection>

          <ReasonSection>
            <ReasonTitle>Ý nghĩa</ReasonTitle>
            
            <ReasonList>
              <ReasonItem>
                <strong>Tạo động lực phát triển:</strong> Thực hiện tốt nguyên tắc phân phối trong thời kỳ quá độ giúp tạo động lực 
                phát triển kinh tế – xã hội, nâng cao đời sống nhân dân.
              </ReasonItem>
              
              <ReasonItem>
                <strong>Xây dựng xã hội công bằng:</strong> Góp phần xây dựng xã hội công bằng, dân chủ, văn minh, 
                hướng tới mục tiêu cuối cùng là chủ nghĩa cộng sản, nơi con người được hưởng thụ theo nhu cầu chính đáng của mình.
              </ReasonItem>
              
              <ReasonItem>
                <strong>Định hướng của Đảng và Nhà nước:</strong> Đây cũng là định hướng lớn của Đảng và Nhà nước Việt Nam, 
                phù hợp với điều kiện thực tế và xu thế phát triển của đất nước.
              </ReasonItem>
            </ReasonList>
          </ReasonSection>

          <ConclusionSection>
            <h3 style={{ color: '#B8860B', marginBottom: '1.5rem', fontSize: '2rem' }}>Kết luận tổng quát</h3>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.9', textAlign: 'justify', marginBottom: '1.5rem' }}>
              Hai nguyên tắc phân phối <strong>"hưởng theo năng lực"</strong> và <strong>"hưởng theo nhu cầu"</strong> 
              phản ánh hai giai đoạn phát triển khác nhau của xã hội trong quá trình tiến lên chủ nghĩa cộng sản.
            </p>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.9', textAlign: 'justify', marginBottom: '1.5rem' }}>
              Trong thời kỳ quá độ, Việt Nam đang thực hiện nguyên tắc "làm theo năng lực, hưởng theo lao động" kết hợp với 
              các chính sách an sinh xã hội, hướng tới mục tiêu công bằng, dân chủ và phồn vinh.
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.9', textAlign: 'justify', fontWeight: '600', color: '#DC143C' }}>
              Đây là con đường tất yếu, phù hợp với quy luật phát triển khách quan của xã hội và điều kiện thực tế của Việt Nam, 
              để từng bước tiến tới xã hội cộng sản chủ nghĩa - nơi con người được giải phóng hoàn toàn và phát triển toàn diện.
            </p>
          </ConclusionSection>
        </ContentContainer>
      </ContentSection>
    </HistoricalContextContainer>
  );
};

export default HistoricalContext;