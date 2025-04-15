import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCar, FaMotorcycle, FaTruckPickup, FaShuttleVan, FaBicycle, FaSearch, FaStar } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';

// Category data with icons and colors
const categories = [
  {
    id: 1,
    name: 'Luxury Sedans',
    count: 128,
    icon: <FaCar className="text-3xl" />,
    color: 'from-blue-500/10 to-blue-600/20',
    hoverColor: 'hover:from-blue-500/20 hover:to-blue-600/30',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=3000'
  },
  {
    id: 2,
    name: 'Sports Cars',
    count: 76,
    icon: <FaCar className="text-3xl" />,
    color: 'from-red-500/10 to-red-600/20',
    hoverColor: 'hover:from-red-500/20 hover:to-red-600/30',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=3000'
  },
  {
    id: 3,
    name: 'SUVs',
    count: 92,
    icon: <FaTruckPickup className="text-3xl" />,
    color: 'from-emerald-500/10 to-emerald-600/20',
    hoverColor: 'hover:from-emerald-500/20 hover:to-emerald-600/30',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=3000'
  },
  {
    id: 4,
    name: 'Electric Vehicles',
    count: 54,
    icon: <FaCar className="text-3xl" />,
    color: 'from-purple-500/10 to-purple-600/20',
    hoverColor: 'hover:from-purple-500/20 hover:to-purple-600/30',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=3000'
  },
  {
    id: 5,
    name: 'Motorcycles',
    count: 63,
    icon: <FaMotorcycle className="text-3xl" />,
    color: 'from-amber-500/10 to-amber-600/20',
    hoverColor: 'hover:from-amber-500/20 hover:to-amber-600/30',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=3000'
  },
  {
    id: 6,
    name: 'Vans & Minivans',
    count: 41,
    icon: <FaShuttleVan className="text-3xl" />,
    color: 'from-indigo-500/10 to-indigo-600/20',
    hoverColor: 'hover:from-indigo-500/20 hover:to-indigo-600/30',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=3000'
  },
  {
    id: 7,
    name: 'Classic Cars',
    count: 28,
    icon: <FaCar className="text-3xl" />,
    color: 'from-rose-500/10 to-rose-600/20',
    hoverColor: 'hover:from-rose-500/20 hover:to-rose-600/30',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=3000'
  },
  {
    id: 8,
    name: 'Bicycles',
    count: 85,
    icon: <FaBicycle className="text-3xl" />,
    color: 'from-green-500/10 to-green-600/20',
    hoverColor: 'hover:from-green-500/20 hover:to-green-600/30',
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=3000'
  }
];

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
  },
  hover: {
    y: -8,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const CategoryGrid = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="relative py-20 bg-gradient-to-b from-primary-900 to-primary-950 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
            }}
            animate={{
              x: [null, Math.random() * 200 - 100],
              y: [null, Math.random() * 200 - 100],
              transition: {
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium mb-6">
            VEHICLE CATEGORIES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-accent-600">
              Explore
            </span> Our Fleet
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Choose from our diverse range of premium vehicle categories tailored for every need
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-md mx-auto mb-12 relative"
        >
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" />
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full pl-12 pr-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                onClick={() => setSearchQuery('')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover="hover"
              className="relative group"
            >
              <div
                className={`h-full bg-gradient-to-br ${category.color} ${category.hoverColor} rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500 cursor-pointer`}
                onClick={() => setSelectedCategory(category)}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                    <p className="text-sm text-white/60">{category.count} vehicles available</p>
                  </div>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-sm font-medium text-accent-400 group-hover:text-accent-300 transition-colors">
                      View all
                    </span>
                    <FiChevronRight className="text-accent-400 group-hover:text-accent-300 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <button className="group relative inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-lg font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center">
              View All Categories
              <FiChevronRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </button>
        </motion.div>
      </div>

      {/* Category Detail Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedCategory(null)}
            />
            
            <motion.div
              className="relative bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl shadow-2xl border border-white/10 w-full max-w-4xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
                onClick={() => setSelectedCategory(null)}
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full min-h-[400px]">
                  <img
                    src={selectedCategory.image}
                    alt={selectedCategory.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-bold mb-2">{selectedCategory.name}</h3>
                    <p className="text-white/80">{selectedCategory.count} vehicles available</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4">
                      {selectedCategory.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{selectedCategory.name}</h4>
                      <p className="text-accent-400">Popular category</p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-6">
                    Explore our premium selection of {selectedCategory.name.toLowerCase()}. Perfect for all your needs with top-notch quality and performance.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-xl">
                      <p className="text-sm text-white/60 mb-1">Starting from</p>
                      <p className="text-xl font-bold">$89<span className="text-sm font-normal text-white/60">/day</span></p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl">
                      <p className="text-sm text-white/60 mb-1">Average rating</p>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span className="text-xl font-bold">4.8</span>
                        <span className="text-sm text-white/60 ml-1">(142)</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-accent-500 text-primary-900 py-4 rounded-xl font-bold hover:bg-accent-600 transition-colors flex items-center justify-center">
                    Browse {selectedCategory.count} vehicles
                    <FiChevronRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CategoryGrid;