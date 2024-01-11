'use client'

import React, { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'


const MenuPageMain = () => {
    const [categories, setCategories] = useState([])
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        setLoading(true)
        fetch('/api/categories').then(response=>{response.json().then(data=>{
            setCategories(data)
        })
    })
        fetch('/api/menu').then(response=>{response.json().then(data=>{
            setMenu(data)
        })
    })
    setLoading(false)
    },[])

  
  return (
    <section>
    <h1 className='text-3xl font-bold text-center'>Beverages Menu</h1>

    {loading ? (
    
    <div className='text-3xl font-bold text-center flex justify-center mt-10 items-center '><Loader2 className='animate-spin ' /></div>
    
    ):(
        <>
           {categories.length > 0 && (
                <div className='flex flex-row flex-wrap sticky top-[50px] z-20 bg-[#1B1918]' >
                    {categories.map(c => (
                    <div key={c._id} className='mt-10 mx-4'>
                        <Link href={`#${c.name}`} scroll={true} >
                        <button>
                            <h2 >
                            {c.name}
                            </h2>
                        </button>
                        </Link>
                    </div>
                    ))}
                </div>
                )}
     

        {categories.length > 0 && (
            <div className=' flex-1 gap-5 justify-stretch w-full items-center'> 
      {categories.map(c => (
          <div key={c._id} className='mt-10 mx-4'>
          <button id={c.name}  className='items-center justify-center text-center mb-10 w-full category-section'>
            <h2 className='text-center font-bold text-3xl '>
              {c.name}
            </h2>
          </button>
          
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

export default MenuPageMain