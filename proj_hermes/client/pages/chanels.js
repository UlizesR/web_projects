import React from 'react'
import Head from 'next/head'


import hermes_sandal from '../public/images/white_hermes_sandal.png'
import ChannelsPage from '../components/user_page/ChannelsPage'

export default function UserPage() {
  return (
    <>
      <Head>
        <title>User Page - Hermes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hermes_logo.png" />
      </Head>
      
      <ChannelsPage />
    </>
  )
}
