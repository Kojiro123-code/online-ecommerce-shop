'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import { OrderCustomer } from '../types';
import { ShieldCheck, CreditCard, Banknote, Building2, Lock, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import ProductImage from './ProductImage';

export default function CheckoutForm() {
  const router = useRouter();
  const { items, subtotal, shipping, tax, total, placeOrder } = useCart();

  const [formData, setFormData] = useState<OrderCustomer>({
    fullName: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '+1 (555) 234-5678',
    address: '742 Evergreen Terrace',
    city: 'San Francisco',
    postalCode: '94107',
    country: 'United States',
    paymentMethod: 'credit_card',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (items.length === 0) {
    return (
      <div className="bg-zinc-900/50 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-16 text-center max-w-lg mx-auto shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-2">No Items in Cart</h2>
        <p className="text-xs text-zinc-400 mb-6 font-light">
          Your private cart is empty. Please select archive pieces before initiating checkout.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold uppercase tracking-wider text-xs shadow-md transition-all"
        >
          <span>Return to Archive</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const order = placeOrder(formData);
      router.push(`/invoice/${order.id}`);
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Form Fields */}
      <div className="lg:col-span-7 space-y-6">
        {/* Contact & Shipping */}
        <div className="bg-zinc-900/60 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-7 shadow-xl space-y-5">
          <h2 className="text-lg font-bold text-white flex items-center gap-2.5 border-b border-white/10 pb-4">
            <span className="w-6 h-6 rounded-full bg-amber-400/10 text-amber-400 text-xs flex items-center justify-center font-bold border border-amber-400/30">
              1
            </span>
            <span>White-Glove Courier Destination</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 text-xs rounded-2xl border border-white/10 focus:outline-hidden focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/30 bg-zinc-950 text-white placeholder-zinc-500 font-medium transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 text-xs rounded-2xl border border-white/10 focus:outline-hidden focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/30 bg-zinc-950 text-white placeholder-zinc-500 font-medium transition-all"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                Phone Number (Concierge SMS Updates) *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 text-xs rounded-2xl border border-white/10 focus:outline-hidden focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/30 bg-zinc-950 text-white placeholder-zinc-500 font-medium transition-all"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                Street Address *
              </label>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 text-xs rounded-2xl border border-white/10 focus:outline-hidden focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/30 bg-zinc-950 text-white placeholder-zinc-500 font-medium transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                City *
              </label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 text-xs rounded-2xl border border-white/10 focus:outline-hidden focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/30 bg-zinc-950 text-white placeholder-zinc-500 font-medium transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                Postal Code *
              </label>
              <input
                type="text"
                name="postalCode"
                required
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full px-4 py-3 text-xs rounded-2xl border border-white/10 focus:outline-hidden focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/30 bg-zinc-950 text-white placeholder-zinc-500 font-medium transition-all"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                Country *
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 text-xs rounded-2xl border border-white/10 focus:outline-hidden focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/30 bg-zinc-950 text-white font-medium transition-all cursor-pointer"
              >
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="Switzerland">Switzerland</option>
                <option value="France">France</option>
                <option value="Japan">Japan</option>
                <option value="Singapore">Singapore</option>
              </select>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-zinc-900/60 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-7 shadow-xl space-y-5">
          <h2 className="text-lg font-bold text-white flex items-center gap-2.5 border-b border-white/10 pb-4">
            <span className="w-6 h-6 rounded-full bg-amber-400/10 text-amber-400 text-xs flex items-center justify-center font-bold border border-amber-400/30">
              2
            </span>
            <span>Settlement Channel</span>
          </h2>

          <div className="space-y-3">
            <label
              className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all ${
                formData.paymentMethod === 'credit_card'
                  ? 'border-amber-400/60 bg-amber-400/10 ring-1 ring-amber-400/30'
                  : 'border-white/10 bg-zinc-950/60 hover:border-white/20'
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="credit_card"
                checked={formData.paymentMethod === 'credit_card'}
                onChange={handleChange}
                className="text-amber-400 focus:ring-amber-400"
              />
              <CreditCard className="w-5 h-5 text-amber-400" />
              <div className="flex-1">
                <span className="block text-xs font-bold uppercase tracking-wider text-white">
                  VIP Credit Card Authorization (Simulated)
                </span>
                <span className="block text-[11px] text-zinc-400 font-light">
                  Instant simulated authorization (Centurion, Visa Infinite, Mastercard World Elite)
                </span>
              </div>
            </label>

            <label
              className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all ${
                formData.paymentMethod === 'bank_transfer'
                  ? 'border-amber-400/60 bg-amber-400/10 ring-1 ring-amber-400/30'
                  : 'border-white/10 bg-zinc-950/60 hover:border-white/20'
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="bank_transfer"
                checked={formData.paymentMethod === 'bank_transfer'}
                onChange={handleChange}
                className="text-amber-400 focus:ring-amber-400"
              />
              <Building2 className="w-5 h-5 text-amber-400" />
              <div className="flex-1">
                <span className="block text-xs font-bold uppercase tracking-wider text-white">
                  Direct Private Bank Wire
                </span>
                <span className="block text-[11px] text-zinc-400 font-light">
                  SWIFT/IBAN instructions generated on your cryptographic HTML deed
                </span>
              </div>
            </label>

            <label
              className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all ${
                formData.paymentMethod === 'cod'
                  ? 'border-amber-400/60 bg-amber-400/10 ring-1 ring-amber-400/30'
                  : 'border-white/10 bg-zinc-950/60 hover:border-white/20'
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={formData.paymentMethod === 'cod'}
                onChange={handleChange}
                className="text-amber-400 focus:ring-amber-400"
              />
              <Banknote className="w-5 h-5 text-amber-400" />
              <div className="flex-1">
                <span className="block text-xs font-bold uppercase tracking-wider text-white">
                  White-Glove Courier Settlement (COD)
                </span>
                <span className="block text-[11px] text-zinc-400 font-light">
                  Inspect pieces upon private delivery and settle securely
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Review & Place Order Sidebar */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-zinc-900/60 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-7 shadow-2xl sticky top-28 space-y-6">
          <h3 className="text-lg font-bold text-white pb-4 border-b border-white/10">
            Acquisition Review ({items.length} pieces)
          </h3>

          {/* Compact items list */}
          <div className="max-h-60 overflow-y-auto space-y-3.5 pr-1 divide-y divide-white/5">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="pt-3.5 first:pt-0 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-zinc-950 shrink-0 border border-white/10">
                  <ProductImage
                    src={product.image}
                    fallbackSrc={product.fallbackImage}
                    alt={product.name}
                    category={product.category}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-white truncate">
                    {product.name}
                  </h4>
                  <span className="text-[11px] text-zinc-400 font-mono">
                    Qty: {quantity} × ${product.price.toFixed(2)}
                  </span>
                </div>
                <div className="text-xs font-bold font-mono text-white">
                  ${(product.price * quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Pricing calculations */}
          <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs">
            <div className="flex justify-between text-zinc-400">
              <span>Archive Subtotal</span>
              <span className="font-bold font-mono text-white">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>White-Glove Courier</span>
              <span className="font-bold font-mono text-emerald-400">
                {shipping === 0 ? 'COMPLIMENTARY' : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Estimated Tax (8%)</span>
              <span className="font-bold font-mono text-white">${tax.toFixed(2)}</span>
            </div>
            <div className="pt-4 border-t border-white/10 flex justify-between items-baseline">
              <span className="text-sm font-bold text-white">Total Investment</span>
              <span className="text-2xl font-bold font-mono text-amber-400">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold uppercase tracking-[0.2em] text-xs shadow-[0_0_25px_rgba(245,158,11,0.25)] active:scale-95 disabled:opacity-50 transition-all cursor-pointer"
          >
            {isSubmitting ? (
              <span>Minting Verifiable Deed...</span>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                <span>Authorize & Issue HTML Deed</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-center text-zinc-500 font-light">
            Instant cryptographically verified <strong>.html deed & invoice</strong> delivered upon authorization.
          </p>
        </div>
      </div>
    </form>
  );
}
