'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { ShoppingBag, Check, Plus, Minus } from 'lucide-react';

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
    sm: 'px-3 py-2 text-[11px]',
    md: 'px-5 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 ${fullWidth ? 'w-full' : ''}`}>
      {showQuantity && (
        <div className="flex items-center justify-between border border-white/15 rounded-2xl bg-zinc-900/80 p-1 shrink-0">
          <button
            type="button"
            onClick={handleDecrement}
            disabled={quantity <= 1}
            className="w-8 h-8 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 disabled:opacity-20 disabled:hover:bg-transparent transition-all cursor-pointer"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-10 text-center font-bold text-sm text-white font-mono">
            {quantity}
          </span>
          <button
            type="button"
            onClick={handleIncrement}
            disabled={quantity >= product.stockCount}
            className="w-8 h-8 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 disabled:opacity-20 disabled:hover:bg-transparent transition-all cursor-pointer"
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
        className={`group font-bold uppercase tracking-wider rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-md cursor-pointer whitespace-nowrap ${
          fullWidth
            ? showQuantity
              ? 'flex-1 w-full sm:w-auto'
              : 'w-full'
            : 'shrink-0'
        } ${sizeClasses[size]} ${
          justAdded
            ? 'bg-emerald-400 text-black shadow-[0_0_20px_rgba(52,211,153,0.3)]'
            : product.inStock
            ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]'
            : 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-white/5'
        }`}
      >
        {justAdded ? (
          <>
            <Check className="w-4 h-4 stroke-[3]" />
            <span>Acquired</span>
          </>
        ) : product.inStock ? (
          <>
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Acquire</span>
          </>
        ) : (
          <span>Sold Out</span>
        )}
      </button>
    </div>
  );
}
