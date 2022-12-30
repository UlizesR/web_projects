import React from 'react'
import Head from 'next/head'

import LoginPage from '../components/login-register/LoginPage'

export default function login() {


  return (
    <>
      <Head>
        <title>Login Page - Hermes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hermes_logo.png" />
      </Head>

      <LoginPage />
    </>
  )
}