import { Router } from 'express';
import { login } from '../../controller/v1/auth/login';
import { register } from '../../controller/v1/auth/register';

const router = Router();

router.post('/register', register);
router.post('/login', login);

export default router;
