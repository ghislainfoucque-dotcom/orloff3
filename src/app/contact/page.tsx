"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Facebook, Instagram, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

export default function Contact() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionTitle
            title="Nous contacter"
            subtitle="Une question, une inscription, une visite ? N'hésitez pas à nous écrire ou à nous appeler."
            light
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Photo */}
          <AnimatedSection direction="right">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/contact-photo.png"
                alt="Cavaliers et poneys au centre équestre Orloff III"
                width={800}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Infos + Carte */}
          <AnimatedSection direction="left" delay={0.15}>
            <div className="space-y-8">
              {/* Coordonnées */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="font-display text-2xl font-bold text-anthracite mb-6">
                  Nos coordonnées
                </h2>
                <div className="space-y-4">
                  <a
                    href="https://maps.google.com/?q=43.3052,5.4442"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-anthracite/70 hover:text-primary transition-colors"
                  >
                    <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                    <span>45 Chemin des Anémones, 13012 MARSEILLE</span>
                  </a>
                  <a
                    href="tel:0687912141"
                    className="flex items-center gap-3 text-anthracite/70 hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 shrink-0 text-primary" />
                    06 87 91 21 41
                  </a>
                  <a
                    href="https://www.facebook.com/centreequestreorloff3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-anthracite/70 hover:text-primary transition-colors"
                  >
                    <Facebook className="w-5 h-5 shrink-0 text-primary" />
                    Facebook — Orloff III
                  </a>
                  <a
                    href="https://www.instagram.com/centre_equestre_orloff3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-anthracite/70 hover:text-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5 shrink-0 text-primary" />
                    Instagram — Orloff III
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link
                    href="/contact/tarifs"
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors"
                  >
                    Consulter nos tarifs <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Carte */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  title="Carte Centre Équestre Orloff 3"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=5.435%2C43.300%2C5.453%2C43.310&layer=mapnik&marker=43.3052%2C5.4442"
                  width="100%"
                  height="300"
                  className="border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
