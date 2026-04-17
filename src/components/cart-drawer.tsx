"use client";

import { useCart } from "@/context/cart-context";
import { formatCurrency } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Link from "next/link";

export function CartDrawer() {
  const { items, isDrawerOpen, setDrawerOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <Sheet open={isDrawerOpen} onOpenChange={setDrawerOpen}>
      <SheetContent className="bg-bg-card border-l border-border-subtle w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-silver flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Carrinho ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-muted-custom">
            <ShoppingBag className="w-12 h-12 mb-4" />
            <p>Seu carrinho esta vazio</p>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.tamanho}`}
                  className="flex gap-3 p-3 bg-bg rounded-lg"
                >
                  {item.product.imagem && (item.product.imagem.startsWith("http") || item.product.imagem.startsWith("data:")) ? (
                    <img
                      src={item.product.imagem}
                      alt={item.product.nome}
                      className="w-16 h-16 rounded-md object-cover shrink-0"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-[#1e1e1e] rounded-md flex items-center justify-center text-gold text-xs font-serif shrink-0">
                      LJ
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-silver text-sm font-medium truncate">
                      {item.product.nome}
                    </p>
                    {item.tamanho && (
                      <p className="text-muted-custom text-xs">Tam: {item.tamanho}</p>
                    )}
                    <p className="text-gold text-sm font-semibold mt-1">
                      {formatCurrency(item.product.preco * item.quantity)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.tamanho)}
                        className="w-6 h-6 rounded border border-border-subtle flex items-center justify-center text-muted-custom hover:text-silver"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-silver text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.tamanho)}
                        className="w-6 h-6 rounded border border-border-subtle flex items-center justify-center text-muted-custom hover:text-silver"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.product.id, item.tamanho)}
                        className="ml-auto text-muted-custom hover:text-red-400"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border-subtle pt-4 pb-6 space-y-4">
              <div className="flex justify-between text-silver">
                <span>Total</span>
                <span className="text-gold font-semibold text-lg">{formatCurrency(totalPrice)}</span>
              </div>
              {totalPrice >= 119.9 && (
                <p className="text-turquoise text-sm text-center">Frete grátis!</p>
              )}
              <Link href="/checkout" onClick={() => setDrawerOpen(false)}>
                <Button className="w-full bg-gold hover:bg-gold-dark text-bg font-semibold py-3">
                  Finalizar compra
                </Button>
              </Link>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
