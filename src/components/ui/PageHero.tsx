import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative flex h-[52vh] min-h-[400px] items-end overflow-hidden bg-ink">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover opacity-55"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 lg:px-10">
        <Reveal>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-paper text-balance sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-paper/70">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
