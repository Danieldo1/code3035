'use client'

import React, { useState } from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Link from 'next/link'
import LoadingOverlay from './Overlay';
import { useRouter } from 'next/navigation';



const Hero = () => {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const navigateToMenuPage = () => {
    setClicked(true); // Show the loading overlay
      // Delay the navigation
      setTimeout(() => {
        router.push('/menu-page');
      }, 2000); // 2 second delay
    };

    const navigateToHookah = () => {
      setClicked(true); // Show the loading overlay
        // Delay the navigation
        setTimeout(() => {
          router.push('/shisha-page');
        }, 2000); // 2 second delay
      };

  const fadeImages = [
    {
      url: '/shisha.webp',
    },
    {
      url: '/bar.webp'
    },
  
  ];


  return (
    <section className='mt-24 -mx-4'>
 <div className="relative h-[350px] flex justify-center px-10 bg-gradient-to-t from-[#1B1918] ">
     
      <div className='flex flex-col justify-evenly pt-4 md:pt-20 items-center '>
        <h1 className='text-3xl md:text-5xl font-bold text-center -mt-5 '>Experience the new level of <br />Lounge Bar</h1>
        {/* <p className='text-xl md:text-2xl my-4 text-gray-100'>Start your journey with us</p> */}
          {clicked && <LoadingOverlay />}
        <div className='flex gap-4'>
 
          <button  onClick={navigateToMenuPage} className="relative  inline-flex items-center justify-center px-4 py-2 font-medium text-black transition duration-200 ease-out bg-white border-2 border-black group">
            <span className="absolute  inset-0 w-full h-full transition duration-200 ease-out transform bg-white translate-x-1.5 translate-y-1 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute  inset-0 w-full h-full transition duration-200 ease-out bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative z-10 transition duration-200 ease-out group-hover:text-white">
              Explore Bar
            </span>
          </button>


          <button onClick={navigateToHookah} className="relative  inline-flex items-center justify-center px-4 py-2 font-medium text-black transition duration-200 ease-out bg-white border-2 border-black group">
            <span className="absolute  inset-0 w-full h-full transition duration-200 ease-out transform bg-white translate-x-1.5 translate-y-1 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute  inset-0 w-full h-full transition duration-200 ease-out bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative z-10 transition duration-200 ease-out group-hover:text-white">
              Explore Hookah
            </span>
          </button>

        </div>
      </div>

      <div className="absolute inset-0 z-[-1] h-[350px] opacity-30  overflow-hidden ">
      <Fade autoplay>
        {fadeImages.map((fadeImage, index) => (
            <img  key={index} alt='Background Hero' style={{ objectFit: 'cover', objectPosition: 'center',}}  src={fadeImage.url} className='aspect-[16/13] w-full h-full '  />
        ))}
      </Fade>
         </div>
    </div>
    </section>
  )
}

export default Hero