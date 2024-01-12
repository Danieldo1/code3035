import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const MenuPhotos = () => {
  return (
    <div className=''>
    <Link href='/menu-page' className=''>
    <div className=' mx-auto  relative'>
      <h2 className='absolute inset-0 flex justify-center items-center rounded-lg bg-[#1B1918] bg-opacity-50 hover:bg-opacity-75 text-white text-3xl font-bold z-10 transition duration-700' >Bar Menu</h2>
      <div className='flex justify-center items-center w-full h-full  '>
        <Image 
          src='/bar.webp'
          alt="hero image"
          layout='responsive'
          width={400}
          height={400}
          className=' rounded-lg'
        />
      </div>
    </div>
  </Link>
    
    
          <Link href='/shisha-page' className=''>
    <div className=' mx-auto mt-5 relative'>
      <h2 className='absolute inset-0 flex justify-center items-center rounded-lg bg-[#1B1918] bg-opacity-50 hover:bg-opacity-75 text-white text-3xl font-bold z-10 transition duration-700' >
          Shisha Menu
      </h2>
      <div className='flex justify-center items-center w-full h-full '>
        <Image 
          src='/shisha.webp'
          alt="hero image"
          layout='responsive'
          width={400}
          height={400}
          className=' rounded-lg'
        />
      </div>
    </div>
  </Link>
    
    </div>
  )
}

export default MenuPhotos