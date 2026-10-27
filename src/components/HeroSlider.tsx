'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Link from 'next/link';
import { Product } from '../types';
import ProductImage from './ProductImage';
import AddToCartButton from './AddToCartButton';
import {
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Pause,
  Play,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Sliders,
  FileText
} from 'lucide-react';

interface HeroSliderProps {
  products: Product[];
}

export default function HeroSlider({ products }: HeroSliderProps) {
  // Select a curated lineup of standout different products across multiple categories
  const featuredIds = useMemo(
    () => ['prod-011', 'prod-001', 'prod-015', 'prod-017', 'prod-014', 'prod-003', 'prod-018', 'prod-002'],
    []
  );

  const sliderProducts = useMemo(() => {
    if (!products || products.length === 0) return [];
    const selected = featuredIds
      .map(id => products.find(p => p.id === id))
      .filter((p): p is Product => Boolean(p));

    // Fallback to initial products if matching IDs aren't sufficient
    if (selected.length >= 3) return selected;
    return products.slice(0, 8);
  }, [products, featuredIds]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const totalSlides = sliderProducts.length;

  const goToNext = useCallback(() => {
    if (totalSlides <= 1) return;
    setCurrentIndex(prev => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    if (totalSlides <= 1) return;
    setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToIndex = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentIndex(index);
    }
  };

  // Autoplay timer: advances slide every 5 seconds when not paused and not hovered
  useEffect(() => {
    if (isPaused || isHovered || totalSlides <= 1) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, isHovered, totalSlides, goToNext]);

  // Touch Swipe Handlers for mobile & tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50; // px

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next slide
      goToNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Prev slide
      goToPrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  if (!sliderProducts || sliderProducts.length === 0) return null;

  const activeProduct = sliderProducts[currentIndex];

  return (
    <section
      aria-label="Featured Products Image Slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-slate-50 to-teal-50/40 border border-slate-200/90 shadow-md p-4 sm:p-6 lg:p-8 transition-all"
    >
      {/* Top Slider Navigation & Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200/80">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-100/90 text-teal-800 border border-teal-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            <span>Featured Spotlight Slider</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-200 shadow-xs">
            <Sliders className="w-3.5 h-3.5 text-teal-600" />
            <span>
              Product {currentIndex + 1} of {totalSlides}
            </span>
          </span>
          <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium text-slate-500 bg-slate-100">
            Swipe or use arrows to explore different products
          </span>
        </div>

        {/* Play/Pause & Left/Right Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors flex items-center gap-1.5 text-xs font-semibold shadow-xs cursor-pointer"
            title={isPaused ? 'Resume auto-slider' : 'Pause auto-slider'}
          >
            {isPaused ? (
              <>
                <Play className="w-3.5 h-3.5 text-teal-600 fill-teal-600" />
                <span className="hidden sm:inline">Resume Auto</span>
              </>
            ) : (
              <>
                <Pause className="w-3.5 h-3.5 text-slate-600" />
                <span className="hidden sm:inline">Pause</span>
              </>
            )}
          </button>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={goToPrev}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-700 flex items-center justify-center text-slate-700 shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goToNext}
              aria-label="Next slide"
              className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-700 flex items-center justify-center text-slate-700 shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Sliding Carousel Track */}
      <div
        className="relative overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {sliderProducts.map((product, slideIdx) => {
            const savings = product.originalPrice ? product.originalPrice - product.price : 0;
            const savingsPercent = product.originalPrice
              ? Math.round((savings / product.originalPrice) * 100)
              : 0;

            return (
              <div
                key={product.id}
                className="w-full flex-shrink-0 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center px-1 py-2"
                aria-hidden={slideIdx !== currentIndex}
              >
                {/* Left Column: Product Information */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Category, Rating, Stock Status */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-bold text-teal-800 uppercase tracking-wider bg-teal-100/90 px-3 py-1 rounded-lg border border-teal-200">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200 font-medium">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-slate-900">{product.rating}</span>
                      <span className="text-slate-500">({product.reviewCount} reviews)</span>
                    </div>
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${
                        product.inStock
                          ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                          : 'text-rose-700 bg-rose-50 border-rose-200'
                      }`}
                    >
                      ● {product.inStock ? `In Stock (${product.stockCount} left)` : 'Out of Stock'}
                    </span>
                  </div>

                  {/* Product Title */}
                  <Link href={`/products/${product.id}`} className="group block">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-teal-600 transition-colors">
                      {product.name}
                    </h2>
                  </Link>

                  {/* Product Tagline */}
                  <p className="text-sm sm:text-base font-semibold text-teal-800 leading-snug">
                    {product.tagline}
                  </p>

                  {/* Product Description Box with Info */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                      <span>Product Overview & Details</span>
                      <span className="text-teal-600 font-semibold lowercase">SKU: {product.id}</span>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    {/* Key Feature Highlights */}
                    {product.features && product.features.length > 0 && (
                      <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                        {product.features.slice(0, 2).map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Price Section & Action Buttons */}
                  <div className="pt-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-3xl sm:text-4xl font-black text-slate-900">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-base text-slate-400 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      {product.originalPrice && (
                        <div className="flex items-center gap-2 text-xs">
                          <span className="px-2 py-0.5 rounded-md font-bold bg-rose-50 text-rose-600 border border-rose-200">
                            Save ${savings.toFixed(0)} ({savingsPercent}% OFF)
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <div className="flex-1 sm:flex-initial">
                        <AddToCartButton product={product} size="md" />
                      </div>
                      <Link
                        href={`/products/${product.id}`}
                        className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-300 transition-all flex items-center gap-1.5 shrink-0 shadow-xs"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Guarantee & Perks Strip */}
                  <div className="pt-3 border-t border-slate-200/70 flex flex-wrap items-center gap-4 text-xs text-slate-600 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-teal-600" /> Free Global Shipping over $150
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 2-Year Official Warranty
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-amber-600" /> Instant HTML Invoice
                    </span>
                  </div>
                </div>

                {/* Right Column: Prominent Product Image Showcase */}
                <div className="lg:col-span-5">
                  <Link
                    href={`/products/${product.id}`}
                    className="group block relative rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-teal-400 transition-all p-3"
                  >
                    <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center">
                      <ProductImage
                        src={product.image}
                        fallbackSrc={product.fallbackImage}
                        alt={product.name}
                        category={product.category}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />

                      {/* Floating Overlay Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-slate-900/85 backdrop-blur-md text-white shadow-xs">
                          {product.category}
                        </span>
                        {product.originalPrice && (
                          <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-rose-500 text-white shadow-xs">
                            SAVE ${(product.originalPrice - product.price).toFixed(0)}
                          </span>
                        )}
                      </div>

                      <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-semibold text-slate-200 border border-white/10 shadow-xs">
                        Item #{product.id}
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs px-1 text-slate-600">
                      <span className="font-medium text-slate-500">Click image for full specs</span>
                      <span className="font-bold text-teal-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Explore details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide Progress & Pagination Dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {sliderProducts.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => goToIndex(idx)}
            aria-label={`Go to slide ${idx + 1}: ${item.name}`}
            className={`transition-all rounded-full cursor-pointer ${
              currentIndex === idx
                ? 'w-8 h-2.5 bg-teal-600 shadow-xs'
                : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>

      {/* Interactive Thumbnail Carousel Strip: Showcase Different Products */}
      <div className="mt-6 pt-5 border-t border-slate-200/80">
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5 text-teal-600" />
            <span>Select Product from Slider ({sliderProducts.length} Different Items):</span>
          </div>
          <span className="text-xs text-slate-500 hidden sm:inline">
            Click any item to view its image and specifications
          </span>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-200">
          {sliderProducts.map((item, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => goToIndex(idx)}
                className={`group flex items-center gap-3 p-2 rounded-2xl border text-left transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-white border-teal-500 ring-2 ring-teal-500/20 shadow-sm'
                    : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300'
                }`}
                style={{ width: '220px' }}
                title={item.name}
              >
                {/* Product Thumbnail Image */}
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/70 relative">
                  <ProductImage
                    src={item.image}
                    fallbackSrc={item.fallbackImage}
                    alt={item.name}
                    category={item.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-teal-600/10 border-2 border-teal-500 rounded-xl pointer-events-none" />
                  )}
                </div>

                {/* Info Text */}
                <div className="flex-1 min-w-0 pr-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 block truncate">
                    {item.category}
                  </span>
                  <p
                    className={`text-xs font-bold truncate ${
                      isActive ? 'text-teal-900' : 'text-slate-800'
                    }`}
                  >
                    {item.name}
                  </p>
                  <span className="text-xs font-extrabold text-slate-900 mt-0.5 block">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
