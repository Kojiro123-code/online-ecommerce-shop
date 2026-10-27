import React from 'react';
import { products } from '../data/products';
import CatalogSection from '../components/CatalogSection';
import { Zap, ShieldCheck, Truck, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Force dynamic SSR rendering
export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-slate-800 to-teal-950 text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30 backdrop-blur-md">
            <Zap className="w-3.5 h-3.5" />
            <span>Server-Side Rendered (SSR) Storefront</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Curated Gear for Modern Creators.
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Experience ultra-fast shopping powered by Next.js Server-Side Rendering. Browse our complete 10-item sample catalog, manage your cart, and receive instant downloadable <code className="bg-slate-800 px-1.5 py-0.5 rounded text-teal-300 font-mono">.html</code> invoices.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#sample-data"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-teal-500/25 active:scale-95"
            >
              <span>Explore 10 Sample Items</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/cart"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-md border border-white/10 transition-all"
            >
              <span>View Shopping Cart</span>
            </Link>
          </div>
        </div>

        {/* Decorative Grid BG */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      </section>

      {/* Highlights Banner */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">SSR Architecture</h4>
            <p className="text-[11px] text-slate-500">Fast dynamic initial load</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">10 Sample Items</h4>
            <p className="text-[11px] text-slate-500">Fully curated rich mock data</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Free Shipping</h4>
            <p className="text-[11px] text-slate-500">On all orders over $150</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Invoice (.html)</h4>
            <p className="text-[11px] text-slate-500">Standalone file download</p>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Featured Products Catalog
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Browse our Server-Side Rendered collection. Click any product to explore full technical specifications.
          </p>
        </div>

        <CatalogSection initialProducts={products} />
      </section>
    </div>
  );
}

