'use client'

import Background from '../components/Background/Background'
import { Countdown } from '../components/countdown/Countdown'
import { CountdownProvider } from '../hooks/Countdownhook'
import React from 'react'
import Settings from '../components/settings/Settings'
import GitHubButton from '../components/Buttons/GithubButton'
import Share from '../components/Buttons/Share'

const page = () => {
  return (
    <main className='w-full h-full flex flex-col items-center justify-center'>
        <CountdownProvider>
            <Background/>
            <Countdown/>
            <Settings/>
            <GitHubButton/>
            <Share/>
        </CountdownProvider>
    </main>
  )
}

export default page