'use client';

import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import {
  Search,
  SlidersHorizontal,
  Sparkles,
  Headphones,
  Watch,
  Keyboard,
  Camera,
  BatteryCharging,
  Layers,
  ArrowRight
} from 'lucide-react';

interface CatalogSectionProps {
  initialProducts: Product[];
}

interface SectionMeta {
  id: string;
  category: string;
  title: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const SECTIONS_CONFIG: SectionMeta[] = [
  {
    id: 'audio',
    category: 'Audio',
    title: 'Acoustic Lab & Sound Engineering',
    tagline: 'Planar magnetic drivers, balanced tube amplification, studio monitors, and audiophile acoustic precision.',
    icon: Headphones,
    accentColor: 'text-amber-400',
  },
  {
    id: 'wearables',
    category: 'Wearables',
    title: 'Smart Wearables & Biometrics',
    tagline: 'Aerospace Grade-5 titanium smartwatches, biometric health rings, audio eyewear, and carbon propulsion runners.',
    icon: Watch,
    accentColor: 'text-amber-300',
  },
  {
    id: 'workspace',
    category: 'Workspace',
    title: 'Workspace Atelier & Ergonomics',
    tagline: 'Panoramic QD-OLED curved displays, gasket-mount mechanical keyboards, carbon laptop risers, and oak standing desks.',
    icon: Keyboard,
    accentColor: 'text-amber-400',
  },
  {
    id: 'photography',
    category: 'Photography',
    title: 'Cinematic Optics & Aerial Imaging',
    tagline: 'Ultra-fast f/1.2 cinema lenses, 8K gimbal quadcopters, 3-axis stabilizers, and studio broadcast lighting.',
    icon: Camera,
    accentColor: 'text-amber-300',
  },
  {
    id: 'accessories',
    category: 'Accessories',
    title: 'Power Systems & Luxury EDC',
    tagline: 'MagSafe multi-dock folding stations, GaN fast chargers, RFID titanium wallets, and ballistic Kevlar cords.',
    icon: BatteryCharging,
    accentColor: 'text-amber-400',
  },
];

export default function CatalogSection({ initialProducts }: CatalogSectionProps) {
  const [selectedSection, setSelectedSection] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  // Filter and sort items
  const processedProducts = useMemo(() => {
    return initialProducts
      .filter(product => {
        const matchesCategory =
          selectedSection === 'All' || product.category.toLowerCase() === selectedSection.toLowerCase();
        const matchesSearch =
          searchQuery.trim() === '' ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.tagline.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [initialProducts, selectedSection, searchQuery, sortBy]);

  // Group products by section
  const sectionGroups = useMemo(() => {
    return SECTIONS_CONFIG.map(section => {
      const items = processedProducts.filter(p => p.category.toLowerCase() === section.category.toLowerCase());
      return {
        ...section,
        products: items,
      };
    }).filter(group => group.products.length > 0);
  }, [processedProducts]);

  const scrollToSection = (id: string) => {
    setSelectedSection(id === 'all' ? 'All' : id);
    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="catalog-sections" className="space-y-12">
      {/* 1. Interactive Section Navigation & Filter Controls Bar */}
      <div className="sticky top-20 z-40 bg-[#08080a]/90 backdrop-blur-xl rounded-[2rem] border border-white/10 p-4 sm:p-5 shadow-2xl space-y-4">
        {/* Top: Section Pills */}
        <div className="flex items-center justify-between gap-3 overflow-x-auto pb-1 scrollbar-none">
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scrollToSection('all')}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                selectedSection === 'All'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.25)]'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/10'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Sections ({initialProducts.length})</span>
            </button>

            {SECTIONS_CONFIG.map(sec => {
              const Icon = sec.icon;
              const count = initialProducts.filter(p => p.category.toLowerCase() === sec.category.toLowerCase()).length;
              const isActive = selectedSection.toLowerCase() === sec.id.toLowerCase();
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.25)]'
                      : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{sec.category}</span>
                  <span className={`text-[11px] font-mono px-1.5 py-0.2 rounded-md ${isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-zinc-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom: Search Input & Sort Selector */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/10">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search across all 52 pieces..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-zinc-950/80 border border-white/10 text-white placeholder:text-zinc-500 text-xs focus:outline-hidden focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/60 transition-all font-medium"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
              Showing {processedProducts.length} pieces
            </span>
            <select
              value={sortBy}
              aria-label="Sort products by criteria"
              onChange={e => setSortBy(e.target.value as any)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-zinc-950/80 border border-white/10 text-zinc-300 text-xs font-semibold uppercase tracking-wider focus:outline-hidden focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/60 transition-all cursor-pointer"
            >
              <option value="featured">Featured Order</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Client Evaluation</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. Visual Products Divided by Dedicated Section */}
      {sectionGroups.length === 0 ? (
        <div className="bg-zinc-900/40 backdrop-blur-md rounded-[2.5rem] border border-white/10 p-16 text-center max-w-xl mx-auto shadow-xl">
          <Sparkles className="w-10 h-10 text-amber-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">No Archive Pieces Found</h3>
          <p className="text-xs text-zinc-400 mb-6 font-light">
            No items matched your search query &quot;{searchQuery}&quot;. Reset your filters to browse all 52 pieces.
          </p>
          <button
            onClick={() => {
              setSelectedSection('All');
              setSearchQuery('');
              setSortBy('featured');
            }}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold uppercase tracking-wider text-xs shadow-md transition-all cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-20">
          {sectionGroups.map((section, sIdx) => {
            const Icon = section.icon;
            return (
              <section
                key={section.id}
                id={`section-${section.id}`}
                className="space-y-8 scroll-mt-48 pt-4"
              >
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-5">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-amber-400">
                        SECTION 0{sIdx + 1} • {section.category.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {section.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-2xl leading-relaxed">
                      {section.tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/15 text-xs font-mono font-bold text-amber-300">
                      {section.products.length} Curated Pieces
                    </span>
                  </div>
                </div>

                {/* Section Product Grid (at least 10 or more items) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                  {section.products.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
