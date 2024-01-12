'use client'

import React, { useEffect, useState } from 'react'
import { Loader2,BetweenHorizontalStart } from 'lucide-react'
import Link from 'next/link'
import YourComponent from '@/components/YourComponent'


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


  return (
    <section className='mt-20' >
    <h1 className='text-5xl font-black tracking-wider text-center'>Beverages Menu</h1>
    <p className='text-lg text-gray-300 text-center px-5 mt-2'>Elevate your taste buds with our eclectic mix of classic and contemporary drinks. Each sip promises a blend of quality and creativity, perfect for any occasion.</p>
    {loading ? (
    
    <div className='text-3xl font-bold text-center flex justify-center mt-10 items-center '><Loader2 className='animate-spin ' /></div>
    
    ):(
        <>

   {categories.length > 0 && (
    <>
      {/* <div className='z-50 w-7 h-6  bg-[#1B1918] sticky top-[90px]'>
      <BetweenHorizontalStart className='absolute  left-0 ' />
    </div> */}
    <div className='sticky top-[30px]  z-30'>
      <YourComponent categories={categories} handleCategoryClick={handleCategoryClick} />
    </div>

     <div className='flex pl-5 overflow-hidden flex-row snap-mandatory snap-x flex-nowrap scrollbar-hide sticky top-[50px] z-20 bg-[#1B1918] overflow-x-auto'>
    {categories.map((c) => (
      <>
      <div key={c._id} className='pt-10 mx-4 ml-5   whitespace-nowrap '>
        <Link href={`#${c.name}`} scroll={true}>
          <button onClick={() => {setActiveCategory(c._id); handleCategoryClick(c._id)}}>
            <h2 
              className={`${
                activeCategory === c._id
                ? 'underline snap-center  font-bold text-green-300 decoration-solid decoration-green-300 underline-offset-4 duration-500 transition delay-200'
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
     

        {categories.length > 0 && (
            <div className=' flex-1 gap-5 justify-stretch w-full items-center'> 
      {categories.map(c => (
          <div id={c.name}  key={c._id} className='pt-10 mx-4'>
         <button className='items-center justify-center text-center pb-10 w-full '>
              <h2   className='text-center pb-3 font-bold text-3xl'>{c.name}</h2>
            </button>
          
                <div className='flex flex-row flex-wrap flex-1 snap-mandatory snap-x  justify-stretch w-full '>
                    {menu.filter(item => item.category === c._id).map((item) => (
                        <>
                        <div key={item._id} className='flex snap-center justify-between w-full  items-center gap-2   bg-[#1B1918]'>
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

export default MenuPageMain