'use client'

import React, { useState } from 'react'
import { useProfile } from '@/components/useProfile'
import Tabs  from '@/components/Tabs'
import ImageUpload from '@/components/ImageUpload'
import { toast } from 'react-hot-toast'
import Link from 'next/link'
import { ChevronLeftCircle,Loader2 } from 'lucide-react'
import MenuForm from '@/components/MenuForm'

const NewMenuItem = () => {

   
    const {loading,isAdmin} = useProfile()

    if(loading) return <div className='text-3xl font-bold text-center flex justify-center mt-10 items-center '><Loader2 className='animate-spin ' /></div>
    if(!isAdmin) return <div className='text-3xl font-bold text-center'>You are not an admin</div>


    const handleFormSubmit = async (e,data) => {
        e.preventDefault()
        const savingPromise= new Promise( async(resolve, reject) => {
            const response= await fetch('/api/menu', {
                 method: 'POST',
                 body: JSON.stringify(data),
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

<MenuForm handleFormSubmit={handleFormSubmit}menuItem={null} />

    </section>
  )
}

export default NewMenuItem