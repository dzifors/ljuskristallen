import axios from 'axios'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { Credentials } from '~/types/auth'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60
  },
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        username: { label: 'Username', placeholder: 'Username', type: 'text' },
        password: {
          label: 'Password',
          placeholder: 'Password',
          type: 'password'
        }
      },
      async authorize(credentials) {
        const { username, password } = credentials as Credentials

        const { data } = await axios
          .post('http://localhost:8000/auth/signin', {
            username,
            password
          })
          .catch(e => {
            console.log(e)
            throw new Error(e.response.data.error)
          })

        return data.data
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user
      return token
    },
    async session({ session, token }) {
      session.user = token.user

      return Promise.resolve(session)
    }
  },
  pages: {
    // signIn: '/auth/signin',
    // signOut: '/auth/signout'
    // error: '/auth/error'
  }
}

export default NextAuth(authOptions)
