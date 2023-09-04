import { Router } from 'express';
const router: Router = Router();
import { signin, signup, profile } from '../controllers/auth.controller';
import {tokenValidation } from '../lib/verifyToken';

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', tokenValidation ,profile);


export default router;