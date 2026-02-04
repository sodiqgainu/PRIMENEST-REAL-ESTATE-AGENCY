import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Properties = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const cards = [
        {
            img:'property1.jpg',
            rooms:"Luxury 4-Bedroom Villa with Pool",
            place:'Lekki Phase 1, Lagos',
            price:'₦85,500,000'
        },
        {
            img:'property3.jpg',
            rooms:"Modern 3-Bedroom Apartment",
            place:'Victoria Island, Lagos',
            price:'₦5,500,000/year'
        },
        {
            img:'property2.jpg',
            rooms:"Contemporary 5-Bedroom Home",
            place:'Ikoyi, Lagos',
            price:'₦120,000,000'
        }
    ]

    const container = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                delayChildren: 0.2, 
                staggerChildren: 0.15
            } 
        }
    }

    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: 'easeOut' } 
        }
    }

    return (
        <section id="properties" className='min-h-screen py-8 md:py-12 space-y-6 md:space-y-9'>
            {/* Header */}
            <motion.div
                className='text-center mt-4 px-4'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h2 
                    className='text-2xl md:text-3xl lg:text-4xl font-hanReg' 
                    initial={{ y: 40, opacity: 0 }} 
                    whileInView={{ y: 0, opacity: 1 }} 
                    viewport={{ once: true, amount: 0.3 }} 
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    Featured Properties
                </motion.h2>

                <motion.p 
                    className='text-[#949494] font-interReg mt-4 md:mt-6 text-sm md:text-base max-w-xl mx-auto' 
                    initial={{ y: 30, opacity: 0 }} 
                    whileInView={{ y: 0, opacity: 1 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                >
                    Handpicked premium apartments in Lagos' most desirable locations
                </motion.p>
            </motion.div>

            {/* Properties Cards */}
            <motion.div 
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30'
                variants={container}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
            >
                {cards.map((card, i) => (
                    <motion.div 
                        key={i} 
                        className='rounded-xl font-interReg shadow-lg bg-white overflow-hidden' 
                        variants={item}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    >
                        <div className='w-full aspect-4/3 overflow-hidden'>
                            <motion.img 
                                whileHover={{ scale: 1.08 }} 
                                transition={{ duration: 0.4, ease: 'easeOut' }} 
                                src={card.img} 
                                loading="eager" 
                                className='object-cover w-full h-full' 
                                alt={card.rooms} 
                            />
                        </div>
                        <div className='p-5 md:p-8 space-y-2'>
                            <p className='text-xs text-[#787878]'>{card.place}</p>
                            <h3 className='text-sm md:text-base font-medium line-clamp-2'>{card.rooms}</h3>
                            <h2 className='text-base md:text-lg font-semibold text-secondary'>{card.price}</h2>
                        </div>                        <div className='px-5 md:px-8 pb-5 md:pb-8'>
                            <motion.button 
                                whileHover={{ scale: 1.02 }} 
                                whileTap={{ scale: 0.98 }} 
                                transition={{ duration: 0.2 }}
                                className='py-2 md:py-2.5 cursor-pointer rounded-md text-secondary bg-limeLight block w-full text-sm md:text-base font-medium'
                            >
                                View Details
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div 
                className='text-center flex justify-center py-4 md:py-8 px-4'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <motion.button 
                    whileHover={{ scale: 1.05, x: 0 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ x: [-4, 4, -4] }} 
                    transition={{ 
                        x: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
                        scale: { duration: 0.2 }
                    }} 
                    className='flex items-center bg-secondary text-white py-2.5 md:py-3 rounded-lg px-4 md:px-6 gap-2 text-sm md:text-base font-medium cursor-pointer'
                >
                    View All Properties 
                    <FaLongArrowAltRight/>
                </motion.button>
            </motion.div>
        </section>
    )
}

export default Properties