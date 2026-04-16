import { Product } from "@/types/product";
import seedData from "../../data/produtos.json";

const STORAGE_KEY = "luxe-produtos";

function getStoredProducts(): Product[] {
  if (typeof window === "undefined") return seedData as Product[];
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  // First load: seed from JSON
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
  return seedData as Product[];
}

function saveProducts(products: Product[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }
}

export function getAllProducts(): Product[] {
  return getStoredProducts();
}

export function getProductBySlug(slug: string): Product | null {
  return getStoredProducts().find((p) => p.slug === slug) || null;
}

export function getProductsByCategory(categoria: string): Product[] {
  const produtos = getStoredProducts();
  if (!categoria || categoria === "todos") return produtos;
  return produtos.filter((p) => p.categoria === categoria);
}

export function getCategories(): string[] {
  const cats = [...new Set(getStoredProducts().map((p) => p.categoria))];
  return ["todos", ...cats];
}

// Admin CRUD operations
export function addProduct(product: Omit<Product, "id">): Product {
  const produtos = getStoredProducts();
  const maxId = produtos.reduce((max, p) => Math.max(max, p.id), 0);
  const newProduct = { ...product, id: maxId + 1 } as Product;
  saveProducts([...produtos, newProduct]);
  return newProduct;
}

export function updateProduct(id: number, updates: Partial<Product>): Product | null {
  const produtos = getStoredProducts();
  const index = produtos.findIndex((p) => p.id === id);
  if (index === -1) return null;
  const updated = { ...produtos[index], ...updates };
  produtos[index] = updated;
  saveProducts(produtos);
  return updated;
}

export function deleteProduct(id: number): boolean {
  const produtos = getStoredProducts();
  const filtered = produtos.filter((p) => p.id !== id);
  if (filtered.length === produtos.length) return false;
  saveProducts(filtered);
  return true;
}

export function resetProducts() {
  saveProducts(seedData as Product[]);
}
