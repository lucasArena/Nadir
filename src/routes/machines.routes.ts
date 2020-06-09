import { Router } from 'express';
import MachinesController from 'controllers/machines/MachinesController';

const router = Router();
const machineController = new MachinesController();

router.get('/', machineController.index);
router.get('/:id', machineController.find);
router.post('/', machineController.create);
router.delete('/:id', machineController.delete);

export default router;
