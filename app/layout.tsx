import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "700"] })

export const metadata = {
  title: 'ABETO news',
  description: 'Abeto news',
  keywords: ["news"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />{children} <Footer /></body>
    </html>
  )
}
