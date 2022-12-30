import React from 'react'
import Head from 'next/head'
import RegisterPage from '../components/login-register/RegisterPage'


export default function register() {
    return (
        <>
            <Head>
                <title>Register Page - Hermes</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/hermes_logo.png" />
            </Head>

            <RegisterPage />
        </>
    )
}
