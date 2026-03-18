"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Users,
  UserCheck,
  Trophy,
  Sun,
  Cake,
  GraduationCap,
  ArrowRight,
  TreePine,
  Fence,
  Route,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

/* ── Animated counter ── */
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl font-bold text-accent">
      {count}
      {suffix}
    </span>
  );
}

/* ── Activity cards data ── */
const activities = [
  { icon: Users, title: "Cours collectifs", desc: "Baby-poney dès 4 ans, enfants, ados et adultes" },
  { icon: UserCheck, title: "Cours particuliers", desc: "Objectifs personnalisés, reprise de confiance" },
  { icon: Trophy, title: "Concours — Coupe Orloff", desc: "1 dimanche/mois, Equifun et CSO 30 à 110 cm" },
  { icon: Sun, title: "Stages vacances", desc: "Une immersion idéale pour gagner en autonomie... tout en s'amusant !" },
  { icon: Cake, title: "Anniversaires", desc: "2h d'ateliers découverte poney, jeux et goûter" },
  { icon: GraduationCap, title: "Stages à thème / Animations", desc: "Programme variés pensé pour tous les âges et tous les niveaux." },
];

const cavalerieCards = [
  { title: "Shetlands", desc: "Des poneys calmes et fiables, parfaitement adaptés aux premiers pas des enfants.", image: "/cavalerie-01.png" },
  { title: "Poneys B, C et Poneys D", desc: "À chaque âge (et à chaque niveau), son poney.", image: "/cavalerie-poneys.png" },
  { title: "Les Chevaux", desc: "Nos chevaux sont de formidables partenaires de travail: généreux et pédagogues.", image: "/cavalerie-chevaux-new.png" },
];

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/photo-hp.png"
          alt="L'équipe du Centre Équestre Orloff avec chevaux et poneys"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/50" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-4 px-4 py-1 bg-accent/90 text-white text-sm font-semibold rounded-full">
              École Française d&apos;Équitation
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Centre Équestre
              <br />
              <span className="text-accent">ORLOFF III</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Au cœur de Marseille, dans un cadre verdoyant avec vue panoramique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/activites"
                className="px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-colors shadow-lg"
              >
                Nos activités
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ NOTRE HISTOIRE ═══ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <SectionTitle title="Notre histoire" className="text-left lg:text-left" />
              <p className="text-anthracite/70 leading-relaxed mb-6">
                Créé en 1987, l&apos;Association-Poney-Club a débuté ses activités à la
                Croix Rouge dans le 13ème arrondissement de Marseille. Rapidement
                l&apos;Association-Poney-Club du Bridl&apos;s dynamisée par son créateur
                Paul PEIFFER a eu l&apos;essor souhaité ! Très engagé dans la compétition
                les cavaliers brillent sur tous les terrains de la Région aux Championnats
                Nationaux et même Internationaux puisque un cavalier se détache du lot pour
                faire partie de l&apos;équipe de France de CSO.
              </p>
              <p className="text-anthracite/70 leading-relaxed mb-6">
                En 2000, la mauvaise nouvelle tombe, il va falloir déménager, les terrains
                sur lesquels le club est installé sont rachetés par des promoteurs
                immobiliers !
              </p>
              <p className="text-anthracite/70 leading-relaxed mb-6">
                Grâce à l&apos;esprit d&apos;équipe et l&apos;énergie du collectif de
                bénévoles, des cavaliers et des professionnels, la page du Bridl&apos;s est
                tournée pour laisser place à Orloff 3 chemin des Anémones. Sous la
                bienveillance du propriétaire du terrain, les installations sont construites
                en 3 mois : Jacques, Michel, Marie-Odile, Sylvie, Jeannette, Christian,
                Jean-Paul, Jean-Jacques tous ensemble nous relevons nos manches pour pouvoir
                accueillir la cavalerie et nos chers cavaliers!!
              </p>
              <p className="text-anthracite/70 leading-relaxed mb-8">
                Aujourd&apos;hui le club s&apos;étend sur 4 hectares, situé à 7 km de la
                Canebière ! Labellisée École Française d&apos;Équitation,
                l&apos;Association-Poney-Club Orloff 3 propose à ses adhérents un cadre
                familial et agréable entre ville et campagne pour pratiquer votre passion
                dans des conditions idéales !
              </p>
              <p className="text-right text-anthracite/70 font-semibold italic">
                Jeannette PEIFFER, Fondatrice
              </p>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/notre-histoire.png"
                  alt="Carrière d'obstacles du centre équestre Orloff III"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ CHIFFRES CLÉS ═══ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { end: 4, suffix: " ha", label: "de terrain", icon: TreePine },
              { end: 3, suffix: "", label: "carrières", icon: Fence },
              { end: 1, suffix: "", label: "chemin de balade", icon: Route },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.15}>
                <div className="relative bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center group hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <Counter end={stat.end} suffix={stat.suffix} />
                  <p className="text-anthracite/60 mt-3 text-sm uppercase tracking-wider font-medium">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAVALERIE APERÇU ═══ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Notre cavalerie"
            subtitle="Du shetland au cheval, en passant par des poneys B, C et D: une cavalerie variée et adaptée à tous les âges et à tous les niveaux. Ici, chacun trouve sa monture pour progresser en confiance"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 items-end">
            {cavalerieCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-50 group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-display text-lg font-bold text-anthracite mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-anthracite/60">{card.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/cavalerie"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-md"
            >
              Découvrir notre cavalerie <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ ACTIVITÉS APERÇU ═══ */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Nos activités" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {activities.map((act, i) => (
              <AnimatedSection key={act.title} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-50 group cursor-pointer h-full">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <act.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-anthracite mb-2">
                    {act.title}
                  </h3>
                  <p className="text-sm text-anthracite/60">{act.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/activites"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-md"
            >
              Voir toutes nos activités <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA CONTACT ═══ */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à rejoindre Orloff 3 ?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Venez découvrir notre centre équestre et rejoignez une communauté
              passionnée au cœur de Marseille.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-accent text-white font-semibold text-lg rounded-full hover:bg-accent/90 transition-colors shadow-lg"
            >
              Nous contacter
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
