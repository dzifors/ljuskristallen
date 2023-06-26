import axios from 'axios'
import { GetServerSideProps } from 'next'
import Layout from '~/components/layout'

type ContactMessage = {
  id: number
  name: string
  email: string
  phone: string
  message: string
}

type Props = {
  unfinishedMessagesCount: number
  allMessagesCount: number
  messages: ContactMessage[]
}

const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get('http://localhost:8000/contact')
  const unfinishedMessagesCount = data.data.unfinished_messages_count
  const allMessagesCount = data.data.all_messages_count
  const messages = data.data.messages

  return {
    props: {
      unfinishedMessagesCount,
      messages,
      allMessagesCount
    }
  }
}

const AdminDashboard = ({
  unfinishedMessagesCount,
  allMessagesCount,
  messages
}: Props) => {
  return (
    <Layout>
      <span>
        Unhandled/all messages: {unfinishedMessagesCount}/{allMessagesCount}
      </span>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone number</td>
            <td>Message</td>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, index) => (
            <tr key={`message-${index}`}>
              <td>{message.name}</td>
              <td>{message.email}</td>
              <td>{message.phone}</td>
              <td>{message.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export { getServerSideProps }
export default AdminDashboard
