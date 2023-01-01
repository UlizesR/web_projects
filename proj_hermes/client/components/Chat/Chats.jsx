import React from 'react'
import Image from 'next/image'
import user from '../../public/images/user.png'

export default function Chats() {
  return (
    <div className=''>
       <div className='p-5 flex items-center gap-2.5 text-white cursor-pointer hover:bg-zinc-900'>
        <Image src={user} className='bg-white h-[50px] w-[50px] rounded-full object-cover'/>
        <div className=''>
          <span className='text-sm font-bold'>Username</span>
          <p className='text-xs text-gray-400'>Hello</p>
        </div>
      </div>
    </div>
  )
}
