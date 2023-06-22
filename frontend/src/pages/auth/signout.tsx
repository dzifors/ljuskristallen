import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import Layout from '~/components/layout'

const SignoutPage = () => {
  const router = useRouter()

  const handleSignout = () => {
    signOut({ redirect: false }).then(() => {
      router.push('/')
      toast.success('Signed out successfully', { duration: 1500 })
    })
  }

  return (
    <Layout>
      <section className="flex flex-col items-center justify-center gap-6 pt-6">
        <span className="text-3xl">Do you really want to sign out?</span>
        <button
          onClick={handleSignout}
          className="bg-[purple] px-6 py-4 text-white hover:bg-transparent hover:text-[purple] hover:outline hover:outline-[purple]"
        >
          Sign out
        </button>
      </section>
    </Layout>
  )
}

export default SignoutPage
