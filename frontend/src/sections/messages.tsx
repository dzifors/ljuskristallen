import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { Table } from 'flowbite-react'
import { MdCheck } from 'react-icons/md'
import useAdminData from '~/hooks/use-admin-data'
import { queryClient } from '~/pages/_app'

const Messages = ({ status }: { status?: 'finished' | 'unfinished' }) => {
  const { data } = useAdminData()

  const setMessageAsCompleted = useMutation<any, any, number, any>({
    mutationFn: async id => {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/contact/${id}?new_status=finished`
        )
        .then(() => queryClient.invalidateQueries(['admin-data']))
    }
  })

  const messages = status
    ? data?.messages.filter(value => value.status === status) || []
    : data?.messages || []

  return (
    <Table hoverable className="w-full">
      <Table.Head className="w-full">
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Email</Table.HeadCell>
        <Table.HeadCell>Phone number</Table.HeadCell>
        <Table.HeadCell>Message</Table.HeadCell>
        {status === 'unfinished' && (
          <Table.HeadCell>
            <span className="sr-only">Mark as completed</span>
          </Table.HeadCell>
        )}
      </Table.Head>
      <Table.Body className="w-full">
        {messages.map((message, index) => (
          <Table.Row
            key={`message-${index}`}
            className="dark:bg-hsl-20 dark:hover:bg-hsl-25 border-b bg-white hover:bg-gray-50 dark:border-gray-700"
          >
            <Table.Cell className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              {message.name}
            </Table.Cell>
            <Table.Cell className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              {message.email}
            </Table.Cell>
            <Table.Cell className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              {message.phone}
            </Table.Cell>
            <Table.Cell
              className="px-6 py-4 font-medium text-gray-900 dark:text-white"
              style={{ wordBreak: 'break-all' }}
            >
              {message.message}
            </Table.Cell>
            {status === 'unfinished' && (
              <Table.Cell>
                <MdCheck
                  onClick={() => setMessageAsCompleted.mutate(message.id)}
                  className="hover:cursor-pointer"
                />
              </Table.Cell>
            )}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default Messages
