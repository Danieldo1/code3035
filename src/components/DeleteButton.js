'use client'

import React, { useState } from 'react'
import { Trash2 } from 'lucide-react'

const DeleteButton = ({label,onDelete}) => {
const [confirm, setConfirm] = useState(false)

if(confirm){
    return (
        <div className='mb-5'>
            <div className='flex justify-center gap-2'>
                <h2 className='text-2xl font-bold'>Are you sure?</h2>
            </div>
            <div className='flex justify-center gap-2 mt-4'>
                <button 
                type='button'
                className='bg-blue-500 p-2 rounded-lg hover:text-black text-white'
                onClick={() => setConfirm(false)}
                >
                    Cancel
                </button>
                <button 
                type='button' 
                className='bg-red-500 p-2 rounded-lg hover:text-black text-white'
                onClick={onDelete}
                >
                    Confirm
                </button>

            </div>
        </div>
    )
}
  return (
    <button 
onClick={() => setConfirm(true)}
    className='bg-red-500 flex justify-center gap-2 hover:text-black w-full text-white px-4 py-2 rounded-full'>
        <Trash2 />
        {label}
    </button>
  )
}

export default DeleteButton