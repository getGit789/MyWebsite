import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const StyledAppBar = styled(AppBar)(({ theme, shrink }) => ({
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
  [theme.breakpoints.down('md')]: {
    top: '15px',
    width: '95%',
    padding: '4px',
    scale: shrink ? 0.9 : 1,
  },
  [theme.breakpoints.down('sm')]: {
    top: '25px',
    width: '98%',
    padding: '2px',
    scale: 1,
  }
}));

const StyledToolbar = styled(Toolbar)(({ theme, shrink }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  minHeight: shrink ? '40px !important' : '48px !important',
  padding: '0 24px !important',
  transition: 'all 0.3s ease-in-out',
  [theme.breakpoints.down('md')]: {
    minHeight: shrink ? '36px !important' : '44px !important',
    padding: '0 12px !important',
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: '40px !important',
    padding: '0 8px !important',
  }
}));

const Logo = styled(Typography)(({ theme, shrink }) => ({
  background: 'linear-gradient(90deg, #9C27B0 0%, #E040FB 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 'bold',
  fontSize: shrink ? '20px' : '24px',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  }
}));

const NavLinks = styled('div')({
  display: 'flex',
  gap: '32px',
  alignItems: 'center',
});

const NavLink = styled(Typography)(({ theme, shrink }) => ({
  cursor: 'pointer',
  fontSize: shrink ? '14px' : '16px',
  color: theme.palette.text.primary,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  }
}));

const ThemeToggle = styled(IconButton)(({ theme, shrink }) => ({
  padding: shrink ? '6px' : '8px',
  marginLeft: '8px',
  color: theme.palette.text.primary,
  transition: 'all 0.3s ease-in-out',
  '& .MuiSvgIcon-root': {
    fontSize: shrink ? '20px' : '24px',
  },
  '&:hover': {
    backgroundColor: theme.palette.mode === 'light'
      ? 'rgba(0, 0, 0, 0.04)'
      : 'rgba(255, 255, 255, 0.08)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '4px',
    '& .MuiSvgIcon-root': {
      fontSize: '20px',
    },
  }
}));

const MobileMenuIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === 'light' 
    ? theme.palette.text.secondary 
    : theme.palette.text.primary,
  [theme.breakpoints.down('sm')]: {
    padding: '4px',
  }
}));

function Header({ toggleColorMode, mode }) {
  const [shrink, setShrink] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
      
      setMobileOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderNavLinks = (isMobileMenu = false) => (
    isMobileMenu ? (
      <List>
        {['home', 'projects', 'skills', 'contact'].map((section) => (
          <ListItem 
            key={section} 
            onClick={() => scrollToSection(section)}
            sx={{ 
              textTransform: 'capitalize',
              '&:hover': { 
                backgroundColor: theme.palette.mode === 'light' 
                  ? 'rgba(0,0,0,0.04)' 
                  : 'rgba(255,255,255,0.08)' 
              }
            }}
          >
            <ListItemText primary={section} />
          </ListItem>
        ))}
        <ListItem>
          <IconButton 
            onClick={toggleColorMode} 
            sx={{ 
              color: theme.palette.text.primary,
              width: '100%',
              justifyContent: 'center' 
            }}
          >
            {mode === 'light' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
          </IconButton>
        </ListItem>
      </List>
    ) : (
      <>
        <NavLink shrink={shrink ? 1 : 0} onClick={() => scrollToSection('projects')}>Projects</NavLink>
        <NavLink shrink={shrink ? 1 : 0} onClick={() => scrollToSection('skills')}>Skills</NavLink>
        <NavLink shrink={shrink ? 1 : 0} onClick={() => scrollToSection('contact')}>Contact</NavLink>
        <ThemeToggle onClick={toggleColorMode} shrink={shrink ? 1 : 0}>
          {mode === 'light' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </ThemeToggle>
      </>
    )
  );

  return (
    <>
      <StyledAppBar elevation={0} shrink={shrink ? 1 : 0}>
        <StyledToolbar shrink={shrink ? 1 : 0}>
          <Logo shrink={shrink ? 1 : 0} onClick={() => scrollToSection('home')}>DK</Logo>
          
          {isMobile ? (
            <MobileMenuIcon 
              aria-label="open drawer"
              edge="start"
              onClick={toggleMobileMenu}
              sx={{ mr: 2 }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </MobileMenuIcon>
          ) : (
            <NavLinks>
              {renderNavLinks()}
            </NavLinks>
          )}
        </StyledToolbar>
      </StyledAppBar>

      {isMobile && (
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={toggleMobileMenu}
          sx={{
            '& .MuiDrawer-paper': {
              width: '70%',
              backgroundColor: theme.palette.background.default,
            },
          }}
        >
          {renderNavLinks(true)}
        </Drawer>
      )}
    </>
  );
}

export default Header;
