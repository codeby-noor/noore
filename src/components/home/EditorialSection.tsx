import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const EditorialSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-36 bg-brand-charcoal text-white overflow-hidden">
      {/* Background with Editorial Layout */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1760083545495-b297b1690672?auto=format&fit=crop&w=2000&q=85"
          alt="The Art of Everyday Modesty Editorial"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <span className="text-[10px] uppercase tracking-super-wide text-brand-sand block mb-3 font-mono">
            VOLUME IV · EDITORIAL CAMPAIGN
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.1] mb-6">
            THE ART OF EVERYDAY MODESTY
          </h2>

          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-8 max-w-md">
            Modesty is not an absence of expression; it is the presence of quiet conviction. We sculpt garments with calculated volume, generous proportions, and fluid fabrications that move like poetry in motion.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              to="/lookbook"
              className="px-8 py-4 bg-brand-sand text-brand-black text-xs uppercase tracking-super-wide font-medium hover:bg-white transition-colors inline-flex items-center space-x-2"
            >
              <span>DISCOVER THE LOOKBOOK</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/category/abayas"
              className="px-8 py-4 border border-white/40 text-white text-xs uppercase tracking-super-wide font-medium hover:bg-white hover:text-black transition-colors"
            >
              <span>SHOP THE EDIT</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

