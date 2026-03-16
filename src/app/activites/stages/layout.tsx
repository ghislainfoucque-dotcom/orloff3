import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stages vacances",
  description:
    "Stages équestres pendant les vacances scolaires. Demi-journées de 3h, tarifs dégressifs. Centre Équestre Orloff III, Marseille.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
