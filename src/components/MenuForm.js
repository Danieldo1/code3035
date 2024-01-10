'use client'

import React, { useState, useEffect } from 'react'
import ImageUpload from '@/components/ImageUpload'
import MenuItemsProp from './MenuItemsProp'

const MenuForm = ({handleFormSubmit,menuItem}) => {
    const [image, setImage] = useState(menuItem?.image || '')
    const [name, setName] = useState(menuItem?.name || '')
    const [description, setDescription] = useState(menuItem?.description || '')
    const [price, setPrice] = useState(menuItem?.price || '')
    const [sizes, setSizes] = useState(menuItem?.sizes || [])
    const [extras, setExtras] = useState(menuItem?.extras || [])

   
  return (
    <form className='max-w-xl mx-auto my-10' 
    onSubmit={e=> handleFormSubmit(e, {image, name, description, price, _id:menuItem?._id, sizes, extras})}
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
                className='w-full mb-5 p-2 border border-gray-300 rounded-md' placeholder='Menu Item' />
            
                <label >Description</label>
                <input type="text" 
                value={description}
                onChange={e =>setDescription(e.target.value) }
                className='mb-5 w-full p-2 border border-gray-300 rounded-md ' placeholder='Description' />
            
                <label >Price</label>
                <input type="text" 
                value={price}
                onChange={e =>setPrice(e.target.value) }
                className='mb-5 w-full p-2 border border-gray-300 rounded-md ' placeholder='Price' />

                <MenuItemsProp props={sizes} setProps={setSizes} name={'Sizes'} buttonLabel={'Add Size'} />

                <MenuItemsProp props={extras} setProps={setExtras} name={'Extras'} buttonLabel={'Add Extra'} />
            </div>
        </div>
         <button type='submit' className='bg-red-500 text-white w-full px-4 py-2 rounded-full'> Save</button>
    </form>
  )
}

export default MenuForm