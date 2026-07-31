import { MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";

export default function TopBar() {
  return (
    <div className="hidden bg-ink text-paper/80 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs lg:px-10">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <Phone className="h-3.5 w-3.5" />
            {company.phone}
          </a>
          <a
            href={company.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-[#25D366]/15 px-2.5 py-1 text-[#25D366] transition-colors hover:bg-[#25D366]/25"
          >
            WhatsApp
          </a>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-paper/60">
            <MapPin className="h-3.5 w-3.5" />
            {company.address.city} · {company.address.line1}, {company.address.line2}
          </span>
          <div className="flex items-center gap-3.5">
            <a href={company.social.facebook} aria-label="Facebook" className="transition-colors hover:text-accent">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href={company.social.instagram} aria-label="Instagram" className="transition-colors hover:text-accent">
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
