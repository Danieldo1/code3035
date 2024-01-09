'use client'

import React, { useState } from 'react'
import Tabs  from '@/components/Tabs'
import {useProfile} from '@/components/useProfile'
import ImageUpload from '@/components/ImageUpload'
import { toast } from 'react-hot-toast'

const MenuPage = () => {
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    const {loading,isAdmin} = useProfile()

    if(loading) return <div className='text-3xl font-bold text-center'>Loading...</div>
    if(!isAdmin) return <div className='text-3xl font-bold text-center'>You are not an admin</div>


    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const savingPromise= new Promise( async(resolve, reject) => {
            const response= await fetch('/api/menu', {
                 method: 'POST',
                 body: JSON.stringify({image, name, description, price}),
                 headers: {
                     'Content-Type': 'application/json'
                 }
             })
            
             if(response.ok) 
             resolve()
             else
             reject()
        })

        await toast.promise(savingPromise, {
            loading: 'Saving Menu Item',
            success: 'Menu Item Saved',
            error: 'Error Saving Menu Item'
        })
    }

  return (
    <section className='mt-8 '>
        <Tabs isAdmin={true}/>


        <form className='max-w-xl mx-auto my-10' onSubmit={handleFormSubmit}>
        <div className='flex gap-2 items-start'>
                <div className='w-1/2 text-center'>
                    <ImageUpload link={image} setLink={setImage}/>
                </div>
                <div>
                    <label>Menu Item</label>
                    <input type="text" 
                    value={name}
                    onChange={e =>setName(e.target.value) }
                    className='w-full p-2 border border-gray-300 rounded-md' placeholder='Category Name' />
                
                    <label>Description</label>
                    <input type="text" 
                    value={description}
                    onChange={e =>setDescription(e.target.value) }
                    className='w-full p-2 border border-gray-300 rounded-md' placeholder='Category Name' />
                
                    <label>Price</label>
                    <input type="text" 
                    value={price}
                    onChange={e =>setPrice(e.target.value) }
                    className='w-full p-2 border border-gray-300 rounded-md' placeholder='Category Name' />
                
                    <button type='submit' className='bg-red-500 text-white w-full px-4 py-2 rounded-full'> Save</button>
                </div>

            </div>
        </form>
    </section>
  )
}

export default MenuPage