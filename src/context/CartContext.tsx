'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, Product, Order, OrderCustomer } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  lastOrder: Order | null;
  placeOrder: (customer: OrderCustomer) => Order;
  getOrderById: (orderId: string) => Order | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [lastOrder, setLastOrder] = useState<Order | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('ssr_shop_cart');
      if (stored) {
        setItems(JSON.parse(stored));
      }
      const storedOrder = localStorage.getItem('ssr_shop_last_order');
      if (storedOrder) {
        setLastOrder(JSON.parse(storedOrder));
      }
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('ssr_shop_cart', JSON.stringify(items));
    }
  }, [items, mounted]);

  const addToCart = (product: Product, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 && subtotal < 150 ? 15.0 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const placeOrder = (customer: OrderCustomer): Order => {
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    const order: Order = {
      id: orderId,
      date: new Date().toISOString(),
      items: [...items],
      customer,
      subtotal,
      shipping,
      tax,
      total,
      status: 'Confirmed',
    };

    setLastOrder(order);
    localStorage.setItem('ssr_shop_last_order', JSON.stringify(order));

    // Also persist all orders for historical lookup
    try {
      const orders = JSON.parse(localStorage.getItem('ssr_shop_all_orders') || '{}');
      orders[orderId] = order;
      localStorage.setItem('ssr_shop_all_orders', JSON.stringify(orders));
    } catch {
      // ignore
    }

    clearCart();
    return order;
  };

  const getOrderById = (orderId: string): Order | null => {
    if (lastOrder && lastOrder.id === orderId) return lastOrder;
    try {
      const orders = JSON.parse(localStorage.getItem('ssr_shop_all_orders') || '{}');
      return orders[orderId] || null;
    } catch {
      return null;
    }
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        shipping,
        tax,
        total,
        lastOrder,
        placeOrder,
        getOrderById,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

