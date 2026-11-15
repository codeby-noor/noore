import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, User, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { MobileMenu } from './MobileMenu';
import { SearchModal } from '../ui/SearchModal';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);

  const { totalItems, openCart } = useCart();
  const { totalWishlist } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-pureWhite/95 backdrop-blur-md border-b border-brand-border py-2.5 sm:py-3 shadow-xs'
            : 'bg-brand-pureWhite border-b border-brand-border/60 py-3 sm:py-4 lg:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Nav (Desktop) / Hamburger (Mobile) */}
            <div className="flex items-center w-1/4 lg:w-1/3">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 -ml-2 text-neutral-800 hover:text-black transition-colors focus:outline-none"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[11px] uppercase tracking-super-wide font-medium text-neutral-700">
                <Link
                  to="/shop"
                  className={`hover:text-brand-black transition-colors relative py-1 ${
                    location.pathname === '/shop' ? 'text-brand-black font-semibold' : ''
                  }`}
                >
                  Shop
                </Link>
                <Link
                  to="/shop?filter=new"
                  className="hover:text-brand-black transition-colors relative py-1"
                >
                  New In
                </Link>
                <Link
                  to="/category/abayas"
                  className={`hover:text-brand-black transition-colors relative py-1 ${
                    location.pathname === '/category/abayas' ? 'text-brand-black font-semibold' : ''
                  }`}
                >
                  Abayas
                </Link>
                <Link
                  to="/category/hijabs"
                  className={`hover:text-brand-black transition-colors relative py-1 ${
                    location.pathname === '/category/hijabs' ? 'text-brand-black font-semibold' : ''
                  }`}
                >
                  Hijabs
                </Link>
                <Link
                  to="/category/essentials"
                  className={`hover:text-brand-black transition-colors relative py-1 ${
                    location.pathname === '/category/essentials' ? 'text-brand-black font-semibold' : ''
                  }`}
                >
                  Essentials
                </Link>
              </nav>
            </div>

            {/* Center: Brand Logo */}
            <div className="flex-1 w-1/2 lg:w-1/3 text-center">
              <Link to="/" className="inline-block group py-0.5">
                <h1 className="font-display text-xl sm:text-2xl lg:text-[30px] font-normal tracking-super-wide text-brand-black group-hover:opacity-85 transition-opacity whitespace-nowrap">
                  NOORÉ
                </h1>
                <span className="block text-[7px] sm:text-[8px] uppercase tracking-super-wide text-neutral-400 font-sans mt-0.5">
                  HAUTE MODESTY
                </span>
              </Link>
            </div>

            {/* Right: Actions (Search, Account, Wishlist, Bag) */}
            <div className="flex items-center justify-end space-x-1 sm:space-x-4 lg:w-1/3 w-1/4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-neutral-700 hover:text-black transition-colors focus:outline-none"
                title="Search collection"
                aria-label="Search"
              >
                <Search className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </button>

              {/* Account (hidden on extra small) */}
              <button
                onClick={() => setIsAccountModalOpen(true)}
                className="hidden md:block p-2 text-neutral-700 hover:text-black transition-colors focus:outline-none"
                title="VIP Client Account"
                aria-label="Account"
              >
                <User className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </button>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                className="p-2 text-neutral-700 hover:text-black transition-colors relative focus:outline-none"
                title="Curated Wishlist"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                {totalWishlist > 0 && (
                  <span className="absolute top-1 right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-brand-black text-white text-[8px] sm:text-[9px] font-medium flex items-center justify-center">
                    {totalWishlist}
                  </span>
                )}
              </Link>

              {/* Shopping Bag */}
              <button
                onClick={openCart}
                className="p-2 text-neutral-700 hover:text-black transition-colors relative flex items-center focus:outline-none"
                title="Shopping Bag"
                aria-label="Shopping bag"
              >
                <ShoppingBag className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                {totalItems > 0 && (
                  <span className="absolute top-1 right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-brand-black text-white text-[8px] sm:text-[9px] font-medium flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Account Modal */}
      {isAccountModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-brand-pureWhite max-w-sm w-full p-6 shadow-2xl border border-brand-border text-center animate-fadeIn relative">
            <button
              onClick={() => setIsAccountModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-black text-xs uppercase"
            >
              ✕
            </button>
            <div className="w-12 h-12 bg-brand-sand rounded-full mx-auto flex items-center justify-center mb-3 text-brand-black">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl text-brand-black mb-1">NOORÉ Client Privilège</h3>
            <p className="text-xs text-neutral-500 mb-5 leading-relaxed">
              Sign in to manage bespoke measurements, private trunk show invitations, and saved curation.
            </p>
            <div className="space-y-2">
              <button
                onClick={() => {
                  alert('VIP Client Portal: Authenticated as Private Member #NOORE-VIP-092');
                  setIsAccountModalOpen(false);
                }}
                className="w-full py-3 bg-brand-black text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors"
              >
                Sign In With Passkey / Email
              </button>
              <button
                onClick={() => setIsAccountModalOpen(false)}
                className="w-full py-2.5 border border-brand-border text-xs uppercase tracking-widest text-neutral-600 hover:border-black hover:text-black transition-colors"
              >
                Continue As Guest
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
