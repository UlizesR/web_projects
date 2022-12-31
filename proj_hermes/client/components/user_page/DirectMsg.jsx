import React from 'react'

import Rooms from './Rooms'
import ChatBox from './ChatBox'

export default function DirectMsg() {
  return (
    <div className='min-w-[400px] min-h-4h h-screen bg-slate-600 flex justify-center items-center p-2'>
        <div className=' w-full h-full flex gap-2'>
            <Rooms room={"Direct Messages"}/>
            {/* text area */}
            <ChatBox />
        </div>
    </div>
  )
}
