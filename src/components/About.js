import React from 'react'
import Carusel from './Carusel'

const About = () => {
  return (
    <section className=' md:mt-16'>
    <div class="max-w-7xl mx-auto">
        <p className='text-lg -mb-2 text-gray-500'>Let us introduce you to the <b>3035</b></p>
        <h2 className='text-3xl font-black'>About Us</h2>
        <div className='mt-4'>
        <p className='text-lg text-start mx-1 text-gray-100'>Welcome to <strong>3035</strong>, the ultimate destination for shisha enthusiasts and those looking to relax and unwind. Our lounge bar offers a unique and exotic experience, providing a sophisticated ambiance and an extensive selection of the finest flavored shisha.</p>
        <br />
        <Carusel />
        {/*
        <p className='text-lg text-gray-100'>Indulge in our wide range of flavors, from traditional favorites to our signature mixes, all while enjoying our comfortable seating and chic decor. Our attentive staff are always on hand to recommend the perfect blend and ensure your comfort and satisfaction.</p>
        <br />
        <p className='text-lg text-gray-100'>At CODE3035, we&apos;re more than just a shisha bar. We&apos;re a community. Join us and become part of the CODE3035 family. We look forward to serving you and creating exceptional experiences that you&apos;ll cherish.</p> */}
        </div>
    </div>
</section>
  )
}

export default About