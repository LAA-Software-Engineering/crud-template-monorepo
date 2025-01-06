// src/components/auth/LoginForm.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { User } from '../../types';

interface LoginFormProps {
  onSubmit: (data: User) => Promise<void>;
  error?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, error }) => {
  const { control, handleSubmit } = useForm<User>();

  return (
    <Paper className="p-8 w-full max-w-md">
      <Typography variant="h5" className="mb-4 text-center">
        Sign In
      </Typography>
      
      {error && (
        <Typography color="error" className="mb-4">
          {error}
        </Typography>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Username"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type="password"
              label="Password"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="mt-4"
        >
          Sign In
        </Button>

        <Box className="text-center mt-4">
          <Link to="/register" className="text-blue-600 hover:underline">
            Don't have an account? Register
          </Link>
        </Box>
      </form>
    </Paper>
  );
};
