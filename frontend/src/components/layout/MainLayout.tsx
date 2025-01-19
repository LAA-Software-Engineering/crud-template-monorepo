// src/components/layout/MainLayout.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      transition: 'background-color 0.3s ease, color 0.3s ease',
    }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Book Management System
          </Typography>
          <ThemeToggle />
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box 
        component="main" 
        sx={{ 
          p: 3,
          backgroundColor: theme.palette.background.default,
          transition: 'background-color 0.3s ease',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
