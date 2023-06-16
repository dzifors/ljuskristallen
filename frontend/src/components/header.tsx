import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex w-screen items-center justify-center text-white">
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
        <Link href="/auth/signin" className="uppercase hover:underline">
          Login
        </Link>
      </nav>
    </header>
  )
}

export default Header
