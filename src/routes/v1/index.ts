import { Router } from 'express';
import routerAuth from './auth';
import routerMovie from './movie'


const router = Router();

router.use('/auth', routerAuth);
router.use('/movie',routerMovie)

export default router;
