import axios from 'axios'
import { createHash } from 'crypto'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import Layout from '~/components/layout'
import { Credentials } from '~/types/auth'

const AdminPage = () => {
  const router = useRouter()

  const hashPassword = (password: string) => {
    const hash = createHash('md5')
    hash.update(password)
    return hash.digest('hex')
  }

  const handleSubmit = (values: Credentials) => {
    const hashedPassword = hashPassword(values.password)

    const credentials = { ...values, password: hashedPassword }

    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/auth/signin`,
        credentials
      )
      .then(({ data }) => {
        if (data.data.is_admin === true) {
          router.push('/admin/dashboard')
          toast.success(`Welcome, ${data.data.name}`)
        } else {
          router.push('/')
          toast.error(`You shouldn't be here, ${data.data.name}`)
        }
      })
      .catch(error => {
        toast.error(error.message)
      })
  }
  return (
    <Layout>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form className="mt-6 flex flex-col items-center justify-center">
          <Field
            type="text"
            placeholder="Name"
            name="username"
            required
            className="w-64 border-2 border-[purple] p-2"
          />
          <Field
            type="password"
            placeholder="Password"
            name="password"
            required
            className="mt-4 w-64 border-2 border-[purple] p-2"
          />
          <button
            type="submit"
            className="mt-4 border-2 border-[purple] px-4 py-2 text-[purple] hover:bg-[purple] hover:text-white"
          >
            Login
          </button>
        </Form>
      </Formik>
    </Layout>
  )
}

export default AdminPage
