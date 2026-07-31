export type Product = {
  id: string;
  category: string;
  name: string;
  width: number;
  height: number;
  price: number;
};

export const products: Product[] = [
  // Finestre in PVC
  { id: "fin-100x100", category: "finestre-pvc", name: "Finestra PVC", width: 100, height: 100, price: 232 },
  { id: "fin-120x120", category: "finestre-pvc", name: "Finestra PVC", width: 120, height: 120, price: 293 },
  { id: "fin-150x150", category: "finestre-pvc", name: "Finestra PVC", width: 150, height: 150, price: 378 },
  { id: "fin-60x80", category: "finestre-pvc", name: "Finestra PVC", width: 60, height: 80, price: 111 },
  { id: "fin-90x140", category: "finestre-pvc", name: "Finestra PVC", width: 90, height: 140, price: 268 },
  { id: "fin-140x140", category: "finestre-pvc", name: "Finestra PVC", width: 140, height: 140, price: 405 },

  // Porte in PVC
  { id: "porte-vetrata-120x210", category: "porte-pvc", name: "Portoncino d'ingresso in PVC vetrata", width: 120, height: 210, price: 712 },
  { id: "porte-vetrata-90x210", category: "porte-pvc", name: "Portoncino d'ingresso in PVC vetrata", width: 90, height: 210, price: 404 },
  { id: "porte-piena-90x210-a", category: "porte-pvc", name: "Portoncino d'ingresso in PVC", width: 90, height: 210, price: 704 },
  { id: "porte-piena-90x210-b", category: "porte-pvc", name: "Portoncino d'ingresso in PVC", width: 90, height: 210, price: 577 },
  { id: "porte-molding-90x210", category: "porte-pvc", name: "Portoncino d'ingresso in PVC con molding", width: 90, height: 210, price: 649 },
  { id: "porte-sabbiatura-90x210-a", category: "porte-pvc", name: "Portoncino d'ingresso in PVC con sabbiatura", width: 90, height: 210, price: 611 },
  { id: "porte-sabbiatura-90x210-b", category: "porte-pvc", name: "Portoncino d'ingresso in PVC con sabbiatura", width: 90, height: 210, price: 633 },

  // Porte blindate
  { id: "blindata-90x210-classe3", category: "porte-blindate", name: "Porta blindata classe 3", width: 90, height: 210, price: 1180 },
  { id: "blindata-90x210-classe4", category: "porte-blindate", name: "Porta blindata classe 4", width: 90, height: 210, price: 1450 },
  { id: "blindata-100x210", category: "porte-blindate", name: "Porta blindata classe 3", width: 100, height: 210, price: 1290 },
  { id: "blindata-120x210-doppia", category: "porte-blindate", name: "Porta blindata a doppio battente", width: 120, height: 210, price: 1780 },

  // Porte tecniche in PVC
  { id: "tecnica-80x200", category: "porte-tecniche-pvc", name: "Porta tecnica in PVC", width: 80, height: 200, price: 285 },
  { id: "tecnica-90x200", category: "porte-tecniche-pvc", name: "Porta tecnica in PVC", width: 90, height: 200, price: 312 },
  { id: "tecnica-100x210", category: "porte-tecniche-pvc", name: "Porta tecnica in PVC idrorepellente", width: 100, height: 210, price: 349 },

  // Sistemi scorrevoli
  { id: "scorrevole-200x210", category: "sistemi-scorrevoli", name: "Sistema scorrevole 2 ante", width: 200, height: 210, price: 890 },
  { id: "scorrevole-300x210", category: "sistemi-scorrevoli", name: "Sistema scorrevole 2 ante", width: 300, height: 210, price: 1240 },
  { id: "alzante-360x220", category: "sistemi-scorrevoli", name: "Alzante-scorrevole 3 ante", width: 360, height: 220, price: 2180 },
  { id: "alzante-450x220", category: "sistemi-scorrevoli", name: "Alzante-scorrevole 4 ante", width: 450, height: 220, price: 2790 },
];

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}
