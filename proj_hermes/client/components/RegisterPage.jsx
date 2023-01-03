import React, {useState} from 'react'
import Link from 'next/link'

import { RegisterForm } from './register-page/RegisterForm'

export const RegisterPage = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='min-w-screen bg-slate-600 h-screen flex items-center justify-center'>
            <div className='min-h-fit max-h-screen max-[350px]:h-screen max-[350px]:w-screen max-[350px]:rounded-none bg-zinc-800 py-5 px-[60px] rounded-xl flex flex-col gap-2.5 items-center'>
                {/* Tittle of Page */}
                <span className='text-white text-2xl text-center font-dalek'>Hermes Chat</span>
                <span className='text-white text-xs text-center font-dalek'>Register</span>

                {/* form for creating a new users information */}
                <RegisterForm setFirstName={setFirstName} setLastName={setLastName} setUsername={setUsername} setPassword={setPassword} />

                {/* To redirect someone to the login page */}
                <p className='text-zinc-500 font-dalek text-xs text-center mt-2.5'>Already have an account? 
                    <Link href='/login' className='text-cyan-500 hover:underline'>
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}
