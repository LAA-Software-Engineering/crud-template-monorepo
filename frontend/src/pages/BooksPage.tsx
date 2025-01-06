import React, { useState, useEffect } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { BookTable } from '../components/books/BookTable';
import { BookModal } from '../components/books/BookModal';
import { booksAPI } from '../services/api';
import { Book, CreateBook, UpdateBook } from '../types';
import { CircularProgress } from '@mui/material';

export const BooksPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | undefined>();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await booksAPI.getBooks();
      // Check if response.data exists and is an array
      const booksData = response.data && Array.isArray(response.data) 
        ? response.data 
        : [];
      setBooks(booksData);
    } catch (err) {
      console.error('Error fetching books:', err);
      setError('Failed to fetch books');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (data: CreateBook) => {
    try {
      await booksAPI.createBook(data);
      fetchBooks();
      setIsModalOpen(false);
    } catch (err) {
      setError('Failed to create book');
    }
  };

  const handleUpdate = async (data: UpdateBook) => {
    if (!selectedBook) return;
    try {
      await booksAPI.updateBook(selectedBook.id, {
        title: data.title,
        author: data.author,
      });
      fetchBooks();
      setIsModalOpen(false);
      setSelectedBook(undefined);
    } catch (err) {
      setError('Failed to update book');
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await booksAPI.deleteBook(id);
        setBooks(books.filter(book => book.id !== id));
      } catch (err) {
        setError('Failed to delete book');
      }
    }
  };

  const handleSubmit = async (data: CreateBook | UpdateBook) => {
    if (selectedBook) {
      // Ensure data is treated as UpdateBook
      await handleUpdate(data as UpdateBook);
    } else {
      // Ensure data is treated as CreateBook
      await handleCreate(data as CreateBook);
    }
  };
  
  return (
    <div className="container mx-auto p-6">
      <Box className="flex justify-between items-center mb-6">
        <Typography variant="h4" component="h1">
          Books Management
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => {
            setSelectedBook(undefined);
            setIsModalOpen(true);
          }}
        >
          Add Book
        </Button>
      </Box>

      {error && (
        <Typography color="error" className="mb-4">
          {error}
        </Typography>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <CircularProgress />
        </div>
      ) : (
        <BookTable
          books={books}
          onEdit={(book) => {
            setSelectedBook(book);
            setIsModalOpen(true);
          }}
          onDelete={handleDelete}
        />
      )}

      <BookModal
        open={isModalOpen}
        book={selectedBook}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedBook(undefined);
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};