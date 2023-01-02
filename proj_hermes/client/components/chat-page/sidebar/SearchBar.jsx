import React from 'react'
import { ImSearch } from 'react-icons/im'

export const SearchBar = ({ page }) => {

    const text = page == '@me' ? 'Friend': 'Room'
    const placeholder = `find ${text}...`

    return (
        <div className='flex items-center px-2 w-fit bg-orange-200 rounded-lg my-2'>
            <ImSearch />
            <input type='text' placeholder={placeholder} className='bg-transparent border-none p-2 outline-none'/>
        </div>
    )
}
