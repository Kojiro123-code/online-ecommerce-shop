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
  Facebook,
  Instagram,
  Globe
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
  const [isHovered, setIsHovered] = useState(false);
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

  // Autoplay every 5 seconds when not hovered
  useEffect(() => {
    if (isHovered || totalSlides <= 1) return;

    const timer = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered, totalSlides, goToNext]);

  if (!sliderProducts || sliderProducts.length === 0) return null;

  const current = sliderProducts[currentIndex];
  const watermarkText = getProductWatermark(current);

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(current, 1);
    router.push('/checkout');
  };

  return (
    <section
      aria-label="Product Showcase Slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#171442] via-[#1d2b6b] to-[#127bb5] text-white p-6 sm:p-8 lg:p-10 shadow-2xl min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] flex flex-col justify-between transition-all select-none"
    >
      {/* 1. TOP HEADER BAR */}
      <div className="relative z-20 flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wider pb-4">
        {/* Brand / Section Label */}
        <Link
          href="/"
          className="font-black tracking-[0.25em] text-white hover:text-cyan-300 transition-colors uppercase text-sm sm:text-base flex items-center gap-2"
        >
          <span>SPOTLIGHT</span>
        </Link>

        {/* Subtitle / Center Label */}
        <div className="hidden sm:block text-[11px] sm:text-xs tracking-[0.25em] uppercase font-bold text-white/80">
          CURATED PRODUCT SHOWCASE
        </div>

        {/* Social Icons & Cart */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden md:flex items-center gap-3.5 text-white/70">
            <a href="#catalog" className="hover:text-white transition-colors" title="Facebook">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a href="#catalog" className="hover:text-white transition-colors" title="Instagram">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="#catalog" className="hover:text-white transition-colors" title="Web">
              <Globe className="w-3.5 h-3.5" />
            </a>
          </div>

          <Link
            href="/cart"
            className="text-xs font-bold tracking-widest text-white hover:text-cyan-300 transition-colors flex items-center gap-1.5"
          >
            <span>CART ({itemCount})</span>
          </Link>
        </div>
      </div>

      {/* 2. SIDE CIRCULAR ARCS & MINIMALIST ARROWS (Matching Screenshot) */}
      {/* Left Circular Arc & Thin Arrow */}
      <div className="absolute -left-28 sm:-left-36 top-1/2 -translate-y-1/2 w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-white/20 pointer-events-none z-10" />
      <button
        onClick={goToPrev}
        aria-label="Previous product"
        className="absolute left-4 sm:left-8 lg:left-10 top-1/2 -translate-y-1/2 z-30 text-white/80 hover:text-white transition-all cursor-pointer group p-2 focus:outline-hidden"
      >
        <ArrowLeft className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.2] group-hover:-translate-x-1.5 transition-transform" />
      </button>

      {/* Right Circular Arc & Thin Arrow */}
      <div className="absolute -right-28 sm:-right-36 top-1/2 -translate-y-1/2 w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-white/20 pointer-events-none z-10" />
      <button
        onClick={goToNext}
        aria-label="Next product"
        className="absolute right-4 sm:right-8 lg:right-10 top-1/2 -translate-y-1/2 z-30 text-white/80 hover:text-white transition-all cursor-pointer group p-2 focus:outline-hidden"
      >
        <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.2] group-hover:translate-x-1.5 transition-transform" />
      </button>

      {/* 3. CENTER 3D FLOATING STAGE: GIANT WATERMARK + FLOATING PRODUCT + SHADOW */}
      <div className="relative my-auto py-6 sm:py-8 flex flex-col items-center justify-center">
        {/* Giant Centered Background Typographic Watermark (Matching "SHISHIDO") */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <h1
            className={`text-6xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[160px] font-black tracking-[0.22em] text-white uppercase text-center select-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)] transition-all duration-300 ${
              fadeState === 'transitioning' ? 'opacity-0 scale-95' : 'opacity-95 scale-100'
            }`}
          >
            {watermarkText}
          </h1>
        </div>

        {/* Floating Product Image with Dynamic Soft Ground Shadow */}
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
            <div className="w-72 sm:w-96 md:w-[440px] lg:w-[500px] aspect-4/3 flex items-center justify-center animate-hero-float">
              <ProductImage
                key={current.id}
                src={current.image}
                fallbackSrc={current.fallbackImage}
                alt={current.name}
                category={current.category}
                containerClassName="bg-transparent"
                className="w-full h-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)] group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Realistic Floating Drop Shadow onto the surface */}
            <div className="w-56 sm:w-72 md:w-80 h-7 bg-black/60 blur-xl rounded-full mx-auto -mt-6 sm:-mt-8 animate-shadow-pulse pointer-events-none" />
          </Link>
        </div>
      </div>

      {/* 4. BOTTOM BAR: PRICE, RATING, DESCRIPTION ON LEFT; BUY NOW ON RIGHT */}
      <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pt-4">
        {/* Left Side: Price, 5-Stars, Description */}
        <div
          className={`space-y-1.5 transition-all duration-300 ${
            fadeState === 'transitioning' ? 'opacity-0 -translate-x-2' : 'opacity-100 translate-x-0'
          }`}
        >
          {/* Price */}
          <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            ${current.price.toFixed(0)}
          </div>

          {/* Rating Stars (5 White Stars) */}
          <div className="flex items-center gap-1 text-white">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
            ))}
          </div>

          {/* Description Text */}
          <p className="text-xs sm:text-sm text-white/80 max-w-sm sm:max-w-md line-clamp-2 leading-relaxed pt-0.5">
            {current.description}
          </p>
        </div>

        {/* Right Side: BUY NOW Button (Exact styling from screenshot) */}
        <div className="self-end sm:self-auto">
          <button
            onClick={handleBuyNow}
            className="text-white hover:text-cyan-300 font-black tracking-[0.25em] text-sm sm:text-base uppercase transition-colors cursor-pointer py-2 focus:outline-hidden"
          >
            BUY NOW
          </button>
        </div>
      </div>

      {/* Minimalist Slide Navigation Dots at bottom center */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {sliderProducts.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all rounded-full cursor-pointer ${
              currentIndex === idx
                ? 'w-6 h-1.5 bg-cyan-300 shadow-sm'
                : 'w-1.5 h-1.5 bg-white/35 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
