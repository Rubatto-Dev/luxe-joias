import type { Metadata } from "next";
import { CartProvider } from "@/context/cart-context";
import { Navbar } from "@/components/navbar";
import { FreightBar } from "@/components/freight-bar";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luxe Joias | Pratas 925 - Goiânia",
  description: "Alianças, anéis e correntes em prata 925 com garantia. Entregamos para todo o Brasil.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <CartProvider>
          <FreightBar />
          <Navbar />
          <CartDrawer />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
