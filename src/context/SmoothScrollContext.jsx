import React, { createContext, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export const SmoothScrollContext = createContext(null)

export const SmoothScrollProvider = ({ children }) => {
  const lenisRef = useRef(null)
  const reqIdRef = useRef(null)

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
      syncTouch: true,
    })

    lenisRef.current = lenisInstance

    function raf(time) {
      lenisInstance.raf(time)
      reqIdRef.current = requestAnimationFrame(raf)
    }
    
    reqIdRef.current = requestAnimationFrame(raf)

    return () => {
      if (reqIdRef.current) {
        cancelAnimationFrame(reqIdRef.current)
      }
      lenisInstance.destroy()
      lenisRef.current = null
    }
  }, [])

  // Provide a scrollTo function that safely accesses the ref
  const scrollTo = (target, options = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: 0,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options
      })
    }
  }

  return (
    <SmoothScrollContext.Provider value={{ scrollTo, lenisRef }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}

export default SmoothScrollProvider
