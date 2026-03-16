"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

const team = [
  {
    name: "Florence",
    desc: "Toujours avec le sourire ! Florence est là pour vous accueillir et vous fournir tous les renseignements possibles. C'est elle qui vous guidera vers la solution la plus adaptée pour vous !",
  },
  {
    name: "Mathieu C",
    desc: "Après avoir été cavalier du club, il a choisi d'y construire sa carrière. Il encadre les cavaliers les plus confirmés et accompagne la Team Orloff 3 sur les concours externes, avec générosité et exigence.",
    image: "/team-mathieu.png",
  },
  {
    name: "Cécile P",
    desc: "Cavalière du club depuis de nombreuses années avant de devenir monitrice, Cécile encadre les cavaliers des niveaux intermédiaire à confirmé avec une approche progressive, toujours dans la bonne humeur.",
    image: "/team-cecile.png",
  },
  {
    name: "Marie-Charlotte",
    desc: "Originaire d'Auvergne, Marie-Charlotte enseigne l'équitation depuis 25 ans. Aujourd'hui, elle accompagne les cavaliers de tous niveaux et partage volontiers ses connaissances avec pédagogie et bienveillance.",
  },
  {
    name: "Manon",
    desc: "Cavalière du club depuis l'enfance, elle le connaît par coeur. En formation animatrice d'équitation, Manon encadre les petits débutants et les 'Galop 1'. Elle co-organise aussi les anniversaires et les animations avec une approche douce et pédagogique.",
    image: "/team-manon.jpg",
  },
  {
    name: "Helena",
    desc: "Helena supervise l'équipe des palefreniers. Toujours aux petits soins pour les chevaux et poneys, elle répond avec générosité à toutes les questions sur le bien-être des équidés.",
    image: "/team-helena.png",
  },
  {
    name: "Camille et Lotfi",
    desc: "Sans eux, les poneys et les chevaux seraient bien malheureux ! Toujours sur le pont ils assurent l'entretien et l'alimentation de nos poneys et chevaux.",
  },
];

export default function LaTeam() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/team-hero.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <SectionTitle
            title="La Team Orloff III"
            subtitle="Une équipe de monitrices et moniteurs dynamiques et motivés pour accompagner chaque cavalier dans sa progression, du débutant au confirmé."
            light
          />
        </div>
      </section>

      {/* Team list */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {team.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.08}>
              <div className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-50 ${member.image ? "flex flex-col md:flex-row overflow-hidden" : "p-8"}`}>
                {member.image && (
                  <div className="relative w-full md:w-64 h-56 md:h-auto flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                )}
                <div className={member.image ? "p-8" : ""}>
                  <h3 className="font-display text-2xl font-bold text-primary mb-3">
                    {member.name}
                  </h3>
                  <p className="text-anthracite/70 leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </section>
    </div>
  );
}
