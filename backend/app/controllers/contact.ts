import { Request, Response } from 'express'
import databaseConnection from '../../utils/database'
import { ContactMessageSchema } from '../../validators/contact'
import { ValidationError } from 'yup'

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
      ]
    )

    res.status(200).send()
  } catch (e) {
    const error = e as ValidationError
    res.send(error.errors)
  }
}

const getAllMessages = (req: Request, res: Response) => {
  databaseConnection.query(
    'SELECT * FROM contact WHERE status="unfinished" LIMIT 5; SELECT COUNT(*) count FROM contact WHERE status="unfinished"; SELECT COUNT(*) count FROM contact',
    (error, results) => {
      if (error) throw error
      const messages = results[0]
      const unfinished_messages_count = results[1][0]['count']
      const all_messages_count = results[2][0]['count']

      res.status(200).json({
        success: true,
        data: { messages, unfinished_messages_count, all_messages_count }
      })
    }
  )
}

export { submitContactForm, getAllMessages }
