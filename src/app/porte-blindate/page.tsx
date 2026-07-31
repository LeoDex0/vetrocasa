import type { Metadata } from "next";
import CategoryPage from "@/components/catalog/CategoryPage";

export const metadata: Metadata = {
  title: "Porte blindate — Windows Style Trading",
  description:
    "Porte blindate con classe di sicurezza certificata e serratura multipunto. Vendita e installazione a Rimini.",
};

export default function Page() {
  return <CategoryPage slug="porte-blindate" />;
}
