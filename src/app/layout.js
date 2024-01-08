import { Rubik } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const rubik = Rubik({ subsets: ['latin'],weight: ['300','400','500','600','700'] })

export const metadata = {
  title: 'CODE3035',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <main className='max-w-6xl mx-auto px-4 bg-[#fdfdfd]'>
        <Header/>
        {children}
        <Footer/>
        </main>
        </body>
    </html>
  )
}
