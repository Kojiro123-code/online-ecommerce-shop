'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import { OrderCustomer } from '../types';
import { ShieldCheck, CreditCard, Banknote, Building2, Lock, ArrowRight } from 'lucide-react';
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
      <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center max-w-lg mx-auto shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 mb-2">No items to checkout</h2>
        <p className="text-sm text-slate-500 mb-6">
          Your cart is currently empty. Please add items to your cart before proceeding to checkout.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium transition-all"
        >
          <span>Return to Catalog</span>
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
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 text-xs flex items-center justify-center font-bold">
              1
            </span>
            Shipping & Contact Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 bg-slate-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 bg-slate-50/50"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 bg-slate-50/50"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Street Address *
              </label>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 bg-slate-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                City *
              </label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 bg-slate-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Postal Code *
              </label>
              <input
                type="text"
                name="postalCode"
                required
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 bg-slate-50/50"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Country *
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 bg-slate-50/50"
              >
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="Australia">Australia</option>
                <option value="Japan">Japan</option>
                <option value="Singapore">Singapore</option>
                <option value="Indonesia">Indonesia</option>
              </select>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 text-xs flex items-center justify-center font-bold">
              2
            </span>
            Payment Method
          </h2>

          <div className="space-y-3">
            <label
              className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                formData.paymentMethod === 'credit_card'
                  ? 'border-teal-500 bg-teal-50/30 ring-2 ring-teal-500/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="credit_card"
                checked={formData.paymentMethod === 'credit_card'}
                onChange={handleChange}
                className="text-teal-600 focus:ring-teal-500"
              />
              <CreditCard className="w-5 h-5 text-teal-600" />
              <div className="flex-1">
                <span className="block text-sm font-semibold text-slate-900">
                  Credit / Debit Card (Mock Online)
                </span>
                <span className="block text-xs text-slate-500">
                  Instant simulated authorization (Visa, Mastercard, Amex)
                </span>
              </div>
            </label>

            <label
              className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                formData.paymentMethod === 'bank_transfer'
                  ? 'border-teal-500 bg-teal-50/30 ring-2 ring-teal-500/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="bank_transfer"
                checked={formData.paymentMethod === 'bank_transfer'}
                onChange={handleChange}
                className="text-teal-600 focus:ring-teal-500"
              />
              <Building2 className="w-5 h-5 text-teal-600" />
              <div className="flex-1">
                <span className="block text-sm font-semibold text-slate-900">
                  Direct Bank Wire / Virtual Account
                </span>
                <span className="block text-xs text-slate-500">
                  Account instructions will be included in your .html invoice
                </span>
              </div>
            </label>

            <label
              className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                formData.paymentMethod === 'cod'
                  ? 'border-teal-500 bg-teal-50/30 ring-2 ring-teal-500/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={formData.paymentMethod === 'cod'}
                onChange={handleChange}
                className="text-teal-600 focus:ring-teal-500"
              />
              <Banknote className="w-5 h-5 text-teal-600" />
              <div className="flex-1">
                <span className="block text-sm font-semibold text-slate-900">
                  Cash on Delivery (COD)
                </span>
                <span className="block text-xs text-slate-500">
                  Pay securely in cash or QR upon package receipt
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Review & Place Order Sidebar */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs sticky top-24 space-y-6">
          <h3 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100">
            Order Review ({items.length} items)
          </h3>

          {/* Compact items list */}
          <div className="max-h-60 overflow-y-auto space-y-3 pr-1 divide-y divide-slate-100">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="pt-3 first:pt-0 flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200/60">
                  <ProductImage
                    src={product.image}
                    fallbackSrc={product.fallbackImage}
                    alt={product.name}
                    category={product.category}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-slate-900 truncate">
                    {product.name}
                  </h4>
                  <span className="text-[11px] text-slate-500">
                    Qty: {quantity} × ${product.price.toFixed(2)}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-900">
                  ${(product.price * quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Pricing calculations */}
          <div className="space-y-2 pt-4 border-t border-slate-100 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Shipping</span>
              <span className="font-semibold text-slate-900">
                {shipping === 0 ? 'FREE ($0.00)' : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Tax (8%)</span>
              <span className="font-semibold text-slate-900">${tax.toFixed(2)}</span>
            </div>
            <div className="pt-3 border-t border-slate-100 flex justify-between items-baseline">
              <span className="text-base font-bold text-slate-900">Total Due</span>
              <span className="text-2xl font-extrabold text-teal-600">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-md shadow-teal-600/20 active:scale-95 disabled:opacity-50 transition-all cursor-pointer"
          >
            {isSubmitting ? (
              <span>Generating Invoice...</span>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                <span>Place Order & Generate Invoice</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-center text-slate-400">
            By placing your order, you will receive an instant downloadable <strong>.html invoice</strong> receipt with full order verification.
          </p>
        </div>
      </div>
    </form>
  );
}

