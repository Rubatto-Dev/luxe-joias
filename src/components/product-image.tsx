"use client";

import { useState } from "react";
import Image from "next/image";

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
        className={`bg-[#1e1e1e] flex flex-col items-center justify-center gap-3 ${className}`}
      >
        <Image
          src="/logo.jpg"
          alt="Luxe Joias"
          width={64}
          height={64}
          className="rounded-full opacity-40"
        />
        <span className="text-muted-custom text-xs tracking-widest">PRATA 925</span>
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
