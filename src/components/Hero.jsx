import React from 'react'
import { motion } from 'framer-motion'
import { 
    ChevronRight, 
  } from 'lucide-react';
import { containerVariants, itemVariants, scrollVariants } from '../NewLandingPage'
const Hero = (props) => {
  return (
    <motion.div 
    ref={props.ref}
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="container mx-auto px-4 pt-24 pb-12 min-h-screen flex items-center"
  >
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div variants={itemVariants} className="space-y-6">
        <motion.h1 
          variants={itemVariants}
          className="text-5xl font-bold text-gray-900 leading-tight"
        >
          Revolutionize Healthcare <br />Management
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-xl text-gray-600"
        >
          Seamless patient care, intelligent analytics, and comprehensive healthcare solutions
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center"
          >
            Start Free Trial <ChevronRight className="ml-2" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div 
        variants={scrollVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="relative"
      >
        <motion.img 
          src="/api/placeholder/600/400" 
          alt="Healthcare Dashboard" 
          className="rounded-2xl shadow-2xl"
        />
      </motion.div>
    </div>
  </motion.div>
  )
}

export default Hero