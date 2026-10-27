import React from 'react';
import { products } from '../data/products';
import CatalogSection from '../components/CatalogSection';
import HeroSlider from '../components/HeroSlider';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Featured Flagship Luxury Showcase Slider */}
      <HeroSlider products={products} />

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
