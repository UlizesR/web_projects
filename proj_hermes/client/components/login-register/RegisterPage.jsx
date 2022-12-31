import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import hermes_sandal from '../../public/images/white_hermes_sandal.png'

export default function RegisterPage() {
    return (
        <div className='min-w-2e min-h-5f h-screen bg-slate-600 flex justify-center items-center px-10 py-20'>
            <div className='min-w-2e min-h-4h max-w-8h max-h-4/5 bg-zinc-800 text-center flex flex-col justify-center w-full p-8 min-[250px]:h-4/5 min-[400px]:h-3/5 lg:w-2/3 xl:w-1/2'>
                <Image src={hermes_sandal} alt='logo' className='h-20 w-20 self-center'/>
                <h1 className='text-center text-white text-2xl font-dalek m-2'> Welcome to Hermes</h1>

                <div className="grid grid-cols-2 gap-4 mt-4" >
                    <div>
                        <h6 className='text-zinc-500 text-xs font-dalek p-1'>first name <span className='text-red-600'>*</span></h6>
                        <input className='p-1 self-center bg-orange-200 outline-orange-400 rounded-lg w-full pl-2'/>
                    </div>
                    <div>
                        <h6 className='text-zinc-500 text-xs font-dalek p-1'>last name <span className='text-red-600'>*</span></h6>
                        <input className='p-1 self-center bg-orange-200 outline-orange-400 rounded-lg w-full pl-2'/>
                    </div>
                    <div>
                        <h6 className='text-zinc-500 text-xs font-dalek p-1'>username<span className='text-red-600'>*</span></h6>
                        <input className='p-1 self-center bg-orange-200 outline-orange-400 rounded-lg w-full pl-2'/>
                    </div>
                    <div>
                        <h6 className='text-zinc-500 text-xs font-dalek p-1'>password <span className='text-red-600'>*</span></h6>
                        <input className='p-1 self-center bg-orange-200 outline-orange-400 rounded-lg w-full pl-2'/>
                    </div>
                </div>

                <Link href='/chanels'>
                    <button className='bg-amber-500 font-dalek m-4 p-2 rounded-lg min-[250px]:w-36 hover:text-violet-800'>sign up</button>
                </Link>

                <h8 className='text-zinc-500 text-xs font-dalek'>already have an account? <Link href='/login' className='text-cyan-500 hover:underline'>Login</Link></h8>
            </div>
        </div>
    )
}
