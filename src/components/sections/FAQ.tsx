"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/faq";
import { Reveal } from "@/components/ui/Reveal";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent-dark">
          Domande frequenti
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold text-ink text-balance sm:text-4xl">
          Tutto quello che vuoi sapere prima di iniziare
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 divide-y divide-ink/8 rounded-2xl border border-ink/8 bg-white">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.question}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-sans text-[15px] font-semibold text-ink">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-paper-dim text-ink"
                >
                  <Plus className="h-4 w-4" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
