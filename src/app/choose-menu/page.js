import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ChooseMenu = () => {
  return (
    <section className='h-full mt-20 m-5 md:flex md:items-baseline md:gap-5'>
        
        <Link href='/menu-page' className=''>
  <div className=' mx-auto  relative'>
    <h2 className='absolute inset-0 flex justify-center items-center rounded-lg bg-[#1B1918] bg-opacity-50 hover:bg-opacity-75 text-white text-6xl font-bold z-10 transition duration-700' >Bar Menu</h2>
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
    <h2 className='absolute inset-0 flex justify-center items-center rounded-lg bg-[#1B1918] bg-opacity-50 hover:bg-opacity-75 text-white text-6xl font-bold z-10 transition duration-700' >
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
        
{/* <Link href='/shisha-page'>
  <div className=' mt-5 mx-auto rounded-lg relative'>
    <div className='flex justify-center items-center w-full'>
      <Image 
        src='/shisha.webp'
        alt="hero image"
        layout='responsive' // Use the natural size of the image for layout
        width={400} // Define the natural width
        height={400} // Define the natural height
        className='rounded-lg'
      />
    </div>
  </div>
</Link> */}
    
    </section>
  )
}

export default ChooseMenu