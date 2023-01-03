import React from 'react'
import { Sidebar } from './chat-page/sidebar/Sidebar'
import { ChatBox } from './chat-page/chat-box/ChatBox'
import { SearchBox } from './chat-page/sidebar/SearchBox'

export default function ChatPage({ page }) {
  return (
    <div id='chatPage' className='bg-slate-600 min-h-fit h-screen '>
        <div className='flex h-full'>
          <Sidebar page={page}/>
          <ChatBox />
        </div>
    </div>
  )
}
