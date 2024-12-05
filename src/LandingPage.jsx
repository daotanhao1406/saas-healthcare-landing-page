import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronRight, 
  Shield, 
  Heart, 
  UserCheck, 
  Globe, 
  Stethoscope,
  Check,
  ArrowRight,
  BarChart2,
  Database,
  Zap
} from 'lucide-react';

// Animation Variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

export const itemVariants = {
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

export const scrollVariants = {
  offscreen: { 
    opacity: 0,
    y: 50
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const LandingPage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white">
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
            {[
              { name: 'Hero', ref: heroRef },
              { name: 'Features', ref: featuresRef },
              { name: 'Pricing', ref: pricingRef },
              { name: 'Stats', ref: statsRef },
              { name: 'CTA', ref: ctaRef }
            ].map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.ref)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </motion.button>
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
    ref={heroRef}
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

      {/* Features Section */}
      <motion.section 
        ref={featuresRef}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={scrollVariants}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Powerful Features</h2>
          <p className="text-xl text-gray-600 mt-4">Comprehensive tools for modern healthcare management</p>
        </div>
        
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
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        ref={pricingRef}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={scrollVariants}
        className="container mx-auto px-4 py-16 bg-gray-50"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Flexible Pricing</h2>
          <p className="text-xl text-gray-600 mt-4">Choose the plan that fits your healthcare needs</p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { 
              title: "Starter", 
              price: "$49", 
              features: [
                "Up to 10 Users",
                "Basic Analytics",
                "Email Support"
              ],
              best: false
            },
            { 
              title: "Professional", 
              price: "$99", 
              features: [
                "Up to 50 Users",
                "Advanced Analytics",
                "Priority Support",
                "Custom Integrations"
              ],
              best: true
            },
            { 
              title: "Enterprise", 
              price: "Custom", 
              features: [
                "Unlimited Users",
                "Full Feature Set",
                "Dedicated Support",
                "Advanced Security"
              ],
              best: false
            }
          ].map((plan, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-2xl shadow-md transition-all ${
                plan.best ? 'bg-blue-600 text-white' : 'bg-white'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
              <div className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-base">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="mr-2 w-5 h-5" /> {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-full ${
                  plan.best 
                    ? 'bg-white text-blue-600 hover:bg-blue-50' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        ref={statsRef}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={scrollVariants}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Impact</h2>
          <p className="text-xl text-gray-600 mt-4">Transforming healthcare, one patient at a time</p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-4 gap-8 text-center"
        >
          {[
            { icon: <BarChart2 className="w-12 h-12 mx-auto mb-4 text-blue-600" />, value: "250K+", label: "Patients Served" },
            { icon: <Database className="w-12 h-12 mx-auto mb-4 text-green-600" />, value: "99.9%", label: "Data Accuracy" },
            { icon: <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-600" />, value: "24/7", label: "Support Availability" },
            { icon: <Heart className="w-12 h-12 mx-auto mb-4 text-red-600" />, value: "500+", label: "Healthcare Providers" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              {stat.icon}
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        ref={ctaRef}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={scrollVariants}
        className="container mx-auto px-4 py-16 bg-blue-600 text-white"
      >
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-6"
          >
            Ready to Transform Your Healthcare Workflow?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl mb-8 text-blue-100"
          >
            Join thousands of healthcare providers leveraging cutting-edge technology to improve patient care.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full flex items-center"
            >
              Start Free Trial <ArrowRight className="ml-2" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white text-white px-8 py-4 rounded-full"
            >
              Book a Demo
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Stethoscope className="mr-2 text-blue-400" /> 
              <span className="text-2xl font-bold">HealthSync</span>
              </div>
              </div>
              </div>
        </footer>
        </div>
  )
}

export default LandingPage