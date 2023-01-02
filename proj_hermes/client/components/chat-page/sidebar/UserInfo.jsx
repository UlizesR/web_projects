import React from 'react'
import Link from 'next/link'
import { FaRegUserCircle } from 'react-icons/fa' 

export const UserInfo = () => {
  return (
    <div className='h-20 px-4 py-2'>
      <div className='flex gap-2.5 bg-zinc-800 p-2 rounded-2xl items-center justify-center text-white'>
        <FaRegUserCircle size='30'/>
        UserName
      </div>
    </div>
  )
}
