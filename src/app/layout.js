import { Rubik } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {AppProvider} from '../components/AppContext'
import {Toaster} from 'react-hot-toast'
import { Providers } from './providers'
import LoadingOverlay from '@/components/Overlay'
// import Overlay from '../components/Overlay';

const rubik = Rubik({ subsets: ['latin'],weight: ['900','800','300','400','500','600','700'] })

export const metadata = {
  title: '3035 Lounge Bar',
  description: '3035 Lounge Bar - Your new lounge bar experience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full '  suppressHydrationWarning={true}>
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <link
        rel="apple-touch-icon"
        href="/apple-icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      </head>
    <body className={`flex flex-col min-h-screen bg-[#1B1918] text-white ${rubik.className}`}>
      <AppProvider>
      {/* <Overlay gif="/smoke2.gif" /> */}
        <Toaster />
        <Header />
        <main className='flex-1 w-full max-w-6xl mx-auto px-4'>
          <Providers>
          
          {children}     
          </Providers>
        </main>
        <Footer />
      </AppProvider>
    </body>
  </html>
  )
}
