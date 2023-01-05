import React from 'react'
import Link from 'next/link'
import { FaRegUserCircle } from 'react-icons/fa' 

export const MakeRoom = ({ setMakeRoom, setShowSearchBox }) => {
    return (
        <div className='h-fit w-fit flex flex-col gap-5 items-center inset-0'>
                <div className='flex flex-col items-center px-2.5 w-full '>
                    <label className='text-center text-xl text-white font-dalek'>Room Name</label>
                    <input type='text' className='bg-orange-200 w-full font-bold border-none p-2 rounded-lg outline-none'/>
                </div>
                <input type='file' id='file' className='hidden'/>
                <label htmlFor='file' className='text-white text-center text-xl font-dalek hover:cursor-pointer'>
                    <div className='border-white border-2 rounded-lg p-2.5 flex items-center justify-center hover:bg-violet-900'>
                        <FaRegUserCircle size='75'/>
                    </div>
                    room image
                </label>
            <Link href='/channels/rooms'>
                <button 
                    className='bg-amber-500 py-2 px-5 text-lg font-dalek rounded-lg cursor-pointer hover:bg-violet-800 hover:text-amber-500'
                    onClick={() => {setMakeRoom(false); setShowSearchBox(false)}}
                >
                    make room
                </button>
            </Link>
        </div>
    )
}
