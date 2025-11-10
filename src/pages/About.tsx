import React from 'react';
import styled from 'styled-components';
import { FaUser, FaCode, FaRobot, FaGithub, FaReact, FaJs } from 'react-icons/fa';
import { SiTypescript, SiOpenai } from 'react-icons/si';
import ImageFrame from '../components/ImageFrame';

const AboutContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`;

const HeroSection = styled.section`
  background: ${props => props.theme.colors.gradient.primary};
  color: white;
  padding: 6rem 0 4rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ContentSection = styled.section`
  padding: 4rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.text};
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TeamCard = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 2rem;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.md};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const TeamIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${props => props.theme.colors.gradient.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  
  svg {
    font-size: 2rem;
    color: white;
  }
`;

const TeamName = styled.h3`
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TeamRole = styled.p`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const TeamDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.9rem;
  line-height: 1.5;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TechSection = styled.div`
  background: ${props => props.theme.colors.surface};
  padding: 4rem 0;
  margin: 4rem 0;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TechCard = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius.md};
  padding: 1.5rem;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.sm};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TechIcon = styled.div<{ color: string }>`
  font-size: 3rem;
  color: ${props => props.color};
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TechName = styled.h4`
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TechDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.85rem;
  line-height: 1.4;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AISection = styled.div`
  background: ${props => props.theme.colors.gradient.secondary};
  color: white;
  padding: 4rem 0;
  margin: 4rem 0;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AIGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AICard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AIIcon = styled.div<{ color: string }>`
  font-size: 3.5rem;
  color: ${props => props.color};
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AIName = styled.h4`
  color: white;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AIDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.5;
