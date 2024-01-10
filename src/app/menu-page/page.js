'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Loader2 } from 'lucide-react'
const MenuPageMain = () => {
    const [categories, setCategories] = useState([])
    const [menu, setMenu] = useState([])
    const [open, setOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [loading, setLoading] = useState(true)

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

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(current => current === categoryId ? null : categoryId)
    }

  return (
    <section>
    <h1 className='text-3xl font-bold text-center'>Bevarages Menu</h1>

    {loading ? (
    
    <div className='text-3xl font-bold text-center flex justify-center mt-10 items-center '><Loader2 className='animate-spin ' /></div>
    
    ):(
        <>
        
        {categories.length > 0 && categories.map(c => (
            <div key={c._id}>
            <button 
                className={`w-full flex justify-center items-center p-2 mt-5 shadow-sm shadow-white rounded-lg ${
                    selectedCategory === c._id ? 'bg-green-400 rounded-t-lg rounded-b-none' : 'bg-gray-200'
                }`}
                onClick={() => handleCategoryClick(c._id)}
                >
                <h2 className={`text-2xl font-bold ${
                    selectedCategory === c._id ? 'text-white' : 'text-[#1B1918]'
                }`}>
                    {c.name}
                </h2>
            </button>

                <div className={`${selectedCategory === c._id ? 'block' : 'hidden'}`}>
                    {menu.filter(item => item.category === c._id).map((item) => (
                        <>
                        <div key={item._id} className='flex justify-between rounded-b-lg items-center -mb-2 p-2  bg-white shadow-sm shadow-white'>
                           {/* {JSON.stringify(item)} */}
                            <div className='flex justify-between items-center gap-5'>
                                <div className='w-24 h-24 items-center flex justify-center  '> 
                                {item.image.length ===0 ? (
                                    <Image src={'/logo2.webp'} alt={item.name} width={100} height={100} className='rounded-md'/>
                                    ):(
                                        <Image src={item.image} alt={item.name} width={100} height={100} className='rounded-md' />
                                        )}
                                </div>
                                <div className='text-[#1B1918]'>
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
                                <p className='text-2xl font-bold text-[#1B1918]'>€{item.price}</p>
                                    {item.sizes.map((size) => (
                                        <p className='text-sm mt-10 text-gray-500 ' key={size._id}>€{size.price + item.price}</p>
                                        ))}
                                        {item.extras.map((extra) => (
                                         <p className='text-sm mt-1.5 text-gray-500 capitalize' key={extra._id}>+ {extra.price}</p>
                                        ))}
                            </div>
                        </div>
                        </>
                    ))}
                </div>    
            </div>
        ))}
        </>

    )}
   
</section>
  )
}

export default MenuPageMain