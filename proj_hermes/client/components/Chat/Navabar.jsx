import React from 'react'
import Image from 'next/image'

import user from '../../public/images/user.png'

import white_hermes_sandal from '../../public/images/white_hermes_sandal.png'

export default function Navabar() {
  return (
    <div className='flex items-center bg-gray-800 h-[50px] p-5 justify-between text-white'>
        <span>
            <Image src={white_hermes_sandal} className='h-10 w-10'/>
        </span>
        <div className='flex gap-2.5 '>
            <Image src={user}  alt='' className='bg-white w-6 h-6 rounded-full object-cover'/>
            <span>name</span>
        </div>
    </div>
  )
}
