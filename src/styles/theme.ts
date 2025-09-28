export const theme = {
  colors: {
    primary: '#B8860B', // Dark goldenrod - màu vàng đậm lịch sử
    secondary: '#8B4513', // Saddle brown - màu nâu cổ điển
    accent: '#DC143C', // Crimson - màu đỏ tươi
    background: '#FEFEFE', // Off white
    surface: '#F8F9FA', // Light gray
    text: '#2C3E50', // Dark blue gray
    textLight: '#6C757D', // Medium gray
    border: '#DEE2E6', // Light border
    shadow: 'rgba(0, 0, 0, 0.1)',
    gradient: {
      primary: 'linear-gradient(135deg, #B8860B 0%, #DAA520 100%)',
      secondary: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
      hero: 'linear-gradient(135deg, #B8860B20 0%, #8B451320 100%)'
    }
  },
  fonts: {
    primary: "'Inter', sans-serif",
    heading: "'Playfair Display', serif"
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem'
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '50%'
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.15)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.2)',
    xl: '0 16px 32px rgba(0, 0, 0, 0.25)'
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px'
  }
};

export type Theme = typeof theme;