"use client";

import Link from "next/link";
import { ScrollReveal } from "./scroll-reveal";

function AllianceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="20" cy="24" r="12" />
      <circle cx="28" cy="24" r="12" />
    </svg>
  );
}

function RingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <ellipse cx="24" cy="26" rx="12" ry="14" />
      <circle cx="24" cy="14" r="4" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function ChainIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="8" y="16" width="14" height="8" rx="4" />
      <rect x="18" y="24" width="14" height="8" rx="4" />
      <rect x="28" y="16" width="14" height="8" rx="4" />
    </svg>
  );
}

function EarringIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M24 6 L24 18" />
      <circle cx="24" cy="10" r="4" />
      <path d="M18 18 Q18 34 24 38 Q30 34 30 18" />
      <circle cx="24" cy="34" r="3" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

const categories = [
  { href: "/produtos?categoria=aliancas", label: "Aliancas", icon: AllianceIcon },
  { href: "/produtos?categoria=aneis", label: "Aneis", icon: RingIcon },
  { href: "/produtos?categoria=correntes", label: "Correntes", icon: ChainIcon },
  { href: "/produtos?categoria=brincos", label: "Brincos", icon: EarringIcon },
];

export function CategoryNav() {
  return (
    <section className="py-12 md:py-16 border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-center text-xs tracking-[0.3em] text-muted-custom uppercase mb-10">
            Explore por categoria
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.label} delay={i * 0.1}>
              <Link
                href={cat.href}
                className="group flex flex-col items-center gap-4 py-6 rounded-xl hover:bg-bg-card transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/[0.05] transition-all duration-300 group-hover:scale-110">
                  <cat.icon className="w-8 h-8 text-gold/50 group-hover:text-gold transition-colors duration-300" />
                </div>
                <span className="text-silver/70 text-sm tracking-[0.15em] uppercase group-hover:text-silver transition-colors duration-300">
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
