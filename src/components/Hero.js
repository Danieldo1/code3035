import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='grid'>
        <div>
            <h1 className='text-5xl font-bold '>Experience new level of <br />Lounge Bar</h1>
            <p className='text-lg my-4 text-gray-500'>Start your journey with us</p>
            <div className='flex gap-4'>
                <button className='bg-red-500 text-white px-4 py-2 rounded-full'>Get Started</button>
                <button className='bg-red-500 text-white px-4 py-2 rounded-full'>Learn More</button>
            </div>
        </div>
          <div className='relative hidden md:block'>
              <Image src="/logo1.webp" alt="hero image" width={400} height={400}/>
          </div>
    </section>
  )
}

export default Hero