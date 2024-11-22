import express from 'express';
import { getListUserDetail } from '../controller/user.js';
import { deleteProductById } from '../controller/productController.js';
import {checkAdmin} from '../middleware/auth.js';

const router = express.Router();

router.get('/getListUserDetail', checkAdmin, getListUserDetail)
router.post('/removeProduct', checkAdmin, deleteProductById);

export default router;