import React from 'react'

export default function Rooms({room}) {
  return (
    <div className='flex '>
        {/* rooms */}
        <div className='w-80 h-full flex flex-col bg-zinc-800  p-1'>
            <div className=' w-full h-40 bg-zinc-600 p-10'>
                <div className='w-full h-full bg-zinc-300 flex justify-center items-center'>
                    <h1 className='font-dalek text-2xl text-center'>{room}</h1>
                </div>
            </div>
            <div className='h-full flex'>
                <div className='self-start h-full w-40 bg-zinc-600 mx-4'/>
                <div className='self-auto h-full w-full flex flex-col items-center py-10'>
                    <div className='h-20 w-20 bg-slate-600 rounded-2xl'></div>
                </div>
                <div className='self-end h-full w-40 bg-zinc-600 mx-4'/>
            </div>
            <div className='self-end  w-full h-32 bg-zinc-600'></div>
        </div>
    </div>
  )
}
