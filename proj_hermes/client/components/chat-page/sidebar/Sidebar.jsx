import React from 'react'
import { Channels } from './Channels'
import { Header } from './Header'
import { UserInfo } from './UserInfo'


export const Sidebar = (props) => {
  
  return (
    <div id='sideBar' className='min-h-fit h-full min-w-fit flex flex-col w-72 max-sm:w-full '>
        <Header page={ props.page }/>
        <Channels  page={ props.page } showSearchBox={props.showSearchBox} setShowSearchBox={props.setShowSearchBox}/>
        <UserInfo />
        
    </div>
  )
}
