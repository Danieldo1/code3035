import React from 'react';
import Image from 'next/image';
const BentoBox = () => {
  // Sample data for the bento boxes
  const bentoData = [
    { id: 1, imageSrc: '/bar.webp', textH: 'Dive into the 3035', text: 'Experience a new level of Lounge Bar with premium beverages and specialty cocktails crafted by our expert bartenders' },
    { id: 2, imageSrc: '/cocktail.jpeg', textH: 'Sip Artisanal Elixirs', text: 'Savor the art of mixology with our handcrafted teas, infused with exotic flavors and aromatic bliss' },
    { id: 3, imageSrc: '/shisha.webp', textH: 'Savor Exquisite Shisha', text: 'Indulge in top-tier shisha selections, featuring premium tobacco blends and a refined smoking experience' },
    { id: 4, imageSrc: '/smoke1.jpeg', textH: 'Chill in Style', text: 'Unwind in our urbane Lounge Bar, where chic décor meets relaxed vibes for your perfect escape' },
    { id: 5, imageSrc: '/logo1.webp', textH: 'Play & Revel', text: 'Engage in lively entertainment with our latest PS5 games and classic board games, perfect for groups' }
    // { id: 6, imageSrc: '/logo2.webp', text: 'Item 6' },
    // { id: 7, imageSrc: 'image7.jpg', text: 'Item 7' },
    // { id: 8, imageSrc: 'image8.jpg', text: 'Item 8' }
  ];

  return (
    <div className="flex flex-wrap  justify-center lg:justify-evenly lg:items-stretch">
    <div className="w-full lg:w-[30%]  mb-4 lg:mb-0 lg:mr-4">
      <div className="bg-slate-100 p-4 rounded-md lg:h-full shadow-md">
        <img
          src={bentoData[0].imageSrc}
          alt={`Item 1`}
          className="w-full h-64 object-cover mb-4 rounded-md"
        />
        <p className="text-center text-[#1E1E1E] font-bold text-lg tracking-wide">{bentoData[0].textH}</p>
        <div>
          <p className="text-center text-[#1E1E1E] font-normal text-md">{bentoData[0].text}</p>
        </div>
      </div>
    </div>

    <div className="w-full  lg:w-[65%] grid grid-cols-2 gap-4 lg:gap-8 flex-nowrap">
      {bentoData.slice(1).map((item, index) => (
        <div key={index} className="w-full ">
          <div className="bg-slate-100 p-4  h-full rounded-md shadow-md flex flex-col justify-evenly">
            <img
              src={item.imageSrc}
              alt={`Item ${index + 2}`}
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <p className="text-center text-[#1E1E1E] font-bold text-lg tracking-wide">{item.textH}</p>
            <div>
              <p className="text-center text-[#1E1E1E] font-normal text-md">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="w-full lg:w-full mt-4 ">
      <div className="bg-slate-100 p-4 rounded-md shadow-md">
        <img
          src={bentoData[4].imageSrc}
          alt={`Item 1`}
          className="w-full h-64 object-cover mb-4 rounded-md"
        />
          <p className="text-center text-[#1E1E1E] font-bold text-lg tracking-wide">{bentoData[4].textH}</p>
        <div>
          <p className="text-center text-[#1E1E1E] font-normal text-md">{bentoData[4].text}</p>
        </div>
      </div>
    </div>

  </div>
    
  );
};

export default BentoBox;