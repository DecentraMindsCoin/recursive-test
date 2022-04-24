import React, { useState, useEffect, lazy, Suspense } from 'react'
import Typewriter from 'typewriter-effect'
const HeroTypeWriter = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <div className="">
      {!isMounted ? null : (
        <Suspense fallback={null}>
          <Typewriter
            options={{
              autoStart: false,
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter

                .typeString('Do More...')

                .pauseFor(1000)
                .deleteAll()
                .typeString('Do Good... ')
                .start()
                .deleteAll()
                .typeString('Do You...')

                .start()
            }}
          />
        </Suspense>
      )}
    </div>
  )
}

export default HeroTypeWriter
