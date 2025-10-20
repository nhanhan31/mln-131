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
          "Làm theo năng lực, hưởng theo lao động - Bước đệm tất yếu để tiến tới xã hội cộng sản"
        </FooterText>
        <FooterDivider />
        <Copyright>
          © {currentYear} - Nguyên tắc phân phối trong CNXH và CNCS
        </Copyright>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;