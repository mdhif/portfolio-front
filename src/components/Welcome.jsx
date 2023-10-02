import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from '@/components/BackgroundCircles'
import { motion } from 'framer-motion';
import { useState } from 'react';

export function Welcome({onAnimationComplete}) {
    const [text, count] = useTypewriter({
        words: [
            "Welcome to my website !",
        ],
        delaySpeed: 2000,
    })
  return (
    <motion.div 
    initial={{
        y: 0,
        opacity: 1,
        scale: 1,
        height: "100vh",
    }}
    animate={{
        y: -100,
        opacity: 0,
        scale: 1,
        height: 0,
    }}
    transition={{
        delay: 3,
        duration:2,    
    }}
    onAnimationComplete={onAnimationComplete} // Call the handler on animation completion
    className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
        <BackgroundCircles/>
        <div className="text-center">
            <h1 className='title text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl'>
                {text}
                <Cursor cursorColor="#F7AB0A"/>
            </h1>
            <p className="mt-3 font-thin text-base text-gray-500 dark:text-gray-400 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            Mohamed Dhif
            </p>
        </div>
    </motion.div>
  )
}

