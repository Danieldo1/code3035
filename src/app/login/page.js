'use client'
import React, { useState } from 'react'
import Image from 'next/image'


const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [created, setCreated] = useState(false)
    const [error,setError] = useState(false)
    const  handleSubmit = async (e) => {
        e.preventDefault()
            setCreated(true)
            setError(false)
            const response = await fetch('/api/register',{
            method: 'POST', 
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'}
        })
        if(response.ok){
            setCreated(true)
        }else {
            setError(true)
        }
    }
  return (
    <div>
        <h1 className='text-3xl font-bold text-center'>Login</h1>
        {created && <p className='text-center text-green-500'>User created</p>}
        {error && <p className='text-center text-red-500'>User already exists</p>}
        <form className='max-w-md mx-auto my-10' onSubmit={handleSubmit}>
            <input type="email" placeholder='Email' required value={email} disabled={created} onChange={(e) => setEmail(e.target.value)} className='border p-2 border-gray-300 bg-gray-200 block w-full my-4 rounded-lg disabled:bg-gray-700'/>
            <input type="password" placeholder='Password' required disabled={created} value={password} onChange={(e) => setPassword(e.target.value)} className='border p-2 border-gray-300 bg-gray-200 block w-full my-4 rounded-lg disabled:bg-gray-700'/>
            <button type='submit' className='bg-red-500 text-white px-4 py-2 rounded-full w-full disabled:bg-gray-700 disabled:cursor-not-allowed'>Login</button>
            <div className="flex items-center justify-center text-gray-400">
                <div className="w-1/2 h-px bg-gray-400"></div>
                <div className="px-2 bg-white">or</div>
                <div className="w-1/2 h-px bg-gray-400"></div>
            </div>
            <div className='gap-4'>
                {/* <button disabled={created} className='bg-red-500 text-white px-4 py-2 rounded-full w-full flex gap-2 justify-center text-center items-center disabled:bg-gray-700 disabled:cursor-not-allowed'>
                <Image src="/google.svg" alt="google image" width={20} height={20} className=''/>
                    Google
                </button> */}
            </div>
        </form>
    </div>
  )
}

export default LoginPage