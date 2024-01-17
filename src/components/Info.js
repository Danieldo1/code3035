import React from 'react'
import BentoBox from './BentoBox'

const Info = () => {
  return (
    <section className='mt-10 md:mt-16'>
    <div class="max-w-7xl mx-auto">
        <p className='text-lg -mb-2 text-gray-500'>What we offer at <b>3035</b></p>
        <h2 className='text-3xl font-black'>Our Specialties</h2>
        <div className='mt-4'>
         <p className='text-lg text-gray-100'>Since our opening, we&apos;ve been dedicated to bringing you an unparalleled shisha experience. Our expertly crafted blends, top-notch service, and luxurious setting make every visit a memorable one. Whether it&apos;s a casual outing with friends or a special celebration,3035 is the perfect retreat from the bustle of everyday life.</p>
        </div>
        <div className='mt-4'>
            <BentoBox />
        </div>
    </div>
    </section>
  )
}

export default Info