// src/services/api.ts
import axios from './axios';
import axiosInstance from './axios';
import { Book, CreateBook, UpdateBook, User } from '../types';

interface ApiResponse<T> {
  data: T;
  message?: string;
}

export const authAPI = {
    async login(credentials: User): Promise<string> {
      try {
        const response = await axiosInstance.post('/login', credentials);
        return response.data;
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    },
  
    async register(credentials: User): Promise<void> {
      try {
        const response = await axiosInstance.post('/register', credentials);
        return response.data;
      } catch (error) {
        console.error('Registration error:', error);
        throw error;
      }
    }
  };

  export const booksAPI = {
    async getBooks(): Promise<ApiResponse<Book[]>> {
      try {
        const response = await axiosInstance.get('/books');
        return response.data;
      } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
      }
    },
  
    async createBook(book: CreateBook): Promise<ApiResponse<Book>> {
      try {
        const response = await axiosInstance.post('/books', book);
        return response.data;
      } catch (error) {
        console.error('Error creating book:', error);
        throw error;
      }
    },
  
    async updateBook(id: number, book: UpdateBook): Promise<ApiResponse<Book>> {
      try {
        const response = await axiosInstance.put(`/books/${id}`, book);
        return response.data;
      } catch (error) {
        console.error('Error updating book:', error);
        throw error;
      }
    },
  
    async deleteBook(id: number): Promise<void> {
      try {
        await axiosInstance.delete(`/books/${id}`);
      } catch (error) {
        console.error('Error deleting book:', error);
        throw error;
      }
    }
  };