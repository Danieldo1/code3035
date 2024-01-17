'use client'

import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Link from 'next/link'


const Hero = () => {

  const fadeImages = [
    {
      url: '/shisha.webp',
    },
    {
      url: '/bar.webp'
    },
  
  ];


  return (
    <section className='mt-24'>
 <div className="relative h-[300px] px-10">
     
      <div className='flex flex-col justify-center pt-4 md:pt-20 items-center '>
        <h1 className='text-3xl md:text-5xl font-bold text-center '>Experience new level of <br />Lounge Bar</h1>
        <p className='text-xl md:text-2xl my-4 text-gray-100'>Start your journey with us</p>
        <div className='flex gap-4'>
          <button className='bg-green-700 text-white  font-bold px-2 py-2 rounded-full'>
            <Link href="/menu-page">Explore bar</Link>
          </button>
          <button className='bg-green-700 text-white text-sm font-bold px-2 py-2 rounded-full'>
            <Link href="/shisha-page">Explore hookah</Link>
          </button>
        </div>
      </div>

      <div className="absolute inset-0 z-[-1] h-[350px] opacity-30 rounded-lg overflow-hidden">
      <Fade autoplay>
        {fadeImages.map((fadeImage, index) => (
            <img  key={index} alt='Background Hero' style={{ borderRadius: '0.5rem', objectFit: 'cover', objectPosition: 'center',}}  src={fadeImage.url}  />
        ))}
      </Fade>
         </div>
        {/* <div className="absolute inset-0 z-[-1] h-[350px] opacity-50 rounded-lg">
          <Image
            src="/shisha.webp" 
            fill  
            layout="fill"
             objectFit="cover"
              objectPosition="center"          
            alt="Lounge Bar"
            priority 
            className='rounded-lg '
          />
        </div> */}
     



    </div>
    </section>
  )
}

export default Hero