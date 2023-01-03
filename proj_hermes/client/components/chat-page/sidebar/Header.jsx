import React from 'react'
import Link from 'next/link'
import { BsFillChatRightTextFill } from 'react-icons/bs'

export const Header = ({ page }) => {
    
    let channel = ''
    const text = page == '@me' ? 'Direct Messages': 'Rooms'
    text == 'Direct Messages'? (channel = 'rooms') : (channel = '@me')
    let link = `/channels/${channel}`

    const onClick = () => {
        let sideBar = document.getElementById('sideBar')
        let chatBox = document.getElementById('chatBox')
        sideBar.style.display = 'none'
        chatBox.style.display = 'flex'
    }

    return (
        <div className='min-h-[80px] h-20 w-full p-2 flex justify-evenly items-center border-white border-solid border-r-4 bg-zinc-800'>
            <span className='text-white text-center text-2xl font-dalek'>{text}</span>
            <Link href={link}>
                <button className='text-white text-center text-4xl font-dalek hover:text-amber-500'>{'>'}</button>
            </Link>
            <div onClick={onClick} className='flex items-center text-white hover:text-amber-500 sm:hidden'>
                <BsFillChatRightTextFill size='30'/>
            </div>
        </div>
    )
}