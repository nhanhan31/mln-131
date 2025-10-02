import React from 'react';
import styled from 'styled-components';
import { FaUser, FaCode, FaRobot, FaGithub, FaReact, FaJs } from 'react-icons/fa';
import { SiTypescript, SiOpenai } from 'react-icons/si';

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

const TechSection = styled.div`
  background: ${props => props.theme.colors.surface};
  padding: 4rem 0;
  margin: 4rem 0;
`;

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

const TechIcon = styled.div<{ color: string }>`
  font-size: 3rem;
  color: ${props => props.color};
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TechName = styled.h4`
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
`;

const TechDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.85rem;
  line-height: 1.4;
`;

const AISection = styled.div`
  background: ${props => props.theme.colors.gradient.secondary};
  color: white;
  padding: 4rem 0;
  margin: 4rem 0;
`;

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

const AIIcon = styled.div<{ color: string }>`
  font-size: 3.5rem;
  color: ${props => props.color};
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AIName = styled.h4`
  color: white;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

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
          <HeroTitle>Về dự án</HeroTitle>
          <HeroDescription>
            Website tưởng niệm hành trình Hồ Chí Minh tại Pháp (1911-1923) - 
            Được xây dựng bởi nhóm phát triển với công nghệ hiện đại và sự hỗ trợ của AI
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <Container>
          <SectionTitle>Đội ngũ phát triển</SectionTitle>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamCard key={index}>
                <TeamIcon>
                  <FaUser />
                </TeamIcon>
                <TeamName>{member.name}</TeamName>
                <TeamRole>{member.role}</TeamRole>
                <TeamDescription>{member.description}</TeamDescription>
              </TeamCard>
            ))}
          </TeamGrid>

          <ProjectInfo>
            <ProjectTitle>Về dự án này</ProjectTitle>
            <ProjectText>
              Website "Hồ Chí Minh tại Pháp" là một dự án giáo dục nhằm tưởng niệm và lan tỏa 
              những giá trị lịch sử quan trọng về giai đoạn hình thành tư tưởng cách mạng của 
              Chủ tịch Hồ Chí Minh. Dự án được phát triển với mong muốn mang đến cho người dùng 
              trải nghiệm học tập lịch sử sinh động, tương tác và hiện đại.
            </ProjectText>
          </ProjectInfo>
        </Container>
      </ContentSection>

      <TechSection>
        <Container>
          <SectionTitle style={{ color: '#2C3E50' }}>Công nghệ sử dụng</SectionTitle>
          <TechGrid>
            {technologies.map((tech, index) => (
              <TechCard key={index}>
                <TechIcon color={tech.color}>
                  <tech.icon />
                </TechIcon>
                <TechName>{tech.name}</TechName>
                <TechDescription>{tech.description}</TechDescription>
              </TechCard>
            ))}
          </TechGrid>
        </Container>
      </TechSection>

      <AISection>
        <Container>
          <SectionTitle style={{ color: 'white' }}>Công cụ AI hỗ trợ</SectionTitle>
          <AIGrid>
            {aiTools.map((ai, index) => (
              <AICard key={index}>
                <AIIcon color={ai.color}>
                  <ai.icon />
                </AIIcon>
                <AIName>{ai.name}</AIName>
                <AIDescription>{ai.description}</AIDescription>
              </AICard>
            ))}
          </AIGrid>
        </Container>
      </AISection>
    </AboutContainer>
  );
};

export default About;