/** @format */

import express from 'express';
import {
  getComments,
  newComment,
  deleteComment,
} from './../controller/comment-controller';

const router = express.Router();

router.post('/categorys', newComment);
router.delete('/categorys/:id', deleteComment);
router.get('/categorys', getComments);

export default router;
