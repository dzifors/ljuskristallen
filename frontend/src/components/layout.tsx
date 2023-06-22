import { ReactNode } from 'react'
import Hero from '~/sections/hero'
import Footer from './footer'
import { Toaster } from 'react-hot-toast'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="min-h-screen">
        <Hero />
        {children}
      </div>
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff'
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black'
            }
          }
        }}
      />
    </>
  )
}

export default Layout
