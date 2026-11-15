import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { Product, ProductColor } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { SafeImage } from '../components/ui/SafeImage';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { ProductCard } from '../components/ui/ProductCard';
import { SizeGuideModal } from '../components/ui/SizeGuideModal';
import {
  Heart,
  ShoppingBag,
  Minus,
  Plus,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Maximize2,
  X,
  Share2
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const product = PRODUCTS.find((p) => p.slug === slug);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [errorNotice, setErrorNotice] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  const mainCtaRef = useRef<HTMLDivElement>(null);

  // Accordion states
  const [openAccordions, setOpenAccordions] = useState({
    description: true,
    fabric: true,
    shipping: false,
    care: false
  });

  const toggleAccordion = (key: keyof typeof openAccordions) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setSelectedColor(product.colors[0] || null);
      setSelectedSize(product.sizes[0] || '');
      setQuantity(1);
      setActiveImageIndex(0);
      setErrorNotice('');
    }
  }, [slug, product]);

  // Monitor scroll for mobile sticky Add to Bag bar
  useEffect(() => {
    const handleScroll = () => {
      if (mainCtaRef.current) {
        const rect = mainCtaRef.current.getBoundingClientRect();
        // If bottom of main CTA is above screen view, reveal sticky bottom bar
        setShowStickyBar(rect.bottom < 0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-brand-pureWhite">
        <h2 className="font-serif text-3xl text-brand-black mb-3">Silhouette Not Found</h2>
        <p className="text-xs text-neutral-500 mb-6">
          The requested silhouette is no longer available in our active atelier catalog.
        </p>
        <Link
          to="/shop"
          className="px-8 py-3.5 bg-brand-black text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800"
        >
          Return to Collections
        </Link>
      </div>
    );
  }

  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setErrorNotice('Please select your preferred size to proceed');
      return;
    }
    if (selectedColor) {
      setIsAdding(true);
      setTimeout(() => {
        addToCart(product, selectedColor, selectedSize, quantity);
        setIsAdding(false);
      }, 300);
    }
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.featured)
  ).slice(0, 4);

  return (
    <div className="bg-brand-pureWhite min-h-screen pb-20 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Shop', path: '/shop' },
            { label: product.categoryName, path: `/category/${product.category}` },
            { label: product.name }
          ]}
        />

        {/* Main Product Layout */}
        <div className="pt-4 sm:pt-6 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Image Gallery (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Main Image with Zoom Lightbox Trigger */}
            <div className="relative aspect-[3/4] w-full bg-brand-sand overflow-hidden group cursor-zoom-in">
              <SafeImage
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                categoryLabel={product.categoryName}
                priority={true}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                onClick={() => setIsLightboxOpen(true)}
              />

              {product.badge && (
                <span className="absolute top-4 left-4 bg-brand-black text-white text-[9px] sm:text-[10px] uppercase tracking-super-wide px-3 py-1 font-medium z-10 shadow-xs">
                  {product.badge}
                </span>
              )}

              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute bottom-4 right-4 p-2.5 bg-white/85 backdrop-blur-xs text-neutral-800 hover:text-black rounded-full transition-opacity shadow-sm"
                aria-label="Expand image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail Horizontal Scroller */}
            {product.images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none touch-scroll">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-18 sm:w-24 aspect-[3/4] flex-shrink-0 bg-brand-sand overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-brand-black opacity-100 scale-102'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`View photo ${idx + 1}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Atelier Craftsmanship Callout */}
            <div className="p-5 bg-brand-sand/50 border border-brand-warmBeige/80 flex items-start space-x-3.5">
              <Sparkles className="w-5 h-5 text-neutral-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-600 space-y-1">
                <span className="font-semibold text-brand-black uppercase tracking-wider block">
                  Atelier Craftsmanship Standard
                </span>
                <p className="font-light leading-relaxed">
                  Tailored with hand-finished French-bound seams and double-face weight to preserve an elongated, floor-skimming silhouette with 100% opacity.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Purchasing & Details (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div>
              <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-neutral-400 mb-2">
                <span>{product.categoryName} · {product.subcategory}</span>
                <span>★ {product.rating} ({product.reviewCount} Reviews)</span>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black font-normal tracking-tight">
                {product.name}
              </h1>

              <p className="text-xs text-neutral-500 font-light mt-1.5 italic">
                {product.tagline}
              </p>

              <div className="mt-4 flex items-baseline space-x-3">
                <span className="text-2xl font-semibold tracking-tight text-brand-black">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm line-through text-neutral-400">
                    ${product.originalPrice}
                  </span>
                )}
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2 py-0.5 font-medium ml-2">
                  Complimentary Shipping
                </span>
              </div>
            </div>

            <div className="h-px bg-brand-border" />

            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div>
                <div className="flex justify-between items-center text-xs uppercase tracking-wider mb-2.5">
                  <span className="font-medium text-brand-black">Color:</span>
                  <span className="text-neutral-500 font-light">{selectedColor?.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  {product.colors.map((color) => {
                    const isSelected = selectedColor?.name === color.name;
                    return (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded-full p-0.5 border transition-all active:scale-95 ${
                          isSelected
                            ? 'border-brand-black ring-1 ring-brand-black scale-110'
                            : 'border-transparent hover:scale-105 opacity-80 hover:opacity-100'
                        }`}
                        title={color.name}
                        aria-label={color.name}
                      >
                        <span
                          className="w-full h-full rounded-full block border border-black/20 shadow-xs"
                          style={{ backgroundColor: color.hex }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div>
              <div className="flex justify-between items-center text-xs uppercase tracking-wider mb-2.5">
                <span className="font-medium text-brand-black">Size:</span>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="text-[11px] underline underline-offset-4 text-neutral-500 hover:text-black transition-colors"
                >
                  Size & Height Guide
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {product.sizes.map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                        setErrorNotice('');
                      }}
                      className={`py-3 px-2 text-center text-xs tracking-wider uppercase border transition-all active:scale-98 ${
                        isSelected
                          ? 'bg-brand-black text-white border-brand-black font-medium'
                          : 'bg-white text-neutral-700 border-brand-border hover:border-black'
                      }`}
                    >
                      <span className="block font-semibold">{size.split(' ')[0]}</span>
                      {size.includes('(') && (
                        <span className="block text-[9px] text-neutral-400 mt-0.5 truncate">
                          {size.substring(size.indexOf('(') + 1, size.indexOf(')'))}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {errorNotice && (
                <p className="text-xs text-red-600 mt-2 font-medium tracking-wide">
                  {errorNotice}
                </p>
              )}

              {product.modelInfo && (
                <p className="text-[11px] text-neutral-400 mt-2 font-light">
                  * {product.modelInfo}
                </p>
              )}
            </div>

            {/* Quantity Stepper */}
            <div className="flex items-center space-x-4">
              <span className="text-xs uppercase tracking-wider font-medium text-brand-black">
                Quantity:
              </span>
              <div className="flex items-center border border-brand-border">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  className="p-2.5 text-neutral-500 hover:text-black disabled:opacity-30 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-xs font-semibold text-brand-black">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2.5 text-neutral-500 hover:text-black transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Main CTA Section (Tracked by mainCtaRef) */}
            <div ref={mainCtaRef} className="space-y-3 pt-2">
              <div className="flex space-x-3">
                <button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="flex-1 py-4 px-6 bg-brand-black text-white text-xs uppercase tracking-super-wide font-medium flex items-center justify-center space-x-2 hover:bg-neutral-800 transition-colors shadow-md active:scale-99 disabled:opacity-80"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{isAdding ? 'ADDING TO BAG...' : 'ADD TO BAG'}</span>
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-4 border transition-colors ${
                    isFavorited
                      ? 'border-red-500 bg-red-50 text-red-500'
                      : 'border-brand-border text-neutral-700 hover:border-black hover:text-black'
                  }`}
                  aria-label="Wishlist toggle"
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Express Checkout Button */}
              <button
                onClick={() => {
                  if (!selectedSize) {
                    setErrorNotice('Please select a size first');
                    return;
                  }
                  if (selectedColor) {
                    addToCart(product, selectedColor, selectedSize, quantity);
                    navigate('/checkout');
                  }
                }}
                className="w-full py-3.5 bg-brand-sand text-brand-black text-xs uppercase tracking-super-wide font-medium hover:bg-brand-warmBeige transition-colors text-center block active:scale-99"
              >
                EXPRESS CHECKOUT
              </button>
            </div>

            {/* Shipping & Return Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-neutral-600">
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                <span>Complimentary Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                <span>30-Day Bespoke Returns</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="divide-y divide-brand-border border-t border-b border-brand-border mt-8">
              {/* Accordion 1: Description */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('description')}
                  className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-medium text-brand-black"
                >
                  <span>The Silhouette & Design</span>
                  {openAccordions.description ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                {openAccordions.description && (
                  <div className="mt-3 text-xs text-neutral-600 font-light leading-relaxed space-y-2 animate-fadeIn">
                    <p>{product.description}</p>
                    {product.features && (
                      <ul className="list-disc list-inside space-y-1 pt-1 text-neutral-500">
                        {product.features.map((feat, i) => (
                          <li key={i}>{feat}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>

              {/* Accordion 2: Fabric & Care */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('fabric')}
                  className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-medium text-brand-black"
                >
                  <span>Fabric & Atelier Care</span>
                  {openAccordions.fabric ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                {openAccordions.fabric && (
                  <div className="mt-3 text-xs text-neutral-600 font-light leading-relaxed space-y-3 animate-fadeIn">
                    <div>
                      <span className="font-semibold text-brand-black uppercase tracking-wider block mb-1">
                        Composition:
                      </span>
                      <ul className="space-y-1">
                        {product.fabricDetails.map((f, i) => (
                          <li key={i} className="flex items-center space-x-1.5">
                            <span className="w-1 h-1 bg-black rounded-full" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="font-semibold text-brand-black uppercase tracking-wider block mb-1">
                        Care Instructions:
                      </span>
                      <ul className="space-y-1">
                        {product.careInstructions.map((c, i) => (
                          <li key={i} className="flex items-center space-x-1.5 text-neutral-500">
                            <span className="w-1 h-1 bg-neutral-400 rounded-full" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 3: Delivery & Returns */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-medium text-brand-black"
                >
                  <span>Complimentary Delivery & Returns</span>
                  {openAccordions.shipping ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                {openAccordions.shipping && (
                  <div className="mt-3 text-xs text-neutral-600 font-light leading-relaxed space-y-2 animate-fadeIn">
                    <p>
                      <strong>Standard Courier:</strong> Complimentary on all orders over $100. Dispatched within 24 hours from our Dubai or London distribution hub. Delivery takes 3-5 business days.
                    </p>
                    <p>
                      <strong>Returns:</strong> We accept complimentary exchanges and returns within 30 days of receipt in unworn original condition with security tags intact.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like Section */}
        {relatedProducts.length > 0 && (
          <div className="py-12 sm:py-16 border-t border-brand-border">
            <div className="text-center mb-8 sm:mb-10">
              <span className="text-[10px] uppercase tracking-super-wide text-neutral-400 block mb-1">
                COMPLETE THE LOOK
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-brand-black font-normal tracking-tight">
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} aspectRatio="fashion" />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MOBILE STICKY ADD TO BAG BAR */}
      <div
        className={`md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-border p-3 pb-safe shadow-2xl transition-all duration-300 ease-in-out ${
          showStickyBar ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center space-x-2.5 min-w-0 flex-1">
            <div className="w-10 h-14 bg-brand-sand overflow-hidden flex-shrink-0">
              <img src={product.images[0]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <h4 className="font-serif text-xs text-brand-black truncate font-medium">{product.name}</h4>
              <p className="text-[11px] text-neutral-500 font-light truncate">
                ${product.price} · {selectedSize ? selectedSize.split(' ')[0] : 'Select Size'}
              </p>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="py-3 px-5 bg-brand-black text-white text-[11px] uppercase tracking-wider font-semibold flex items-center space-x-1.5 flex-shrink-0 active:scale-95 transition-transform"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>ADD TO BAG</span>
          </button>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white p-2 hover:opacity-80"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        category={product.category}
      />
    </div>
  );
};
