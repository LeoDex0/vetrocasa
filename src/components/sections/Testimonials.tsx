import { Star } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { Reveal } from "@/components/ui/Reveal";

const avatarPalette = ["#6c98bf", "#b4d44a", "#cd212a"];

function Card({ t, i }: { t: Testimonial; i: number }) {
  return (
    <div className="mx-3 flex h-full w-[320px] shrink-0 flex-col rounded-2xl border border-paper/10 bg-white/[0.03] p-6 sm:w-[380px]">
      <div className="flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, s) => (
          <Star key={s} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-paper/75">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-paper/10 pt-5">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full font-sans text-xs font-bold text-ink"
          style={{ background: avatarPalette[i % avatarPalette.length] }}
        >
          {t.initials}
        </span>
        <div>
          <p className="font-sans text-sm font-semibold text-paper">{t.name}</p>
          <p className="text-xs text-paper/50">{t.location}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-ink-soft py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Cosa dicono di noi
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-paper text-balance sm:text-4xl">
            La fiducia dei nostri clienti
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="group relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink-soft to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-soft to-transparent sm:w-32" />
        <div
          className="animate-marquee flex w-max [animation-duration:48s] group-hover:[animation-play-state:paused]"
        >
          {testimonials.map((t, i) => (
            <Card key={`a-${t.name}`} t={t} i={i} />
          ))}
          {testimonials.map((t, i) => (
            <Card key={`b-${t.name}`} t={t} i={i} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
