import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadows.md};
  z-index: 1000;
  backdrop-filter: blur(10px);
  background: rgba(254, 254, 254, 0.95);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuItems = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${props => props.theme.colors.background};
    box-shadow: ${props => props.theme.shadows.md};
    flex-direction: column;
    padding: 2rem;
    transform: translateY(${props => props.isOpen ? '0' : '-100%'});
    opacity: ${props => props.isOpen ? '1' : '0'};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
  }
`;

const MenuItem = styled(Link)<{ isActive: boolean }>`
  color: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.text};
  text-decoration: none;
  font-weight: ${props => props.isActive ? '600' : '400'};
  padding: 0.5rem 0;
  position: relative;
  transition: all 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: ${props => props.isActive ? '100%' : '0'};
    height: 2px;
    background: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
    
    &:after {
      width: 100%;
    }
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Giới thiệu' },
    { path: '/historical-context', label: 'Hoàn cảnh lịch sử' },
    { path: '/journey', label: 'Hành trình (1911-1917)' },
    { path: '/activities', label: 'Hoạt động (1917-1923)' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderWrapper>
      <Nav>
        <Logo to="/" onClick={closeMenu}>
          Hồ Chí Minh tại Pháp
        </Logo>
        
        <MenuToggle onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuToggle>

        <MenuItems isOpen={isMenuOpen}>
          {menuItems.map((item) => (
            <MenuItem
              key={item.path}
              to={item.path}
              isActive={location.pathname === item.path}
              onClick={closeMenu}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuItems>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;