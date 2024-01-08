'use client'

import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'
import Image from 'next/image'
import { Upload } from 'lucide-react'

const ProfilePage = () => {
    const session = useSession()
    const {status} = session.status
    const [name, setName] = useState('')

useEffect(() => {
if(status === 'authenticated'){
    setName(session.data?.user.name)
}
}, [status,session])
   if(status === 'loading'){
    return <div className='text-3xl font-bold text-center'>Loading...</div>
   }
    if(status === 'unauthenticated'){
      return  redirect('/admin')
    }
    if(status === 'authenticated'){
        
    }
    const userImage = session.data?.user.image

    const handleProfileUpdate = async (e) => {
        e.preventDefault()
        const response = await fetch('/api/profile', {
            method: 'PUT',
            body: JSON.stringify({name}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(response.ok){
            alert('Profile updated')
        }
    }
  return (
    <section className='mt-4'>
        <h1 className='text-3xl font-bold text-center'>Profile</h1>

        <div className='max-w-md mx-auto my-10 items-center justify-center'>
            <div className='flex gap-4 items-center justify-center '>
              <div>
                <div className='bg-gray-500 p-6 rounded-lg flex flex-col text-center justify-center'>
                <Image src={userImage} alt="user image" width={64} height={64} className='rounded-full mx-auto'/>
                <button type='button' className='bg-red-500 p-2 text-white items-center text-center flex justify-center rounded-full'>
                    <Upload className='w-6 h-6 items-center justify-center' />
                    </button>
                </div>
              </div>
              <form className='grow' onSubmit={handleProfileUpdate}>
                <input type='text' placeholder='Name'  value={} onChange={(e) => setName(e.target.value)} className='border p-2 border-gray-300 bg-gray-200 block w-full my-4 rounded-lg disabled:bg-gray-700'/>
                <input type='email' disabled value={session.data?.user.email} placeholder='Email' className='border p-2 border-gray-300 bg-gray-200 block w-full my-4 rounded-lg disabled:bg-gray-600 disabled:text-white disabled:cursor-not-allowed'/>
                <button type='submit' className='bg-red-500 text-white px-4 py-2 rounded-full w-full'>Update</button>
              </form>
            </div>
        </div>
    </section>
  )
}

export default ProfilePage