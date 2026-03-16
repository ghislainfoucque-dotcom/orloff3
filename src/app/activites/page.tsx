"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Users,
  UserCheck,
  Trophy,
  Sparkles,
  Award,
  Cake,
  TreePine,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

const activites = [
  {
    icon: Users,
    title: "Cours collectifs",
    image: "/insta-02.png",
    tarifLink: "/contact/tarifs#baby",
    tarifLabel: "Voir les tarifs",
  },
  {
    icon: UserCheck,
    title: "Cours particuliers",
    image: "/insta-05.png",
    tarifLink: "/contact/tarifs#adultes",
    tarifLabel: "Voir les tarifs",
  },
  {
    icon: Trophy,
    title: "Concours : CSO, Dressage et Equifun",
    image: "/insta-03.png",
    tarifLink: "/contact/tarifs#animations",
    tarifLabel: "Voir les tarifs concours",
  },
  {
    icon: Sparkles,
    title: "Animations",
    image: "/insta-10.png",
    tarifLink: "/contact/tarifs#animations",
    tarifLabel: "Voir les tarifs animations",
  },
  {
    icon: Award,
    title: "Préparation aux examens Fédéraux (G1 à G7)",
    image: "/examens-federaux.png",
    tarifLink: "/contact/tarifs#animations",
    tarifLabel: "Voir les tarifs",
  },
  {
    icon: Cake,
    title: "Anniversaires",
    image: "/insta-06.png",
    tarifLink: "/contact/tarifs#animations",
    tarifLabel: "Voir les tarifs anniversaires",
  },
  {
    icon: TreePine,
    title: "Balade en poney shetland",
    image: "/insta-07.png",
    tarifLink: "/contact/tarifs#animations",
    tarifLabel: "Voir les tarifs balades",
  },
  {
    icon: GraduationCap,
    title: "Accueil des écoles",
    image: "/accueil-ecoles.png",
    tarifLink: "/contact/tarifs#animations",
    tarifLabel: "Voir les tarifs",
  },
];

