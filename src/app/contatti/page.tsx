import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company } from "@/data/company";
import { Reveal } from "@/components/ui/Reveal";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contatti — VetroCasa",
  description:
    "Contatta VetroCasa a Rimini per un preventivo gratuito su finestre, porte e sistemi scorrevoli in PVC.",
};

const mapQuery = encodeURIComponent(
  `${company.address.line1}, ${company.address.city}, Italia`
);

export default function ContattiPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pt-24">
        <Reveal className="max-w-2xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent-dark">
            Contatti
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-ink text-balance sm:text-5xl">
            Parliamo del tuo progetto
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Scrivici, chiamaci o passa in showroom: rispondiamo entro 24 ore con una prima
            valutazione gratuita.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal className="space-y-6">
            <div className="flex items-start gap-4 rounded-2xl border border-ink/8 bg-white p-5">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" />
              <div>
                <p className="font-sans text-sm font-semibold text-ink">Telefono</p>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="text-sm text-muted hover:text-ink">
                  {company.phone}
                </a>
                <br />
                <a href={`tel:${company.phoneSecondary.replace(/\s/g, "")}`} className="text-sm text-muted hover:text-ink">
                  {company.phoneSecondary}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-ink/8 bg-white p-5">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" />
              <div>
                <p className="font-sans text-sm font-semibold text-ink">WhatsApp</p>
                <a
                  href={company.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-ink"
                >
                  Scrivici direttamente in chat
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-ink/8 bg-white p-5">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" />
              <div>
                <p className="font-sans text-sm font-semibold text-ink">Email</p>
                <a href={`mailto:${company.email}`} className="text-sm text-muted hover:text-ink">
                  {company.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-ink/8 bg-white p-5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" />
              <div>
                <p className="font-sans text-sm font-semibold text-ink">Showroom</p>
                <p className="text-sm text-muted">
                  {company.address.line1}, {company.address.line2}
                  <br />
                  {company.address.city}, Italia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-ink/8 bg-white p-5">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" />
              <div>
                <p className="font-sans text-sm font-semibold text-ink">Orari</p>
                <ul className="text-sm text-muted">
                  {company.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-6">
                      <span>{h.days}</span>
                      <span>{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-ink/8 bg-white p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-ink">Richiedi un preventivo</h2>
            <p className="mt-2 text-sm text-muted">
              Compila il modulo: aprirà WhatsApp con il messaggio già pronto da inviarci.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <Reveal className="overflow-hidden rounded-3xl border border-ink/8">
          <iframe
            title="Mappa showroom VetroCasa"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            className="h-[400px] w-full grayscale"
            loading="lazy"
          />
        </Reveal>
      </section>
    </>
  );
}
