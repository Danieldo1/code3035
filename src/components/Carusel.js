'use client'

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carusel = () => {
  return (
    <section className='md:mt-10 md:mb-10 min-h-[200px] mb-5 flex justify-center items-center mx-auto '>
         <Carousel autoPlay={true} 
         emulateTouch={true}
         infiniteLoop={true}
         interval={3000}
         transitionTime={1000}
         showArrows={false}
         showStatus={false}
         showIndicators={false}
         showThumbs={false}
         centerMode={true}
         centerSlidePercentage={70}
         stopOnHover={false}
         width="100%"
         useKeyboardArrows={false}
         dynamicHeight={true}
            className='my-auto '
         >
          <div className='mx-2 md:-mx-56'>
            <img src="bar1.webp" className='w-full md:max-w-[50%] aspect-[16/24] md:aspect-auto' />
          </div>
          <div className='mx-2 md:-mx-56'>
            <img src="table.webp" className='w-full md:max-w-[50%] aspect-[16/24] md:aspect-auto' />
          </div>
          <div className='mx-2 md:-mx-56'>
            <img src="barlounge.webp" className='w-full md:max-w-[50%] aspect-[16/24] md:aspect-auto' />
          </div>
          <div className='mx-2 md:-mx-56'>
            <img src="bartable.webp" className='w-full md:max-w-[50%] aspect-[16/24] md:aspect-auto' />
          </div>
          <div className='mx-2 md:-mx-56'>
            <img src="drink.webp" className='w-full md:max-w-[50%] aspect-[16/24] md:aspect-auto' />
          </div>
          <div className='mx-2 md:-mx-56'>
            <img src="drink2.webp" className='w-full md:max-w-[50%] aspect-[16/24] md:aspect-auto' />
          </div>
          <div className='mx-2 md:-mx-56'>
            <img src="wine.webp" className='w-full md:max-w-[50%] aspect-[16/24] md:aspect-auto' />
          </div>
          <div className='mx-2 md:-mx-56'>
            <img src="tea.webp" className='w-full md:max-w-[50%] aspect-[16/24] md:aspect-auto' />
          </div>
          <div className='mx-2 md:-mx-56'>
            <img src="shisha1.webp" className='w-full md:max-w-[50%] aspect-[16/24] md:aspect-auto' />
          </div>
            </Carousel>
    </section>
  )
}

export default Carusel