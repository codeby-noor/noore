export type CategoryType = 'abayas' | 'hijabs' | 'sets' | 'essentials' | 'prayer-wear';

export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  category: CategoryType;
  categoryName: string;
  subcategory: string;
  colors: ProductColor[];
  sizes: string[];
  images: string[];
  description: string;
  fabricDetails: string[];
  careInstructions: string[];
  features: string[];
  modelInfo?: string;
  badge?: 'NEW' | 'BESTSELLER' | 'LIMITED EDITION' | 'EXCLUSIVE' | 'HAUTE COUTURE';
  inStock: boolean;
  rating: number;
  reviewCount: number;
  reviews?: ProductReview[];
  featured?: boolean;
  bestSeller?: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedColor: ProductColor;
  selectedSize: string;
  quantity: number;
}

export interface WishlistItem {
  productId: string;
  product: Product;
  addedAt: string;
}

export interface FilterOptions {
  category: string;
  subcategory: string[];
  colors: string[];
  sizes: string[];
  priceRange: [number, number];
  sortBy: 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'rating';
  inStockOnly: boolean;
}

