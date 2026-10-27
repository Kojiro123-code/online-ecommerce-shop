import React from 'react';
import Link from 'next/link';
import { Product } from '../types';
import AddToCartButton from './AddToCartButton';
import ProductImage from './ProductImage';
import { Star, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative flex flex-col h-full rounded-[2rem] bg-zinc-900/60 backdrop-blur-md border border-white/10 hover:border-amber-400/50 shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(245,158,11,0.08)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden">
      {/* Product Image & Link */}
      <Link
        href={`/products/${product.id}`}
        className="relative w-full aspect-4/3 overflow-hidden bg-zinc-950 block shrink-0"
      >
        <ProductImage
          src={product.image}
          fallbackSrc={product.fallbackImage}
          alt={product.name}
          category={product.category}
          containerClassName="w-full h-full absolute inset-0 overflow-hidden bg-zinc-950"
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        />
        
        {/* Subtle Vignette Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

        {/* Category & Sale Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
          <span className="px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full bg-black/70 backdrop-blur-md text-zinc-300 border border-white/15">
            {product.category}
          </span>
          {product.originalPrice && (
            <span className="px-2.5 py-1 text-[10px] font-extrabold tracking-wider uppercase rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-xs">
              SAVE ${(product.originalPrice - product.price).toFixed(0)}
            </span>
          )}
        </div>

        {/* Piece ID Tag */}
        <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-zinc-400 border border-white/10">
          REF. {product.id.toUpperCase()}
        </div>
      </Link>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Rating & Availability */}
        <div className="flex items-center justify-between text-xs mb-2.5">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <span className="font-bold text-white">{product.rating}</span>
            <span className="text-zinc-500 text-[11px]">({product.reviewCount})</span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-zinc-400">
            <span className={`w-1.5 h-1.5 rounded-full ${product.stockCount < 15 ? 'bg-amber-400' : 'bg-emerald-400'} animate-pulse`} />
            {product.stockCount} in stock
          </span>
        </div>

        {/* Title & Description */}
        <Link href={`/products/${product.id}`} className="group-hover:text-amber-300 transition-colors">
          <h3 className="font-bold text-white line-clamp-1 text-lg tracking-tight" title={product.name}>
            {product.name}
          </h3>
        </Link>
        <p
          className="text-xs text-zinc-400 line-clamp-2 mt-1.5 mb-5 h-10 font-light leading-relaxed overflow-hidden"
          title={product.description || product.tagline}
        >
          {product.description || product.tagline}
        </p>

        {/* Price & Actions */}
        <div className="pt-3.5 border-t border-white/10 flex items-center justify-between gap-2 mt-auto">
          <div className="flex flex-col justify-center min-w-0 shrink-0">
            <span className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight leading-none">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-[10px] sm:text-[11px] text-zinc-500 line-through font-mono leading-none mt-1">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <Link
              href={`/products/${product.id}`}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-all border border-transparent hover:border-white/15 shrink-0"
              title="Inspect Details"
              aria-label={`Inspect ${product.name}`}
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
            <AddToCartButton product={product} size="sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
