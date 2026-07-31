"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { company } from "@/data/company";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Ciao! Sono ${name || "un cliente"} (tel: ${phone || "-"}).%0A%0A${encodeURIComponent(
      message || "Vorrei richiedere un preventivo."
    )}`;
    window.open(`${company.whatsappLink}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wide text-muted">
          Nome e cognome
        </label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent-dark"
          placeholder="Mario Rossi"
        />
      </div>
      <div>
        <label className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wide text-muted">
          Telefono
        </label>
        <input
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent-dark"
          placeholder="+39 333 1234567"
        />
      </div>
      <div>
        <label className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wide text-muted">
          Cosa ti serve?
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent-dark"
          placeholder="Es. 4 finestre in PVC 120x140 per un appartamento a Rimini"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-sans text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-accent-dark hover:text-ink sm:w-auto"
      >
        Invia su WhatsApp
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
