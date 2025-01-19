import React from 'react';
import { Button } from '@mui/material';
import { useThemeToggle } from '../themes/ToggleThemeContext';

const ThemeToggle: React.FC = () => {
  const { toggleTheme, isDarkMode } = useThemeToggle();

  return (
    <Button 
      onClick={toggleTheme}
      variant="outlined"
      color="inherit"
      sx={{
        marginRight: 2,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        '&:hover': {
          borderColor: 'rgba(255, 255, 255, 0.8)',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
      }}
    >
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </Button>
  );
};

export default ThemeToggle;