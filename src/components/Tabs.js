'use client'
import Link from 'next/link'
import {UserRound,Layers2,Utensils,Truck,Users} from 'lucide-react'
import { usePathname } from 'next/navigation'

const Tabs = ({isAdmin}) => {
  const path = usePathname()

  return (

              <div className='flex gap-4 justify-center items-center'>
        <Link href='/profile' className={path === '/profile' ? 'bg-red-500 text-white px-4 py-4 rounded-full' : 'bg-gray-500 text-black px-4 py-4 rounded-full'}><UserRound/></Link>
        {isAdmin && (
          <>
          <Link   className={path === '/categories' ? 'bg-red-500 text-white px-4 py-4 rounded-full' : 'bg-gray-500 text-black px-4 py-4 rounded-full'}href='/categories'><Layers2/></Link>
          <Link   className={/menu/.test(path) ? 'bg-red-500 text-white px-4 py-4 rounded-full' : 'bg-gray-500 text-black px-4 py-4 rounded-full'}href='/menu'><Utensils/></Link>
          <Link className={path === '/orders' ? 'bg-red-500 text-white px-4 py-4 rounded-full' : 'bg-gray-500 text-black px-4 py-4 rounded-full'}  href='/orders'><Truck/></Link>
          <Link  className={/users/.test(path) ? 'bg-red-500 text-white px-4 py-4 rounded-full' : 'bg-gray-500 text-black px-4 py-4 rounded-full'} href='/users'><Users/></Link>

          </>
        )}
      </div>

  )
}

export default Tabs