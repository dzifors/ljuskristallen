import { Request, Response } from 'express'
import { ValidationError } from 'yup'
import databaseConnection from '../../utils/database'
import { routeDebuggers } from '../../utils/debug'
import { SignInSchema } from '../../validators/auth'

const signinHandler = (req: Request, res: Response) => {
  const requestBody = req.body

  try {
    const requestData = SignInSchema.validateSync(requestBody, {
      abortEarly: false,
      stripUnknown: true
    })

    const { username, password } = requestData

    databaseConnection.query(
      'SELECT * FROM users WHERE name=? AND password=?',
      [username, password],
      (error, rows) => {
        if (error) {
          routeDebuggers.auth(
            `[POST][/signin] Couldnt find user ${username} with error ${error}`
          )

          return res.status(500).json({ success: false, error: error.message })
        }

        if (rows.length < 1) {
          routeDebuggers.auth(`[POST][/signin] Couldnt find user ${username}`)

          return res
            .status(401)
            .json({ success: false, error: 'User not found' })
        }

        const queryResult = rows[0]
        const { id, name, email } = queryResult
        const user = { id, name, email }
        return res.status(200).json({ success: true, data: user })
      }
    )
  } catch (err) {
    const error = err as ValidationError

    routeDebuggers.auth(`[GET][/] Invalid request: ${error.errors}`)

    return res.status(422).json({ success: false, error: error.errors })
  }
}

export { signinHandler }