function ActivityDesc({ index }: { index: number }) {
  const descs = [
    // Cours collectifs
    <>
      <p>Le centre équestre Orloff 3 propose des cours collectifs adaptés à l&apos;âge et au niveau de chacun : du baby-poney dès 4 ans à l&apos;adulte débutant ou confirmé.</p>
      <p>Au fil des séances, vous progressez dans les disciplines de l&apos;équitation classique : dressage, saut d&apos;obstacles (CSO), Hunter, et bien d&apos;autres approches pédagogiques selon les objectifs du groupe.</p>
      <p>Pour le confort et la qualité d&apos;enseignement, nous disposons de 3 carrières permettant d&apos;organiser les cours dans de bonnes conditions.</p>
    </>,
    // Cours particuliers
    <>
      <p>Envie d&apos;un accompagnement sur mesure ? Les cours particuliers permettent de travailler à votre rythme, avec l&apos;enseignant de votre choix.</p>
      <p>Ils peuvent être réalisés :</p>
      <ul className="list-disc pl-6 my-2">
        <li>avec votre cheval (cavaliers propriétaires)</li>
        <li>ou avec nos poneys/chevaux d&apos;instruction.</li>
      </ul>
      <p>Objectifs possibles : reprendre confiance, consolider les bases, progresser plus vite, se perfectionner dans une discipline (dressage/obstacle…), ou préparer une balade/randonnée en gagnant de l&apos;aisance en carrière, en toute sérénité.</p>
    </>,
    // Concours
    <>
      <p>Orloff 3 organise un dimanche par mois une compétition interne : la Coupe Orloff.</p>
      <ul className="list-disc pl-6 my-2">
        <li>Matin : épreuves Equifun</li>
        <li>Après-midi : CSO de 30 cm à 110 cm</li>
      </ul>
      <p>Les cavaliers peuvent aussi participer à des concours extérieurs, accompagnés de notre moniteur. La liste des dates est communiquée à l&apos;automne. Le club assure l&apos;organisation (engagements, coaching, transport) ; les frais liés aux engagements restent à la charge des cavaliers engagés.</p>
    </>,
    // Animations
    <>
      <p>Au poney-club Orloff 3, la saison est rythmée par un programme d&apos;animations variées, pensé pour tous les âges et tous les niveaux.</p>
      <p>Au fil de l&apos;année :</p>
      <ul className="list-disc pl-6 my-2">
        <li>Séances à thème : pony-games, voltige, horseball, equifun…</li>
        <li>Challenges et jeux en équipe (coopération, chrono, relais)</li>
        <li>Ateliers de perfectionnement : dressage, obstacle/CSO, hunter</li>
        <li>Grands rendez-vous saisonniers : Carnaval, Pâques, Halloween, Noël…</li>
        <li>Temps forts du club : portes ouvertes, kermesse/tombola, buvette, fête du club…</li>
      </ul>
      <p>Autant d&apos;occasions de se retrouver, de partager l&apos;esprit du club et de créer de beaux souvenirs en famille.</p>
    </>,
    // Galops
    <>
      <p>Le passage des Galops permet d&apos;évaluer les compétences pratiques et théoriques acquises tout au long de l&apos;année. Ils peuvent être nécessaires pour certaines compétitions selon la discipline.</p>
      <p>Nous organisons les passages de Galops sur des séances d&apos;examen programmées le dimanche. Les stages vacances sont aussi l&apos;occasion idéale de réviser et de consolider les attendus (pratique + théorie).</p>
    </>,
    // Anniversaires
    <>
      <p>Pour un anniversaire original au club : 2 heures d&apos;ateliers ludiques et pédagogiques :</p>
      <ul className="list-disc pl-6 my-2">
        <li>découverte du poney et soins,</li>
        <li>jeux, parcours, initiation voltige (selon l&apos;âge).</li>
      </ul>
      <p>Le club-house ou la pergola (selon la météo) sont à votre disposition pour le goûter et souffler les bougies. Contactez-nous pour construire une fête inoubliable !</p>
    </>,
    // Balade shetland
    <>
      <p>Offrez à votre enfant une balade de 30 minutes ou 1 heure sur un poney Shetland, sur les petits chemins du club. Les parents accompagnent à pied leur enfant tout au long de la balade.</p>
    </>,
    // Accueil scolaires
    <>
      <p>Orloff 3 accueille, sur demande, des groupes scolaires. Sur un format journée (pique-nique), l&apos;équipe propose des animations adaptées, selon l&apos;âge des enfants, leur niveau et les objectifs pédagogiques.</p>
    </>,
  ];
  return <div className="text-anthracite/70 leading-relaxed text-lg space-y-3">{descs[index]}</div>;
}

export default function Activites() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/insta-14.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <SectionTitle
            title="Nos activités"
            subtitle="Du baby-poney aux concours, en passant par les stages et les anniversaires : il y en a pour tous les âges et tous les niveaux."
            light
          />
        </div>
      </section>

      {/* Activités alternées */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activites.map((act, i) => (
          <div
            key={act.title}
            className={`grid lg:grid-cols-2 gap-10 items-center mb-20 last:mb-0 ${
              i % 2 === 1 ? "lg:direction-rtl" : ""
            }`}
          >
            <AnimatedSection
              direction={i % 2 === 0 ? "right" : "left"}
              className={i % 2 === 1 ? "lg:order-2" : ""}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <act.icon className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-anthracite">
                  {act.title}
                </h2>
              </div>
              <ActivityDesc index={i} />
              {act.tarifLink && (
                <Link
                  href={act.tarifLink}
                  className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  {act.tarifLabel} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </AnimatedSection>
            <AnimatedSection
              direction={i % 2 === 0 ? "left" : "right"}
              delay={0.15}
              className={i % 2 === 1 ? "lg:order-1" : ""}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10]">
                <Image
                  src={act.image}
                  alt={act.title}
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Envie de découvrir nos activités
            </h2>
            <p className="text-white/80 mb-8">
              N&apos;hésitez pas à venir nous voir sur place ou à nous contacter
            </p>
            <Link
              href="/contact/tarifs"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-colors"
            >
              Tarifs et inscription <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
