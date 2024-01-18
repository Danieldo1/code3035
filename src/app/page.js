
import Hero from '../components/Hero'
import Image from 'next/image'
import Contact from '../components/Contact'
import About from '../components/About'
import Info from '@/components/Info'
import ParallaxComponent from '@/components/Parallax'
import LoadingOverlay from '@/components/Overlay'



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
