import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import hermes_sandal from '../public/images/white_hermes_sandal.png'

export default function UserPage() {
  return (
    <>
      <Head>
        <title>User Page - Hermes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hermes_logo.png" />
      </Head>
      
      <div className='min-w-[400px] min-h-4h h-screen bg-slate-600 flex justify-center items-center p-2'>
        <div className=' w-full h-full bg-zinc-600 flex gap-2'>
          <div className='flex '>
            {/* rooms */}
            <div className='w-16 h-full flex flex-col items-center bg-slate-300 rounded-l-lg p-1'>
              <div className='h-12 w-6 hover:w-12 rounded-lg bg-[#c0a170]'>
                <Link href='/direct_messages'>
                  <button data-tooltip-target="tooltip-right" data-tooltip-placement="right" className='w-full h-full'/>
                </Link>
                <div id="tooltip-right" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                    Direct Messages
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
              </div>
              <div class="w-10 h-0.5 bg-gray-600 my-2"></div>
              <div className='h-12 w-12 flex justify-center items-center rounded-full hover:rounded-lg bg-[#c0a170]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </div>
            </div>
            {/* channels */}
            <div className='w-44 h-full bg-slate-400 rounded-r-lg'>

            </div>
          </div>
          {/* text area */}
          <div className='rounded-lg flex flex-col bg-[#c0a170] w-full h-full'>
            <div>
               
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

{/* <div class="space-y-2">
  <span class="block w-8 h-1 bg-gray-600"></span>
  <span class="block w-8 h-1 bg-gray-600"></span>
  <span class="block w-8 h-1 bg-gray-600"></span>
</div> */}