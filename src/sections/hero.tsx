import Link from 'next/link'
import Header from '~/components/header'

const Hero = () => {
  return (
    <section
      className="w-screen bg-cover bg-fixed bg-center pt-14 flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/woman_spa.jpg")'
      }}
    >
      <Header />
      <h1 className="tracking-[4.5rem] text-7xl mx-auto w-5/6 mt-16">
        LJUSKRISTALLEN
      </h1>
      <Link
        href="/contact"
        className="inline-block py-3 px-14 border border-white mt-14 hover:bg-white hover:text-black"
      >
        KONTAKTA OSS
      </Link>
    </section>
  )
}

export default Hero
