'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { Menu,X,LogOut } from 'lucide-react';
import Image from 'next/image'


const Header = () => {
  const session=useSession()
  const status=session.status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header
     className='flex justify-between items-center pt-4 px-4 sticky top-0 bg-[#1B1918] w-full z-50'
    >
      <Link className='text-3xl font-bold' href="/">
        <Image src={'/logo1.webp'} alt="logo" width={150} height={200} />
      </Link>

      {isMenuOpen ? (
        <>
        
        <div className='fixed top-0 left-0 pt-36 w-full h-full  bg-[#1B1918] text-center flex flex-col items-center z-50'>
          <button className='md:hidden ' onClick={toggleMenu}>
            <X className='w-10 h-10 top-[30px] fixed  right-[30px] active:text-green-300 hover:text-green-300 delay-150 duration-300 '  />
          </button>
            <Link className='text-3xl font-bold fixed top-[15px] left-[28px]' href="/">
              <Image src={'/logo1.webp'} alt="logo" width={150} height={200} />
            </Link>


          <nav className='flex flex-col  items-center' onClick={toggleMenu}>
            <Link href={'/'} className='font-bold text-3xl mb-4 active:text-green-300 hover:text-green-300 delay-150 duration-300 '>
              Home
            </Link>
            <Link href={'/menu-page'} className='font-bold text-3xl mb-4 active:text-green-300 hover:text-green-300 delay-150 duration-300'>
             Beverages Menu
            </Link>
            <Link href={'/shisha-page'} className='font-bold text-3xl mb-4 active:text-green-300 hover:text-green-300 delay-150 duration-300'>
            Hookah  Menu
            </Link>
            {/* <Link href={''} className='font-bold text-3xl mb-4 active:text-green-300 hover:text-green-300 delay-150 duration-300'>
              Rent
            </Link> */}

            {status === 'authenticated' && (
              <>
                <Link href={'/profile'} className='bg-blue-300 font-bold text-xl text-black px-4 py-2 rounded-full mb-4'>
                  Admin
                </Link>
                <button onClick={() => signOut()} className='bg-red-500 font-bold text-2xl text-white px-2 py-2 items-center justify-center rounded-full'>
                <LogOut />
                </button>
              </>
            )}

            {/* {status !== 'authenticated' && (
              <Link href={'/login'} className='bg-red-500 text-white px-4 py-2 rounded-full mb-4'>
                Register
              </Link>
            )} */}
          </nav>
        </div>
        </>
      ) : (
        <>
          <button className='md:hidden' onClick={toggleMenu}>
            <Menu className='w-10 h-10 active:text-green-300 hover:text-green-300 delay-150 duration-300' />
          </button>

          <div className='hidden md:flex flex-col'>
            <nav className='flex gap-4 md:gap-12 font-semibold items-center'>
              <Link href={'/'} className='font-bold text-xl  active:text-green-300 hover:text-green-300 delay-150 duration-300 '>Home</Link>
              <Link href={'/menu-page'} className='font-bold text-xl  active:text-green-300 hover:text-green-300 delay-150 duration-300'>Beverages Menu</Link>
              <Link href={'/shisha-page'} className='font-bold text-xl  active:text-green-300 hover:text-green-300 delay-150 duration-300'>
            Hookah  Menu
            </Link>
              {/* <Link href={''}>Rent</Link> */}

              {status === 'authenticated' && (
                <>
                  <Link href={'/profile'} className='bg-blue-300 font-bold text-xl text-white px-4 py-2 rounded-full'>
                    Admin
                  </Link>
                  <button onClick={() => signOut()} className='bg-red-500 font-bold text-2xl text-white px-2 py-2 rounded-full'>
                  <LogOut />
                  </button>
                </>
              )}

              {/* {status !== 'authenticated' && (
                <Link href={'/login'} className='bg-red-500 text-white px-4 py-2 rounded-full'>
                  Register
                </Link>
              )} */}
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

export default Header