'use client'

import Tabs from '@/components/Tabs'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useProfile } from '../../components/useProfile'

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

if(loading) return <div className='text-3xl font-bold text-center'>Loading...</div>
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


  return (
    <section className='mt-8 max-w-lg mx-auto'>
        <Tabs isAdmin={true}/>

        <form className='max-w-sm mx-auto my-10' onSubmit={handleSubmit}>
            <div className='flex gap-2 items-end'>
                <div>
                    <label > 
                        {editedCategories ? 'Update Category': 'Create Category'}
                        {editedCategories && (
                            <>: <b>{editedCategories.name}</b></>
                        )}
                    </label>
                    <input type="text" value={categories} name="category" onChange={(e) => setCategories(e.target.value)} className='w-full p-2 border border-gray-300 rounded-md' placeholder='Category Name' />
                </div>

                <div>
                    <button type='submit' className='bg-red-500 text-white px-4 py-2 rounded-full'> {editedCategories ? 'Update': 'Create'}</button>
              
                </div>

            </div>
            
        </form>

            <div>
                <h2>Edit Category:</h2>
                {createdCategories?.length >0 && createdCategories?.map(c => (
                    <button key={c._id} onClick={() => {setEditedCategories(c);setCategories(c.name)}} className='bg-gray-200 w-full p-6 mb-4 rounded-lg flex gap-2 cursor-pointer' > 
                        <p>{c.name}</p>
                    </button>
                ))}
            </div>

    </section>
  )
}

export default CategoriesPage