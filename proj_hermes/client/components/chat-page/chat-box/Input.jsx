import React from 'react'
import { RiImageAddFill, RiFileAddLine } from 'react-icons/ri'
import { MdOutlineEmojiEmotions } from 'react-icons/md'

export const Input = () => {
  return (
    <div className='h-20 px-4 bg-slate-600'>
        <div className='flex gap-2.5 bg-zinc-800 p-4 rounded-2xl'>
            <input type='text' placeholder='Type Something...' className='bg-transparent text-white w-full text-lg border-none outline-none'/>
            <MdOutlineEmojiEmotions size='35' className='text-white hover:text-amber-500'/>
            <div className='flex gap-2.5'>
                <input type='file' id='file' className='hidden'/>
                <label htmlFor='file' className='text-white font-dalek flex gap-2.5 items-center hover:cursor-pointer'>
                    <div>
                        <RiFileAddLine size='30'  className='hover:text-amber-500'/>
                    </div>
                    <div>
                        <RiImageAddFill size='30' className='hover:text-amber-500'/>
                    </div>
                </label>
            </div>
        </div>
    </div>
  )
}
