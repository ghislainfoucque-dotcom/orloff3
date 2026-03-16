import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs & inscription",
  description:
    "Tarifs des cours, stages, concours et animations au Centre Équestre Orloff III à Marseille. Baby, enfants, ados et adultes.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
