import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { QuickViewModal } from './QuickViewModal';
import { SafeImage } from './SafeImage';

interface ProductCardProps {
  product: Product;
  aspectRatio?: 'tall' | 'fashion' | 'editorial';
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  aspectRatio = 'fashion',
  priority = false
}) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isFavorited = isInWishlist(product.id);

  const primaryImage = product.images[0];
  const secondaryImage = product.images[1] || product.images[0];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.sizes.length === 1 || product.category === 'hijabs') {
      addToCart(product, product.colors[selectedColorIndex] || product.colors[0], product.sizes[0], 1);
    } else {
      setIsQuickViewOpen(true);
    }
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const aspectClass =
    aspectRatio === 'tall'
      ? 'aspect-[9/14]'
      : aspectRatio === 'editorial'
      ? 'aspect-[4/5]'
      : 'aspect-[3/4]';

  return (
    <>
      <div
        className="group relative flex flex-col cursor-pointer w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image Container with Hover Swap & Touch-friendly Badges */}
        <div className={`relative w-full ${aspectClass} overflow-hidden bg-brand-sand/60`}>
          <Link to={`/product/${product.slug}`} className="block w-full h-full">
            {/* Primary Image */}
            <div
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                isHovered && secondaryImage !== primaryImage ? 'opacity-0 sm:scale-105' : 'opacity-100 scale-100'
              }`}
            >
              <SafeImage
                src={primaryImage}
                alt={product.name}
                categoryLabel={product.categoryName}
                priority={priority}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="w-full h-full object-cover transition-transform duration-700"
              />
            </div>

            {/* Secondary Image for Desktop Hover Swap */}
            {secondaryImage && secondaryImage !== primaryImage && (
              <div
                className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out hidden sm:block ${
                  isHovered ? 'opacity-100 sm:scale-105' : 'opacity-0 scale-100'
                }`}
              >
                <SafeImage
                  src={secondaryImage}
                  alt={`${product.name} lifestyle angle`}
                  categoryLabel={product.categoryName}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </Link>

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
              <span className="bg-brand-black/90 backdrop-blur-xs text-white text-[8px] sm:text-[9px] uppercase tracking-super-wide px-2 py-0.5 font-medium shadow-xs">
                {product.badge}
              </span>
            </div>
          )}

          {/* Wishlist Button (Min 40px touch target on mobile) */}
          <button
            onClick={handleWishlistClick}
            className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-xs ${
              isFavorited
                ? 'bg-brand-black text-white'
                : 'bg-white/85 text-brand-black hover:bg-white backdrop-blur-xs'
            }`}
            aria-label={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
          >
            <Heart
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                isFavorited ? 'fill-current scale-110 text-white' : 'text-neutral-800'
              }`}
            />
          </button>

          {/* Desktop Hover Drawer (slide up at bottom) */}
          <div
            className={`hidden sm:flex absolute bottom-0 inset-x-0 z-10 p-2.5 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-all duration-300 items-center justify-between gap-2 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              className="flex-1 py-2 px-2 text-center bg-white text-brand-black text-[10px] uppercase tracking-widest font-semibold flex items-center justify-center space-x-1.5 hover:bg-brand-sand transition-colors shadow-sm"
            >
              <ShoppingBag className="w-3 h-3" />
              <span>{product.sizes.length > 1 ? '+ QUICK ADD' : 'ADD TO BAG'}</span>
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsQuickViewOpen(true);
              }}
              className="p-2 bg-brand-black text-white hover:bg-neutral-800 transition-colors shadow-sm"
              title="Quick View"
              aria-label="Quick View"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Tap Quick Add Pill (Always accessible on touch without hover) */}
          <div className="sm:hidden absolute bottom-2 right-2 z-10">
            <button
              onClick={handleQuickAdd}
              className="w-8 h-8 rounded-full bg-brand-black/90 backdrop-blur-xs text-white flex items-center justify-center shadow-md active:scale-95 transition-transform"
              aria-label="Quick Add to Bag"
              title="Quick Add"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Product Meta Section */}
        <div className="pt-2.5 pb-2 flex flex-col flex-1">
          {/* Color Swatches */}
          {product.colors.length > 1 && (
            <div className="flex items-center space-x-1.5 mb-1">
              {product.colors.map((color, idx) => (
                <button
                  key={color.name}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedColorIndex(idx);
                  }}
                  className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full p-0.5 border transition-all ${
                    selectedColorIndex === idx
                      ? 'border-brand-black scale-110'
                      : 'border-transparent opacity-75 hover:opacity-100'
                  }`}
                  title={color.name}
                  aria-label={color.name}
                >
                  <span
                    className="w-full h-full rounded-full block border border-black/10"
                    style={{ backgroundColor: color.hex }}
                  />
                </button>
              ))}
              <span className="text-[9px] sm:text-[10px] text-neutral-400 pl-0.5 font-light">
                {product.colors.length} shades
              </span>
            </div>
          )}

          <div className="flex items-start justify-between gap-1.5">
            <Link
              to={`/product/${product.slug}`}
              className="font-serif text-[13px] sm:text-[15px] text-brand-black font-normal hover:underline underline-offset-4 line-clamp-1 leading-tight flex-1"
            >
              {product.name}
            </Link>
            <div className="flex items-baseline space-x-1 text-xs flex-shrink-0">
              <span className="font-semibold text-brand-black text-[12px] sm:text-xs">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-[10px] line-through text-neutral-400">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>

          <p className="text-[10px] sm:text-[11px] text-neutral-500 font-light truncate mt-0.5">
            {product.tagline}
          </p>
        </div>
      </div>

      <QuickViewModal
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
};
