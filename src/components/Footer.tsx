import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: ${props => props.theme.colors.gradient.secondary};
  color: white;
  padding: 2rem 0;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
  opacity: 0.9;
`;

const FooterDivider = styled.div`
  width: 100px;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  margin: 1rem auto;
`;

const Copyright = styled.p`
  margin: 1rem 0 0 0;
  font-size: 0.9rem;
  opacity: 0.7;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterText>
          "Con đường cách mạng của dân tộc ta phải đi qua con đường giải phóng dân tộc, 
          gắn liền với con đường giải phóng giai cấp"
        </FooterText>
        <FooterDivider />
        <Copyright>
          © {currentYear} - Hành trình Hồ Chí Minh tại Pháp (1911-1923)
        </Copyright>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;