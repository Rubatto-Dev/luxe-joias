import { Hero } from "@/components/hero";
import { ProductGrid } from "@/components/product-grid";
import { TrustSection } from "@/components/trust-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <TrustSection />
    </>
  );
}
