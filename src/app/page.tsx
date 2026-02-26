import { Hero } from "@/components/sections/hero";
import { ProductsPreview } from "@/components/sections/products-preview";
import { BlogHighlights } from "@/components/sections/blog-highlights";
import { Support } from "@/components/sections/support";
import { CtaNewsletter } from "@/components/sections/cta-newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsPreview />
      <BlogHighlights />
      <Support />
      <CtaNewsletter />
    </>
  );
}
