import express, { Request, Response } from 'express'
import { routeDebuggers } from '../../utils/debug'
import authRouter from './auth'

const rootRouter = express.Router()

rootRouter.use('/auth', authRouter)

rootRouter.get('/', (req: Request, res: Response) => {
  routeDebuggers.root('Request at /')
  res.send('Hello world')
})

export default rootRouter
