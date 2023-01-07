/** @format */

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection = async () => {
  mongoose.set('strictQuery', true);
  try {
    const res = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
    // .then(() =>
    //   console.log('Kết nối db thành công - Database connected successfully')
    // );
    if (res) {
      console.log('Kết nối db thành công - Database connected successfully');
    }
  } catch (error) {
    console.log('Error while connecting to the database ', error);
  }
};

export default Connection;
