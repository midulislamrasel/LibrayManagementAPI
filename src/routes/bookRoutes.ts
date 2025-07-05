import express from 'express';
import {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
  getBookById,
} from '../controllers/bookController';
import { isAdmin } from '../middleware/isAdmin';

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBookById);

// Only admins can do the following:
router.post('/', isAdmin, createBook);
router.put('/:id', isAdmin, updateBook);
router.delete('/:id', isAdmin, deleteBook);

export default router;

