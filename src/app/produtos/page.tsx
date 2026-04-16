"use client";

import { useSearchParams } from "next/navigation";
import { ProductGrid } from "@/components/product-grid";
import { Suspense } from "react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoria = searchParams.get("categoria") || "todos";

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <h1 className="text-3xl text-silver font-light tracking-wide">Nosso catalogo</h1>
        <p className="text-muted-custom mt-2">Aliancas, aneis e correntes em prata 925 com garantia.</p>
      </div>
      <ProductGrid title="" initialCategory={categoria} />
    </div>
  );
}

export default function ProdutosPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  );
}
