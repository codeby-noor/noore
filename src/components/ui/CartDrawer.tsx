import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Minus, Plus, Trash2, ArrowRight, ShoppingBag, ShieldCheck, Tag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { SafeImage } from './SafeImage';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    totalItems,
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

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromoCode(promoInput);
    setPromoMessage({ text: res.message, isError: !res.success });
    if (res.success) {
      setPromoInput('');
    }
  };

  const handleProceedToCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <div
      data-testid="cart-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Bag Drawer"
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-brand-pureWhite shadow-2xl flex flex-col justify-between animate-slideInRight border-l border-brand-border">
          {/* Header */}
          <div className="p-5 border-b border-brand-border flex items-center justify-between bg-brand-ivory/50">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-4 h-4 text-brand-black" />
              <h2 className="text-xs uppercase tracking-super-wide font-medium text-brand-black">
                Shopping Bag ({totalItems})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-neutral-400 hover:text-black transition-colors"
              aria-label="Close bag drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Shipping Threshold Bar */}
          <div className="px-5 py-3.5 bg-brand-sand/60 border-b border-brand-warmBeige">
            {hasFreeShipping ? (
              <div className="flex items-center space-x-2 text-[11px] text-emerald-800 font-medium tracking-wide">
                <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>You have unlocked <strong>Complimentary Express Shipping</strong></span>
              </div>
            ) : (
              <div>
                <p className="text-[11px] text-neutral-700 tracking-wide mb-1.5">
                  Add <strong className="text-brand-black">${amountUntilFreeShipping}</strong> more for Complimentary Shipping
                </p>
                <div className="w-full bg-brand-warmBeige h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-brand-black h-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Bag Items Content */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-brand-border touch-scroll">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                <div className="w-16 h-16 rounded-full bg-brand-sand flex items-center justify-center mb-4 text-neutral-400">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-brand-black font-normal mb-1">
                  Your Bag is Empty
                </h3>
                <p className="text-xs text-neutral-500 max-w-xs mb-6">
                  Explore our curated seasonal collection of haute abayas, fluid sets, and Medina silk hijabs.
                </p>
                <button
                  onClick={() => {
                    closeCart();
                    navigate('/shop');
                  }}
                  className="px-6 py-3 bg-brand-black text-white text-xs uppercase tracking-super-wide font-medium hover:bg-neutral-800 transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="pt-4 first:pt-0 flex space-x-4">
                    {/* Item Image */}
                    <div className="w-20 h-28 flex-shrink-0 bg-brand-sand overflow-hidden relative">
                      <Link to={`/product/${item.product.slug}`} onClick={closeCart}>
                        <SafeImage
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <Link
                            to={`/product/${item.product.slug}`}
                            onClick={closeCart}
                            className="font-serif text-sm text-brand-black font-normal hover:underline line-clamp-1"
                          >
                            {item.product.name}
                          </Link>
                          <span className="text-xs font-medium text-brand-black flex-shrink-0">
                            ${item.product.price * item.quantity}
                          </span>
                        </div>

                        <div className="mt-1 space-y-0.5 text-[11px] text-neutral-500">
                          <div className="flex items-center space-x-1.5">
                            <span
                              className="w-2.5 h-2.5 rounded-full inline-block border border-black/20"
                              style={{ backgroundColor: item.selectedColor.hex }}
                            />
                            <span>{item.selectedColor.name}</span>
                          </div>
                          <div>Size: <span className="text-neutral-700">{item.selectedSize.split(' ')[0]}</span></div>
                        </div>
                      </div>

                      {/* Quantity Stepper & Remove */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-brand-border">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-neutral-500 hover:text-black transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-medium text-brand-black">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-neutral-500 hover:text-black transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-neutral-400 hover:text-red-600 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Breakdown & Checkout */}
          {cart.length > 0 && (
            <div className="p-5 pb-safe border-t border-brand-border bg-brand-ivory/40 space-y-4">
              {/* Gift Wrap Toggle */}
              <label className="flex items-center space-x-2.5 text-xs text-neutral-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isGiftWrap}
                  onChange={toggleGiftWrap}
                  className="rounded-none border-brand-border text-brand-black focus:ring-brand-black h-3.5 w-3.5"
                />
                <span>Include Atelier Luxury Gift Box & Ribbon (+$10)</span>
              </label>

              {/* Promo Code Input */}
              <div>
                {promoCode ? (
                  <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
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
                      placeholder="PROMO CODE (e.g. NOORE10)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs uppercase tracking-wider border border-brand-border focus:border-black focus:outline-none bg-white placeholder:text-neutral-400 placeholder:normal-case"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-neutral-900 text-white text-xs uppercase tracking-widest font-medium hover:bg-black transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {promoMessage && (
                  <p className={`text-[10px] mt-1 tracking-wide ${promoMessage.isError ? 'text-red-600' : 'text-emerald-700'}`}>
                    {promoMessage.text}
                  </p>
                )}
              </div>

              {/* Price Details */}
              <div className="space-y-1.5 text-xs border-t border-brand-border/60 pt-3">
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
                  <span>Express Global Shipping</span>
                  <span>{shippingFee === 0 ? <strong className="text-emerald-700 font-semibold">FREE</strong> : `$${shippingFee}`}</span>
                </div>

                <div className="flex justify-between text-sm font-semibold text-brand-black pt-2 border-t border-brand-border">
                  <span>Estimated Total</span>
                  <span className="text-base">${total}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={handleProceedToCheckout}
                  className="w-full py-4 bg-brand-black text-white text-xs uppercase tracking-super-wide font-medium flex items-center justify-center space-x-2 hover:bg-neutral-800 transition-colors shadow-lg"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex justify-between items-center pt-1 text-[11px] text-neutral-500">
                  <Link
                    to="/cart"
                    onClick={closeCart}
                    className="underline underline-offset-4 hover:text-black transition-colors"
                  >
                    View Full Shopping Bag
                  </Link>
                  <button
                    onClick={closeCart}
                    className="hover:text-black transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

