import { Reveal } from "@/components/ui/Reveal";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function BeforeAfterSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent-dark">
          La differenza si vede
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold text-ink text-balance sm:text-4xl">
          Trascina per vedere la trasformazione
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          Da infissi datati e poco isolanti a finestre in PVC su misura, senza opere murarie invasive.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <BeforeAfterSlider />
      </Reveal>
    </section>
  );
}
