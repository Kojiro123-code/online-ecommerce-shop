'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Order } from '../types';
import { generateInvoiceHtml } from '../utils/invoiceHtml';
import { CheckCircle2, Download, Printer, ArrowLeft, FileCode, Check } from 'lucide-react';

export default function InvoiceView({ order }: { order: Order }) {
  const [copied, setCopied] = useState(false);

  const downloadHtmlFile = () => {
    const htmlContent = generateInvoiceHtml(order);
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `invoice-${order.id}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(order.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formattedDate = new Date(order.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="space-y-8">
      {/* Success Notification Banner (no-print) */}
      <div className="no-print bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-emerald-950">
              Order Confirmed & Invoice Generated!
            </h1>
            <p className="text-sm text-emerald-800 mt-0.5">
              Thank you, <strong>{order.customer.fullName}</strong>. Your order is registered in our SSR system.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-center">
          {/* Download HTML Button */}
          <button
            onClick={downloadHtmlFile}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-md shadow-teal-600/20 transition-all active:scale-95 cursor-pointer"
            title="Download standalone .html invoice file"
          >
            <Download className="w-4 h-4" />
            <span>Download .html Invoice</span>
          </button>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all shadow-xs cursor-pointer"
            title="Print or save as PDF"
          >
            <Printer className="w-4 h-4" />
            <span>Print Invoice</span>
          </button>
        </div>
      </div>

      {/* Actual Invoice Document Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg p-6 sm:p-12 max-w-4xl mx-auto">
        {/* Invoice Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pb-8 border-b-2 border-teal-600">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-slate-900 tracking-tight">
                AURA<span className="text-teal-600">.STORE</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Official Server-Side Rendered E-Commerce Invoice</p>
            <p className="text-xs text-slate-400">Order Fulfilled via SSR Next.js Platform</p>
          </div>

          <div className="sm:text-right">
            <h2 className="text-2xl font-black text-teal-600 tracking-wider">
              INVOICE (.HTML)
            </h2>
            <div className="flex items-center sm:justify-end gap-2 mt-1">
              <span className="text-sm font-semibold text-slate-800">#{order.id}</span>
              <button
                onClick={handleCopyOrderId}
                className="text-slate-400 hover:text-teal-600 p-0.5 no-print"
                title="Copy Order ID"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <FileCode className="w-3.5 h-3.5" />}
              </button>
            </div>
            <div className="text-xs text-slate-500 mt-0.5">{formattedDate}</div>
            <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
              {order.status}
            </span>
          </div>
        </div>

        {/* Customer & Billing Meta */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8 text-sm">
          <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Billed & Shipped To
            </h3>
            <p className="font-bold text-slate-900 text-base">{order.customer.fullName}</p>
            <p className="text-slate-600 mt-1">{order.customer.address}</p>
            <p className="text-slate-600">{order.customer.city}, {order.customer.postalCode}</p>
            <p className="text-slate-600">{order.customer.country}</p>
            <div className="mt-3 pt-3 border-t border-slate-200/60 text-xs text-slate-500">
              <p>Email: {order.customer.email}</p>
              <p>Phone: {order.customer.phone}</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Payment & Shipping Details
            </h3>
            <div className="space-y-1.5 text-slate-700">
              <p>
                <span className="text-slate-500 font-medium">Payment Mode:</span>{' '}
                <span className="font-semibold text-slate-900 capitalize">
                  {order.customer.paymentMethod.replace('_', ' ')}
                </span>
              </p>
              <p>
                <span className="text-slate-500 font-medium">Payment Status:</span>{' '}
                <span className="text-emerald-700 font-semibold">Authorized & Paid</span>
              </p>
              <p>
                <span className="text-slate-500 font-medium">Shipping Method:</span>{' '}
                <span className="font-semibold text-slate-900">Standard Insured Courier</span>
              </p>
              <p>
                <span className="text-slate-500 font-medium">Estimated Arrival:</span>{' '}
                <span className="font-semibold text-slate-900">2-3 Business Days</span>
              </p>
            </div>
          </div>
        </div>

        {/* Itemized Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 mb-8">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Item & Description</th>
                <th className="py-3 px-4 text-center">Qty</th>
                <th className="py-3 px-4 text-right">Unit Price</th>
                <th className="py-3 px-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {order.items.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="py-3 px-4">
                    <div className="font-semibold text-slate-900">{item.product.name}</div>
                    <div className="text-xs text-slate-400">
                      Category: {item.product.category} • SKU: {item.product.id}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center font-medium text-slate-700">
                    {item.quantity}
                  </td>
                  <td className="py-3 px-4 text-right font-medium text-slate-700">
                    ${item.product.price.toFixed(2)}
                  </td>
                  <td className="py-3 px-4 text-right font-bold text-slate-900">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals Area */}
        <div className="flex justify-end mb-8">
          <div className="w-72 space-y-2 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal:</span>
              <span className="font-semibold text-slate-900">${order.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Shipping Fee:</span>
              <span className="font-semibold text-slate-900">
                {order.shipping === 0 ? 'FREE ($0.00)' : `$${order.shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Sales Tax (8%):</span>
              <span className="font-semibold text-slate-900">${order.tax.toFixed(2)}</span>
            </div>
            <div className="pt-3 border-t-2 border-slate-900 flex justify-between items-baseline">
              <span className="text-base font-bold text-slate-900">Grand Total:</span>
              <span className="text-2xl font-black text-teal-600">
                ${order.total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Invoice Footer note */}
        <div className="pt-6 border-t border-slate-200 text-center text-xs text-slate-500 space-y-1">
          <p className="font-semibold text-slate-700">
            Thank you for your order with AURA Store!
          </p>
          <p>
            This official order document was produced using Server-Side Rendering (SSR). You can download the standalone <strong>.html</strong> file anytime or print this receipt for your records.
          </p>
        </div>
      </div>

      {/* Back to Home Link (no-print) */}
      <div className="no-print text-center pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Continue Shopping at AURA Store</span>
        </Link>
      </div>
    </div>
  );
}

