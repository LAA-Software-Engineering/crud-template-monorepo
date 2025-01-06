// src/types/index.ts
export interface Book {
    id: number;
    title: string;
    author: string;
    created_at: string;
    updated_at: string;
  };
  
  export interface CreateBook {
    title: string;
    author: string;
  };
  
  export interface UpdateBook {
    title?: string;
    author?: string;
  };
  
  export interface User {
    username: string;
    password: string;
  };
  