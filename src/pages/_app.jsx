import { useEffect, useRef, useState } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Welcome } from '@/components/Welcome'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

let animationComplete = false

function welcome(pathname) {
  return pathname =='/' && !animationComplete ? 
    <div className="relative z-50">
      <Welcome onAnimationComplete={()=>{animationComplete = true; console.log("animation complete")}}/>
    </div>
  : <div/>
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)
  console.log('pathname',router.pathname)
  return (
    <> 
      {welcome(router.pathname)}
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
