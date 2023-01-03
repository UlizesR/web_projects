import React, { useEffect } from 'react'
import { RiImageAddFill, RiFileAddLine } from 'react-icons/ri'
import { MdOutlineEmojiEmotions } from 'react-icons/md'


export const Input = ({ message, setMessage }) => {

    const onChange = (event) => {
        setMessage(event.target.value) 
    }

    const onClick = () => {
        // gets the elements that are gonna be changed
        const messageBox = document.getElementById('messageBox');
        const messageWrapper = document.createElement('div')
        const messageDiv = document.createElement('div');

        // stylizes the elements that are being added
        messageWrapper.className = 'flex justify-end w-full p-2.5 items-center gap-2 hover:bg-slate-700'
        messageDiv.className = 'block w-fit text-white text-lg p-2.5 rounded-t-lg rounded-l-lg bg-zinc-800'

        const username = document.createTextNode('username')
        messageDiv.appendChild(username)
        // makes the content that's going to be added
        const messageText = document.createTextNode(message);

        // adds the content
        
        messageDiv.appendChild(messageText);
        messageWrapper.appendChild(messageDiv)
        messageBox.appendChild(messageWrapper);
    }

    // useEffect(() => {

    // }, [])
    
    return (
        <div className='h-20 px-4 bg-slate-600'>
            <div className='flex gap-2.5 bg-zinc-800 p-4 rounded-2xl items-center'>
                <input type='text' id='messageInput' placeholder='Type Something...' onChange={onChange} className='bg-transparent text-white w-full text-lg border-none outline-none'/>
                <button onClick={onClick} id='send' className='p-2.5 text-white text-sm font-dalek bg-amber-500 rounded-lg hover:bg-violet-800 hover:text-amber-500 cursor-pointer'>Send</button>
                <MdOutlineEmojiEmotions size='35' className='text-white hover:text-amber-500'/>
                <div className='flex gap-2.5'>
                    <input type='file' id='file' className='hidden'/>
                    <label htmlFor='file' className='text-white font-dalek flex gap-2.5 items-center hover:cursor-pointer'>
                        <div>
                            <RiFileAddLine size='30'  className='hover:text-amber-500'/>
                        </div>
                        <div>
                            <RiImageAddFill size='30' className='hover:text-amber-500'/>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}
