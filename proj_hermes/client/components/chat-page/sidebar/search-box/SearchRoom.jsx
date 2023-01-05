import React from 'react'
import Link from 'next/link'
import { ImSearch } from 'react-icons/im'

export const SearchRoom = ({ setShowSearchBox }) => {
    return (
        <div className='h-fit w-full flex flex-col gap-5 items-center inset-0'>
            <span className='text-white text-center text-2xl font-dalek'>search room</span>
            <div className='flex items-center px-2 w-full bg-orange-200 rounded-lg my-2'>
                <ImSearch />
                <input type='text' className='bg-transparent border-none p-2 outline-none'/>
            </div>
            <Link href='/channels/rooms'>
                    <button 
                        className='bg-amber-500 py-2 px-5 text-lg font-dalek rounded-lg cursor-pointer hover:bg-violet-800 hover:text-amber-500'
                        onClick={() => {setShowSearchBox(false)}}
                    >
                        search room
                    </button>
                </Link>
        </div>
    )
}
