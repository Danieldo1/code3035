'use client'

import React from 'react'
import Tabs from '@/components/Tabs'
import { useProfile } from '@/components/useProfile'
import { PlusCircle,Loader2,ImageOff } from 'lucide-react'

const OrdersPage = () => {

    const {loading,isAdmin} = useProfile()

    if(loading) return <div className='text-3xl font-bold text-center flex justify-center mt-10 items-center '><Loader2 className='animate-spin ' /></div>
    if(!isAdmin) return <div className='text-3xl font-bold text-center'>You are not an admin</div>

  return (
    <section className='mt-8 max-w-2xl mx-auto'>
        <Tabs isAdmin={true}/>

    </section>
  )
}

export default OrdersPage