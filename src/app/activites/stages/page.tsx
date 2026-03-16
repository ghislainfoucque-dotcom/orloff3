"use client";

import Link from "next/link";
import { Sun, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

/* Tarifs stages */
const stages = [
  { qty: "1 stage", price: "40€" },
  { qty: "2 stages", price: "70€" },
  { qty: "3 stages", price: "100€" },
  { qty: "4 stages", price: "130€" },
  { qty: "5 stages (demi-semaine)", price: "160€" },
  { qty: "6 stages", price: "180€" },
  { qty: "7 stages", price: "200€" },
  { qty: "8 stages", price: "220€" },
  { qty: "9 stages", price: "240€" },
  { qty: "10 stages (semaine complète)", price: "260€" },
];

export default function Stages() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionTitle
            title="Stages vacances"
            subtitle="Pendant les vacances scolaires, profitez de stages en demi-journée pour progresser tout en s'amusant."
            light
          />
        </div>
      </section>

      {/* Format */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Sun className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-display text-2xl font-bold text-anthracite">
                Format des stages
              </h2>
            </div>
            <p className="text-anthracite/70 text-lg leading-relaxed">
              Nos stages se déroulent en <strong>demi-journées de 3 heures</strong>,
              le matin ou l&apos;après-midi. Ils sont ouverts à tous les niveaux et
              permettent de travailler en petit groupe sur la technique, les soins
              aux chevaux et la préparation aux galops.
            </p>
          </div>
        </AnimatedSection>

        {/* Tableau tarifs */}
        <AnimatedSection delay={0.1}>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-anthracite mb-6 text-center">
            Tarifs dégressifs
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-6 py-4 font-semibold">Formule</th>
                  <th className="text-right px-6 py-4 font-semibold">Tarif</th>
                </tr>
              </thead>
              <tbody>
                {stages.map((s, i) => (
                  <tr
                    key={s.qty}
                    className={`border-b border-gray-50 ${
                      i % 2 === 0 ? "bg-white" : "bg-cream"
                    }`}
                  >
                    <td className="px-6 py-4 text-anthracite">{s.qty}</td>
                    <td className="px-6 py-4 text-right font-bold text-primary text-base">
                      {s.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-anthracite/50 mt-4 italic text-center">
            Paiement à la réservation — réservation à l&apos;avance conseillée
          </p>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.2} className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white font-semibold text-lg rounded-full hover:bg-accent/90 transition-colors shadow-lg"
          >
            Réserver un stage <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
