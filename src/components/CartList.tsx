'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import ProductImage from './ProductImage';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export default function CartList() {
  const { items, updateQuantity, removeFromCart, clearCart, subtotal, shipping, tax, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-zinc-900/50 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-16 text-center max-w-xl mx-auto shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-amber-400/10 text-amber-400 border border-amber-400/20 flex items-center justify-center mx-auto mb-5 shadow-[0_0_25px_rgba(245,158,11,0.15)]">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Your Private Cart is Empty</h2>
        <p className="text-xs text-zinc-400 mb-8 font-light leading-relaxed">
          You have not reserved any pieces from the archive yet. Explore our curated permanent collection of haute technology.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold uppercase tracking-wider text-xs shadow-md transition-all"
        >
          <span>Explore Permanent Archive</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const freeShippingThreshold = 150;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Cart Items List */}
      <div className="lg:col-span-8 space-y-5">
        {/* Free shipping progress bar */}
        <div className="bg-zinc-900/60 backdrop-blur-md p-5 rounded-3xl border border-white/10 shadow-lg">
          <div className="flex items-center justify-between text-xs font-medium text-zinc-300 mb-2.5">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-amber-400" />
              {amountToFreeShipping === 0 ? (
                <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px]">
                  Complimentary White-Glove Courier Unlocked
                </span>
              ) : (
                <span>
                  Add <span className="font-bold text-amber-400 font-mono">${amountToFreeShipping.toFixed(2)}</span> more to unlock <strong>Complimentary White-Glove Courier</strong>
                </span>
              )}
            </div>
            <span className="text-[11px] font-mono text-zinc-500">
              {Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100))}%
            </span>
          </div>
          <div className="w-full bg-zinc-950 rounded-full h-2 overflow-hidden border border-white/5">
            <div
              className="bg-gradient-to-r from-amber-400 to-yellow-300 h-2 rounded-full transition-all duration-500"
              style={{
                width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
              }}
            />
          </div>
        </div>

        {/* Items Table */}
        <div className="bg-zinc-900/60 backdrop-blur-md rounded-3xl border border-white/10 shadow-xl divide-y divide-white/5 overflow-hidden">
          <div className="p-4 bg-zinc-950/60 hidden sm:grid grid-cols-12 text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
            <div className="col-span-6">Archive Piece</div>
            <div className="col-span-2 text-center">Unit Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Subtotal</div>
          </div>

          {items.map(({ product, quantity }) => (
            <div key={product.id} className="p-5 flex flex-col sm:grid sm:grid-cols-12 items-center gap-4">
              {/* Product Info */}
              <div className="flex items-center gap-4 w-full sm:col-span-6">
                <Link
                  href={`/products/${product.id}`}
                  className="w-20 h-20 rounded-2xl overflow-hidden bg-zinc-950 shrink-0 border border-white/10 block relative group"
                >
                  <ProductImage
                    src={product.image}
                    fallbackSrc={product.fallbackImage}
                    alt={product.name}
                    category={product.category}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                </Link>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                    {product.category}
                  </span>
                  <Link
                    href={`/products/${product.id}`}
                    className="block text-sm font-bold text-white hover:text-amber-300 transition-colors truncate"
                  >
                    {product.name}
                  </Link>
                  <p className="text-xs text-zinc-400 truncate mt-0.5 font-light">
                    {product.tagline}
                  </p>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="mt-2 text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 font-medium sm:hidden cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Remove</span>
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="text-sm font-bold font-mono text-zinc-300 sm:col-span-2 text-center hidden sm:block">
                ${product.price.toFixed(2)}
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between w-full sm:w-auto sm:justify-center sm:col-span-2">
                <span className="text-xs text-zinc-400 sm:hidden">Quantity:</span>
                <div className="flex items-center border border-white/15 rounded-xl bg-zinc-950 p-1">
                  <button
                    type="button"
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-white font-mono">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    disabled={quantity >= product.stockCount}
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 disabled:opacity-20 transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Item Total & Action */}
              <div className="flex items-center justify-between w-full sm:w-auto sm:justify-end sm:col-span-2 sm:text-right">
                <span className="text-xs text-zinc-400 sm:hidden">Total:</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold font-mono text-white">
                    ${(product.price * quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="hidden sm:inline-flex text-zinc-500 hover:text-rose-400 p-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Table Footer */}
          <div className="p-4 bg-zinc-950/60 flex items-center justify-between text-xs text-zinc-400">
            <span>{items.length} unique pieces reserved</span>
            <button
              onClick={clearCart}
              className="text-rose-400 hover:text-rose-300 font-medium hover:underline flex items-center gap-1.5 cursor-pointer text-xs"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Order Summary Sidebar */}
      <div className="lg:col-span-4">
        <div className="bg-zinc-900/60 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-7 shadow-2xl sticky top-28 space-y-6">
          <h3 className="text-xl font-bold text-white pb-4 border-b border-white/10">
            Acquisition Summary
          </h3>

          <div className="space-y-3.5 text-xs text-zinc-300">
            <div className="flex justify-between">
              <span className="text-zinc-400">Archive Subtotal</span>
              <span className="font-bold font-mono text-white">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">White-Glove Courier</span>
              <span className="font-bold font-mono text-emerald-400">
                {shipping === 0 ? 'COMPLIMENTARY' : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Estimated Duties & Tax</span>
              <span className="font-bold font-mono text-white">${tax.toFixed(2)}</span>
            </div>
            <div className="pt-4 border-t border-white/10 flex justify-between items-baseline text-base">
              <span className="font-bold text-white">Total Investment</span>
              <span className="text-2xl font-bold font-mono text-amber-400">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold uppercase tracking-[0.2em] text-xs shadow-[0_0_25px_rgba(245,158,11,0.25)] flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <span>Proceed to Acquisition</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="pt-4 border-t border-white/5 space-y-2.5 text-[11px] text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Includes 3-Year Atelier Warranty & Deed</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Instant Downloadable Encrypted HTML Deed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
