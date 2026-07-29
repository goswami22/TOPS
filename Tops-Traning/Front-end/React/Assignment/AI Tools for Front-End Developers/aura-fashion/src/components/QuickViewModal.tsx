import { useState } from 'react';
import { X, Star, ShoppingBag, Check, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { Product, ProductSize, ProductColor } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: ProductSize, color: ProductColor) => void;
  onBuyNow: (product: Product, size: ProductSize, color: ProductColor) => void;
  darkMode: boolean;
}

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
  darkMode
}: QuickViewModalProps) {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState<string>(product.images[0]);
  const [selectedSize, setSelectedSize] = useState<ProductSize>(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background backing tint */}
      <div 
        id="quickview-overlay"
        onClick={onClose} 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
      />

      {/* Frame Container */}
      <div
        id="quickview-card"
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl z-10 grid grid-cols-1 md:grid-cols-2 ${
          darkMode ? 'bg-neutral-900 border border-white/10 text-white' : 'bg-white text-neutral-900'
        }`}
      >
        
        {/* Close command */}
        <button
          id="close-quickview-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full cursor-pointer transition-colors bg-black/10 hover:bg-black/20 text-neutral-600 dark:text-neutral-400 dark:hover:bg-white/10"
        >
          <X size={18} />
        </button>

        {/* Gallery Panel */}
        <div className="p-6 md:p-8 flex flex-col space-y-4 justify-center bg-neutral-50 dark:bg-neutral-950/20">
          <div className="aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-950">
            <img
              src={activeImage}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Thumbnails grid */}
          <div className="flex space-x-2">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                id={`thumb-${idx}`}
                onClick={() => setActiveImage(img)}
                className={`w-16 h-16 rounded-md overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-2 transition-all ${
                  activeImage === img ? 'border-amber-650 scale-95' : 'border-transparent opacity-80'
                }`}
              >
                <img src={img} alt="thumb" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Configurations Details Column */}
        <div className="p-6 md:p-8 flex flex-col justify-between">
          <div>
            {/* Category / Drop line */}
            <span className="text-xs uppercase tracking-widest text-amber-600 font-semibold font-mono">
              AURA / {product.category} COLLECTION
            </span>

            {/* Title Line */}
            <h2 className="mt-2 text-2xl font-serif font-bold tracking-wide">
              {product.name}
            </h2>

            {/* Ratings overview */}
            <div className="mt-2 flex items-center space-x-2">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                    className={i < Math.floor(product.rating) ? "text-amber-500" : "text-neutral-300 dark:text-neutral-700"}
                  />
                ))}
              </div>
              <span className="text-xs font-light text-neutral-400">
                {product.rating} (from {product.reviewsCount} organic reviews)
              </span>
            </div>

            {/* Price line */}
            <div className="mt-4 flex items-baseline space-x-2.5">
              <span className="text-2xl font-bold tracking-tight">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm line-through text-neutral-400">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-4 text-xs font-light leading-relaxed text-neutral-500 dark:text-neutral-400">
              {product.description}
            </p>

            {/* Color variants selector preview */}
            <div className="mt-6">
              <span className="text-xs uppercase tracking-wider font-semibold block mb-2.5">
                Fabric Color: <span className="font-light text-neutral-400">{selectedColor.name}</span>
              </span>
              <div className="flex space-x-3">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    id={`modal-color-${idx}`}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color.hex }}
                    className={`w-7 h-7 rounded-full border-2 transition-transform shadow-xs relative ${
                      selectedColor.name === color.name 
                        ? 'border-amber-600 scale-110' 
                        : 'border-transparent hover:scale-105'
                    }`}
                    title={color.name}
                  >
                    {selectedColor.name === color.name && (
                      <Check size={12} className="absolute inset-0 m-auto text-white drop-shadow-xs" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size variants selector */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2.5">
                <span className="text-xs uppercase tracking-wider font-semibold">
                  Atelier Size: <span className="font-light text-neutral-400">{selectedSize}</span>
                </span>
                <span className="text-[11px] text-neutral-400 italic font-light">
                  Tailored Oversized (Order true size)
                </span>
              </div>
              <div className="flex space-x-2">
                {product.sizes.map((size, idx) => (
                  <button
                    key={idx}
                    id={`modal-size-${size}`}
                    onClick={() => setSelectedSize(size)}
                    className={`w-11 h-11 border rounded-lg text-xs font-medium uppercase tracking-wider flex items-center justify-center transition-all ${
                      selectedSize === size
                        ? 'bg-amber-600 text-white border-amber-655 font-bold shadow-md'
                        : 'bg-transparent text-neutral-650 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Checkout/Add Buttons actions */}
          <div className="mt-8 space-y-3">
            <div className="flex gap-3">
              <button
                id="modal-add-to-cart"
                onClick={handleAdd}
                className={`flex-1 text-xs uppercase tracking-widest py-3.5 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-transform scale-100 active:scale-95 ${
                  added 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-amber-600 hover:bg-amber-700 text-white'
                }`}
              >
                {added ? (
                  <>
                    <Check size={16} />
                    Added to Atelier Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    Add to Cart Bag
                  </>
                )}
              </button>
              <button
                id="modal-buy-now"
                onClick={() => onBuyNow(product, selectedSize, selectedColor)}
                className="flex-1 bg-neutral-900 dark:bg-white dark:text-neutral-900 border text-xs uppercase tracking-widest py-3.5 px-4 rounded-lg font-bold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                Buy Now
              </button>
            </div>

            {/* Guarantees small columns */}
            <div className="grid grid-cols-3 gap-1.5 pt-4 text-[9px] text-neutral-400 uppercase font-mono tracking-wider">
              <div className="flex items-center gap-1">
                <Truck size={12} className="text-amber-600" />
                <span>Express Ship</span>
              </div>
              <div className="flex items-center gap-1">
                <RefreshCw size={12} className="text-amber-600" />
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center gap-1">
                <ShieldCheck size={12} className="text-amber-600" />
                <span>Secure Pay</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
