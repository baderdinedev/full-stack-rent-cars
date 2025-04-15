import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturedCars from '../components/sections/FeaturedCars';
import CategoryGrid from '../components/sections/CategoryGrid';
import CallToAction from '../components/sections/CallToAction';

function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedCars />
      <CategoryGrid />
      <CallToAction />
    </main>
  );
}

export default Home;