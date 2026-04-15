"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Product } from "@/types/product";
import { formatCurrency } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const hasDiscount = product.preco_original && product.preco_original > product.preco;
  const discountPercent = hasDiscount
    ? Math.round((1 - product.preco / product.preco_original!) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/produtos/${product.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-lg bg-[#1e1e1e] aspect-square flex items-center justify-center border border-transparent group-hover:border-gold/30 transition-all duration-300">
          <div className="flex flex-col items-center gap-2 text-gold/40 group-hover:text-gold/60 transition-colors">
            <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center">
              <span className="font-serif text-lg">LJ</span>
            </div>
            <span className="text-xs tracking-widest">PRATA 925</span>
          </div>
          {hasDiscount && (
            <Badge className="absolute top-3 right-3 bg-gold text-bg text-xs font-semibold">
              -{discountPercent}%
            </Badge>
          )}
        </div>
        <div className="mt-3 space-y-1">
          <Badge variant="outline" className="text-gold border-gold/30 text-[10px] tracking-widest px-2 py-0">
            PRATA 925
          </Badge>
          <h3 className="text-silver text-sm font-medium group-hover:text-gold transition-colors">
            {product.nome}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-silver font-semibold">{formatCurrency(product.preco)}</span>
            {hasDiscount && (
              <span className="text-muted-custom text-sm line-through">{formatCurrency(product.preco_original!)}</span>
            )}
          </div>
          {product.frete_gratis && <p className="text-turquoise text-xs">Frete gratis</p>}
        </div>
      </Link>
    </motion.div>
  );
}
