import React from 'react'

export default function ChatBox() {
  return (
    <div className='rounded-lg flex flex-col gap-2 bg-zinc-800 w-full h-full p-2'>
        <div className='w-full h-full flex flex-col bg-slate-600 rounded-lg p-2'></div>
        <div className='self-end bg-zinc-600 flex items-center w-full h-10 rounded-lg'>
            <div className='h-5 w-5 flex justify-center items-center rounded-full hover:rounded-lg bg-zinc-500 mx-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
            </div>
           <input className='w-full h-10 bg-zinc-600 rounded-lg outline-none text-white'/>
        </div>
    </div>
  )
}
