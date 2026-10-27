import React from 'react';
import type { Metadata } from 'next';
import CheckoutForm from '../../components/CheckoutForm';
import Link from 'next/link';
import { ArrowLeft, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Secure Checkout | AURA Store (SSR)',
  description: 'Complete your shipping information and payment details to finalize your order and generate an official HTML invoice.',
};

export default function CheckoutPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
            <Link href="/cart" className="hover:text-teal-600 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Cart</span>
            </Link>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            <Lock className="w-7 h-7 text-teal-600" />
            <span>Secure Checkout</span>
          </h1>
        </div>

        <div className="text-xs text-slate-500">
          Step 2 of 3: Cart Review → <strong>Checkout</strong> → Invoice (.html)
        </div>
      </div>

      <CheckoutForm />
    </div>
  );
}

