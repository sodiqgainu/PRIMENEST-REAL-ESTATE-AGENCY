import React from 'react'
import { motion } from 'motion/react'

const BrowseProprties = () => {

    const backGround = {
        backgroundImage: "url('Browse.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: 'easeOut' } 
        }
    }

    return (
        <section className='min-h-[70vh] relative' style={backGround}>
           
            <div className='bg-secondary h-full opacity-[0.7] w-full absolute'/>
            
            <motion.div 
                className='relative z-1 pt-20 pb-10 space-y-8 max-w-145 w-[90%] mx-auto'
                variants={container}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h2 
                    variants={item}
                    className='text-center md:text-3xl text-2xl font-hanReg text-white'
                >
                    Ready to Find Your Perfect Home in Lagos?
                </motion.h2>

                <motion.p 
                    variants={item}
                    className='text-white text-center font-interReg md:text-md text-sm'
                >
                    Let's help you discover premium living in Lekki, Victoria Island, or Ikoyi,
                    Your dream home is just a conversation away.
                </motion.p>                <motion.div variants={item} className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center px-4'>
                    <motion.button 
                        whileHover={{scale: 1.05}} 
                        whileTap={{scale: 0.95}} 
                        transition={{duration: 0.2}}
                        className='bg-white text-secondary p-2 rounded-md px-6 cursor-pointer text-sm sm:text-base'
                    >
                        Browse Properties
                    </motion.button>
                    <motion.button 
                        whileHover={{scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)'}} 
                        whileTap={{scale: 0.95}} 
                        transition={{duration: 0.2}}
                        className='bg-none text-white border p-2 rounded-md px-6 cursor-pointer text-sm sm:text-base'
                    >
                        Browse on WhatsApp
                    </motion.button>
                </motion.div>

                <motion.div variants={item} className='text-center flex justify-center gap-4'>
                    <img src="Timewhite.png" alt="" />
                    <p className='text-white font-interReg'>Average response time: Under 2hours</p>
                </motion.div>
            </motion.div>
          
        </section>
    )
}

export default BrowseProprties