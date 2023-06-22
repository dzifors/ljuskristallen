import { createHash } from 'crypto'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FormEventHandler, useEffect, useReducer } from 'react'
import { toast } from 'react-hot-toast'
import Layout from '~/components/layout'

type SigninState = {
  username: string
  password: string
}

type SigninAction = { username: string } | { password: string }

const SigninPage = () => {
  const router = useRouter()

  const [state, dispatch] = useReducer(
    (oldState: SigninState, action: SigninAction) => ({
      ...oldState,
      ...action
    }),
    { username: '', password: '' }
  )

  const handleSignin: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    signIn('credentials', { ...state, redirect: false }).then(response => {
      if (response?.error) {
        console.log(response.error)
        toast.error(response.error)
      } else {
        router.push('/')
        toast.success('Welcome')
      }
    })
  }

  const hashPassword = (password: string) => {
    const hash = createHash('md5')
    hash.update(password)
    return hash.digest('hex')
  }

  return (
    <Layout>
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center">
        <span className="mt-8 text-4xl">Login</span>
        <form
          onSubmit={handleSignin}
          className="mt-6 flex flex-col items-center justify-center"
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="w-64 border-2 border-[purple] p-2"
            onChange={e => dispatch({ username: e.target.value })}
          />

          <label htmlFor="password" className="mt-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-64 border-2 border-[purple] p-2"
            onChange={e => dispatch({ password: hashPassword(e.target.value) })}
          />

          <button
            type="submit"
            className="mt-4 border-2 border-[purple] px-4 py-2 text-[purple] hover:bg-[purple] hover:text-white"
          >
            Login
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default SigninPage
