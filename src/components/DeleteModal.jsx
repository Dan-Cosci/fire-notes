import React from 'react'
import { FaX } from 'react-icons/fa6'

const DeleteModal = ({handleDelete, handleCancel}) => {
  return (
    <div className='absolute h-full w-full z-10 backdrop-blur-sm flex justify-center items-center' >
      <div className='bg-white w-[minmax(50rem, 40vw)] p-6 rounded-lg flex flex-col gap-4 justify-between shadow-sm'>
        <div className='flex justify-end cursor-pointer'>
          <FaX onClick={handleCancel}/>
        </div>
        <div className='text-center'>
          <h1 className='text-xl font-bold'>This will be deleted</h1>
          <p>are you sure you would like to delete this note?</p>
        </div>
        <div className='flex w-full gap-4'>
          <button onClick={handleCancel} className='bg-gray-300 px-4 py-2 rounded w-full'>no</button>
          <button onClick={handleDelete} className='bg-red-500 text-white px-4 py-2 rounded w-full'>yes</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal