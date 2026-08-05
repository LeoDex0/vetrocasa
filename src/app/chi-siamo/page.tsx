import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/sections/CTASection";
import { Reveal, RevealStagger, StaggerItem } from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Chi siamo — VetroCasa",
  description:
    "VetroCasa: vendita e installazione di finestre e porte in PVC a Rimini, da oltre 15 anni al fianco dei nostri clienti.",
};

const values = [
  "Solo materiali certificati, selezionati dai migliori produttori europei",
  "Sopralluogo e misurazione sempre inclusi, senza costi nascosti",
  "Squadra di posa interna, non subappaltata",
  "Preventivo chiaro entro 24 ore dalla richiesta",
];

export default function ChiSiamoPage() {
  return (
    <>
      <PageHero
        eyebrow="Chi siamo"
        title="Un punto vendita, l'esperienza di un'officina artigiana"
        description="VetroCasa nasce a Rimini con un obiettivo semplice: rendere accessibile la qualità degli infissi in PVC, senza intermediari e senza compromessi sulla posa."
        image="/images/about-workshop.jpg"
      />

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <Reveal className="relative min-h-[360px] overflow-hidden rounded-3xl lg:min-h-full">
          <Image
            src="/images/about-workshop.jpg"
            alt="Lavorazione artigianale degli infissi"
            fill
            loading="eager"
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent-dark">
              La nostra storia
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink text-balance sm:text-4xl">
              Dal magazzino all&apos;installazione, seguiamo ogni fase
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Il nostro showroom si trova in Via Emilia a Rimini: qui puoi vedere e toccare con
              mano i profili, i vetri e le finiture prima di scegliere. Lavoriamo con privati,
              amministratori di condominio e imprese edili, seguendo ogni commessa dal sopralluogo
              alla garanzia post-installazione.
            </p>
          </Reveal>

          <RevealStagger className="mt-8 space-y-3">
            {values.map((v) => (
              <StaggerItem key={v} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" />
                <span className="text-sm leading-relaxed text-ink/80">{v}</span>
              </StaggerItem>
            ))}
          </RevealStagger>

          <Reveal delay={0.1}>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-ink/10 pt-8 sm:grid-cols-4">
              {company.stats.map((s) => (
                <div key={s.label}>
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                    className="font-display text-3xl font-extrabold text-ink"
                  />
                  <p className="mt-1 text-xs leading-snug text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
