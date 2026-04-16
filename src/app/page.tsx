import { Hero } from "@/components/hero";
import { CategoryNav } from "@/components/category-nav";
import { ProductGrid } from "@/components/product-grid";
import { PromoBanner } from "@/components/promo-banner";
import { TrustSection } from "@/components/trust-section";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryNav />
      <ProductGrid />
      <PromoBanner />
      <TrustSection />
    </>
  );
}
