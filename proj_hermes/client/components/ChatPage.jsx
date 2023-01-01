import React from 'react'
import ChatBox from './Chat/ChatBox'
import SideBar from './Chat/SideBar'

export default function ChatPage() {
  return (
    <div className='bg-slate-600 h-screen flex items-center justify-center'>
      <div className='border-solid border-white border-[1px] rounded-[10px] flex overflow-hidden w-2/3 h-4/5'>
        <SideBar />
        <ChatBox />
      </div>
    </div>
  )
}
