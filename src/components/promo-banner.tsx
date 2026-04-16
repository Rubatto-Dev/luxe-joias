"use client";

import { ScrollReveal } from "./scroll-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function GiftBoxIllustration() {
  return (
    <svg viewBox="0 0 280 280" fill="none" className="w-full h-full">
      {/* Shadow */}
      <ellipse cx="140" cy="252" rx="80" ry="8" fill="rgba(59,191,176,0.06)" />

      {/* Box body */}
      <rect x="60" y="140" width="160" height="100" rx="6" fill="rgba(59,191,176,0.08)" stroke="rgba(59,191,176,0.25)" strokeWidth="1" />

      {/* Box lid */}
      <rect x="52" y="120" width="176" height="24" rx="4" fill="rgba(59,191,176,0.12)" stroke="rgba(59,191,176,0.3)" strokeWidth="1" />

      {/* Vertical ribbon */}
      <rect x="130" y="120" width="20" height="120" fill="rgba(212,169,58,0.1)" stroke="rgba(212,169,58,0.2)" strokeWidth="0.8" />

      {/* Horizontal ribbon */}
      <rect x="60" y="178" width="160" height="20" fill="rgba(212,169,58,0.1)" stroke="rgba(212,169,58,0.2)" strokeWidth="0.8" />

      {/* Ribbon center knot */}
      <circle cx="140" cy="188" r="6" fill="rgba(212,169,58,0.2)" stroke="rgba(212,169,58,0.35)" strokeWidth="0.8" />

      {/* Bow - left loop */}
      <path d="M140 120 Q108 96 118 80 Q128 68 140 84" fill="rgba(212,169,58,0.08)" stroke="rgba(212,169,58,0.3)" strokeWidth="1" />

      {/* Bow - right loop */}
      <path d="M140 120 Q172 96 162 80 Q152 68 140 84" fill="rgba(212,169,58,0.08)" stroke="rgba(212,169,58,0.3)" strokeWidth="1" />

      {/* Bow center */}
      <ellipse cx="140" cy="108" rx="6" ry="14" fill="rgba(212,169,58,0.15)" stroke="rgba(212,169,58,0.35)" strokeWidth="0.8" />

      {/* Ribbon tails */}
      <path d="M134 120 Q126 134 118 140" stroke="rgba(212,169,58,0.25)" strokeWidth="1" fill="none" />
      <path d="M146 120 Q154 134 162 140" stroke="rgba(212,169,58,0.25)" strokeWidth="1" fill="none" />

      {/* Subtle shine on lid */}
      <line x1="70" y1="128" x2="120" y2="128" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

      {/* Sparkles */}
      <g opacity="0.5">
        <path d="M200 72 L202 68 L204 72 L208 74 L204 76 L202 80 L200 76 L196 74 Z" fill="rgba(212,169,58,0.4)" />
        <path d="M78 90 L79.5 87 L81 90 L84 91.5 L81 93 L79.5 96 L78 93 L75 91.5 Z" fill="rgba(212,169,58,0.3)" />
        <path d="M210 110 L211 108 L212 110 L214 111 L212 112 L211 114 L210 112 L208 111 Z" fill="rgba(59,191,176,0.3)" />
      </g>
    </svg>
  );
}

export function PromoBanner() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-bg-card via-bg-card to-[#131510] border border-gold/10">
          {/* Background accents */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-turquoise/[0.02] to-transparent" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/[0.015] rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-8 items-center p-10 md:p-16">
            <ScrollReveal direction="left">
              <span className="text-gold/60 text-xs tracking-[0.3em] uppercase">
                Embalagem exclusiva
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-silver mt-4 leading-tight">
                Presentes que
                <br />
                <span className="text-gold italic">encantam</span>
              </h2>
              <p className="text-muted-custom mt-5 leading-relaxed max-w-sm">
                Cada peca e cuidadosamente embalada em nossa caixinha turquesa
                com laco dourado. Perfeito para presentear quem voce ama.
              </p>
              <Link href="/produtos" className="inline-block mt-8">
                <Button
                  variant="outline"
                  className="border-gold/30 text-gold hover:bg-gold/10 rounded-full px-8 py-5 group"
                >
                  Explorar colecao
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex items-center justify-center">
                <div className="w-64 h-64 md:w-72 md:h-72">
                  <GiftBoxIllustration />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
