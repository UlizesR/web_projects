import React from 'react'
import Link from 'next/link'

export const LoginPage = () =>  {
    return (
        <div className='min-w-screen bg-slate-600 h-screen flex items-center justify-center'>
            <div className='min-h-fit max-h-screen max-[350px]:w-screen max-[350px]:rounded-none h-fit bg-zinc-800 py-5 px-[60px] rounded-xl flex flex-col gap-2.5 items-center'>
                {/* Tittle of Page */}
                <span className='text-white text-2xl font-dalek'>Hermes Chat</span>
                <span className='text-white text-xs font-dalek'>Login</span>

                {/* form for creating a new users information */}
                <form className='flex flex-col gap-[15px] items-center'>
                    <div className='flex flex-col'>
                        <label className='text-white text-center mt-1 font-dalek'>username</label>
                        <input  type='text' className='p-2 bg-orange-200 rounded-xl font-bold outline-none'/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white text-center mt-1 font-dalek'>password</label>
                        <input  type='text' className='p-2 bg-orange-200 rounded-xl font-bold outline-none'/>
                    </div>
                    
                    <Link href='/channels/@me'>
                        <button className='bg-amber-500 py-2 px-5 text-lg font-dalek rounded-lg cursor-pointer hover:bg-violet-800 hover:text-amber-500'>Login</button>
                    </Link>
                </form>

                {/* To redirect someone to the login page */}
                <p className='text-zinc-500 font-dalek text-xs text-center mt-2.5'>Don't have an account? 
                    <Link href='/register' className='text-cyan-500 hover:underline'>
                        Register
                    </Link>
                </p>
            </div>
        </div>
    )
}
