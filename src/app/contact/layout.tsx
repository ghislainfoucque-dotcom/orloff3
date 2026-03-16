import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nous contacter",
  description:
    "Contactez le Centre Équestre Orloff III à Marseille. Formulaire, téléphone, adresse et carte. 45 Chemin des Anémones, 13012.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
