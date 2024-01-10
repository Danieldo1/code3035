'use client'

import React, { useEffect, useState } from 'react'
import Tabs  from '@/components/Tabs'
import {useProfile} from '@/components/useProfile'
import ImageUpload from '@/components/ImageUpload'
import { toast } from 'react-hot-toast'
import Link from 'next/link'
import { PlusCircle,Loader2,ImageOff } from 'lucide-react'
import Image from 'next/image'

const MenuPage = () => {
    const [menuItems, setMenuItems] = useState([])

    const {loading,isAdmin} = useProfile()


    useEffect(() => {
      fetch('/api/menu').then(response=>{response.json().then(data=>{
        setMenuItems(data)
      })})
    },[])

    if(loading) return <div className='text-3xl font-bold text-center flex justify-center mt-10 items-center '><Loader2 className='animate-spin ' /></div>
    if(!isAdmin) return <div className='text-3xl font-bold text-center'>You are not an admin</div>

  return (
    <section className='mt-8 mb-5 max-w-md mx-auto'>
        <Tabs isAdmin={true}/>
        <div className='flex gap-4 justify-center items-center mt-5'>
            <Link href='/menu/new' className='bg-red-500 text-white flex gap-2 px-4 py-2 rounded-full'>Add Menu Item 
            <PlusCircle />
             </Link>
        </div>
      <div className='mt-5 '>
        <h2 className='text-2xl font-bold'>Edit Menu</h2>
        {menuItems.length >0 && menuItems.map((item, index) => (
          <Link href={`/menu/edit/${item._id}`} key={index} className='flex gap-4  justify-between items-center mt-5 border p-2 rounded-lg bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center gap-5'>
              <div className='w-24 h-24 flex-col '>
                {item.image.length ===0 ? (
                    <div className='w-full h-full flex justify-center items-center'>
                      <ImageOff className='w-20 h-20 text-black' />
                    </div>
                ):  (<Image src={item.image} alt={item.name} width={100} height={100} className='rounded-lg' />)}
              </div>
              <div>
                <h3 className='text-xl font-bold text-black'>{item.name}</h3>
                <p className='text-gray-500 font-semibold line-clamp-1'>{item.description}</p>
              </div>
            </div>
            <div>
              <p className='text-xl font-semibold italic text-black'>${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default MenuPage