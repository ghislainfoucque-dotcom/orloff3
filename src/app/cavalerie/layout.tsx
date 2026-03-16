import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre cavalerie",
  description:
    "Shetlands, poneys B, C, D et chevaux : découvrez notre cavalerie variée au Centre Équestre Orloff III à Marseille.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
