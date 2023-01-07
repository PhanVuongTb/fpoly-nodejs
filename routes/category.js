/** @format */

import express from 'express';
import {
  createCategory,
  deleteCategory,
  listCategory,
  listCategoryDetail,
  updateCategory,
} from './../controller/category-controller';

const router = express.Router();

router.post('/categorys', createCategory);
router.put('/categorys/id:', updateCategory);
router.delete('/categorys/:id', deleteCategory);
router.get('/categorys/:id', listCategoryDetail);
router.get('/categorys', listCategory);

export default router;
