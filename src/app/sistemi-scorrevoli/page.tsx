import type { Metadata } from "next";
import CategoryPage from "@/components/catalog/CategoryPage";

export const metadata: Metadata = {
  title: "Sistemi scorrevoli — Windows Style Trading",
  description:
    "Sistemi scorrevoli e alzanti-scorrevoli in PVC per grandi luci vetrate. Vendita e installazione a Rimini.",
};

export default function Page() {
  return <CategoryPage slug="sistemi-scorrevoli" />;
}
