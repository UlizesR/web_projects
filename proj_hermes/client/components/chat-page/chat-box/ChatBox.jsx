import React, {useState} from 'react'
import { Header } from './Header'
import { MessageBox } from './MessageBox'
import { Input } from './Input'



export const ChatBox = () => {

  const [message, setMessage] = useState("") 
  const [messageList, setMessageList] = useState([])

  return (
    <div id='chatBox' className='min-h-fit h-full w-full flex-2 flex-col max-sm:hidden'>
        <Header />
        <MessageBox messageList={messageList}/>
        <Input  message={message} setMessage={setMessage} setMessageList={messageList} />
    </div>
  )
}
