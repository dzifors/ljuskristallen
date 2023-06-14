import NextAuth, { NextAuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'
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
          type: 'text'
        }
      },
      async authorize(credentials) {
        return { id: 1, username: 'dzifors', email: 'asda@asdas.pl' }
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
