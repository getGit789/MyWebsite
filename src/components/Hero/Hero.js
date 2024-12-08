import React from 'react';
import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Language';

const HeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '160px 24px 120px',
  maxWidth: '1200px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    padding: '120px 16px 80px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '140px 12px 60px',
  },
}));

const Name = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(90deg, #9C27B0 0%, #E040FB 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontSize: '72px',
  fontWeight: 'bold',
  marginBottom: '16px',
  lineHeight: 1.1,
  [theme.breakpoints.down('md')]: {
    fontSize: '48px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '36px',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '32px',
  color: theme.palette.text.primary,
  [theme.breakpoints.down('md')]: {
    fontSize: '28px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  color: theme.palette.text.secondary,
  maxWidth: '800px',
  marginBottom: '48px',
  lineHeight: 1.6,
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    marginBottom: '32px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    marginBottom: '24px',
  },
}));

const Skills = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '64px',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginTop: '16px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '24px',
  },
}));

const SkillItem = styled(Box)(({ theme, color }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  '& .MuiSvgIcon-root': {
    fontSize: '32px',
    color: color,
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
  },
  '& .MuiTypography-root': {
    color: color,
    fontSize: '24px',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <HeroContainer>
      <Name variant="h1">Damir Kranjcevic</Name>
      <Title variant="h2">Full Stack Developer</Title>
      <Description>
        {isMobile 
          ? "Creating modern web applications with cutting-edge technologies." 
          : "Building modern, scalable web applications with cutting-edge technologies. Passionate about creating exceptional user experiences and robust backend solutions."}
      </Description>
      <Skills>
        <SkillItem color="#9C27B0">
          <CodeIcon />
          <Typography>Frontend</Typography>
        </SkillItem>
        <SkillItem color="#E91E63">
          <StorageIcon />
          <Typography>Backend</Typography>
        </SkillItem>
        <SkillItem color="#2196F3">
          <LanguageIcon />
          <Typography>Web</Typography>
        </SkillItem>
      </Skills>
    </HeroContainer>
  );
}

export default Hero;
