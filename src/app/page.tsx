import React from 'react';
import { products } from '../data/products';
import CatalogSection from '../components/CatalogSection';
import ProductImage from '../components/ProductImage';
import { Zap, ShieldCheck, Truck, FileText, ArrowRight, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

// Force dynamic SSR rendering
export const dynamic = 'force-dynamic';

export default function HomePage() {
  const featuredProduct = products[0]; // Apex Pro Headphones

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section
        style={{ backgroundColor: '#090d16' }}
        className="relative overflow-hidden rounded-3xl bg-slate-950 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white p-6 sm:p-10 lg:p-14 shadow-2xl border border-slate-800"
      >
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                <span>Flagship 2026 Collection</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
                <Zap className="w-3 h-3 text-teal-400" />
                SSR Accelerated
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Precision Gear.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-300">
                Built for Creators.
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              Elevate your daily workstation with studio-grade acoustics, ergonomic workspace peripherals, and minimalist desktop hardware. Enjoy free worldwide express delivery, comprehensive warranty, and instant digital invoices.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-teal-500/20 active:scale-95"
              >
                <span>Shop Collection</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/cart"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all shadow-xs"
              >
                <span>View Shopping Cart</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                4.9/5 Average Rating
              </span>
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                Free Express Delivery ($150+)
              </span>
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                30-Day Risk-Free Returns
              </span>
            </div>
          </div>

          {/* Right Column: Hero Featured Product Showcase Card */}
          <div className="lg:col-span-5">
            <Link
              href={`/products/${featuredProduct.id}`}
              className="group block relative rounded-2xl bg-slate-900/90 border border-slate-700/80 p-5 shadow-2xl hover:border-teal-400/60 transition-all backdrop-blur-md"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 font-semibold border border-teal-500/20 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  Staff Pick • Best Seller
                </span>
                <span className="text-emerald-400 font-medium">In Stock</span>
              </div>

              {/* Product Visual */}
              <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50 mb-4">
                <ProductImage
                  src={featuredProduct.image}
                  fallbackSrc={featuredProduct.fallbackImage}
                  alt={featuredProduct.name}
                  category={featuredProduct.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-bold text-teal-400 uppercase tracking-wider">
                  {featuredProduct.category} Series
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-teal-300 transition-colors">
                  {featuredProduct.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {featuredProduct.tagline}
                </p>
                <div className="pt-3 border-t border-slate-800 flex items-baseline justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white">
                      ${featuredProduct.price.toFixed(2)}
                    </span>
                    {featuredProduct.originalPrice && (
                      <span className="text-xs text-slate-500 line-through">
                        ${featuredProduct.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-teal-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>View Product</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Decorative Radial Grid BG */}
        <div className="absolute right-0 top-0 w-2/3 h-full opacity-10 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
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
              Exclusive Hardware
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Curated Hardware Collection
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Explore studio-grade acoustics, ergonomic workspace essentials, and desktop accessories.
            </p>
          </div>
        </div>

        <CatalogSection initialProducts={products} />
      </section>
    </div>
  );
}
