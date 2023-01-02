import React from 'react'
import { Channels } from './Channels'
import { Header } from './Header'
import { UserInfo } from './UserInfo'


export const Sidebar = ({ page }) => {
  return (
    <div id='sideBar' className='min-h-fit h-full flex flex-col w-72 max-sm:hidden'>
        <Header page={ page }/>
        <Channels page={ page }/>
        <UserInfo />
    </div>
  )
}
