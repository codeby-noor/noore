import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../data/categories';
import { ArrowUpRight } from 'lucide-react';
import { SafeImage } from '../ui/SafeImage';

export const CategoryGrid: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-brand-pureWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-5 border-b border-brand-border">
          <div>
            <span className="text-[10px] uppercase tracking-super-wide text-neutral-400 block mb-1">
              CURATED CHAPTERS
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-brand-black font-normal tracking-tight">
              Explore by Silhouette
            </h2>
          </div>
          <Link
            to="/shop"
            className="mt-3 md:mt-0 text-xs uppercase tracking-super-wide font-medium text-neutral-600 hover:text-black inline-flex items-center space-x-1.5 transition-colors group"
          >
            <span>View All Collections (24 Silhouettes)</span>
            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Asymmetrical High-Fashion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {/* Item 1: Abayas (Large Feature 7 cols on desktop) */}
          <div className="md:col-span-7">
            <Link
              to={`/category/${CATEGORIES[0].slug}`}
              className="group relative block aspect-[4/5] sm:aspect-[16/11] overflow-hidden bg-brand-sand"
            >
              <SafeImage
                src={CATEGORIES[0].image}
                alt={CATEGORIES[0].name}
                categoryLabel={CATEGORIES[0].name}
                sizes="(max-width: 768px) 100vw, 60vw"
                className="w-full h-full object-cover object-[center_25%] sm:object-[center_20%] transition-transform duration-1000 ease-out sm:group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-opacity duration-300" />
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-8 text-white flex flex-col justify-end">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-super-wide text-brand-sand mb-1 font-mono">
                  {CATEGORIES[0].itemCount} SILHOUETTES
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-1 sm:mb-2">
                  {CATEGORIES[0].name}
                </h3>
                <p className="text-xs text-neutral-300 max-w-md line-clamp-2 font-light hidden sm:block">
                  {CATEGORIES[0].description}
                </p>
                <div className="mt-3 sm:mt-4 inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-medium text-white group-hover:text-brand-sand transition-colors">
                  <span>{CATEGORIES[0].highlightText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Item 2: Hijabs (5 cols on desktop) */}
          <div className="md:col-span-5">
            <Link
              to={`/category/${CATEGORIES[1].slug}`}
              className="group relative block aspect-[4/5] sm:aspect-[16/11] md:aspect-auto md:h-full overflow-hidden bg-brand-sand"
            >
              <SafeImage
                src={CATEGORIES[1].image}
                fallbackSrc="/images/hijab-category-unsplash.jpg"
                alt={CATEGORIES[1].name}
                categoryLabel={CATEGORIES[1].name}
                sizes="(max-width: 768px) 100vw, 40vw"
                className="w-full h-full object-cover object-[center_25%] sm:object-[center_20%] transition-transform duration-1000 ease-out sm:group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-8 text-white flex flex-col justify-end">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-super-wide text-brand-sand mb-1 font-mono">
                  {CATEGORIES[1].itemCount} TEXTURES
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-1 sm:mb-2">
                  {CATEGORIES[1].name}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-2 font-light hidden sm:block">
                  {CATEGORIES[1].description}
                </p>
                <div className="mt-3 sm:mt-4 inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-medium text-white group-hover:text-brand-sand transition-colors">
                  <span>{CATEGORIES[1].highlightText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          </div>

          {/* Bottom Row: 3 Categories (4 cols each) */}
          {CATEGORIES.slice(2).map((cat) => (
            <div key={cat.id} className="md:col-span-4">
              <Link
                to={`/category/${cat.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden bg-brand-sand"
              >
                <SafeImage
                  src={cat.image}
                  alt={cat.name}
                  categoryLabel={cat.name}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-full object-cover object-[center_25%] sm:object-[center_20%] transition-transform duration-1000 ease-out sm:group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white flex flex-col justify-end">
                  <span className="text-[9px] uppercase tracking-super-wide text-brand-sand mb-1 font-mono">
                    {cat.subtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-1">
                    {cat.name}
                  </h3>
                  <div className="mt-2 inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest font-medium text-white group-hover:text-brand-sand transition-colors">
                    <span>{cat.highlightText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
