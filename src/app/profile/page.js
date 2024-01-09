'use client'

import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { Upload } from 'lucide-react'
import {redirect} from 'next/navigation'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

const ProfilePage = () => {
    const session = useSession()
    // console.log(session)
    const status = session.status
    const [userName, setUserName] = useState('')
    const [userImage, setUserImage] = useState('')


    const router = useRouter()

useEffect(() => {
if(status === 'authenticated'){
    setUserName(session.data?.user.name)
    setUserImage(session.data?.user.image)
   fetch('/api/profile').then(response=>{response.json().then(data=>{
    console.log(data)
    setUserName(data.name)
    setUserImage(data.image)
   })
  })
}
}, [session,status])


   if(status === 'loading'){
    return <div className='text-3xl font-bold text-center'>Loading...</div>
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
    }



    const handleFile = async (e) => {
      const files = e.target.files
      if(files?.length === 1){
        const data= new FormData
        data.set('file', files[0])
        toast('Uploading Image')
       const res= await fetch('/api/upload', {
          method: 'POST',
          body: data,
      
        })
        toast.success('Image Uploaded')
        const link= await res.json()
        setUserImage(link)
      }
      }
  return (
    <section className='mt-4'>
        <h1 className='text-3xl font-bold text-center'>Profile</h1>

        <div className='max-w-md mx-auto my-10 items-center justify-center'>
            <div className='flex gap-4 items-center justify-center '>
              <div>
                <div className='bg-gray-500 p-6 rounded-lg flex flex-col text-center justify-center'>
                
             
                {userImage && (

                <Image src={userImage} alt="user image" width={64} height={64} className='rounded-full mx-auto'/>
                )}
                    <label className='bg-red-500 p-2 cursor-pointer text-white items-center text-center flex justify-center rounded-full'>
                    <Upload className='w-6 h-6 items-center justify-center' />
                    <input type='file' className='hidden' onChange={handleFile} />
                    </label>
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