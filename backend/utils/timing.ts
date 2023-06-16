import { NextFunction, Request, Response } from 'express'
import { appDebuggers } from './debug'

const TimeOrderSuffixes = ['nsec', 'μsec', 'msec', 'sec']

const formatTimeMagnitude = (time: number) => {
  for (let suffix of TimeOrderSuffixes) {
    if (time < 1000) return `${time.toFixed(2)} ${suffix}`
    time /= 1000
  }
}

const requestTimeMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const startingTime = process.hrtime()

  res.on('finish', () => {
    const timeElapsed = process.hrtime(startingTime)[1]
    appDebuggers.runner(
      `[${req.method}]`,
      `${req.hostname}${req.baseUrl}${req.path}`,
      `[${res.statusCode}]`,
      req.headers['cf-connecting-ip'],
      ` | Request took ${formatTimeMagnitude(timeElapsed)}`
    )
  })

  next()
}

export { requestTimeMiddleware, formatTimeMagnitude }
