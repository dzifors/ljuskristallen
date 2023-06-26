import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import { toast } from 'react-hot-toast'

type FormValues = {
  name: string
  email: string
  phone: string
  message: string
}

const Contact = () => {
  const handleSubmit = async (values: FormValues) => {
    axios
      .post('http://localhost:8000/contact', values)
      .then(({ data, status }) => {
        if (status === 200) toast.success('Message sent successfully')
        else toast.error(`Sending failed: ${data.response.data}`)
      })
      .catch(error => toast.error(error.message))
  }

  return (
    <section
      className="bg-cover bg-fixed bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/contact-bg.jpg)'
      }}
    >
      <div className="flex w-full max-w-screen-xl flex-col gap-20 pt-20 text-center">
        <span className="mb-8 mt-11 text-3xl font-medium text-white">
          KONTAKTA OSS
        </span>
        <Formik
          initialValues={{ name: '', email: '', phone: '', message: '' }}
          onSubmit={handleSubmit}
        >
          <Form className="flex w-full flex-col items-center justify-center gap-10">
            <Field
              type="text"
              placeholder="Namn"
              name="name"
              required
              className="w-1/3 rounded-full px-4 py-3"
            />
            <Field
              type="email"
              placeholder="Email"
              name="email"
              required
              className="w-1/3 rounded-full px-4 py-3"
            />
            <Field
              type="tel"
              placeholder="Telefonnummer"
              name="phone"
              pattern="[0-9]{10}"
              required
              className="w-1/3 rounded-full px-4 py-3"
            />
            <Field
              as="textarea"
              name="message"
              className="h-32 w-1/3 resize-none rounded-3xl px-4 py-3"
              placeholder="Meddelande"
            />
            <button
              type="submit"
              className="mb-24 rounded-full bg-[purple] px-6 py-4 text-white hover:bg-transparent hover:text-[purple] hover:outline hover:outline-[purple]"
            >
              Skicka
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  )
}

export default Contact
