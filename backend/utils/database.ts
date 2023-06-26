import mysql from 'mysql'
import { databaseDebuggers } from './debug'
import dotenv from 'dotenv'

dotenv.config()

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env

const MYSQL_PORT = Number(process.env.MYSQL_PORT)

const databaseConnection = mysql.createConnection({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  multipleStatements: true
})

databaseConnection.connect(error => {
  if (error)
    databaseDebuggers.connection(`MySQL Connection Failed: ${error.message}`)
  else databaseDebuggers.connection('MySQL Connected')
})

export default databaseConnection
