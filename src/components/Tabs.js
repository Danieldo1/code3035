import React from 'react'
import Link from 'next/link'
import {UserRound,Layers2,Utensils,Truck,Users} from 'lucide-react'

const Tabs = ({isAdmin}) => {
  return (

              <div className='flex gap-4 justify-center items-center'>
        <Link href='/profile' className='bg-red-500 text-white px-4 py-2 rounded-full'><UserRound/></Link>
        {isAdmin && (
          <>
          <Link  className='bg-gray-500 text-black px-4 py-2 rounded-full' href='/categories'><Layers2/></Link>
          <Link  className='bg-gray-500 text-black px-4 py-2 rounded-full' href='/menu'><Utensils/>
</Link>
          <Link className='bg-gray-500 text-black px-4 py-2 rounded-full '  href='/orders'><Truck/></Link>
          <Link  className='bg-gray-500 text-black px-4 py-2 rounded-full' href='/users'><Users/></Link>

          </>
        )}
      </div>

  )
}

export default Tabs