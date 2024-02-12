'use client'

import Tabs from '@/components/Tabs'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

import { Loader2,Pencil  } from 'lucide-react'
import DeleteButton from '@/components/DeleteButton'
import { ReactSortable } from 'react-sortablejs'

const OfferName = () => {
    const [categories, setCategories] = useState('')
    const [createdCategories, setCreatedCategories] = useState([])
    const [editedCategories, setEditedCategories] = useState(null)
    const [categoryDescription, setCategoryDescription] = useState('')
    const [available, setAvailable] = useState(null)


    useEffect(() => {
        fetchCategories()
    }, [])
    const fetchCategories = async () => {
        fetch('/api/offer-categories/offerName').then(response=>{response.json().then(data=>{
            setCreatedCategories(data)
            console.log(data[0].name)
        })
    })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
       const createPromise = new Promise( async(resolve, reject) => {
        const data = {name:categories, description:categoryDescription, available:available}
        if(editedCategories) {
            data._id = editedCategories._id
        }
           const response = await fetch('/api/offer-categories/offerName', {
                method: editedCategories ? 'PUT': 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setCategories('')
            setCategoryDescription('')
            fetchCategories()
            setEditedCategories(null)
           if(response.ok){
               resolve()
           }else{
               reject()
           }
       
       })
    
       toast.promise(createPromise, {
           loading: editedCategories ? 'Updating Category': 'Adding Category',
           success: editedCategories ? 'Category Updated': 'Category Added',
           error: editedCategories ? 'Error Updating Category': 'Error Adding Category'
       })
    
    }

   

  return (
    <>
    
    <h2 className='text-3xl font-bold text-center mt-2'>Offer Name</h2>
    <form className='max-w-sm mx-auto my-10' onSubmit={handleSubmit}>
            <div className='flex gap-2 items-end'>
                <div>
                    <label className='text-lg font-bold mb-2 '  > 
                        {editedCategories ? 'Update Category': 'Create Category'}
                        {editedCategories && (
                            <>: <b>{editedCategories.name}</b></>
                        )}
                    </label>
                    <input type="text" value={categories} autoComplete='off' name="category" onChange={(e) => setCategories(e.target.value)} className='w-full p-2 border border-gray-300 text-black bg-gray-200 rounded-md' placeholder='Category Name' />
                   
                </div>

                <div className='flex flex-col gap-2'>
                    <button type='submit' className='bg-red-500 text-white px-4 py-2 rounded-full'> 
                     {editedCategories ? 'Update': 'Create'}
                    </button>
                    <button type='button' 
                    className='px-4 py-2 rounded-full bg-gray-200 text-black' 
                    onClick={() => {setEditedCategories(null);setCategories('');setCategoryDescription('')}}>Cancel</button>
              
               <div className='flex mb-5 gap-2'>
                  <label>Available</label>
                  <input type='checkbox' 
                  onChange={e =>setAvailable(e.target.checked) }
                  className=''
                  value={available}
                  checked={available}
                  />
                  </div>
                </div>
            </div>
        </form>

        {createdCategories?.length >0 && createdCategories?.map(c => (
                <div key={c._id} id='items'  className='bg-gray-200 text-black border items-center shadow-md justify-between w-full p-6 mb-4 rounded-lg flex gap-2 cursor-move' > 
                   <div className='flex flex-col'>
                        <p className='font-bold'>{c.name}</p>
                        <p className='text-sm'>{c.description}</p>
                    </div>
                <div className='flex gap-4 justify-center items-center'>
                    <span onClick={() => {setEditedCategories(c);setCategories(c.name);setCategoryDescription(c.description),setAvailable(c.available) }}>
                        <Pencil className='cursor-pointer hover:text-blue-500' />
                    </span>
                    <span className=''>
                        {/* <DeleteButton label={''} onDelete={() => handleDelete(c._id)} /> */}

                    </span>
                </div>
            </div>
        ))}
    </>
  )
}

export default OfferName