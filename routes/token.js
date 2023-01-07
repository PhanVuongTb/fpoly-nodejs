/** @format */

import express from 'express';
import {
  authenticateToken,
  createNewToken,
} from '../controller/jwt-controller';

const router = express.Router();

router.post('/token', createNewToken);

export default router;
