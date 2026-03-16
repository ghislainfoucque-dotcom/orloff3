import Link from "next/link";
import { MapPin, Phone, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Coordonnées */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">ORLOFF III</h3>
            <p className="text-white/70 text-sm mb-4">
              Centre Équestre au cœur de Marseille
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="https://maps.google.com/?q=43.3052,5.4442"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/80 hover:text-accent transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                45 Chemin des Anémones, 13012 MARSEILLE
              </a>
              <a
                href="tel:0687912141"
                className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                06 87 91 21 41
              </a>
              <a
                href="https://www.facebook.com/centreequestreorloff3/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
              >
                <Facebook className="w-4 h-4 shrink-0" />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/centre_equestre_orloff3/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
              >
                <Instagram className="w-4 h-4 shrink-0" />
                Instagram
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Accueil", href: "/" },
                { name: "Nos activités", href: "/activites" },
                { name: "Stages vacances", href: "/activites/stages" },
                { name: "Accueil des chevaux", href: "/accueil-chevaux" },
                { name: "Notre cavalerie", href: "/cavalerie" },
                { name: "La Team", href: "/la-team" },
                { name: "Nous contacter", href: "/contact" },
                { name: "Tarifs", href: "/contact/tarifs" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Carte */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Nous trouver
            </h4>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Carte Centre Équestre Orloff 3"
                src="https://www.openstreetmap.org/export/embed.html?bbox=5.438%2C43.302%2C5.450%2C43.308&layer=mapnik&marker=43.3052%2C5.4442"
                width="100%"
                height="200"
                className="border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/50">
          <p>&copy; 2025 Centre Équestre Orloff III. Tous droits réservés.</p>
          <p>Mentions légales</p>
        </div>
      </div>
    </footer>
  );
}
