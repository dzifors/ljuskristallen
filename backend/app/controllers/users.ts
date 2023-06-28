import { Request, Response } from 'express'
import databaseConnection from '../../utils/database'

const getAllUsers = (req: Request, res: Response) => {
  databaseConnection.query(
    'SELECT id, name, email, is_admin FROM users',
    (error, rows) => {
      if (error) throw error

      res.status(200).json({
        success: true,
        data: rows
      })
    }
  )
}

const modifyUser = (req: Request, res: Response) => {
  const { id } = req.params
  const { admin } = req.query

  databaseConnection.query(
    'UPDATE users SET is_admin=? WHERE id=?',
    [admin, id],
    error => {
      if (error) res.status(500).json({ success: false, error: error.message })
      res.status(200).json({ success: true })
    }
  )
}

export { getAllUsers, modifyUser }
