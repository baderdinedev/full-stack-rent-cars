import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';  // Adjust this to your setup

const Contact = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ submitting: false, success: false, error: 'Failed to send. Please try again.' });
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >

          {/* Contact Info */}
          <div className={`p-8 rounded-3xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              <ContactItem icon={<FaPhoneAlt />} label="Phone" value="+216 70 123 456" link="tel:+21670123456" />
              <ContactItem icon={<FaEnvelope />} label="Email" value="contact@premiumrentals.tn" link="mailto:contact@premiumrentals.tn" />
              <ContactItem icon={<FaMapMarkerAlt />} label="Address" value="123 Avenue Habib Bourguiba, Tunis" />
              <ContactItem icon={<FaClock />} label="Working Hours" value="Mon-Sun: 8:00 AM - 10:00 PM" />
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex gap-4">
              <SocialIcon icon={<FaFacebook />} link="#" bg="bg-blue-600" />
              <SocialIcon icon={<FaTwitter />} link="#" bg="bg-sky-500" />
              <SocialIcon icon={<FaInstagram />} link="#" bg="bg-pink-600" />
              <SocialIcon icon={<FaLinkedin />} link="#" bg="bg-blue-800" />
            </div>

            {/* Map */}
            <div className="mt-10 rounded-xl overflow-hidden">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.634060456787!2d10.18153431529594!3d36.80265497996175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd35a5d6f15b9d%3A0x5b4a7e5f8d0f8b0!2sAvenue%20Habib%20Bourguiba%2C%20Tunis!5e0!3m2!1sen!2stn!4v1620000000000!5m2!1sen!2stn"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-3xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
            <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField 
                label="Your Name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                required 
              />
              <InputField 
                label="Your Email" 
                name="email" 
                type="email"
                value={formData.email} 
                onChange={handleChange}
                required 
              />
              <InputField 
                label="Your Phone" 
                name="phone" 
                type="tel" 
                value={formData.phone} 
                onChange={handleChange}
                required 
              />
              <InputField 
                label="Subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange}
                required 
              />
              <div>
                <label className="block mb-1">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full p-3 rounded-lg text-white ${status.submitting ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'}`}
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>

              {status.success && <p className="text-green-600">Thank you! We'll get back to you soon.</p>}
              {status.error && <p className="text-red-600">{status.error}</p>}
            </form>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

// Reusable Components

const ContactItem = ({ icon, label, value, link }) => (
  <div className="flex gap-4 items-center">
    <div className="p-3 rounded-full bg-blue-100 text-blue-600">{icon}</div>
    <div>
      <h4 className="font-semibold">{label}</h4>
      {link ? (
        <a href={link} className="text-blue-500 hover:underline">{value}</a>
      ) : (
        <p>{value}</p>
      )}
    </div>
  </div>
);

const SocialIcon = ({ icon, link, bg }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className={`p-3 ${bg} rounded-full text-white hover:opacity-90`}>
    {icon}
  </a>
);

const InputField = ({ label, name, type = 'text', value, onChange, required = false }) => (
  <div>
    <label className="block mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
    />
  </div>
);
