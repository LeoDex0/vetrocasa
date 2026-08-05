import type { Metadata } from "next";
import CategoryPage from "@/components/catalog/CategoryPage";

export const metadata: Metadata = {
  title: "Finestre in PVC — VetroCasa",
  description:
    "Finestre in PVC multicamera su misura, isolamento termico e acustico certificato. Vendita e installazione a Rimini.",
};

export default function Page() {
  return <CategoryPage slug="finestre-pvc" />;
}
