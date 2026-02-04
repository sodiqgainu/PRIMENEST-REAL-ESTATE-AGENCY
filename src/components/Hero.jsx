import React from 'react';
import { motion } from 'motion/react';

const Hero = () => {
  const backGround = {
    backgroundImage: "url('HeroImg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const containerVariant = {
    hidden: {opacity:0},
   show: {
    opacity:1,
  transition: { staggerChildren: 0.15, delayChildren:0.7, duration: 1, ease: 'easeInOut' },
}


  };

  const childVariant = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.section 
      id="hero"
      style={backGround}
      className="min-h-screen overflow-hidden relative"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div 
        className="black h-full w-full bg-black absolute top-0 left-0 py-7 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <div
        
        className=" max-w-180 w-[90%] my-35 lg:mx-42 mx-auto   relative  z-1"
      >
        <motion.div className="space-y-5" variants={containerVariant}
        initial="hidden"
       animate='show'>
  

          <motion.h2 variants={childVariant} className="font-hanReg md:text-5xl sm:text-4xl text-3xl text-white text-shadow-dark text-shadow-2xs">
            Find Your Dream Home in Lagos’ Most Prestigious Neighborhoods
          </motion.h2>

          <motion.p className="text-[#E1E1E1] text-shadow-2xs text-shadow-black" variants={childVariant}>
            Premimum apartments in lekki, Victoria island, and Ikoyi. Verified
            listings, transparents pricing, and personalized service for young
            professionals and families.
          </motion.p>

          <motion.div variants={childVariant} className="my-5 space-x-6 font-interReg">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ y: 1, scale: 0.9, stiffness: 300 }}
              transition={{ type: 'spring' }}
              className="bg-secondary p-2 rounded-md cursor-pointer text-white"
            >
              Browse Properties
            </motion.button>

            <motion.button
              whileHover={{
                x: [-3, 3, -3, 3, -3, 0],
                transition: { repeat: Infinity, ease: 'linear' },
              }}
              transition={{ duration: 0.8 }}
              whileTap={{ y: 1, scale: 0.9, stiffness: 300 }}
              className="bg-white  p-2 rounded-md cursor-pointer  text-primary"
            >
              Chat on WhatsApp
            </motion.button>
          </motion.div>
        </motion.div>

        {/* lists */}

        <motion.div initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:0.3, delay:1.6}} className='flex  text-center space-x-5 mt-10 text-sm md:text-md text-white'>
            <motion.div variants={childVariant} className='flex flex-col md:flex-row items-center space-x-3' >
                <img src="mark.png" alt="" />
                <span>Verified Listing Only</span>
            </motion.div>

            <div className='flex items-center flex-col md:flex-row space-x-3'>
                <img src="diamond.png" alt="" />
                <span>Premium Properties</span>
            </div>

            <div className='flex items-center flex-col md:flex-row space-x-3'>
                <img src="time.png" alt="" />
                <span>Fast & Transparent</span>
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
