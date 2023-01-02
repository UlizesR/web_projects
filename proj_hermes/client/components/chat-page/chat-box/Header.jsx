import React from 'react'
import { TiThMenu } from 'react-icons/ti'

export const Header = () => {

  const onClick = () => {
    let sideBar = document.getElementById('sideBar')
    let chatBox = document.getElementById('chatBox')
    sideBar.style.display = 'flex'
    chatBox.style.display = 'none'
  }

  return (
    <div className='h-20 flex justify-between bg-zinc-800 p-2.5'>
        <div onClick={onClick} className='flex items-center text-white hover:text-amber-500 sm:hidden'>
          <TiThMenu size='30'/>
        </div>
    </div>
  )
}
