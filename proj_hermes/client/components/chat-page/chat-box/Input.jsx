import React, { useEffect } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import { RiImageAddFill, RiFileAddLine } from 'react-icons/ri'
import { MdOutlineEmojiEmotions } from 'react-icons/md'


export const Input = ({socket, message, setMessage, setMessageList }) => {

    const sendMessage = async () => {
        if (message !== "") {
            const messageData = {
                username: 'username',
                message: message,
                time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
            }
            await socket.emit("send_message", messageData)
            setMessageList((list) => [...list, messageData])
        }
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data])
        })
    }, [socket])
    
    return (
        <div className='h-20 px-4 bg-slate-600'>
            <div className='flex gap-2.5 bg-zinc-800 p-4 rounded-2xl items-center'>
                <input 
                    type='text' 
                    id='messageInput' 
                    placeholder='Type Something...' 
                    onChange={(event) => {setMessage(event.target.value)}} 
                    className='bg-transparent text-white w-full text-lg border-none outline-none'
                />
                <MdOutlineEmojiEmotions size='35' className='text-white hover:text-amber-500'/>
                <div className='flex gap-2.5'>
                    <input type='file' id='file'   className='hidden'/>
                    <label htmlFor='file' className='text-white h-fit w-fit font-dalek flex gap-2.5 items-center hover:cursor-pointer'>
                        <RiFileAddLine size='30'  className='hover:text-amber-500'/>
                        <RiImageAddFill size='30' className='hover:text-amber-500'/>
                    </label>
                </div>
                <button 
                    onClick={sendMessage} 
                    id='send' 
                    className='p-2.5 text-white text-sm font-dalek bg-amber-500 rounded-lg hover:bg-violet-800 hover:text-amber-500 cursor-pointer'
                >
                    Send
                </button>
            </div>
        </div>
    )
}
