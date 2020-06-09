import { Router } from 'express';
import UsersController from '../controllers/users/UsersController';

const router = Router();
const usersController = new UsersController();

router.get('/', usersController.all);
router.get('/:id', usersController.find);
router.post('/', usersController.create);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.delete);

export default router;
