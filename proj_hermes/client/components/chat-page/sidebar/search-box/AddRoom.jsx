import React, {useState} from 'react'
import { MakeRoom } from './MakeRoom';
import { SearchRoom } from './SearchRoom';

export const AddRoom = (props) => {

    const [makeRoom, setMakeRoom] = useState(false);
    const [addRoom, setAddRoom] = useState(false);

    return (
        <div className='h-fit w-fit flex flex-col gap-5 items-center'>
            {makeRoom ? <MakeRoom setMakeRoom={setMakeRoom} setShowSearchBox={props.setShowSearchBox}/> 
                :<>
                    {addRoom ? <SearchRoom setShowSearchBox={props.setShowSearchBox}/>
                    :<>
                        <span className='text-white text-2xl font-dalek'>Search for Room</span>
                        <button 
                            className='text-white text-2xl font-dalek bg-amber-500 p-2 rounded-lg hover:bg-violet-800 hover:text-amber-500 '
                            onClick={() => setAddRoom(!addRoom)}
                        >
                            search
                        </button>
                        <span className='text-white text-3xl font-dalek'>or</span>
                        <span className='text-white text-2xl font-dalek'>Make a Room</span>
                        <button 
                            className='text-white text-2xl font-dalek bg-amber-500 p-2 rounded-lg hover:bg-violet-800 hover:text-amber-500 '
                            onClick={() => setMakeRoom(!makeRoom)}
                        >
                            make room
                        </button>    
                    </>}        
                </>
            }
        </div>
    )
}
