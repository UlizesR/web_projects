import React from 'react'
import Image from 'next/image'
import hermes from '../../public/assets/hermes.png'

interface Props{
    children: React.ReactNode
}

export const Layout = ({children, ...props}:Props) => {
  return (
    <div className='flex h-screen bg-[#161925] '>
        <div className='m-auto bg-[#353c59] rounded-xl h-fit w-full sm:w-3/5 sm:h-3/5 flex  overflow-hidden'>
            <div className='relative h-full w-1/2 max-lg:hidden'>
                <Image src={hermes} sizes="(min-width: 768px) 100vw"  alt='hermes' fill/>
            </div>
            <div className='w-full h-full lg:w-1/2 text-center bg-[#1d304d]'>
                {children}
            </div>
        </div>
    </div>
  )
}
