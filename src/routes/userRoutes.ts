import express from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  deleteUser
} from '../controllers/userController';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.delete('/:id', deleteUser);

export default router;
