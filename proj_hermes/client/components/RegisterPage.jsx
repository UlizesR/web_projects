import React from 'react'
import Image from 'next/image'

import { FaRegUserCircle } from 'react-icons/fa'

export default function RegisterPage() {
  return (
    <div className='bg-slate-600 h-screen flex items-center justify-center'>
        <div className='bg-zinc-800 py-5 px-[60px] rounded-xl flex flex-col gap-2.5 items-center'>
            {/* Tittle of Page */}
            <span className='text-white text-2xl font-dalek'>Hermes Chat</span>
            <span className='text-white text-xs font-dalek'>Register</span>

            {/* form for creating a new users information */}
            <form className='flex flex-col gap-[15px] items-center'>
                <div className='grid grid-cols-2 gap-4 justify-items-end items-center'>
                    <div>
                        <div className='flex flex-col'>
                            <label className='text-white text-center mt-1 font-dalek'>first name</label>
                            <input  type='text' className='p-2 bg-orange-200 rounded-xl font-bold outline-none'/>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-white text-center mt-1 font-dalek'>last name</label>
                            <input  type='text' className='p-2 bg-orange-200 rounded-xl font-bold outline-none'/>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-white text-center mt-1 font-dalek'>username</label>
                            <input  type='text' className='p-2 bg-orange-200 rounded-xl font-bold outline-none'/>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-white text-center mt-1 font-dalek'>password</label>
                            <input  type='text' className='p-2 bg-orange-200 rounded-xl font-bold outline-none'/>
                        </div>
                        
                    </div>
                    <input type='file' id='file' className='hidden'/>

                    <label htmlFor='file' className='text-white font-dalek hover:cursor-pointer'>
                        <UserProfileIcon icon={<FaRegUserCircle size='100'/>}/>
                        Add Profile image
                    </label>
                </div>
                
                <button className='bg-amber-500 py-2 px-5 font-dalek rounded-lg cursor-pointer hover:text-violet-800'>Sign Up</button>
            </form>

            {/* To redirect someone to the login page */}
            <p className='text-zinc-500 font-dalek text-xs mt-2.5'>Already have an account? Login</p>
        </div>
    </div>
  )
}


const UserProfileIcon = ({ icon }) => (
    <div className='user-icon my-5'>
        {icon}
    </div>
);