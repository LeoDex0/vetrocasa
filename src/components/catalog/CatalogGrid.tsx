"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";
import { SlidersHorizontal } from "lucide-react";

export default function CatalogGrid({ products }: { products: Product[] }) {
  const prices = products.map((p) => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const widths = useMemo(
    () => Array.from(new Set(products.map((p) => p.width))).sort((a, b) => a - b),
    [products]
  );
  const heights = useMemo(
    () => Array.from(new Set(products.map((p) => p.height))).sort((a, b) => a - b),
    [products]
  );

  const [priceMax, setPriceMax] = useState(maxPrice);
  const [selectedWidths, setSelectedWidths] = useState<number[]>([]);
  const [selectedHeights, setSelectedHeights] = useState<number[]>([]);

  const toggle = (list: number[], value: number, setList: (v: number[]) => void) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const filtered = products.filter((p) => {
    if (p.price > priceMax) return false;
    if (selectedWidths.length && !selectedWidths.includes(p.width)) return false;
    if (selectedHeights.length && !selectedHeights.includes(p.height)) return false;
    return true;
  });

  return (
    <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
      <aside className="h-fit rounded-2xl border border-ink/8 bg-white p-6 lg:sticky lg:top-28">
        <div className="mb-6 flex items-center gap-2 text-ink">
          <SlidersHorizontal className="h-4 w-4" />
          <span className="font-sans text-sm font-semibold uppercase tracking-wide">Filtra</span>
        </div>

        <div className="mb-6">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-wide text-muted">
            Prezzo, € — fino a {priceMax.toLocaleString("it-IT")}
          </p>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={priceMax}
            onChange={(e) => setPriceMax(Number(e.target.value))}
            className="w-full accent-accent-dark"
          />
        </div>

        <div className="mb-6">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-wide text-muted">
            Larghezza, cm
          </p>
          <div className="flex flex-wrap gap-2">
            {widths.map((w) => (
              <button
                key={w}
                onClick={() => toggle(selectedWidths, w, setSelectedWidths)}
                className={`rounded-full border px-3 py-1.5 font-sans text-xs transition-colors ${
                  selectedWidths.includes(w)
                    ? "border-accent-dark bg-accent-dark/15 text-ink"
                    : "border-ink/12 text-ink/60 hover:border-ink/25"
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-wide text-muted">
            Altezza, cm
          </p>
          <div className="flex flex-wrap gap-2">
            {heights.map((h) => (
              <button
                key={h}
                onClick={() => toggle(selectedHeights, h, setSelectedHeights)}
                className={`rounded-full border px-3 py-1.5 font-sans text-xs transition-colors ${
                  selectedHeights.includes(h)
                    ? "border-accent-dark bg-accent-dark/15 text-ink"
                    : "border-ink/12 text-ink/60 hover:border-ink/25"
                }`}
              >
                {h}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <div>
        <p className="mb-5 font-sans text-sm text-muted">
          {filtered.length} {filtered.length === 1 ? "prodotto" : "prodotti"} disponibili
        </p>
        {filtered.length ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-ink/15 p-12 text-center text-muted">
            Nessun prodotto corrisponde ai filtri selezionati.
          </div>
        )}
      </div>
    </div>
  );
}
