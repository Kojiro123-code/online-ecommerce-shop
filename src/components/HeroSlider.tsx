'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Product } from '../types';
import ProductImage from './ProductImage';
import { useCart } from '../context/CartContext';
import {
  Star,
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Pause,
  Play
} from 'lucide-react';

interface HeroSliderProps {
  products: Product[];
}

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

  // Curated flagship lineup
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
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [fadeState, setFadeState] = useState<'idle' | 'transitioning'>('idle');

  const totalSlides = sliderProducts.length;

  const goToSlide = useCallback(
    (newIndex: number) => {
      if (newIndex === currentIndex || totalSlides <= 1) return;
      setFadeState('transitioning');
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setFadeState('idle');
      }, 160);
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

  // Autoplay every 5.5 seconds
  useEffect(() => {
    if (isHovered || isPaused || totalSlides <= 1) return;

    const timer = setInterval(() => {
      goToNext();
    }, 5500);

    return () => clearInterval(timer);
  }, [isHovered, isPaused, totalSlides, goToNext]);

  if (!sliderProducts || sliderProducts.length === 0) return null;

  const current = sliderProducts[currentIndex];
  const watermarkText = getProductWatermark(current);

  const handleAcquire = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(current, 1);
    router.push('/checkout');
  };

  return (
    <section
      aria-label="Flagship Luxury Showcase Slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#13131a] via-[#0d0d12] to-[#070709] text-white p-6 sm:p-10 lg:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.85)] border border-white/10 min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex flex-col justify-between transition-all select-none group"
    >
      {/* Ambient Radial Golden Aura behind the floating product */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[700px] h-[350px] sm:h-[450px] bg-amber-500/10 rounded-full blur-[110px] pointer-events-none" />

      {/* 1. TOP HEADER BAR */}
      <div className="relative z-20 flex items-center justify-between text-xs font-semibold tracking-[0.2em] uppercase pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-[11px] font-bold">
            <Sparkles className="w-3 h-3 text-amber-400" />
            FLAGSHIP ATELIER SPOTLIGHT
          </span>
          <span className="hidden sm:inline text-zinc-500">|</span>
          <span className="hidden sm:inline text-zinc-400 text-[11px]">
            PIECE {currentIndex + 1} OF {totalSlides}
          </span>
        </div>

        {/* Autoplay Pause / Play Control */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-all flex items-center gap-1.5 text-[11px] font-semibold cursor-pointer"
            title={isPaused ? 'Resume auto-slider' : 'Pause auto-slider'}
          >
            {isPaused ? (
              <>
                <Play className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>RESUME</span>
              </>
            ) : (
              <>
                <Pause className="w-3 h-3 text-zinc-400" />
                <span>PAUSE</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. SIDE MINIMALIST LUXURY NAVIGATION ARROWS */}
      <button
        onClick={goToPrev}
        aria-label="Previous product"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/15 bg-black/40 backdrop-blur-md text-zinc-300 hover:text-amber-400 hover:border-amber-400/60 hover:bg-black/70 transition-all flex items-center justify-center cursor-pointer group focus:outline-hidden"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={goToNext}
        aria-label="Next product"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/15 bg-black/40 backdrop-blur-md text-zinc-300 hover:text-amber-400 hover:border-amber-400/60 hover:bg-black/70 transition-all flex items-center justify-center cursor-pointer group focus:outline-hidden"
      >
        <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* 3. CENTER 3D FLOATING LUXURY STAGE */}
      <div className="relative my-auto py-6 sm:py-10 flex flex-col items-center justify-center">
        {/* Giant Centered Typographic Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <h1
            className={`text-6xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[160px] font-black tracking-[0.25em] text-white/5 uppercase text-center select-none transition-all duration-500 ${
              fadeState === 'transitioning' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            {watermarkText}
          </h1>
        </div>

        {/* Floating Showcase Card with Real Photography */}
        <div
          className={`relative z-10 flex flex-col items-center justify-center transition-all duration-300 ${
            fadeState === 'transitioning' ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
          }`}
        >
          <Link
            href={`/products/${current.id}`}
            className="block relative group focus:outline-hidden"
            title={`View details for ${current.name}`}
          >
            <div className="w-72 sm:w-96 md:w-[460px] lg:w-[500px] aspect-4/3 flex items-center justify-center animate-hero-float rounded-[2rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.9)] border border-white/20 bg-zinc-900/60 backdrop-blur-md p-1 group-hover:border-amber-400/60 transition-all duration-500">
              <ProductImage
                key={current.id}
                src={current.image}
                fallbackSrc={current.fallbackImage}
                alt={current.name}
                category={current.category}
                containerClassName="bg-zinc-950 w-full h-full rounded-[1.75rem] overflow-hidden"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Realistic Floating Drop Shadow onto the surface */}
            <div className="w-56 sm:w-72 md:w-80 h-7 bg-black/80 blur-xl rounded-full mx-auto -mt-6 sm:-mt-8 animate-shadow-pulse pointer-events-none" />
          </Link>
        </div>
      </div>

      {/* 4. BOTTOM BAR: PRICE, RATING, SPECS & ACQUIRE BUTTON */}
      <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 pt-4 border-t border-white/10">
        {/* Left Side: Product Details & Pricing */}
        <div
          className={`space-y-2 transition-all duration-300 ${
            fadeState === 'transitioning' ? 'opacity-0 -translate-x-2' : 'opacity-100 translate-x-0'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold tracking-[0.25em] text-amber-400 uppercase">
              {current.category}
            </span>
            <span className="text-zinc-600">•</span>
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-semibold text-zinc-300 ml-1.5">
                {current.rating} ({current.reviewCount} client evaluations)
              </span>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            {current.name}
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-sm sm:max-w-xl line-clamp-2 leading-relaxed font-light">
            {current.description}
          </p>

          <div className="flex items-baseline gap-3 pt-1">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              ${current.price.toFixed(2)}
            </span>
            {current.originalPrice && (
              <span className="text-sm text-zinc-500 line-through font-mono">
                ${current.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              {current.stockCount} Pieces Available
            </span>
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Link
            href={`/products/${current.id}`}
            className="flex-1 sm:flex-initial px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-bold uppercase tracking-[0.2em] transition-all text-center"
          >
            Specifications
          </Link>

          <button
            onClick={handleAcquire}
            className="flex-1 sm:flex-initial px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold uppercase tracking-[0.2em] text-xs shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] active:scale-95 transition-all cursor-pointer"
          >
            Acquire Piece
          </button>
        </div>
      </div>

      {/* Slide Navigation Bars at bottom center */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {sliderProducts.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all rounded-full cursor-pointer ${
              currentIndex === idx
                ? 'w-8 h-1.5 bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                : 'w-2 h-1.5 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
