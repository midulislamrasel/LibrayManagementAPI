import express from 'express'
import { createUser, getUsers } from '../controllers/userController';


const routes = express.Router();

routes.get('/',getUsers)
routes.post('/',createUser)