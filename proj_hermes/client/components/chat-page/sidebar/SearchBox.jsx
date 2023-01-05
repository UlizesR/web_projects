import React from 'react'
import { ImSearch, ImCross } from 'react-icons/im'
import { AddFriend } from './search-box/AddFriend';
import { AddRoom } from './search-box/AddRoom';


export const SearchBox = ({ page, showSearchBox, setShowSearchBox }) => {

    const text = page == '@me' ? 'Friend': 'Room'
    const isRoom = text === 'Room';


    return (
        <div className='h-screen w-screen inset-0 fixed flex justify-center items-center bg-[rgba(0,0,0,0.7)] '>
            <div className='max-h-3/4 h-fit w-2/3 sm:w-1/2 lg:w-1/3 bg-zinc-800 flex flex-col items-center gap-2.5 p-5 rounded-xl'>             
                <button 
                    className='self-end text-white bg-amber-500 p-2 rounded-lg hover:bg-violet-800 hover:text-amber-500 '
                    onClick={() => setShowSearchBox(!showSearchBox)} 
                >
                    <ImCross />
                </button>

                <div className='p-5'>
                    {isRoom ? <AddRoom setShowSearchBox={setShowSearchBox}/> : <AddFriend setShowSearchBox={setShowSearchBox}/>}
                </div>
            </div>
        </div>
    )
}
