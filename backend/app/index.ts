import bodyParser from 'body-parser'
import cors from 'cors'
import debug from 'debug'
import express, { Express } from 'express'
import { appDebuggers, databaseDebuggers } from '../utils/debug'
import rootRouter from './routes/root'
import databaseConnection from '../utils/database'
import routeNotFound from './routes/routeNotFound'
import { requestTimeMiddleware } from '../utils/timing'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env.API_PORT || 8000

//? Middlewares
app.use(cors()) // Middleware for handling CORS
app.use(bodyParser.json()) // Middleware for parsing JSON requests
app.use(requestTimeMiddleware)

//? API Routes
app.use('/', rootRouter)

app.all('*', routeNotFound)

if (process.env.NODE_ENV === 'development') {
  debug.enable('*')
} else {
  debug.enable('app:runner,app:mysql:*')
}

const server = app.listen(port, () => {
  appDebuggers.runner(`Server running at http://localhost:${port}`)
})

process.on('SIGINT', () => {
  appDebuggers.runner('SIGINT (CTRL + C) received')

  appDebuggers.runner('Stopping server')
  server.close(() => {
    appDebuggers.runner('Server stopped')

    databaseDebuggers.connection('Closing MySQL connection')
    databaseConnection.end(() => {
      databaseDebuggers.connection('Closed MySQL connection')
      process.exit(0)
    })
  })
})
