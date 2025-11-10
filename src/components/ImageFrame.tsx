import React from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

const ImageContainer = styled(Box)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  background: #f5f5f5;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  min-height: 250px;
  background: linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%);
`;

const ImageCaption = styled(Typography)`
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  font-size: 0.9rem;
  text-align: center;
  font-style: italic;
  border-top: 2px solid ${props => props.theme.colors?.accent || '#ff9800'};
`;

const PlaceholderOverlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(211, 47, 47, 0.1) 0%, rgba(198, 40, 40, 0.1) 100%);
  
  &::before {
    content: '📷';
    font-size: 4rem;
    opacity: 0.3;
  }
`;

interface ImageFrameProps {
  src: string;
  alt: string;
  caption?: string;
  height?: string;
}

const ImageFrame: React.FC<ImageFrameProps> = ({ src, alt, caption, height = 'auto' }) => {
  return (
    <ImageContainer>
      <Box sx={{ position: 'relative', height: height }}>
        <StyledImage src={src} alt={alt} />
        <PlaceholderOverlay />
      </Box>
      {caption && <ImageCaption variant="body2">{caption}</ImageCaption>}
    </ImageContainer>
  );
};

export default ImageFrame;
