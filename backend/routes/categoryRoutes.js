import express from 'express';
const router = express.Router();
import {
  createCategory,
  updateCategory,
  removeCategory,
  listCategory,
  readCategory,
} from '../controllers/categoryController.js';

import {
  authenticateUser,
  authorizeAdmin,
} from '../middlewares/authMiddleware.js';

router.route('/').post(authenticateUser, authorizeAdmin, createCategory);
router
  .route('/:categoryId')
  .put(authenticateUser, authorizeAdmin, updateCategory);
router
  .route('/:categoryId')
  .delete(authenticateUser, authorizeAdmin, removeCategory);

router.route('/categories').get(listCategory);
router.route('/:id').get(readCategory);

export default router;
