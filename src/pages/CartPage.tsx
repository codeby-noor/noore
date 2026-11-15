import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight, ShieldCheck, Tag, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { SafeImage } from '../components/ui/SafeImage';
import { Breadcrumb } from '../components/ui/Breadcrumb';

export const CartPage: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    shippingFee,
    freeShippingThreshold,
    amountUntilFreeShipping,
    hasFreeShipping,
    promoCode,
    discountAmount,
    applyPromoCode,
    removePromoCode,
    isGiftWrap,
    toggleGiftWrap,
    giftWrapCost,
    total
  } = useCart();

  const navigate = useNavigate();
  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(null);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromoCode(promoInput);
    setPromoMessage({ text: res.message, isError: !res.success });
    if (res.success) setPromoInput('');
  };

  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  if (cart.length === 0) {
    return (
      <div className="bg-brand-pureWhite min-h-[75vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-sand flex items-center justify-center mb-4 text-brand-black">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-brand-black font-normal mb-2">
          Your Shopping Bag is Empty
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 max-w-md mb-8 leading-relaxed">
          Begin your journey through our curated collection of haute abayas, Medina silk hijabs, and tailored co-ord sets.
        </p>
        <Link
          to="/shop"
          className="px-8 py-4 bg-brand-black text-white text-xs uppercase tracking-super-wide font-medium hover:bg-neutral-800 transition-colors shadow-md"
        >
          EXPLORE THE CATALOGUE
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-brand-pureWhite min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Shopping Bag' }]} />

        <div className="pb-8 pt-4 border-b border-brand-border flex items-baseline justify-between">
          <h1 className="font-serif text-3xl sm:text-4xl text-brand-black font-normal tracking-tight">
            Shopping Bag
          </h1>
          <span className="text-xs uppercase tracking-widest text-neutral-400">
            {cart.length} {cart.length === 1 ? 'Design' : 'Designs'}
          </span>
        </div>

        {/* Free Shipping Progress Alert */}
        <div className="my-6 p-4 bg-brand-sand/60 border border-brand-warmBeige">
          {hasFreeShipping ? (
            <div className="flex items-center space-x-2 text-xs text-emerald-800 font-medium tracking-wide">
              <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
              <span>Complimentary Express Global Shipping Unlocked</span>
            </div>
          ) : (
            <div>
              <p className="text-xs text-neutral-700 tracking-wide mb-1.5">
                Add <strong className="text-brand-black">${amountUntilFreeShipping}</strong> more to your order for Complimentary Express Shipping
              </p>
              <div className="w-full bg-brand-warmBeige h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-brand-black h-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Cart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-20">
          {/* Items List (8 cols) */}
          <div className="lg:col-span-8 divide-y divide-brand-border border-b border-brand-border">
            {cart.map((item) => (
              <div key={item.id} className="py-6 first:pt-0 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                {/* Image */}
                <div className="w-28 sm:w-32 aspect-[3/4] flex-shrink-0 bg-brand-sand overflow-hidden">
                  <Link to={`/product/${item.product.slug}`}>
                    <SafeImage
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-super-wide text-neutral-400">
                          {item.product.categoryName}
                        </span>
                        <Link
                          to={`/product/${item.product.slug}`}
                          className="font-serif text-lg sm:text-xl text-brand-black font-normal hover:underline block mt-0.5"
                        >
                          {item.product.name}
                        </Link>
                      </div>
                      <span className="text-sm sm:text-base font-medium text-brand-black">
                        ${item.product.price * item.quantity}
                      </span>
                    </div>

                    <div className="mt-2 space-y-1 text-xs text-neutral-600">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-neutral-800">Shade:</span>
                        <span
                          className="w-3 h-3 rounded-full border border-black/20"
                          style={{ backgroundColor: item.selectedColor.hex }}
                        />
                        <span>{item.selectedColor.name}</span>
                      </div>
                      <div>
                        <span className="font-medium text-neutral-800">Size:</span> {item.selectedSize}
                      </div>
                    </div>
                  </div>

                  {/* Quantity & Remove */}
                  <div className="flex items-center justify-between pt-4 mt-2">
                    <div className="flex items-center border border-brand-border">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 text-neutral-500 hover:text-black transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-4 text-xs font-medium text-brand-black">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-neutral-500 hover:text-black transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs uppercase tracking-widest text-neutral-400 hover:text-red-600 transition-colors flex items-center space-x-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-6">
              <Link
                to="/shop"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-neutral-600 hover:text-black"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>

          {/* Order Summary Sidebar (4 cols) */}
          <div className="lg:col-span-4 bg-brand-sand/40 border border-brand-border p-6 sm:p-8 space-y-6">
            <h2 className="text-xs uppercase tracking-super-wide font-medium text-brand-black pb-3 border-b border-brand-border">
              Order Summary
            </h2>

            {/* Gift Wrap Toggle */}
            <label className="flex items-start space-x-3 text-xs text-neutral-700 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isGiftWrap}
                onChange={toggleGiftWrap}
                className="mt-0.5 rounded-none border-brand-border text-brand-black focus:ring-brand-black h-4 w-4"
              />
              <span>
                <strong>Atelier Gift Packaging (+$10)</strong>
                <span className="block text-[11px] text-neutral-500 mt-0.5">
                  Includes signature gold-foiled presentation box, tissue wrapping, and hand-written calligraphy card.
                </span>
              </span>
            </label>

            {/* Promo Code Input */}
            <div>
              {promoCode ? (
                <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                  <div className="flex items-center space-x-1.5">
                    <Tag className="w-3.5 h-3.5 text-emerald-700" />
                    <span className="font-semibold uppercase tracking-wider">{promoCode} Applied</span>
                  </div>
                  <button
                    onClick={removePromoCode}
                    className="text-emerald-700 hover:text-emerald-900 underline text-[11px]"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="PROMO CODE (NOORE10)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="flex-1 px-3 py-2.5 text-xs uppercase tracking-wider border border-brand-border focus:border-black focus:outline-none bg-white placeholder:text-neutral-400 placeholder:normal-case"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-brand-black text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}
              {promoMessage && (
                <p className={`text-[11px] mt-1 tracking-wide ${promoMessage.isError ? 'text-red-600' : 'text-emerald-700'}`}>
                  {promoMessage.text}
                </p>
              )}
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-2 text-xs border-t border-brand-border/80 pt-4">
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
                  <span>Atelier Gift Box</span>
                  <span>+${giftWrapCost}</span>
                </div>
              )}

              <div className="flex justify-between text-neutral-600">
                <span>Express Courier Shipping</span>
                <span>{shippingFee === 0 ? <strong className="text-emerald-700 font-semibold">FREE</strong> : `$${shippingFee}`}</span>
              </div>

              <div className="flex justify-between text-base font-semibold text-brand-black pt-3 border-t border-brand-border">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>

            {/* Checkout Action */}
            <button
              onClick={() => navigate('/checkout')}
              className="w-full py-4 bg-brand-black text-white text-xs uppercase tracking-super-wide font-medium flex items-center justify-center space-x-2 hover:bg-neutral-800 transition-colors shadow-lg"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <p className="text-[10px] text-neutral-400 text-center tracking-wide">
              Tax calculated during checkout. Guaranteed safe checkout with 256-bit encryption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

