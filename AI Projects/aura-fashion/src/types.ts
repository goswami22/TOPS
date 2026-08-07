export type ProductCategory = 'all' | 'clothing' | 'streetwear' | 'outerwear' | 'basics' | 'accessories';

export type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  rating: number;
  reviewsCount: number;
  images: string[]; // Minimum 2 for hover image swap
  sizes: ProductSize[];
  colors: ProductColor[];
  description: string;
  details: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  isTrending?: boolean;
  discountBadge?: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface CartItem {
  id: string; // unique combination of product ID + size + color
  product: Product;
  selectedSize: ProductSize;
  selectedColor: ProductColor;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}
