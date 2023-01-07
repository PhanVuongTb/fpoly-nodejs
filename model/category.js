/** @format */

import mongoose from 'mongoose';

const CategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Category', CategorySchema);
