'use client'

import React, { useState } from 'react'
import Tabs  from '@/components/Tabs'
import {useProfile} from '@/components/useProfile'
import ImageUpload from '@/components/ImageUpload'
import { toast } from 'react-hot-toast'
import Link from 'next/link'
import { PlusCircle,Loader2 } from 'lucide-react'

const MenuPage = () => {

    const {loading,isAdmin} = useProfile()

    if(loading) return <div className='text-3xl font-bold text-center flex justify-center mt-10 items-center '><Loader2 className='animate-spin ' /></div>
    if(!isAdmin) return <div className='text-3xl font-bold text-center'>You are not an admin</div>

  return (
    <section className='mt-8 max-w-md mx-auto'>
        <Tabs isAdmin={true}/>
        <div className='flex gap-4 justify-center items-center mt-5'>
            <Link href='/menu/new' className='bg-red-500 text-white flex gap-2 px-4 py-2 rounded-full'>Add Menu Item 
            <PlusCircle />
             </Link>
        </div>

    </section>
  )
}

export default MenuPage