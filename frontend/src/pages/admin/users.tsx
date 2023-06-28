import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { Table } from 'flowbite-react'
import { toast } from 'react-hot-toast'
import AdminNav from '~/components/admin-nav'
import Layout from '~/components/layout'
import useAdminData from '~/hooks/use-admin-data'
import { queryClient } from '~/pages/_app'

const UsersPage = () => {
  const { data, isLoading } = useAdminData()

  const changeUserAdminStatus = useMutation<
    any,
    any,
    { id: number; newStatus: 0 | 1 },
    any
  >({
    mutationFn: async ({ id, newStatus }) => {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/users/${id}?admin=${newStatus}`
        )
        .then(() => queryClient.invalidateQueries(['admin-data']))
    }
  })

  return (
    <Layout>
      <section className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center gap-6 pt-4">
        <AdminNav />
        {isLoading ? (
          'loading'
        ) : (
          <Table className="w-full" hoverable>
            <Table.Head className="w-full">
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Is admin?</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Make admin</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="w-full">
              {data?.users.map((user, index) => (
                <Table.Row key={`user-${index}`}>
                  <Table.Cell>{user.id}</Table.Cell>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.is_admin}</Table.Cell>
                  <Table.Cell>
                    {user.is_admin ? (
                      <button
                        onClick={() => {
                          changeUserAdminStatus.mutate({
                            id: user.id,
                            newStatus: 0
                          })
                          toast.success(`Taken admin from user ${user.name}`)
                        }}
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Take admin
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          changeUserAdminStatus.mutate({
                            id: user.id,
                            newStatus: 1
                          })
                          toast.success(`Given admin to user ${user.name}`)
                        }}
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Give admin
                      </button>
                    )}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}
      </section>
    </Layout>
  )
}

export default UsersPage
