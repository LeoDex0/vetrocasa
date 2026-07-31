// Recensioni di esempio — da sostituire con recensioni reali (Google/Facebook) prima della pubblicazione.
export type Testimonial = {
  initials: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    initials: "MR",
    name: "Marco R.",
    location: "Rimini",
    rating: 5,
    quote:
      "Sopralluogo puntuale e preventivo chiaro fin da subito. Le finestre nuove si sentono davvero: meno rumore dalla strada e bollette più leggere.",
  },
  {
    initials: "SB",
    name: "Silvia B.",
    location: "Riccione",
    rating: 5,
    quote:
      "Abbiamo sostituito tutti gli infissi di un appartamento in due giorni, senza sporcizia in casa. Squadra precisa e disponibile anche dopo la posa.",
  },
  {
    initials: "GF",
    name: "Giulia F.",
    location: "Bellaria",
    rating: 5,
    quote:
      "Prezzo onesto rispetto ad altri preventivi ricevuti, e la qualità dei materiali si vede. Consigliati per chi cerca serietà senza intermediari.",
  },
  {
    initials: "AT",
    name: "Andrea T.",
    location: "Rimini",
    rating: 5,
    quote:
      "Sistema scorrevole per il terrazzo montato in una mattinata. Scorre benissimo e d'inverno si sente già la differenza con il vecchio infisso.",
  },
  {
    initials: "PC",
    name: "Paola C.",
    location: "Santarcangelo",
    rating: 5,
    quote:
      "Portoncino blindato nuovo, tempi rispettati e nessuna sorpresa sul prezzo finale rispetto al preventivo. Personale sempre disponibile al telefono.",
  },
  {
    initials: "LV",
    name: "Luca V.",
    location: "Riccione",
    rating: 4,
    quote:
      "Ottimo rapporto qualità prezzo per le finestre in PVC del salone. Il montaggio ha richiesto un giorno in più del previsto ma il risultato è ottimo.",
  },
];
