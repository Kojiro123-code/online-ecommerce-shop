'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Product } from '../types';
import ProductImage from './ProductImage';
import AddToCartButton from './AddToCartButton';
import { Star, ArrowRight, ChevronLeft, ChevronRight, Sparkles, Pause, Play, ShieldCheck, Truck } from 'lucide-react';

interface HeroSliderProps {
  products: Product[];
}

export default function HeroSlider({ products }: { products: Product[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fade, setFade] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Transition to a specific index with a brief smooth fade
  const goToIndex = useCallback((newIndex: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(true);
    }, 180);
  }, []);

  // Pick a random next product
  const nextRandomProduct = useCallback(() => {
    if (products.length <= 1) return;
    let next = Math.floor(Math.random() * products.length);
    while (next === currentIndex) {
      next = Math.floor(Math.random() * products.length);
    }
    goToIndex(next);
  }, [products.length, currentIndex, goToIndex]);

  // Previous product in sequence
  const prevProduct = () => {
    const prev = (currentIndex - 1 + products.length) % products.length;
    goToIndex(prev);
  };

  // Next product (or random)
  const nextProduct = () => {
    nextRandomProduct();
  };

  // Auto-slide effect every 4.5 seconds when not paused
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextRandomProduct();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextRandomProduct]);

  if (!products || products.length === 0) return null;

  const current = products[currentIndex];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-slate-50 to-teal-50/50 border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10 transition-all"
    >
      {/* Top Banner Status Bar */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200/70">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800 border border-teal-200">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            <span>Featured Product Spotlight</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
            Item {currentIndex + 1} of {products.length}
          </span>
        </div>

        {/* Auto-Slide Controls */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1.5 rounded-lg hover:bg-slate-200/70 text-slate-600 transition-colors flex items-center gap-1 text-[11px]"
            title={isPaused ? 'Resume auto-slider' : 'Pause auto-slider'}
          >
            {isPaused ? (
              <>
                <Play className="w-3.5 h-3.5 text-teal-600" />
                <span className="hidden sm:inline">Paused</span>
              </>
            ) : (
              <>
                <Pause className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden sm:inline">Auto-Sliding</span>
              </>
            )}
          </button>

          {/* Prev / Next navigation arrows */}
          <div className="flex items-center gap-1 pl-1">
            <button
              onClick={prevProduct}
              aria-label="Previous product"
              className="w-8 h-8 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-700 shadow-xs transition-all active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextProduct}
              aria-label="Next random product"
              className="w-8 h-8 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-700 shadow-xs transition-all active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Slider Content Grid */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-all duration-300 ${
          fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
        }`}
      >
        {/* Product Details & Description (Placed right near the product) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Category & Rating */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200">
              {current.category}
            </span>
            <div className="flex items-center gap-1 text-xs text-slate-600 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-slate-800">{current.rating}</span>
              <span className="text-slate-500">({current.reviewCount} reviews)</span>
            </div>
            <span className="text-xs font-semibold text-emerald-700 ml-auto sm:ml-0">
              ● In Stock ({current.stockCount} left)
            </span>
          </div>

          {/* Product Title */}
          <Link
            href={`/products/${current.id}`}
            className="group block"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-teal-600 transition-colors">
              {current.name}
            </h2>
          </Link>

          {/* Product Tagline */}
          <p className="text-sm sm:text-base font-semibold text-teal-800">
            {current.tagline}
          </p>

          {/* Product Description right near the product */}
          <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Product Overview & Specifications
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-4">
              {current.description}
            </p>
          </div>

          {/* Price & Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-slate-900">
                ${current.price.toFixed(2)}
              </span>
              {current.originalPrice && (
                <span className="text-base text-slate-400 line-through">
                  ${current.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="flex-1 sm:flex-initial">
                <AddToCartButton product={current} size="md" />
              </div>
              <Link
                href={`/products/${current.id}`}
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-300 transition-all flex items-center gap-1.5 shrink-0 shadow-xs"
              >
                <span>Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Fast perks strip */}
          <div className="pt-3 border-t border-slate-200/70 flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-teal-600" /> Free Shipping over $150
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 2-Year Official Warranty
            </span>
            <span className="text-slate-400 text-[11px] ml-auto">
              Hover to pause slider
            </span>
          </div>
        </div>

        {/* Product Visual Container */}
        <div className="lg:col-span-5">
          <Link
            href={`/products/${current.id}`}
            className="group block relative rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-teal-400 transition-all p-3"
          >
            <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 rounded-xl overflow-hidden bg-slate-100">
              <ProductImage
                src={current.image}
                fallbackSrc={current.fallbackImage}
                alt={current.name}
                category={current.category}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex gap-1.5">
                <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-slate-900/80 backdrop-blur-md text-white shadow-xs">
                  {current.category}
                </span>
                {current.originalPrice && (
                  <span className="px-2 py-1 text-[11px] font-bold rounded-full bg-rose-500 text-white shadow-xs">
                    SAVE ${(current.originalPrice - current.price).toFixed(0)}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs px-1">
              <span className="text-slate-500">Click image to open product page</span>
              <span className="font-semibold text-teal-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>View Full Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Thumbnail Selector Bar (allows 1-click jump to any product) */}
      <div className="mt-8 pt-5 border-t border-slate-200/70 flex items-center justify-between gap-4">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">
          Explore Items:
        </span>
        <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none w-full sm:w-auto">
          {products.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => goToIndex(idx)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                currentIndex === idx
                  ? 'bg-teal-600 text-white shadow-sm ring-2 ring-teal-500/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
              title={item.name}
            >
              <span>{idx + 1}.</span>
              <span className="truncate max-w-[90px]">{item.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
