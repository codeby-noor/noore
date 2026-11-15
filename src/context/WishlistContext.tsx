import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, WishlistItem, ProductColor } from '../types';
import { useNotification } from './NotificationContext';
import { useCart } from './CartContext';

interface WishlistContextType {
  wishlist: WishlistItem[];
  isInWishlist: (productId: string) => boolean;
  toggleWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  moveToCart: (productId: string, color: ProductColor, size: string) => void;
  clearWishlist: () => void;
  totalWishlist: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const WISHLIST_STORAGE_KEY = 'noore_luxury_wishlist_items';

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { showToast } = useNotification();
  const { addToCart } = useCart();

  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    try {
      const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Failed to parse wishlist storage', e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to write wishlist storage', e);
    }
  }, [wishlist]);

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.productId === productId);
  };

  const toggleWishlist = (product: Product) => {
    if (isInWishlist(product.id)) {
      setWishlist((prev) => prev.filter((item) => item.productId !== product.id));
      showToast({
        title: 'Removed from Wishlist',
        message: `${product.name} was removed from your curated list.`,
        type: 'info'
      });
    } else {
      const newItem: WishlistItem = {
        productId: product.id,
        product,
        addedAt: new Date().toISOString()
      };
      setWishlist((prev) => [newItem, ...prev]);
      showToast({
        title: 'Added to Wishlist',
        message: `${product.name} saved to your personal curation.`,
        image: product.images[0],
        type: 'success'
      });
    }
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((item) => item.productId !== productId));
  };

  const moveToCart = (productId: string, color: ProductColor, size: string) => {
    const item = wishlist.find((i) => i.productId === productId);
    if (item) {
      addToCart(item.product, color, size, 1);
      removeFromWishlist(productId);
    }
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        isInWishlist,
        toggleWishlist,
        removeFromWishlist,
        moveToCart,
        clearWishlist,
        totalWishlist: wishlist.length
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

