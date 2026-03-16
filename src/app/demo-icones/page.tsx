"use client";

import {
  ChevalProfil,
  Poney,
  Shetland,
  TeteChevalFace,
  CavalierGalop,
  CavalierDressage,
  SautObstacles,
  EnfantPoney,
  BabyPoney,
  Carriere,
  BoxEcurie,
  Paddock,
  ClubHouse,
  StageVacances,
  Anniversaire,
  ConcoursRosette,
  GalopFederal,
  GroupeScolaire,
} from "@/components/icons/OrloffIcons";

const icons = [
  { Component: ChevalProfil, label: "1. Cheval de profil", category: "Animaux" },
  { Component: Poney, label: "2. Poney", category: "Animaux" },
  { Component: Shetland, label: "3. Shetland", category: "Animaux" },
  { Component: TeteChevalFace, label: "4. Tête de cheval face", category: "Animaux" },
  { Component: CavalierGalop, label: "5. Cavalier au galop", category: "Équitation" },
  { Component: CavalierDressage, label: "6. Dressage", category: "Équitation" },
  { Component: SautObstacles, label: "7. Saut d'obstacles", category: "Équitation" },
  { Component: EnfantPoney, label: "8. Enfant sur poney", category: "Équitation" },
  { Component: BabyPoney, label: "9. Baby-poney", category: "Équitation" },
  { Component: Carriere, label: "10. Carrière", category: "Lieux" },
  { Component: BoxEcurie, label: "11. Box d'écurie", category: "Lieux" },
  { Component: Paddock, label: "12. Paddock", category: "Lieux" },
  { Component: ClubHouse, label: "13. Club-house", category: "Lieux" },
  { Component: StageVacances, label: "14. Stage vacances", category: "Activités" },
  { Component: Anniversaire, label: "15. Anniversaire", category: "Activités" },
  { Component: ConcoursRosette, label: "16. Concours / Rosette", category: "Activités" },
  { Component: GalopFederal, label: "17. Galop fédéral", category: "Activités" },
  { Component: GroupeScolaire, label: "18. Groupe scolaire", category: "Activités" },
];

const categories = ["Animaux", "Équitation", "Lieux", "Activités"];

export default function DemoIcones() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4">
      <h1 className="font-display text-4xl font-bold text-anthracite mb-2 text-center">
        Pictogrammes Orloff 3
      </h1>
      <p className="text-anthracite/60 text-center mb-12">
        18 icônes vectorielles — style croquis au trait fin
      </p>

      {categories.map((cat) => (
        <div key={cat} className="mb-16">
          <h2 className="font-display text-2xl font-bold text-anthracite mb-6 border-b border-gray-200 pb-2">
            {cat}
          </h2>

          {/* Fond clair (#FAFAF7) */}
          <h3 className="text-sm uppercase tracking-wider text-anthracite/50 mb-3">
            Sur fond clair
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
            {icons
              .filter((ic) => ic.category === cat)
              .map((ic) => (
                <div
                  key={ic.label}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl"
                  style={{ backgroundColor: "#FAFAF7" }}
                >
                  <ic.Component size={64} color="#1a1a1a" />
                  <span className="text-xs text-anthracite/70 text-center leading-tight">
                    {ic.label}
                  </span>
                </div>
              ))}
          </div>

          {/* Fond bleu (#0F71C3) */}
          <h3 className="text-sm uppercase tracking-wider text-anthracite/50 mb-3">
            Sur fond bleu
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
            {icons
              .filter((ic) => ic.category === cat)
              .map((ic) => (
                <div
                  key={ic.label + "-blue"}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl"
                  style={{ backgroundColor: "#0F71C3" }}
                >
                  <ic.Component size={64} color="#ffffff" />
                  <span className="text-xs text-white/80 text-center leading-tight">
                    {ic.label}
                  </span>
                </div>
              ))}
          </div>

          {/* Tailles variées */}
          <h3 className="text-sm uppercase tracking-wider text-anthracite/50 mb-3">
            Tailles : 32px / 48px / 64px / 96px
          </h3>
          <div className="flex items-end gap-6 flex-wrap mb-4">
            {icons
              .filter((ic) => ic.category === cat)
              .slice(0, 1)
              .map((ic) =>
                [32, 48, 64, 96].map((sz) => (
                  <div key={`${ic.label}-${sz}`} className="flex flex-col items-center gap-1">
                    <ic.Component size={sz} color="#1a1a1a" />
                    <span className="text-[10px] text-anthracite/40">{sz}px</span>
                  </div>
                ))
              )}
          </div>
        </div>
      ))}
    </div>
  );
}
