import { Router } from 'express';
import BugsController from '../controllers/bugs/BugsController';

const router = Router();
const bugsController = new BugsController();

router.get('/', bugsController.index);
router.get('/:id', bugsController.find);
router.post('/', bugsController.create);
router.put('/:id', bugsController.update);
router.delete('/:id', bugsController.delete);

export default router;
