import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getProductById, getRelatedProducts } from '../../../data/products';
import AddToCartButton from '../../../components/AddToCartButton';
import ProductCard from '../../../components/ProductCard';
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
    return { title: 'Product Not Found | AURA Store' };
  }
  return {
    title: `${product.name} | AURA Store (SSR)`,
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
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-teal-600 transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <span>/</span>
        <Link href="/" className="hover:text-teal-600 transition-colors">
          Catalog
        </Link>
        <span>/</span>
        <span className="text-slate-400">{product.category}</span>
        <span>/</span>
        <span className="font-semibold text-slate-800 truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Product Image Gallery Column */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-4/3 rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-sm group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-slate-900/80 backdrop-blur-md text-white">
                {product.category}
              </span>
              {product.originalPrice && (
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-rose-500 text-white shadow-xs">
                  SAVE ${(product.originalPrice - product.price).toFixed(0)}
                </span>
              )}
            </div>
          </div>

          {/* Value Props Strip */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="bg-white p-3 rounded-xl border border-slate-200/70 text-center text-xs">
              <Truck className="w-4 h-4 mx-auto text-teal-600 mb-1" />
              <span className="font-semibold text-slate-800 block">Fast Shipping</span>
              <span className="text-[10px] text-slate-400">2-3 day transit</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200/70 text-center text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
              <span className="font-semibold text-slate-800 block">2-Yr Warranty</span>
              <span className="text-[10px] text-slate-400">Direct support</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200/70 text-center text-xs">
              <RotateCcw className="w-4 h-4 text-blue-600 mx-auto mb-1" />
              <span className="font-semibold text-slate-800 block">30-Day Return</span>
              <span className="text-[10px] text-slate-400">Hassle-free refund</span>
            </div>
          </div>
        </div>

        {/* Product Details & Purchase Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-600 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{product.category} Series • Item #{product.id}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {product.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              {product.tagline}
            </p>

            {/* Rating & Stock */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1 rounded-xl">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-sm text-slate-800">{product.rating}</span>
                <span className="text-xs text-slate-500">({product.reviewCount} customer reviews)</span>
              </div>

              <span
                className={`text-xs font-semibold px-3 py-1 rounded-xl border ${
                  product.inStock
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-rose-50 text-rose-700 border-rose-200'
                }`}
              >
                {product.inStock ? `In Stock (${product.stockCount} units left)` : 'Out of Stock'}
              </span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-baseline gap-3">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-base text-slate-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-xs text-slate-500 ml-auto font-medium">
              Taxes calculated at checkout
            </span>
          </div>

          {/* Add to Cart Section */}
          <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-100/80 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
              <span>Select Quantity & Add to Cart</span>
              <span>Fast SSR Cart Sync</span>
            </div>
            <AddToCartButton product={product} showQuantity={true} size="lg" fullWidth={true} />
          </div>

          {/* Description */}
          <div className="space-y-3 pt-2">
            <h3 className="text-base font-bold text-slate-900">Product Overview</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="space-y-3 pt-2">
            <h3 className="text-base font-bold text-slate-900">Key Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specifications */}
          <div className="space-y-3 pt-2">
            <h3 className="text-base font-bold text-slate-900">Technical Specifications</h3>
            <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
              {Object.entries(product.specs).map(([key, val], idx) => (
                <div
                  key={key}
                  className={`grid grid-cols-2 p-3 ${
                    idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'
                  }`}
                >
                  <span className="font-semibold text-slate-600">{key}</span>
                  <span className="text-slate-900">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="pt-8 border-t border-slate-200 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            More From Our Curated Collection
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Other high-performance items in the 10-piece sample dataset
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
