import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(255,255,255)] text-[rgb(36,36,36)] h-screen snap-y snap-mandatory
		overflow-scroll z-0">
		<Head>
        	<title>Mohamed Dhif Protfolio Website</title>
        	<link rel="icon" href="/favicon.ico" />
    	</Head>

    	<Header/>
		
		<section id="welcome" className='snap-center'>
			<Welcome />
		</section>
      
      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}

export default Home
