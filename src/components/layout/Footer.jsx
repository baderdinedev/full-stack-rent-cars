import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaShieldAlt,
  FaAward,
  FaHeadset
} from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const Footer = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.8, 0.2, 1]
      }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  };

  const links = [
    {
      title: "Company",
      items: ["About Us", "Careers", "Blog", "Press", "Brand Guidelines"]
    },
    {
      title: "Services",
      items: ["Luxury Rentals", "Long Term Leasing", "Corporate Solutions", "Airport Transfers", "Chauffeur Services"]
    },
    {
      title: "Support",
      items: ["Help Center", "Safety Standards", "Cancellation Policy", "FAQs", "Contact Us"]
    },
    {
      title: "Legal",
      items: ["Terms of Service", "Privacy Policy", "Cookie Policy", "GDPR Compliance", "Insurance Coverage"]
    }
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, color: "hover:text-blue-500" },
    { icon: <FaTwitter />, color: "hover:text-sky-400" },
    { icon: <FaInstagram />, color: "hover:text-pink-500" },
    { icon: <FaLinkedinIn />, color: "hover:text-blue-600" },
    { icon: <FaYoutube />, color: "hover:text-red-500" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary-900 to-primary-950 overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
            }}
            animate={{
              x: [null, Math.random() * 100 - 50],
              y: [null, Math.random() * 100 - 50],
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }
            }}
          />
        ))}
      </div>
      <br></br>
<br></br>
      {/* Main footer content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Premium features ribbon */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 -mt-16 mb-16 bg-gradient-to-r from-accent-500/20 to-accent-600/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
        >
          {[
            { icon: <FaShieldAlt className="w-8 h-8" />, title: "Premium Insurance", text: "Fully covered vehicles" },
            { icon: <FaAward className="w-8 h-8" />, title: "Best in Class", text: "Award winning service" },
            { icon: <FaHeadset className="w-8 h-8" />, title: "24/7 Support", text: "Always here to help" },
            { icon: <FaMapMarkerAlt className="w-8 h-8" />, title: "Nationwide", text: "50+ locations" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold">{feature.title}</h4>
                <p className="text-sm text-white/80">{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
          {/* Brand column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <div className="text-3xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-accent-600">
                Premium
              </span>Rentals
            </div>
            <p className="text-white/80 mb-6">
              Revolutionizing mobility with premium vehicles and exceptional service across Tunisia.
            </p>
            <div className="flex gap-4 mb-8">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 ${social.color} transition-colors`}
                  whileHover={hoverEffect}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <div className="text-sm text-white/60">
              © {new Date().getFullYear()} Premium Rentals. All rights reserved.
            </div>
          </motion.div>

          {/* Links columns */}
          {links.map((column, colIndex) => (
            <motion.div
              key={colIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h3 className="text-lg font-bold mb-6">{column.title}</h3>
              <ul className="space-y-3">
                {column.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href="#"
                      className="text-white/80 hover:text-accent-400 flex items-center transition-colors"
                    >
                      <FiArrowRight className="mr-2 w-3 h-3" />
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-accent-400" />
                <div>
                  <p className="font-medium">Headquarters</p>
                  <p className="text-white/80">123 Avenue Habib Bourguiba, Tunis 1000</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-accent-400" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-white/80">+216 70 123 456</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-accent-400" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-white/80">contact@premiumrentals.tn</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaWhatsapp className="mt-1 text-accent-400" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-white/80">+216 12 345 678</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">GDPR Compliance</a>
          </div>
          <div className="text-sm text-white/60">
            Proudly made in Tunisia 🇹🇳
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 via-primary-600 to-accent-500" />
    </footer>
  );
};

export default Footer;