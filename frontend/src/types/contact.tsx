export type ContactMessage = {
  id: number
  name: string
  email: string
  phone: string
  message: string
  status: 'finished' | 'unfinished'
}
