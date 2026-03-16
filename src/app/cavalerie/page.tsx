"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

const categories = [
  {
    title: "Shetlands",
    desc: "On les adore pour leur petite bouille… et surtout pour leur gentillesse ! Des poneys calmes et fiables, parfaitement adaptés aux premiers pas des enfants. Avec eux, les plus jeunes montent en confiance, dans un cadre sécurisé. Ultra, Muffin, Olaf ou encore Hemma vous attendent !",
    image: "/cavalerie-01.png",
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Poneys",
    desc: "À chaque âge (et à chaque niveau), son poney : une taille et un tempérament adaptés pour apprendre dans de bonnes conditions. Nos poneys, sélectionnés pour leur gentillesse et leur fiabilité, accompagnent les enfants dans leur progression en toute confiance et en sécurité.",
    image: "/cavalerie-poneys.png",
    color: "bg-secondary/10 text-secondary",
  },
  {
    title: "Chevaux",
    desc: "Même si certains de nos poneys conviennent aussi aux cavaliers adultes, nos chevaux restent de formidables partenaires de travail : généreux et pédagogues. Sayann, India, Macho ou encore Ukkel vous accompagneront dans votre progression.",
    image: "/cavalerie-chevaux.jpg",
    color: "bg-anthracite/10 text-anthracite",
  },
];

export default function Cavalerie() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/cavalerie-hero.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <SectionTitle
            title="Notre cavalerie"
            subtitle="Du shetland au cheval, en passant par des poneys B, C et D: une cavalerie variée et adaptée à tous les âges et à tous les niveaux. Ici, chacun trouve sa monture pour progresser en confiance"
            light
          />
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 0.1}>
              <div
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${cat.color}`}
                  >
                    {cat.title}
                  </div>
                  <h2 className="font-display text-3xl font-bold text-anthracite mb-4">
                    {cat.title}
                  </h2>
                  <p className="text-anthracite/70 leading-relaxed text-lg">
                    {cat.desc}
                  </p>
                </div>
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10] ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
