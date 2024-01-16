'use client'

import React, { useEffect, useState } from 'react'
import Tabs  from '@/components/Tabs'
import {useProfile} from '@/components/useProfile'
import Link from 'next/link'
import { PlusCircle,Loader2 } from 'lucide-react'
import { ReactSortable } from 'react-sortablejs'
import {toast} from 'react-hot-toast'

const MenuPage = () => {
    const [menuItems, setMenuItems] = useState([])
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(null);

    const {loading,isAdmin} = useProfile()


    useEffect(() => {
      const fetchMenuItems = async () => {
        try {
          const response = await fetch('/api/menu');
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();
          setMenuItems(data);
        } catch (error) {
          console.error('Failed to fetch menu items:', error);
          toast.error('Failed to load menu items.');
        }
      };
      
      const fetchCategories = async () => {
        try {
          const response = await fetch('/api/categories');
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
    
      fetchMenuItems();
      fetchCategories();
    }, []);

    if(loading) return <div className='text-3xl font-bold text-center flex justify-center mt-10 items-center '><Loader2 className='animate-spin ' /></div>
    if(!isAdmin) return <div className='text-3xl font-bold text-center'>You are not an admin</div>

    // const handleCategoryClick = (categoryId) => {
    //   setActiveCategory(categoryId);
    // };


    const saveOrder = async () => {
      const orderedMenu = menuItems.map((c, index) => ({ _id: c._id, order: index }));
    
      try {
        const response = await fetch('/api/menu/updateOrder', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ orderedMenu }),
        });
    
        if (!response.ok) {
          throw new Error('Failed to save order');
        }
    
        console.log('Order saved successfully');
        toast.success('Order saved successfully');
      } catch (error) {
        console.error('Error saving order:', error);
        toast.error('Error saving order');
      }
  };
  return (
    <section className='mt-20 mb-5 max-w-xl mx-auto'>
        <Tabs isAdmin={true}/>
        <div className='flex gap-4 justify-center items-center mt-5'>
            <Link href='/menu/new' className='bg-red-500 text-white flex gap-2 px-4 py-2 rounded-full'>Add Menu Item 
            <PlusCircle />
             </Link>
        </div>
      <div className='mt-5 '>
        <h2 className='text-2xl font-bold text-center'>Edit Menu</h2>

 

<button onClick={saveOrder} className='bg-red-500 text-white px-4 py-2 m-5 rounded-full sticky top-[70px] left-0 z-20'>Save</button>
        {categories.length > 0 && (
            <div className=' flex-1 gap-5 justify-stretch w-full items-center'> 
      {categories.map(c => (
          <div id={c.name}  key={c._id} className='pt-10 '>
         <div className='items-center justify-center text-center pb-5 w-full '>
              <h2   className='text-center  font-bold text-xl'>{c.name}</h2>
            </div>
                <div className='flex flex-row flex-wrap flex-1 snap-mandatory snap-x  justify-stretch w-full '>
                   
                    <ReactSortable list={menuItems.filter(item => item.category === c._id)} setList={setMenuItems} className='w-full'>
                    {menuItems.filter(item => item.category === c._id ).map((item) => (
                      <>
                        <Link href={`/menu/edit/${item._id}`} key={item._id} className='flex snap-center justify-between w-full bg-blue-900 px-5 py-3 rounded-lg my-2 items-center gap-2 '>
                            <div className='flex justify-between items-center gap-5'>
                                <div className=''>
                                    <p className={`text-sm ${item.available === true ? "text-green-500" : "text-red-500"}`}>{item.available === true ? "Available" : "Not Available"}</p>
                                    <h3 className='text-lg font-bold'>{item.name}</h3>
    
                                    <p className='text-sm text-gray-400'>{item.description}</p>
                                   
                                </div>
                            </div>
                            <div className='text-center'>
                                <p className='text-lg font-bold '>{item.price}</p>
                                   
                            </div>
                        </Link>              
                        </>
                    ))}
                    </ReactSortable>
                </div>    
            </div>
        ))}
         </div> 
  )}
      </div>
    </section>
  )
}

export default MenuPage
