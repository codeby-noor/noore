import React, { useEffect } from 'react';
import { HeroBanner } from '../components/home/HeroBanner';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { NewArrivalsSection } from '../components/home/NewArrivalsSection';
import { EditorialSection } from '../components/home/EditorialSection';
import { BestSellersSection } from '../components/home/BestSellersSection';
import { BrandStorySection } from '../components/home/BrandStorySection';
import { NewsletterSection } from '../components/home/NewsletterSection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroBanner />
      <CategoryGrid />
      <NewArrivalsSection />
      <EditorialSection />
      <BestSellersSection />
      <BrandStorySection />
      <NewsletterSection />
    </div>
  );
};

