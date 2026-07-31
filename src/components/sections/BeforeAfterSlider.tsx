"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-3xl sm:aspect-[16/8]"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
    >
      <Image
        src="/images/category-finestre.jpg"
        alt="Dopo: nuove finestre in PVC"
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 1100px, 100vw"
      />
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <Image
          src="/images/before-window-old.jpg"
          alt="Prima: vecchia finestra da sostituire"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 1100px, 100vw"
        />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-wide text-paper">
        Prima
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-accent px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-wide text-ink">
        Dopo
      </span>

      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-paper/90"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper shadow-lg">
          <MoveHorizontal className="h-5 w-5 text-ink" />
        </div>
      </div>
    </div>
  );
}
