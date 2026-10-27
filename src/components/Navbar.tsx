'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Sparkles, Layers } from 'lucide-react';

export default function Navbar() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & SSR Badge */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-teal-600 transition-colors">
                  Online E-Commerce Shop
                </span>
                <span className="text-[10px] font-semibold text-teal-600 tracking-wider uppercase -mt-0.5">
                  Official Store • SSR
                </span>
              </div>
            </Link>

            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <Sparkles className="w-3 h-3" />
              Server-Side Rendered
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-1 sm:space-x-6">
            <Link
              href="/"
              className="text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Catalog
            </Link>
            <Link
              href="/#catalog"
              className="hidden md:inline-block text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Collections
            </Link>

            {/* Cart Link with Badge */}
            <Link
              href="/cart"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-teal-700 transition-all shadow-sm hover:shadow-teal-600/20 active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-sm font-medium">Cart</span>
              {itemCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-teal-400 text-slate-950 rounded-full animate-in zoom-in-50">
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

