'use client'

import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

import {redirect} from 'next/navigation'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import Tabs from '../../components/Tabs'
import ImageUpload from '../../components/ImageUpload'
import { Loader2 } from 'lucide-react'

const ProfilePage = () => {
    const session = useSession()
    // console.log(session)
    const status = session.status
    const [userName, setUserName] = useState('')
    const [userImage, setUserImage] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)


    const router = useRouter()

useEffect(() => {
if(status === 'authenticated'){
    setUserName(session.data?.user.name)
    setUserImage(session.data?.user.image)
   fetch('/api/profile').then(response=>{response.json().then(data=>{
    console.log(data)
    setUserName(data.name)
    setUserImage(data.image)
    setIsAdmin(data.admin)
   })
  })
}
}, [session,status])


   if(status === 'loading'){
    <div className='text-3xl font-bold text-center flex justify-center mt-10 items-center '><Loader2 className='animate-spin ' /></div>
   }
    if(status === "unauthenticated" ){
       redirect('/admin')
    }
 

    const handleProfileUpdate = async (e) => {
        e.preventDefault()
        toast('Updating Profile')
        const response = await fetch('/api/profile', {
            method: 'PUT',
            body: JSON.stringify({name:userName, image: userImage}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(response.ok){
            toast.success('Profile Updated')
        }
        router.refresh()
    }



   
  return (
    <section className='mt-4'>

    <Tabs isAdmin={isAdmin} />
        <h1 className='text-3xl font-bold text-center'>Profile</h1>

        <div className='max-w-md mx-auto my-10 items-center justify-center'>
            <div className='flex gap-4 items-center justify-center '>
              <div>
                <div className='bg-gray-500 p-6 rounded-lg flex flex-col text-center justify-center'>
                
             
               <ImageUpload setLink={setUserImage} link={userImage}/>
                </div>
              </div>
   
              <form className='grow' onSubmit={handleProfileUpdate}>
                <input type='text' placeholder={'Name'} value={userName} onChange={(e) => setUserName(e.target.value)} className='border p-2 border-gray-300 bg-gray-200 block w-full my-4 rounded-lg disabled:bg-gray-700'/>
                <input type='email' disabled value={session.data?.user.email} placeholder='Email' className='border p-2 border-gray-300 bg-gray-200 block w-full my-4 rounded-lg disabled:bg-gray-600 disabled:text-white disabled:cursor-not-allowed'/>
                <button type='submit' className='bg-red-500 text-white px-4 py-2 rounded-full w-full'>Update</button>
              </form>
            </div>
        </div>
    </section>
  )
}

export default ProfilePage