import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const { data: session } = useSession()

  return (
    <header className="mx-auto flex items-center justify-center text-white">
      <nav className="flex items-center justify-center gap-12">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={64}
            height={64}
            className="hover:opacity-80"
          />
        </Link>
        <Link href="/" className="uppercase hover:underline">
          Hem
        </Link>
        <Link href="/about" className="uppercase hover:underline">
          Handla om
        </Link>
        <Link href="/prices" className="uppercase hover:underline">
          Priser
        </Link>
        <Link href="/team" className="uppercase hover:underline">
          Team
        </Link>
        <Link href="/contact" className="uppercase hover:underline">
          Kontakta oss
        </Link>
        {!session && (
          <Link href="/auth/signin" className="uppercase hover:underline">
            Login
          </Link>
        )}
        {session?.user.is_admin && (
          <Link href="/admin" className="uppercase hover:underline">
            Admin panel
          </Link>
        )}
        {session && (
          <Link href="/auth/signout" className="uppercase hover:underline">
            Logout
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
