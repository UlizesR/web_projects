import React from 'react'
import Link from 'next/link'
import { FaRegUserCircle } from 'react-icons/fa' 

export const RegisterForm = (props) => {
    return (
        <form className=' flex flex-col gap-[15px] items-center' onSubmit={(e) => e.preventDefault()}>
            <div className='flex flex-col justify-center items-center gap-4 sm:grid sm:grid-cols-2 sm:justify-items-end '>
                <div>
                    <div className='flex flex-col'>
                        <label className='text-white text-center mt-1 font-dalek'>first name</label>
                        <input  
                            type='text' 
                            onChange={(event) => props.setFirstName(event.target.value)}
                            className='p-2 bg-orange-200 rounded-xl text-center font-bold outline-none'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white text-center mt-1 font-dalek'>last name</label>
                        <input  
                            type='text' 
                            onChange={(event) => props.setLastName(event.target.value)}
                            className='p-2 bg-orange-200 rounded-xl text-center font-bold outline-none'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white text-center mt-1 font-dalek'>username</label>
                        <input  
                            type='text' 
                            onChange={(event) => props.setUsername(event.target.value)}
                            className='p-2 bg-orange-200 rounded-xl text-center font-bold outline-none'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white text-center mt-1 font-dalek'>password</label>
                        <input  
                            type='password' 
                            onChange={(event) => props.setPassword(event.target.value)}
                            className='p-2 bg-orange-200 rounded-xl text-center font-bold outline-none'
                        />
                    </div>
                </div>

                <input type='file' id='file' className='hidden'/>
                <label htmlFor='file' className='text-white font-dalek hover:cursor-pointer'>
                    <div className='border-white border-2 rounded-lg p-2.5 mb-4 flex items-center justify-center hover:bg-violet-900'>
                        <FaRegUserCircle size='100'/>
                    </div>
                    Add Profile image
                </label>
            </div>
            
            <Link href='/channels/@me'>
                <button 
                    type='submit'
                    className='bg-amber-500 py-2 px-5 text-lg font-dalek rounded-lg cursor-pointer hover:bg-violet-800 hover:text-amber-500'
                >
                    Sign Up
                </button>
            </Link>
        </form>
    )
}
