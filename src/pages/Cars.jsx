import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCar, FaFilter, FaSearch, FaStar, FaHeart, FaRegHeart, FaGasPump, FaUsers, FaSnowflake, FaTachometerAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Select from 'react-select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useTheme } from '../contexts/ThemeContext';

// Tunisia's 24 governorates with emoji flags
const GOVERNORATES = [
  { value: 'Ariana', label: 'Ariana 🇹🇳' },
  { value: 'Béja', label: 'Béja 🇹🇳' },
  { value: 'Ben Arous', label: 'Ben Arous 🇹🇳' },
  { value: 'Bizerte', label: 'Bizerte 🇹🇳' },
  { value: 'Gabès', label: 'Gabès 🇹🇳' },
  { value: 'Gafsa', label: 'Gafsa 🇹🇳' },
  { value: 'Jendouba', label: 'Jendouba 🇹🇳' },
  { value: 'Kairouan', label: 'Kairouan 🇹🇳' },
  { value: 'Kasserine', label: 'Kasserine 🇹🇳' },
  { value: 'Kébili', label: 'Kébili 🇹🇳' },
  { value: 'Kef', label: 'Kef 🇹🇳' },
  { value: 'Mahdia', label: 'Mahdia 🇹🇳' },
  { value: 'Manouba', label: 'Manouba 🇹🇳' },
  { value: 'Médenine', label: 'Médenine 🇹🇳' },
  { value: 'Monastir', label: 'Monastir 🇹🇳' },
  { value: 'Nabeul', label: 'Nabeul 🇹🇳' },
  { value: 'Sfax', label: 'Sfax 🇹🇳' },
  { value: 'Sidi Bouzid', label: 'Sidi Bouzid 🇹🇳' },
  { value: 'Siliana', label: 'Siliana 🇹🇳' },
  { value: 'Sousse', label: 'Sousse 🇹🇳' },
  { value: 'Tataouine', label: 'Tataouine 🇹🇳' },
  { value: 'Tozeur', label: 'Tozeur 🇹🇳' },
  { value: 'Tunis', label: 'Tunis 🇹🇳' },
  { value: 'Zaghouan', label: 'Zaghouan 🇹🇳' }
];

const CAR_TYPES = [
  { value: 'Sedan', label: 'Sedan' },
  { value: 'SUV', label: 'SUV' },
  { value: 'Hatchback', label: 'Hatchback' },
  { value: 'Convertible', label: 'Convertible' },
  { value: 'Coupe', label: 'Coupe' },
  { value: 'Minivan', label: 'Minivan' },
  { value: 'Pickup', label: 'Pickup' },
  { value: 'Luxury', label: 'Luxury' },
  { value: 'Electric', label: 'Electric' },
  { value: 'Hybrid', label: 'Hybrid' }
];

// Sample car data with Tunisian cities
const sampleCars = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    type: "Luxury Sedan",
    governorate: "Tunis",
    city: "Lac 1",
    price: 1200,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1",
    features: ["Automatic", "Premium Sound", "Panoramic Roof"],
    specs: {
      seats: 5,
      fuel: "Gasoline",
      ac: true,
      transmission: "Automatic",
      power: "496 hp"
    },
    isFavorite: false
  },
  {
    id: 2,
    name: "Toyota RAV4",
    type: "SUV",
    governorate: "Sousse",
    city: "Hammam Sousse",
    price: 450,
    rating: 4.7,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d",
    features: ["4WD", "Navigation", "Bluetooth"],
    specs: {
      seats: 5,
      fuel: "Hybrid",
      ac: true,
      transmission: "Automatic",
      power: "203 hp"
    },
    isFavorite: false
  },
  // Add more cars...
];

