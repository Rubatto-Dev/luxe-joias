"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { getProductBySlug } from "@/lib/products";
import { useCart } from "@/context/cart-context";
import { formatCurrency, formatInstallments } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SizeSelector } from "@/components/size-selector";
import { QuantityInput } from "@/components/quantity-input";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Truck, Shield, Clock } from "lucide-react";
import Link from "next/link";

export default function ProductPage() {
  const params = useParams();
  const product = getProductBySlug(params.slug as string);
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl text-silver">Produto nao encontrado</h1>
        <Link href="/produtos" className="text-gold mt-4 inline-block">Voltar ao catalogo</Link>
      </div>
    );
  }

  const hasDiscount = product.preco_original && product.preco_original > product.preco;
  const hasSizes = product.tamanhos && product.tamanhos.length > 0;

  function handleAddToCart() {
    if (hasSizes && !selectedSize) return;
    addItem(product!, quantity, selectedSize ?? undefined);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="grid md:grid-cols-5 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3"
        >
          <div className="aspect-square bg-[#1e1e1e] rounded-xl flex flex-col items-center justify-center gap-4 border border-border-subtle">
            <div className="w-24 h-24 rounded-full border-2 border-gold/40 flex items-center justify-center">
              <span className="font-serif text-3xl text-gold/50">LJ</span>
            </div>
            <span className="text-muted-custom text-sm tracking-widest">{product.nome}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2 space-y-6"
        >
          <div>
            <Badge variant="outline" className="text-gold border-gold/30 text-[10px] tracking-widest px-2 py-0 mb-3">PRATA 925</Badge>
            <h1 className="text-2xl md:text-3xl text-silver font-light">{product.nome}</h1>
          </div>

          <div>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl text-silver font-semibold">{formatCurrency(product.preco)}</span>
              {hasDiscount && (
                <span className="text-muted-custom text-lg line-through">{formatCurrency(product.preco_original!)}</span>
              )}
            </div>
            <p className="text-muted-custom text-sm mt-1">{formatInstallments(product.preco)}</p>
            {product.frete_gratis && (
              <p className="text-turquoise text-sm mt-2 flex items-center gap-1.5">
                <Truck className="w-4 h-4" />Frete gratis
              </p>
            )}
          </div>

          {hasSizes && (
            <SizeSelector sizes={product.tamanhos!} selected={selectedSize} onChange={setSelectedSize} />
          )}

          <QuantityInput value={quantity} onChange={setQuantity} />

          <div className="space-y-3 pt-2">
            <Button
              onClick={handleAddToCart}
              disabled={!!hasSizes && !selectedSize}
              className="w-full bg-gold hover:bg-gold-dark text-bg font-semibold py-3 text-base disabled:opacity-40"
            >
              Adicionar ao carrinho
            </Button>
            <WhatsAppButton
              variant="outline"
              message={`Ola! Tenho interesse no produto: ${product.nome} (${formatCurrency(product.preco)})`}
            />
          </div>

          <div className="border-t border-border-subtle pt-6 space-y-3">
            <p className="text-muted-custom text-sm leading-relaxed">{product.descricao}</p>
            <div className="space-y-2 text-sm text-muted-custom">
              <p className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-gold" />Material: {product.metal} | Garantia: 12 meses
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />Entrega: 3-8 dias uteis
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
