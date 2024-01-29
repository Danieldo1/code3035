import React from 'react'
import Image from 'next/image'
import { Instagram } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className='border-t py-2 mt-10 justify-center items-center text-center text-gray-500'>
      <div className='flex justify-between mx-4 mb-1'>
        <Image src='/logo1.webp' alt='logo' width={100} height={100} />
        <div className='flex gap-5'>
          <Link href='https://www.instagram.com/3035lounge?igsh=MWM5a2R6dTd1M240ZQ==' target='_blank' rel='noreferrer' className='justify-end flex items-center'>
          <Instagram className='w-6 h-6 text-gray-500' />
          </Link>
          <Link href='https://wa.me/+35797866197' target='_blank' rel='noreferrer' className='justify-end flex items-center'>
            <Image src='/whats.svg' alt='logo' width={24} height={24} />
          </Link>

        </div>
      </div>
        <h1>&copy; {year} 3035 Lounge Bar</h1>
        <p>All Rights Reserved</p>
    </div>
  )
}

export default Footer