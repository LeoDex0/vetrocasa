import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { Reveal } from "@/components/ui/Reveal";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24">
      <div className="blueprint-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-paper text-balance sm:text-4xl">
            Pronto a rinnovare le finestre di casa tua?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] text-paper/60">
            Richiedi un sopralluogo gratuito: ti rispondiamo entro 24 ore con una prima stima.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contatti"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-accent-bright"
            >
              Richiedi un preventivo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={company.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-7 py-3.5 font-sans text-sm font-medium text-paper transition-colors hover:border-paper/50"
            >
              <MessageCircle className="h-4 w-4" />
              Scrivici su WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
