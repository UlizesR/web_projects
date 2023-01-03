import React from 'react'
import { Sidebar } from './chat-page/sidebar/Sidebar'
import { ChatBox } from './chat-page/chat-box/ChatBox'

export default function ChatPage({ page }) {
  return (
    <div id='chatPage' className='bg-slate-600 min-h-fit w-screen h-screen flex '>
        <Sidebar page={page}/>
        <ChatBox />
    </div>
  )
}
