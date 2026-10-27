'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { ShoppingCart, Check, Plus, Minus } from 'lucide-react';

interface AddToCartButtonProps {
  product: Product;
  showQuantity?: boolean;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function AddToCartButton({
  product,
  showQuantity = false,
  size = 'md',
  fullWidth = false,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, quantity);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 1800);
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (quantity < product.stockCount) {
      setQuantity(q => q + 1);
    }
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (quantity > 1) {
      setQuantity(q => q - 1);
    }
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3.5 text-base',
  };

  return (
    <div className={`flex flex-col sm:flex-row items-center gap-3 ${fullWidth ? 'w-full' : ''}`}>
      {showQuantity && (
        <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
          <button
            type="button"
            onClick={handleDecrement}
            disabled={quantity <= 1}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-xs disabled:opacity-30 disabled:hover:bg-transparent transition-all"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-10 text-center font-semibold text-sm text-slate-800">
            {quantity}
          </span>
          <button
            type="button"
            onClick={handleIncrement}
            disabled={quantity >= product.stockCount}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-xs disabled:opacity-30 disabled:hover:bg-transparent transition-all"
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={handleAdd}
        disabled={!product.inStock}
        className={`group font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 shadow-sm ${
          fullWidth ? 'w-full' : ''
        } ${sizeClasses[size]} ${
          justAdded
            ? 'bg-emerald-600 text-white shadow-emerald-500/20'
            : product.inStock
            ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-teal-600/20'
            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
        }`}
      >
        {justAdded ? (
          <>
            <Check className="w-4 h-4 animate-in zoom-in-50" />
            <span>Added to Cart!</span>
          </>
        ) : !product.inStock ? (
          <span>Out of Stock</span>
        ) : (
          <>
            <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Add to Cart</span>
          </>
        )}
      </button>
    </div>
  );
}
