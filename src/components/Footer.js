import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className='border-t py-4 justify-center items-center text-center text-gray-500'>
        <h1>&copy; {year} CODE3035</h1>
        <p>All Rights Reserved</p>
    </div>
  )
}

export default Footer