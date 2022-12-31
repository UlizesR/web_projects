import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import hermes_sandal from '../../public/images/white_hermes_sandal.png'
 
export default function LoginPage() {
  return (
    <div className='min-w-2e min-h-5f h-screen bg-slate-600 flex justify-center items-center px-10 py-20'>
      <div className='min-w-2e min-h-5f max-w-[1500px] max-h-4/5 bg-zinc-800 text-center flex flex-col justify-center items-center xl:grid xl:grid-cols-2 xl:justify-items-center w-full p-4 min-[250px]:h-4/5 min-[400px]:h-1/2' >
        <div className=' w-full h-full hidden  xl:block'>
          <div className='bg-contain bg-no-repeat bg-centerv bg-volumen xl:min-w-full xl:max-h-5f w-full h-full py-20 px-28'>

          </div>
        </div>
        <div className=' flex flex-col justify-center items-center w-2/3'>
          <div className='flex flex-row justify-center items-center'>
            <Image src={hermes_sandal} alt='logo' className='h-10 w-10' loading='eager' priority={true}/>
            <h1 className='text-center text-white text-2xl font-dalek m-2'>Hermes</h1>
          </div>

          <h1 className='block text-2xl text-white font-dalek p-4'> welcome back!</h1>
          
          <h6 className='text-zinc-500 text-xs font-dalek p-1'>username <span className='text-red-600'>*</span></h6>
          <input className='p-1 self-center bg-orange-200 outline-orange-400 rounded-lg w-full sm:w-2/3 lg:w-1/2 pl-2'/>
          <h6 className='text-zinc-500 text-xs font-dalek p-1'>password <span className='text-red-600'>*</span></h6>
          <input className='p-1 self-center bg-orange-200 outline-orange-400 rounded-lg w-full sm:w-2/3 lg:w-1/2 pl-2'/>

          <Link href='/chanels'>
            <button className='bg-amber-500 font-dalek m-4 p-2 rounded-lg min-[250px]:w-36 hover:text-violet-800'>Login</button>
          </Link>

          <h7 className='text-zinc-500 text-xs font-dalek'>Need an account? <Link href='/register' className='text-cyan-500 hover:underline'>Register</Link></h7>

        </div>
      </div>
    </div>
  )
}
