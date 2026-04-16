"use client";

import { ScrollReveal } from "./scroll-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Gift } from "lucide-react";

export function PromoBanner() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-bg-card via-bg-card to-[#1a1510] border border-gold/10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/[0.04] to-transparent" />

          <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-16">
            <ScrollReveal direction="left">
              <span className="text-gold/60 text-xs tracking-[0.3em] uppercase">
                Colecao exclusiva
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-silver mt-4 leading-tight">
                Presentes que
                <br />
                <span className="text-gold italic">encantam</span>
              </h2>
              <p className="text-muted-custom mt-4 leading-relaxed max-w-sm">
                Cada peca e embalada em nossa caixinha turquesa exclusiva.
                Perfeito para presentear quem voce ama.
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
                {/* Gift box illustration - turquoise box with gold ribbon */}
                <div className="relative w-64 h-64 md:w-72 md:h-72">
                  {/* Box body */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-52 h-40 md:w-60 md:h-44 rounded-xl bg-turquoise/15 border border-turquoise/30 shadow-[0_0_40px_rgba(59,191,176,0.08)]" />
                  {/* Box lid */}
                  <div className="absolute bottom-36 md:bottom-40 left-1/2 -translate-x-1/2 w-56 h-10 md:w-64 md:h-12 rounded-lg bg-turquoise/20 border border-turquoise/30" />
                  {/* Vertical ribbon */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-48 md:h-52 bg-gold/15 border-x border-gold/25" />
                  {/* Horizontal ribbon */}
                  <div className="absolute bottom-[4.5rem] md:bottom-20 left-1/2 -translate-x-1/2 w-52 md:w-60 h-6 bg-gold/15 border-y border-gold/25" />
                  {/* Bow */}
                  <div className="absolute bottom-44 md:bottom-48 left-1/2 -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute -left-8 -top-3 w-10 h-8 rounded-full bg-gold/20 border border-gold/30 rotate-[-20deg]" />
                      <div className="absolute -right-8 -top-3 w-10 h-8 rounded-full bg-gold/20 border border-gold/30 rotate-[20deg]" />
                      <div className="relative w-5 h-5 rounded-full bg-gold/30 border border-gold/40 z-10" />
                    </div>
                  </div>
                  {/* Gift icon inside box */}
                  <div className="absolute bottom-14 md:bottom-16 left-1/2 -translate-x-1/2">
                    <Gift className="w-10 h-10 text-turquoise/40" />
                  </div>
                  {/* Sparkle accents */}
                  <div className="absolute top-8 right-8 w-2 h-2 bg-gold/40 rounded-full animate-pulse" />
                  <div className="absolute top-16 right-4 w-1.5 h-1.5 bg-turquoise/40 rounded-full animate-pulse delay-500" />
                  <div className="absolute top-4 right-16 w-1 h-1 bg-gold/30 rounded-full animate-pulse delay-1000" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
