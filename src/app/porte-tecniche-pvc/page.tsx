import type { Metadata } from "next";
import CategoryPage from "@/components/catalog/CategoryPage";

export const metadata: Metadata = {
  title: "Porte tecniche in PVC — VetroCasa",
  description:
    "Porte tecniche in PVC per cantine, garage e locali di servizio: robuste, impermeabili e a bassa manutenzione.",
};

export default function Page() {
  return <CategoryPage slug="porte-tecniche-pvc" />;
}
