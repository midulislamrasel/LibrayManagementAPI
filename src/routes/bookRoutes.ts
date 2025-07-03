import express from 'express';
import {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
  getBookById,
} from '../controllers/bookController';

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;

