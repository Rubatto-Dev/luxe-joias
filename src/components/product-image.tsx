"use client";

import { useState } from "react";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProductImage({ src, alt, className = "" }: ProductImageProps) {
  const [error, setError] = useState(false);
  const isExternal = src.startsWith("http");

  if (!isExternal || error) {
    return (
      <div
        className={`bg-[#1e1e1e] flex flex-col items-center justify-center gap-2 text-gold/40 ${className}`}
      >
        <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center">
          <span className="font-serif text-lg">LJ</span>
        </div>
        <span className="text-xs tracking-widest">PRATA 925</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={`object-cover ${className}`}
    />
  );
}
