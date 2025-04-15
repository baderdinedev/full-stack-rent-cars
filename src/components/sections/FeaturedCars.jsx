import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaGasPump, FaTachometerAlt, FaHeart, FaRegHeart, FaStar, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Car data with enhanced details
const featuredCars = [
  {
    id: 1,
    name: 'Tesla Model S Plaid',
    type: 'Electric Sedan',
    price: 1299,
    rating: 4.9,
    reviews: 142,
    specs: {
      power: '1,020 hp',
      acceleration: '1.99s 0-60',
      range: '396 miles',
      topSpeed: '200 mph'
    },
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=3000',
    isFavorite: true,
    badges: ['Trending', 'Premium']
  },
  {
    id: 2,
    name: 'Porsche 911 Turbo S',
    type: 'Sports Car',
    price: 2499,
    rating: 4.8,
    reviews: 98,
    specs: {
      power: '640 hp',
      acceleration: '2.6s 0-60',
      range: '18 mpg',
      topSpeed: '205 mph'
    },
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=3000',
    isFavorite: false,
    badges: ['Limited']
  },
  {
    id: 3,
    name: 'Range Rover Autobiography',
    type: 'Luxury SUV',
    price: 1899,
    rating: 4.7,
    reviews: 76,
    specs: {
      power: '518 hp',
      acceleration: '5.1s 0-60',
      range: '21 mpg',
      topSpeed: '155 mph'
    },
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=3000',
    isFavorite: false,
    badges: ['Family', 'Offroad']
  },
  {
    id: 4,
    name: 'Audi e-tron GT',
    type: 'Electric Coupe',
    price: 1599,
    rating: 4.6,
    reviews: 64,
    specs: {
      power: '522 hp',
      acceleration: '3.9s 0-60',
      range: '238 miles',
      topSpeed: '152 mph'
    },
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=3000',
    isFavorite: true,
    badges: ['Eco']
  },
  {
    id: 5,
    name: 'Mercedes-Benz S-Class',
    type: 'Luxury Sedan',
    price: 1999,
    rating: 4.8,
    reviews: 87,
    specs: {
      power: '496 hp',
      acceleration: '4.5s 0-60',
      range: '23 mpg',
      topSpeed: '155 mph'
    },
    image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=3000',
    isFavorite: false,
    badges: ['Executive']
  },
  {
    id: 6,
    name: 'BMW i8 Roadster',
    type: 'Hybrid Sports',
    price: 2199,
    rating: 4.5,
    reviews: 53,
    specs: {
      power: '369 hp',
      acceleration: '4.4s 0-60',
      range: '18 mi electric',
      topSpeed: '155 mph'
    },
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=3000',
    isFavorite: false,
    badges: ['Convertible']
  }
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.8, 0.2, 1]
    }
  }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const cardHover = {
  scale: 1.02,
  y: -8,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 10
  }
};

const FeaturedCars = () => {
  const [favorites, setFavorites] = useState(featuredCars.map(car => car.isFavorite));
  const [activeFilter, setActiveFilter] = useState('All');

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = [...prev];
      newFavorites[id - 1] = !newFavorites[id - 1];
      return newFavorites;
    });
  };

  const filters = ['All', 'Electric', 'Luxury', 'Sports', 'SUV', 'Convertible'];

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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium mb-6">
            PREMIUM FLEET
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-accent-600">
              Featured Luxury
            </span> Vehicles
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover our curated collection of premium vehicles for every occasion
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-accent-500 text-primary-900 shadow-lg shadow-accent-500/30'
                  : 'bg-white/5 text-white/80 hover:bg-white/10 hover:text-white'
              }`}
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Cars Grid */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3.5 }
            }}
            navigation={{
              nextEl: '.featured-next',
              prevEl: '.featured-prev',
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            className="pb-14"
          >
            {featuredCars.map((car) => (
              <SwiperSlide key={car.id}>
                <motion.div
                  className="h-full"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeIn}
                >
                  <motion.div
                    className="h-full bg-gradient-to-b from-white/5 to-white/10 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col"
                    whileHover={cardHover}
                  >
                    {/* Image with badges */}
                    <div className="relative pt-[60%] overflow-hidden">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        {car.badges.map((badge, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                      <button
                        className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-accent-500/30 transition-colors"
                        onClick={() => toggleFavorite(car.id)}
                        aria-label={favorites[car.id - 1] ? 'Remove from favorites' : 'Add to favorites'}
                      >
                        {favorites[car.id - 1] ? (
                          <FaHeart className="text-accent-500" />
                        ) : (
                          <FaRegHeart className="text-white" />
                        )}
                      </button>
                    </div>

                    {/* Car Info */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold">{car.name}</h3>
                          <p className="text-white/60">{car.type}</p>
                        </div>
                        <div className="flex items-center bg-white/5 px-2.5 py-1 rounded-full">
                          <FaStar className="text-yellow-400 mr-1" />
                          <span>{car.rating}</span>
                          <span className="text-white/50 text-sm ml-1">({car.reviews})</span>
                        </div>
                      </div>

                      {/* Specs */}
                      <div className="grid grid-cols-2 gap-3 my-4">
                        <div className="flex items-center">
                          <FaTachometerAlt className="text-accent-500 mr-2" />
                          <span className="text-sm">{car.specs.power}</span>
                        </div>
                        <div className="flex items-center">
                          <FaCar className="text-accent-500 mr-2" />
                          <span className="text-sm">{car.specs.acceleration}</span>
                        </div>
                        <div className="flex items-center">
                          <FaGasPump className="text-accent-500 mr-2" />
                          <span className="text-sm">{car.specs.range}</span>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-accent-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                          <span className="text-sm">{car.specs.topSpeed}</span>
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
                        <div>
                          <p className="text-sm text-white/60">From</p>
                          <p className="text-2xl font-bold">
                            ${car.price}
                            <span className="text-sm font-normal text-white/60">/day</span>
                          </p>
                        </div>
                        <button className="flex items-center justify-center p-3 rounded-full bg-accent-500 text-primary-900 hover:bg-accent-600 transition-colors">
                          <FaChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="featured-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
            <FaChevronRight className="w-5 h-5 rotate-180" />
          </button>
          <button className="featured-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <button className="group relative inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-lg font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center">
              View Full Fleet
              <FaChevronRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCars;