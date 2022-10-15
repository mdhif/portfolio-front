import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

function Welcome({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Welcome to my website !",
        ],
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
        <BackgroundCircles/>
        <div className="text-center">
            <h1 className='title text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl'>
                {text}
                <Cursor cursorColor="#F7AB0A"/>
            </h1>
            <p className="mt-3 font-thin text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            Mohamed Dhif
            </p>
        </div>
    </div>
  )
}

export default Welcome