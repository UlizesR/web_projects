import React from 'react'
import { Channels } from './Channels'
import { Header } from './Header'
import { UserInfo } from './UserInfo'


export const Sidebar = ({ socket, page, showSearchBox, setShowSearchBox }) => {
  
  return (
    <div id='sideBar' className='min-h-fit h-full min-w-fit flex flex-col w-72 max-sm:w-full '>
        <Header page={ page }/>
        <Channels page={ page } showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox}/>
        <UserInfo />
        
    </div>
  )
}