const Cars = () => {
  const { theme } = useTheme();
  const [cars, setCars] = useState(sampleCars);
  const [filteredCars, setFilteredCars] = useState(sampleCars);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedGovernorate, setSelectedGovernorate] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("recommended");
  const [favorites, setFavorites] = useState([]);
  const [quickFilters, setQuickFilters] = useState({
    ac: false,
    automatic: false,
    fourWD: false
  });

  // Filter cars based on selections
  useEffect(() => {
    let results = [...cars];
    
    // Governorate filter
    if (selectedGovernorate) {
      results = results.filter(car => 
        car.governorate === selectedGovernorate.value
      );
    }
    
    // Type filter
    if (selectedType) {
      results = results.filter(car => 
        car.type.toLowerCase().includes(selectedType.value.toLowerCase())
      );
    }
    
    // Search query
    if (searchQuery) {
      results = results.filter(car =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Price range filter
    results = results.filter(car => 
      car.price >= priceRange[0] && car.price <= priceRange[1]
    );
    
    // Quick filters
    if (quickFilters.ac) {
      results = results.filter(car => car.specs.ac);
    }
    if (quickFilters.automatic) {
      results = results.filter(car => car.specs.transmission === "Automatic");
    }
    if (quickFilters.fourWD) {
      results = results.filter(car => car.features.includes("4WD"));
    }
    
    // Sorting
    switch (sortOption) {
      case "price-low":
        results.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        results.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        results.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Recommended (default sorting)
        results.sort((a, b) => (b.rating * 2 + b.reviews / 100) - (a.rating * 2 + a.reviews / 100));
    }
    
    setFilteredCars(results);
  }, [selectedGovernorate, selectedType, priceRange, searchQuery, sortOption, quickFilters, cars]);

  const toggleFavorite = (carId) => {
    setCars(cars.map(car => 
      car.id === carId ? { ...car, isFavorite: !car.isFavorite } : car
    ));
    setFavorites(favorites.includes(carId) 
      ? favorites.filter(id => id !== carId) 
      : [...favorites, carId]
    );
  };

  const resetFilters = () => {
    setSelectedGovernorate(null);
    setSelectedType(null);
    setPriceRange([0, 2000]);
    setSearchQuery("");
    setSortOption("recommended");
    setQuickFilters({
      ac: false,
      automatic: false,
      fourWD: false
    });
  };

  // Custom styles for react-select to match theme
  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: theme === 'dark' ? '#1E293B' : '#F8FAFC',
      borderColor: theme === 'dark' ? '#334155' : '#E2E8F0',
      minHeight: '48px',
      boxShadow: 'none',
      '&:hover': {
        borderColor: theme === 'dark' ? '#4F46E5' : '#4F46E5'
      }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected 
        ? '#4F46E5' 
        : state.isFocused 
          ? theme === 'dark' ? '#334155' : '#E2E8F0'
          : theme === 'dark' ? '#1E293B' : '#F8FAFC',
      color: state.isSelected ? 'white' : theme === 'dark' ? 'white' : '#1E293B',
      '&:active': {
        backgroundColor: '#4F46E5'
      }
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme === 'dark' ? 'white' : '#1E293B'
    }),
    input: (provided) => ({
      ...provided,
      color: theme === 'dark' ? 'white' : '#1E293B'
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: theme === 'dark' ? '#1E293B' : '#F8FAFC',
      borderColor: theme === 'dark' ? '#334155' : '#E2E8F0'
    })
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Hero Section */}
      <div className={`relative py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-primary-700'} text-white`}>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Car in Tunisia
            </h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Explore premium vehicles across all 24 governorates
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8')] bg-cover bg-center opacity-20" />
      </div>

      {/* Search and Filter Bar */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <motion.div
          className={`rounded-xl shadow-xl p-6 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by car, type or city..."
                className={`w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                theme === 'dark' 
                  ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' 
                  : 'bg-white border-gray-200 hover:bg-gray-50'
              } border`}
            >
              <FaFilter />
              <span>Filters</span>
              {filtersOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>

          {/* Expanded Filters */}
          <AnimatePresence>
            {filtersOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-200">
                  {/* Governorate Selector */}
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Governorate
                    </label>
                    <Select
                      options={GOVERNORATES}
                      value={selectedGovernorate}
                      onChange={setSelectedGovernorate}
                      placeholder="All Governorates"
                      styles={customSelectStyles}
                      isClearable
                    />
                  </div>

                  {/* Car Type Selector */}
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Car Type
                    </label>
                    <Select
                      options={CAR_TYPES}
                      value={selectedType}
                      onChange={setSelectedType}
                      placeholder="All Types"
                      styles={customSelectStyles}
                      isClearable
                    />
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Price Range: {priceRange[0]} - {priceRange[1]} TND/day
                    </label>
                    <div className="px-2">
                      <Slider
                        range
                        min={0}
                        max={2000}
                        step={50}
                        value={priceRange}
                        onChange={setPriceRange}
                        trackStyle={[{ backgroundColor: '#4F46E5' }]}
                        handleStyle={[
                          { backgroundColor: '#4F46E5', borderColor: '#4F46E5' },
                          { backgroundColor: '#4F46E5', borderColor: '#4F46E5' }
                        ]}
                        railStyle={{ backgroundColor: theme === 'dark' ? '#334155' : '#E2E8F0' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Quick Filters */}
                <div className="mt-6">
                  <h4 className={`text-sm font-medium mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Quick Filters
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { id: 'ac', label: 'Air Conditioning' },
                      { id: 'automatic', label: 'Automatic Transmission' },
                      { id: 'fourWD', label: '4WD' }
                    ].map(filter => (
                      <button
                        key={filter.id}
                        onClick={() => setQuickFilters(prev => ({
                          ...prev,
                          [filter.id]: !prev[filter.id]
                        }))}
                        className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-colors ${
                          quickFilters[filter.id]
                            ? 'bg-accent-500 text-white'
                            : theme === 'dark'
                              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    onClick={resetFilters}
                    className={`px-4 py-2 transition-colors ${
                      theme === 'dark' ? 'text-gray-400 hover:text-accent-400' : 'text-gray-600 hover:text-accent-500'
                    }`}
                  >
                    Reset All Filters
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Sorting Options */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Showing {filteredCars.length} {filteredCars.length === 1 ? 'car' : 'cars'}
            {selectedGovernorate && ` in ${selectedGovernorate.label}`}
          </div>
          <div className="flex items-center gap-4">
            <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Sort by:</span>
            <select
              className={`p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent ${
                theme === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-200 text-gray-900'
              }`}
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="recommended">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rating</option>
            </select>
          </div>
        </div>

        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                  theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                } border`}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => toggleFavorite(car.id)}
                    className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-colors ${
                      theme === 'dark' ? 'bg-gray-700/80' : 'bg-white/80'
                    } ${car.isFavorite ? 'text-accent-500' : 'text-gray-400 hover:text-accent-500'}`}
                    aria-label={car.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    {car.isFavorite ? <FaHeart /> : <FaRegHeart />}
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{car.name}</h3>
                    <p className="text-white/80">{car.type}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-1 text-yellow-400 mb-1">
                        <FaStar />
                        <span>{car.rating}</span>
                        <span className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>({car.reviews})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-accent-500" />
                        <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                          {car.city}, {car.governorate}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-2xl font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-primary-900'
                      }`}>
                        {car.price} TND
                      </p>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        per day
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2">
                      <FaUsers className="text-accent-500" />
                      <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                        {car.specs.seats} seats
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaGasPump className="text-accent-500" />
                      <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                        {car.specs.fuel}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {car.specs.ac ? (
                        <>
                          <FaSnowflake className="text-accent-500" />
                          <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>AC</span>
                        </>
                      ) : (
                        <span className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}>No AC</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaTachometerAlt className="text-accent-500" />
                      <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                        {car.specs.transmission}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {car.features.map((feature, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 text-sm rounded-full ${
                          theme === 'dark' 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="w-full py-3 bg-accent-500 text-white rounded-lg font-medium hover:bg-accent-600 transition-colors">
                    Rent Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className={`text-center py-16 rounded-xl ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className={`text-xl font-medium mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              No cars found matching your criteria
            </h3>
            <p className={`mb-6 ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
            }`}>
              Try adjusting your filters or search term
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-accent-500 text-white rounded-lg font-medium hover:bg-accent-600 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Governorate Quick Access */}
        <div className="mt-20">
          <h2 className={`text-3xl font-bold text-center mb-12 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Explore by Governorate
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {GOVERNORATES.map((governorate) => (
              <motion.button
                key={governorate.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedGovernorate(governorate);
                  setFiltersOpen(false);
                }}
                className={`p-4 rounded-lg border transition-colors text-center ${
                  selectedGovernorate?.value === governorate.value
                    ? 'bg-accent-500 text-white border-accent-500'
                    : theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 hover:border-accent-500'
                      : 'bg-white border-gray-200 hover:border-accent-300'
                }`}
              >
                {governorate.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;