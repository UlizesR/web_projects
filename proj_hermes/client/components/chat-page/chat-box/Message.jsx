import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa' 

export const Message = ({ message }) => {
  return (
    <div className='flex justify-end w-full p -5 items-center gap-2 hover:bg-slate-700'>
        <div className='text-white text-lg p-2.5 rounded-t-lg rounded-l-lg bg-zinc-800'>
            {message}
        </div>
        <FaRegUserCircle size='40'/>
    </div>
  )
}
