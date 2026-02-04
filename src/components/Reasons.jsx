import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'motion/react'
import AnimateOnScroll from './AnimateOnScroll'
import { useSmoothScroll } from '../hooks/useScrollInView'

// Custom hook for count-up animation - now Lenis-compatible
const useCountUp = (end, duration = 2, startOnView = true) => {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const hasTriggeredRef = useRef(false)
  const ref = useRef(null)
  const { lenis } = useSmoothScroll() || {}

  const checkInView = useCallback(() => {
    if (!ref.current || hasTriggeredRef.current) return

    const rect = ref.current.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
    const visibleRatio = Math.max(0, visibleHeight / rect.height)

    if (visibleRatio >= 0.3) {
      setIsInView(true)
      hasTriggeredRef.current = true
    }
  }, [])
  useEffect(() => {
    // Defer initial check to avoid setState in effect body
    const timeoutId = setTimeout(checkInView, 0)
    
    if (lenis) {
      lenis.on('scroll', checkInView)
      return () => {
        clearTimeout(timeoutId)
        lenis.off('scroll', checkInView)
      }
    } else {
      window.addEventListener('scroll', checkInView, { passive: true })
      return () => {
        clearTimeout(timeoutId)
        window.removeEventListener('scroll', checkInView)
      }
    }
  }, [lenis, checkInView])

  useEffect(() => {
    if (!isInView && startOnView) return
    
    let startTime
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration, startOnView])

  return { count, ref }
}

const Reasons = () => {

const ReasonCards = [
  {
    img :'Group 12.png',
    title:'Local Expertise',
    desc:'Deep knowledge of Lekki, Victoria island, and Ikoyi markets, We know the neighborhoods inside out.'
  },

    {
    img :'Group 13.png',
    title:'Verified Listings',
    desc:'Every property is personally verified byour team. No fakelistings, no surprise, just  quality homes.'
  },
  
   {
    img :'Group 14.png',
    title:'Fast Process',
    desc:'Streamlined procedures mean youmove in faster. We handle the paperwork, you enjoy your new home.'
  },

  {
    img :'Group 15.png',
    title:'Personalized Service',
    desc:'We match you with properties that fit your lifestyle, budget, and preferences.your satisfaction is our priority.'
  },
  
]

const container = {
  hidden : {opacity:0},
  visible:{
    opacity:1,
    transition:{delayChildren:0.4, staggerChildren:0.15, duration: 1.3, ease: 'easeInOut' }
  }
}

const item = {
  hidden:{opacity:0, x:-50},
  visible:{
    opacity:1,
    x:0
  }
}

  return (
    <section className='min-h-screen py-12 bg-limeLight space-y-9'>
        <div className='text-center mt-4'>
          <AnimateOnScroll 
            as="h2" 
            className='md:text-3xl text-2xl px-2 font-hanReg' 
            initial={{y:50, opacity:0}} 
            animate={{y:0, opacity:1}} 
            threshold={0.3}
            transition={{duration:0.3, ease:'easeOut'}}
          >
            Why Choose PrimeNest Realty?
          </AnimateOnScroll>

          <AnimateOnScroll 
            as="p" 
            className='text-[#949494] font-interReg mt-20' 
            initial={{y:50, opacity:0}} 
            animate={{y:0, opacity:1}} 
            threshold={0.5}
            transition={{duration:0.3, ease:'easeOut'}}
          >
            We make finding your perfect home in Lagos simple, transparent, and stress-free
          </AnimateOnScroll>
        </div>

        {/* cards */}

        <AnimateOnScroll 
          variants={container} 
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-3 lg:px-30 md:px-20 px-15 gap-5'
          threshold={0.2}
        >
            {
              ReasonCards.map((card, i) => (
                <motion.div variants={item} key={i} className='text-center bg-white rounded-lg font-interReg px-3 pt-5 pb-1 shadow-xl'>
                  <div className='mx-auto text-center flex justify-center my-1'>
                       <img src={card.img} className='' alt="" />
                  </div>
                
                  <h2 className='font-bold'>{card.title}</h2>

                  <div className='pt-5'>
                    <h2 className='text-[#949494] text-sm'>{card.desc}</h2>
                  </div>
                </motion.div>
              ))
            }
        </AnimateOnScroll>
        
        <div className='font-interReg grid sm:grid-cols-4 grid-cols-1 gap-6 md:p-20 px-10'>
          <CountUpSection end={100} suffix='+' label='Premium Properties' />
          <CountUpSection end={500} suffix='+' label='Happy Clients' />
          <CountUpSection end={15} suffix='+' label='Years Experience' />
          <CountUpSection end={100} suffix='%' label='Verified Listings' />
        </div>
    </section>
  )
}

// CountUp component using the custom hook
const CountUpSection = ({ end, suffix = '', label }) => {
  const { count, ref } = useCountUp(end, 1, true)
  return (
    <div ref={ref}>
      <h2 className='lg:text-5xl text-center text-2xl text-secondary font-semibold'>
        {count}{suffix}
      </h2>
      <p className='text-[#949494] text-center text-sm'>{label}</p>
    </div>
  )
}

export default Reasons