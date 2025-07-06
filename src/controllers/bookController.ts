import { Request, Response } from 'express';
import Book from '../models/Book';

// GET all books
export const getBooks = async (req: Request, res: Response) => {
  const books = await Book.find();
  res.json(books);
};

// GET single book by ID
export const getBookById = async (req: Request, res: Response) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
};

// CREATE a new book
export const createBook = async (req: Request, res: Response) => {
  const { title, author, publishedYear } = req.body;
  const newBook = new Book({ title, author, publishedYear });
  await newBook.save();
  res.status(201).json(newBook);
};

// UPDATE a book
export const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = await Book.findByIdAndUpdate(id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'Book not found' });
  res.json(updated);
};

// DELETE a book
export const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await Book.findByIdAndDelete(id);
  if (!deleted) return res.status(404).json({ message: 'Book not found' });
  res.json({ message: 'Book deleted' });
};

// POST comment to a book
export const addComment = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { user, text } = req.body;

  const book = await Book.findById(id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  book.comments.push({ user, text });
  await book.save();

  res.status(201).json({ message: 'Comment added', comments: book.comments });
};

//getBookComments 
export const getBookComments = async (req: Request, res: Response) => {
  const { id } = req.params;

  const book = await Book.findById(id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.json({
    totalComments: book.comments.length,
    comments: book.comments
  });
};
