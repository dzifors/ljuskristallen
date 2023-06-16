import 'next-auth'
import 'next-auth/jwt'

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module 'next-auth' {
  interface User {
    id: number
    username: string
    email: string
  }
  interface Session {
    user: User
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: User
  }
}
