import React from 'react'
import Head from 'next/head'
import DirectMsg from '../components/user_page/DirectMsg'

export default function direct_messages() {
  return (
    <>
        <Head>
            <title>Direct Messages - Hermes</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/hermes_logo.png" />
        </Head>

        <DirectMsg />
    </>
  )
}
