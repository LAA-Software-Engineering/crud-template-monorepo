// src/components/books/BookModal.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';
import { Book, CreateBook, UpdateBook } from '../../types';

interface BookModalProps {
  open: boolean;
  book?: Book;
  onClose: () => void;
  onSubmit: (data: CreateBook | UpdateBook) => Promise<void>;
}

export const BookModal: React.FC<BookModalProps> = ({
  open,
  book,
  onClose,
  onSubmit,
}) => {
  const { control, handleSubmit, reset } = useForm<CreateBook>({
    defaultValues: {
      title: book?.title || '',
      author: book?.author || '',
    },
  });

  React.useEffect(() => {
    if (open) {
      reset({
        title: book?.title || '',
        author: book?.author || '',
      });
    }
  }, [open, book, reset]);

  const handleFormSubmit = handleSubmit((data) => {
    const submitData: CreateBook = {
      title: data.title,
      author: data.author,
    };
    onSubmit(submitData);
  });

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{book ? 'Edit Book' : 'Add New Book'}</DialogTitle>
      <form onSubmit={handleFormSubmit}>
        <DialogContent>
          <div className="space-y-4">
            <Controller
              name="title"
              control={control}
              rules={{ required: 'Title is required' }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Title"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="author"
              control={control}
              rules={{ required: 'Author is required' }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Author"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            {book ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
