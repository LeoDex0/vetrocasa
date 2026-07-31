"use client";

import { motion } from "motion/react";
import type { Product } from "@/data/products";
import { CategoryGlyph } from "./categoryIcon";
import { company } from "@/data/company";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.55, delay: (index % 8) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-sm transition-shadow hover:shadow-lg hover:shadow-ink/10"
    >
      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-paper-dim to-paper">
        <div className="blueprint-grid absolute inset-0 opacity-70" />
        <CategoryGlyph
          category={product.category}
          className="relative h-16 w-16 text-ink/25 transition-transform duration-500 group-hover:scale-110 group-hover:text-accent-dark/70"
        />
        <span className="absolute bottom-3 right-3 rounded-full bg-ink/85 px-2.5 py-1 font-sans text-[11px] font-medium text-paper">
          {product.width} × {product.height} cm
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-sans text-sm font-semibold leading-snug text-ink">
          {product.name}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="font-display text-xl font-bold text-ink">
            € {product.price.toLocaleString("it-IT")}
          </span>
          <a
            href={company.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink px-4 py-2 font-sans text-[12px] font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-accent-dark hover:text-ink"
          >
            Richiedi
          </a>
        </div>
      </div>
    </motion.div>
  );
}
