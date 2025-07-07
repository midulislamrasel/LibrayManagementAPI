import express from 'express';
import connectDB from './config/db';
import bookRoutes from './routes/bookRoutes';
import userRoutes from './routes/userRoutes' 
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use('/books', bookRoutes );
app.use('/users', userRoutes )

connectDB();


app.listen(PORT, () => {
  console.log(`\x1b[42m\x1b[30m Server is running on http://localhost:${PORT} \x1b[0m`);

});
