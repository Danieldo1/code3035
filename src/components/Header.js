'use client'
import React from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
const Header = () => {
  const session=useSession()

const status=session.status
  return (
    <header className='flex justify-between items-center p-4'>
    <Link className='text-3xl font-bold' href="/">
      CODE3035
    </Link>
    <nav className='flex gap-4 md:gap-12 font-semibold items-center'>
      <Link href={'/'}>Home</Link>
      <Link href={''}>Menu</Link>
      <Link href={''}>Rent</Link>
      {status==='authenticated' &&( 
        <>
         <Link href={'/profile'} className='bg-red-500 text-white px-4 py-2 rounded-full'>Admin</Link>
         <button onClick={()=>signOut()} className='bg-red-500 text-white px-4 py-2 rounded-full'>Log Out</button>
        </>
      )}
      {status !== 'authenticated' && ( <Link href={'/login'} className='bg-red-500 text-white px-4 py-2 rounded-full'>Register</Link>) }
     
    </nav>
  </header>
  )
}

export default Header