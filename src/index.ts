import express from 'express';
import connectDB from './config/db';
import bookRoutes from './routes/bookRoutes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use('/api/books', bookRoutes );

connectDB();


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
