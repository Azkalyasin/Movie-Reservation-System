import { Router } from 'express';
import routerAuth from './auth';
import routerMovie from './movie'
import { validJwt } from '../../middlewares/authenticateJWT';
import { isAdmin } from '../../middlewares/authorizeAdmin';

const router = Router();

router.use('/auth', routerAuth);
router.use('/movie',routerMovie)

export default router;
