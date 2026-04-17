"use client";

import Link from "next/link";
import { ScrollReveal } from "./scroll-reveal";

function AllianceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <ellipse cx="22" cy="32" rx="14" ry="16" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="42" cy="32" rx="14" ry="16" stroke="currentColor" strokeWidth="1.2" />
      <path d="M32 18.5c2.5 2.8 4 7.8 4 13.5s-1.5 10.7-4 13.5" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M32 18.5c-2.5 2.8-4 7.8-4 13.5s1.5 10.7 4 13.5" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      {/* Small diamond accents on the overlap */}
      <circle cx="32" cy="24" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="32" cy="32" r="1.2" fill="currentColor" opacity="0.6" />
      <circle cx="32" cy="40" r="1" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function RingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      {/* Ring band with perspective */}
      <ellipse cx="32" cy="38" rx="16" ry="18" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="32" cy="38" rx="12" ry="14" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
      {/* Diamond/stone setting */}
      <path d="M26 20 L32 12 L38 20 L35 22 L29 22 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.15" />
      {/* Diamond facets */}
      <path d="M32 12 L29 22 M32 12 L35 22 M26 20 L38 20" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      {/* Prongs */}
      <path d="M28 24 L26 20 M36 24 L38 20" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      {/* Sparkle */}
      <path d="M42 14 L44 14 M43 13 L43 15" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M22 16 L23.5 16 M22.75 15 L22.75 17" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
    </svg>
  );
}

function ChainIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      {/* Chain links - realistic oval links */}
      <rect x="4" y="22" width="16" height="10" rx="5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="16" y="26" width="16" height="10" rx="5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="28" y="22" width="16" height="10" rx="5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="40" y="26" width="16" height="10" rx="5" stroke="currentColor" strokeWidth="1.2" />
      {/* Subtle light reflection */}
      <path d="M8 24 L14 24" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <path d="M32 24 L38 24" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      {/* Hanging chain suggestion */}
      <path d="M2 27 Q0 32 4 32" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <path d="M56 31 Q62 31 60 27" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
    </svg>
  );
}

function EarringIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      {/* Hook */}
      <path d="M32 6 Q32 4 34 4 Q38 4 38 8 L38 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Main earring body - teardrop shape */}
      <path d="M32 18 Q22 28 24 38 Q26 46 32 50 Q38 46 40 38 Q42 28 32 18 Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" opacity="0.05" />
      {/* Inner detail */}
      <path d="M32 24 Q27 30 28 36 Q29 42 32 44 Q35 42 36 36 Q37 30 32 24 Z" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      {/* Central diamond */}
      <path d="M29 34 L32 28 L35 34 L32 37 Z" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.2" />
      {/* Diamond facet */}
      <path d="M32 28 L32 37 M29 34 L35 34" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
      {/* Small sparkles */}
      <circle cx="30" cy="30" r="0.6" fill="currentColor" opacity="0.4" />
      <circle cx="34" cy="32" r="0.6" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

const categories = [
  { href: "/produtos?categoria=aliancas", label: "Alianças", Icon: AllianceIcon },
  { href: "/produtos?categoria=aneis", label: "Anéis", Icon: RingIcon },
  { href: "/produtos?categoria=correntes", label: "Correntes", Icon: ChainIcon },
  { href: "/produtos?categoria=brincos", label: "Brincos", Icon: EarringIcon },
];

export function CategoryNav() {
  return (
    <section className="py-14 md:py-20 border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-center text-xs tracking-[0.3em] text-muted-custom uppercase mb-12">
            Explore por categoria
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.label} delay={i * 0.1}>
              <Link
                href={cat.href}
                className="group flex flex-col items-center gap-5 py-8 rounded-2xl hover:bg-gold/[0.02] transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-full border border-gold/15 flex items-center justify-center group-hover:border-gold/40 group-hover:bg-gold/[0.04] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(212,169,58,0.06)]">
                  <cat.Icon className="w-10 h-10 text-gold/40 group-hover:text-gold/80 transition-colors duration-500" />
                </div>
                <span className="text-silver/50 text-xs tracking-[0.2em] uppercase group-hover:text-silver/90 transition-colors duration-500 font-medium">
                  {cat.label}
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
