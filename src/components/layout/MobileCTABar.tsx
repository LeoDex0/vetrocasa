"use client";

import { motion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";
import { company } from "@/data/company";

export default function MobileCTABar() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-ink-line bg-ink lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={`tel:${company.phone.replace(/\s/g, "")}`}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 font-sans text-sm font-semibold text-paper"
      >
        <Phone className="h-4 w-4" />
        Chiama
      </a>
      <div className="w-px bg-ink-line" />
      <a
        href={company.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] py-3.5 font-sans text-sm font-semibold text-white"
      >
        <MessageCircle className="h-4 w-4" fill="currentColor" strokeWidth={0} />
        WhatsApp
      </a>
    </motion.div>
  );
}
