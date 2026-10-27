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
    link.download = `receipt-${order.id}.html`;
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
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="space-y-6">
      {/* Success Notification Banner (no-print) */}
      <div className="no-print bg-zinc-900/80 border border-emerald-500/30 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-3.5 text-center sm:text-left">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight">
              Order Confirmed & Receipt Ready
            </h1>
            <p className="text-xs text-zinc-400 font-light">
              Thank you, <strong>{order.customer.fullName}</strong>. Your official order receipt is ready for printing.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-center">
          <button
            onClick={downloadHtmlFile}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold uppercase tracking-wider text-xs shadow-md transition-all active:scale-95 cursor-pointer"
            title="Download standalone HTML file"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download HTML</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/15 hover:bg-zinc-800 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-xs cursor-pointer"
            title="Print 1-page paper receipt"
          >
            <Printer className="w-3.5 h-3.5 text-amber-400" />
            <span>Print Receipt</span>
          </button>
        </div>
      </div>

      {/* Actual 1-Page Printable Receipt Card */}
      <div className="receipt-card bg-white rounded-2xl border border-slate-200/90 shadow-md p-6 sm:p-8 max-w-3xl mx-auto text-slate-900">
        {/* Receipt Header */}
        <div className="flex flex-row justify-between items-start gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-slate-900 tracking-tight">
                ONLINE <span className="text-amber-600 font-sans tracking-widest text-xs uppercase px-1.5 py-0.5 rounded-sm bg-amber-50 border border-amber-300">ATELIER</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">Haute E-Commerce • Official Purchase Receipt</p>
          </div>

          <div className="text-right">
            <h2 className="text-lg font-black text-slate-900 tracking-wider">
              RECEIPT
            </h2>
            <div className="flex items-center justify-end gap-1.5 mt-0.5">
              <span className="text-xs font-mono font-semibold text-slate-700">#{order.id}</span>
              <button
                onClick={handleCopyOrderId}
                className="text-slate-400 hover:text-amber-600 p-0.5 no-print"
                title="Copy Order ID"
                aria-label="Copy Order ID"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <FileCode className="w-3 h-3" />}
              </button>
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">{formattedDate}</div>
            <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
              {order.status === 'Confirmed' ? 'Paid & Confirmed' : order.status}
            </span>
          </div>
        </div>

        {/* Customer & Billing Meta (Compact Strip) */}
        <div className="grid grid-cols-2 gap-4 my-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
          <div>
            <span className="font-bold text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
              Billed & Shipped To
            </span>
            <p className="font-bold text-slate-900">{order.customer.fullName}</p>
            <p className="text-slate-600 mt-0.5">{order.customer.address}</p>
            <p className="text-slate-600">{order.customer.city}, {order.customer.postalCode}, {order.customer.country}</p>
            <p className="text-slate-500 mt-1 text-[11px]">{order.customer.email} • {order.customer.phone}</p>
          </div>

          <div className="text-right space-y-1">
            <span className="font-bold text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
              Payment & Shipping
            </span>
            <p className="text-slate-600">
              Payment: <strong className="text-slate-900 capitalize">{order.customer.paymentMethod.replace('_', ' ')}</strong>
            </p>
            <p className="text-emerald-700 font-semibold text-[11px]">
              Status: Authorized & Paid
            </p>
            <p className="text-slate-600 text-[11px]">
              Shipping: Standard Insured Courier
            </p>
          </div>
        </div>

        {/* Itemized Table (Compact) */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                <th className="py-2.5 px-3">Item</th>
                <th className="py-2.5 px-3 text-center">Qty</th>
                <th className="py-2.5 px-3 text-right">Unit Price</th>
                <th className="py-2.5 px-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {order.items.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="py-2.5 px-3">
                    <div className="font-semibold text-slate-900">{item.product.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      REF. {item.product.id.toUpperCase()}
                    </div>
                  </td>
                  <td className="py-2.5 px-3 text-center font-medium text-slate-700">
                    {item.quantity}
                  </td>
                  <td className="py-2.5 px-3 text-right font-medium text-slate-700">
                    ${item.product.price.toFixed(2)}
                  </td>
                  <td className="py-2.5 px-3 text-right font-bold text-slate-900">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals Area (Compact) */}
        <div className="flex justify-end mb-4">
          <div className="w-64 space-y-1.5 text-xs">
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
            <div className="pt-2 border-t-2 border-slate-900 flex justify-between items-baseline">
              <span className="text-sm font-bold text-slate-900">Total Paid:</span>
              <span className="text-lg font-black text-slate-900 font-mono">
                ${order.total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Receipt Footer note (Compact) */}
        <div className="pt-3 border-t border-slate-200 text-center text-[10px] text-slate-500">
          <p className="font-semibold text-slate-700">
            Thank you for shopping with Online Atelier!
          </p>
          <p className="text-slate-400 mt-0.5">
            Official proof of acquisition. Serialized authenticity guaranteed.
          </p>
        </div>
      </div>

      {/* Back to Home Link (no-print) */}
      <div className="no-print text-center pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-amber-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Permanent Archive</span>
        </Link>
      </div>
    </div>
  );
}
