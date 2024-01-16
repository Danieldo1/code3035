'use client'

import React, { useState } from 'react';
import { XIcon,Menu } from 'lucide-react'
import Link from 'next/link'
import { motion,AnimatePresence } from "framer-motion";

const YourComponent = ({ categories,handleCategoryClick }) => {
  // State to manage popup visibility
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  // Function to toggle the popup visibility
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  const startCloseAnimation = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
    {/* <div className='z-50 w-7 h-6  bg-[#1B1918] sticky top-[90px] cursor-pointer' onClick={togglePopup}> */}
    <Menu size={28} strokeWidth={2} className='relative top-[60px] bg-[#1B1918] w-7 h-6 cursor-pointer left-0 ' onClick={togglePopup} />
    {/* </div> */}
    <AnimatePresence>
    {isPopupVisible && (
  <motion.div className='fixed inset-0 w-full h-full flex items-center justify-center bg-[#1B1918]'
 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
  >
    <div className='relative w-full h-full max-w-2xl mx-auto'>
      <motion.button className='absolute top-[75px] left-1 m-4' onClick={() => {togglePopup(); startCloseAnimation()}}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}

      >
        <XIcon className='w-6 h-6 text-white' />
      </motion.button>

      <div className='h-[80%] overflow-y-auto mt-36 w-full justify-evenly'>
        {categories.map((c) => (
            <Link href={`#${c.name}`} scroll={true} key={c._id}  className='w-full justify-center items-center flex pr-8  '>
          <div className='w-full  hover:bg-gray-900 py-2 rounded-lg pl-8' onClick={() => {setActiveCategory(c._id); handleCategoryClick(c._id); togglePopup();}}>
              <button >
                <h2 
                  className={`text-left uppercase  ${
                    activeCategory === c._id
                    ? 'underline font-bold  decoration-solid  underline-offset-4 duration-500 transition delay-200'
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
  </motion.div>
)}
   </AnimatePresence>

   
    </>
  );
};

export default YourComponent;