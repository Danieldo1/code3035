import { Rubik } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {AppProvider} from '../components/AppContext'
import {Toaster} from 'react-hot-toast'

const rubik = Rubik({ subsets: ['latin'],weight: ['900','800','300','400','500','600','700'] })

export const metadata = {
  title: 'CODE3035',
  description: 'CODE3035 - Your new lounge bar experience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full '  suppressHydrationWarning={true}>
    <body className={`flex flex-col min-h-screen bg-[#1B1918] text-white ${rubik.className}`}>
      <AppProvider>
        <Toaster />
        <Header />
        <main className='flex-1 w-full max-w-6xl mx-auto px-4'>
          {children}
        </main>
        <Footer />
      </AppProvider>
    </body>
  </html>
  )
}
