"use client";

import { ScrollReveal } from "./scroll-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
                <div className="relative">
                  <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-turquoise/10 border border-turquoise/20 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/logo.jpg"
                      alt="Luxe Joias"
                      width={180}
                      height={180}
                      className="rounded-full opacity-80"
                    />
                  </div>
                  {/* Gift ribbon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-[2px] bg-gold/20" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="h-full w-[2px] bg-gold/20" />
                  </div>
                  {/* Bow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gold/20 border border-gold/30" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
