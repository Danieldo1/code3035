'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'

const ShishaMainPage = () => {
    const [categories, setCategories] = useState([])
    const [menu, setMenu] = useState([])
    const [activeCategory, setActiveCategory] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/smoke-categories').then(response=>{response.json().then(data=>{
            setCategories(data)
        })
    })
        fetch('/api/smoke-menu').then(response=>{response.json().then(data=>{
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
            if (sectionTop + 110 < window.scrollY) {
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
    
  
  return (
      <section className='mt-10'>
    <h1 className='text-5xl font-black tracking-wider text-center'>Hookah Menu</h1>
    <p className='text-lg text-gray-300 text-center px-5 mt-2'>Dive into an aromatic journey with our diverse hookah selections. From timeless classics to exotic blends, each puff is an invitation to relax and socialize in style.</p>
    {loading ? (
    
    <div className='text-3xl font-bold text-center flex justify-center mt-10 items-center '><Loader2 className='animate-spin ' /></div>
    
    ):(
        <>
        {categories.length > 0 && (
        <div className='flex flex-row flex-wrap sticky top-[50px] z-20 bg-[#1B1918]'>
          {categories.map((c) => (
            <div key={c._id} className='mt-10 mx-4 '>
              <a href={`#${c.name}`} onClick={() => setActiveCategory(c._id)}>
                <h2
                  className={` ${
                    activeCategory === c._id
                      ? 'underline font-bold text-green-300 decoration-solid decoration-green-300 underline-offset-4 duration-500 transition delay-200'
                      : ''
                  }`}
                >
                  {c.name}
                </h2>
              </a>
            </div>
          ))}
        </div>
      )}
            
         {categories.length > 0 && (
            <div className=' flex-1 gap-5 justify-stretch w-full items-center'> 
      {categories.map(c => (
          <div key={c._id} className='mt-10 mx-4'>
          <div id={c.name} className='mx-4 category-section'>
              <h2  className='text-center font-bold text-3xl'>{c.name}</h2>
            </div>
          
                <div className='flex flex-row flex-wrap flex-1  justify-stretch w-full '>
                    {menu.filter(item => item.category === c._id).map((item) => (
                        <>
                        <div key={item._id} className='flex justify-between w-full  items-center gap-2   bg-[#1B1918]'>
                            <div className='flex justify-between items-center gap-5'>
                                <div className=''>
                                    <h3 className='text-2xl font-bold'>{item.name}</h3>
                                    <p className='text-lg text-gray-500'>{item.description}</p>
                                    { item.sizes.map((size) => (
                                        <p key={size._id}> - {size.name}</p>
                                        ))}
                                    {item.extras.map((extra) => (
                                        <p className='text-sm  text-gray-500 capitalize' key={extra._id}>{extra.name}</p>
                                        ))}
                                </div>
                            </div>
                            <div className='text-center'>
                                <p className='text-2xl font-bold '>{item.price}</p>
                                    {item.sizes.map((size) => (
                                        <p className='text-sm mt-10 text-gray-500 ' key={size._id}>{size.price + item.price}€</p>
                                        ))}
                                        {item.extras.map((extra) => (
                                            <p className='text-sm mt-1.5 text-gray-500 capitalize' key={extra._id}>+ {extra.price}</p>
                                            ))}
                            </div>
                        </div>
                                            <div className='border border-white   mx-auto  my-5 w-full' />
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

export default ShishaMainPage