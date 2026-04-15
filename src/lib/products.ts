import { Product } from "@/types/product";
import produtosData from "../../data/produtos.json";

const produtos: Product[] = produtosData as Product[];

export function getAllProducts() {
  return produtos;
}

export function getProductBySlug(slug: string) {
  return produtos.find((p) => p.slug === slug) || null;
}

export function getProductsByCategory(categoria: string) {
  if (!categoria || categoria === "todos") return produtos;
  return produtos.filter((p) => p.categoria === categoria);
}

export function getCategories() {
  const cats = [...new Set(produtos.map((p) => p.categoria))];
  return ["todos", ...cats];
}
