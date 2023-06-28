import express from 'express'
import { getAllUsers, modifyUser } from '../controllers/users'

const usersRouter = express.Router()

usersRouter.get('/', getAllUsers)

usersRouter.patch('/:id', modifyUser)

export default usersRouter
