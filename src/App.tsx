import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NotificationProvider } from './context/NotificationContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/ui/CartDrawer';
import { ToastContainer } from './components/ui/Toast';

// Critical Homepage loaded eagerly for highest LCP performance
import { HomePage } from './pages/HomePage';

// Lazy load secondary route pages for code splitting & minimal bundle size
const ShopPage = lazy(() => import('./pages/ShopPage').then(m => ({ default: m.ShopPage })));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage').then(m => ({ default: m.ProductDetailPage })));
const CartPage = lazy(() => import('./pages/CartPage').then(m => ({ default: m.CartPage })));
const WishlistPage = lazy(() => import('./pages/WishlistPage').then(m => ({ default: m.WishlistPage })));
const SearchPage = lazy(() => import('./pages/SearchPage').then(m => ({ default: m.SearchPage })));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage').then(m => ({ default: m.CheckoutPage })));
const OrderSuccessPage = lazy(() => import('./pages/OrderSuccessPage').then(m => ({ default: m.OrderSuccessPage })));
const LookbookPage = lazy(() => import('./pages/LookbookPage').then(m => ({ default: m.LookbookPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const SizeGuidePage = lazy(() => import('./pages/SizeGuidePage').then(m => ({ default: m.SizeGuidePage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

const PageLoader: React.FC = () => (
  <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-3">
    <div className="w-8 h-8 rounded-full border border-brand-border border-t-brand-black animate-spin" />
    <span className="text-[10px] uppercase tracking-super-wide text-neutral-400 font-mono">
      NOORÉ ATELIER
    </span>
  </div>
);

export const App: React.FC = () => {
  return (
    <NotificationProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <div className="min-h-screen flex flex-col bg-brand-pureWhite text-brand-black selection:bg-brand-black selection:text-white font-sans antialiased overflow-x-hidden">
              {/* Top Announcement & Navigation */}
              <AnnouncementBar />
              <Header />

              {/* Main Routed Content */}
              <main className="flex-1 w-full overflow-x-hidden">
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/category/:categorySlug" element={<ShopPage />} />
                    <Route path="/product/:slug" element={<ProductDetailPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/order-success" element={<OrderSuccessPage />} />
                    <Route path="/lookbook" element={<LookbookPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/size-guide" element={<SizeGuidePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </Suspense>
              </main>

              {/* Global Overlays & Footer */}
              <Footer />
              <CartDrawer />
              <ToastContainer />
            </div>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </NotificationProvider>
  );
};

export default App;
