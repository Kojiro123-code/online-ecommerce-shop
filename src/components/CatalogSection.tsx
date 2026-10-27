'use client';

import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import { Search, SlidersHorizontal, Sparkles, Filter } from 'lucide-react';

export default function CatalogSection({ initialProducts }: { initialProducts: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  const categories = ['All', 'Audio', 'Wearables', 'Workspace', 'Photography', 'Accessories'];

  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter(product => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesSearch =
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // featured order
      });
  }, [initialProducts, selectedCategory, searchQuery, sortBy]);

  return (
    <div id="sample-data" className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="bg-zinc-900/60 backdrop-blur-xl rounded-[2rem] border border-white/10 p-4 sm:p-6 shadow-xl flex flex-col lg:flex-row gap-5 items-center justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 w-full lg:w-auto">
          {categories.map(cat => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.25)]'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search input & Sort */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search archive..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-zinc-950/80 border border-white/10 text-white placeholder:text-zinc-500 text-xs focus:outline-hidden focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/60 transition-all font-medium"
            />
          </div>

          <div className="relative w-full sm:w-auto">
            <select
              value={sortBy}
              aria-label="Sort products by criteria"
              onChange={e => setSortBy(e.target.value as any)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-zinc-950/80 border border-white/10 text-zinc-300 text-xs font-semibold uppercase tracking-wider focus:outline-hidden focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/60 transition-all cursor-pointer"
            >
              <option value="featured">Featured Archive</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Client Evaluation</option>
            </select>
          </div>
        </div>
      </div>

      {/* Catalog Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-zinc-900/40 backdrop-blur-md rounded-[2.5rem] border border-white/10 p-16 text-center max-w-xl mx-auto shadow-xl">
          <Sparkles className="w-10 h-10 text-amber-400 mx-auto mb-4" />
          <h3 className="font-serif text-2xl font-bold text-white mb-2">No Archive Pieces Found</h3>
          <p className="text-xs text-zinc-400 mb-6 font-light">
            No items matched your current filter criteria. Reset your search to view all {initialProducts.length} curated atelier creations.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
              setSortBy('featured');
            }}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold uppercase tracking-wider text-xs shadow-md transition-all cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
