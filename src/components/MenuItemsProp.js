'use client'

import { XCircle,Plus,ChevronDown } from 'lucide-react'
import { useState } from 'react'

const MenuItemsProp = ({props, setProps,name,buttonLabel}) => {

    const [open, setOpen] = useState(false)
   
    const addSize = () => {
        setProps(oldSizes => {
            return [...oldSizes, {name:'', price:0}]
        })
    }
  return (
                  <div className='bg-gray-200 text-black p-2 mb-2 rounded-md flex flex-col my-2'>
                    <div className='flex justify-between py-5 items-center'>
                        <label className='font-bold'>
                            {name}
                            <span className='ml-3'>
                                ({props.length})
                            </span>
                        </label>
    
                        <button type='button'
                        onClick={() => setOpen(!open)}
                        className='text-slate-500 p-1 bg-white rounded-lg'>
                            {open ?  <ChevronDown className='rotate-180' /> : <ChevronDown />}
                            
                        </button>
                    </div>
                    <div className={open ? 'flex flex-col gap-2' : 'hidden'}>
                    {props.length > 0 && props.map((size, index) => (
                        <div key={index} className='flex gap-2 my-2 items-end' >
                            <div>
                                <label>Name</label>
                                <input type="text"
                                value={size.name}
                                onChange={e => {
                                    setProps(oldSizes => {
                                        oldSizes[index].name = e.target.value
                                        return [...oldSizes]
                                    })
                                }}
                                required
                                className='w-full p-2 border border-gray-300 rounded-md ' placeholder='Size' />
                            </div>
                            <div>
                                <label>Extra Price</label>
                                <input type="text"
                                value={size.price}
                                onChange={e => {
                                    setProps(oldSizes => {
                                        oldSizes[index].price = e.target.value
                                        return [...oldSizes]
                                    })
                                }}
                                className='w-full p-2 border border-gray-300 rounded-md ' placeholder='Additional Price' />
                            </div>
                            <div>
                                <button onClick={() => setProps(oldSizes => oldSizes.filter((_, i) => i !== index))} 
                                className='bg-red-500 text-white p-2 rounded-full'
                                type='button'
                                >
                                <XCircle />
                                </button>
                            </div>
                        </div>
                    ))}
                    </div>
                    <button onClick={addSize} className='bg-white w-full flex items-center justify-center px-4 py-2 rounded-md'>
                    <Plus />
                        {buttonLabel}
                         </button>
                </div>
  )
}

export default MenuItemsProp