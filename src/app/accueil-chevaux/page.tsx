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

        {/* Tarifs */}
        <PricingTable
          title="Paddock seul"
          headers={["Type d'équidé", "Tarif mensuel"]}
          rows={[
            { label: "Chevaux", price: "325€/mois" },
            { label: "Poneys C & D", price: "265€/mois" },
            { label: "Poneys B", price: "170€/mois" },
            { label: "Shetlands", price: "120€/mois" },
          ]}
        />

        <PricingTable
          title="Paddock + Box"
          headers={["Type d'équidé", "Tarif mensuel"]}
          rows={[
            { label: "Chevaux", price: "425€/mois" },
            { label: "Poneys C & D", price: "345€/mois" },
            { label: "Poneys B", price: "235€/mois" },
          ]}
        />

        <PricingTable
          title="Box/Paddock (Box ouvert sur Paddock)"
          headers={["Type d'équidé", "Tarif mensuel"]}
          rows={[
            { label: "Chevaux", price: "375€/mois" },
            { label: "Poneys D", price: "305€/mois" },
          ]}
          note="Règlements la première quinzaine du mois. Journée d'absence programmée au-delà de 6 jours facturée 10€."
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
