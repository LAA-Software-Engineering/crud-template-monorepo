// src/services/axios.ts
import axios, { InternalAxiosRequestConfig } from 'axios';

const API_BASE_URL = 'http://localhost:8001/api/v1';
const API_KEY = 'cJGZ8L1sDcPezjOy1zacPJZxzZxrPObm2Ggs1U0V+fE=INSECURE';

// Create axios instance with minimal configuration
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Set headers for every request
    config.headers.set('Content-Type', 'application/json');
    config.headers.set('X-API-Key', API_KEY);

    // Add Authorization header only if token exists
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('Request failed:', {
      url: error.config?.url,
      method: error.config?.method,
      headers: error.config?.headers,
      status: error.response?.status,
      data: error.response?.data
    });
    return Promise.reject(error);
  }
);

export default axiosInstance;