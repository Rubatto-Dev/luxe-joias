"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Truck, Users } from "lucide-react";

const textReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/[0.03] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-turquoise/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Editorial text */}
          <div>
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textReveal}
            >
              <span className="inline-block text-gold/70 text-xs tracking-[0.3em] uppercase border border-gold/20 px-4 py-1.5 rounded-full">
                Lider em pratas 925 — Goiania
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textReveal}
              className="text-5xl md:text-6xl lg:text-7xl text-silver mt-8 leading-[1.1] tracking-tight"
            >
              <span className="font-light">Joias que</span>
              <br />
              <span className="font-light">marcam </span>
              <span className="font-serif italic text-gold">
                cada
              </span>
              <br />
              <span className="font-serif italic text-gold">
                momento
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textReveal}
              className="text-muted-custom mt-8 text-lg leading-relaxed max-w-md"
            >
              Aliancas, aneis e correntes em prata 925 com garantia.
              Entregamos para todo o Brasil.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textReveal}
              className="flex items-center gap-5 mt-10"
            >
              <Link href="/produtos">
                <Button className="bg-gold hover:bg-gold-dark text-bg font-semibold px-8 py-6 text-base rounded-full group transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,169,58,0.3)]">
                  Ver catalogo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a
                href="https://wa.me/556299999999?text=Ola! Vi o site e quero saber mais sobre as joias da Luxe Joias."
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver/60 hover:text-whatsapp text-sm font-medium transition-colors duration-300 border-b border-transparent hover:border-whatsapp pb-0.5"
              >
                Comprar pelo WhatsApp
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textReveal}
              className="flex items-center gap-6 mt-14 pt-8 border-t border-border-subtle"
            >
              {[
                { icon: Shield, text: "Prata 925 garantida" },
                { icon: Truck, text: "Frete gratis +R$119" },
                { icon: Users, text: "13,8 mil seguidores" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-gold/60" />
                  <span className="text-muted-custom text-xs tracking-wide">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Logo showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-8 border border-gold/[0.06] rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute -inset-16 border border-gold/[0.04] rounded-full animate-[spin_45s_linear_infinite_reverse]" />
              <div className="absolute -inset-24 border border-turquoise/[0.03] rounded-full" />

              {/* Logo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-bg-card to-bg overflow-hidden border border-gold/10 shadow-[0_0_60px_rgba(212,169,58,0.08)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/logo.jpg"
                    alt="Luxe Joias"
                    width={240}
                    height={240}
                    className="rounded-full"
                    priority
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-bg-card border border-gold/20 rounded-full px-4 py-2 shadow-lg"
              >
                <span className="text-gold text-xs font-semibold tracking-widest">925</span>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-6 bg-bg-card border border-turquoise/20 rounded-full px-4 py-2 shadow-lg"
              >
                <span className="text-turquoise text-xs font-medium">Frete gratis</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
