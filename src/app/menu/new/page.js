'use client'

import React, { useState } from 'react'
import { useProfile } from '@/components/useProfile'
import Tabs  from '@/components/Tabs'
import ImageUpload from '@/components/ImageUpload'
import { toast } from 'react-hot-toast'
import Link from 'next/link'
import { ChevronLeftCircle,Loader2 } from 'lucide-react'

const NewMenuItem = () => {

    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    const {loading,isAdmin} = useProfile()

    if(loading) return <div className='text-3xl font-bold text-center flex justify-center mt-10 items-center '><Loader2 className='animate-spin ' /></div>
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

<div className='flex gap-4 justify-between items-center mt-5 text-center max-w-xl mx-auto'>
    <Link href='/menu' className='text-red-500 flex text-center'>
    <ChevronLeftCircle />
    Back
    </Link>
        <h2 className='text-3xl  font-bold text-center'>Add New Menu Item</h2>

</div>

        <form className='max-w-xl mx-auto my-10' onSubmit={handleFormSubmit}>
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
                </div>
            </div>
             <button type='submit' className='bg-red-500 text-white w-full px-4 py-2 rounded-full'> Save</button>
        </form>
    </section>
  )
}

export default NewMenuItem