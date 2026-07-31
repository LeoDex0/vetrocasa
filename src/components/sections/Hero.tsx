"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Award, BadgeCheck, Phone, Wrench } from "lucide-react";
import { company } from "@/data/company";

const badges = [
  { icon: BadgeCheck, label: "Preventivo gratuito" },
  { icon: Award, label: "Garanzia 5 anni" },
  { icon: Wrench, label: "Posa in opera inclusa" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink">
      <Image
        src="/images/hero-house-windows.jpg"
        alt="Finestre e porte in PVC installate in una villa moderna"
        fill
        priority
        className="animate-kenburns object-cover opacity-60"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-sans text-xs font-semibold uppercase tracking-[0.35em] text-accent"
        >
          Rimini · dal 2010
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-[1.05] text-paper text-balance sm:text-6xl lg:text-7xl"
        >
          Finestre e porte in PVC, su misura per casa tua
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 max-w-xl text-[17px] leading-relaxed text-paper/75"
        >
          {company.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/contatti"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-accent-bright"
          >
            Richiedi un preventivo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-7 py-3.5 font-sans text-sm font-medium text-paper transition-colors hover:border-paper/50"
          >
            <Phone className="h-4 w-4" />
            {company.phone}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-paper/15 pt-7"
        >
          {badges.map((b) => (
            <span key={b.label} className="flex items-center gap-2 text-[13px] font-medium text-paper/70">
              <b.icon className="h-4 w-4 text-accent" />
              {b.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
