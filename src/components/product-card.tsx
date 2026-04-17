"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Product } from "@/types/product";
import { formatCurrency } from "@/lib/utils";
import { ProductImage } from "./product-image";
import { Eye } from "lucide-react";

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <Link href={`/produtos/${product.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-xl bg-[#141414] aspect-square border border-transparent group-hover:border-gold/20 transition-all duration-500">
          <ProductImage
            src={product.imagem}
            alt={product.nome}
            className="w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Quick view button */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-xs tracking-wider uppercase px-5 py-2.5 rounded-full border border-white/20">
              <Eye className="w-3.5 h-3.5" />
              Ver detalhes
            </span>
          </div>

          {/* Discount badge */}
          {hasDiscount && (
            <div className="absolute top-3 right-3 bg-gold text-bg text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full">
              -{discountPercent}%
            </div>
          )}

          {/* Prata 925 tag */}
          <div className="absolute top-3 left-3 text-gold/50 text-[9px] tracking-[0.2em] uppercase">
            PRATA 925
          </div>
        </div>

        <div className="mt-4 space-y-1.5">
          <h3 className="text-silver text-sm font-medium group-hover:text-gold transition-colors duration-300">
            {product.nome}
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-silver font-semibold text-base">
              {formatCurrency(product.preco)}
            </span>
            {hasDiscount && (
              <span className="text-muted-custom text-xs line-through">
                {formatCurrency(product.preco_original!)}
              </span>
            )}
          </div>
          <p className="text-muted-custom text-xs">
            10x de {formatCurrency(product.preco / 10)} sem juros
          </p>
          {product.frete_gratis && (
            <p className="text-turquoise text-xs font-medium">Frete grátis</p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
