import { Router } from 'express';
import BookController from './BookController';

const router = Router();
router.get('/', BookController.findAll);
router.get('/:id', BookController.findOne);
router.post('/', BookController.create);
router.put('/:id', BookController.update);
router.delete('/:id', BookController.remove);

export default router;
