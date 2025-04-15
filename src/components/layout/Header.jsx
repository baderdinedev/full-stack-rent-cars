import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaCar, FaPhoneAlt, FaMapMarkerAlt, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext.jsx';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();

  const bgOpacity = useTransform(scrollY, [0, 100], [0.6, 0.95]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.88]);
  const logoX = useTransform(scrollY, [0, 100], [0, -10]);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Cars', to: '/cars' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Login', to: '/login' },
    { label: 'Register', to: '/register' },
  ];

  return (
    <motion.header
      style={{ backdropFilter: 'blur(20px)', opacity: bgOpacity }}
      className="fixed top-4 left-4 right-4 z-50 rounded-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] bg-primary"
    >
      <div className="flex justify-between items-center px-6 py-3 md:px-10">
        {/* Logo Animation */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            style={{ scale: logoScale, x: logoX }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex items-center space-x-2"
          >
            <FaCar className="text-accent-500 h-9 w-9 drop-shadow" />
            <motion.span
              className="text-2xl md:text-3xl font-bold text-text-primary tracking-widest"
              initial={{ opacity: 0, letterSpacing: '0.4em' }}
              animate={{ opacity: 1, letterSpacing: '0.05em' }}
              transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
            >
              TunisiaRent
            </motion.span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative text-lg font-medium transition ${
                  isActive
                    ? 'text-accent-500 after:scale-x-100'
                    : 'text-text-secondary hover:text-accent-500'
                } after:block after:h-[2px] after:bg-accent-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300`
              }
            >
              {link.label}
            </NavLink>
          ))}
          {/* Theme Toggle Button (Desktop) */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="text-text-secondary hover:text-accent-500 transition focus:outline-none"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FaSun className="h-6 w-6" /> : <FaMoon className="h-6 w-6" />}
          </motion.button>
        </nav>

        {/* Contact Info (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          <a
            href="tel:+21612345678"
            className="flex items-center gap-2 text-text-secondary hover:text-accent-500 transition"
          >
            <FaPhoneAlt className="h-5 w-5" />
            <span>+216 12 345 678</span>
          </a>
          <Link
            to="/contact"
            className="flex items-center gap-2 text-text-secondary hover:text-accent-500 transition"
          >
            <FaMapMarkerAlt className="h-5 w-5" />
            <span>Find Us</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-text-secondary focus:outline-none"
        >
          {menuOpen ? <FaTimes className="h-7 w-7" /> : <FaBars className="h-7 w-7" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden px-6 pb-6"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `font-medium text-base ${
                    isActive ? 'text-accent-500' : 'text-text-secondary hover:text-accent-500'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="tel:+21612345678"
              className="flex items-center space-x-2 text-text-secondary hover:text-accent-500"
            >
              <FaPhoneAlt className="h-5 w-5" />
              <span>+216 12 345 678</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center space-x-2 text-text-secondary hover:text-accent-500"
            >
              <FaMapMarkerAlt className="h-5 w-5" />
              <span>Find Us</span>
            </Link>
            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 text-text-secondary hover:text-accent-500 focus:outline-none"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;