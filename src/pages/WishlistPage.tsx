import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { SafeImage } from '../components/ui/SafeImage';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';

export const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToBag = (productId: string) => {
    const item = wishlist.find((w) => w.productId === productId);
    if (item) {
      // Add first color & first size to bag
      addToCart(item.product, item.product.colors[0], item.product.sizes[0], 1);
      removeFromWishlist(productId);
    }
  };

  if (wishlist.length === 0) {
    const featuredRecommendations = PRODUCTS.filter((p) => p.featured || p.bestSeller).slice(0, 4);

    return (
      <div className="bg-brand-pureWhite min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Wishlist' }]} />

          <div className="text-center py-16 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-brand-sand flex items-center justify-center mx-auto mb-4 text-neutral-400">
              <Heart className="w-7 h-7" />
            </div>
            <h2 className="font-serif text-3xl text-brand-black font-normal mb-2">
              Your Curation is Empty
            </h2>
            <p className="text-xs text-neutral-500 mb-8 leading-relaxed">
              Save your favorite silhouettes, delicate Medina hijabs, and tailoring staples as you browse our collections.
            </p>
            <Link
              to="/shop"
              className="px-8 py-3.5 bg-brand-black text-white text-xs uppercase tracking-super-wide font-medium hover:bg-neutral-800 transition-colors inline-block"
            >
              EXPLORE COLLECTION
            </Link>
          </div>

          {/* Curated Recommendations for Empty State */}
          <div className="pt-12 border-t border-brand-border">
            <div className="text-center mb-8">
              <span className="text-[10px] uppercase tracking-super-wide text-neutral-400 block mb-1">
                INSPIRATION
              </span>
              <h3 className="font-serif text-2xl text-brand-black font-normal">
                Curated Recommendations
              </h3>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {featuredRecommendations.map((product) => (
                <ProductCard key={product.id} product={product} aspectRatio="fashion" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-pureWhite min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Wishlist' }]} />

        <div className="py-6 border-b border-brand-border flex items-baseline justify-between">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl text-brand-black font-normal tracking-tight">
              Personal Curation
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              {wishlist.length} {wishlist.length === 1 ? 'silhouette' : 'silhouettes'} saved
            </p>
          </div>
          <button
            onClick={clearWishlist}
            className="text-xs uppercase tracking-widest text-neutral-400 hover:text-black underline"
          >
            Clear Curation
          </button>
        </div>

        {/* Wishlist Grid */}
        <div className="py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {wishlist.map(({ product }) => (
            <div key={product.id} className="group relative flex flex-col bg-brand-pureWhite border border-brand-border/60">
              {/* Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-sand">
                <Link to={`/product/${product.slug}`} className="block w-full h-full">
                  <SafeImage
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover sm:group-hover:scale-105 transition-transform duration-700"
                  />
                </Link>

                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white/90 text-neutral-500 hover:text-red-600 rounded-full transition-colors z-10"
                  title="Remove from wishlist"
                  aria-label="Remove"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Details */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-super-wide text-neutral-400 block mb-0.5">
                    {product.categoryName}
                  </span>
                  <Link
                    to={`/product/${product.slug}`}
                    className="font-serif text-base text-brand-black font-normal hover:underline line-clamp-1"
                  >
                    {product.name}
                  </Link>
                  <span className="text-xs font-medium text-brand-black block mt-1">
                    ${product.price}
                  </span>
                </div>

                <div className="pt-4 space-y-2">
                  <button
                    onClick={() => handleMoveToBag(product.id)}
                    className="w-full py-2.5 bg-brand-black text-white text-xs uppercase tracking-widest font-medium flex items-center justify-center space-x-1.5 hover:bg-neutral-800 transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Move to Bag</span>
                  </button>

                  <Link
                    to={`/product/${product.slug}`}
                    className="w-full py-2 border border-brand-border text-neutral-700 text-[11px] uppercase tracking-widest font-medium text-center block hover:border-black transition-colors"
                  >
                    Select Size & Shades
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

