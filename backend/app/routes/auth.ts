import express from 'express'
import { signinHandler } from '../controllers/auth'

const authRouter = express.Router()

authRouter.post('/signin', signinHandler)

export default authRouter
