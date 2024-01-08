import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <header className='flex justify-between items-center p-4'>
    <Link className='text-3xl font-bold' href="">
      CODE3035
    </Link>
    <nav className='flex gap-4 md:gap-12 font-semibold items-center'>
      <Link href={''}>Home</Link>
      <Link href={''}>Menu</Link>
      <Link href={''}>Rent</Link>
      <Link href={'/login'} className='bg-red-500 text-white px-4 py-2 rounded-full'>Login</Link>
    </nav>
  </header>
  )
}

export default Header