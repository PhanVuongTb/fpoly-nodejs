/** @format */

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

//components
import Connection from './database/db';
import postRoute from './routes/post';
import categoryRoute from './routes/category';
import authRoute from './routes/user';
import commentRoute from './routes/comment';
import imageRoute from './routes/image';
import tokenRoute from './routes/token';

const app = express();
dotenv.config();

// middleware
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(express.json());

// // connnect database
Connection();
// mongoose
//   .set('strictQuery', false)
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('Kết nối db thành công'))
//   .catch((error) => console.log(error));

//Router
app.get('/', (req, res) => {
  res.send('Backend is Running..');
});
app.use('/api', postRoute);
app.use('/api', categoryRoute);
app.use('/api', authRoute);
app.use('/api', commentRoute);
app.use('/api', imageRoute);
app.use('/api', tokenRoute);

// connection
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running port:  http://localhost:${PORT}`);
});
