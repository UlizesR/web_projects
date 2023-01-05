import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa' 

export const Message = (messageData) => {

  return (
    <div className='flex h-fit w-full p-2.5 gap-1 items-center hover:bg-slate-700'>
      <FaRegUserCircle size='50' className='self-start'/>
      <div className=' h-fit w-fit flex flex-col'>
        <span className='text-xs font-dalek'>{messageData.username} : {messageData.time}</span>
        <div className='text-white text-lg'>
          {messageData.message}
        </div>
      </div>
    </div>
  )
}
