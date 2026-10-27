'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Zap, Globe, Github, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#050507] text-zinc-400 border-t border-white/10">
      {/* VIP Atelier Newsletter Strip */}
      <div className="border-b border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <span className="text-[10px] font-bold tracking-[0.25em] text-amber-400 uppercase">
              PRIVATE CLIENT CONCIERGE
            </span>
            <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
              Join the Private Atelier Circle
            </h3>
            <p className="text-xs text-zinc-400 font-light">
              Receive private previews of limited edition drops, bespoke releases, and private exhibitions.
            </p>
          </div>

          <form
            onSubmit={e => e.preventDefault()}
            className="flex items-center gap-2 w-full max-w-md"
          >
            <input
              type="email"
              placeholder="Enter your email address..."
              className="flex-1 px-4 py-3 rounded-2xl bg-zinc-900 border border-white/10 text-white placeholder:text-zinc-500 text-xs focus:outline-hidden focus:ring-2 focus:ring-amber-400/40"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold uppercase tracking-wider text-xs shadow-md hover:from-amber-300 hover:to-amber-400 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-black font-serif font-black text-lg shadow-[0_0_20px_rgba(245,158,11,0.25)]">
                É
              </div>
              <span className="font-serif font-bold text-xl text-white">
                ONLINE <span className="text-amber-400 font-sans tracking-widest text-xs uppercase px-1.5 py-0.5 rounded-sm bg-amber-400/10 border border-amber-400/30">ATELIER</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm font-light leading-relaxed">
              Curated haute technology, acoustic masterpieces, and wearable innovations. Experience premier Server-Side Rendered luxury e-commerce with encrypted instant invoices.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-zinc-900 text-zinc-300 border border-white/10 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-400" /> Next.js 14 SSR
              </span>
              <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-zinc-900 text-zinc-300 border border-white/10 flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> 19 Curated Pieces
              </span>
              <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-zinc-900 text-zinc-300 border border-white/10 flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-sky-400" /> Vercel Global Edge
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-[0.25em] uppercase mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/#catalog" className="hover:text-amber-400 transition-colors">
                  Permanent Archive
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-amber-400 transition-colors">
                  Private Cart
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="hover:text-amber-400 transition-colors">
                  Concierge Checkout
                </Link>
              </li>
              <li>
                <span className="text-zinc-500">Cryptographic HTML Deed (.html)</span>
              </li>
            </ul>
          </div>

          {/* Maison Standards */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-[0.25em] uppercase mb-4">
              Maison Provenance
            </h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Every item is packaged in signature anti-static velvet boxes with serialized certificates of authenticity, backed by 3-year official warranty.
            </p>
            <div className="mt-4">
              <a
                href="https://github.com/Kojiro123-code/online-ecommerce-shop"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-colors border border-white/10"
              >
                <Github className="w-3.5 h-3.5 text-amber-400" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Online Luxury Atelier. All rights reserved.</p>
          <p className="tracking-wider uppercase">High-Performance SSR Architecture • Haute Craftsmanship</p>
        </div>
      </div>
    </footer>
  );
}
