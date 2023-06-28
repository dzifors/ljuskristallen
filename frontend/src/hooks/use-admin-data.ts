import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { AdminProps } from '~/pages/admin/dashboard'

export const useAdminData = () => {
  return useQuery<AdminProps>({
    queryFn: async () => {
      const { data: messagesRes } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/contact`
      )

      const { data: usersRes } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/users`
      )

      const messages = messagesRes.data
      const users = usersRes.data

      return { messages, users }
    },
    queryKey: ['admin-data'],
    staleTime: 3600
  })
}

export default useAdminData
