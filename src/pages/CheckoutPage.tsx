import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShieldCheck, Lock, CreditCard, ArrowLeft, Check, Sparkles } from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const { cart, subtotal, shippingFee, discountAmount, isGiftWrap, giftWrapCost, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: 'client@noore-atelier.com',
    firstName: 'Amina',
    lastName: 'Al-Mansoor',
    address: '740 Park Avenue, Apt 11B',
    city: 'New York',
    state: 'NY',
    zip: '10021',
    country: 'United States',
    phone: '+1 (555) 019-2834',
    shippingMethod: 'standard',
    paymentMethod: 'card',
    cardNumber: '•••• •••• •••• 8842',
    cardExp: '12/28',
    cardCvc: '•••'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-brand-pureWhite text-center">
        <h2 className="font-serif text-3xl text-brand-black mb-3">No Active Checkout</h2>
        <p className="text-xs text-neutral-500 mb-6">
          Your shopping bag is currently empty.
        </p>
        <Link
          to="/shop"
          className="px-8 py-3 bg-brand-black text-white text-xs uppercase tracking-widest font-medium"
        >
          Return to Boutique
        </Link>
      </div>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const orderNumber = `NOORE-${Math.floor(100000 + Math.random() * 900000)}`;
      const orderDetails = {
        orderNumber,
        items: cart,
        total,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        shippingAddress: `${formData.firstName} ${formData.lastName}, ${formData.address}, ${formData.city}, ${formData.state} ${formData.zip}`,
        email: formData.email
      };
      localStorage.setItem('noore_last_order', JSON.stringify(orderDetails));
      clearCart();
      setIsSubmitting(false);
      navigate('/order-success');
    }, 1200);
  };

  return (
    <div className="bg-brand-sand/30 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Checkout Header */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-brand-border">
          <Link to="/" className="inline-block">
            <span className="font-display text-2xl font-light tracking-super-wide text-brand-black block">
              NOORÉ
            </span>
            <span className="text-[8px] uppercase tracking-super-wide text-neutral-400 font-sans block">
              HAUTE ATELIER CHECKOUT
            </span>
          </Link>

          <div className="flex items-center space-x-2 text-xs text-neutral-500 uppercase tracking-widest">
            <Lock className="w-3.5 h-3.5 text-neutral-600" />
            <span className="hidden sm:inline">256-Bit Encrypted Secure Checkout</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Form (7 cols) */}
          <form onSubmit={handlePlaceOrder} className="lg:col-span-7 space-y-6 sm:space-y-8 bg-white p-4 sm:p-8 border border-brand-border">
            {/* Step 1: Client Contact */}
            <div>
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-brand-border">
                <h3 className="text-xs uppercase tracking-super-wide font-medium text-brand-black">
                  1. Client Contact
                </h3>
                <span className="text-[11px] text-neutral-400">Step 1 of 3</span>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">
                    Email Address (For Order Tracking & Invoicing)
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-brand-border focus:border-black focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">
                    Phone Number (For Delivery SMS Updates)
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-brand-border focus:border-black focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Shipping Destination */}
            <div>
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-brand-border">
                <h3 className="text-xs uppercase tracking-super-wide font-medium text-brand-black">
                  2. Shipping Destination
                </h3>
                <span className="text-[11px] text-neutral-400">Step 2 of 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-brand-border focus:border-black focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-brand-border focus:border-black focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-brand-border focus:border-black focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-brand-border focus:border-black focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">State / Province</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-brand-border focus:border-black focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">ZIP / Postal</label>
                    <input
                      type="text"
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-brand-border focus:border-black focus:outline-none"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">Country</label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-brand-border focus:border-black focus:outline-none bg-white"
                  >
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>United Arab Emirates</option>
                    <option>Saudi Arabia</option>
                    <option>Canada</option>
                    <option>France</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Payment Method (Mockup) */}
            <div>
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-brand-border">
                <h3 className="text-xs uppercase tracking-super-wide font-medium text-brand-black">
                  3. Payment Method
                </h3>
                <span className="text-[11px] text-neutral-400">Step 3 of 3</span>
              </div>

              <div className="space-y-3">
                <div className="p-4 border-2 border-brand-black bg-brand-sand/30 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-5 h-5 text-brand-black" />
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-brand-black block">
                        Credit / Debit Card (VIP Concierge Token)
                      </span>
                      <span className="text-[11px] text-neutral-500 font-mono">
                        Ending in 8842 (Encrypted)
                      </span>
                    </div>
                  </div>
                  <Check className="w-4 h-4 text-brand-black" />
                </div>

                <div className="p-3 border border-brand-border text-xs text-neutral-500 flex items-center justify-between opacity-70">
                  <span>Apple Pay / Google Pay</span>
                  <span className="text-[10px] uppercase tracking-wider bg-neutral-100 px-2 py-0.5">Instant</span>
                </div>

                <div className="p-3 border border-brand-border text-xs text-neutral-500 flex items-center justify-between opacity-70">
                  <span>Klarna: 4 Interest-Free Installments of ${Math.round(total / 4)}</span>
                  <span className="text-[10px] uppercase tracking-wider bg-neutral-100 px-2 py-0.5">Pay in 4</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-brand-black text-white text-xs uppercase tracking-super-wide font-medium hover:bg-neutral-800 transition-colors shadow-xl disabled:opacity-75 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>AUTHENTICATING & ISSUING ORDER...</span>
                ) : (
                  <span>AUTHORIZE & PLACE ORDER (${total})</span>
                )}
              </button>

              <div className="flex items-center justify-center space-x-2 mt-4 text-[11px] text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Risk: Free 30-Day Returns with Complimentary Prepaid Label</span>
              </div>
            </div>
          </form>

          {/* Right Summary (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-brand-border space-y-6">
            <h3 className="text-xs uppercase tracking-super-wide font-medium text-brand-black pb-3 border-b border-brand-border">
              Order Review ({cart.length})
            </h3>

            {/* Items Thumbnails */}
            <div className="divide-y divide-brand-border max-h-80 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.id} className="py-3.5 first:pt-0 flex items-center space-x-3.5">
                  <div className="w-14 h-20 bg-brand-sand overflow-hidden flex-shrink-0 relative">
                    <img src={item.product.images[0]} alt="" className="w-full h-full object-cover" />
                    <span className="absolute bottom-0 right-0 bg-brand-black text-white text-[9px] px-1 font-mono">
                      x{item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0 text-xs">
                    <h4 className="font-serif text-sm text-brand-black line-clamp-1">{item.product.name}</h4>
                    <p className="text-[11px] text-neutral-500">{item.selectedColor.name} · {item.selectedSize.split(' ')[0]}</p>
                    <span className="font-medium text-brand-black mt-1 block">${item.product.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Calculation */}
            <div className="space-y-2 text-xs border-t border-brand-border pt-4">
              <div className="flex justify-between text-neutral-600">
                <span>Subtotal</span>
                <span className="font-medium text-brand-black">${subtotal}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Privilege Discount</span>
                  <span>-${discountAmount}</span>
                </div>
              )}

              {isGiftWrap && (
                <div className="flex justify-between text-neutral-600">
                  <span>Atelier Gift Presentation</span>
                  <span>+${giftWrapCost}</span>
                </div>
              )}

              <div className="flex justify-between text-neutral-600">
                <span>Express Courier Shipping</span>
                <span>{shippingFee === 0 ? <strong className="text-emerald-700 font-semibold">FREE</strong> : `$${shippingFee}`}</span>
              </div>

              <div className="flex justify-between text-base font-semibold text-brand-black pt-3 border-t border-brand-border">
                <span>Final Authorized Amount</span>
                <span>${total}</span>
              </div>
            </div>

            <div className="p-4 bg-brand-sand/60 border border-brand-warmBeige text-[11px] text-neutral-600 space-y-1">
              <span className="font-semibold text-brand-black uppercase tracking-wider block">
                Atelier Client Guarantee
              </span>
              <p className="font-light">
                Dispatched in our signature dust bags from our Dubai and London hubs with live tracking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

