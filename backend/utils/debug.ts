import debug from 'debug'

const appDebug = debug('app')
const appRunnerDebug = appDebug.extend('runner')

const databaseDebug = appDebug.extend('mysql')
const databaseConnectionDebug = databaseDebug.extend('connection')
const databaseQueryDebug = databaseDebug.extend('query')

const routesDebug = appDebug.extend('routes')

const rootRouteDebug = routesDebug.extend('root')
const notFoundRouteDebug = routesDebug.extend('notFound')
const authRouteDebug = routesDebug.extend('auth')

const appDebuggers = {
  runner: appRunnerDebug
}

const databaseDebuggers = {
  connection: databaseConnectionDebug,
  query: databaseQueryDebug
}

const routeDebuggers = {
  root: rootRouteDebug,
  notFound: notFoundRouteDebug,
  auth: authRouteDebug
}

export { appDebuggers, databaseDebuggers, routeDebuggers }
