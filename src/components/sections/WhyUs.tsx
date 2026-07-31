import Image from "next/image";
import { Award, Gauge, PiggyBank, Wrench } from "lucide-react";
import { company } from "@/data/company";
import { Reveal, RevealStagger, StaggerItem } from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const points = [
  {
    icon: Gauge,
    title: "Isolamento certificato",
    text: "Profili multicamera in PVC con vetrocamera basso emissivo: meno dispersione termica, meno rumore.",
  },
  {
    icon: PiggyBank,
    title: "Prezzi di fabbrica",
    text: "Vendita diretta, senza intermediari: la stessa qualità dei brand premium a un prezzo più accessibile.",
  },
  {
    icon: Wrench,
    title: "Posa in opera inclusa",
    text: "Sopralluogo, misurazione e installazione a cura dei nostri tecnici, in tutta la provincia di Rimini.",
  },
  {
    icon: Award,
    title: "Garanzia 5 anni",
    text: "Ogni infisso è coperto da garanzia estesa su materiali, accessori e lavorazione.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-ink-soft py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <Reveal>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Perché sceglierci
            </p>
            <h2 className="mt-4 max-w-lg font-display text-3xl font-bold text-paper text-balance sm:text-4xl">
              Non vendiamo solo infissi. Garantiamo il risultato.
            </h2>
          </Reveal>

          <RevealStagger className="mt-10 grid gap-6 sm:grid-cols-2">
            {points.map((p) => (
              <StaggerItem key={p.title}>
                <p.icon className="h-6 w-6 text-accent" strokeWidth={1.4} />
                <h3 className="mt-3 font-sans text-[15px] font-semibold text-paper">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-paper/55">
                  {p.text}
                </p>
              </StaggerItem>
            ))}
          </RevealStagger>

          <Reveal delay={0.1}>
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-paper/10 pt-8 sm:grid-cols-4">
              {company.stats.map((s) => (
                <div key={s.label}>
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                    className="font-display text-3xl font-extrabold text-accent"
                  />
                  <p className="mt-1 text-xs leading-snug text-paper/50">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative min-h-[420px] overflow-hidden rounded-3xl lg:min-h-full">
          <Image
            src="/images/section-balcony.jpg"
            alt="Facciata moderna con infissi in PVC su misura"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
