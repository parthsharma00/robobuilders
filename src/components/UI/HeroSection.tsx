import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface HeroSectionProps {
  onCTAClick: () => void;
}

export const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center max-w-4xl px-4"
      >
        <h1 className="oxanium font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-glow tracking-wider">
          ROBOTICS UNLEASHED:
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            BUILD THE FUTURE
          </span>
        </h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="inter text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
        >
          Your immersive journey into AI, Engineering, and Innovation starts here.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onCTAClick}
          className="pointer-events-auto inter font-semibold px-8 py-4 rounded-lg gradient-cyan text-gray-900 hover:glow-cyan transition-all duration-300 text-lg tracking-wide"
        >
          BEGIN YOUR ODYSSEY
        </motion.button>
      </motion.div>

      {/* Ambient Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-3 h-3 bg-violet-500 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-yellow-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  )
}