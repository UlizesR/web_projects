

import React from 'react'

export default function GameUI() {
    return (
        <div className='grid items-center  h-[75px] text-white text-center uppercase'>
            <div className='  bg-amber-400 p-2 rounded-xl mx-36'>
                <h1>timer:</h1>
            </div>
            <div className='flex justify-between'>
                <div className='m-10 bg-amber-400 p-2 rounded-xl'>
                    <h1>White turn</h1>
                </div>

                <div className='m-10 bg-amber-400 p-2 rounded-xl'>
                    <h2>Black turn</h2>
                </div>
            </div>
        </div>
    )
}
