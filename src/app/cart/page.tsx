import React from 'react';
import type { Metadata } from 'next';
import CartList from '../../components/CartList';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Private Cart | Online Luxury Atelier',
  description: 'Review your selected atelier pieces, adjust quantities, calculate concierge shipping, and proceed to acquisition.',
};

export default function CartPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
            <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1 uppercase tracking-widest text-[10px] font-bold">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Permanent Archive</span>
            </Link>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight flex items-center gap-3">
            <ShoppingBag className="w-7 h-7 text-amber-400" />
            <span>Private Cart Collection</span>
          </h1>
        </div>

        <div className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
          Stage 01 • Cart Review → Concierge Checkout → Verifiable Deed
        </div>
      </div>

      <CartList />
    </div>
  );
}
