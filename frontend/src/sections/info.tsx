import Image from 'next/image'
import { MdLocationPin, MdEmail, MdPhone } from 'react-icons/md'

const Info = () => {
  return (
    <section
      className="bg-cover bg-fixed bg-center py-40 text-white"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/info-bg.jpg)'
      }}
    >
      <div className="mx-auto flex flex-col items-center justify-center gap-6">
        <Image
          src="/images/info-logo.png"
          alt="logo"
          width={430}
          height={297}
        />
        <div className="flex flex-col items-center justify-center gap-3">
          <MdLocationPin className="text-7xl" />
          <span>Dunkärrsgatan 23, 256 57 Ramlösa</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <MdEmail className="text-7xl" />
          <span>maria_linder@hotmail.com</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <MdPhone className="text-7xl" />
          <span>0735-257502</span>
        </div>
      </div>
    </section>
  )
}

export default Info
