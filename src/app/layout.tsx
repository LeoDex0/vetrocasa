import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/layout/Preloader";
import ScrollProgress from "@/components/layout/ScrollProgress";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VetroCasa — Finestre e Porte in PVC a Rimini",
  description:
    "Finestre, porte, portoncini blindati e sistemi scorrevoli in PVC su misura. Vendita e installazione a Rimini, prezzi di fabbrica e consulenza gratuita.",
  keywords: [
    "finestre PVC Rimini",
    "porte PVC Rimini",
    "portoncini blindati Rimini",
    "sistemi scorrevoli PVC",
    "infissi Rimini",
  ],
};

export const viewport: Viewport = {
  themeColor: "#15171a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${manrope.variable} ${inter.variable}`}>
      <body className="min-h-full bg-paper text-ink antialiased">
        <SmoothScroll>
          <Preloader />
          <ScrollProgress />
          <TopBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <MobileCTABar />
        </SmoothScroll>
      </body>
    </html>
  );
}
