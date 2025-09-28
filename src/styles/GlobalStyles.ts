import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    color: ${props => props.theme.colors.primary};
  }

  h2 {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    color: ${props => props.theme.colors.secondary};
  }

  h3 {
    font-size: clamp(1.25rem, 2.5vw, 1.75rem);
    color: ${props => props.theme.colors.primary};
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    text-align: justify;
  }

  a {
    color: ${props => props.theme.colors.accent};
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.primary};
      text-decoration: underline;
    }
  }

  ul, ol {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  .text-center {
    text-align: center;
  }

  .fade-in {
    animation: fadeIn 0.6s ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .highlight {
    background: linear-gradient(120deg, ${props => props.theme.colors.accent}40 0%, ${props => props.theme.colors.accent}40 100%);
    background-repeat: no-repeat;
    background-size: 100% 30%;
    background-position: 0 85%;
    padding: 0 4px;
  }

  .quote {
    font-style: italic;
    font-size: 1.2rem;
    color: ${props => props.theme.colors.secondary};
    border-left: 4px solid ${props => props.theme.colors.accent};
    padding-left: 1rem;
    margin: 1.5rem 0;
  }
`;