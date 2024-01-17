'use client'

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carusel = () => {
  return (
    <section className='md:mt-10 md:mb-10 min-h-[200px] mx-auto'>
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
            className='my-auto'
         >
                <div  className='mx-2 md:mx-5'>
                    <img src="bar.webp" />  
                </div>
                <div  className='mx-2 md:mx-5'>
                    <img src="cocktail.jpeg" />
                </div>
                <div  className='mx-2 md:mx-5'>
                    <img src="shisha.webp" />
                </div>
            </Carousel>
    </section>
  )
}

export default Carusel