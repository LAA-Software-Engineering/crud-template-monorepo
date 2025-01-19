// themes.ts
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
      background: {
        default: '#ffffff',
        paper: '#f5f5f5',
      },
      text: {
        primary: '#000000',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#1976d2',
            color: '#ffffff',
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: '#ffffff',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          },
        },
      },
    },
  });
  
  export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
      text: {
        primary: '#ffffff',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#1976d2',
            color: '#ffffff',
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: '#121212',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          },
        },
      },
    },
  });