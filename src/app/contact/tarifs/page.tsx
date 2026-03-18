"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import PricingTable from "@/components/PricingTable";

export default function Tarifs() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/tarifs-hero.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <SectionTitle
            title="Tarifs & inscription"
            subtitle="Retrouvez l'ensemble de nos tarifs pour la saison en cours. N'hésitez pas à nous contacter pour toute question."
            light
          />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: "Baby", id: "baby" },
            { label: "Enfants", id: "enfants" },
            { label: "Ados & Adultes", id: "adultes" },
            { label: "Stages vacances", id: "stages" },
            { label: "Animations", id: "animations" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() =>
                document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="px-5 py-2 bg-white text-primary font-semibold text-sm rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── BABY ── */}
        <AnimatedSection>
          <div id="baby" className="bg-white rounded-2xl shadow-lg p-8 mb-6 scroll-mt-24">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-anthracite mb-2">
              Baby (4-5 ans)
            </h2>
            <p className="text-anthracite/60 mb-1">
              Cotisation : <strong>155€</strong> — si règlement avant le 1er juillet 2025 : <strong>135€</strong>
            </p>
            <p className="text-anthracite/60 mb-6">
              Licence : <strong>26€</strong>
            </p>

            <PricingTable
              title="Cours collectifs (40 min)"
              headers={["Formule", "Adhérent", "Propriétaire"]}
              rows={[
                { label: "Carte 4 cours (valable 2 mois)", adherent: "88€", proprietaire: "56€" },
                { label: "Abonnement 9 cours* (valable 3 mois)", adherent: "189€", proprietaire: "117€" },
                { label: "Cours à l'unité", adherent: "29€", proprietaire: "23€" },
              ]}
              note="* Soit l'heure de base à 21€ (adhérent) / 13€ (propriétaire)"
            />
          </div>
        </AnimatedSection>

        {/* ── ENFANTS ── */}
        <AnimatedSection>
          <div id="enfants" className="bg-white rounded-2xl shadow-lg p-8 mb-6 mt-10 scroll-mt-24">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-anthracite mb-2">
              Enfants (6-12 ans)
            </h2>
            <p className="text-anthracite/60 mb-1">
              Cotisation : <strong>165€</strong> — si règlement avant le 1er juillet 2025 : <strong>145€</strong>
            </p>
            <p className="text-anthracite/60 mb-6">
              Licence : <strong>26€</strong>
            </p>

            <PricingTable
              title="Cours collectifs 1h"
              headers={["Formule", "Adhérent", "Propriétaire"]}
              rows={[
                { label: "Abonnement annuel", adherent: "25€/cours**", proprietaire: "15,5€/cours**" },
                { label: "Carte 10 cours (Valable 3 mois)", adherent: "275€", proprietaire: "175€" },
                { label: "Cours à l'unité", adherent: "31€", proprietaire: "25€" },
              ]}
              note="** nombre de cours à valider à l'inscription"
            />

            <PricingTable
              title="Cours particuliers"
              headers={["Formule", "Adhérent", "Propriétaire"]}
              rows={[{ label: "Cours particulier 30 min", adherent: "32€", proprietaire: "32€" }]}
            />
          </div>
        </AnimatedSection>

        {/* ── ADOS & ADULTES ── */}
        <AnimatedSection>
          <div id="adultes" className="bg-white rounded-2xl shadow-lg p-8 mb-6 mt-10 scroll-mt-24">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-anthracite mb-2">
              Ados & Adultes (13 ans+)
            </h2>
            <p className="text-anthracite/60 mb-6">
              Cotisation : <strong>180€</strong> — si règlement avant le 1er juillet 2025 : <strong>160€</strong>
              <br />
              Cotisation étudiante (carte étudiante obligatoire) : <strong>110€</strong>
              <br />
              Licence Mineurs : <strong>26€</strong> | Majeurs : <strong>38€</strong>
            </p>

            <PricingTable
              title="Cours collectifs 1h"
              headers={["Formule", "Adhérent", "Propriétaire"]}
              rows={[
                { label: "Abonnement annuel", adherent: "26€/cours**", proprietaire: "17€/cours**" },
                { label: "Carte 10 cours (Valable 3 mois)", adherent: "280€", proprietaire: "180€" },
                { label: "Cours à l'unité", adherent: "32€", proprietaire: "26€" },
                { label: "Carte 10 cours étudiant (Valable 3 mois)", adherent: "155€", proprietaire: "125€" },
                { label: "Cours étudiant à l'unité", adherent: "21€", proprietaire: "18€" },
              ]}
              note="** nombre de cours à valider à l'inscription"
            />

            <PricingTable
              title="Cours particuliers"
              headers={["Formule", "Adhérent", "Propriétaire"]}
              rows={[{ label: "Cours particulier 30 min", adherent: "32€", proprietaire: "32€" }]}
            />
          </div>
        </AnimatedSection>

        {/* ── STAGES VACANCES ── */}
        <AnimatedSection>
          <div id="stages" className="bg-white rounded-2xl shadow-lg p-8 mb-6 mt-10 scroll-mt-24">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-anthracite mb-2">
              Stages vacances à la carte
            </h2>
            <p className="text-anthracite/60 mb-6">
              1 stage = 3 heures (9h-12h ou 14h-17h) — <strong>40€</strong>
            </p>

            <PricingTable
              title="Tarif dégressif (valable sur la même semaine)"
              headers={["Nombre de stages", "Tarif"]}
              rows={[
                { label: "2 stages", price: "70€" },
                { label: "3 stages", price: "100€" },
                { label: "4 stages", price: "130€" },
                { label: "5 stages / demi-semaine", price: "160€" },
                { label: "6 stages", price: "180€" },
                { label: "7 stages", price: "200€" },
                { label: "8 stages", price: "220€" },
                { label: "9 stages", price: "240€" },
                { label: "10 stages / semaine complète", price: "260€" },
              ]}
            />
          </div>
        </AnimatedSection>

        {/* ── ANIMATIONS & DIVERS ── */}
        <AnimatedSection>
          <div id="animations" className="bg-white rounded-2xl shadow-lg p-8 mb-6 mt-10 scroll-mt-24">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-anthracite mb-6">
              Animations & Divers
            </h2>

            <PricingTable
              title="Tarifs animations et divers"
              headers={["Prestation", "Adhérent", "Propriétaire"]}
              rows={[
                { label: "Promenade Shetland 30 min", adherent: "10€", proprietaire: "—" },
                { label: "Promenade Shetland 1h", adherent: "20€", proprietaire: "—" },
                { label: "Animation (selon programme)", adherent: "à partir de 20€", proprietaire: "—" },
                { label: "Passage de galop", adherent: "25€", proprietaire: "—" },
                { label: "Concours club", adherent: "40€", proprietaire: "28€" },
                { label: "Équifun", adherent: "20€", proprietaire: "—" },
                { label: "Concours extérieur", adherent: "115€", proprietaire: "105€" },
                { label: "Groupe / scolaire", sublabel: "En fonction du nombre d'enfants, de l'âge et de la durée", adherent: "sur devis", proprietaire: "—" },
                { label: "Anniversaire (min. 10 enfants)", adherent: "17€/enfant", proprietaire: "—" },
              ]}
            />
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center mt-16">
          <div className="bg-primary rounded-2xl p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Prêt à vous inscrire ?
            </h3>
            <p className="text-white/80 mb-6">
              Contactez-nous pour finaliser votre inscription ou obtenir plus de renseignements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-colors shadow-lg"
            >
              Nous contacter <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
