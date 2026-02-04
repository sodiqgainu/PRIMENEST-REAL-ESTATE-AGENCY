import React from 'react'
import { motion } from 'motion/react'

const Contact = () => {

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  }
  return (
     <section id="contact" className='min-h-[40vh] space-y-9 font-interReg text-white pt-12 md:pt-20 px-6 md:px-12 lg:px-20 bg-black'>
      {/* links */}
        <motion.div 
          className='flex flex-col lg:flex-row gap-10 lg:gap-0'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >

           <motion.div variants={item} className='lg:max-w-75 w-full lg:w-auto'>
             <div className='w-32 md:w-40'>
              <img src="navLogo.png" alt="" />
             </div>
              <p className='mt-6 text-sm text-[#949494]'>
                  Your trusted partner for premium real estate in 
                  Lagos. We help you find the perfect home in 
                  Lekki, Victoria Island, and Ikoyi.
              </p>

              <div className='flex space-x-4 mt-4'>
                 <motion.img whileHover={{scale: 1.1}} className='cursor-pointer w-6 h-6' src="facebook.png" alt="" />
                 <motion.img whileHover={{scale: 1.1}} className='cursor-pointer w-6 h-6' src="insta.png" alt="" />
                 <motion.img whileHover={{scale: 1.1}} className='cursor-pointer w-6 h-6' src="linkedIn.png" alt="" />
                 <motion.img whileHover={{scale: 1.1}} className='cursor-pointer w-6 h-6' src="whatsApp.png" alt="" />
              </div>
           </motion.div>


           {/* links div */}

           <div className='grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-0 lg:flex lg:space-x-20 xl:space-x-30 lg:ml-auto'>
            {/* link1 */}
            <motion.div variants={item}>
              <h2 className='font-bold text-sm md:text-base'>Quick Links</h2>
                <ul className='text-sm text-[#949494] mt-5 space-y-2'>
                  <li className='hover:text-white cursor-pointer transition-colors'>About us</li>
                  <li className='hover:text-white cursor-pointer transition-colors'>Premium Properties</li>
                </ul>
            </motion.div>

            {/* link2 */}

              <motion.div variants={item}>
                <h2 className='font-bold text-sm md:text-base'>Our Locations</h2>
                <div className='text-sm space-y-2 text-[#949494] mt-5'>

                  <div className='flex items-center space-x-2 hover:text-white cursor-pointer transition-colors'>
                    <img src="location.png" className='w-4 h-4' alt="" />
                    <span>Lekki Phase 1</span>
                  </div>

                  <div className='flex items-center space-x-2 hover:text-white cursor-pointer transition-colors'>
                    <img src="location.png" className='w-4 h-4' alt="" />
                    <span>Victoria Island</span>
                  </div>

                  <div className='flex items-center space-x-2 hover:text-white cursor-pointer transition-colors'>
                    <img src="location.png" className='w-4 h-4' alt="" />
                    <span>Ikoyi</span>
                  </div>

                  <div className='flex items-center space-x-2 hover:text-white cursor-pointer transition-colors'>
                    <img src="location.png" className='w-4 h-4' alt="" />
                    <span>Lekki Phase 2</span>
                  </div>

                </div>
            </motion.div>

            {/* link3 */}

                <motion.div variants={item} className='col-span-2 md:col-span-1'>
                <h2 className='font-bold text-sm md:text-base'>Contact Us</h2>
                <div className='text-sm space-y-2 text-[#949494] mt-5'>

                  <div className='flex items-center space-x-2'>
                    <img src="telephone.png" className='w-4 h-4' alt="" />
                    <span>+234 800 000 000</span>
                  </div>

                  <div className='flex items-center space-x-2'>
                    <img src="message.png" className='w-4 h-4' alt="" />
                    <span className='text-xs md:text-sm'>info@primenestrealty.com</span>
                  </div>

                  <div className='flex items-center space-x-2'>
                    <img src="location.png" className='w-4 h-4' alt="" />
                    <span>Lagos, Nigeria</span>
                  </div>

                 <motion.button 
                    whileHover={{scale: 1.05}} 
                    whileTap={{scale: 0.95}}
                    className='flex items-center mt-3 rounded-lg bg-secondary gap-2 text-white py-2 px-3 cursor-pointer text-sm'
                 >
                    <img src="chat.png" className='w-4 h-4' alt="" />
                    Chat on WhatsApp
                 </motion.button>

                </div>
            </motion.div>

           </div>

        </motion.div>

        {/* policy */}
        <motion.div 
          className='mt-10 md:mt-20 lg:mt-40 py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 w-full'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className='flex items-center space-x-2'>
            <img src="copyright.png" className='w-4 h-4' alt="" />
            <p className='text-[#949494] text-xs md:text-sm'>2026 PrimeNest Realty. All rights reserved.</p>
          </div>

          <div className='text-[#949494] flex space-x-4 md:space-x-6 text-xs md:text-sm'>
            <p className='hover:text-white cursor-pointer transition-colors'>Privacy Policy</p>
            <p className='hover:text-white cursor-pointer transition-colors'>Terms of Service</p>
          </div>
        </motion.div>
     </section>
  )
}

export default Contact