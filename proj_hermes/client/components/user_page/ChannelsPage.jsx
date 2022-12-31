import React from 'react'
import ChatBox from './ChatBox'
import Link from 'next/link'
import Image from 'next/image'
import Rooms from './Rooms'

export default function ChannelsPage() {
    return (
        <div className='min-w-[400px] min-h-4h h-screen bg-slate-600 flex justify-center items-center p-2'>
            <div className=' w-full h-full flex gap-2'>
                <Rooms room={"Servers"}/>
                {/* text area */}
                <ChatBox />
            </div>
        </div>
    )
}
