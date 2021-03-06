import { Router } from 'express';
import usersRoutes from './users.routes';
import bugsRoutes from './bugs.routes';
import inspectionsRoutes from './inspections.routes';
import machinesRoutes from './machines.routes';
import sessionsRoutes from './sessions.routes';

import ensuredAuthenticated from '../middlewares/ensuredAuthenticated';

const router = Router();

router.use('/sessions', sessionsRoutes);
router.use(ensuredAuthenticated);
router.use('/users', usersRoutes);
router.use('/bugs', bugsRoutes);
router.use('/inspections', inspectionsRoutes);
router.use('/machines', machinesRoutes);

export default router;
