import express from 'express';
const router = express.Router();
import registerController from '../controllers/registerController';

router.post('/register', registerController.register);
// router.get('/me', auth, userController.me);

export default router;