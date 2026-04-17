"use client";

import { motion } from "framer-motion";
import { MapPin, Camera, Heart, Shield } from "lucide-react";
import { Logo } from "@/components/logo";

export default function SobrePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center">
          <div className="mx-auto mb-6 w-20">
            <Logo size={80} />
          </div>
          <h1 className="text-3xl md:text-4xl text-silver font-light">
            Sobre a <span className="text-gold italic">Luxe Joias</span>
          </h1>
          <p className="text-muted-custom mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            Somos uma loja especializada em pratas 925, com sede em Goiânia, GO. Nossa missão é levar joias de qualidade com preço justo para todo o Brasil.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "13.8k", label: "Seguidores" },
            { value: "925", label: "Prata certificada" },
            { value: "1.200+", label: "Clientes satisfeitos" },
            { value: "12", label: "Meses de garantia" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-bg-card rounded-lg border border-border-subtle">
              <div className="text-2xl text-gold font-semibold">{stat.value}</div>
              <div className="text-muted-custom text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: "Qualidade garantida",
              text: "Todas as nossas peças são em prata 925 legítima, com certificado de autenticidade e 12 meses de garantia.",
            },
            {
              icon: Heart,
              title: "Atendimento humanizado",
              text: "Cada cliente é único. Oferecemos atendimento personalizado pelo WhatsApp para ajudar na escolha perfeita.",
            },
            {
              icon: MapPin,
              title: "De Goiânia para o Brasil",
              text: "Sediados em Goiânia, GO, entregamos para todo o Brasil com frete grátis acima de R$ 119,90.",
            },
          ].map((item) => (
            <div key={item.title} className="p-6 bg-bg-card rounded-xl border border-border-subtle">
              <item.icon className="w-8 h-8 text-gold mb-4" />
              <h3 className="text-silver font-medium mb-2">{item.title}</h3>
              <p className="text-muted-custom text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-bg-card rounded-xl border border-border-subtle p-8">
          <Camera className="w-8 h-8 text-gold mx-auto mb-4" />
          <h3 className="text-silver text-lg mb-2">Siga-nos no Instagram</h3>
          <p className="text-muted-custom mb-4">Acompanhe novidades, lançamentos e promoções exclusivas.</p>
          <a href="https://instagram.com/luxejoias._" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
            @luxejoias._
          </a>
        </div>
      </motion.div>
    </div>
  );
}
