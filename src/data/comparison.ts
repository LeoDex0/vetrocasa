export type ComparisonScore = 1 | 2 | 3 | 4 | 5;

export type ComparisonRow = {
  label: string;
  legno: ComparisonScore;
  alluminio: ComparisonScore;
  pvc: ComparisonScore;
};

export const comparisonRows: ComparisonRow[] = [
  { label: "Isolamento termico", legno: 3, alluminio: 2, pvc: 5 },
  { label: "Isolamento acustico", legno: 3, alluminio: 2, pvc: 5 },
  { label: "Manutenzione richiesta", legno: 2, alluminio: 4, pvc: 5 },
  { label: "Durata nel tempo", legno: 3, alluminio: 5, pvc: 5 },
  { label: "Rapporto qualità/prezzo", legno: 2, alluminio: 3, pvc: 5 },
];
