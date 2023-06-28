import express from 'express'
import {
  getAllMessages,
  changeMessageStatus,
  submitContactForm
} from '../controllers/contact'

const contactRouter = express.Router()

contactRouter.get('/', getAllMessages)

contactRouter.post('/', submitContactForm)

contactRouter.patch('/:id', changeMessageStatus)

export default contactRouter
