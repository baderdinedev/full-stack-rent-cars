import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { FaCarSide, FaMapMarkedAlt, FaShieldAlt, FaSearchLocation } from 'react-icons/fa';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Enhanced carousel images with 3D models and video support
const carouselContent = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=3000',
    alt: 'Luxury Sedan',
    title: 'Explore Luxury Sedans',
    subtitle: 'Premium comfort meets performance',
    cta: 'View Collection',
    color: 'from-blue-900/70',
  },
  {
    type: 'video',
    src: 'https://assets.mixkit.co/videos/44541/44541-720.mp4',
    alt: 'SUV Adventure',
    title: 'Adventure-Ready SUVs',
    subtitle: 'Conquer any terrain with confidence',
    cta: 'Explore SUVs',
    color: 'from-emerald-900/70',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=3000',
    alt: 'Compact City Car',
    title: 'Urban Mobility Redefined',
    subtitle: 'Efficient and stylish city driving',
    cta: 'See Options',
    color: 'from-purple-900/70',
  },
];

// Advanced animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.2, 0.8, 0.2, 1],
      staggerChildren: 0.1
    } 
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      ease: "backOut" 
    } 
  },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100
    }
  }
};

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "circOut"
    } 
  }
};

const HeroSection = () => {
  const sliderRef = useRef(null);
  const controls = useAnimation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect handler
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    fade: true,
    beforeChange: (current, next) => setActiveSlide(next),
    appendDots: (dots) => (
      <div className="absolute bottom-8 left-0 right-0">
        <ul className="flex justify-center space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <button 
        className={`w-3 h-3 rounded-full transition-all duration-500 ${i === activeSlide ? 'bg-accent-500 w-6 opacity-100' : 'bg-white/50 opacity-70 hover:opacity-100'}`}
        aria-label={`Go to slide ${i + 1}`}
      />
    ),
  };

  // Navigation handlers
  const goToPrev = () => {
    controls.start("hover");
    setTimeout(() => controls.start("visible"), 200);
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    controls.start("hover");
    setTimeout(() => controls.start("visible"), 200);
    sliderRef.current?.slickNext();
  };

  // Interactive elements animation
  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" }
  };

  const buttonTap = {
    scale: 0.95,
    transition: { duration: 0.2, ease: "easeIn" }
  };

  // Dynamic background based on active slide
  const getSlideBackground = () => {
    return carouselContent[activeSlide].color || 'from-primary-900/70';
  };

  return (
    <section className="relative overflow-hidden">
      {/* Glass morphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-900 backdrop-blur-lg" />
      
      {/* Dynamic grid background with parallax */}
      <div 
        className="absolute inset-0 bg-[url('https://assets.codepen.io/1480814/hero-grid.svg')] bg-repeat opacity-10"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      
      {/* Animated floating elements */}
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
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 pt-28 pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.div variants={textReveal}>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6 border border-white/20">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                </span>
                TRENDING IN 2025
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
              variants={textReveal}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-accent-600">
                Next-Gen
              </span> <br /> Car Rental Experience
            </motion.h1>

            <motion.p 
              className="text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              variants={textReveal}
            >
              Discover the future of mobility with our AI-powered platform and premium vehicle selection.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={textReveal}
            >
              <motion.button
                className="group relative flex items-center justify-center px-8 py-4 bg-accent-500 text-primary-900 text-lg font-semibold rounded-xl hover:bg-accent-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-900 overflow-hidden"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </motion.button>

              <motion.button
                className="group relative flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-900 overflow-hidden"
                whileHover={buttonHover}
                whileTap={buttonTap}
                onClick={() => setSearchOpen(true)}
              >
                <span className="relative z-10 flex items-center">
                  <FaSearchLocation className="mr-2 h-5 w-5" />
                  Find Nearby
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </motion.button>
            </motion.div>

            {/* Feature Cards */}
            <motion.div 
              className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4"
              variants={slideIn}
            >
              {[
                { icon: <FaCarSide className="text-accent-500 text-2xl" />, text: "500+ Vehicles" },
                { icon: <FaMapMarkedAlt className="text-accent-500 text-2xl" />, text: "50 Locations" },
                { icon: <FaShieldAlt className="text-accent-500 text-2xl" />, text: "24/7 Support" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-accent-500/30 transition-all"
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  variants={popIn}
                  custom={index}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Carousel */}
          <motion.div
            className="flex-1 max-w-3xl w-full mx-auto"
            initial="hidden"
            animate="visible"
            variants={popIn}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 hover:border-white/20 transition-all duration-500">
              <Slider {...settings} ref={sliderRef}>
                {carouselContent.map((item, index) => (
                  <div key={index} className="relative aspect-video">
                    {item.type === 'video' ? (
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    )}
                    <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${getSlideBackground()} to-transparent p-8`}>
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p 
                        className="text-white/90 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {item.subtitle}
                      </motion.p>
                      <motion.button
                        className="text-accent-400 font-semibold flex items-center hover:text-accent-300 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {item.cta}
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                ))}
              </Slider>
              
              {/* Enhanced Custom Arrows */}
              <button
                onClick={goToPrev}
                className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={goToNext}
                className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSearchOpen(false)}
            />
            
            <motion.div
              className="relative bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl shadow-2xl border border-white/10 w-full max-w-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Find Cars Near You</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter location or ZIP code"
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    autoFocus
                  />
                  <button className="absolute right-2 top-2 bg-accent-500 text-primary-900 px-4 py-2 rounded-lg font-medium hover:bg-accent-600 transition-colors">
                    Search
                  </button>
                </div>
                
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Tunis', 'Sousse', 'Hammamet', 'Djerba', 'Sfax', 'Bizerte'].map((city) => (
                    <button
                      key={city}
                      className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 text-center transition-colors"
                      onClick={() => setSearchOpen(false)}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;