import React from 'react'
import { Message } from './Message'


export const MessageBox = ({ messageList }) => {
  
  
  return (
    <div id='messageBox' className='min-h-[350px] h-[calc(100%-160px)] p-5 flex flex-col  bg-slate-600 overflow-y-auto overscroll-none scroll-smooth scrollbar-hide'>
        {messageList.map((messageContent) => {
          return (<Message message={messageContent} />)
        })}
    </div>
  )

}
