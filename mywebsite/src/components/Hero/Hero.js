import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Language';

const HeroContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '160px 24px 120px',
  maxWidth: '1200px',
  margin: '0 auto',
});

const Name = styled(Typography)({
  background: 'linear-gradient(90deg, #9C27B0 0%, #E040FB 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontSize: '72px',
  fontWeight: 'bold',
  marginBottom: '16px',
  lineHeight: 1.1,
});

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '32px',
  color: theme.palette.text.primary,
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  color: theme.palette.text.secondary,
  maxWidth: '800px',
  marginBottom: '48px',
  lineHeight: 1.6,
}));

const Skills = styled(Box)({
  display: 'flex',
  gap: '64px',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginTop: '16px',
});

const SkillItem = styled(Box)(({ color }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  '& .MuiSvgIcon-root': {
    fontSize: '32px',
    color: color,
  },
  '& .MuiTypography-root': {
    color: color,
    fontSize: '24px',
    fontWeight: 600,
  },
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

function Hero() {
  return (
    <HeroContainer>
      <Name variant="h1">Damir Kranjcevic</Name>
      <Title variant="h2">Full Stack Developer</Title>
      <Description>
        Building modern, scalable web applications with cutting-edge technologies.
        <br />
        Passionate about creating exceptional user experiences and robust backend solutions.
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
