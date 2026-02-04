import React from 'react'
import { motion } from 'motion/react'
import { useScrollInView } from '../hooks/useScrollInView'

/**
 * AnimateOnScroll - A wrapper component that handles viewport animations
 * synced with Lenis smooth scroll to prevent stuttering/cracky animations.
 * 
 * Usage:
 * <AnimateOnScroll
 *   as="div"
 *   initial={{ opacity: 0, y: 50 }}
 *   animate={{ opacity: 1, y: 0 }}
 *   threshold={0.3}
 *   once={true}
 * >
 *   Content here
 * </AnimateOnScroll>
 */
export const AnimateOnScroll = ({
  children,
  as = 'div',
  initial,
  animate,
  exit,
  transition,
  threshold = 0.3,
  once = true,
  margin = 0,
  className,
  style,
  variants,
  ...props
}) => {
  const { ref, isInView } = useScrollInView({ threshold, once, margin })
  
  const MotionComponent = motion[as] || motion.div

  // If using variants, use "hidden" and "visible" states
  const animateState = variants 
    ? (isInView ? 'visible' : 'hidden')
    : (isInView ? animate : initial)

  return (
    <MotionComponent
      ref={ref}
      initial={variants ? 'hidden' : initial}
      animate={animateState}
      exit={exit}
      transition={transition}
      variants={variants}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}

export default AnimateOnScroll
