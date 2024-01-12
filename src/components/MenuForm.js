'use client'

import React, { useState, useEffect } from 'react'
import ImageUpload from '@/components/ImageUpload'
import MenuItemsProp from './MenuItemsProp'
import { CheckCheck  } from 'lucide-react'
import { usePathname } from 'next/navigation'

const MenuForm = ({handleFormSubmit,menuItem}) => {
    const [image, setImage] = useState(menuItem?.image || '')
    const [name, setName] = useState(menuItem?.name || '')
    const [description, setDescription] = useState(menuItem?.description || '')
    const [price, setPrice] = useState(menuItem?.price || '')
    const [sizes, setSizes] = useState(menuItem?.sizes || [])
    const [extras, setExtras] = useState(menuItem?.extras || [])
    const [selectedCategory, setSelectedCategory] = useState(menuItem?.category || '')
    const [category, setCategory] = useState([])
    const path = usePathname()

   useEffect(() => {
   
    let url = ''
    // Determine which URL to use based on the path
    if (/menu/.test(path)) {
      url = '/api/categories';
    } else if (/shisha/.test(path)) {
      url = '/api/smoke-categories';
    }
  
    // Only proceed if a URL has been set
    if (url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setCategory(data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    }
  }, [path]);


  return (
    <form className='max-w-xl mx-auto mt-10' 
    onSubmit={e=> handleFormSubmit(e, {image, name, description, price, _id:menuItem?._id, sizes, extras, category:selectedCategory})}
    >
    <div className='flex gap-2 items-start'>
            <div className='w-1/2 text-center'>
                <ImageUpload link={image} setLink={setImage}/>
            </div>
            <div className='gap-5'>
                <label>Menu Item</label>
                <input type="text" 
                value={name}
                onChange={e =>setName(e.target.value) }
                className='w-full mb-5 p-2 border text-black border-gray-300 rounded-md' placeholder='Menu Item' />
            
                <label >Description</label>
                <input type="text" 
                value={description}
                onChange={e =>setDescription(e.target.value) }
                className='mb-5 w-full p-2 border border-gray-300 text-black rounded-md ' placeholder='Description' />
            
                <label>Category</label>
                <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className='mb-5 w-full p-2 border border-gray-300 text-black rounded-md '>
                  {category?.length >0 && category.map((c,i)=>(
                    <option key={i} value={c._id} >{c.name}</option>
                  )
                  )}
                </select>

                <label >Price</label>
                <input type="text" 
                value={price}
                onChange={e =>setPrice(e.target.value) }
                className='mb-5 w-full p-2 border border-gray-300 text-black rounded-md ' placeholder='Price' />

                <MenuItemsProp props={sizes} setProps={setSizes} name={'Sizes'} buttonLabel={'Add Size'} />

                <MenuItemsProp props={extras} setProps={setExtras} name={'Extras'} buttonLabel={'Add Extra'} />
            </div>
        </div>
         <button type='submit' className='bg-green-500 hover:text-black flex justify-center gap-2 mt-2 text-white w-full px-4 py-2 rounded-full'>
         <CheckCheck />
           Save
          </button>
    </form>
  )
}

export default MenuForm