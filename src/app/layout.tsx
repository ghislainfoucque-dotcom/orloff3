import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Centre Équestre Orloff III — Marseille",
    template: "%s | Orloff III",
  },
  description:
    "Centre équestre au cœur de Marseille. Cours d'équitation, stages vacances, pension chevaux, concours. École Française d'Équitation depuis 1987.",
  keywords: [
    "centre équestre",
    "Marseille",
    "équitation",
    "poney",
    "cours",
    "stages",
    "pension chevaux",
    "Orloff",
  ],
  openGraph: {
    title: "Centre Équestre Orloff III — Marseille",
    description:
      "Au cœur de Marseille, dans un cadre verdoyant avec vue panoramique. Cours, stages, pension, concours.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body text-anthracite bg-cream texture-overlay antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
