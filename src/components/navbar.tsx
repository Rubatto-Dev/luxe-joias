"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { WhatsAppButton } from "./whatsapp-button";
import { Logo } from "./logo";
import { ShoppingBag, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/produtos?categoria=aliancas", label: "Aliancas" },
  { href: "/produtos?categoria=aneis", label: "Aneis" },
  { href: "/produtos?categoria=correntes", label: "Correntes" },
  { href: "/produtos?categoria=brincos", label: "Brincos" },
  { href: "/sobre", label: "Sobre" },
];

export function Navbar() {
  const { totalItems, setDrawerOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg border-b border-border-subtle">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo size={42} />
          <div className="hidden sm:block">
            <div className="text-silver text-sm tracking-[0.2em] font-medium">LUXE JOIAS</div>
            <div className="text-muted-custom text-[10px] tracking-[0.15em]">PRATAS 925</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-custom text-sm hover:text-silver transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <WhatsAppButton />
          <button
            onClick={() => setDrawerOpen(true)}
            className="relative inline-flex items-center justify-center w-10 h-10 text-silver hover:text-gold transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-bg text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-silver hover:text-gold transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-bg border-t border-border-subtle px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-muted-custom text-sm hover:text-silver transition-colors tracking-wide py-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
