import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterContainer = styled(Box)(({ theme }) => ({
  padding: '24px',
  textAlign: 'center',
  backgroundColor: theme.palette.mode === 'dark' ? '#1E1E1E' : theme.palette.background.paper,
  borderRadius: '24px 24px 0 0',
  marginTop: '80px',
}));

const SocialLinks = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
  marginBottom: '16px',
});

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateY(-2px)',
  },
}));

const Copyright = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '14px',
}));

function Footer() {
  return (
    <FooterContainer>
      <SocialLinks>
        <StyledIconButton href="https://github.com/yourusername" target="_blank">
          <GitHubIcon />
        </StyledIconButton>
        <StyledIconButton href="https://linkedin.com/in/yourusername" target="_blank">
          <LinkedInIcon />
        </StyledIconButton>
        <StyledIconButton href="https://twitter.com/yourusername" target="_blank">
          <TwitterIcon />
        </StyledIconButton>
      </SocialLinks>
      <Copyright>
        © 2024 Damir Kranjevic. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
