import FeaturedAnimals from '@/Components/FeaturedAnimals/FeaturedAnimals';
import HeroSection from '@/Components/HeroSection/HeroSection';

import React from 'react';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedAnimals />
    </div>
  );
};

export default HomePage;