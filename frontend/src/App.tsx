// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { BooksPage } from './pages/BooksPage';
import { PrivateRoute } from './utils/PrivateRoute';
import { AuthLayout } from './components/layout/AuthLayout';
import { MainLayout } from './components/layout/MainLayout';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <AuthLayout>
                <LoginPage />
              </AuthLayout>
            }
          />
          <Route
            path="/register"
            element={
              <AuthLayout>
                <RegisterPage />
              </AuthLayout>
            }
          />
          <Route
            path="/books"
            element={
              <PrivateRoute>
                <MainLayout>
                  <BooksPage />
                </MainLayout>
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Navigate to="/books" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
