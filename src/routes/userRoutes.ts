import express from 'express';
import { getAllDetails, createUser } from '../controllers/userControllers';

const router = express.Router();

router.get('/', getAllDetails);

router.post('/', createUser);

export default router;
