import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Sparkles, Shield, Compass, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-pureWhite min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'About NOORÉ' }]} />

        {/* Hero Manifesto */}
        <div className="py-16 sm:py-24 text-center max-w-3xl mx-auto">
          <span className="text-[10px] uppercase tracking-super-wide text-neutral-400 block mb-3 font-mono">
            THE ATELIER MANIFESTO
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-brand-black font-normal tracking-tight leading-[1.15]">
            "Designed for the way you move. Created for the way you feel."
          </h1>
          <div className="w-16 h-px bg-brand-black mx-auto my-8" />
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            NOORÉ was established to bridge the gap between high-fashion editorial aesthetics and uncompromising Islamic modesty. We believe modesty is an elevated aesthetic language — architectural, quiet, and timeless.
          </p>
        </div>

        {/* Editorial Image Banner */}
        <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-brand-sand mb-20 shadow-xs">
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2000&q=85"
            alt="NOORÉ Atelier Craftsmanship"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Dual-Column Craftsmanship Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12 border-b border-brand-border">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-super-wide text-neutral-400 font-mono">
              PRECISION FABRICATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-black font-normal">
              The Art of Uncompromising Textiles
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Mainstream fashion often treats modest garments with synthetic, static-prone polyesters. At NOORÉ, we refuse shortcuts. Our signature abayas are tailored from heavyweight Japanese Crepe de Chine and Korean double-face weaves that guarantee zero transparency while retaining weightless fluidity.
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Our hijabs are spun from Austrian Lenzing Modal — an eco-fiber harvested from sustainable beechwood forests that naturally thermo-regulates the scalp and drapes without tension on sensitive hairlines.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden bg-brand-sand">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80"
                alt="Textile Weave"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden bg-brand-sand mt-6">
              <img
                src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&w=800&q=80"
                alt="Model Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 3 City Pillars */}
        <div className="py-20 text-center">
          <span className="text-[10px] uppercase tracking-super-wide text-neutral-400 block mb-2 font-mono">
            GLOBAL ATELIERS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-black font-normal mb-12">
            Paris · Dubai · London
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-brand-sand/40 border border-brand-warmBeige space-y-3">
              <span className="text-xs uppercase tracking-super-wide font-mono text-neutral-500">
                01. DUBAI
              </span>
              <h3 className="font-serif text-xl text-brand-black font-normal">
                Master Atelier & Pattern Studio
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Where master artisans hand-finish cordonnet embroidery and calibrate drape proportions tailored for warm Gulf climates.
              </p>
            </div>

            <div className="p-8 bg-brand-sand/40 border border-brand-warmBeige space-y-3">
              <span className="text-xs uppercase tracking-super-wide font-mono text-neutral-500">
                02. PARIS
              </span>
              <h3 className="font-serif text-xl text-brand-black font-normal">
                Creative Direction & Fabric Sourcing
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Curating European washed linens, eco-modal fibers, and architectural minimalist silhouette lines.
              </p>
            </div>

            <div className="p-8 bg-brand-sand/40 border border-brand-warmBeige space-y-3">
              <span className="text-xs uppercase tracking-super-wide font-mono text-neutral-500">
                03. LONDON
              </span>
              <h3 className="font-serif text-xl text-brand-black font-normal">
                Global Salon & Client Concierge
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Hosting private trunk shows and international courier dispatches for our discerning clientele worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 text-center border-t border-brand-border">
          <Link
            to="/shop"
            className="px-10 py-4 bg-brand-black text-white text-xs uppercase tracking-super-wide font-medium hover:bg-neutral-800 transition-colors inline-block"
          >
            DISCOVER THE COLLECTION
          </Link>
        </div>
      </div>
    </div>
  );
};

