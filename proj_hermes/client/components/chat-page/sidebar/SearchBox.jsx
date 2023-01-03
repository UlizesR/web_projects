import React from 'react'
import { ImSearch } from 'react-icons/im'

export const SearchBox = () => {
    return (
        <div className='h-screen w-screen z-[2] flex justify-center items-center bg-[rgba(0,0,0,0.2)]'>
            <div className='h-1/2 w-1/2 bg-zinc-800'>
                <div className='flex items-center px-2 w-fit bg-orange-200 rounded-lg my-2'>
                    <ImSearch />
                    <input type='text' className='bg-transparent border-none p-2 outline-none'/>
                </div>
            </div>
        </div>
    )
}
