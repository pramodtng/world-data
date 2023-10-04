import './globals.css'
import { Poppins } from 'next/font/google'


const poppins = Poppins({
  weight: '500',
  subsets: ['latin']
})

export const metadata = {
  title: 'Countries around the World',
  description: 'List of countries.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
