import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { ArrowRight, Sparkles } from 'lucide-react';

const LOOKBOOK_ENTRIES = [
  {
    lookNumber: 'LOOK 01',
    title: 'The Architectural Noir',
    silhouette: 'Classic Black Abaya in Heavyweight Japanese Crepe',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85',
    productSlug: 'classic-black-abaya',
    price: 185,
    quote: '"Black is not the absence of color; in modest design, it is the sculpture of light and shadow."'
  },
  {
    lookNumber: 'LOOK 02',
    title: 'Dune & Warm Alabaster',
    silhouette: 'Minimalist Kimono Abaya paired with Raw Flax Linen Tunic',
    image: 'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&w=1200&q=85',
    productSlug: 'minimalist-kimono-abaya',
    price: 175,
    quote: '"Unstructured ease tailored for metropolitan moments."'
  },
  {
    lookNumber: 'LOOK 03',
    title: 'Sands of the Oasis',
    silhouette: '100% Washed European Linen Abaya in Earthy Clay',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=85',
    productSlug: 'linen-abaya',
    price: 190,
    quote: '"Breathes with desert winds. Softens with every chapter of life."'
  },
  {
    lookNumber: 'LOOK 04',
    title: 'The Coordinated Monolith',
    silhouette: 'Double-Knit Ponte High-Neck Tunic & Fluid Wide-Leg Trousers',
    image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1200&q=85',
    productSlug: 'modest-two-piece-set',
    price: 215,
    quote: '"Monochromatic precision that transitions from boardroom to evening banquet."'
  },
  {
    lookNumber: 'LOOK 05',
    title: 'Haute Occasion Bell-Cuff',
    silhouette: 'Hammered Crepe Satin with Silk Organza Interlining',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85',
    productSlug: 'premium-occasion-abaya',
    price: 260,
    quote: '"A whisper of luster under chandeliers, completely modest in every cut."'
  }
];

export const LookbookPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-pureWhite min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Editorial Campaign' }]} />

        {/* Campaign Title */}
        <div className="py-12 text-center max-w-2xl mx-auto border-b border-brand-border">
          <span className="text-[10px] uppercase tracking-super-wide text-neutral-400 block mb-2 font-mono">
            VOLUME IV · CAMPAIGN EDITORIAL
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-brand-black font-normal tracking-tight">
            Sands & Shadows
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 font-light mt-4 leading-relaxed">
            Photographed between the terracotta dunes of the Rub' al Khali and modernist architectural galleries. An exploration of proportion, silence, and contemporary Islamic elegance.
          </p>
        </div>

        {/* Editorial Feed */}
        <div className="py-16 space-y-24">
          {LOOKBOOK_ENTRIES.map((entry, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={entry.lookNumber}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Lookbook Photograph (7 cols) */}
                <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-brand-sand shadow-sm relative group">
                    <img
                      src={entry.image}
                      alt={entry.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-brand-black text-white text-[10px] uppercase tracking-widest px-3 py-1 font-mono">
                      {entry.lookNumber}
                    </div>
                  </div>
                </div>

                {/* Editorial Copy & Shop Pin (5 cols) */}
                <div className={`lg:col-span-5 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="text-[10px] uppercase tracking-super-wide text-neutral-400 font-mono">
                    EDITORIAL ARCHIVE
                  </span>

                  <h2 className="font-serif text-3xl sm:text-4xl text-brand-black font-normal tracking-tight">
                    {entry.title}
                  </h2>

                  <p className="font-serif italic text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
                    {entry.quote}
                  </p>

                  <div className="p-5 bg-brand-sand/50 border border-brand-warmBeige flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-super-wide text-neutral-400 block">
                        FEATURED SILHOUETTE
                      </span>
                      <h4 className="font-serif text-sm font-medium text-brand-black mt-0.5">
                        {entry.silhouette}
                      </h4>
                      <span className="text-xs font-semibold text-brand-black block mt-1">
                        ${entry.price}
                      </span>
                    </div>

                    <Link
                      to={`/product/${entry.productSlug}`}
                      className="px-5 py-2.5 bg-brand-black text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors flex items-center space-x-1"
                    >
                      <span>SHOP</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Campaign Callout */}
        <div className="py-16 text-center border-t border-brand-border">
          <Link
            to="/shop"
            className="px-10 py-4 bg-brand-black text-white text-xs uppercase tracking-super-wide font-medium hover:bg-neutral-800 transition-colors inline-block"
          >
            DISCOVER THE ENTIRE COLLECTION (24 DESIGNS)
          </Link>
        </div>
      </div>
    </div>
  );
};

