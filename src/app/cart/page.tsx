import React from 'react';
import type { Metadata } from 'next';
import CartList from '../../components/CartList';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Your Shopping Cart | AURA Store (SSR)',
  description: 'Review your selected items, adjust quantities, calculate shipping and taxes, and proceed to checkout.',
};

export default function CartPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
            <Link href="/" className="hover:text-teal-600 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Catalog</span>
            </Link>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            <ShoppingBag className="w-7 h-7 text-teal-600" />
            <span>Shopping Cart</span>
          </h1>
        </div>

        <div className="text-xs text-slate-500">
          Step 1 of 3: Cart Review → Checkout → Invoice (.html)
        </div>
      </div>

      <CartList />
    </div>
  );
}

