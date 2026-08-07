export type OrderStatus = 'pending' | 'accepted' | 'preparing' | 'cooking' | 'packed' | 'out_for_delivery' | 'delivered' | 'cancelled' | 'rejected';

export type UserRole = 'guest' | 'customer' | 'staff' | 'manager' | 'admin' | 'superadmin';

export type PageView =
  | 'home'
  | 'menu'
  | 'food-detail'
  | 'categories'
  | 'cart'
  | 'checkout'
  | 'order-tracking'
  | 'wishlist'
  | 'offers'
  | 'about'
  | 'contact'
  | 'locations'
  | 'reservation'
  | 'login'
  | 'dashboard'
  | 'admin';

export interface UserAddress {
  id: string;
  type: 'Home' | 'Office' | 'Other';
  label: string;
  address: string;
  city: string;
  isDefault: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  role: UserRole;
  membershipTier: 'Gourmet Club' | 'Silver Epicure' | 'Gold Connoisseur' | 'Black Diamond VIP';
  loyaltyPoints: number;
  walletBalance: number;
  savedAddresses: UserAddress[];
  createdAt: string;
  status: 'Active' | 'Blocked';
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
  image: string;
  description: string;
  itemCount: number;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
}

export interface FoodItem {
  id: string;
  name: string;
  category: string;
  price: number;
  discountPrice?: number;
  rating: number;
  reviewCount: number;
  calories: number;
  prepTime: string;
  spiceLevel: 0 | 1 | 2 | 3; // 0 = Mild, 1 = Low, 2 = Medium, 3 = Spicy
  isVeg: boolean;
  isBestseller?: boolean;
  isChefsSpecial?: boolean;
  inStock?: boolean;
  image: string;
  description: string;
  ingredients: string[];
  allergens: string[];
  nutrition: {
    protein: string;
    carbs: string;
    fat: string;
  };
  addOns: AddOn[];
}

export interface ComboMeal {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  itemsIncluded: string[];
  servingSize: string;
  badge?: string;
}

export interface Offer {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  discountPercentage?: number;
  discountFixed?: number;
  maxDiscount?: number;
  minOrder?: number;
  validTill: string;
  bgGradient: string;
  image: string;
}

export interface CartItem {
  id: string; // Unique instance ID
  foodItem: FoodItem;
  quantity: number;
  selectedAddOns: AddOn[];
  spiceChoice: 0 | 1 | 2 | 3;
  customNotes?: string;
  itemTotal: number;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  neighborhood: string;
  distance: string;
  phone: string;
  openHours: string;
  dineInStatus: 'Open' | 'Busy' | 'Full';
  deliveryAvailable: boolean;
  rating: number;
  image: string;
  managerName?: string;
}

export interface Order {
  id: string;
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  items: CartItem[];
  subtotal: number;
  discountAmount: number;
  deliveryFee: number;
  tax: number;
  tipAmount: number;
  totalAmount: number;
  status: OrderStatus;
  orderType: 'delivery' | 'pickup' | 'dinein';
  deliveryAddress: string;
  paymentMethod: string;
  estimatedArrivalMinutes: number;
  createdAt: string;
  driverName?: string;
  driverPhone?: string;
  driverPhoto?: string;
  driverVehicle?: string;
  branch?: string;
}

export interface Reservation {
  id: string;
  branchName: string;
  date: string;
  time: string;
  guests: number;
  seatingZone: string;
  specialOccasion?: string;
  fullName: string;
  email: string;
  phone: string;
  specialRequests?: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  confirmationCode: string;
}

export interface Review {
  id: string;
  customerName: string;
  customerPhoto: string;
  rating: number;
  date: string;
  comment: string;
  dishName: string;
  verifiedOrder: boolean;
  status?: 'approved' | 'hidden' | 'reported';
}

export interface StaffMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  branch: string;
  shift: string;
  status: 'Active' | 'On Leave' | 'Inactive';
  avatar: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  stockQty: number;
  unit: string;
  minThreshold: number;
  supplier: string;
  costPerUnit: number;
  lastRestocked: string;
  status: 'Optimal' | 'Low Stock' | 'Out of Stock';
}

export interface RestaurantSettings {
  name: string;
  tagline: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  taxRate: number;
  deliveryFeeBase: number;
  minOrderForFreeDelivery: number;
  operatingHours: string;
  paymentGateways: {
    stripe: boolean;
    paypal: boolean;
    cashOnDelivery: boolean;
    applePay: boolean;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    twitter: string;
  };
  apiKeySet: boolean;
}

