import React from 'react'
import { motion } from 'motion/react'
import AnimateOnScroll from './AnimateOnScroll'
import { FaLongArrowAltRight } from 'react-icons/fa'

const About = () => {

  const Lists = [
    {
      title: 'Browse Our Verified Listings',
      sub : 'Explore premium properties in Lekki, VI, and Ikoyi. Filter by location, price, and property type to find your perfect match. '
    },

      {
      title: 'Schedule a Viewing',
      sub : 'Contact us via WhatsApp or phone to arrange a property tour at your convenience, We’ll show you around personally.'
    },

    {
      title: 'Move Into Your Dream Home',
      sub : 'We handle all paperwork and legalities. You focus on settling into your new home and enjoy premium Lagos living.'
    },
  ]

  const container = {
    hidden: {
      opacity: 0
    },
    visible:{
      opacity:1,
      transition:{staggerChildren:0.15, duration:0.9, delayChildren:0.5}
    }
  }

  const item = {
    hidden:{
      opacity:0,
      y:50
    },
    visible:{opacity:1, y:0}
  }
  return (
    <section id="about" className='min-h-screen'>
       <div className='max-w-245 w-[90%] py-7 mt-20 mx-auto'>
           <div className='font-hanReg md:w-[60%] w-[90%] md:text-4xl text-3xl text-left'>
              <h2>Finding Your Dream Home Is Easy</h2>
           </div>
           <p className='mt-10 md:w-[60%] w-[90%] text-[#949494]'>
            We’ve simplified the property search process so you can focus on what matters-finding 
                a home you’ll love.
            </p>

            {/* second div */}

              <div className='flex md:flex-row flex-col gap-4'>
                {/* cards */}
                <AnimateOnScroll 
                  className='mt-7 md:w-[60%] w-full' 
                  variants={container}
                  threshold={0.3}
                >
                  {Lists.map((list, i) => (
                    <motion.div key={i} variants={item} className='font-interReg space-y-15 space-x-2 flex'>
                      <div className='flex bg-secondary text-white items-center rounded-full justify-center w-10 h-10 min-w-10 shrink-0'>
                        {i + 1}
                      </div>

                      <div className='space-y-3'>
                        <h2 className='font-bold'>{list.title}</h2>
                        <p className='text-[13px] text-[#949494]'>{list.sub}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimateOnScroll>

                {/* img */}
                <AnimateOnScroll 
                  className='md:w-[50%] w-full will-change-transform overflow-hidden rounded-md cursor-pointer' 
                  initial={{scale:0.8, opacity:0}} 
                  animate={{scale:1, opacity:1}} 
                  transition={{duration:0.5, ease:'easeOut'}} 
                  threshold={0.3}
                >
                  <motion.img whileHover={{scale:1.1}} transition={{duration:0.3, ease:'easeOut'}} src="dreamImg.jpg" loading="eager" className='transform-gpu w-full h-full' alt="" />
                </AnimateOnScroll>

              </div>
           

           <div className='text-center flex justify-left py-8'>
                          <motion.button 
                              animate={{x:[-6,6,-6]}} 
                              transition={{duration: 1.2, repeat: Infinity, ease: 'easeInOut'}} 
                              className='flex items-center font-interReg bg-secondary text-white p-2 rounded-lg px-3 gap-2'
                          >
                              Get Started Now
                              <FaLongArrowAltRight/>
                          </motion.button>
            </div>

       </div>
    </section>
  )
}

export default About