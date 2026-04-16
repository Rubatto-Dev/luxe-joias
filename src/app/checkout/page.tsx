"use client";

import { useCart } from "@/context/cart-context";
import { CheckoutSummary } from "@/components/checkout-summary";
import { CheckoutForm } from "@/components/checkout-form";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const { items } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <ShoppingBag className="w-16 h-16 text-muted-custom mx-auto mb-4" />
        <h1 className="text-2xl text-silver mb-2">Carrinho vazio</h1>
        <p className="text-muted-custom mb-6">Adicione produtos ao carrinho para continuar.</p>
        <Link href="/produtos" className="text-gold hover:underline">Ver catalogo</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <h1 className="text-3xl text-silver font-light tracking-wide mb-8">Checkout</h1>
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2"><CheckoutSummary /></div>
        <div className="md:col-span-3"><CheckoutForm /></div>
      </div>
    </div>
  );
}
