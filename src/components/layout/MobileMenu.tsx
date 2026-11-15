import React from 'react';
import { Link } from 'react-router-dom';
import { X, Search, Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenSearch }) => {
  const { totalWishlist } = useWishlist();
  const { totalItems, openCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-brand-pureWhite shadow-2xl flex flex-col justify-between animate-slideInLeft border-r border-brand-border">
        {/* Top Header with iOS notch safe-area */}
        <div className="p-5 pt-safe border-b border-brand-border flex items-center justify-between">
          <Link
            to="/"
            onClick={onClose}
            className="font-display text-2xl font-semibold tracking-super-wide text-brand-black"
          >
            NOORÉ
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-black transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Quick Action */}
        <div className="px-5 py-3 border-b border-brand-border bg-brand-sand/40">
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="w-full flex items-center justify-between py-2.5 px-3 text-xs uppercase tracking-widest text-neutral-500 bg-white border border-brand-border active:scale-98 transition-transform"
          >
            <span className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-neutral-400" />
              <span>Search Collection...</span>
            </span>
          </button>
        </div>

        {/* Nav Links with touch scrolling */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-5 touch-scroll">
          <nav className="space-y-4">
            <Link
              to="/shop?filter=new"
              onClick={onClose}
              className="flex items-center justify-between text-xs uppercase tracking-super-wide font-medium text-brand-black hover:text-neutral-500 py-1.5"
            >
              <span>New In</span>
              <span className="text-[9px] bg-brand-black text-white px-2 py-0.5 font-mono">NEW</span>
            </Link>

            <Link
              to="/category/abayas"
              onClick={onClose}
              className="flex items-center justify-between text-xs uppercase tracking-super-wide font-medium text-brand-black hover:text-neutral-500 py-1.5"
            >
              <span>Abayas</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
            </Link>

            <Link
              to="/category/hijabs"
              onClick={onClose}
              className="flex items-center justify-between text-xs uppercase tracking-super-wide font-medium text-brand-black hover:text-neutral-500 py-1.5"
            >
              <span>Hijabs</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
            </Link>

            <Link
              to="/category/sets"
              onClick={onClose}
              className="flex items-center justify-between text-xs uppercase tracking-super-wide font-medium text-brand-black hover:text-neutral-500 py-1.5"
            >
              <span>Two-Piece Sets</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
            </Link>

            <Link
              to="/category/essentials"
              onClick={onClose}
              className="flex items-center justify-between text-xs uppercase tracking-super-wide font-medium text-brand-black hover:text-neutral-500 py-1.5"
            >
              <span>Modest Essentials</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
            </Link>

            <Link
              to="/category/prayer-wear"
              onClick={onClose}
              className="flex items-center justify-between text-xs uppercase tracking-super-wide font-medium text-brand-black hover:text-neutral-500 py-1.5"
            >
              <span>Prayer Wear</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
            </Link>

            <Link
              to="/shop"
              onClick={onClose}
              className="flex items-center justify-between text-xs uppercase tracking-super-wide font-medium text-brand-black hover:text-neutral-500 py-1.5"
            >
              <span>All Silhouettes (24)</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
            </Link>
          </nav>

          <div className="h-px bg-brand-border my-4" />

          {/* Editorial & Brand Links */}
          <div className="space-y-3.5 text-xs tracking-wider uppercase text-neutral-500">
            <Link
              to="/lookbook"
              onClick={onClose}
              className="block hover:text-black py-1"
            >
              Editorial Lookbook
            </Link>
            <Link
              to="/about"
              onClick={onClose}
              className="block hover:text-black py-1"
            >
              About The Atelier
            </Link>
            <Link
              to="/size-guide"
              onClick={onClose}
              className="block hover:text-black py-1"
            >
              Sizing & Fit Directory
            </Link>
            <Link
              to="/contact"
              onClick={onClose}
              className="block hover:text-black py-1"
            >
              Client Concierge
            </Link>
          </div>
        </div>

        {/* Bottom Actions with iOS Home Indicator safe area */}
        <div className="p-5 pb-safe border-t border-brand-border bg-brand-ivory/50 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <Link
              to="/wishlist"
              onClick={onClose}
              className="flex items-center justify-center space-x-1.5 py-3 border border-brand-border text-xs uppercase tracking-widest text-brand-black hover:border-black active:scale-98 transition-transform"
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Wishlist ({totalWishlist})</span>
            </Link>

            <button
              onClick={() => {
                onClose();
                openCart();
              }}
              className="flex items-center justify-center space-x-1.5 py-3 bg-brand-black text-white text-xs uppercase tracking-widest hover:bg-neutral-800 active:scale-98 transition-transform"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Bag ({totalItems})</span>
            </button>
          </div>

          <div className="text-center text-[9px] uppercase tracking-widest text-neutral-400 pt-1">
            PARIS · DUBAI · LONDON
          </div>
        </div>
      </div>
    </div>
  );
};
