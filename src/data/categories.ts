export type Category = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  image: string;
  heroImage: string;
};

export const categories: Category[] = [
  {
    slug: "finestre-pvc",
    title: "Finestre in PVC",
    shortTitle: "Finestre",
    tagline: "Isolamento termico e acustico superiore",
    description:
      "Finestre in PVC multicamera con doppio o triplo vetro, su misura per ogni apertura. Massimo isolamento termico e acustico, ridotta manutenzione e ampia scelta di colori e finiture RAL.",
    image: "/images/category-finestre.jpg",
    heroImage: "/images/category-finestre.jpg",
  },
  {
    slug: "porte-pvc",
    title: "Porte in PVC",
    shortTitle: "Porte",
    tagline: "Portoncini d'ingresso su misura",
    description:
      "Portoncini d'ingresso in PVC con vetrata, sabbiatura o molding decorativo. Struttura rinforzata, tenuta stagna e design pensato per l'ingresso di casa tua.",
    image: "/images/category-porte-pvc.jpg",
    heroImage: "/images/category-porte-pvc.jpg",
  },
  {
    slug: "porte-blindate",
    title: "Porte blindate",
    shortTitle: "Blindate",
    tagline: "Sicurezza certificata per la tua casa",
    description:
      "Porte blindate con classe di sicurezza certificata, serratura multipunto e pannellature isolanti. La protezione della tua abitazione senza rinunciare all'estetica.",
    image: "/images/category-porte-blindate.jpg",
    heroImage: "/images/category-porte-blindate.jpg",
  },
  {
    slug: "porte-tecniche-pvc",
    title: "Porte tecniche in PVC",
    shortTitle: "Tecniche",
    tagline: "Soluzioni per ambienti tecnici e di servizio",
    description:
      "Porte tecniche in PVC resistenti all'umidità, ideali per cantine, garage, locali tecnici e ambienti di servizio. Robuste, impermeabili e a bassa manutenzione.",
    image: "/images/category-porte-tecniche.jpg",
    heroImage: "/images/category-porte-tecniche.jpg",
  },
  {
    slug: "sistemi-scorrevoli",
    title: "Sistemi scorrevoli",
    shortTitle: "Scorrevoli",
    tagline: "Ampi spazi vetrati, apertura fluida",
    description:
      "Sistemi scorrevoli e alzanti-scorrevoli in PVC per grandi luci vetrate. Massima luminosità, scorrimento fluido e tenuta termica anche su dimensioni importanti.",
    image: "/images/category-scorrevoli.jpg",
    heroImage: "/images/category-scorrevoli.jpg",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
