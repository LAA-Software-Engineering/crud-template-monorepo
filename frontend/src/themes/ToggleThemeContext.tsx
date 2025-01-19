// src/themes/ToggleThemeContext.tsx
import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './themes';

interface ThemeContextType {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const ThemeToggleContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  isDarkMode: false,
});

export const useThemeToggle = () => useContext(ThemeToggleContext);

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const theme = useMemo(() => 
    isDarkMode ? darkTheme : lightTheme,
    [isDarkMode]
  );

  const contextValue = useMemo(() => ({
    toggleTheme,
    isDarkMode,
  }), [isDarkMode]);

  return (
    <ThemeToggleContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};