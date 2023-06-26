import express from 'express'
import { getAllMessages, submitContactForm } from '../controllers/contact'

const contactRouter = express.Router()

contactRouter.get('/', getAllMessages)

contactRouter.post('/', submitContactForm)

export default contactRouter
