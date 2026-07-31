import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";
import { Reveal } from "@/components/ui/Reveal";

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <Reveal className="max-w-2xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent-dark">
          Il nostro catalogo
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold text-ink text-balance sm:text-4xl">
          Cinque famiglie di prodotto, un solo standard di qualità
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <Reveal key={cat.slug} delay={i * 0.08}>
            <Link
              href={`/${cat.slug}`}
              className={`group relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl ${
                i === 0 ? "lg:col-span-2 lg:h-[23rem]" : ""
              }`}
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
              <div className="relative p-6">
                <h3 className="font-display text-xl font-bold text-paper">
                  {cat.title}
                </h3>
                <p className="mt-1.5 text-sm text-paper/70">{cat.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wide text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Scopri di più
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
