import React from 'react'
import { Link } from 'react-router-dom'
 
export default function LoginPage() {
  return (
    <div className='resize bg-slate-400 flex items-center justify-center h-screen '>
        <div className='resize bg-zinc-700 h-1/2 w-1/2 rounded-lg '>
            <div className='text-center h-1/5 p-4'>
                <h4 className='text-white text-xl p-1'> Welcome Back! </h4>
                <h6 className='text-gray-500'>We are excited to have you back</h6>
            </div>

            <div className='items-center h-4/5'>
              <div className='grid items-center justify-center p-4'>
                <div className='m-2'>
                  <div className='py-1'>
                    <h2 className='inline text-zinc-300 py-2'> Username </h2>
                    <h2 className=' inline text-red-600 py-2'>*</h2>
                  </div>
                  <input className='bg-zinc-800 text-white p-1'/>
                  <div className='py-1'>
                    <h2 className='inline text-zinc-300 py-2'> Password </h2>
                    <h2 className=' inline text-red-600 py-2'>*</h2>
                  </div>
                  <input className='bg-zinc-800 text-white p-1'/>
               </div>
                <Link className='bg-amber-500 text-center m-2' to='/UserPage'>
                  <button className='px-2 p-2 w-32 text-slate-800'>Login</button>
                </Link>
                <h4 className='mx-2 text-zinc-400 text-xs text-center'> 
                  Need an account? {}
                  <Link className='text-cyan-500 hover:underline' to='/Register'>
                    Register 
                  </Link>
                </h4>
              </div>
            </div>
        </div>
    </div>
  )
}
