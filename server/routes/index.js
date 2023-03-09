import express from 'express';
const router = express.Router();
import { registerController, loginController, userController, refreshController } from '../controllers';
import auth from '../middlewares/auth';
import admin from '../middlewares/admin';


router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/me', auth, userController.me);
router.post('/refresh', refreshController.refresh);
router.post('/logout', auth, loginController.logout);

router.post('/addvoter', [auth, admin], loginController.logout);
router.post('/addcandidate', [auth, admin], loginController.logout);



export default router;