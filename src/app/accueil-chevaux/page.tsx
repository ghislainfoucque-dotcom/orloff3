"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import PricingTable from "@/components/PricingTable";

export default function AccueilChevaux() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/accueil-chevaux-hero.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <SectionTitle
            title="Accueil des chevaux"
            subtitle="Au centre équestre Orloff 3, nous proposons des solutions d'hébergement et de soins pour poneys et chevaux, dans un cadre suivi et convivial."
            light
          />
        </div>
      </section>

      {/* Présentation */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Home className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-anthracite">
                Nos formules
              </h2>
            </div>
            <p className="text-anthracite/70 text-lg leading-relaxed">
              Avec <strong>une soixantaine d&apos;équidés</strong>, nous avons l&apos;habitude d&apos;organiser
              les soins et les sorties au quotidien.
              Selon vos besoins, votre équidé peut être hébergé <strong>en box</strong>, <strong>en
              paddock</strong>, ou en <strong>formule mixte (box + paddock)</strong>.
            </p>
          </div>
        </AnimatedSection>

        {/* Tarifs — Licence et cotisation obligatoires */}
        <PricingTable
          title="Prestation Paddock"
          headers={["Type d'équidé", "Tarif mensuel"]}
          rows={[
            { label: "Cheval", price: "350€/mois" },
            { label: "Poney", price: "280€/mois" },
            { label: "Shetland", price: "130€/mois" },
          ]}
        />

        <PricingTable
          title="Prestation Paddock/Box (Box ouvert sur Paddock)"
          headers={["Type d'équidé", "Tarif mensuel"]}
          rows={[{ label: "Poney", price: "320€/mois" }]}
        />

        <PricingTable
          title="Prestation Box + Paddock"
          headers={["Type d'équidé", "Tarif mensuel"]}
          rows={[
            { label: "Cheval", price: "450€/mois" },
            { label: "Poney", price: "365€/mois" },
          ]}
        />

        <PricingTable
          title="Prestation Paddock + Box (hiver)"
          headers={["Type d'équidé", "Mois sans box", "Mois d'hiver"]}
          rows={[
            { label: "Shetland", adherent: "130€/mois", proprietaire: "200€/mois" },
            { label: "Poney", adherent: "280€/mois", proprietaire: "380€/mois" },
            { label: "Cheval", adherent: "350€/mois", proprietaire: "475€/mois" },
          ]}
          note="Forfait couverture : 20€. Licence et cotisation obligatoires. En cas d'absence, les 6 premiers jours de la prestation sont dus ; au-delà, demi-tarif calculé au prorata du nombre de jours."
        />

        {/* CTA */}
        <AnimatedSection className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white font-semibold text-lg rounded-full hover:bg-accent/90 transition-colors shadow-lg"
          >
            Nous contacter pour une visite <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
