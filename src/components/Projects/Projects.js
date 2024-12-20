import React from 'react';
import { Box, Typography, Card, CardContent, Button, Grid, Chip, styled } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectsContainer = styled(Box)({
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

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.mode === 'dark' ? '#1E1E1E' : theme.palette.background.paper,
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  borderRadius: '24px',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.palette.mode === 'dark' 
      ? '0 8px 24px rgba(0, 0, 0, 0.3)'
      : '0 8px 24px rgba(0, 0, 0, 0.1)',
  },
}));

const ProjectImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '200px', 
  objectFit: 'cover',
  objectPosition: 'center top',
  display: 'block',
  backgroundColor: theme.palette.mode === 'dark' ? '#1E1E1E' : '#f5f5f5',
}));

const ProjectContent = styled(CardContent)({
  flexGrow: 1,
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '16px',
  color: theme.palette.text.primary,
  height: '36px', 
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  color: theme.palette.text.secondary,
  marginBottom: '24px',
  height: '72px', 
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}));

const TechStack = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginBottom: '24px',
});

const TechChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(156, 39, 176, 0.15)' : 'rgba(156, 39, 176, 0.1)',
  color: theme.palette.mode === 'dark' ? '#E040FB' : '#9C27B0',
  borderRadius: '16px',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(156, 39, 176, 0.25)' : 'rgba(156, 39, 176, 0.2)',
  },
}));

const ButtonContainer = styled(Box)({
  display: 'flex',
  gap: '16px',
  justifyContent: 'center',
  marginTop: 'auto',
  paddingTop: '24px',
});

const projects = [
  {
    title: 'Real-time Chat Application',
    description: 'A modern chat application with real-time messaging, user authentication, and message history.',
    tech: ['Node.js', 'Socket.io', 'React', 'MongoDB'],
    demo: 'https://realtimechatapp-57e81.web.app/',
    code: 'https://github.com/yourusername/chat-app',
    image: process.env.PUBLIC_URL + '/realtimechat.webp'
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Admin dashboard for managing products, orders, and customer data with analytics.',
    tech: ['TypeScript', 'React', 'Redux', 'Python'],
    demo: 'https://dashboard-demo.com',
    code: 'https://github.com/yourusername/dashboard',
    image: process.env.PUBLIC_URL + '/ecommercedashboard.jpg'
  },
  {
    title: 'Weather Application',
    description: 'Weather forecast app with location search and detailed weather information.',
    tech: ['JavaScript', 'OpenWeather API', 'React'],
    demo: 'https://getgit789.github.io/weather/',
    code: 'https://github.com/yourusername/weather-app',
    image: process.env.PUBLIC_URL + '/wheatherapp.png'
  },
  {
    title: 'Todo Application',
    description: 'A full-featured task management system built with the MERN stack, including user authentication and real-time updates.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    demo: 'https://task-manager-demo.com',
    code: 'https://github.com/yourusername/task-manager',
    image: process.env.PUBLIC_URL + '/todoapp.jpg'
  },
  {
    title: 'Portfolio Website Builder',
    description: 'A NextJs based portfolio website builder with customizable themes and components.',
    tech: ['React', 'NextJS', 'TypeScript'],
    demo: 'https://portfolio-builder-demo.com',
    code: 'https://github.com/yourusername/portfolio-builder',
    image: process.env.PUBLIC_URL + '/websitebuilder.PNG'
  }
];

function Projects() {
  return (
    <ProjectsContainer>
      <SectionTitle>Featured Projects</SectionTitle>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <ProjectCard elevation={0}>
              <ProjectImage 
                src={project.image} 
                alt={project.title}
              />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, i) => (
                    <TechChip key={i} label={tech} />
                  ))}
                </TechStack>
                <ButtonContainer>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<GitHubIcon />}
                    href={project.code}
                    target="_blank"
                  >
                    Code
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<LaunchIcon />}
                    component="a"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </Button>
                </ButtonContainer>
              </ProjectContent>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </ProjectsContainer>
  );
}

export default Projects;
