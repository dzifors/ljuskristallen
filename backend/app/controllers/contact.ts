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

export { submitContactForm }
