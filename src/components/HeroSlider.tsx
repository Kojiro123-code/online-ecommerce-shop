'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Product } from '../types';
import ProductImage from './ProductImage';
import { useCart } from '../context/CartContext';
import {
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Globe,
  Instagram,
  Facebook,
  Check,
  Pause,
  Play
} from 'lucide-react';

interface HeroSliderProps {
  products: Product[];
}

// Map each product to its giant centered 3D typographic watermark name
function getProductWatermark(product: Product): string {
  if (product.id === 'prod-019') return 'SHISHIDO';
  if (product.id === 'prod-011') return 'HORIZON';
  if (product.id === 'prod-001') return 'APEX PRO';
  if (product.id === 'prod-015') return 'AURA RING';
  if (product.id === 'prod-017') return 'AERODRONE';
  if (product.id === 'prod-014') return 'MAGDOCK';
  if (product.id === 'prod-003') return 'LUMINA';
  if (product.id === 'prod-018') return 'SONICSTREAM';
  if (product.id === 'prod-002') return 'CHRONO';
  return product.name.split(' ')[0].toUpperCase();
}

export default function HeroSlider({ products }: HeroSliderProps) {
  const router = useRouter();
  const { addToCart, itemCount } = useCart();

  // Curated lineup putting prod-019 (Shishido) first to match the user's reference design
  const featuredIds = useMemo(
    () => ['prod-019', 'prod-011', 'prod-001', 'prod-015', 'prod-017', 'prod-014', 'prod-003', 'prod-018'],
    []
  );

  const sliderProducts = useMemo(() => {
    if (!products || products.length === 0) return [];
    const selected = featuredIds
      .map(id => products.find(p => p.id === id))
      .filter((p): p is Product => Boolean(p));

    if (selected.length >= 2) return selected;
    return products.slice(0, 8);
  }, [products, featuredIds]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [addedNotice, setAddedNotice] = useState(false);
  const [fadeState, setFadeState] = useState<'idle' | 'transitioning'>('idle');

  const totalSlides = sliderProducts.length;

  const goToSlide = useCallback(
    (newIndex: number) => {
      if (newIndex === currentIndex || totalSlides <= 1) return;
      setFadeState('transitioning');
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setFadeState('idle');
      }, 180);
    },
    [currentIndex, totalSlides]
  );

  const goToNext = useCallback(() => {
    if (totalSlides <= 1) return;
    const nextIdx = (currentIndex + 1) % totalSlides;
    goToSlide(nextIdx);
  }, [currentIndex, totalSlides, goToSlide]);

  const goToPrev = useCallback(() => {
    if (totalSlides <= 1) return;
    const prevIdx = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(prevIdx);
  }, [currentIndex, totalSlides, goToSlide]);

  // Autoplay every 5 seconds when not paused and not hovered
  useEffect(() => {
    if (isPaused || isHovered || totalSlides <= 1) return;

    const timer = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, isHovered, totalSlides, goToNext]);

  if (!sliderProducts || sliderProducts.length === 0) return null;

  const current = sliderProducts[currentIndex];
  const watermarkText = getProductWatermark(current);

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(current, 1);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
      router.push('/checkout');
    }, 400);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(current, 1);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* The Master Floating Showcase Hero Container (matches the reference screenshot) */}
      <section
        aria-label="Product Showcase Slider"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#17133b] via-[#1d235e] to-[#146f9e] text-white p-6 sm:p-8 lg:p-10 shadow-2xl min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex flex-col justify-between transition-all select-none"
      >
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/15 via-transparent to-transparent pointer-events-none" />

        {/* 1. TOP HEADER BAR */}
        <div className="relative z-20 flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wider pb-4 border-b border-white/10">
          {/* Brand Logo */}
          <Link href="/" className="font-black tracking-[0.25em] text-white hover:text-cyan-300 transition-colors uppercase">
            FLOAT
          </Link>

          {/* Subtitle / Center Label */}
          <div className="hidden sm:block text-[11px] tracking-[0.22em] uppercase font-bold text-white/70">
            WOOCOMMERCE PRODUCT SLIDER
          </div>

          {/* Social Icons & Cart */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden md:flex items-center gap-3 text-white/60">
              <a href="#catalog" className="hover:text-white transition-colors" title="Catalog">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#catalog" className="hover:text-white transition-colors" title="Social">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#catalog" className="hover:text-white transition-colors" title="Browse">
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>

            <Link
              href="/cart"
              className="text-xs font-bold tracking-widest text-white hover:text-cyan-300 transition-colors flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full border border-white/15 backdrop-blur-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-cyan-300" />
              <span>CART ({itemCount})</span>
            </Link>
          </div>
        </div>

        {/* 2. SIDE CIRCULAR ARCS & NAVIGATION ARROWS */}
        {/* Left Circular Arc & Arrow Button */}
        <div className="absolute -left-20 sm:-left-28 top-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-white/15 pointer-events-none z-10" />
        <button
          onClick={goToPrev}
          aria-label="Previous product"
          className="absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white/75 hover:text-white hover:bg-white/10 transition-all cursor-pointer z-30 group active:scale-90"
        >
          <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform stroke-[1.5]" />
        </button>

        {/* Right Circular Arc & Arrow Button */}
        <div className="absolute -right-20 sm:-right-28 top-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-white/15 pointer-events-none z-10" />
        <button
          onClick={goToNext}
          aria-label="Next product"
          className="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white/75 hover:text-white hover:bg-white/10 transition-all cursor-pointer z-30 group active:scale-90"
        >
          <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform stroke-[1.5]" />
        </button>

        {/* 3. CENTER 3D STAGE: GIANT WATERMARK + FLOATING PRODUCT + SHADOW */}
        <div className="relative my-auto py-6 sm:py-10 flex flex-col items-center justify-center">
          {/* Giant Center Background Typographic Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <h1
              className={`text-5xl sm:text-7xl md:text-9xl lg:text-[135px] xl:text-[150px] font-black tracking-[0.2em] sm:tracking-[0.25em] text-white uppercase text-center select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] transition-all duration-300 ${
                fadeState === 'transitioning' ? 'opacity-0 scale-95' : 'opacity-95 scale-100'
              }`}
            >
              {watermarkText}
            </h1>
          </div>

          {/* Floating Product Image with Dynamic Ground Shadow */}
          <div
            className={`relative z-10 flex flex-col items-center justify-center transition-all duration-300 ${
              fadeState === 'transitioning' ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
            }`}
          >
            <Link
              href={`/products/${current.id}`}
              className="block relative group focus:outline-hidden"
              title={`View ${current.name}`}
            >
              <div className="w-64 sm:w-80 md:w-96 lg:w-[440px] aspect-4/3 flex items-center justify-center animate-hero-float">
                <ProductImage
                  key={current.id}
                  src={current.image}
                  fallbackSrc={current.fallbackImage}
                  alt={current.name}
                  category={current.category}
                  className="w-full h-full object-contain filter drop-shadow-[0_25px_30px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Realistic Floating Drop Shadow onto the surface */}
              <div className="w-48 sm:w-64 md:w-80 h-7 bg-black/60 blur-xl rounded-full mx-auto -mt-6 sm:-mt-8 animate-shadow-pulse pointer-events-none" />
            </Link>
          </div>
        </div>

        {/* 4. BOTTOM BAR: PRICE, RATING, DESCRIPTION ON LEFT; BUY NOW ON RIGHT */}
        <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-4 border-t border-white/10">
          {/* Left Side: Price, 5-Stars, Description */}
          <div
            className={`space-y-1.5 transition-all duration-300 ${
              fadeState === 'transitioning' ? 'opacity-0 -translate-x-2' : 'opacity-100 translate-x-0'
            }`}
          >
            {/* Price */}
            <div className="flex items-baseline gap-2.5">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                ${current.price.toFixed(0)}
              </span>
              {current.originalPrice && (
                <span className="text-sm sm:text-base text-white/50 line-through font-semibold">
                  ${current.originalPrice.toFixed(0)}
                </span>
              )}
            </div>

            {/* Rating Stars (5 Stars) */}
            <div className="flex items-center gap-1 text-white">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
              ))}
              <span className="text-xs text-white/70 ml-1.5 font-medium">
                ({current.rating} • {current.reviewCount} reviews)
              </span>
            </div>

            {/* Description Text */}
            <p className="text-xs sm:text-sm text-slate-200/90 max-w-sm sm:max-w-md line-clamp-2 leading-relaxed pt-0.5">
              {current.description}
            </p>
          </div>

          {/* Right Side: BUY NOW & Quick Add Actions */}
          <div className="flex items-center gap-4 self-end sm:self-auto">
            {/* Quick Add to Cart button */}
            <button
              onClick={handleQuickAdd}
              className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-wider uppercase border border-white/20 backdrop-blur-sm transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              {addedNotice ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>

            {/* BUY NOW Button (Exact styling from reference image) */}
            <button
              onClick={handleBuyNow}
              className="group text-white hover:text-cyan-300 font-black tracking-[0.2em] text-sm sm:text-base uppercase flex items-center gap-2 transition-all cursor-pointer py-2 px-1 focus:outline-hidden"
            >
              <span>BUY NOW</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Small Slide Controls in top right when hovering */}
        <div className="absolute bottom-3 right-1/2 translate-x-1/2 flex items-center gap-1.5 z-20">
          {sliderProducts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all rounded-full cursor-pointer ${
                currentIndex === idx
                  ? 'w-6 h-1.5 bg-cyan-300 shadow-sm'
                  : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Different Products Selector Bar: Allows one-click switching across all products */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-3 sm:p-4 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Explore Slider Lineup:
          </span>
          <span className="text-xs text-slate-400">
            ({currentIndex + 1} of {totalSlides} products)
          </span>
        </div>

        {/* Autoplay Pause / Play Toggle & Thumbnails */}
        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="px-2.5 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 shrink-0 cursor-pointer shadow-xs"
            title={isPaused ? 'Resume auto-slider' : 'Pause auto-slider'}
          >
            {isPaused ? (
              <>
                <Play className="w-3 h-3 text-teal-600 fill-teal-600" />
                <span>Play</span>
              </>
            ) : (
              <>
                <Pause className="w-3 h-3 text-slate-500" />
                <span>Pause</span>
              </>
            )}
          </button>

          {sliderProducts.map((item, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => goToSlide(idx)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-900 to-teal-800 text-white shadow-sm ring-2 ring-teal-500/30'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/60'
                }`}
                title={item.name}
              >
                <span className="truncate max-w-[120px]">
                  {getProductWatermark(item)}
                </span>
                <span className={isActive ? 'text-cyan-300' : 'text-slate-500'}>
                  ${item.price.toFixed(0)}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
