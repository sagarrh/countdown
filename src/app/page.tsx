'use client'

import Background from '../components/Background/Background'
import { Countdownhook } from '../hooks/Countdownhook'
import React from 'react'

const page = () => {
  return (
    <main className='w-full h-full flex flex-col items-center justify-center'>
        <Countdownhook>
            <Background/>



        </Countdownhook>
    </main>
  )
}

export default page