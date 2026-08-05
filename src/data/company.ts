export const company = {
  name: "VetroCasa",
  nameSuffix: "",
  tagline: "Finestre e porte in PVC su misura, da oltre 15 anni a Rimini",
  description:
    "Vendita e installazione di finestre, porte, portoncini blindati e sistemi scorrevoli in PVC. Qualità certificata, prezzi di fabbrica, consulenza e posa in opera incluse.",
  phone: "+39 0541 234 567",
  phoneSecondary: "+39 333 123 4567",
  whatsapp: "+39 333 123 4567",
  whatsappLink: "https://wa.me/393331234567",
  email: "info@vetrocasa-rimini.it",
  address: {
    line1: "Via Emilia, 120",
    line2: "",
    city: "Rimini",
  },
  hours: [
    { days: "Lun – Ven", hours: "9:00 – 13:00 / 15:00 – 19:00" },
    { days: "Sabato", hours: "9:00 – 13:00" },
    { days: "Domenica", hours: "Chiuso" },
  ],
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
  },
  stats: [
    { value: 15, suffix: "+", label: "Anni di esperienza" },
    { value: 3200, suffix: "+", label: "Infissi installati" },
    { value: 98, suffix: "%", label: "Clienti soddisfatti" },
    { value: 5, suffix: "", label: "Anni di garanzia" },
  ],
} as const;
