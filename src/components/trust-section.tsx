import { Shield, Truck, MessageCircle } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Prata 925 certificada",
    description: "Todas as pecas com certificado de autenticidade e garantia de 12 meses.",
  },
  {
    icon: Truck,
    title: "Frete gratis Brasil",
    description: "Entrega gratuita para todo o Brasil em compras acima de R$ 119,90.",
  },
  {
    icon: MessageCircle,
    title: "Compre pelo WhatsApp",
    description: "Atendimento personalizado e rapido pelo nosso WhatsApp.",
  },
];

export function TrustSection() {
  return (
    <section className="bg-[#111] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {trustItems.map((item) => (
            <div key={item.title} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-4">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-silver font-medium mb-2">{item.title}</h3>
              <p className="text-muted-custom text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
