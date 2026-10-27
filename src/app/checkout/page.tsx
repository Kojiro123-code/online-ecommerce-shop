import React from 'react';
import type { Metadata } from 'next';
import CheckoutForm from '../../components/CheckoutForm';
import Link from 'next/link';
import { ArrowLeft, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Concierge Acquisition | Online Luxury Atelier',
  description: 'Finalize your white-glove shipping details and payment to generate your official cryptographic HTML deed.',
};

export default function CheckoutPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
            <Link href="/cart" className="hover:text-amber-400 transition-colors flex items-center gap-1 uppercase tracking-widest text-[10px] font-bold">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Private Cart</span>
            </Link>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight flex items-center gap-3">
            <Lock className="w-7 h-7 text-amber-400" />
            <span>Concierge Acquisition</span>
          </h1>
        </div>

        <div className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
          Stage 02 • Cart Review → <strong>Concierge Checkout</strong> → Verifiable Deed
        </div>
      </div>

      <CheckoutForm />
    </div>
  );
}
