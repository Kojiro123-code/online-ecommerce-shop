'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import AtelierLogo from './AtelierLogo';
import { ShoppingBag, Sparkles, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const { itemCount } = useCart();

  return (
    <>
      {/* Top Luxury Concierge Ticker */}
      <div className="no-print print:hidden bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-b border-white/5 py-1.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-[11px] font-medium tracking-[0.2em] text-zinc-400 uppercase">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-amber-400/90 font-semibold">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Autumn/Winter 2026 Collection
          </span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span>Complimentary White-Glove Global Delivery On All Orders</span>
          <span className="hidden md:inline text-white/20">•</span>
          <span className="hidden md:inline-flex items-center gap-1 text-zinc-400">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            Serialized Authenticity Deed
          </span>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header className="no-print print:hidden sticky top-0 z-50 bg-[#08080a]/85 backdrop-blur-xl border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Maison Title */}
            <div className="flex items-center space-x-3.5">
              <Link href="/" className="group">
                <AtelierLogo size="md" />
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center space-x-1 sm:space-x-8">
              <Link
                href="/#catalog"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 hover:text-amber-400 transition-colors px-2 py-1 relative group"
              >
                <span>Collections</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full" />
              </Link>

              {/* Cart Button */}
              <Link
                href="/cart"
                className="relative inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 text-white border border-white/15 hover:border-amber-400/50 transition-all shadow-md active:scale-95 group"
              >
                <ShoppingBag className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-200">
                  Cart
                </span>
                {itemCount > 0 && (
                  <span className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 text-[11px] font-extrabold bg-gradient-to-r from-amber-400 to-amber-500 text-black rounded-full shadow-xs">
                    {itemCount}
                  </span>
                )}
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