`;

const ProjectInfo = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 2rem;
  margin: 3rem 0;
  box-shadow: ${props => props.theme.shadows.md};
  text-align: center;
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const ProjectText = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const About = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const teamMembers = [
    {
      name: "Trần Đức Nhân",
      role: "Frontend Developer & UI/UX Designer",
      description: "Chịu trách nhiệm phát triển giao diện người dùng và trải nghiệm tương tác, thiết kế layout responsive và tối ưu hóa hiệu suất frontend."
    },
    {
      name: "Hà Nguyên Hào", 
      role: "Backend Developer & AI Integration",
      description: "Phát triển API, tích hợp AI chatbot với Groq, xử lý logic backend và quản lý cơ sở dữ liệu cho ứng dụng."
    },
    {
      name: "Dương Hồng Ân",
      role: "Content Manager & Historical Research",
      description: "Thu thập và biên tập nội dung lịch sử, đảm bảo tính chính xác của thông tin về Hồ Chí Minh và giai đoạn ở Pháp."
    },
    {
      name: "Dương Thái Hoàng Nghĩa",
      role: "Content Manager & Historical Research",
      description: "Thu thập và biên tập nội dung lịch sử, đảm bảo tính chính xác của thông tin về Hồ Chí Minh và giai đoạn ở Pháp."
    }
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const technologies = [
    {
      name: "React",
      icon: FaReact,
      color: "#61DAFB",
      description: "Thư viện JavaScript để xây dựng giao diện người dùng"
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
      description: "Superset của JavaScript với type safety"
    },
    {
      name: "Styled Components",
      icon: FaCode,
      color: "#DB7093",
      description: "CSS-in-JS library cho styling components"
    },
    {
      name: "JavaScript",
      icon: FaJs,
      color: "#F7DF1E",
      description: "Ngôn ngữ lập trình chính cho web development"
    }
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const aiTools = [
    {
      name: "ChatGPT",
      icon: SiOpenai,
      color: "#00A67E",
      description: "AI assistant hỗ trợ research, tìm kiếm thông tin lịch sử và brainstorming ý tưởng cho dự án"
    },
    {
      name: "GitHub Copilot",
      icon: FaGithub,
      color: "#FFFFFF",
      description: "AI pair programmer hỗ trợ viết code, auto-complete và build source code nhanh chóng"
    },
    {
      name: "Groq API",
      icon: FaRobot,
      color: "#FF6B35",
      description: "AI chatbot engine tích hợp vào website, cung cấp thông tin về Hồ Chí Minh cho người dùng"
    }
  ];

  return (
    <AboutContainer className="fade-in">
      <HeroSection>
        <HeroContent>
          <HeroTitle>Hưởng theo năng lực</HeroTitle>
          <HeroDescription>
            Đặc điểm của nguyên tắc phân phối trong giai đoạn quá độ lên chủ nghĩa xã hội
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <Container>
          <SectionTitle>Cơ sở lý luận</SectionTitle>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', margin: '2rem 0' }}>
            <ImageFrame
              src="/images/placeholder-marx.jpg"
              alt="Karl Marx"
              caption="Karl Marx - Người sáng lập học thuyết"
            />
            <ImageFrame
              src="/images/placeholder-lenin.jpg"
              alt="Vladimir Lenin"
              caption="Vladimir Lenin - Người kế thừa và phát triển"
            />
          </div>
          
          <ProjectInfo>
            <ProjectText style={{ textAlign: 'justify' }}>
              Trong học thuyết Mác – Lênin, nguyên tắc phân phối là một nội dung quan trọng phản ánh bản chất kinh tế - xã hội của từng giai đoạn phát triển.
              <br/><br/>
              <strong>Karl Marx</strong> đã nêu rõ trong <em>"Phê phán Cương lĩnh Gotha"</em> rằng:
              <br/><br/>
              • Trong giai đoạn đầu của CNXH (tức là thời kỳ quá độ), <strong>phân phối theo lao động</strong> là nguyên tắc chủ yếu.
              <br/><br/>
              • Còn trong giai đoạn cao của CNCS, khi của cải xã hội dồi dào và con người phát triển toàn diện, mới thực hiện nguyên tắc <strong>"làm theo năng lực, hưởng theo nhu cầu"</strong>.
            </ProjectText>
          </ProjectInfo>
          
          <ImageFrame
            src="/images/placeholder-distribution.jpg"
            alt="Nguyên tắc phân phối"
            caption="Hai nguyên tắc phân phối trong lý thuyết Mác-Lênin"
          />

          <SectionTitle style={{ marginTop: '4rem' }}>Ý nghĩa của "Hưởng theo năng lực"</SectionTitle>
          
          <ProjectInfo>
            <ProjectText style={{ textAlign: 'justify' }}>
              Cụm từ "hưởng theo năng lực" không phải là nguyên tắc của thời kỳ quá độ, mà là một <strong>đặc điểm giới hạn, chưa hoàn thiện</strong> của giai đoạn này.
              <br/><br/>
              Cụ thể:
              <br/><br/>
              • Trong thời kỳ quá độ, xã hội chưa thể xóa bỏ hoàn toàn sự khác biệt về năng lực, trình độ, hiệu quả lao động.
              <br/><br/>
              • Vì vậy, sự phân phối vẫn còn phụ thuộc vào năng lực và kết quả lao động của từng người — <strong>ai làm nhiều, năng suất cao thì được hưởng nhiều hơn</strong>.
              <br/><br/>
              • Điều này thể hiện nguyên tắc "làm theo năng lực, hưởng theo lao động", chứ chưa phải "hưởng theo nhu cầu" như trong xã hội cộng sản hoàn chỉnh.
            </ProjectText>
          </ProjectInfo>

          <SectionTitle style={{ marginTop: '4rem' }}>Đặc điểm của nguyên tắc "Làm theo năng lực, hưởng theo lao động"</SectionTitle>
          
          <TeamGrid>
            <TeamCard>
              <TeamIcon>
                <FaUser />
              </TeamIcon>
              <TeamName>Công bằng xã hội tương đối</TeamName>
              <TeamDescription>
                Khuyến khích người lao động phát huy năng lực và cống hiến nhiều hơn cho xã hội
              </TeamDescription>
            </TeamCard>

            <TeamCard>
              <TeamIcon>
                <FaUser />
              </TeamIcon>
              <TeamName>Chênh lệch thu nhập</TeamName>
              <TeamDescription>
                Vẫn còn chênh lệch thu nhập do năng lực, mức độ đóng góp và vị trí công việc khác nhau
              </TeamDescription>
            </TeamCard>

            <TeamCard>
              <TeamIcon>
                <FaUser />
              </TeamIcon>
              <TeamName>Vai trò điều tiết của Nhà nước</TeamName>
              <TeamDescription>
                Nhà nước giữ vai trò điều tiết để đảm bảo công bằng xã hội, hạn chế bóc lột và bất bình đẳng
              </TeamDescription>
            </TeamCard>

            <TeamCard>
              <TeamIcon>
                <FaUser />
              </TeamIcon>
              <TeamName>Bước chuyển tiếp cần thiết</TeamName>
              <TeamDescription>
                Là bước chuyển tiếp cần thiết để tiến tới xã hội cộng sản, nơi của cải vật chất dồi dào và con người phát triển toàn diện
              </TeamDescription>
            </TeamCard>
          </TeamGrid>
        </Container>
      </ContentSection>

      <TechSection>
        <Container>
          <SectionTitle style={{ color: '#2C3E50' }}>Kết luận</SectionTitle>
          
          <ProjectInfo style={{ marginTop: '2rem' }}>
            <ProjectTitle>Nguyên tắc phân phối trong giai đoạn quá độ</ProjectTitle>
            <ProjectText style={{ textAlign: 'justify' }}>
              Trong giai đoạn quá độ lên CNXH, nguyên tắc phân phối chủ yếu là:
              <br/><br/>
              <strong style={{ fontSize: '1.2rem', color: '#2C5F8D' }}>"Làm theo năng lực, hưởng theo lao động"</strong>
              <br/><br/>
              "Hưởng theo năng lực" thể hiện tính chưa hoàn thiện của thời kỳ này — con người vẫn được hưởng dựa trên năng lực và kết quả lao động, chứ chưa theo nhu cầu.
              <br/><br/>
              Đây là <strong>đặc điểm tất yếu khách quan</strong> trong quá trình quá độ từ xã hội tư bản sang xã hội cộng sản chủ nghĩa.
            </ProjectText>
          </ProjectInfo>
        </Container>
      </TechSection>
    </AboutContainer>
  );
};

export default About;