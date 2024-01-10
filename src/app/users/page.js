'use client'

import React, { useEffect, useState } from 'react'
import Tabs from '@/components/Tabs'
import { useProfile } from '@/components/useProfile'
import { PlusCircle,Loader2,ImageOff } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
const UsersPage = () => {

    const {loading,isAdmin} = useProfile()
    const [users,setUsers] = useState([])
    const [admin,setAdmin] = useState(users.admin || false)

    useEffect(() => {
        fetch('/api/users').then(response=>{response.json().then(data=>{
            setUsers(data)
        })
    })
    },[])

    if(loading) return <div className='text-3xl font-bold text-center flex justify-center mt-10 items-center '><Loader2 className='animate-spin ' /></div>
    if(!isAdmin) return <div className='text-3xl font-bold text-center'>You are not an admin</div>

  return (
    <section className='mt-8'>
        <Tabs isAdmin={true}/>

        <div>
            {users.length >0 && users.map((user, index) => (
                <div key={index} className='flex gap-4 justify-between items-center mt-5 border p-2 rounded-lg bg-slate-200 shadow-md'>
                    <div className='flex justify-between items-center gap-5'>
                        <div className='w-24 h-24 flex-col '>
                            {user.image.length ===0 && (
                                <ImageOff className='w-24 h-24' />
                            )}
                            {user.image.length >0 && (
                                <Image src={user.image} alt="user image" width={64} height={64} className='rounded-lg mx-auto'/>
                            )}
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>{user.name}</h2>
                            <p>{user.email}</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-5'>
                  
                        {user.admin === true ? <p className='text-red-500'>Admin</p> : <p className='text-green-500'>User</p>}
                        <p>{user.role}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default UsersPage