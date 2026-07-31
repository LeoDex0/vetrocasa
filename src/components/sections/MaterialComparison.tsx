import { cn } from "@/lib/utils";
import { comparisonRows, type ComparisonScore } from "@/data/comparison";
import { Reveal } from "@/components/ui/Reveal";

function ScoreDots({ score, highlight = false }: { score: ComparisonScore; highlight?: boolean }) {
  return (
    <div className="flex justify-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "h-2 w-2 rounded-full",
            i < score ? (highlight ? "bg-accent-dark" : "bg-ink/70") : "bg-ink/10"
          )}
        />
      ))}
    </div>
  );
}

export default function MaterialComparison() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent-dark">
          Come si confronta il PVC
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold text-ink text-balance sm:text-4xl">
          Legno, alluminio o PVC?
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          Un confronto onesto tra i tre materiali più usati per finestre e porte in Italia.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[560px] border-separate border-spacing-0 overflow-hidden rounded-2xl border border-ink/8">
          <thead>
            <tr>
              <th className="bg-white p-5 text-left font-sans text-xs font-semibold uppercase tracking-wide text-muted">
                Caratteristica
              </th>
              <th className="bg-white p-5 text-center font-sans text-sm font-semibold text-ink/70">
                Legno
              </th>
              <th className="bg-white p-5 text-center font-sans text-sm font-semibold text-ink/70">
                Alluminio
              </th>
              <th className="bg-ink p-5 text-center font-display text-sm font-bold text-paper">
                PVC
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, i) => (
              <tr key={row.label}>
                <td
                  className={cn(
                    "border-t border-ink/8 bg-white p-5 font-sans text-sm text-ink/80",
                    i === comparisonRows.length - 1 && "rounded-bl-2xl"
                  )}
                >
                  {row.label}
                </td>
                <td className="border-t border-ink/8 bg-white p-5">
                  <ScoreDots score={row.legno} />
                </td>
                <td className="border-t border-ink/8 bg-white p-5">
                  <ScoreDots score={row.alluminio} />
                </td>
                <td
                  className={cn(
                    "border-t border-ink-line bg-ink-soft p-5",
                    i === comparisonRows.length - 1 && "rounded-br-2xl"
                  )}
                >
                  <ScoreDots score={row.pvc} highlight />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </section>
  );
}
