import React from 'react';
import { products } from '../data/products';
import CatalogSection from '../components/CatalogSection';
import HeroSlider from '../components/HeroSlider';
import { Zap, ShieldCheck, Truck, FileText } from 'lucide-react';

// Force dynamic SSR rendering
export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Automatic Random Product Slider with description next to product image */}
      <HeroSlider products={products} />

      {/* Highlights Strip */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Fast Global Delivery</h4>
            <p className="text-[11px] text-slate-500">Free shipping over $150</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">2-Year Warranty</h4>
            <p className="text-[11px] text-slate-500">Official device coverage</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Instant HTML Invoice</h4>
            <p className="text-[11px] text-slate-500">Downloadable & printable</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">SSR Performance</h4>
            <p className="text-[11px] text-slate-500">Instant server-rendered speed</p>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section id="catalog" className="space-y-6 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200/80 pb-4">
          <div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
              Exclusive Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Curated Products Collection
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Explore audio gear, smart wearables, mechanical keyboards, and workspace accessories.
            </p>
          </div>
        </div>

        <CatalogSection initialProducts={products} />
      </section>
    </div>
  );
}
