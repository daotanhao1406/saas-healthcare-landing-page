import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Shield, 
  Heart, 
  UserCheck, 
  Globe, 
  Stethoscope 
} from 'lucide-react';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const heroImageVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 50
    }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

const HealthcareLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold text-blue-600 flex items-center"
          >
            <Stethoscope className="mr-2" /> HealthSync
          </motion.div>
          <div className="space-x-6">
            {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 pt-24 pb-12 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Hero Content */}
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

        {/* Hero Image */}
        <motion.div 
          variants={heroImageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="relative"
        >
          <motion.img 
            src="/api/placeholder/600/400" 
            alt="Healthcare Dashboard" 
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-12 text-gray-900"
          >
            Powerful Features
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { 
                icon: <Shield className="text-blue-600 w-12 h-12 mx-auto mb-4" />, 
                title: "Secure Patient Data", 
                description: "HIPAA-compliant data management with advanced encryption" 
              },
              { 
                icon: <Heart className="text-red-500 w-12 h-12 mx-auto mb-4" />, 
                title: "Patient Monitoring", 
                description: "Real-time health tracking and predictive analytics" 
              },
              { 
                icon: <UserCheck className="text-green-600 w-12 h-12 mx-auto mb-4" />, 
                title: "Personalized Care", 
                description: "AI-driven insights for tailored treatment plans" 
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gray-900 text-white py-12"
      >
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Stethoscope className="mr-2 text-blue-400" /> 
              <span className="text-2xl font-bold">HealthSync</span>
            </div>
            <p className="text-gray-400">Transforming healthcare through intelligent technology and compassionate innovation.</p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <motion.ul 
              variants={containerVariants}
              className="space-y-2"
            >
              {['Features', 'Pricing', 'Support', 'Contact'].map((link) => (
                <motion.li 
                  key={link}
                  variants={itemVariants}
                  whileHover={{ x: 10, color: '#3b82f6' }}
                >
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-blue-500">
                    {link}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p className="text-gray-400">support@healthsync.com</p>
              <p className="text-gray-400">(555) 123-4567</p>
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex space-x-4 mt-4"
              >
                <Globe className="text-gray-400 hover:text-blue-500 cursor-pointer" />
                <Heart className="text-gray-400 hover:text-red-500 cursor-pointer" />
                <UserCheck className="text-gray-400 hover:text-green-500 cursor-pointer" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default HealthcareLandingPage;
