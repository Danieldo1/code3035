'use client';

import React from 'react';
import Image from 'next/image';
import { ParallaxBanner } from 'react-scroll-parallax';
const BentoBox = () => {
  // Sample data for the bento boxes
  const bentoData = [
    { id: 1, imageSrc: '/bar1.webp', textH: 'Dive into the 3035', text: 'Experience a new level of Lounge Bar with premium beverages and specialty cocktails crafted by our expert bartenders' },
    { id: 2, imageSrc: '/drink.webp', textH: 'Sip Artisanal Elixirs', text: 'Savor the art of mixology with our handcrafted teas, infused with exotic flavors and aromatic bliss' },
    { id: 3, imageSrc: '/shisha1.webp', textH: 'Exquisite Shisha', text: 'Indulge in top-tier shisha selections, featuring premium tobacco blends and a refined smoking experience' },
    { id: 4, imageSrc: '/table.webp', textH: 'Chill in Style', text: 'Unwind in our urbane Lounge Bar, where chic décor meets relaxed vibes for your perfect escape' },
    { id: 5, imageSrc: '/barlounge.webp', textH: 'Play & Revel', text: 'Engage in lively entertainment with our latest PS5 games and classic board games, perfect for groups' },
    { id: 6, imageSrc: '/tea.webp', textH: 'Savor the Art of Tea ',text: 'Indulge in the art of tea with our handcrafted tea blends, crafted with the finest ingredients from fine Chinese teas, and a refreshing experience to traditional teas and blends' },
    // { id: 7, imageSrc: 'image7.jpg', text: 'Item 7' },
    // { id: 8, imageSrc: 'image8.jpg', text: 'Item 8' }
  ];

  return (
    <div className="flex flex-wrap  justify-center lg:justify-evenly lg:items-stretch">
    <div className="w-full lg:w-[30%]  mb-4 lg:mb-0 lg:mr-4">
      <div className="border-stone-300 border-2 p-4 rounded-md lg:h-full shadow-md">
      <ParallaxBanner 
      layers={[
        {image: bentoData[0].imageSrc, speed: -15},
      ]}
      className="w-full h-64 grayscale-[60%]  object-cover mb-4 shadow-md rounded-md"
      />
        {/* <img
          src={bentoData[0].imageSrc}
          alt={`Item 1`}
         
        /> */}
        <p className="text-center text-stone-300 font-bold text-lg tracking-wide">{bentoData[0].textH}</p>
        <div>
          <p className="text-center text-stone-300 font-normal text-md">{bentoData[0].text}</p>
        </div>
      </div>
    </div>

    <div className="w-full  lg:w-[65%] grid grid-cols-2 gap-4 lg:gap-8 flex-nowrap">
      {bentoData.slice(1,5).map((item, index) => (
        <div key={index} className="w-full ">
          <div className="border-stone-300 border-2 p-4  h-full rounded-md shadow-md flex flex-col justify-start">
          <ParallaxBanner 
          layers={[
            {image: item.imageSrc, speed: -5},
          ]}
          className="w-full h-36 grayscale-[60%] object-cover items-center justify-center mb-4 rounded-md shadow-md"
          />
            {/* <img
              src={item.imageSrc}
              alt={`Item ${index + 2}`}
          
            />    */}
            <p className="text-center text-stone-300 font-bold text-lg mb-4 tracking-wide">{item.textH}</p>
            <div>
              <p className="text-center text-stone-300 font-normal text-md">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="w-full lg:w-full mt-4 ">
      <div className="border-stone-300 border-2 p-4 rounded-md shadow-md">
      <ParallaxBanner 
      layers={[
        {image: bentoData[5].imageSrc, speed: -15},
      ]}
      className="w-full h-64 grayscale-[60%]  object-cover mb-4 shadow-md rounded-md"
      />
          <p className="text-center text-stone-300 font-bold text-lg tracking-wide mb-4">{bentoData[5].textH}</p>
        <div>
          <p className="text-center text-stone-300 font-normal text-md">{bentoData[5].text}</p>
        </div>
      </div>
    </div>

  </div>
    
  );
};

export default BentoBox;