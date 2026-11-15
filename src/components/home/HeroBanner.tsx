import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SafeImage } from '../ui/SafeImage';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative w-full h-[88vh] sm:h-[92vh] md:h-[96vh] overflow-hidden bg-brand-sand">
      {/* Background High-Fashion Campaign Image */}
      <div className="absolute inset-0 w-full h-full">
        <SafeImage
          src="https://www.istockphoto.com/photo/group-portrait-of-beautiful-muslim-women-in-a-fashionable-dress-with-hijab-isolated-gm1483588788-510143977"
          alt="NOORÉ Haute Modesty Campaign"
          priority={true}
          sizes="100vw"
          categoryLabel="HAUTE CAMPAIGN"
          className="w-full h-full object-cover object-top"
        />
        {/* Luxury Vignette and Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/35" />
      </div>

      {/* Editorial Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12 sm:pb-20 md:pb-24">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center space-x-2 text-[9px] sm:text-[11px] tracking-super-wide uppercase bg-white/10 backdrop-blur-md px-3 py-1 mb-3 sm:mb-4 border border-white/20">
            <span>AUTUMN / WINTER 2026 CAMPAIGN</span>
          </div>

          <h1 className="font-serif text-fluid-hero font-normal tracking-tight text-white leading-[1.05] mb-3">
            MODESTY, REDEFINED.
          </h1>

          <p className="font-sans text-xs sm:text-base text-neutral-200 font-light tracking-wide max-w-lg mb-6 sm:mb-8 leading-relaxed">
            Timeless silhouettes. Effortless elegance. Handcrafted from Japanese double-face crepe and organic European linen.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2.5 sm:space-y-0 sm:space-x-4">
            <Link
              to="/shop"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-brand-black text-xs uppercase tracking-super-wide font-medium hover:bg-brand-sand transition-all duration-300 text-center flex items-center justify-center space-x-2 shadow-lg active:scale-98"
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/shop?filter=new"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-black/40 text-white border border-white/40 backdrop-blur-md text-xs uppercase tracking-super-wide font-medium hover:bg-white hover:text-black transition-all duration-300 text-center active:scale-98"
            >
              <span>SHOP NEW ARRIVALS</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (Hidden on small mobile) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 flex flex-col items-center pointer-events-none hidden md:flex">
        <span className="text-[9px] uppercase tracking-super-wide mb-1 font-mono">SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
