'use client'
import Link from 'next/link'
import {UserRound,Layers2,Wine,Truck,Users,Cigarette,Layers3,Coffee,Beef} from 'lucide-react'
import { usePathname } from 'next/navigation'

const Tabs = ({isAdmin}) => {
  const path = usePathname()

  return (

              <div className='flex gap-4 justify-center items-center'>
        <Link href='/profile' className={path === '/profile' ? 'bg-red-500 text-white px-4 py-4 mt-4 rounded-full' : 'bg-gray-500 text-black px-4 py-4 mt-4 rounded-full'}><UserRound/></Link>
        {isAdmin && (
          <div className='overflow-y-hidden flex flex-row gap-5 scrollbar-hide'>
          <div className='flex-row  bg-gray-200 rounded-lg p-2'>
            <p className=' text-center text-black'>Drinks</p>
            <div className='flex gap-2'>
              <Link   className={path === '/categories' ? 'bg-red-500 text-white px-4 py-4 rounded-full' : 'bg-gray-500 text-black px-4 py-4 rounded-full'}href='/categories'><Layers2/></Link>
              <Link   className={/menu/.test(path) ? 'bg-red-500 text-white px-4 py-4 rounded-full' : 'bg-gray-500 text-black px-4 py-4 rounded-full'}href='/menu'><Wine /></Link>
            </div>
          </div>

          <div className='flex-row  bg-gray-200 rounded-lg p-2'>
            <p className=' text-center text-black'>Smoke</p>
            <div className='flex gap-2'>
              <Link   className={path === '/smoke-categories' ? 'bg-red-500 text-white px-4 py-4 rounded-full' : 'bg-gray-500 text-black px-4 py-4 rounded-full'}href='/smoke-categories'><Layers3/></Link>
              <Link   className={/shisha/.test(path) ? 'bg-red-500 text-white px-4 py-4 rounded-full' : 'bg-gray-500 text-black px-4 py-4 rounded-full'}href='/shisha'><Cigarette /></Link>          
            </div>
          </div>

          <div className='flex-row  bg-gray-200 rounded-lg p-2'>
            <p className=' text-center text-black'>Tea</p>
            <div className='flex gap-2'>
              <Link   className={path === '/tea-categories' ? 'bg-red-500 text-white px-4 py-4 rounded-full' : 'bg-gray-500 text-black px-4 py-4 rounded-full'}href='/tea-categories'><Layers3/></Link>
              <Link   className={/hot-drink/.test(path) ? 'bg-red-500 text-white px-4 py-4 rounded-full' : 'bg-gray-500 text-black px-4 py-4 rounded-full'}href='/hot-drink'><Coffee /></Link>          
            </div>
          </div>

          <div className='flex-row  bg-gray-200 rounded-lg p-2'>
            <p className=' text-center text-black'>Snacks</p>
            <div className='flex gap-2'>
              <Link   className={path === '/food-categories' ? 'bg-red-500 text-white px-4 py-4 rounded-full' : 'bg-gray-500 text-black px-4 py-4 rounded-full'}href='/food-categories'><Layers3/></Link>
              <Link   className={/snack/.test(path) ? 'bg-red-500 text-white px-4 py-4 rounded-full' : 'bg-gray-500 text-black px-4 py-4 rounded-full'}href='/snack'><Beef /></Link>          
            </div>
          </div>
          {/* <Link className={path === '/orders' ? 'bg-red-500 text-white px-4 py-4 rounded-full' : 'bg-gray-500 text-black px-4 py-4 rounded-full'}  href='/orders'><Truck/></Link>
          <Link  className={/users/.test(path) ? 'bg-red-500 text-white px-4 py-4 rounded-full' : 'bg-gray-500 text-black px-4 py-4 rounded-full'} href='/users'><Users/></Link> */}

          </div>
        )}
      </div>

  )
}

export default Tabs