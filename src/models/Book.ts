import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});






const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  publishedYear: Number,
  comments: [commentSchema]
});

const Book = mongoose.model('Book', bookSchema);
export default Book;
