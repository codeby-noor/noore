import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, ProductColor, CartItem } from '../types';
import { useNotification } from './NotificationContext';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, color: ProductColor, size: string, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  totalItems: number;
  subtotal: number;
  shippingFee: number;
  freeShippingThreshold: number;
  amountUntilFreeShipping: number;
  hasFreeShipping: boolean;
  promoCode: string;
  discountPercentage: number;
  discountAmount: number;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;
  isGiftWrap: boolean;
  toggleGiftWrap: () => void;
  giftWrapCost: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'noore_luxury_cart_items';
const PROMO_STORAGE_KEY = 'noore_luxury_promo';

const VALID_PROMOS: Record<string, { percent: number; label: string }> = {
  NOORE10: { percent: 10, label: '10% Privileged Welcome Discount' },
  WELCOME15: { percent: 15, label: '15% First Haute Order Discount' },
  ELEGANCE20: { percent: 20, label: '20% VIP Client Invitation' },
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { showToast } = useNotification();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isGiftWrap, setIsGiftWrap] = useState(false);
  const [promoCode, setPromoCode] = useState<string>(() => {
    try {
      return localStorage.getItem(PROMO_STORAGE_KEY) || '';
    } catch {
      return '';
    }
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Failed to parse cart storage', e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to write cart storage', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      if (promoCode) {
        localStorage.setItem(PROMO_STORAGE_KEY, promoCode);
      } else {
        localStorage.removeItem(PROMO_STORAGE_KEY);
      }
    } catch (e) {
      console.error('Failed to write promo storage', e);
    }
  }, [promoCode]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product: Product, color: ProductColor, size: string, quantity = 1) => {
    const cartItemId = `${product.id}-${color.name}-${size}`;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            id: cartItemId,
            product,
            selectedColor: color,
            selectedSize: size,
            quantity
          }
        ];
      }
    });

    showToast({
      title: 'Added to Shopping Bag',
      message: `${product.name} — ${color.name} (${size})`,
      image: product.images[0],
      type: 'bag',
      actionText: 'VIEW BAG',
      onAction: () => setIsCartOpen(true)
    });

    // Also auto open drawer slightly or let user view
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
    setPromoCode('');
    setIsGiftWrap(false);
  };

  const toggleGiftWrap = () => {
    setIsGiftWrap((prev) => !prev);
  };

  const applyPromoCode = (code: string) => {
    const formatted = code.trim().toUpperCase();
    if (VALID_PROMOS[formatted]) {
      setPromoCode(formatted);
      showToast({
        title: 'Privilege Code Applied',
        message: VALID_PROMOS[formatted].label,
        type: 'success'
      });
      return { success: true, message: VALID_PROMOS[formatted].label };
    }
    return { success: false, message: 'Invalid or expired promotional code. Try NOORE10 or WELCOME15.' };
  };

  const removePromoCode = () => {
    setPromoCode('');
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const freeShippingThreshold = 100;
  const hasFreeShipping = subtotal >= freeShippingThreshold || subtotal === 0;
  const amountUntilFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingFee = cart.length === 0 ? 0 : hasFreeShipping ? 0 : 15;

  const discountPercentage = promoCode && VALID_PROMOS[promoCode] ? VALID_PROMOS[promoCode].percent : 0;
  const discountAmount = Math.round((subtotal * discountPercentage) / 100);
  const giftWrapCost = isGiftWrap ? 10 : 0;
  const total = Math.max(0, subtotal - discountAmount + shippingFee + giftWrapCost);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        totalItems,
        subtotal,
        shippingFee,
        freeShippingThreshold,
        amountUntilFreeShipping,
        hasFreeShipping,
        promoCode,
        discountPercentage,
        discountAmount,
        applyPromoCode,
        removePromoCode,
        isGiftWrap,
        toggleGiftWrap,
        giftWrapCost,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

