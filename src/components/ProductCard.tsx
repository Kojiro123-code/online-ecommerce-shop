import React from 'react';
import Link from 'next/link';
import { Product } from '../types';
import AddToCartButton from './AddToCartButton';
import { Star, ArrowRight } from 'lucide-react';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-teal-200 transition-all duration-300 overflow-hidden">
      {/* Product Image & Link */}
      <Link href={`/products/${product.id}`} className="relative aspect-4/3 overflow-hidden bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-white/90 backdrop-blur-md text-slate-800 shadow-xs">
            {product.category}
          </span>
          {product.originalPrice && (
            <span className="px-2 py-1 text-[11px] font-bold rounded-full bg-rose-500 text-white shadow-xs">
              SALE
            </span>
          )}
        </div>
      </Link>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Rating & Stock */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-slate-800">{product.rating}</span>
            <span>({product.reviewCount})</span>
          </div>
          <span
            className={`font-medium ${
              product.stockCount < 15 ? 'text-amber-600' : 'text-emerald-600'
            }`}
          >
            {product.stockCount} in stock
          </span>
        </div>

        {/* Title */}
        <Link href={`/products/${product.id}`} className="group-hover:text-teal-600 transition-colors">
          <h3 className="font-bold text-slate-900 line-clamp-1 text-base">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-slate-500 line-clamp-2 mt-1 mb-4 flex-1">
          {product.tagline}
        </p>

        {/* Price & Actions */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-extrabold text-slate-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <Link
              href={`/products/${product.id}`}
              className="p-2 rounded-xl text-slate-600 hover:text-teal-600 hover:bg-slate-100 transition-colors"
              title="View Details"
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

