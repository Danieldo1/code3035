'use client'

import Tabs from '@/components/Tabs'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useProfile } from '../../components/useProfile'
import { Loader2,Pencil,Trash2  } from 'lucide-react'
import DeleteButton from '@/components/DeleteButton'


const CategoriesPage = () => {
const [categories, setCategories] = useState('')
const [createdCategories, setCreatedCategories] = useState([])
const [editedCategories, setEditedCategories] = useState(null)

useEffect(() => {
    fetchCategories()
}, [])
const fetchCategories = async () => {
    fetch('/api/categories').then(response=>{response.json().then(data=>{
        setCreatedCategories(data)
    })
})
}

const {loading,isAdmin} = useProfile()

if(loading) return <div className='text-3xl font-bold text-center flex justify-center mt-10 items-center '><Loader2 className='animate-spin ' /></div>
if(!isAdmin) return <div className='text-3xl font-bold text-center'>You are not an admin</div>


const handleSubmit = async (e) => {
    e.preventDefault()
   const createPromise = new Promise( async(resolve, reject) => {
    const data = {name:categories }
    if(editedCategories) {
        data._id = editedCategories._id
    }
       const response = await fetch('/api/categories', {
            method: editedCategories ? 'PUT': 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setCategories('')
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
const handleDelete = async (_id) => {
    const deletePromise = new Promise( async(resolve, reject) => {
     const response=   await fetch('/api/categories?_id='+_id, {
           method: 'DELETE',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({_id})
           
       })
        if(response.ok){
            resolve()
        }else{
            reject()
        }
    })

    
    await toast.promise(deletePromise, {
        loading: 'Deleting Category',
        success: 'Category Deleted',
        error: 'Error Deleting Category'
    })
    fetchCategories()
}

  return (
    <section className='mt-8 max-w-lg mx-auto'>
        <Tabs isAdmin={true}/>

        <form className='max-w-sm mx-auto my-10' onSubmit={handleSubmit}>
            <div className='flex gap-2 items-end'>
                <div>
                    <label className='text-lg font-bold mb-2 '  > 
                        {editedCategories ? 'Update Category': 'Create Category'}
                        {editedCategories && (
                            <>: <b>{editedCategories.name}</b></>
                        )}
                    </label>
                    <input type="text" value={categories} autoComplete='off' name="category" onChange={(e) => setCategories(e.target.value)} className='w-full p-2 border border-gray-300 rounded-md' placeholder='Category Name' />
                </div>

                <div className='flex gap-2'>
                    <button type='submit' className='bg-red-500 text-white px-4 py-2 rounded-full'> 
                     {editedCategories ? 'Update': 'Create'}
                    </button>
                    <button type='button' 
                    className='px-4 py-2 rounded-full bg-gray-200' 
                    onClick={() => {setEditedCategories(null);setCategories('')}}>Cancel</button>
                </div>
            </div>
        </form>

            <div>
                <h2 className='text-2xl mb-5 font-bold'>Existing Categories:</h2>
                {createdCategories?.length >0 && createdCategories?.map(c => (
                    <div key={c._id}  className='bg-gray-200 border items-center shadow-md justify-between w-full p-6 mb-4 rounded-lg flex gap-2 ' > 
                        <p className='font-bold'>{c.name}</p>
                        <div className='flex gap-4 justify-center items-center'>
                            <span onClick={() => {setEditedCategories(c);setCategories(c.name)}}>
                                <Pencil className='cursor-pointer hover:text-blue-500' />
                            </span>
                            <span className=''>
                                <DeleteButton label={''} onDelete={() => handleDelete(c._id)} />

                            </span>
                        </div>
                    </div>
                ))}
            </div>

    </section>
  )
}

export default CategoriesPage