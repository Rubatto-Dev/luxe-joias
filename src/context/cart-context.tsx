"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@/types/product";

interface CartItem {
  product: Product;
  quantity: number;
  tamanho?: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity: number, tamanho?: number) => void;
  removeItem: (productId: number, tamanho?: number) => void;
  updateQuantity: (productId: number, quantity: number, tamanho?: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isDrawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("luxe-cart");
    if (stored) {
      setItems(JSON.parse(stored));
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("luxe-cart", JSON.stringify(items));
    }
  }, [items, loaded]);

  function addItem(product: Product, quantity: number, tamanho?: number) {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.product.id === product.id && i.tamanho === tamanho
      );
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.tamanho === tamanho
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, quantity, tamanho }];
    });
    setDrawerOpen(true);
  }

  function removeItem(productId: number, tamanho?: number) {
    setItems((prev) =>
      prev.filter(
        (i) => !(i.product.id === productId && i.tamanho === tamanho)
      )
    );
  }

  function updateQuantity(productId: number, quantity: number, tamanho?: number) {
    if (quantity <= 0) {
      removeItem(productId, tamanho);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId && i.tamanho === tamanho
          ? { ...i, quantity }
          : i
      )
    );
  }

  function clearCart() {
    setItems([]);
  }

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce(
    (sum, i) => sum + i.product.preco * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isDrawerOpen,
        setDrawerOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
