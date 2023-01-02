import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa' 

export const RegisterForm = () => {
  return (
    <form className=' flex flex-col gap-[15px] items-center'>
       <div className='flex flex-col justify-center items-center gap-4 sm:grid sm:grid-cols-2 sm:justify-items-end '>
           <div>
               <div className='flex flex-col'>
                   <label className='text-white text-center mt-1 font-dalek'>first name</label>
                   <input  type='text' className='p-2 bg-orange-200 rounded-xl text-center font-bold outline-none'/>
               </div>
               <div className='flex flex-col'>
                   <label className='text-white text-center mt-1 font-dalek'>last name</label>
                   <input  type='text' className='p-2 bg-orange-200 rounded-xl text-center font-bold outline-none'/>
               </div>
               <div className='flex flex-col'>
                   <label className='text-white text-center mt-1 font-dalek'>username</label>
                   <input  type='text' className='p-2 bg-orange-200 rounded-xl text-center font-bold outline-none'/>
               </div>
               <div className='flex flex-col'>
                   <label className='text-white text-center mt-1 font-dalek'>password</label>
                   <input  type='text' className='p-2 bg-orange-200 rounded-xl text-center font-bold outline-none'/>
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
       
       <button className='bg-amber-500 py-2 px-5 font-dalek rounded-lg cursor-pointer hover:text-violet-800'>Sign Up</button>
    </form>
  )
}
