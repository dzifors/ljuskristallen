import express, { Request, Response } from 'express'
import { routeDebuggers } from '../../utils/debug'
import authRouter from './auth'
import contactRouter from './contact'
import usersRouter from './users'

const rootRouter = express.Router()

rootRouter.use('/auth', authRouter)

rootRouter.use('/contact', contactRouter)

rootRouter.use('/users', usersRouter)

rootRouter.get('/', (req: Request, res: Response) => {
  routeDebuggers.root('Request at /')
  res.send('Hello world')
})

export default rootRouter
