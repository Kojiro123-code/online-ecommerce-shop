import React from 'react';
import { products } from '../data/products';
import CatalogSection from '../components/CatalogSection';
import HeroSlider from '../components/HeroSlider';
import { Sparkles, ShieldCheck, Truck, FileText, Compass, Award } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Featured Flagship Luxury Showcase Slider */}
      <HeroSlider products={products} />

      {/* The Atelier Standard: 4 Luxury Guarantees */}
      <section id="curated" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-amber-400">
            MAISON EXCELLENCE
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            The Atelier Standard
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-light">
            Every piece is calibrated, packaged, and couriered according to rigorous high-luxury standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* 1 */}
          <div className="bg-zinc-900/50 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-amber-400/40 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] transition-all flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 text-amber-400 border border-amber-400/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">White-Glove Courier</h4>
              <p className="text-xs text-zinc-400 mt-1 font-light leading-relaxed">
                Complimentary insured express global transit with tracking.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="bg-zinc-900/50 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-amber-400/40 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] transition-all flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Certified Provenance</h4>
              <p className="text-xs text-zinc-400 mt-1 font-light leading-relaxed">
                Individually serialized pieces with official 3-year warranty.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="bg-zinc-900/50 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-amber-400/40 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] transition-all flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 text-amber-300 border border-amber-400/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Concierge Invoicing</h4>
              <p className="text-xs text-zinc-400 mt-1 font-light leading-relaxed">
                Instant verifiable HTML certificate of acquisition and deed.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="bg-zinc-900/50 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-amber-400/40 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] transition-all flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-indigo-400/10 text-indigo-400 border border-indigo-400/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">SSR Architecture</h4>
              <p className="text-xs text-zinc-400 mt-1 font-light leading-relaxed">
                Server-side rendered microsecond speed for seamless curation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section id="catalog" className="space-y-8 pt-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1.5">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-amber-400">
              PERMANENT ARCHIVE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Curated Haute Collection
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl leading-relaxed">
              Explore acoustic beryllium transducers, curved QD-OLED canvases, biometric titanium rings, and aerial imaging systems.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            {products.length} Masterpieces Available
          </div>
        </div>

        <CatalogSection initialProducts={products} />
      </section>
    </div>
  );
}
