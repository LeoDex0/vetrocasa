import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { categories } from "@/data/categories";
import Logo from "@/components/ui/Logo";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-20 text-paper">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-16 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-10 lg:px-10">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
            {company.description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={company.social.facebook}
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-paper/15 transition-colors hover:border-accent hover:text-accent"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={company.social.instagram}
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-paper/15 transition-colors hover:border-accent hover:text-accent"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.25em] text-accent">
            Prodotti
          </p>
          <ul className="space-y-3">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/${c.slug}`}
                  className="text-sm text-paper/70 transition-colors hover:text-paper"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.25em] text-accent">
            Contatti
          </p>
          <ul className="space-y-3 text-sm text-paper/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {company.address.line1}, {company.address.line2}
                <br />
                {company.address.city}
              </span>
            </li>
            <li>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-paper"
              >
                <Phone className="h-4 w-4" />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 hover:text-paper"
              >
                <Mail className="h-4 w-4" />
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-line px-6 py-6 pb-20 lg:px-10 lg:pb-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Windows Style Trading. Tutti i diritti riservati.</p>
          <p>P.IVA 00000000000 · Rimini, Italia</p>
        </div>
      </div>
    </footer>
  );
}
