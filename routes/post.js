/** @format */

import express from 'express';
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from './../controller/post-controller';

const router = express.Router();

router.post('/posts', createPost);
router.put('/posts/id:', updatePost);
router.delete('/posts/:id', deletePost);
router.get('/posts/:id', getPost);
router.get('/posts', getAllPosts);
export default router;
