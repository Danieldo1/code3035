import { Rubik } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {AppProvider} from '../components/AppContext'
import {Toaster} from 'react-hot-toast'

const rubik = Rubik({ subsets: ['latin'],weight: ['300','400','500','600','700'] })

export const metadata = {
  title: 'CODE3035',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full'>
      <body className={rubik.className +'flex flex-col h-full'} >
        <main className='flex flex-col flex-1 max-w-6xl max-h-screen mx-auto px-4 bg-[#fdfdfd]'>
     <AppProvider>
      <Toaster />
        <Header/>
            {children}
          <Footer />
     </AppProvider>
        </main>
        </body>
    </html>
  )
}
