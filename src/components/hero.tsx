"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Shield, Truck, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-muted-custom text-sm tracking-[0.15em] uppercase">
            Lider em pratas 925 — Goiania
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-silver mt-4 leading-tight">
            Joias que marcam{" "}
            <span className="italic text-gold font-normal">cada momento</span>
          </h1>
          <p className="text-muted-custom mt-6 text-lg leading-relaxed max-w-lg">
            Aliancas, aneis e correntes em prata 925 com garantia. Entregamos para todo o Brasil.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Badge variant="outline" className="border-border-subtle text-silver bg-transparent px-3 py-1.5 text-sm gap-2">
              <Shield className="w-3.5 h-3.5 text-gold" />
              Prata 925 garantida
            </Badge>
            <Badge variant="outline" className="border-border-subtle text-silver bg-transparent px-3 py-1.5 text-sm gap-2">
              <Truck className="w-3.5 h-3.5 text-turquoise" />
              Frete gratis acima R$119
            </Badge>
            <Badge variant="outline" className="border-border-subtle text-silver bg-transparent px-3 py-1.5 text-sm gap-2">
              <Users className="w-3.5 h-3.5 text-gold" />
              13,8 mil seguidores
            </Badge>
          </div>
          <div className="flex items-center gap-4 mt-10">
            <Link href="/produtos">
              <Button className="bg-gold hover:bg-gold-dark text-bg font-semibold px-8 py-3 text-base">
                Ver catalogo completo
              </Button>
            </Link>
            <a
              href="https://wa.me/556299999999?text=Ola! Vi o site e quero saber mais sobre as joias da Luxe Joias."
              target="_blank"
              rel="noopener noreferrer"
              className="text-whatsapp hover:text-whatsapp/80 text-sm font-medium transition-colors"
            >
              Comprar pelo WhatsApp →
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-turquoise/5 rounded-2xl" />
            <div className="absolute inset-4 bg-bg-card rounded-xl border border-border-subtle flex flex-col items-center justify-center gap-6">
              <Image
                src="/logo.jpg"
                alt="Luxe Joias"
                width={160}
                height={160}
                className="rounded-full"
              />
              <div className="text-center">
                <div className="text-silver text-sm tracking-[0.25em] font-medium">LUXE JOIAS</div>
                <div className="text-muted-custom text-xs tracking-[0.2em] mt-1">PRATAS 925 — GOIANIA</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
