import { Inter } from 'next/font/google'
import { cn } from '~/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={cn(inter.className, 'max-w-screen-xl mx-auto')}>
      Page under construction
    </main>
  )
}
