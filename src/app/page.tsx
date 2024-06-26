'use client'

import Background from '../components/Background/Background'
import { Countdown } from '../components/countdown/Countdown'
import { CountdownProvider } from '../hooks/Countdownhook'
import React from 'react'
import Settings from '../components/settings/Settings'
import GitHubButton from '../components/Buttons/GithubButton'
import Share from '../components/Buttons/Share'
import { Suspense } from 'react'

const page = () => {
  return (
    <main className='w-full h-full flex flex-col items-center justify-center'>
      <Suspense fallback={<div>Loading...</div>}>
        <CountdownProvider>
            <Background/>
            <Countdown/>
            <Settings/>
            <GitHubButton/>
            <Share/>
        </CountdownProvider>
        </Suspense>
    </main>
  )
}

export default page