import express from 'express';
const router = express.Router();
import { registerController, loginController, userController, refreshController } from '../controllers';
import { newComment, getComments, deleteComment } from '../controllers/comment-controller.js';
import { createPost, updatePost, deletePost, getPost, getAllPosts } from '../controllers/post-controller.js';
import { uploadImage, getImage } from '../controllers/image-controller.js';
import auth from '../middlewares/auth';
import admin from '../middlewares/admin';
import upload from '../utils/upload.js';

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/me', auth, userController.me);
router.post('/refresh', refreshController.refresh);
router.post('/logout', auth, loginController.logout);

router.post('/addvoter', [auth, admin], loginController.logout);
router.post('/addcandidate', [auth, admin], loginController.logout);


// router.post('/voterinfo', [auth, admin], userController.voterinfo);
router.post('/create', createPost);
router.put('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);

router.get('/post/:id', getPost);
router.get('/posts', getAllPosts);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

router.post('/comment/new', newComment);
router.get('/comments/:id', getComments);
router.delete('/comment/delete/:id', deleteComment);


export default router;