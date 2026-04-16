"use client";

import Link from "next/link";
import { ScrollReveal } from "./scroll-reveal";
import { Gem, CircleDot, Link2, Sparkles } from "lucide-react";

const categories = [
  { href: "/produtos?categoria=aliancas", label: "Aliancas", icon: CircleDot },
  { href: "/produtos?categoria=aneis", label: "Aneis", icon: Gem },
  { href: "/produtos?categoria=correntes", label: "Correntes", icon: Link2 },
  { href: "/produtos?categoria=brincos", label: "Brincos", icon: Sparkles },
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
                  <cat.icon className="w-6 h-6 text-gold/50 group-hover:text-gold transition-colors duration-300" />
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
