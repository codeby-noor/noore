import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SafeImage } from '../ui/SafeImage';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative w-full h-[78svh] min-h-[520px] max-h-[680px] sm:h-[84vh] sm:min-h-[580px] sm:max-h-[760px] md:h-[90vh] md:min-h-[640px] md:max-h-[920px] lg:h-[94vh] lg:max-h-[980px] overflow-hidden bg-black">
      {/* Background High-Fashion Campaign Image (iStock Studio Portrait) */}
      <div className="absolute inset-0 w-full h-full">
        <SafeImage
          src="/images/hero-istock.webp"
          fallbackSrc="/images/hero-istock.jpg"
          alt="NOORÉ Haute Modesty Campaign — Group Portrait in Modest Attire"
          priority={true}
          sizes="100vw"
          categoryLabel="HAUTE CAMPAIGN"
          className="w-full h-full object-cover object-[center_top] sm:object-[center_20%] md:object-[center_25%]"
        />
        {/* Luxury Vignette & Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 via-40% to-black/25 sm:via-black/35 sm:via-45% sm:to-black/30 pointer-events-none" />
      </div>

      {/* Editorial Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-8 sm:pb-14 md:pb-20 lg:pb-24">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center space-x-2 text-[8px] sm:text-[10px] tracking-super-wide uppercase bg-white/10 backdrop-blur-md px-2.5 sm:px-3 py-1 mb-2.5 sm:mb-4 border border-white/20">
            <span>AUTUMN / WINTER 2026 CAMPAIGN</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.08] mb-2 sm:mb-3">
            MODESTY, REDEFINED.
          </h1>

          <p className="font-sans text-[11px] sm:text-xs md:text-sm text-neutral-200 font-light tracking-wide max-w-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            Timeless silhouettes. Effortless elegance. Handcrafted from Japanese double-face crepe and organic European linen.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2.5 sm:space-y-0 sm:space-x-4">
            <Link
              to="/shop"
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-brand-black text-[11px] sm:text-xs uppercase tracking-super-wide font-medium hover:bg-brand-sand transition-all duration-300 text-center flex items-center justify-center space-x-2 shadow-lg active:scale-98"
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/shop?filter=new"
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-black/40 text-white border border-white/40 backdrop-blur-md text-[11px] sm:text-xs uppercase tracking-super-wide font-medium hover:bg-white hover:text-black transition-all duration-300 text-center active:scale-98"
            >
              <span>SHOP NEW ARRIVALS</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (Hidden on small mobile) */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 flex flex-col items-center pointer-events-none hidden md:flex">
        <span className="text-[9px] uppercase tracking-super-wide mb-1 font-mono">SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
