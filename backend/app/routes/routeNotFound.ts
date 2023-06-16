import { Request, Response } from 'express'
import { routeDebuggers } from '../../utils/debug'

const routeNotFound = (req: Request, res: Response) => {
  routeDebuggers.notFound(
    `[${req.method}][${req.path}] Attempted request but no handler is present`
  )
  return res.status(404).json({
    success: false,
    error: 'The route you are looking for could not be found'
  })
}

export default routeNotFound
