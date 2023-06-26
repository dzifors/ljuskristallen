import express, { Request, Response } from 'express'
import { routeDebuggers } from '../../utils/debug'
import authRouter from './auth'
import contactRouter from './contact'

const rootRouter = express.Router()

rootRouter.use('/auth', authRouter)

rootRouter.use('/contact', contactRouter)

rootRouter.get('/', (req: Request, res: Response) => {
  routeDebuggers.root('Request at /')
  res.send('Hello world')
})

export default rootRouter
