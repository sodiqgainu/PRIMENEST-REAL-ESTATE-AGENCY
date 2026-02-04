import gsap from 'gsap'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'motion/react'
import { SmoothScrollContext } from '../context/SmoothScrollContext'

const Nav = () => {

const [isActive, setIsActive] = useState(false)
const [isScrolled, setIsScrolled] = useState(false)
const { scrollTo, lenisRef } = useContext(SmoothScrollContext)

// Listen to scroll for glass effect
useEffect(() => {
  const lenis = lenisRef?.current
  
  const handleScroll = (e) => {
    const scrollY = e?.scroll ?? window.scrollY
    setIsScrolled(scrollY > 50)
  }

  if (lenis) {
    lenis.on('scroll', handleScroll)
  } else {
    window.addEventListener('scroll', handleScroll)
    // Check initial scroll position
    handleScroll({ scroll: window.scrollY })
  }
  
  return () => {
    if (lenis) {
      lenis.off('scroll', handleScroll)
    } else {
      window.removeEventListener('scroll', handleScroll)
    }
  }
}, [lenisRef])

const handleMenu = () =>{
  setIsActive(prev => !prev)
}

const handleScrollTo = (sectionId) => {
  scrollTo(sectionId)
  if (isActive) setIsActive(false)
}

  return (
    <header 
      className={`font-interReg fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/30 shadow-lg border-b border-white/20' 
          : 'bg-white'
      }`}
      style={isScrolled ? { backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' } : {}}
    >
       <div className='py-4 lg:px-20 px-5  flex items-center justify-between'>
          <div className='w-40'>
            <img src="navLogo.png" alt="" />
          </div>

              {/* desktop links */}
             <div className=' lg:flex hidden gap-10 items-center'>
                 <div className='flex gap-10'>
                    <NavLink onClick={() => handleScrollTo('#hero')}>Home</NavLink>
                    <NavLink onClick={() => handleScrollTo('#properties')}>Properties</NavLink>
                    <NavLink onClick={() => handleScrollTo('#about')}>About</NavLink>
                    <NavLink onClick={() => handleScrollTo('#contact')}>Contact</NavLink>
                 </div>

                 <button 
                   className='bg-secondary text-white p-3 rounded-lg cursor-pointer'
                   onClick={() => handleScrollTo('#properties')}
                 >
                   Find My Dream Property
                 </button>
             </div>

             {/* mobile links */}             <motion.div whileTap={{scale:0.7}} transition={{duration:0.2}} className='lg:hidden block text-2xl cursor-pointer z-50' onClick={handleMenu}>
               {
                isActive ? <FaTimes/> : <FaBars/>
               }
             </motion.div>
          
       </div>       {/* Mobile Menu Modal */}
       <motion.div 
          className='lg:hidden fixed left-1/2 -translate-x-1/2 w-[90%] bg-white z-40 rounded-2xl shadow-xl mt-20 overflow-hidden'
          initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
          animate={{ 
            clipPath: isActive ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)',
            opacity: isActive ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
       >
          <div className='flex flex-col items-start py-10 px-6 gap-2'>
             <MobileNavLink onClick={() => handleScrollTo('#hero')}>Home</MobileNavLink>
             <MobileNavLink onClick={() => handleScrollTo('#properties')}>Properties</MobileNavLink>
             <MobileNavLink onClick={() => handleScrollTo('#about')}>About</MobileNavLink>
             <MobileNavLink onClick={() => handleScrollTo('#contact')}>Contact</MobileNavLink>
             
             <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-secondary text-white py-3 px-6 rounded-lg mt-4'
                onClick={() => handleScrollTo('#properties')}
             >
                Find My Dream Property
             </motion.button>
          </div>
       </motion.div>
    </header>
  )
}

const NavLink = ({ children, onClick }) => {

  const ref1 = useRef(null)
  const ref2 = useRef(null)



const animate = () =>{
    const tl = gsap.timeline()
  tl.to(ref1.current,{
    y:-20,
    ease:'none',
    duration:0.3
  })

  tl.to(ref2.current,{
    y:0,
    ease:'none',
    duration:0.3
  },'0')
}

const initial = () =>{
    const tl2 = gsap.timeline()
    tl2.to(ref1.current,{
    y:0,
    ease:'none',
    duration:0.3
  })

  tl2.to(ref2.current,{
    y:20,
    ease:'none',
    duration:0.3
  },'0')
}
  return (
    <div className='  overflow-hidden relative cursor-pointer' onMouseLeave={initial} onMouseOver={animate} onClick={onClick}>
       <div ref={ref1} >{children}</div>
       <div ref={ref2} className=' translate-y-5 inset-0 absolute'>{children}</div>
    </div>
  )
}

const MobileNavLink = ({ children, onClick }) => {
  return (
    <motion.div 
      className='text-xl w-full rounded-md p-2 text-gray-800 cursor-pointer'
      whileHover={{ scale: 1.1, backgroundColor: '#004D40', color:'white' }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

export default Nav