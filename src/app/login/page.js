'use client'
import React, { useState } from 'react'
import Image from 'next/image'


const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const  handleSubmit =  (e) => {
        e.preventDefault()
        fetch('/api/register',{
        method: 'POST', 
        body: JSON.stringify({email, password}),
        headers: {'Content-Type': 'application/json'}
    })
    }
  return (
    <div>
        <h1 className='text-3xl font-bold text-center'>Login</h1>
        <form className='max-w-md mx-auto my-10' onSubmit={handleSubmit}>
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='border p-2 border-gray-300 bg-gray-200 block w-full my-4 rounded-lg'/>
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='border p-2 border-gray-300 bg-gray-200 block w-full my-4 rounded-lg'/>
            <button type='submit' className='bg-red-500 text-white px-4 py-2 rounded-full w-full'>Login</button>
            <div className="flex items-center justify-center text-gray-400">
                <div className="w-1/2 h-px bg-gray-400"></div>
                <div className="px-2 bg-white">or</div>
                <div className="w-1/2 h-px bg-gray-400"></div>
            </div>
            <div className='gap-4'>
                <button className='bg-red-500 text-white px-4 py-2 rounded-full w-full flex gap-2 justify-center text-center items-center'>
                <Image src="/google.svg" alt="google image" width={20} height={20} className=''/>
                    Google
                </button>
            </div>
        </form>
    </div>
  )
}

export default LoginPage