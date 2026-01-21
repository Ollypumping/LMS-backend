import { Router } from 'express';
import {
  createBook,
  getAllBooks,
  getBookById,
  searchBooks,
  updateBook,
  deleteBook,
} from '../../controllers/book-management/controller.js';
import { PERMISSIONS } from '../../constants/roles.js';
import { authorize } from '../../middleware/auth.js';

const router = Router();

// Book Management Routes
router.post('/', authorize(PERMISSIONS.ADMIN_ONLY), createBook);
router.patch('/:id', authorize(PERMISSIONS.ADMIN_ONLY), updateBook);
router.delete('/:id', authorize(PERMISSIONS.ADMIN_ONLY), deleteBook);

// Public Access Routes
router.get('/', authorize(PERMISSIONS.EVERYONE), getAllBooks);
router.get('/search', authorize(PERMISSIONS.EVERYONE), searchBooks);
router.get('/:id', authorize(PERMISSIONS.EVERYONE), getBookById);

export default router;