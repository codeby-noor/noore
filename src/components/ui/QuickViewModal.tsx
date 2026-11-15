import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Heart, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product, ProductColor } from '../../types';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { SafeImage } from './SafeImage';
import { SizeGuideModal } from './SizeGuideModal';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [errorNotice, setErrorNotice] = useState('');

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0] || null);
      setSelectedSize(product.sizes[0] || '');
      setQuantity(1);
      setActiveImageIndex(0);
      setErrorNotice('');
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setErrorNotice('Please select a size to proceed');
      return;
    }
    if (selectedColor) {
      addToCart(product, selectedColor, selectedSize, quantity);
      onClose();
    }
  };

  return (
    <>
      <div 
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <div 
          className="bg-brand-pureWhite w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl border border-brand-border relative animate-fadeIn grid grid-cols-1 md:grid-cols-2"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-sm text-neutral-500 hover:text-black transition-colors rounded-full"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Image Gallery */}
          <div className="relative bg-brand-sand flex flex-col">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <SafeImage
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-brand-black text-white text-[10px] uppercase tracking-widest px-2.5 py-1 font-medium">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex p-3 gap-2 bg-brand-sand/40 border-t border-brand-border overflow-x-auto">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 h-18 flex-shrink-0 border transition-all ${
                      activeImageIndex === idx ? 'border-brand-black opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Details & Purchase Form */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-neutral-400 mb-2">
                <span>{product.categoryName}</span>
                <span>★ {product.rating} ({product.reviewCount})</span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl text-brand-black font-normal leading-tight">
                {product.name}
              </h2>

              <p className="text-xs text-neutral-500 mt-1 italic">
                {product.tagline}
              </p>

              <div className="mt-4 flex items-baseline space-x-3">
                <span className="text-xl font-medium tracking-tight text-brand-black">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm line-through text-neutral-400">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <div className="mt-4 text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                {product.description}
              </div>

              <div className="h-px bg-brand-border my-6" />

              {/* Color selection */}
              {product.colors.length > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between items-center text-xs tracking-wider uppercase mb-2">
                    <span className="font-medium text-brand-black">Color:</span>
                    <span className="text-neutral-500">{selectedColor?.name}</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    {product.colors.map((color) => {
                      const isSelected = selectedColor?.name === color.name;
                      return (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(color)}
                          className={`w-7 h-7 rounded-full p-0.5 border transition-all ${
                            isSelected ? 'border-brand-black ring-1 ring-brand-black' : 'border-transparent hover:scale-105'
                          }`}
                          title={color.name}
                        >
                          <span
                            className="w-full h-full rounded-full block border border-black/15 shadow-inner"
                            style={{ backgroundColor: color.hex }}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Size selection */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs tracking-wider uppercase mb-2">
                  <span className="font-medium text-brand-black">Size:</span>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="text-[11px] underline underline-offset-4 text-neutral-500 hover:text-black transition-colors"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {product.sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        onClick={() => {
                          setSelectedSize(size);
                          setErrorNotice('');
                        }}
                        className={`py-2 px-2 text-center text-xs tracking-wider uppercase border transition-all ${
                          isSelected
                            ? 'bg-brand-black text-white border-brand-black font-medium'
                            : 'bg-white text-neutral-700 border-brand-border hover:border-black'
                        }`}
                      >
                        {size.split(' ')[0]}
                      </button>
                    );
                  })}
                </div>
                {errorNotice && (
                  <p className="text-[11px] text-red-600 mt-2 font-medium tracking-wide">
                    {errorNotice}
                  </p>
                )}
              </div>

              {/* Quantity */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-xs tracking-wider uppercase font-medium text-brand-black">
                  Quantity:
                </span>
                <div className="flex items-center border border-brand-border">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    className="p-2 text-neutral-500 hover:text-black disabled:opacity-30 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-medium text-brand-black">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 text-neutral-500 hover:text-black transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-brand-border space-y-3">
              <div className="flex space-x-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 px-6 bg-brand-black text-white text-xs uppercase tracking-super-wide font-medium flex items-center justify-center space-x-2 hover:bg-neutral-800 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO BAG</span>
                </button>
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-3.5 border transition-colors ${
                    isFavorited
                      ? 'border-red-500 bg-red-50 text-red-500'
                      : 'border-brand-border text-neutral-700 hover:border-black hover:text-black'
                  }`}
                  aria-label="Wishlist toggle"
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="text-center">
                <Link
                  to={`/product/${product.slug}`}
                  onClick={onClose}
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest text-neutral-500 hover:text-black transition-colors pt-1 group"
                >
                  <span>View Full Product Experience</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        category={product.category}
      />
    </>
  );
};

