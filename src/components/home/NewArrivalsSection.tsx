import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../ui/ProductCard';
import { ArrowRight } from 'lucide-react';

export const NewArrivalsSection: React.FC = () => {
  // Curate 4-8 distinct new arrivals
  const newArrivals = PRODUCTS.filter((p) => p.badge === 'NEW' || p.featured).slice(0, 8);

  return (
    <section className="py-20 md:py-28 bg-brand-sand/30 border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-super-wide text-neutral-500 block mb-1">
              THE RECENT DROP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-black font-normal tracking-tight">
              New In Silhouettes
            </h2>
            <p className="text-xs text-neutral-500 mt-2 max-w-md font-light">
              Refined cuts, hand-finished raw hems, and newly arrived Medina silk shades designed for graceful transitions.
            </p>
          </div>

          <Link
            to="/shop?filter=new"
            className="mt-4 md:mt-0 text-xs uppercase tracking-super-wide font-medium text-brand-black hover:underline underline-offset-4 inline-flex items-center space-x-1.5"
          >
            <span>View All New Arrivals</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Column Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} aspectRatio="fashion" />
          ))}
        </div>
      </div>
    </section>
  );
};

