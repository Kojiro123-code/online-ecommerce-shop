import React from 'react';
import { products } from '../data/products';
import CatalogSection from '../components/CatalogSection';
import ProductImage from '../components/ProductImage';
import { Zap, ShieldCheck, Truck, FileText, ArrowRight, Star, Sparkles, CheckCircle2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

// Force dynamic SSR rendering
export const dynamic = 'force-dynamic';

export default function HomePage() {
  const heroPrimary = products[0]; // Apex Pro Headphones
  const heroSecondary = products[1]; // Chrono Pulse Smartwatch

  return (
    <div className="space-y-12">
      {/* Main Hero Panel */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-slate-50 to-teal-50/40 border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-sm">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Dark, crisp, readable letters (NOT white) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800 border border-teal-200">
                <ShoppingBag className="w-3.5 h-3.5 text-teal-700" />
                <span>Online E-Commerce Shop</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                Flagship Collection
              </span>
            </div>

            {/* Dark crisp headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Modern Tech &{' '}
              <span className="text-teal-600">
                Lifestyle Essentials.
              </span>
            </h1>

            {/* Dark slate readable description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Welcome to <strong>Online E-Commerce Shop</strong>. Discover studio-grade audio, precision workspace peripherals, and smart accessories engineered for everyday performance. Enjoy fast free delivery, comprehensive warranty, and instant downloadable HTML invoices.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm transition-all shadow-md shadow-teal-600/20 active:scale-95 cursor-pointer"
              >
                <span>Shop All Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/cart"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 transition-all shadow-xs"
              >
                <span>View Shopping Cart</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 text-slate-700">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <strong>4.9/5</strong> Rating (800+ Reviews)
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Free Shipping over $150
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                30-Day Money-Back Guarantee
              </span>
            </div>
          </div>

          {/* Right Column: Visual Product Showcase Images */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Primary Featured Card */}
            <Link
              href={`/products/${heroPrimary.id}`}
              className="group block relative rounded-2xl bg-white border border-slate-200/90 p-4 shadow-sm hover:shadow-xl hover:border-teal-400 transition-all"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 font-bold text-[11px] border border-teal-200 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  Bestseller
                </span>
                <span className="text-emerald-700 font-semibold text-xs">In Stock ({heroPrimary.stockCount} left)</span>
              </div>

              <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-slate-100 border border-slate-100 mb-3">
                <ProductImage
                  src={heroPrimary.image}
                  fallbackSrc={heroPrimary.fallbackImage}
                  alt={heroPrimary.name}
                  category={heroPrimary.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-teal-600 transition-colors">
                    {heroPrimary.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-1">{heroPrimary.tagline}</p>
                </div>
                <div className="text-right shrink-0 ml-3">
                  <span className="text-base font-extrabold text-slate-900 block">
                    ${heroPrimary.price.toFixed(2)}
                  </span>
                  <span className="text-[11px] text-teal-600 font-semibold flex items-center gap-0.5 justify-end">
                    <span>View</span> <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Secondary Featured Card */}
            <Link
              href={`/products/${heroSecondary.id}`}
              className="group flex items-center gap-3.5 rounded-2xl bg-white border border-slate-200/90 p-3 shadow-xs hover:shadow-md hover:border-teal-400 transition-all"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-100">
                <ProductImage
                  src={heroSecondary.image}
                  fallbackSrc={heroSecondary.fallbackImage}
                  alt={heroSecondary.name}
                  category={heroSecondary.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wide">
                  {heroSecondary.category}
                </span>
                <h4 className="font-bold text-xs text-slate-900 truncate group-hover:text-teal-600 transition-colors">
                  {heroSecondary.name}
                </h4>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs font-bold text-slate-900">
                    ${heroSecondary.price.toFixed(2)}
                  </span>
                  <span className="text-[11px] text-teal-600 font-medium">Quick Look →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Banner */}
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
