import React from 'react'
import { Link } from 'react-router-dom'
import hermes_sandal from '../images/hermes_sandal.png'
import rotulus2 from '../images/rotulus2.png'
import rotulus3 from '../images/rotulus3.png'

import { useMediaQuery } from '../hooks/hooks'
 
export default function LoginPage() {

  const imgType = useMediaQuery('(min-width: 640px)');

  const style = {
      container: imgType => ({
        backgroundImage: imgType ? `url(${rotulus2})` : `url(${rotulus3})`
      })
  }

  return (
    <div className='h-screen w-screen bg-slate-600 flex justify-center items-center'>
      <div className='bg-contain bg-no-repeat bg-center flex justify-center items-center py-2 min-[250px]:h-screen min-[250px]:w-screen sm:w-3/4 sm:h-1/2 lg:w-1/2' style={style.container(imgType)} >
        <div className='block p-2 w-fit h-fit '>
          
          <div className=''>
            <div className='flex flex-row justify-center items-center'>
              <img srx={hermes_sandal} className='inline h-10 w-10 sm:hidden' alt='logo'/>
              <h1 className='inline text-center text-2xl font-dalek p-2 sm:hidden'>Hermes</h1>
            </div>
            <h1 className='block text-center text-xl font-dalek'>Welcome Back!</h1>
          </div>
          <div className='flex flex-col items-center'>
            {/* Username input */}
            <h1 className='text-zinc-500 pl-2 pt-2 m-1 font-dalek'>Username <span className='text-red-600'>*</span></h1>
            <input className=' p-1 min-[250px]:w-44 min-[350px]:w-72 sm:w-80'/>

            {/* Password input */}
            <h1 className='text-zinc-500 pl-2 pt-2 m-1 font-dalek'>Password <span className='text-red-600'>*</span></h1>
            <input className=' p-1 min-[250px]:w-44 min-[350px]:w-72 sm:w-80'/>

            {/* Login button */}
            <Link className='bg-amber-500 text-center items-center m-2' to='/UserPage'>
              <button className='p-2 min-[250px]:w-36 sm:w-80 text-slate-800 font-dalek'>Login</button>
            </Link>

            <h4 className='mx-2 text-zinc-600 text-xs text-center'> 
              Need an account? {}
              <Link className='text-cyan-700 hover:underline' to='/Register'>
                Register 
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

// {/* Username input */}
// <h1 className='text-zinc-500 pl-2 pt-2'>Username <span className='text-red-600'>*</span></h1>
// <input className='bg-zinc-900 text-white p-1 min-[320px]:w-64 md:w-80'/>

// {/* Password input */}
// <h1 className='text-zinc-500 pl-2 pt-2'>Password <span className='text-red-600'>*</span></h1>
// <input className='bg-zinc-900 text-white p-1 min-[320px]:w-64 md:w-80'/>

// {/* Login button */}
// <Link className='bg-amber-500 text-center items-center m-5 w-fit' to='/UserPage'>
//   <button className='px-2 p-2 w-64 text-slate-800'>Login</button>
// </Link>

// <h4 className='mx-2 text-zinc-400 text-xs text-center'> 
//   Need an account? {}
//   <Link className='text-cyan-500 hover:underline' to='/Register'>
//     Register 
//   </Link>
// </h4>