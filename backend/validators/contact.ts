import { object, string } from 'yup'

const ContactMessageSchema = object({
  name: string().trim().required(),
  email: string().trim().required(),
  phone: string().trim().required().length(10),
  message: string().trim().required()
}).required()

export { ContactMessageSchema }
