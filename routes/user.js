/** @format */

import express from 'express';

import {
  loginUser,
  logoutUser,
  singupUser,
} from '../controller/user-controller';

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', singupUser);
router.post('/logout', logoutUser);

export default router;
