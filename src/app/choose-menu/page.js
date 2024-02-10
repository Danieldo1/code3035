import React from 'react'
import MenuPhotos from '@/components/MenuPhotos'


const ChooseMenu = () => {
  return (
    <>
       <h1 className='flex justify-center text1 font-extrabold text-4xl text-center mt-24 md:mt-10 md:mb-5 '>Menu</h1>
    <section className='h-full flex flex-col justify-start mt-10 items-center '>
    <div >
        <MenuPhotos />
    </div>
    </section>
    </>
  )
}

export default ChooseMenu