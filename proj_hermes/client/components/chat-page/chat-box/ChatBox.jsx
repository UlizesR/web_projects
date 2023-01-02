import React from 'react'
import { Header } from './Header'
import { MessageBox } from './MessageBox'
import { Input } from './Input'

export const ChatBox = () => {
  return (
    <div id='chatBox' className='min-h-fit h-full w-full flex-2 flex-col'>
        <Header />
        <MessageBox />
        <Input />
    </div>
  )
}
