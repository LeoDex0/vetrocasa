import type { Metadata } from "next";
import CategoryPage from "@/components/catalog/CategoryPage";

export const metadata: Metadata = {
  title: "Porte in PVC — VetroCasa",
  description:
    "Portoncini d'ingresso in PVC su misura, con vetrata, sabbiatura o molding decorativo. Vendita e installazione.",
};

export default function Page() {
  return <CategoryPage slug="porte-pvc" />;
}
