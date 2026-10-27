import React from 'react';
import Link from 'next/link';
import { Layers, ShieldCheck, Zap, Globe, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-white">
                <Layers className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-white">
                AURA<span className="text-teal-400">.STORE</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              High-performance Next.js Server-Side Rendered (SSR) storefront featuring instant HTML delivery, full catalog browsing, interactive cart, seamless checkout, and downloadable HTML invoices.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-teal-400" /> SSR Next.js 14
              </span>
              <span className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> 10 Sample Products
              </span>
              <span className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-blue-400" /> Ready for Vercel
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-teal-400 transition-colors">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-teal-400 transition-colors">
                  Cart List
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="hover:text-teal-400 transition-colors">
                  Checkout
                </Link>
              </li>
              <li>
                <span className="text-xs text-slate-500">Invoice (.html) generated on order</span>
              </li>
            </ul>
          </div>

          {/* Project spec summary */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Specs & Hosting
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Engineered with pure Server-Side Rendering (SSR) for blazing initial loads, SEO metadata generation, responsive Tailwind design, and full GitHub / Vercel cloud deployment readiness.
            </p>
            <div className="mt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub Repository
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} AURA Store SSR. All rights reserved.</p>
          <p>Built with Next.js App Router • Server-Side Rendered • Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
