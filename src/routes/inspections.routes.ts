import { Router } from 'express';
import InspectionsController from 'controllers/inspections/InspectionsController';

const router = Router();
const inspectionsController = new InspectionsController();

router.post('/', inspectionsController.create);

export default router;
