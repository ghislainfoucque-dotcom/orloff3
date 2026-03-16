import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil des chevaux — Pension",
  description:
    "Pension pour chevaux et poneys à Marseille. Paddock, box ou formule combinée. Centre Équestre Orloff III.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
