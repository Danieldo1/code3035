'use client'

import React,{useEffect,useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion';

const MenuPhotos = () => {
  const [createdCategories, setCreatedCategories] = useState([])

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  useEffect(() => {
    fetchCategories()
}, [])
const fetchCategories = async () => {
    fetch('/api/offer-categories/offerName').then(response=>{response.json().then(data=>{
        setCreatedCategories(data)
        console.log(data[0])

    })
})
}

  return (
    <>
    
    <div className='grid grid-cols-2 gap-5 items-center justify-center '>
     
    <Link href='/menu-page' className=' h-full w-full md:w-full md:h-full'>
    <motion.div
          className='mx-auto relative'
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
        >
      <h2 className='absolute inset-0 flex justify-center items-center rounded-lg bg-[#1B1918] bg-opacity-50 hover:bg-opacity-75 text-white text-3xl font-bold z-10 transition duration-700' >Bar</h2>
      <div className='flex justify-center items-center w-full h-full aspect-square overflow-hidden rounded-lg'>
        <Image 
          src='/bar1.webp'
          alt="hero image"
          layout=''
          width={400}
          height={400}
          className=' '
        />
      </div>
    </motion.div>
  </Link>
          <Link href='/shisha-page' className='h-full w-full md:w-full md:h-full '>
          <motion.div
          className='mx-auto  md:mt-0 relative rounded-lg'
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1, delay: 0.25 }} // You can add delay for staggered animation
        >
      <h2 className='absolute inset-0 flex justify-center items-center rounded-lg bg-[#1B1918] bg-opacity-50 hover:bg-opacity-75 text-white text-3xl font-bold z-10 transition duration-700' >
          Shisha
      </h2>
      <div className='flex justify-center items-center w-full h-full aspect-square overflow-hidden rounded-lg ' >
        <Image 
          src='/shisha1.webp'
          alt="hero image"
          layout=''
          width={400}
          height={400}
          className='  '
        />
      </div>
      </motion.div>
  </Link>
          <Link href='/food-page' className='h-full w-full md:w-full md:h-full '>
          <motion.div
          className='mx-auto  md:mt-0 relative rounded-lg'
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1, delay: 0.5 }} // You can add delay for staggered animation
        >
      <h2 className='absolute inset-0 flex justify-center items-center rounded-lg bg-[#1B1918] bg-opacity-50 hover:bg-opacity-75 text-white text-3xl font-bold z-10 transition duration-700' >
          Snacks
      </h2>
      <div className='flex justify-center items-center w-full h-full aspect-square overflow-hidden rounded-lg ' >
        <Image 
          src='/snacker.webp'
          alt="hero image"
          layout=''
          width={400}
          height={400}
          className='  '
        />
      </div>
      </motion.div>
  </Link>
          <Link href='/tea-page' className='h-full w-full md:w-full md:h-full '>
          <motion.div
          className='mx-auto  md:mt-0 relative rounded-lg'
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1, delay: 0.75 }} // You can add delay for staggered animation
        >
      <h2 className='absolute inset-0 flex justify-center items-center rounded-lg bg-[#1B1918] bg-opacity-50 hover:bg-opacity-75 text-white text-3xl font-bold z-10 transition duration-700' >
          Tea
      </h2>
      <div className='flex justify-center items-center w-full h-full aspect-square overflow-hidden rounded-lg ' >
        <Image 
          src='/tea.webp'
          alt="hero image"
          layout=''
          width={400}
          height={400}
          className='  '
        />
      </div>
      </motion.div>
  </Link>
    {createdCategories[0]?.available === true ? (
      
  <Link href='/offer-page' className='col-span-2 w-full h-full md:w-full md:h-full'>
  <motion.div
    className='mx-auto md:mt-0 relative rounded-lg'
    initial="hidden"
    animate="visible"
    variants={variants}
    transition={{ duration: 1, delay: 1 }}
  >
    <h2 className='absolute inset-0 flex justify-center items-center rounded-lg bg-[#1B1918] bg-opacity-50 hover:bg-opacity-75 text-white text-3xl font-bold z-10 transition duration-700'>
      {createdCategories[0]?.name}
    </h2>
    <div className='flex justify-center items-center w-full h-full overflow-hidden rounded-lg aspect-w-16 aspect-h-9'>
      <Image 
        src='/vday.webp'
        alt="Tea image"
        layout='responsive'
        width={400}
        height={125} 
        className=''
      />
    </div>
  </motion.div>
</Link>
    ): null}
    </div>
   
    
    </>
  )
}

export default MenuPhotos