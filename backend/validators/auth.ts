import { object, string } from 'yup'

const SignInSchema = object({
  username: string().trim().required(),
  password: string().trim().required()
}).required()

export { SignInSchema }
