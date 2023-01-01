import React from 'react'
import { BsCameraVideo } from 'react-icons/bs'
import { RiUserAddLine, RiMoreFill } from 'react-icons/ri'
import Input from './Input'
import Messages from './Messages'


export default function ChatBox() {
  return (
    <div className='flex-2'>
        <div className='h-[50px] bg-gray-700 flex items-center justify-between p-2.5 text-white'>
            <span>UserName</span>
            <div className='flex gap-2.5'>
                <BsCameraVideo className='h-6 hover:cursor-pointer'/>
                <RiUserAddLine className='h-6 hover:cursor-pointer'/>
                <RiMoreFill className='h-6 hover:cursor-pointer'/>
            </div>
        </div>
        <Messages />
        <Input />
    </div>
  )
}
