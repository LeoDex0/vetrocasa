import { notFound } from "next/navigation";
import { getCategory } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import PageHero from "@/components/ui/PageHero";
import CatalogGrid from "@/components/catalog/CatalogGrid";
import CTASection from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export default function CategoryPage({ slug }: { slug: string }) {
  const category = getCategory(slug);
  if (!category) notFound();

  const products = getProductsByCategory(slug);

  return (
    <>
      <PageHero
        eyebrow={category.shortTitle}
        title={category.title}
        description={category.description}
        image={category.heroImage}
      />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Reveal className="mb-12 max-w-2xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent-dark">
            Catalogo
          </p>
          <h2 className="mt-4 font-display text-2xl font-bold text-ink text-balance sm:text-3xl">
            {category.tagline}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Misure e prezzi indicativi di alcuni modelli disponibili. Ogni infisso viene comunque
            realizzato su misura: contattaci per un preventivo preciso in base alle tue aperture.
          </p>
        </Reveal>
        <CatalogGrid products={products} />
      </section>
      <CTASection />
    </>
  );
}
