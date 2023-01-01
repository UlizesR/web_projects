import React from 'react'
import { RiImageAddFill, RiFileAddLine } from 'react-icons/ri'

export default function Input() {
  return (
    <div className='h-[50px] bg-orange-200 p-2.5 flex items-center justify-between'>
        <input type='text' placeholder='Type Something...' className='bg-transparent w-full border-none outline-none'/>
        <div className='flex items-center gap-2.5'>
            <input type='file' className='hidden' id='file'/>
            <label htmlFor='file'>
                <RiFileAddLine />
                <RiImageAddFill />
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}
