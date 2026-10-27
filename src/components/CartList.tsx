'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';

export default function CartList() {
  const { items, updateQuantity, removeFromCart, clearCart, subtotal, shipping, tax, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center max-w-xl mx-auto shadow-xs">
        <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto mb-4">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Your Cart is Empty</h2>
        <p className="text-sm text-slate-500 mb-6">
          Looks like you haven&apos;t added any items to your shopping cart yet. Explore our 10 curated SSR sample products to get started.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-md shadow-teal-600/20 transition-all"
        >
          <span>Explore Catalog</span>
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
      <div className="lg:col-span-8 space-y-4">
        {/* Free shipping progress bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
            <Truck className="w-4 h-4 text-teal-600" />
            {amountToFreeShipping === 0 ? (
              <span className="text-emerald-700 font-semibold">
                Congratulations! You qualified for Free Shipping.
              </span>
            ) : (
              <span>
                Add <span className="font-bold text-teal-600">${amountToFreeShipping.toFixed(2)}</span> more to qualify for <strong>FREE Shipping</strong>!
              </span>
            )}
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-teal-500 h-2 rounded-full transition-all duration-500"
              style={{
                width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
              }}
            />
          </div>
        </div>

        {/* Items Table */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs divide-y divide-slate-100 overflow-hidden">
          <div className="p-4 bg-slate-50/70 hidden sm:grid grid-cols-12 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Total</div>
          </div>

          {items.map(({ product, quantity }) => (
            <div key={product.id} className="p-4 sm:p-5 flex flex-col sm:grid sm:grid-cols-12 items-center gap-4">
              {/* Product Info */}
              <div className="flex items-center gap-4 w-full sm:col-span-6">
                <Link
                  href={`/products/${product.id}`}
                  className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/60"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </Link>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-semibold text-teal-600 uppercase tracking-wide">
                    {product.category}
                  </span>
                  <Link
                    href={`/products/${product.id}`}
                    className="block text-sm font-bold text-slate-900 hover:text-teal-600 transition-colors truncate"
                  >
                    {product.name}
                  </Link>
                  <p className="text-xs text-slate-400 truncate mt-0.5">
                    {product.tagline}
                  </p>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="mt-2 text-xs text-rose-500 hover:text-rose-700 flex items-center gap-1 font-medium sm:hidden"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Remove</span>
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="text-sm font-medium text-slate-700 sm:col-span-2 text-center hidden sm:block">
                ${product.price.toFixed(2)}
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between w-full sm:w-auto sm:justify-center sm:col-span-2">
                <span className="text-xs text-slate-500 sm:hidden">Quantity:</span>
                <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50 p-1">
                  <button
                    type="button"
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="w-7 h-7 rounded flex items-center justify-center text-slate-600 hover:bg-white transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-slate-900">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    disabled={quantity >= product.stockCount}
                    className="w-7 h-7 rounded flex items-center justify-center text-slate-600 hover:bg-white disabled:opacity-30 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Item Total & Action */}
              <div className="flex items-center justify-between w-full sm:w-auto sm:justify-end sm:col-span-2 sm:text-right">
                <span className="text-xs text-slate-500 sm:hidden">Total:</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-slate-900">
                    ${(product.price * quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="hidden sm:inline-flex text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Table Footer */}
          <div className="p-4 bg-slate-50/50 flex items-center justify-between text-xs text-slate-500">
            <span>Showing {items.length} item types in your cart</span>
            <button
              onClick={clearCart}
              className="text-rose-600 hover:text-rose-800 font-medium hover:underline flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear entire cart
            </button>
          </div>
        </div>
      </div>

      {/* Order Summary Sidebar */}
      <div className="lg:col-span-4">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs sticky top-24 space-y-6">
          <h3 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100">
            Order Summary
          </h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-slate-600">
              <span className="flex items-center gap-1">
                Estimated Shipping
                {shipping === 0 && (
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                    FREE
                  </span>
                )}
              </span>
              <span className="font-semibold text-slate-900">
                {shipping === 0 ? '$0.00' : `$${shipping.toFixed(2)}`}
              </span>
            </div>

            <div className="flex justify-between text-slate-600">
              <span>Estimated Tax (8%)</span>
              <span className="font-semibold text-slate-900">${tax.toFixed(2)}</span>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-between items-baseline">
              <span className="text-base font-bold text-slate-900">Total</span>
              <span className="text-2xl font-extrabold text-teal-600">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-md shadow-teal-600/20 active:scale-95 transition-all"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Secure 256-bit SSL encrypted checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Free standard delivery on orders over $150</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

