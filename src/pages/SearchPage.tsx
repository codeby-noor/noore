import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Search as SearchIcon, ArrowRight } from 'lucide-react';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    return PRODUCTS.filter((product) => {
      const matchName = product.name.toLowerCase().includes(trimmed);
      const matchCategory = product.categoryName.toLowerCase().includes(trimmed);
      const matchTagline = product.tagline.toLowerCase().includes(trimmed);
      const matchSub = product.subcategory.toLowerCase().includes(trimmed);
      const matchDescription = product.description.toLowerCase().includes(trimmed);
      const matchColors = product.colors.some((c) => c.name.toLowerCase().includes(trimmed));
      return matchName || matchCategory || matchTagline || matchSub || matchDescription || matchColors;
    });
  }, [query]);

  return (
    <div className="bg-brand-pureWhite min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Search Results' }]} />

        {/* Search Query Header */}
        <div className="py-8 border-b border-brand-border">
          <span className="text-[10px] uppercase tracking-super-wide text-neutral-400 block mb-1">
            SEARCH ATELIER
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-brand-black font-normal tracking-tight">
            {query ? `Results for "${query}"` : 'Search Collections'}
          </h1>
          <p className="text-xs text-neutral-500 mt-2">
            Found {results.length} {results.length === 1 ? 'matching silhouette' : 'matching silhouettes'}
          </p>
        </div>

        {/* Results or Empty State */}
        {results.length > 0 ? (
          <div className="py-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} aspectRatio="fashion" />
              ))}
            </div>
          </div>
        ) : (
          <div className="py-16 text-center max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-brand-sand flex items-center justify-center mx-auto mb-4 text-neutral-400">
              <SearchIcon className="w-7 h-7" />
            </div>
            <h2 className="font-serif text-2xl text-brand-black mb-2">
              No matching results found
            </h2>
            <p className="text-xs text-neutral-500 mb-8 leading-relaxed">
              We couldn't locate any products matching "{query}". Try checking your spelling or exploring our curated categories below.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['Abayas', 'Hijabs', 'Two-Piece Sets', 'Prayer Wear', 'Linen'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchParams({ q: tag })}
                  className="px-4 py-2 bg-brand-sand text-xs uppercase tracking-wider text-neutral-700 hover:bg-black hover:text-white transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
            <Link
              to="/shop"
              className="px-8 py-3.5 bg-brand-black text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors inline-block"
            >
              Browse Complete Catalog
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

