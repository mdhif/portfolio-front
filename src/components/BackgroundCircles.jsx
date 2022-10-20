import { motion } from 'framer-motion'
import React from 'react'

function BackgroundCircles() {
  return (
    <motion.div 
        initial={{
            opacity:0,
        }}
        animate={{
            scale:[1,3,0.5,1],
            opacity:0.25,
        }}
        transition={{
            duration:2.5
        }}
        className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333333] dark:border-[#d0d0d0] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-[#333333] dark:border-[#d0d0d0] rounded-full h-[300px] w-[300px] mt-52 animate-pulse'/>
        <div className='absolute border border-[#333333] dark:border-[#d0d0d0] rounded-full h-[500px] w-[500px] mt-52 animate-pulse'/>
        <div className='absolute rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] mt-52 animate-pulse'/>
        <div className='absolute rounded-full border border-[#333333] dark:border-[#d0d0d0] opacity-20 h-[800px] w-[800px] mt-52'/>
    </motion.div>
  )
}

export default BackgroundCircles