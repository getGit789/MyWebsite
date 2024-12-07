import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'shrink'
})(({ theme, shrink }) => ({
  background: theme.palette.mode === 'light' 
    ? 'rgba(255, 255, 255, 0.8)'
    : 'rgba(18, 18, 18, 0.8)',
  backdropFilter: 'blur(10px)',
  boxShadow: theme.palette.mode === 'light'
    ? '0 4px 30px rgba(0, 0, 0, 0.1)'
    : '0 4px 30px rgba(0, 0, 0, 0.3)',
  position: 'fixed',
  top: shrink ? '10px' : '20px',
  left: '50%',
  transform: `translateX(-50%) scale(${shrink ? 0.85 : 1})`,
  width: '90%',
  maxWidth: '1200px',
  borderRadius: '100px',
  padding: '8px',
  transition: 'all 0.3s ease-in-out',
}));

const StyledToolbar = styled(Toolbar, {
  shouldForwardProp: (prop) => prop !== 'shrink'
})(({ shrink }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  minHeight: shrink ? '40px !important' : '48px !important',
  padding: '0 24px !important',
  transition: 'all 0.3s ease-in-out',
}));

const Logo = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'shrink'
})(({ theme, shrink }) => ({
  background: 'linear-gradient(90deg, #9C27B0 0%, #E040FB 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 'bold',
  fontSize: shrink ? '20px' : '24px',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
}));

const NavLinks = styled('div')({
  display: 'flex',
  gap: '32px',
  alignItems: 'center',
});

const NavLink = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'shrink'
})(({ theme, shrink }) => ({
  cursor: 'pointer',
  fontSize: shrink ? '14px' : '16px',
  color: theme.palette.mode === 'light' ? theme.palette.text.primary : theme.palette.text.primary,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const ThemeToggle = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'shrink'
})(({ theme, shrink }) => ({
  padding: shrink ? '6px' : '8px',
  marginLeft: '8px',
  color: theme.palette.mode === 'light' ? theme.palette.text.primary : theme.palette.text.primary,
  transition: 'all 0.3s ease-in-out',
  '& .MuiSvgIcon-root': {
    fontSize: shrink ? '20px' : '24px',
  },
  '&:hover': {
    backgroundColor: theme.palette.mode === 'light'
      ? 'rgba(0, 0, 0, 0.04)'
      : 'rgba(255, 255, 255, 0.08)',
  },
}));

function Header({ toggleColorMode, mode }) {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <StyledAppBar elevation={0} shrink={shrink}>
      <StyledToolbar shrink={shrink}>
        <Logo shrink={shrink} onClick={() => scrollToSection('home')}>DK</Logo>
        <NavLinks>
          <NavLink shrink={shrink} onClick={() => scrollToSection('projects')}>Projects</NavLink>
          <NavLink shrink={shrink} onClick={() => scrollToSection('skills')}>Skills</NavLink>
          <NavLink shrink={shrink} onClick={() => scrollToSection('contact')}>Contact</NavLink>
          <ThemeToggle onClick={toggleColorMode} shrink={shrink}>
            {mode === 'light' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
          </ThemeToggle>
        </NavLinks>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;
