
import Hero from '../components/Hero'
import Image from 'next/image'
import Contact from '../components/Contact'
import About from '../components/About'
import Info from '@/components/Info'
import ParallaxComponent from '@/components/Parallax'
import LoadingOverlay from '@/components/Overlay'

export const metadata = {
  title: '3035 Lounge Bar | Home',
  description: '3035 Lounge Bar - Your new lounge bar experience.In the heart of Limassol, explore the best hookah in town, sip on artisanal drinks and explore authentic Chinese tea ceremony.',
}


export default function Home() {
  return (
    <>
  <Hero/>
  <About />
  <Info/>
  <ParallaxComponent />
  <Contact/>
    </>
  )
}
