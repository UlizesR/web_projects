import React, { useState } from 'react'
import { CgAddR } from 'react-icons/cg'
import { SearchBar } from './SearchBar'

export const Channels = (props) => {

    const text = props.page == '@me' ? 'Friends': 'Rooms'
    const [addChannel, setAddChannel] = useState([])
    const [isChannelAdded, setIsChannelAdded] = useState(false)

    return (
        <div className='min-h-[350px] h-[calc(100%-160px)] max-sm:flex max-sm:justify-center min-w-fit w-full p-5'>
            <div className='min-h-full h-full w-full max-sm:w-2/3 bg-zinc-800 rounded-xl p-5 flex flex-col items-center'>
                <span className='text-white text-center text-3xl font-dalek my-2'>{text}</span>
                <div className='w-4/5 h-1 bg-white rounded-full my-2'/>
                <SearchBar page={props.page} setAddChannel={setAddChannel} setIsChannelAdded={setIsChannelAdded} />
                { }
                <button 
                    onClick={() => props.setShowSearchBox(!props.showSearchBox)} 
                    className='bg-amber-500 w-20 h-20 rounded-lg p-2.5 my-2 flex justify-center items-center hover:bg-violet-800 hover:text-amber-500 '
                >
                    <CgAddR size='50'/>
                </button>
            </div>
        </div>
    )
}
