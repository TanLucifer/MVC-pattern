import express from 'express';
import { signupControlller } from '../controllers/userController.js';
const router = express.Router();


router.post('/signup',signupControlller);
export default router;