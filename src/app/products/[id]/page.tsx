import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getProductById, getRelatedProducts } from '../../../data/products';
import AddToCartButton from '../../../components/AddToCartButton';
import ProductCard from '../../../components/ProductCard';
import ProductImage from '../../../components/ProductImage';
import { Star, ShieldCheck, Truck, RotateCcw, ArrowLeft, Check, Sparkles } from 'lucide-react';

interface Props {
  params: {
    id: string;
  };
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductById(params.id);
  if (!product) {
    return { title: 'Piece Not Found | Online Luxury Atelier' };
  }
  return {
    title: `${product.name} | Online Luxury Atelier`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  return (
    <div className="space-y-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-widest text-[10px] font-bold">
        <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Archive</span>
        </Link>
        <span>/</span>
        <Link href="/#catalog" className="hover:text-amber-400 transition-colors">
          Permanent Collection
        </Link>
        <span>/</span>
        <span className="text-zinc-400">{product.category}</span>
        <span>/</span>
        <span className="text-white truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Product Image Gallery Column */}
        <div className="lg:col-span-6 space-y-5">
          <div className="relative aspect-4/3 rounded-[2.5rem] overflow-hidden bg-zinc-950 border border-white/15 shadow-2xl group">
            <ProductImage
              src={product.image}
              fallbackSrc={product.fallbackImage}
              alt={product.name}
              category={product.category}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

            <div className="absolute top-5 left-5 flex gap-2">
              <span className="px-3.5 py-1 text-[10px] font-bold tracking-[0.25em] uppercase rounded-full bg-black/70 backdrop-blur-md text-zinc-200 border border-white/15">
                {product.category}
              </span>
              {product.originalPrice && (
                <span className="px-3 py-1 text-[10px] font-extrabold uppercase rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-xs">
                  SAVE ${(product.originalPrice - product.price).toFixed(0)}
                </span>
              )}
            </div>

            <div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[10px] font-mono text-zinc-400 border border-white/10">
              SERIAL: REF.{product.id.toUpperCase()}
            </div>
          </div>

          {/* Value Props Strip */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="bg-zinc-900/50 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center text-xs">
              <Truck className="w-5 h-5 mx-auto text-amber-400 mb-1.5" />
              <span className="font-serif font-bold text-white block">White-Glove</span>
              <span className="text-[10px] text-zinc-400 font-light">Complimentary courier</span>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center text-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
              <span className="font-serif font-bold text-white block">3-Yr Warranty</span>
              <span className="text-[10px] text-zinc-400 font-light">Maison certification</span>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center text-xs">
              <Sparkles className="w-5 h-5 text-amber-300 mx-auto mb-1.5" />
              <span className="font-serif font-bold text-white block">HTML Deed</span>
              <span className="text-[10px] text-zinc-400 font-light">Instant verified receipt</span>
            </div>
          </div>
        </div>

        {/* Product Details & Purchase Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[10px] font-bold text-amber-400 uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ATELIER EDITION • PIECE #{product.id.toUpperCase()}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              {product.name}
            </h1>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
              {product.tagline}
            </p>

            {/* Rating & Stock */}
            <div className="flex items-center gap-4 pt-1">
              <div className="flex items-center gap-2 bg-zinc-900/80 border border-white/10 px-3.5 py-1.5 rounded-xl">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-sm text-white font-mono">{product.rating}</span>
                <span className="text-xs text-zinc-400 font-light">({product.reviewCount} client evaluations)</span>
              </div>

              <span
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-xl border flex items-center gap-1.5 ${
                  product.inStock
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {product.inStock ? `${product.stockCount} Pieces Available` : 'Archived / Out of Stock'}
              </span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="p-5 rounded-3xl bg-zinc-900/60 backdrop-blur-md border border-white/10 shadow-xl flex items-baseline gap-4">
            <span className="text-3xl sm:text-4xl font-bold font-mono text-white">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-base text-zinc-500 line-through font-mono">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-xs text-zinc-400 ml-auto font-light">
              Taxes calculated at acquisition
            </span>
          </div>

          {/* Add to Cart Section */}
          <div className="p-6 rounded-3xl bg-zinc-900/80 backdrop-blur-md border border-amber-400/30 space-y-4 shadow-[0_0_30px_rgba(245,158,11,0.06)]">
            <div className="flex items-center justify-between text-xs text-zinc-400 uppercase tracking-wider font-semibold">
              <span>Select Quantity & Acquire</span>
              <span className="text-amber-400 flex items-center gap-1 font-mono">
                <Sparkles className="w-3 h-3" />
                SSR Instant Checkout
              </span>
            </div>
            <AddToCartButton product={product} showQuantity={true} size="lg" fullWidth={true} />
          </div>

          {/* Description */}
          <div className="space-y-3 pt-2">
            <h3 className="font-serif text-lg font-bold text-white">Maison Overview</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
              {product.description}
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="space-y-3 pt-2">
            <h3 className="font-serif text-lg font-bold text-white">Artisan Highlights</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-light">
                  <div className="w-4 h-4 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specifications */}
          <div className="space-y-3 pt-2">
            <h3 className="font-serif text-lg font-bold text-white">Atelier Technical Specifications</h3>
            <div className="border border-white/10 rounded-2xl overflow-hidden text-xs divide-y divide-white/5">
              {Object.entries(product.specs).map(([key, val], idx) => (
                <div
                  key={key}
                  className={`grid grid-cols-2 p-3.5 ${
                    idx % 2 === 0 ? 'bg-zinc-950/60' : 'bg-zinc-900/60'
                  }`}
                >
                  <span className="font-medium text-zinc-400">{key}</span>
                  <span className="font-mono text-white">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="pt-12 border-t border-white/10 space-y-8">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400">
            COMPLEMENTARY ARCHIVE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Complementary Atelier Creations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
