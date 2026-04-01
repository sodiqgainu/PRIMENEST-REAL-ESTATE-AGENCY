import React from 'react'
import { motion } from 'motion/react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  const phoneNumber = '2349137466167'
  const message = "Thanks for visiting our website what can we get you"
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className='fixed bottom-8 right-8 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg'
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <FaWhatsapp size={32} />
    </motion.a>
  )
}

export default WhatsAppButton
