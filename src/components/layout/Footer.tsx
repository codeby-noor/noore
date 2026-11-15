import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setIsSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-brand-charcoal text-white pt-12 sm:pt-16 pb-12 pb-safe border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Newsletter Bar */}
        <div className="pb-14 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-super-wide text-brand-sand/80 block mb-2 font-mono">
              THE NOORÉ GAZETTE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-tight">
              Join Our World
            </h3>
            <p className="text-xs text-neutral-400 mt-2 max-w-sm leading-relaxed">
              Receive exclusive collection previews, invitations to new season drops, and bespoke editorial releases.
            </p>
          </div>

          <div className="lg:col-span-7">
            {isSubscribed ? (
              <div className="p-4 bg-white/5 border border-white/20 flex items-center space-x-3 text-brand-sand text-xs tracking-wider uppercase">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>You are now enrolled in the NOORÉ Haute Circle. Check your inbox for your 10% welcome invitation.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-lg">
                <input
                  type="email"
                  required
                  placeholder="ENTER YOUR EMAIL FOR 10% PRIVILÈGE"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/20 px-4 py-3 text-xs tracking-wider uppercase placeholder:text-neutral-500 placeholder:normal-case text-white focus:outline-none focus:border-brand-sand transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-brand-sand text-brand-black text-xs uppercase tracking-super-wide font-medium hover:bg-white transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>SUBSCRIBE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-xs">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-4 pr-6">
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl font-light tracking-super-wide text-white block">
                NOORÉ
              </span>
              <span className="text-[9px] uppercase tracking-super-wide text-brand-sand/70 block mt-0.5">
                HAUTE MODESTY · PARIS · DUBAI
              </span>
            </Link>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Redefining contemporary modesty through architectural drape, European washed linens, and Japanese crepe. Created for women who celebrate quiet luxury and timeless grace.
            </p>
            <div className="pt-2 flex items-center space-x-5 text-neutral-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center space-x-1.5"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-[11px] tracking-widest uppercase">Instagram</span>
              </a>

              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center space-x-1.5"
                aria-label="Pinterest"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.63-.13-1.6.03-2.29l1-4.22s-.25-.51-.25-1.27c0-1.19.69-2.08 1.55-2.08.73 0 1.08.55 1.08 1.21 0 .74-.47 1.84-.71 2.87-.2.86.43 1.56 1.28 1.56 1.54 0 2.72-1.62 2.72-3.96 0-2.07-1.49-3.52-3.62-3.52-2.47 0-3.92 1.85-3.92 3.76 0 .75.29 1.54.65 1.98.07.09.08.17.06.26l-.25 1.01c-.04.16-.13.2-.3.12-1.12-.52-1.82-2.15-1.82-3.46 0-2.82 2.05-5.41 5.91-5.41 3.1 0 5.51 2.21 5.51 5.16 0 3.08-1.94 5.56-4.64 5.56-.91 0-1.76-.47-2.05-1.03l-.56 2.13c-.2.78-.75 1.76-1.12 2.36A12 12 0 1 0 12 0z"/>
                </svg>
                <span className="text-[11px] tracking-widest uppercase">Pinterest</span>
              </a>
            </div>
          </div>

          {/* Col 1: Shop */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-super-wide text-brand-sand font-medium">
              Shop
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <Link to="/category/abayas" className="hover:text-white transition-colors">
                  Abayas
                </Link>
              </li>
              <li>
                <Link to="/category/hijabs" className="hover:text-white transition-colors">
                  Hijabs
                </Link>
              </li>
              <li>
                <Link to="/category/sets" className="hover:text-white transition-colors">
                  Modest Dresses & Sets
                </Link>
              </li>
              <li>
                <Link to="/shop?filter=new" className="hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/shop?filter=bestsellers" className="hover:text-white transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">
                  All Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Customer Care */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-super-wide text-brand-sand font-medium">
              Customer Care
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="hover:text-white transition-colors">
                  Size & Height Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: About NOORÉ */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-super-wide text-brand-sand font-medium">
              About NOORÉ
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link to="/lookbook" className="hover:text-white transition-colors">
                  Autumn Campaign
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Ethical Sourcing
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Sustainability Pledge
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Region Selection */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div className="flex items-center space-x-2">
            <Globe className="w-3.5 h-3.5 text-neutral-400" />
            <span>GLOBAL SHIPPING · UNITED STATES (USD $)</span>
          </div>

          <div className="text-center md:text-right">
            <span>© {new Date().getFullYear()} NOORÉ HAUTE MODESTY. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
