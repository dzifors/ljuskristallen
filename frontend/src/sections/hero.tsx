import Link from 'next/link'
import Header from '~/components/header'

const Hero = () => {
  return (
    <section
      className="flex flex-col items-center justify-center bg-cover bg-fixed bg-center pt-14 text-white"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/woman_spa.jpg")'
      }}
    >
      <Header />
      <h1 className="mx-auto mt-16 w-5/6 text-7xl tracking-[4.25rem]">
        LJUSKRISTALLEN
      </h1>
      <Link
        href="/contact"
        className="mt-14 inline-block border border-white px-14 py-3 hover:bg-white hover:text-black"
      >
        KONTAKTA OSS
      </Link>
    </section>
  )
}

export default Hero
