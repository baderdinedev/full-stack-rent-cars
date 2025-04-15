import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCar, FaShieldAlt, FaAward, FaUsers, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Mohamed Ali",
    role: "Founder & CEO",
    bio: "20+ years in automotive industry with a passion for customer satisfaction.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    delay: 0.1
  },
  {
    id: 2,
    name: "Amira Ben Salah",
    role: "Operations Director",
    bio: "Specializes in logistics and fleet management across Tunisia.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    delay: 0.2
  },
  {
    id: 3,
    name: "Karim Trabelsi",
    role: "Customer Experience",
    bio: "Dedicated to ensuring every rental experience is exceptional.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    delay: 0.3
  },
  {
    id: 4,
    name: "Leila Boukadida",
    role: "Technology Lead",
    bio: "Driving our digital transformation and platform innovation.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    delay: 0.4
  }
];

// Stats data
const stats = [
  { value: "10,000+", label: "Happy Customers", icon: <FaUsers className="text-3xl" /> },
  { value: "24/7", label: "Support", icon: <FaShieldAlt className="text-3xl" /> },
  { value: "50+", label: "Locations", icon: <FaMapMarkerAlt className="text-3xl" /> },
  { value: "4.9/5", label: "Average Rating", icon: <FaAward className="text-3xl" /> }
];

const About = () => {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const backgroundOffset = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <div className="relative overflow-hidden">
        <motion.div
          style={{ y: backgroundOffset }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493238792000-8113da705763')] bg-cover bg-center opacity-20"
        />
        <div className="container mx-auto px-4 py-32 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium mb-6">
              OUR STORY
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-accent-600">
                Redefining
              </span> Mobility in Tunisia
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl max-w-3xl mx-auto opacity-90">
              We're transforming the car rental experience with technology, transparency, and Tunisian hospitality.
            </motion.p>
          </motion.div>
        </div>
      </div>
 
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={scaleIn} className="relative">
            <div className={`rounded-3xl overflow-hidden shadow-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                alt="Our mission"
                className="w-full h-auto"
              />
            </div>
            <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl shadow-xl flex items-center justify-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <FaCar className="text-accent-500 text-4xl" />
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} className="flex flex-col gap-6">
            <motion.div variants={fadeInUp} className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium w-max">
              OUR MISSION
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold">
              Empowering Your Journey
            </motion.h2>
            <motion.p variants={fadeInUp} className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              We believe everyone deserves access to premium vehicles with seamless service. Our mission is to make car rental in Tunisia effortless, affordable, and enjoyable.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-4">
              <button className="group relative inline-flex items-center px-8 py-4 bg-accent-500 text-primary-900 text-lg font-semibold rounded-xl hover:bg-accent-600 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Our Services
                  <FiArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
 
      <div className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`p-8 rounded-2xl text-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} shadow-lg`}
              >
                <div className="text-accent-500 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
 
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium mb-6">
            OUR VALUES
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
            What Drives Us
          </motion.h2>
          <motion.p variants={fadeInUp} className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            These core principles guide every decision we make and every interaction we have.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Customer First",
              description: "Your satisfaction is our top priority. We go above and beyond to ensure every rental experience is exceptional.",
              icon: <FaHeart className="text-4xl text-accent-500" />
            },
            {
              title: "Transparency",
              description: "No hidden fees, no surprises. We believe in clear pricing and honest communication.",
              icon: <FaShieldAlt className="text-4xl text-accent-500" />
            },
            {
              title: "Innovation",
              description: "We continuously evolve our services and technology to serve you better.",
              icon: <FaCar className="text-4xl text-accent-500" />
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg border border-transparent hover:border-accent-500/30 transition-all`}
            >
              <div className="mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
 
      <div className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium mb-6">
              OUR TEAM
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
              Meet the Experts
            </motion.h2>
            <motion.p variants={fadeInUp} className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Passionate professionals dedicated to revolutionizing mobility in Tunisia.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                transition={{ delay: member.delay }}
                className={`rounded-2xl overflow-hidden shadow-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}
              >
                <div className="relative pt-[100%]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-accent-400' : 'text-accent-600'}`}>{member.role}</p>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
 
      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className={`rounded-3xl p-12 text-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium mb-6">
            READY TO RIDE?
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Difference
          </motion.h2>
          <motion.p variants={fadeInUp} className={`text-xl max-w-2xl mx-auto mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Join thousands of satisfied customers who've discovered the Premium Rentals advantage.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <button className="group relative inline-flex items-center px-8 py-4 bg-accent-500 text-primary-900 text-lg font-semibold rounded-xl hover:bg-accent-600 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center">
                Browse Our Fleet
                <FiArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;