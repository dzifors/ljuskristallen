import { Request, Response } from 'express'
import { ValidationError } from 'yup'
import databaseConnection from '../../utils/database'
import {
  ChangeMessageStatusSchema,
  ContactMessageSchema
} from '../../validators/contact'

const submitContactForm = (req: Request, res: Response) => {
  const requestBody = req.body

  try {
    const requestData = ContactMessageSchema.validateSync(requestBody, {
      abortEarly: false,
      stripUnknown: true
    })

    databaseConnection.query(
      'INSERT INTO contact (name, email, phone, message, status) VALUES (?, ?, ?, ?, "unfinished")',
      [
        requestData.name,
        requestData.email,
        requestData.phone,
        requestData.message
      ],
      error => {
        if (error) throw error
        res.status(200).send()
      }
    )
  } catch (e) {
    const error = e as ValidationError
    res.send(error.errors)
  }
}

const getAllMessages = (req: Request, res: Response) => {
  databaseConnection.query('SELECT * FROM contact', (error, rows) => {
    if (error) throw error
    res.status(200).json({ success: true, data: rows })
  })
}

const changeMessageStatus = (req: Request, res: Response) => {
  const { id } = req.params
  const { new_status } = req.query
  console.log(req.query)

  const newStatus = ChangeMessageStatusSchema.validateSync(new_status, {
    abortEarly: false,
    stripUnknown: true
  })

  databaseConnection.query(
    'UPDATE contact SET status=? WHERE id=?',
    [newStatus, id],
    error => {
      if (error) throw error

      res.status(200).json({ success: true })
    }
  )
}

export { submitContactForm, getAllMessages, changeMessageStatus }
