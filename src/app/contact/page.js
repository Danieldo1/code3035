import React from 'react'
import Contact from '@/components/Contact'

export const metadata = {
  title: '3035 | Contact Us',
  description: 'Get in touch with the best bar in Limassol',
}


const ContactPage = () => {
  return (
    <section className='mt-20'>
        <Contact />
    </section>
  )
}

export default ContactPage