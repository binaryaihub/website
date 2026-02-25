import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { ProductCard } from "@/components/products/product-card";
import { AppStoreBadges } from "@/components/products/app-store-badges";
import { products } from "@/config/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our AI-powered mobile apps for iOS and Android. Smart tools designed to make your life better.",
};

export default function ProductsPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedContainer>
          <SectionHeader
            title="Our Products"
            description="We're building a suite of AI-powered mobile applications. Each product is crafted to solve real problems with intelligent technology."
          />
        </AnimatedContainer>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>

        <AnimatedContainer delay={0.4} className="mt-16 text-center">
          <p className="mb-4 text-muted-foreground">
            Our apps will be available on both major platforms.
          </p>
          <div className="flex justify-center">
            <AppStoreBadges />
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
}
