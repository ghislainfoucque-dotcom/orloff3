import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Team",
  description:
    "Rencontrez l'équipe de moniteurs et monitrices du Centre Équestre Orloff III à Marseille. Diplômés et passionnés.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
