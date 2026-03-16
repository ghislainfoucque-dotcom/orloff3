import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos activités",
  description:
    "Cours collectifs, particuliers, concours, stages, anniversaires et accueil scolaires au Centre Équestre Orloff III à Marseille.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
