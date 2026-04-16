"use client";

import { useState, useEffect } from "react";
import { getProductsByCategory } from "@/lib/products";
import { ProductCard } from "./product-card";
import { CategoryFilter } from "./category-filter";
import { Product } from "@/types/product";

interface ProductGridProps {
  showFilter?: boolean;
  title?: string;
  initialCategory?: string;
}

export function ProductGrid({
  showFilter = true,
  title = "Mais vendidos",
  initialCategory = "todos",
}: ProductGridProps) {
  const [category, setCategory] = useState(initialCategory);
  const [products, setProducts] = useState<Product[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setProducts(getProductsByCategory(category));
    }
  }, [category, mounted]);

  if (!mounted) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {title && (
        <h2 className="text-2xl text-silver font-light tracking-wide mb-8">{title}</h2>
      )}
      {showFilter && (
        <div className="mb-8">
          <CategoryFilter active={category} onChange={setCategory} />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
