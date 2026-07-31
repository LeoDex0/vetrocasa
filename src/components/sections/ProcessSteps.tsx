import { ClipboardList, Hammer, MessageSquare, ShieldCheck } from "lucide-react";
import { Reveal, RevealStagger, StaggerItem } from "@/components/ui/Reveal";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Sopralluogo gratuito",
    text: "Veniamo a misurare direttamente sul posto e valutiamo insieme le soluzioni migliori.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Preventivo su misura",
    text: "Ricevi un preventivo dettagliato, senza sorprese, in base alle tue reali esigenze.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Produzione e posa",
    text: "Realizziamo e installiamo i tuoi infissi con tecnici specializzati, nel rispetto dei tempi concordati.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Garanzia e assistenza",
    text: "Restiamo a disposizione dopo la posa, con garanzia estesa su materiali e lavorazione.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <Reveal className="max-w-2xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent-dark">
          Come lavoriamo
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold text-ink text-balance sm:text-4xl">
          Dal sopralluogo alla garanzia, senza pensieri
        </h2>
      </Reveal>

      <RevealStagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <StaggerItem key={s.step} className="relative rounded-2xl border border-ink/8 bg-white p-6">
            <span className="font-display text-4xl font-extrabold text-paper-dim">
              {s.step}
            </span>
            <s.icon className="mt-3 h-6 w-6 text-accent-dark" strokeWidth={1.4} />
            <h3 className="mt-3 font-sans text-[15px] font-semibold text-ink">
              {s.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.text}</p>
          </StaggerItem>
        ))}
      </RevealStagger>
    </section>
  );
}
