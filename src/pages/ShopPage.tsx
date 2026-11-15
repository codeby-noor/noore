import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/ui/ProductCard';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Filter, X, SlidersHorizontal, ChevronDown, ChevronUp, Grid3X3, LayoutGrid } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categorySlug } = useParams<{ categorySlug?: string }>();

  // Filter state
  const selectedCategory = categorySlug || searchParams.get('category') || 'all';
  const urlFilter = searchParams.get('filter'); // 'new', 'bestsellers'

  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 350]);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [gridCols, setGridCols] = useState<3 | 4>(3);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Accordion toggle states for desktop filter sidebar
  const [openSections, setOpenSections] = useState({
    categories: true,
    colors: true,
    sizes: true,
    price: true
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug, urlFilter]);

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Extract all unique colors and sizes from catalog
  const availableColors = useMemo(() => {
    const map = new Map<string, string>();
    PRODUCTS.forEach((p) => {
      p.colors.forEach((c) => {
        if (!map.has(c.name)) {
          map.set(c.name, c.hex);
        }
      });
    });
    return Array.from(map.entries()).map(([name, hex]) => ({ name, hex }));
  }, []);

  const availableSizes = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach((p) => {
      p.sizes.forEach((s) => {
        const short = s.split(' ')[0];
        set.add(short);
      });
    });
    return Array.from(set);
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all') {
        const matchesCategory =
          product.category === selectedCategory ||
          CATEGORIES.find((c) => c.slug === selectedCategory)?.id === product.category;
        if (!matchesCategory) return false;
      }

      // URL Filter (e.g. ?filter=new)
      if (urlFilter === 'new' && product.badge !== 'NEW') {
        return false;
      }
      if (urlFilter === 'bestsellers' && !product.bestSeller && product.badge !== 'BESTSELLER') {
        return false;
      }

      // Subcategory filter
      if (
        selectedSubcategories.length > 0 &&
        !selectedSubcategories.includes(product.subcategory)
      ) {
        return false;
      }

      // Color filter
      if (selectedColors.length > 0) {
        const hasColor = product.colors.some((c) => selectedColors.includes(c.name));
        if (!hasColor) return false;
      }

      // Size filter
      if (selectedSizes.length > 0) {
        const hasSize = product.sizes.some((s) =>
          selectedSizes.includes(s.split(' ')[0])
        );
        if (!hasSize) return false;
      }

      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      // In stock
      if (inStockOnly && !product.inStock) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.badge === 'NEW' ? 1 : 0) - (a.badge === 'NEW' ? 1 : 0);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [
    selectedCategory,
    urlFilter,
    selectedSubcategories,
    selectedColors,
    selectedSizes,
    priceRange,
    sortBy,
    inStockOnly
  ]);

  const currentCategoryInfo = CATEGORIES.find(
    (c) => c.slug === selectedCategory || c.id === selectedCategory
  );

  const activeFiltersCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    selectedSubcategories.length +
    selectedColors.length +
    selectedSizes.length +
    (priceRange[1] < 350 ? 1 : 0) +
    (inStockOnly ? 1 : 0);

  const clearAllFilters = () => {
    setSelectedSubcategories([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setPriceRange([0, 350]);
    setInStockOnly(false);
    setSearchParams({});
  };

  const toggleColorFilter = (colorName: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorName) ? prev.filter((c) => c !== colorName) : [...prev, colorName]
    );
  };

  const toggleSizeFilter = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="bg-brand-pureWhite min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Collections', path: '/shop' },
            ...(currentCategoryInfo
              ? [{ label: currentCategoryInfo.name }]
              : urlFilter === 'new'
              ? [{ label: 'New Arrivals' }]
              : urlFilter === 'bestsellers'
              ? [{ label: 'Best Sellers' }]
              : [{ label: 'All Silhouettes' }]),
          ]}
        />

        {/* Page Banner / Header */}
        <div className="py-6 sm:py-8 border-b border-brand-border">
          <span className="text-[10px] uppercase tracking-super-wide text-neutral-400 block mb-1">
            ATELIER CATALOGUE
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-brand-black font-normal tracking-tight">
            {currentCategoryInfo
              ? currentCategoryInfo.name
              : urlFilter === 'new'
              ? 'New In Silhouettes'
              : urlFilter === 'bestsellers'
              ? 'Atelier Best Sellers'
              : 'All Silhouettes'}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-xl font-light mt-2 leading-relaxed">
            {currentCategoryInfo
              ? currentCategoryInfo.description
              : 'Meticulously tailored modest wardrobe staples. Experience precision drape, luxury natural fibers, and timeless modesty.'}
          </p>

          {/* Category Quick Pills */}
          <div className="w-full max-w-full overflow-hidden mt-5 sm:mt-6">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none touch-scroll w-full">
              <Link
                to="/shop"
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs uppercase tracking-widest whitespace-nowrap transition-colors border flex-shrink-0 ${
                  selectedCategory === 'all' && !urlFilter
                    ? 'bg-brand-black text-white border-brand-black font-medium'
                    : 'bg-white text-neutral-600 border-brand-border hover:border-black'
                }`}
              >
                All Pieces
              </Link>
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.slug}`}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs uppercase tracking-widest whitespace-nowrap transition-colors border flex-shrink-0 ${
                    selectedCategory === cat.slug || selectedCategory === cat.id
                      ? 'bg-brand-black text-white border-brand-black font-medium'
                      : 'bg-white text-neutral-600 border-brand-border hover:border-black'
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Bar & Sorting Row */}
        <div className="py-3 sm:py-4 flex flex-wrap items-center justify-between gap-3 border-b border-brand-border text-xs">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex items-center space-x-1.5 px-3 py-2 border border-brand-border text-neutral-800 hover:border-black active:scale-98 transition-transform"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider font-medium text-[11px]">
              Filters {activeFiltersCount > 0 ? `(${activeFiltersCount})` : ''}
            </span>
          </button>

          {/* Product Count */}
          <div className="text-neutral-500 uppercase tracking-wider text-[10px] sm:text-[11px]">
            Showing <strong className="text-brand-black">{filteredProducts.length}</strong> Silhouettes
          </div>

          {/* Right Tools: Sort By & Grid View Toggle */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="text-neutral-400 uppercase tracking-widest text-[10px] sm:text-[11px] hidden sm:inline">
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none text-[11px] sm:text-xs uppercase tracking-wider text-brand-black font-medium focus:ring-0 focus:outline-none cursor-pointer py-1 pr-5"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            {/* Desktop Grid Switcher */}
            <div className="hidden sm:flex items-center space-x-1 pl-3 border-l border-brand-border text-neutral-400">
              <button
                onClick={() => setGridCols(3)}
                className={`p-1 transition-colors ${gridCols === 3 ? 'text-black' : 'hover:text-black'}`}
                title="3 Columns"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridCols(4)}
                className={`p-1 transition-colors ${gridCols === 4 ? 'text-black' : 'hover:text-black'}`}
                title="4 Columns"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Filter Pills (if any) */}
        {activeFiltersCount > 0 && (
          <div className="py-2.5 flex flex-wrap items-center gap-1.5 sm:gap-2 border-b border-brand-border/60">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-400 mr-1">
              Active:
            </span>

            {selectedColors.map((color) => (
              <span
                key={color}
                className="inline-flex items-center space-x-1 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-brand-sand text-brand-black text-[10px] sm:text-[11px] uppercase tracking-wider"
              >
                <span>{color}</span>
                <button
                  onClick={() => toggleColorFilter(color)}
                  className="hover:text-neutral-500"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}

            {selectedSizes.map((size) => (
              <span
                key={size}
                className="inline-flex items-center space-x-1 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-brand-sand text-brand-black text-[10px] sm:text-[11px] uppercase tracking-wider"
              >
                <span>Size {size}</span>
                <button
                  onClick={() => toggleSizeFilter(size)}
                  className="hover:text-neutral-500"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}

            {priceRange[1] < 350 && (
              <span className="inline-flex items-center space-x-1 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-brand-sand text-brand-black text-[10px] sm:text-[11px] uppercase tracking-wider">
                <span>Under ${priceRange[1]}</span>
                <button
                  onClick={() => setPriceRange([0, 350])}
                  className="hover:text-neutral-500"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={clearAllFilters}
              className="text-[10px] sm:text-[11px] uppercase tracking-widest underline underline-offset-4 text-neutral-500 hover:text-black ml-2 font-medium"
            >
              Clear ({activeFiltersCount})
            </button>
          </div>
        )}

        {/* Main Content: Sidebar + Products Grid */}
        <div className="pt-6 sm:pt-8 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Filter Sidebar (3 cols) */}
          <aside className="hidden lg:block lg:col-span-3 pr-6 space-y-6 sticky top-28 divide-y divide-brand-border">
            <div className="flex items-center justify-between pb-4">
              <span className="text-xs uppercase tracking-super-wide font-medium text-brand-black">
                Refine Selection
              </span>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="text-[11px] uppercase tracking-wider text-neutral-400 hover:text-black underline"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Section 1: Categories */}
            <div className="pt-5">
              <button
                onClick={() => toggleSection('categories')}
                className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-medium text-brand-black mb-3"
              >
                <span>Category</span>
                {openSections.categories ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
              {openSections.categories && (
                <ul className="space-y-2 text-xs text-neutral-600">
                  <li>
                    <Link
                      to="/shop"
                      className={`block hover:text-black ${selectedCategory === 'all' ? 'font-semibold text-black' : ''}`}
                    >
                      All Pieces ({PRODUCTS.length})
                    </Link>
                  </li>
                  {CATEGORIES.map((cat) => (
                    <li key={cat.id}>
                      <Link
                        to={`/category/${cat.slug}`}
                        className={`block hover:text-black ${
                          selectedCategory === cat.slug || selectedCategory === cat.id
                            ? 'font-semibold text-black'
                            : ''
                        }`}
                      >
                        {cat.name} ({cat.itemCount})
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Section 2: Colors */}
            <div className="pt-5">
              <button
                onClick={() => toggleSection('colors')}
                className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-medium text-brand-black mb-3"
              >
                <span>Color Palette</span>
                {openSections.colors ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
              {openSections.colors && (
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {availableColors.slice(0, 10).map((c) => {
                    const isSelected = selectedColors.includes(c.name);
                    return (
                      <button
                        key={c.name}
                        onClick={() => toggleColorFilter(c.name)}
                        className={`flex items-center space-x-2 p-1.5 text-left border transition-all ${
                          isSelected
                            ? 'border-brand-black bg-brand-sand/60'
                            : 'border-transparent hover:border-brand-border'
                        }`}
                      >
                        <span
                          className="w-3 h-3 rounded-full border border-black/20 flex-shrink-0"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span className="truncate text-[11px] text-neutral-700">{c.name.split(' ')[0]}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Section 3: Sizes */}
            <div className="pt-5">
              <button
                onClick={() => toggleSection('sizes')}
                className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-medium text-brand-black mb-3"
              >
                <span>Size Range</span>
                {openSections.sizes ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
              {openSections.sizes && (
                <div className="grid grid-cols-3 gap-1.5">
                  {availableSizes.map((size) => {
                    const isSelected = selectedSizes.includes(size);
                    return (
                      <button
                        key={size}
                        onClick={() => toggleSizeFilter(size)}
                        className={`py-1.5 px-2 text-center text-xs tracking-wider uppercase border transition-all ${
                          isSelected
                            ? 'bg-brand-black text-white border-brand-black font-medium'
                            : 'bg-white text-neutral-600 border-brand-border hover:border-black'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Section 4: Price Slider */}
            <div className="pt-5">
              <button
                onClick={() => toggleSection('price')}
                className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-medium text-brand-black mb-3"
              >
                <span>Max Price: ${priceRange[1]}</span>
                {openSections.price ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
              {openSections.price && (
                <div className="space-y-3">
                  <input
                    type="range"
                    min="20"
                    max="350"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                    className="w-full accent-brand-black cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-neutral-400">
                    <span>$20</span>
                    <span>$350</span>
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* Product Grid Area (Ultra-responsive 2 cols on mobile, 3/4 on desktop) */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="py-16 sm:py-20 text-center border border-dashed border-brand-border p-6 sm:p-8 bg-brand-sand/30">
                <h3 className="font-serif text-2xl text-brand-black font-normal mb-2">
                  No matching silhouettes found
                </h3>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto mb-6 leading-relaxed">
                  Adjust your filters or clear color and size parameters to view the complete haute collection.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-3 bg-brand-black text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div
                className={`grid grid-cols-2 ${
                  gridCols === 4 ? 'sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4' : 'sm:grid-cols-2 md:grid-cols-3'
                } gap-3 sm:gap-6 lg:gap-8`}
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} aspectRatio="fashion" />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Drawer with Safe Area and Sticky Footer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileFilterOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-brand-pureWhite shadow-2xl flex flex-col justify-between animate-slideInRight">
            <div className="p-5 pt-safe flex items-center justify-between border-b border-brand-border">
              <h3 className="text-xs uppercase tracking-super-wide font-medium text-brand-black">
                Filters & Refinements
              </h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-black"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-6 touch-scroll">
              {/* Category */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-medium text-brand-black mb-2">
                  Category
                </h4>
                <div className="space-y-1.5 text-xs text-neutral-600">
                  <Link
                    to="/shop"
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="block py-1 hover:text-black"
                  >
                    All Collections ({PRODUCTS.length})
                  </Link>
                  {CATEGORIES.map((c) => (
                    <Link
                      key={c.id}
                      to={`/category/${c.slug}`}
                      onClick={() => setIsMobileFilterOpen(false)}
                      className="block py-1 hover:text-black"
                    >
                      {c.name} ({c.itemCount})
                    </Link>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-medium text-brand-black mb-2">
                  Sizes
                </h4>
                <div className="grid grid-cols-3 gap-1.5">
                  {availableSizes.map((size) => {
                    const isSelected = selectedSizes.includes(size);
                    return (
                      <button
                        key={size}
                        onClick={() => toggleSizeFilter(size)}
                        className={`py-2 text-xs tracking-wider uppercase border active:scale-95 transition-all ${
                          isSelected
                            ? 'bg-brand-black text-white border-brand-black font-semibold'
                            : 'bg-white border-brand-border text-neutral-700'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-medium text-brand-black mb-2">
                  Max Price: ${priceRange[1]}
                </h4>
                <input
                  type="range"
                  min="20"
                  max="350"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                  className="w-full accent-brand-black"
                />
              </div>
            </div>

            {/* Mobile Filter Drawer Sticky Action Footer */}
            <div className="p-4 pb-safe border-t border-brand-border space-y-2 bg-brand-ivory/60">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-3.5 bg-brand-black text-white text-xs uppercase tracking-super-wide font-medium active:scale-98 transition-transform"
              >
                Apply Filters ({filteredProducts.length} Results)
              </button>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="w-full py-2 text-xs uppercase tracking-widest text-neutral-500 underline text-center block"
                >
                  Clear All ({activeFiltersCount})
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
