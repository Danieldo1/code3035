'use client'

import React, { useState } from 'react';
import { XIcon,BetweenHorizontalStart } from 'lucide-react'
import Link from 'next/link'

const YourComponent = ({ categories,handleCategoryClick }) => {
  // State to manage popup visibility
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  // Function to toggle the popup visibility
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <>
    {/* <div className='z-50 w-7 h-6  bg-[#1B1918] sticky top-[90px] cursor-pointer' onClick={togglePopup}> */}
      <BetweenHorizontalStart className='relative top-[60px] bg-[#1B1918] w-7 h-6 cursor-pointer left-0 ' onClick={togglePopup} />
    {/* </div> */}

    {isPopupVisible && (
  <div className='fixed inset-0 w-full h-full flex items-center justify-center bg-[#1B1918]'>
    <div className='relative w-full h-full max-w-2xl mx-auto'>
      <button className='absolute top-[75px] left-1 m-4' onClick={togglePopup}>
        <XIcon className='w-6 h-6 text-white' />
      </button>

      <div className='h-full overflow-y-auto mt-36 w-full justify-evenly'>
        {categories.map((c) => (
            <Link href={`#${c.name}`} scroll={true} className='w-full justify-center items-center flex px-8  '>
          <div key={c._id} className='w-full  hover:bg-gray-900 py-2 rounded-lg pl-8' onClick={() => {setActiveCategory(c._id); handleCategoryClick(c._id); togglePopup();}}>
              <button >
                <h2 
                  className={`text-left uppercase  ${
                    activeCategory === c._id
                    ? 'underline font-bold text-green-300 decoration-solid decoration-green-300 underline-offset-4 duration-500 transition delay-200'
                    : 'text-white '
                  }`}
                >
                  {c.name}
                </h2>
              </button>
          </div>
            </Link>
        ))}
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default YourComponent;