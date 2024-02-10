'use client'

import React, { useEffect, useState,useCallback } from 'react'
import Tabs  from '@/components/Tabs'
import {useProfile} from '@/components/useProfile'
import Link from 'next/link'
import { PlusCircle,Loader2,GripHorizontal } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ReactSortable, Sortable } from 'react-sortablejs'
import {toast} from 'react-hot-toast'


const TeaAdmin = () => {
  const [menuItems, setMenuItems] = useState([])
  const [categories, setCategories] = useState([])
  const [clickedItem, setClickedItem] = useState(null);
  
  const router = useRouter()
  
  const {loading,isAdmin} = useProfile()

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('/api/tea-menu');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        setMenuItems(data);
 
      } catch (error) {
          console.error('Failed to fetch menu items:', error);
          toast.error('Failed to load menu items.');
        }
      };
      
      fetchMenuItems();
    }, []);

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch('/api/tea-categories');
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();
          setCategories(data);
         
        } catch (error) {
          console.error('Failed to fetch categories:', error);
          toast.error('Failed to load categories.');
        }
      };
      
      fetchCategories();
    }, []);

    
    if(loading) return <div className='text-3xl font-bold text-center flex justify-center mt-10 items-center '><Loader2 className='animate-spin ' /></div>
    if(!isAdmin) return <div className='text-3xl font-bold text-center'>You are not an admin</div>
    
    const saveOrder = async () => {
      const orderedMenu = menuItems.map((c, index) => ({ _id: c._id, order: index }));
      
        try {
          const response = await fetch('/api/tea-menu/updateOrder', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ orderedMenu }),
          });
      
          if (!response.ok) {
            throw new Error('Failed to save order');
          }
      
         
          toast.success('Order saved successfully');
          router.refresh()
        } catch (error) {
       
          toast.error('Error saving order');
        }
    };

    const handleMoveOrder = (item, direction) => {
      // Find the index of the item in the menuItems array
      const index = menuItems.findIndex((i) => i._id === item._id);
      setClickedItem(item);
      // Ensure the item is found in the array
      if (index !== -1) {
        // Clone the menuItems array to avoid mutating the original array
        const updatedMenuItems = [...menuItems];
        // Swap the order based on the direction
        if (direction === 'up' && index > 0) {
          [updatedMenuItems[index - 1], updatedMenuItems[index]] = [
            updatedMenuItems[index],
            updatedMenuItems[index - 1],
          ];
        } else if (direction === 'down' && index < updatedMenuItems.length - 1) {
          [updatedMenuItems[index], updatedMenuItems[index + 1]] = [
            updatedMenuItems[index + 1],
            updatedMenuItems[index],
          ];
        }
    
        // Update the state or perform any action with the updated array
        setMenuItems(updatedMenuItems);

      }
      setTimeout(() => {
        setClickedItem(null);
      }, 300);
    };


  return (
   <section className='mt-20 mb-5 max-w-md mx-auto'>
    <Tabs isAdmin={true}/>
    <div className='flex gap-4 justify-center items-center mt-5'>
        <Link href='/hot-drink/new' className='bg-red-500 text-white flex gap-2 px-4 py-2 rounded-full'>Add Menu Item 
        <PlusCircle />
         </Link>
    </div>


    <div className='mt-5 '>
        <h2 className='text-2xl font-bold text-center'>Edit Menu</h2>
<button onClick={saveOrder} className='bg-red-500 text-white px-4 py-2 m-5 rounded-full sticky top-[70px] left-0 z-20'>Save</button>
        {categories.length > 0 &&  (
            <div className=' flex-1 gap-5 justify-stretch w-full items-center'> 
      {categories.map(c => (
          <div id={c.name}  key={c._id} className='pt-10 '>
         <div className='items-center justify-center text-center pb-5 w-full '>
              <h2   className='text-center  font-bold text-xl'>{c.name}</h2>
            </div>
                <div className='flex flex-row flex-wrap flex-1 snap-mandatory snap-x  justify-stretch w-full '>
                   
                {menuItems
  .filter((item) => item.category === c._id)
  .map((item) => (
    <div key={item._id}  
    className={`flex  w-full bg-blue-900 px-5 py-3 rounded-lg my-2 items-center gap-2 transition-opacity ${
      clickedItem && clickedItem._id === item._id
        ? 'opacity-50'
        : 'opacity-100'
    }`}>
          <div className='flex items-center justify-center'>
            <button
              onClick={() => handleMoveOrder(item, 'up')}
              className='bg-green-500 px-2 py-1 rounded-lg  text-black'
            >
            ⬆︎           
         </button>
            <button
              onClick={() => handleMoveOrder(item, 'down')}
              className='bg-red-500 px-2 py-1 rounded-lg text-white ml-2'
            >
              ⬇︎

            </button>
          </div>
      <Link
        href={`/hot-drink/edit/${item._id}`}
        className='flex flex-1 justify-between'
      >
        <div className='flex justify-between items-center gap-5'>
          <div className='border-l-2 pl-2'>
            <p
              className={`text-sm ${
                item.available === true ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {item.available === true ? 'Available' : 'Not Available'}
            </p>

            <h3 className='text-lg font-bold'>{item.name}</h3>

            <p className='text-sm text-gray-400'>{item.description}</p>
          </div>
        </div>

        <div className='text-right justify-end'>
          <p className='text-lg font-bold '>{item.price}</p>
        </div>
      </Link>
    </div>
                    ))}
                   
                </div>    
            </div>
        ))}
         </div> 
  )}
      </div>
</section>
  )
}

export default TeaAdmin