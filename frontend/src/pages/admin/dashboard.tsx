import axios from 'axios'
import { GetServerSideProps } from 'next'
import { createContext } from 'react'
import AdminNav from '~/components/admin-nav'
import Layout from '~/components/layout'
import useAdminData from '~/hooks/use-admin-data'
import { ContactMessage } from '~/types/contact'
import { User } from '~/types/users'

export type AdminProps = {
  users: User[]
  messages: ContactMessage[]
}

export const AdminContext = createContext<AdminProps>({
  users: [],
  messages: []
})

const getServerSideProps: GetServerSideProps = async () => {
  const { data: messagesRes } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/contact`
  )

  const { data: usersRes } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/users`
  )

  const messages = messagesRes.data
  const users = usersRes.data

  return { props: { users, messages } }
}

const AdminDashboard = () => {
  const { data, isLoading } = useAdminData()

  const unfinishedMessages = data?.messages.filter(
    value => value.status === 'unfinished'
  )

  return (
    <Layout>
      <section className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-6 pt-4">
        <AdminNav />
        {isLoading ? (
          'loading'
        ) : (
          <>
            <span>User count: {data?.users.length}</span>
            <span>All messages: {data?.messages.length}</span>
            <span>Unfinished messages: {unfinishedMessages?.length}</span>
          </>
        )}
      </section>
    </Layout>
  )
}

export { getServerSideProps }
export default AdminDashboard
