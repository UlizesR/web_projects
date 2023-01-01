import Image from 'next/image'
import React from 'react'

import user from '../../public/images/user.png'

export default function Search() {
  return (
    <div className='border-solid border-b-[1px] border-gray-400'>
      <div className='p-5 '>
        <input type='text' placeholder='find a user...' className='bg-transparent border-none text-white outline-none'/>
      </div>
      <div className='p-5 flex items-center gap-2.5 text-white cursor-pointer hover:bg-zinc-900'>
        <Image src={user} className='bg-white h-[50px] w-[50px] rounded-full object-cover'/>
        <div className=''>
          <span>Username</span>
        </div>
      </div>
    </div>
  )
}
