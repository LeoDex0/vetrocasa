"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { company } from "@/data/company";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={company.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 lg:flex"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50 [animation-duration:2.5s]" />
      <MessageCircle className="relative h-6 w-6" fill="currentColor" strokeWidth={0} />
    </motion.a>
  );
}
