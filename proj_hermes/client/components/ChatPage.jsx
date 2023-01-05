import React, {useState} from 'react'
import { Sidebar } from './chat-page/sidebar/Sidebar'
import { ChatBox } from './chat-page/chat-box/ChatBox'

import io from 'socket.io-client'
import { SearchBox } from './chat-page/sidebar/SearchBox'

const socket = io.connect('http://localhost:3001')

export default function ChatPage({ page }) {

  const [showSearchBox, setShowSearchBox] = useState(false)

  return (
    <div id='chatPage' className='bg-slate-600 min-h-fit h-screen '>
        <div className='flex h-full'>
          <Sidebar socket={socket} page={page} showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox}/>
          <ChatBox socket={socket}/>
        </div>
        {showSearchBox && <SearchBox page={page} showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox}/>}
    </div>
  )
}
