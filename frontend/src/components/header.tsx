import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="w-screen flex justify-center items-center">
      <nav className="flex gap-12 justify-center items-center">
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
        <Link href="/client" className="uppercase hover:underline">
          Klient
        </Link>
        <Link href="/contact" className="uppercase hover:underline">
          Kontakta oss
        </Link>
        <Link href="/special" className="uppercase hover:underline">
          Special
        </Link>
      </nav>
    </header>
  )
}

export default Header
