"use client";

import { ScrollReveal } from "./scroll-reveal";
import { AnimatedCounter } from "./animated-counter";
import { Shield, Truck, MessageCircle, Award } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Prata 925 certificada",
    description: "Certificado de autenticidade e 12 meses de garantia em todas as peças.",
  },
  {
    icon: Truck,
    title: "Frete grátis Brasil",
    description: "Entrega gratuita para todo o Brasil em compras acima de R$ 119,90.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento WhatsApp",
    description: "Atendimento personalizado e rápido. Tire dúvidas e compre com facilidade.",
  },
  {
    icon: Award,
    title: "Qualidade premium",
    description: "Acabamento impecável e materiais selecionados para durar a vida toda.",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-center font-serif text-3xl md:text-4xl text-silver mb-4">
            Por que escolher a <span className="text-gold italic">Luxe Joias</span>?
          </h2>
          <p className="text-center text-muted-custom max-w-md mx-auto mb-12">
            Milhares de clientes confiam na nossa qualidade e atendimento.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <AnimatedCounter value="13,8k" label="Seguidores" />
          <AnimatedCounter value="1.200+" label="Clientes satisfeitos" />
          <AnimatedCounter value="925" label="Prata certificada" />
          <AnimatedCounter value="12" label="Meses de garantia" />
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="text-center p-6 rounded-xl bg-bg-card/50 border border-border-subtle hover:border-gold/10 transition-colors duration-300 group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/[0.06] group-hover:bg-gold/10 transition-colors duration-300 mb-4">
                  <item.icon className="w-5 h-5 text-gold/70 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="text-silver text-sm font-medium mb-2">{item.title}</h3>
                <p className="text-muted-custom text-xs leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
