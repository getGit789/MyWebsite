import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

const SkillsContainer = styled(Box)({
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

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: '32px',
  height: '100%',
  borderRadius: '24px',
  backgroundColor: theme.palette.mode === 'dark' ? '#1E1E1E' : theme.palette.background.paper,
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.palette.mode === 'dark' 
      ? '0 8px 24px rgba(0, 0, 0, 0.3)'
      : '0 8px 24px rgba(0, 0, 0, 0.1)',
  },
}));

const CategoryTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '24px',
  '& .MuiSvgIcon-root': {
    fontSize: '28px',
  },
  '& .icon-frontend': {
    color: '#9C27B0',
  },
  '& .icon-backend': {
    color: '#e12363',
  },
  '& .icon-database': {
    color: '#2196F3',
  },
  '& .icon-devops': {
    color: '#FF9800',
  },
  '& .MuiTypography-root': {
    fontSize: '24px',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
}));

const SkillList = styled(Box)(({ theme }) => ({
  '& .MuiTypography-root': {
    color: theme.palette.text.secondary,
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    '&::before': {
      content: '"•"',
      color: theme.palette.primary.main,
      marginRight: '8px',
      fontSize: '20px',
    },
  },
}));

const skillsData = {
  frontend: {
    icon: <CodeIcon />,
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Redux'],
  },
  backend: {
    icon: <StorageIcon />,
    title: 'Backend',
    skills: ['Node.js', 'Express', 'NestJS', 'Python'],
  },
  database: {
    icon: <CloudIcon />,
    title: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL'],
  },
  devops: {
    icon: <DeveloperModeIcon />,
    title: 'DevOps',
    skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'],
  },
};

function Skills() {
  return (
    <SkillsContainer>
      <SectionTitle>Technical Skills</SectionTitle>
      <Grid container spacing={4}>
        {Object.entries(skillsData).map(([key, category]) => (
          <Grid item xs={12} sm={6} md={3} key={key}>
            <SkillCard elevation={0}>
              <CategoryTitle>
                <Box className={`icon-${key}`}>
                  {category.icon}
                </Box>
                <Typography>{category.title}</Typography>
              </CategoryTitle>
              <SkillList>
                {category.skills.map((skill, index) => (
                  <Typography key={index}>{skill}</Typography>
                ))}
              </SkillList>
            </SkillCard>
          </Grid>
        ))}
      </Grid>
    </SkillsContainer>
  );
}

export default Skills;
