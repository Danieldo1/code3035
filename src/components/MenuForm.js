'use client'


import React, { useState, useEffect } from 'react'
import { useProfile } from '@/components/useProfile'
import Tabs  from '@/components/Tabs'
import ImageUpload from '@/components/ImageUpload'
import { toast } from 'react-hot-toast'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ChevronLeftCircle,Loader2,XCircle,Plus } from 'lucide-react'

const MenuForm = ({handleFormSubmit,menuItem}) => {
    const [image, setImage] = useState(menuItem?.image || '')
    const [name, setName] = useState(menuItem?.name || '')
    const [description, setDescription] = useState(menuItem?.description || '')
    const [price, setPrice] = useState(menuItem?.price || '')
    const [sizes, setSizes] = useState([])

    const addSize = () => {
        setSizes(oldSizes => {
            return [...oldSizes, {name:'', price:0}]
        })
    }
  return (
    <form className='max-w-xl mx-auto my-10' 
    onSubmit={e=> handleFormSubmit(e, {image, name, description, price, _id:menuItem?._id})}
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

                <div className='bg-gray-200 p-2 mb-2 rounded-md flex flex-col'>
                    <label>Sizes</label>
                    {sizes.length > 0 && sizes.map((size, index) => (
                        <div key={index} className='flex gap-2 my-2 items-end' >
                            <div>
                                <label>Size</label>
                                <input type="text"
                                value={size.name}
                                onChange={e => {
                                    setSizes(oldSizes => {
                                        oldSizes[index].name = e.target.value
                                        return [...oldSizes]
                                    })
                                }}
                                className='w-full p-2 border border-gray-300 rounded-md ' placeholder='Size' />
                            </div>
                            <div>
                                <label>Extra Price</label>
                                <input type="text"
                                value={size.price}
                                onChange={e => {
                                    setSizes(oldSizes => {
                                        oldSizes[index].price = e.target.value
                                        return [...oldSizes]
                                    })
                                }}
                                className='w-full p-2 border border-gray-300 rounded-md ' placeholder='Additional Price' />
                            </div>
                            <div>
                                <button onClick={() => setSizes(oldSizes => oldSizes.filter((_, i) => i !== index))} 
                                className='bg-red-500 text-white p-2 rounded-full'
                                type='button'
                                >
                                <XCircle />
                                </button>
                            </div>
                        </div>
                    ))}
                    <button onClick={addSize} className='bg-white w-full flex items-center justify-center px-4 py-2 rounded-md'>
                    <Plus />
                        Add Size
                         </button>
                </div>
            </div>
        </div>
         <button type='submit' className='bg-red-500 text-white w-full px-4 py-2 rounded-full'> Save</button>
    </form>
  )
}

export default MenuForm