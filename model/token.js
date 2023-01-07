/** @format */

import mongoose from 'mongoose';

const TokenSchema = mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Token', TokenSchema);
