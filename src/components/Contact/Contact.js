import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactContainer = styled(Box)({
  padding: '80px 24px',
  maxWidth: '1200px',
  margin: '0 auto',
});

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '40px',
  color: theme.palette.text.primary,
  textAlign: 'center',
}));

const ContactForm = styled(Paper)(({ theme }) => ({
  padding: '40px',
  borderRadius: '24px',
  backgroundColor: theme.palette.mode === 'dark' ? '#1E1E1E' : theme.palette.background.paper,
  maxWidth: '600px',
  margin: '0 auto',
  boxShadow: theme.palette.mode === 'dark' 
    ? '0 8px 24px rgba(0, 0, 0, 0.3)'
    : '0 8px 24px rgba(0, 0, 0, 0.1)',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '24px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '32px',
  justifyContent: 'center',
  marginBottom: '40px',
  flexDirection: 'row',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px'
  }
}));

const InfoItem = styled(Box)(({ theme, $clickable }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: theme.palette.text.secondary,
  cursor: $clickable ? 'pointer' : 'default',
  transition: 'color 0.2s ease-in-out',
  '&:hover': $clickable ? {
    color: theme.palette.primary.main,
  } : {},
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
    fontSize: '24px',
    '&.whatsapp-icon': {
      color: '#25D366',
    }
  },
  '& .MuiTypography-root': {
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      wordBreak: 'break-word'
    }
  },
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'color 0.2s ease-in-out',
    '&:hover': {
      color: theme.palette.primary.main,
    }
  }
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  borderRadius: '12px',
  padding: '12px 24px',
  fontSize: '16px',
  width: '100%',
}));

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  const handleEmailClick = () => {
    const email = 'info@damirkranjcevic.com';
    const subject = 'Portfolio Contact';
    
    // Multiple methods to ensure email link works across different browsers and platforms
    try {
      // Method 1: Direct window location
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    } catch (error) {
      try {
        // Method 2: Create and click a temporary link
        const link = document.createElement('a');
        link.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (secondaryError) {
        // Fallback method: Copy to clipboard and show instructions
        navigator.clipboard.writeText(email).then(() => {
          alert(`Email address ${email} has been copied to clipboard. Please paste it into your email client.`);
        }).catch(() => {
          prompt('Unable to automatically open email. Please copy this email address:', email);
        });
      }
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/420603183777', '_blank');
  };

  return (
    <ContactContainer>
      <SectionTitle>Get in Touch</SectionTitle>
      <ContactInfo>
        <InfoItem onClick={handleEmailClick} $clickable>
          <EmailIcon />
          <Typography>info@damirkranjcevic.com</Typography>
        </InfoItem>
        <InfoItem onClick={handleWhatsAppClick} $clickable>
          <WhatsAppIcon className="whatsapp-icon" />
          <Typography>+420603183777</Typography>
        </InfoItem>
      </ContactInfo>
      <ContactForm elevation={0}>
        <form onSubmit={handleSubmit}>
          <StyledTextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
          />
          <StyledTextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
          />
          <StyledTextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            variant="outlined"
          />
          <SubmitButton
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
          >
            Send Message
          </SubmitButton>
        </form>
      </ContactForm>
    </ContactContainer>
  );
}

export default Contact;
