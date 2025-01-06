// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Paper, Typography, CircularProgress, Alert } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { authAPI } from '../services/api';
import { User } from '../types';

export const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm<User>();

  const onSubmit = async (data: User) => {
    setIsLoading(true);
    setError(null);
    try {
      const token = await authAPI.login(data);
      localStorage.setItem('token', token);
      navigate('/books');
    } catch (err) {
      setError('Invalid username or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Paper className="max-w-md w-full p-8 space-y-6">
        <div className="text-center">
          <Typography component="h1" variant="h5" className="mb-6">
            Sign in to your account
          </Typography>
        </div>

        {error && (
          <Alert severity="error" className="mb-4">
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Controller
            name="username"
            control={control}
            defaultValue=""
            rules={{ 
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username must be at least 3 characters'
              }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Username"
                variant="outlined"
                fullWidth
                error={!!errors.username}
                helperText={errors.username?.message}
                disabled={isLoading}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ 
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                error={!!errors.password}
                helperText={errors.password?.message}
                disabled={isLoading}
              />
            )}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isLoading}
            className="relative"
          >
            {isLoading ? (
              <CircularProgress size={24} className="absolute" />
            ) : (
              'Sign In'
            )}
          </Button>
        </form>

        <div className="text-center">
          <Typography variant="body2" color="textSecondary">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:text-blue-800">
              Register here
            </Link>
          </Typography>
        </div>
      </Paper>
    </div>
  );
};