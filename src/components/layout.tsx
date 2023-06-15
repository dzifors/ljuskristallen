import { ReactNode } from 'react'
import Hero from '~/sections/hero'
import Footer from './footer'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Hero />
      {children}
      <Footer />
    </>
  )
}

export default Layout
