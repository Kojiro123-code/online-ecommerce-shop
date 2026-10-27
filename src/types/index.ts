export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: 'Audio' | 'Wearables' | 'Workspace' | 'Photography' | 'Accessories';
  image: string;
  description: string;
  features: string[];
  specs: {
    [key: string]: string;
  };
  inStock: boolean;
  stockCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderCustomer {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  paymentMethod: 'credit_card' | 'bank_transfer' | 'cod';
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  customer: OrderCustomer;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: 'Confirmed' | 'Processing' | 'Shipped' | 'Delivered';
}
