import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { Product, ProductSize, ProductColor } from '../types';

interface ProductCardProps {
  key?: string | number;
  product: Product;
  onSelect: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: ProductSize, color: ProductColor) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
  darkMode: boolean;
}

export default function ProductCard({
  product,
  onSelect,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  darkMode
}: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState<ProductSize>(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);

  const handleFastAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedSize, selectedColor);
  };

  return (
    <div
      id={`product-card-${product.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(product)}
      className="group relative flex flex-col cursor-pointer transition-all duration-300 rounded-xl overflow-hidden shadow-xs hover:shadow-md border border-neutral-500/10"
    >
      
      {/* Visual Image container with high ratio */}
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        
        {/* Discount Badge */}
        {product.discountBadge && (
          <span className="absolute top-4 left-4 z-10 bg-black text-white dark:bg-white dark:text-black text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-sm">
            {product.discountBadge}
          </span>
        )}

        {/* New or BestSeller Badge */}
        {product.isNew && !product.discountBadge && (
          <span className="absolute top-4 left-4 z-10 bg-amber-600 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-sm">
            NEW
          </span>
        )}
        {product.isBestSeller && !product.discountBadge && !product.isNew && (
          <span className="absolute top-4 left-4 z-10 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 text-[10px] uppercase font-semibold tracking-widest px-2.5 py-1 rounded-sm">
            CLASSIC / ATELIER
          </span>
        )}

        {/* Favorite Heart trigger */}
        <button
          id={`wishlist-btn-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-4 right-4 z-20 p-2.5 rounded-full shadow-md transition-all duration-300 ${
            isWishlisted 
              ? 'bg-amber-600 text-white' 
              : 'bg-white text-neutral-800 hover:bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700'
          }`}
          aria-label="Add to wishlist"
        >
          <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} className={isWishlisted ? "scale-110" : ""} />
        </button>

        {/* Image Display + Hover swap */}
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Action Tray overlap over image */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 bg-gradient-to-t from-black/50 to-transparent">
          <button
            id={`quick-view-btn-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex-1 bg-white hover:bg-neutral-100 text-neutral-900 text-xs uppercase tracking-widest py-2.5 px-3 rounded-md font-medium flex items-center justify-center gap-1.5 shadow-sm transition-all"
            title="Quick View detailing"
          >
            <Eye size={14} />
            Quick View
          </button>
          <button
            id={`fast-cart-btn-${product.id}`}
            onClick={handleFastAdd}
            className="p-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-md flex items-center justify-center shadow-sm transition-all active:scale-95"
            title="Fast Add to Cart"
          >
            <ShoppingBag size={14} />
          </button>
        </div>
      </div>

      {/* Structured Copy Area */}
      <div className={`p-4 flex-1 flex flex-col justify-between ${darkMode ? 'bg-neutral-950' : 'bg-white'}`}>
        <div>
          {/* Subtitle / Category */}
          <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium font-mono">
            {product.category}
          </span>

          {/* Product Headline Title */}
          <h3 className="mt-1 text-sm font-medium tracking-wide group-hover:text-amber-600 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="mt-1 flex items-center gap-1">
            <div className="flex text-amber-500">
              <Star size={11} fill="currentColor" />
            </div>
            <span className="text-[10px] text-neutral-400 font-light font-mono">
              {product.rating} ({product.reviewsCount})
            </span>
          </div>
        </div>

        {/* Pricing & Custom Variant Previews */}
        <div className="mt-3.5 pt-3.5 border-t border-neutral-500/10 flex items-center justify-between">
          <div className="flex items-baseline space-x-1.5">
            <span className="text-sm font-semibold tracking-wide text-neutral-900 dark:text-white">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs line-through text-neutral-400">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Variant selection triggers */}
          <div className="flex items-center space-x-2">
            {/* Color variants badges */}
            <div className="flex -space-x-1">
              {product.colors.map((col, idx) => (
                <button
                  key={idx}
                  id={`color-${product.id}-${idx}`}
                  style={{ backgroundColor: col.hex }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColor(col);
                  }}
                  className={`w-3.5 h-3.5 rounded-full border border-white dark:border-neutral-900 shadow-xs scale-90 hover:scale-110 transition-transform ${
                    selectedColor.name === col.name ? 'ring-1 ring-amber-500 scale-100' : ''
                  }`}
                  title={col.name}
                  aria-label={`Select color ${col.name}`}
                />
              ))}
            </div>

            {/* Size Selector badges list */}
            <div className="flex space-x-0.5">
              {product.sizes.slice(0, 3).map((sz, idx) => (
                <button
                  key={idx}
                  id={`size-${product.id}-${sz}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSize(sz);
                  }}
                  className={`text-[9px] w-4.5 h-4.5 rounded-sm flex items-center justify-center transition-all ${
                    selectedSize === sz
                      ? 'bg-amber-600 text-white font-medium'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-500 dark:bg-neutral-900 dark:hover:bg-neutral-800'
                  }`}
                  aria-label={`Select size ${sz}`}
                >
                  {sz}
                </button>
              ))}
              {product.sizes.length > 3 && (
                <span className="text-[9px] text-neutral-400 flex items-center px-0.5 font-mono">
                  +
                </span>
              )}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
