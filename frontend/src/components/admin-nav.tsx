import { Badge } from 'flowbite-react'
import Link from 'next/link'
import useAdminData from '~/hooks/use-admin-data'

const AdminNav = () => {
  const { data } = useAdminData()
  const messages =
    data?.messages.filter(value => value.status === 'unfinished') || []

  return (
    <nav className="flex gap-4">
      <Link href="/admin/dashboard" className="hover:underline">
        Dashboard
      </Link>
      <Link href="/admin/users" className="hover:underline">
        Users
      </Link>
      <Link
        href="/admin/messages"
        className="flex items-center justify-center gap-2"
      >
        <span className="hover:underline">Messages</span>
        {messages.length > 0 && <Badge>{messages.length}</Badge>}
      </Link>
    </nav>
  )
}

export default AdminNav
