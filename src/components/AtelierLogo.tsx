import React from 'react';

interface AtelierLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function AtelierLogo({
  className = '',
  showTagline = true,
  size = 'md',
}: AtelierLogoProps) {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg',
    lg: 'text-lg sm:text-xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Bespoke Geometric Atelier Crest / Insignia */}
      <div
        className={`relative ${iconSizes[size]} shrink-0 rounded-2xl bg-gradient-to-b from-zinc-800/90 to-zinc-950 p-1 border border-amber-400/30 shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:shadow-[0_0_30px_rgba(245,158,11,0.45)] group-hover:border-amber-400/60 transition-all duration-500`}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(245,158,11,0.35)]"
        >
          <defs>
            <linearGradient id="atelierGold" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="45%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="atelierGoldLight" x1="48" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="50%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <radialGradient id="sparkleCore" cx="24" cy="24" r="12" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#FDE68A" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Faceted Geometric Diamond Emblem (O & A Interlocking Monogram) */}
          <path
            d="M 24 7 L 11 24 L 24 41 L 24 34 L 16 24 L 24 14 Z"
            fill="url(#atelierGold)"
          />
          <path
            d="M 24 7 L 37 24 L 24 41 L 24 34 L 32 24 L 24 14 Z"
            fill="url(#atelierGoldLight)"
            opacity="0.95"
          />

          {/* Central Apex Atelier Pyramid */}
          <path
            d="M 20 28 L 24 19 L 28 28 Z"
            fill="url(#atelierGold)"
            stroke="#18181B"
            strokeWidth="0.8"
          />

          {/* Core Radiant Star (Craftsmanship Spark) */}
          <circle cx="24" cy="24" r="4" fill="url(#sparkleCore)" />
          <path
            d="M 24 18 L 25.2 22.8 L 30 24 L 25.2 25.2 L 24 30 L 22.8 25.2 L 18 24 L 22.8 22.8 Z"
            fill="#FFFFFF"
          />
        </svg>

        {/* Ambient Amber Glow behind icon */}
        <div className="absolute inset-0 rounded-2xl bg-amber-400/10 blur-xs pointer-events-none" />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-black tracking-[0.12em] text-white group-hover:text-amber-200 transition-colors ${titleSizes[size]}`}
          >
            ONLINE
          </span>
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase px-2 py-0.5 rounded-md bg-gradient-to-r from-amber-400/15 to-amber-500/10 text-amber-300 border border-amber-400/35">
            ATELIER
          </span>
        </div>

        {showTagline && (
          <span className="text-[9px] font-mono font-medium text-zinc-400 tracking-[0.22em] uppercase mt-1 leading-none">
            HAUTE E-COMMERCE • SSR ED.
          </span>
        )}
      </div>
    </div>
  );
}

