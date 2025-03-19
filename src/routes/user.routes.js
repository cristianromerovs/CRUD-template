import { Router } from 'express';
import {getUsers, getUserById, createUser, deleteUser, updateUser } from '../controllers/user.controllers.js';

const router = Router();

router.get('/users', getUsers);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.delete('/user/:id', deleteUser);
router.put('/user/:id', updateUser);

export default router;