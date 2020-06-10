import { Router } from 'express';
import InspectionsController from 'controllers/inspections/InspectionsController';

const router = Router();
const inspectionsController = new InspectionsController();

router.get('/', inspectionsController.index);
router.get('/:id', inspectionsController.find);
router.post('/', inspectionsController.create);
router.put('/:id', inspectionsController.update);
router.delete('/:id', inspectionsController.delete);

export default router;
