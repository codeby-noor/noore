import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, Package, Sparkles, ArrowRight, Download, Mail } from 'lucide-react';

interface OrderSummary {
  orderNumber: string;
  total: number;
  date: string;
  shippingAddress: string;
  email: string;
  items: Array<{
    id: string;
    product: { name: string; price: number; images: string[] };
    quantity: number;
    selectedColor: { name: string };
    selectedSize: string;
  }>;
}

export const OrderSuccessPage: React.FC = () => {
  const [order, setOrder] = useState<OrderSummary | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      const stored = localStorage.getItem('noore_last_order');
      if (stored) {
        setOrder(JSON.parse(stored));
      } else {
        // Fallback demo order
        setOrder({
          orderNumber: 'NOORE-842910',
          total: 395,
          date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          shippingAddress: 'Amina Al-Mansoor, 740 Park Avenue, Apt 11B, New York, NY 10021',
          email: 'client@noore-atelier.com',
          items: []
        });
      }
    } catch {
      navigate('/');
    }
  }, [navigate]);

  if (!order) return null;

  return (
    <div className="bg-brand-sand/30 min-h-screen py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="bg-brand-pureWhite p-8 sm:p-12 shadow-xl border border-brand-border text-center animate-fadeIn">
          {/* Success Icon */}
          <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 border border-emerald-100">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-[10px] uppercase tracking-super-wide text-neutral-400 block mb-2 font-mono">
            ORDER CONFIRMED · ATELIER DISPATCH
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl text-brand-black font-normal tracking-tight mb-3">
            Thank you for your order.
          </h1>

          <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-md mx-auto mb-6 leading-relaxed">
            Your bespoke order has been registered in our Dubai atelier. A confirmation notice and tracking details have been sent to{' '}
            <strong className="text-brand-black">{order.email}</strong>.
          </p>

          {/* Order Details Card */}
          <div className="p-5 bg-brand-sand/60 border border-brand-warmBeige text-left text-xs space-y-3 mb-8">
            <div className="flex justify-between pb-2 border-b border-brand-border">
              <span className="text-neutral-500 uppercase tracking-wider">Order Reference:</span>
              <span className="font-mono font-semibold text-brand-black">{order.orderNumber}</span>
            </div>

            <div className="flex justify-between pb-2 border-b border-brand-border">
              <span className="text-neutral-500 uppercase tracking-wider">Date Placed:</span>
              <span className="text-brand-black">{order.date}</span>
            </div>

            <div className="flex justify-between pb-2 border-b border-brand-border">
              <span className="text-neutral-500 uppercase tracking-wider">Total Authorized:</span>
              <span className="font-semibold text-brand-black">${order.total}</span>
            </div>

            <div className="flex justify-between pb-2 border-b border-brand-border">
              <span className="text-neutral-500 uppercase tracking-wider">Estimated Delivery:</span>
              <span className="text-emerald-800 font-medium">3–5 Business Days (Express Courier)</span>
            </div>

            <div>
              <span className="text-neutral-500 uppercase tracking-wider block mb-1">Destination Address:</span>
              <span className="text-brand-black font-light leading-relaxed">{order.shippingAddress}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/shop"
              className="px-8 py-4 bg-brand-black text-white text-xs uppercase tracking-super-wide font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center space-x-2"
            >
              <span>CONTINUE EXPLORING</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => alert(`Official Receipt for ${order.orderNumber} sent to ${order.email}`)}
              className="px-6 py-4 border border-brand-border text-xs uppercase tracking-widest text-neutral-700 hover:border-black hover:text-black transition-colors flex items-center justify-center space-x-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Digital Receipt</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

