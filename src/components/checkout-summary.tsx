"use client";

import { useCart } from "@/context/cart-context";
import { formatCurrency, formatInstallments } from "@/lib/utils";

export function CheckoutSummary() {
  const { items, totalPrice } = useCart();
  const frete = totalPrice >= 119.9 ? 0 : 15.9;
  const total = totalPrice + frete;

  return (
    <div className="bg-bg-card rounded-xl border border-border-subtle p-6 space-y-4">
      <h2 className="text-lg text-silver font-medium">Resumo do pedido</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={`${item.product.id}-${item.tamanho}`} className="flex justify-between text-sm">
            <div className="text-muted-custom">
              <span className="text-silver">{item.product.nome}</span>
              {item.tamanho && <span> — Tam {item.tamanho}</span>}
              <span> x{item.quantity}</span>
            </div>
            <span className="text-silver">{formatCurrency(item.product.preco * item.quantity)}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-border-subtle pt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-custom">Subtotal</span>
          <span className="text-silver">{formatCurrency(totalPrice)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-custom">Frete</span>
          <span className={frete === 0 ? "text-turquoise" : "text-silver"}>
            {frete === 0 ? "Grátis" : formatCurrency(frete)}
          </span>
        </div>
        <div className="flex justify-between text-lg font-semibold pt-2 border-t border-border-subtle">
          <span className="text-silver">Total</span>
          <span className="text-gold">{formatCurrency(total)}</span>
        </div>
        <p className="text-muted-custom text-xs text-right">{formatInstallments(total)}</p>
      </div>
    </div>
  );
}
