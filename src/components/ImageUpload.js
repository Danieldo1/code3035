import React from 'react'
import Image from 'next/image'
import { Upload,ImagePlus } from 'lucide-react'
import { toast } from 'react-hot-toast'


const ImageUpload = ({link,setLink}) => {
    const handleFile = async (e) => {
        const files = e.target.files
        if(files?.length === 1){
          const data= new FormData
          data.set('file', files[0])
          toast('Uploading Image')
         const res= await fetch('/api/upload', {
            method: 'POST',
            body: data,
        
          })
          toast.success('Image Uploaded')
          const link= await res.json()
          setLink(link)
        }
        }
  return (
    <>
 {link && (

<Image src={link} alt="user image" width={200} height={200} className='rounded-lg mx-auto'/>
)}
{!link && (
    <div className=' justify-center items-center p-4 bg-gray-300 rounded-lg mx-auto'>
      <ImagePlus className='w-28 h-28 text-black' />
    </div>
)}
    <label className='bg-blue-500 mt-2 p-2 cursor-pointer text-white items-center text-center flex justify-center rounded-full'>
    <Upload className='w-6 h-6 items-center justify-center' />
    <input type='file' className='hidden' onChange={handleFile} />
    </label>
    </>
  )
}

export default ImageUpload