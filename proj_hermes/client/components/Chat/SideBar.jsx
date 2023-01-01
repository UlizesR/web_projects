import React from 'react'
import Navabar from './Navabar'
import Search from './Search'
import Chats from './Chats'

export default function SideBar() {
  return (
    <div className='flex-1 bg-zinc-800'>
        <Navabar />
        <Search />
        <Chats />
    </div>
  )
}
