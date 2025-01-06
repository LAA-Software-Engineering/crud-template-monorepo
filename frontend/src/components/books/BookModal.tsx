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
  CircularProgress,
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

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (open) {
      reset({
        title: book?.title || '',
        author: book?.author || '',
      });
      setSubmitError(null);
    }
  }, [open, book, reset]);

  const handleFormSubmit = handleSubmit(async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await onSubmit(data);
      onClose(); // Close modal on successful submission
    } catch (err) {
      setSubmitError('Failed to submit book. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
            {submitError && (
              <p style={{ color: 'red', marginTop: '8px' }}>{submitError}</p>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? <CircularProgress size={24} /> : book ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};