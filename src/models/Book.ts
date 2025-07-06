import mongoose from 'mongoose';


// comment 
const commentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});


//book
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  publishedYear: Number,
  comments: [commentSchema]
});



const Book = mongoose.model('Book', bookSchema);
export default Book;
