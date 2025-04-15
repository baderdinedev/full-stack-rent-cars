import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const CallToAction = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.8, 0.2, 1]
      }
    }
  };

  const buttonHover = {
    scale: 1.03,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  };

  const buttonTap = {
    scale: 0.98
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-950 z-0" />
      
      {/* Floating gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-accent-500/20 to-accent-600/30 blur-3xl opacity-50" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/30 blur-3xl opacity-50" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Content */}
            <div className="p-12 lg:p-16">
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium mb-6">
                  READY TO RIDE?
                </div>
              </motion.div>

              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6"
                variants={itemVariants}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-accent-600">
                  Your Perfect Vehicle
                </span> Awaits
              </motion.h2>

              <motion.p 
                className="text-xl text-white/80 mb-10 max-w-lg"
                variants={itemVariants}
              >
                Join thousands of satisfied customers who found their dream ride through our premium service.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-12"
                variants={itemVariants}
              >
                <motion.button
                  className="flex-1 group relative flex items-center justify-center px-8 py-4 bg-accent-500 text-primary-900 text-lg font-semibold rounded-xl hover:bg-accent-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-900 overflow-hidden"
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                >
                  <span className="relative z-10 flex items-center">
                    Book Now
                    <FiArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </motion.button>

                <motion.button
                  className="flex-1 group relative flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-900 overflow-hidden"
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                >
                  <span className="relative z-10 flex items-center">
                    <FaPhoneAlt className="mr-3 w-5 h-5" />
                    Call Us
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </motion.button>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                className="grid grid-cols-2 gap-6"
                variants={containerVariants}
              >
                {[
                  { icon: <FaWhatsapp className="w-6 h-6" />, text: "+216 12 345 678", label: "WhatsApp" },
                  { icon: <FaEnvelope className="w-6 h-6" />, text: "contact@premiumrentals.tn", label: "Email" },
                  { icon: <FaPhoneAlt className="w-6 h-6" />, text: "+216 70 123 456", label: "Phone" },
                  { icon: <FaMapMarkerAlt className="w-6 h-6" />, text: "Tunis, Tunisia", label: "Location" },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4"
                    variants={itemVariants}
                  >
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-white/60">{item.label}</p>
                      <p className="font-medium">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right side - Visual */}
            <div className="relative min-h-[400px] bg-gradient-to-br from-primary-700 to-primary-800 hidden lg:block">
              {/* Floating car image with parallax effect */}
              <motion.div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=3000')] bg-cover bg-center"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.2, 0.8, 0.2, 1] }}
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent" />
              
              {/* Floating stats */}
              <div className="absolute bottom-8 left-8 right-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="grid grid-cols-3 gap-4 backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10"
                >
                  {[
                    { value: "5,000+", label: "Happy Customers" },
                    { value: "4.9/5", label: "Average Rating" },
                    { value: "24/7", label: "Support" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl font-bold text-accent-400">{stat.value}</p>
                      <p className="text-sm text-white/80">{stat.label}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;