'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion';
import LoadingOverlay from './Overlay';
import { useRouter } from 'next/navigation';

const MenuPhotos = () => {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const navigateToMenuPage = () => {
    setClicked(true); // Show the loading overlay
      // Delay the navigation
      setTimeout(() => {
        router.push('/menu-page');
      }, 1000); // 2 second delay
    };

    const navigateToHookah = () => {
      setClicked(true); // Show the loading overlay
        // Delay the navigation
        setTimeout(() => {
          router.push('/shisha-page');
        }, 1000); // 2 second delay
      };
  return (
    <div>
    <button className='w-full' onClick={navigateToMenuPage}>
    <motion.div
          className='mx-auto relative'
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
        >
      <h2 className='absolute inset-0 flex justify-center items-center rounded-lg bg-[#1B1918] bg-opacity-50 hover:bg-opacity-75 text-white text-3xl font-bold z-10 transition duration-700' >Bar Menu</h2>
      <div className='flex justify-center items-center w-full h-full  '>
        <Image 
          src='/cocktail.jpeg'
          alt="hero image"
          layout='responsive'
          width={400}
          height={400}
          className=' rounded-lg'
        />
      </div>
    </motion.div>
  </button>

    
  {clicked && <LoadingOverlay />}
  
          <button className='w-full' onClick={navigateToHookah}>
          <motion.div
          className='mx-auto mt-5 relative'
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1, delay: 0.5 }} // You can add delay for staggered animation
        >
      <h2 className='absolute inset-0 flex justify-center items-center rounded-lg bg-[#1B1918] bg-opacity-50 hover:bg-opacity-75 text-white text-3xl font-bold z-10 transition duration-700' >
          Shisha Menu
      </h2>
      <div className='flex justify-center items-center w-full h-full '>
        <Image 
          src='/smoke1.jpeg'
          alt="hero image"
          layout='responsive'
          width={400}
          height={400}
          className=' rounded-lg'
        />
      </div>
      </motion.div>
  </button>
    
    </div>
  )
}

export default MenuPhotos