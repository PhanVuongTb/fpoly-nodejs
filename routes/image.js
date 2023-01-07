/** @format */

import express from 'express';

import { uploadImage, getImage } from '../controller/image-controller';
import upload from '../utils/upload';

const router = express.Router();

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

export default router;
