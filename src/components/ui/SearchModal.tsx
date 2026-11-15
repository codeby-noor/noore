import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, X, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../types';
import { SafeImage } from './SafeImage';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TRENDING_SEARCHES = [
  'Classic Black Abaya',
  'Medina Silk Hijab',
  'Dubai Luxury',
  'Two-Piece Set',
  'Prayer Dress',
  'Linen Abaya',
  'Hijab Magnets',
  'Kimono'
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      setResults([]);
      return;
    }

    const filtered = PRODUCTS.filter((product) => {
      const matchName = product.name.toLowerCase().includes(trimmed);
      const matchCategory = product.categoryName.toLowerCase().includes(trimmed);
      const matchTagline = product.tagline.toLowerCase().includes(trimmed);
      const matchSub = product.subcategory.toLowerCase().includes(trimmed);
      const matchColors = product.colors.some((c) => c.name.toLowerCase().includes(trimmed));
      return matchName || matchCategory || matchTagline || matchSub || matchColors;
    });

    setResults(filtered.slice(0, 6));
  }, [query]);

  if (!isOpen) return null;

  const handleSelectTrending = (term: string) => {
    setQuery(term);
  };

  const handleViewAllResults = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (query.trim()) {
      onClose();
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex flex-col items-center pt-8 sm:pt-16 p-4">
        <div
          className="bg-brand-pureWhite w-full max-w-3xl shadow-2xl border border-brand-border animate-fadeIn relative z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Bar Input */}
          <form onSubmit={handleViewAllResults} className="p-4 sm:p-6 border-b border-brand-border flex items-center space-x-3">
            <SearchIcon className="w-5 h-5 text-neutral-400 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH NOORÉ..."
              className="flex-1 text-sm sm:text-base font-serif tracking-wide border-none outline-none bg-transparent placeholder:text-neutral-400 placeholder:font-sans placeholder:text-xs placeholder:tracking-widest uppercase"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="p-1 text-neutral-400 hover:text-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-xs uppercase tracking-widest text-neutral-500 hover:text-black font-medium border-l border-brand-border pl-4"
            >
              Cancel
            </button>
          </form>

          {/* Body Content */}
          <div className="p-6 max-h-[65vh] overflow-y-auto">
            {/* If no query, show trending terms and curated suggestions */}
            {!query.trim() ? (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-1.5 text-[11px] uppercase tracking-widest font-medium text-neutral-400 mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Trending Searches</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {TRENDING_SEARCHES.map((term) => (
                      <button
                        key={term}
                        onClick={() => handleSelectTrending(term)}
                        className="px-3.5 py-1.5 text-xs text-neutral-700 bg-brand-sand/70 hover:bg-brand-black hover:text-white transition-colors tracking-wide"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border">
                  <h4 className="text-[11px] uppercase tracking-widest font-medium text-neutral-400 mb-3">
                    Popular Categories
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { name: 'Abayas', slug: 'abayas' },
                      { name: 'Hijabs', slug: 'hijabs' },
                      { name: 'Two-Piece Sets', slug: 'sets' },
                      { name: 'Prayer Wear', slug: 'prayer-wear' },
                    ].map((cat) => (
                      <button
                        key={cat.slug}
                        onClick={() => {
                          onClose();
                          navigate(`/category/${cat.slug}`);
                        }}
                        className="p-3 text-left border border-brand-border hover:border-black transition-colors"
                      >
                        <span className="font-serif text-sm block text-brand-black">
                          {cat.name}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-neutral-400 mt-1 block">
                          Explore &rarr;
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : results.length > 0 ? (
              /* Live Results Found */
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs text-neutral-500 uppercase tracking-wider pb-2 border-b border-brand-border">
                  <span>Found {results.length} Matches</span>
                  <button
                    onClick={handleViewAllResults}
                    className="underline underline-offset-4 hover:text-black font-medium"
                  >
                    View All Results &rarr;
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {results.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        onClose();
                        navigate(`/product/${product.slug}`);
                      }}
                      className="group flex space-x-3 p-2 hover:bg-brand-sand/50 transition-colors cursor-pointer border border-transparent hover:border-brand-border"
                    >
                      <div className="w-16 h-22 flex-shrink-0 bg-brand-sand overflow-hidden">
                        <SafeImage
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <span className="text-[9px] uppercase tracking-super-wide text-neutral-400">
                          {product.categoryName}
                        </span>
                        <h4 className="font-serif text-sm text-brand-black group-hover:underline line-clamp-1">
                          {product.name}
                        </h4>
                        <span className="text-xs font-medium text-brand-black mt-1">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleViewAllResults}
                  className="w-full py-3 bg-brand-black text-white text-xs uppercase tracking-super-wide font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center space-x-2 mt-4"
                >
                  <span>SEE ALL RESULTS FOR "{query}"</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              /* No Results Found */
              <div className="text-center py-8">
                <p className="font-serif text-xl text-brand-black mb-1">
                  No matching silhouettes found
                </p>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto mb-6">
                  We couldn't find matches for "{query}". Try searching for broader terms like "Black Abaya", "Chiffon", or "Set".
                </p>
                <button
                  onClick={() => {
                    setQuery('');
                  }}
                  className="px-6 py-2.5 border border-brand-black text-xs uppercase tracking-widest hover:bg-brand-black hover:text-white transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

