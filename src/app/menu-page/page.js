'use client'

import React, { useEffect, useState } from 'react'
import { Loader2,BetweenHorizontalStart } from 'lucide-react'
import Link from 'next/link'
import YourComponent from '@/components/YourComponent'
import { motion } from 'framer-motion';
import StaggeredText from '@/components/StaggeredText'


const MenuPageMain = () => {
    const [categories, setCategories] = useState([])
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        fetch('/api/categories').then(response=>{response.json().then(data=>{
            setCategories(data)
        })
    })
        fetch('/api/menu').then(response=>{response.json().then(data=>{
            setMenu(data)
        })
        setLoading(false)
    })
    },[loading])

    
    useEffect(() => {
      const handleScroll = () => {
        let currentCategory = null;
        categories.forEach((c) => {
          // Assuming you have a ref for your section
          const section = document.getElementById(c.name);
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop + 330 < window.scrollY) {
            currentCategory = c._id;
          }
        });
        setActiveCategory(currentCategory);
      };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [categories]);
  

    


    const handleCategoryClick = (categoryId) => {
      setActiveCategory(categoryId);
    };

    const text = "Beverages Menu";
    const textSmall = "Elevate your taste buds with our eclectic mix of classic and contemporary drinks.\nEach sip promises a blend of quality and \ncreativity, perfect for any occasion.";
    
    const letters = Array.from(text);
  
    // Define the initial and animate properties for each letter
    const letterVariants = {
      initial: { y: 20, opacity: 0 },
      animate: i => ({
        y: 0,
        opacity: 1,
        transition: {
          delay: i * 0.05, 
          ease: "easeOut"
        },
      }),
    };
  return (

    // Text up
    <section className='mt-20' >
  <h1 className='text-4xl font-black tracking-wider text-center'>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          initial="initial"
          animate="animate"
          custom={index}
          style={{ display: 'inline-block' }} 
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h1>
    <StaggeredText text={textSmall} />
    
    
    
    {loading ? (
    
    <div className='text-3xl font-bold text-center flex justify-center mt-10 items-center '><Loader2 className='animate-spin ' /></div>
    
    ):(
        <>
  {/* Categories top */}
   {categories.length > 0 && (
    <>

    <div className='sticky top-[30px]  z-30'>
      <YourComponent categories={categories} handleCategoryClick={handleCategoryClick} />
    </div>

     <div className='flex pl-5 overflow-hidden flex-row snap-x snap-proximity scroll-smooth flex-nowrap scrollbar-hide sticky top-[50px] z-20 bg-[#1B1918] overflow-x-auto'>
    {categories.map((c) => (
      <>
      <div key={c._id} className='pt-10 mx-4 ml-5   whitespace-nowrap '>
        <Link href={`#${c.name}`} scroll={true}>
          <button onClick={() => {setActiveCategory(c._id); handleCategoryClick(c._id)}}>
            <h2 
              className={`${
                activeCategory === c._id
                ? 'underline snap-center  font-bold  decoration-solid  underline-offset-4 duration-500 transition delay-200'
                : ''
              }`}
            >
              {c.name}
            </h2>
          </button>
        </Link>
      </div>
      
      </>
    ))}
   
  </div>
  </>
)}
     
{/* Menu Display */}
        {categories.length > 0 && (
            <div className=' flex-1 gap-5 justify-stretch w-full items-center'> 
      {categories.map(c => (
          <div id={c.name}  key={c._id} className='pt-10 '>
         <button className='items-center snap-center justify-center text-center flex  w-full '>
              <h2   className='text-center pb-5 font-bold text-xl'>{c.name}</h2>
            </button>
              <p className='text-sm text-gray-400 text-right'>{c.description}</p>
                <div className='flex flex-row flex-wrap flex-1 snap-mandatory snap-x  justify-stretch w-full '>
                    {menu.filter(item => item.category === c._id && item.available===true).map((item) => (
                      <>
                        <div key={item._id} className='flex  justify-between w-full  items-center gap-2   bg-[#1B1918]'>
                            <div className='flex justify-between items-center gap-5'>
                                <div className=''>
                                    {/* <p>{item.available === true ? "Available" : "Not Available"}</p> */}
                                    <h3 className='text-md font-bold'>{item.name}</h3>
    
                                    <p className='text-sm text-gray-400'>{item.description}</p>
                                    { item.sizes.map((size) => (
                                        <p key={size._id} className='text-xs text-gray-400'> - {size.name}</p>
                                        ))}
                                    {item.extras.map((extra) => (
                                        <p className='text-xs  text-gray-500 capitalize' key={extra._id}>{extra.name}</p>
                                        ))}
                                </div>
                            </div>
                            <div className='text-center'>
                                <p className='text-lg font-bold '>{item.price}</p>
                                    {item.sizes.map((size) => (
                                        <p className='text-xs mt-4 text-gray-500 ' key={size._id}>{size.price + item.price}€</p>
                                        ))}
                                        {item.extras.map((extra) => (
                                        <p className='text-xs mt-1 text-gray-500 capitalize' key={extra._id}>+ {extra.price}</p>
                                        ))}
                            </div>
                        </div>
                                            <div className='border border-white   mx-auto  my-2 w-full' />
                        </>
                    ))}
                </div>    
            </div>
        ))}
         </div> 
  )}
        </>

    )}
   
</section>
  )
}

export default MenuPageMain