import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Feather, Recycle } from 'lucide-react';

export const BrandStorySection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-sand/40 border-y border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Two-Column Headline & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-super-wide text-neutral-500 block mb-2 font-mono">
              THE NOORÉ PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-brand-black font-normal tracking-tight leading-[1.15]">
              Designed for the way you move. Created for the way you feel.
            </h2>
            <div className="w-12 h-px bg-brand-black my-6" />
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mb-6">
              Founded at the intersection of haute couture precision and understated Islamic modesty, NOORÉ rejects fast-fashion polyester in favor of architectural drapes, double-face Japanese crepe, certified Lenzing modal, and pure washed European linens.
            </p>
            <Link
              to="/about"
              className="text-xs uppercase tracking-super-wide font-medium text-brand-black underline underline-offset-8 hover:text-neutral-500 transition-colors"
            >
              Read The Atelier Manifesto &rarr;
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden bg-brand-sand">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80"
                alt="Fabric Drape Detail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden bg-brand-sand mt-8">
              <img
                src="https://images.unsplash.com/photo-1762605135376-ae5af70a5628?auto=format&fit=crop&w=800&q=80"
                alt="Minimalist Tailoring"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* 4 Brand Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-brand-border">
          <div className="space-y-2">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-black shadow-xs mb-3">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-lg text-brand-black font-normal">
              Japanese & Korean Crepe
            </h4>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Heavyweight non-sheer textiles offering cooling hand-feel, zero pilling, and fluid weight.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-black shadow-xs mb-3">
              <Feather className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-lg text-brand-black font-normal">
              Austrian Lenzing Modal
            </h4>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Buttery soft hijabs and underdresses spun from sustainable beechwood fibers with natural thermal regulation.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-black shadow-xs mb-3">
              <Shield className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-lg text-brand-black font-normal">
              Atelier Dubai Tailoring
            </h4>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Every seam is French-bound and every hem laser-calibrated to preserve drape for decades.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-black shadow-xs mb-3">
              <Recycle className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-lg text-brand-black font-normal">
              Conscious Small-Batch
            </h4>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Produced in limited, numbered capsules to eliminate textile waste and maintain exclusivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

