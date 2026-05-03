import BannerMarquee from '@/Components/BannerMarquee/BannerMarquee';
import FeaturedAnimals from '@/Components/FeaturedAnimals/FeaturedAnimals';
import HeroSection from '@/Components/HeroSection/HeroSection';
import QurbaniTips from '@/Components/QurbaniTips/QurbaniTips';
import TopBreeds from '@/Components/TopBreeds/TopBreeds';

import React from 'react';

const HomePage = () => {
  return (
    <div>
      <BannerMarquee />
      <HeroSection />
      <FeaturedAnimals />
      <QurbaniTips />
      <TopBreeds />

    </div>
  );
};

export default HomePage;