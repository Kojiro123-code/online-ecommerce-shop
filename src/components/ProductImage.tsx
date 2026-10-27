'use client';

import React, { useState } from 'react';
import { Package, Headphones, Watch, Keyboard, Mouse, Camera, Mic, LayoutGrid, Sun, BatteryCharging, Speaker } from 'lucide-react';

interface ProductImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  category?: string;
}

export default function ProductImage({
  src,
  fallbackSrc,
  alt,
  className = '',
  category,
}: ProductImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  const getCategoryIcon = (cat?: string) => {
    switch (cat?.toLowerCase()) {
      case 'audio':
        return <Headphones className="w-12 h-12 text-teal-600" />;
      case 'wearables':
        return <Watch className="w-12 h-12 text-indigo-600" />;
      case 'workspace':
        return <Keyboard className="w-12 h-12 text-amber-600" />;
      case 'photography':
        return <Camera className="w-12 h-12 text-rose-600" />;
      case 'accessories':
        return <BatteryCharging className="w-12 h-12 text-emerald-600" />;
      default:
        return <Package className="w-12 h-12 text-teal-600" />;
    }
  };

  if (hasError) {
    return (
      <div className={`w-full h-full min-h-[160px] bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center p-4 text-center ${className}`}>
        <div className="p-3 bg-white/80 rounded-2xl shadow-xs mb-2 backdrop-blur-xs">
          {getCategoryIcon(category)}
        </div>
        <span className="text-xs font-semibold text-slate-700 line-clamp-1 max-w-[80%]">
          {alt}
        </span>
        <span className="text-[10px] text-slate-400 mt-0.5 uppercase tracking-wider font-medium">
          {category || 'Product'}
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-100 flex items-center justify-center">
      {/* Skeleton while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse" />
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={() => setIsLoaded(true)}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        loading="lazy"
      />
    </div>
  );
}
