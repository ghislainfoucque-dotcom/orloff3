import React from "react";

/**
 * Pictogrammes vectoriels — Centre Équestre Orloff 3
 *
 * Chaque icône utilise un filtre SVG feTurbulence pour simuler
 * un trait dessiné à la main (tremblement naturel).
 * Les formes de base sont propres (Bézier, ellipses, arcs)
 * puis déformées par le filtre.
 */

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

const defaults = { size: 64, strokeWidth: 1.6 };

/** Filtre SVG partagé — tremblement de trait dessiné à la main */
function SketchFilter({ id }: { id: string }) {
  return (
    <defs>
      <filter id={id} x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence
          type="turbulence"
          baseFrequency="0.04"
          numOctaves={4}
          seed={2}
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale={1.8}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </defs>
  );
}

/** Wrapper SVG commun */
function Icon({
  children,
  size = defaults.size,
  color = "currentColor",
  strokeWidth = defaults.strokeWidth,
  className,
  id,
}: IconProps & { children: React.ReactNode; id: string }) {
  const filterId = `sketch-${id}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <SketchFilter id={filterId} />
      <g filter={`url(#${filterId})`}>{children}</g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   CATÉGORIE — Animaux / Cavalerie
   ═══════════════════════════════════════════════ */

/** 1. Cheval de profil — noble, élancé, crinière au vent */
export function ChevalProfil(props: IconProps) {
  return (
    <Icon {...props} id="cheval">
      {/* Tête */}
      <path d="M18 18 C16 14, 17 10, 20 8 C22 6.5, 24 7, 24 9" />
      {/* Oreilles */}
      <path d="M20.5 8 L19 4.5" />
      <path d="M22.5 7.5 L22 4" />
      {/* Oeil */}
      <circle cx="20" cy="12" r="1" fill="currentColor" stroke="none" />
      {/* Naseau */}
      <path d="M17 16.5 C17.5 17.2, 18.5 17, 19 16.5" />
      {/* Encolure */}
      <path d="M24 9 C27 12, 28 18, 28 24" />
      {/* Crinière fluide */}
      <path d="M22 7 C24 9, 25.5 13, 25 18" />
      <path d="M23 8.5 C25.5 11, 26.5 15, 26 20" />
      <path d="M24 10 C27 14, 27.5 18, 27 22" />
      {/* Dos */}
      <path d="M28 24 C32 22, 38 22, 44 24" />
      {/* Croupe */}
      <path d="M44 24 C47 26, 48 30, 47 34" />
      {/* Queue fluide */}
      <path d="M47 28 C50 24, 53 22, 55 20" />
      <path d="M47 30 C51 26, 54 25, 56 23" />
      {/* Poitrail */}
      <path d="M18 18 C17 22, 18 28, 22 34" />
      {/* Ventre */}
      <path d="M22 34 C28 38, 36 38, 42 36 C45 35, 47 34, 47 34" />
      {/* Jambe AV gauche */}
      <path d="M24 34 C23 40, 22 48, 22 54" />
      <path d="M21 54 L24 54" />
      {/* Jambe AV droite */}
      <path d="M30 36 C29 42, 28 48, 28 54" />
      <path d="M27 54 L30 54" />
      {/* Jambe AR gauche */}
      <path d="M38 37 C38 43, 37 49, 36 54" />
      <path d="M35 54 L38 54" />
      {/* Jambe AR droite (jarret visible) */}
      <path d="M44 34 C45 38, 46 42, 44 46 C43 49, 43 52, 43 54" />
      <path d="M42 54 L45 54" />
    </Icon>
  );
}

/** 2. Poney — trapu, bonhomme, plus petit */
export function Poney(props: IconProps) {
  return (
    <Icon {...props} id="poney">
      {/* Tête arrondie */}
      <path d="M16 24 C14 20, 15 15, 18 13 C20 11.5, 22 12, 22 14" />
      {/* Oreilles courtes */}
      <path d="M18.5 13 L17.5 10" />
      <path d="M20.5 12.5 L20.5 9.5" />
      {/* Oeil grand et expressif */}
      <circle cx="18" cy="18" r="1.3" fill="currentColor" stroke="none" />
      {/* reflet */}
      <circle cx="17.5" cy="17.5" r="0.3" fill="white" stroke="none" />
      {/* Bouche souriante */}
      <path d="M15 22 C16 23, 17.5 23, 18.5 22" />
      {/* Encolure épaisse */}
      <path d="M22 14 C24 17, 25 22, 25 28" />
      {/* Crinière courte et fournie */}
      <path d="M20 12 C22 13, 23 16, 23 19" />
      <path d="M21 11 C23.5 13, 24 17, 23.5 21" />
      {/* Corps rond et trapu */}
      <ellipse cx="35" cy="33" rx="13" ry="9" />
      {/* Queue courte */}
      <path d="M48 30 C50 27, 51 25, 50 23" />
      <path d="M48 32 C51 30, 52 28, 51 26" />
      {/* Pattes courtes */}
      <path d="M26 40 L25 52" />
      <path d="M24 52 L27 52" />
      <path d="M32 41 L31 52" />
      <path d="M30 52 L33 52" />
      <path d="M38 41 L38 52" />
      <path d="M37 52 L40 52" />
      <path d="M44 40 L45 52" />
      <path d="M44 52 L47 52" />
    </Icon>
  );
}

/** 3. Shetland — très petit, crinière épaisse et folle */
export function Shetland(props: IconProps) {
  return (
    <Icon {...props} id="shetland">
      {/* Corps très rond */}
      <ellipse cx="34" cy="36" rx="14" ry="10" />
      {/* Tête petite et ronde */}
      <ellipse cx="17" cy="22" rx="5" ry="4.5" />
      {/* Cou court */}
      <path d="M21 25 C22 28, 22 31, 22 34" />
      <path d="M19 26 C18 29, 19 32, 21 35" />
      {/* Oreilles toutes petites */}
      <path d="M15 18 L14 15" />
      <path d="M18 17.5 L18 14.5" />
      {/* Oeil */}
      <circle cx="16" cy="21" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15.7" cy="20.7" r="0.3" fill="white" stroke="none" />
      {/* Crinière FOLLE - beaucoup de mèches */}
      <path d="M17 17 C19 15, 22 15, 24 17" />
      <path d="M18 16 C20 13, 23 12, 25 14" />
      <path d="M19 18 C22 16, 24 17, 25 20" />
      <path d="M20 15 C22 12, 25 11, 26 13" />
      <path d="M21 19 C23 18, 24 19, 24 22" />
      {/* Toupet sur le front */}
      <path d="M14 18 C12 16, 13 13, 16 14" />
      {/* Queue épaisse et fournie */}
      <path d="M48 33 C51 30, 53 28, 52 25" />
      <path d="M48 35 C52 33, 54 31, 53 28" />
      <path d="M48 37 C51 36, 53 34, 53 31" />
      {/* Pattes très courtes et poilues */}
      <path d="M24 44 L23 54" />
      <path d="M22 54 L25 54" />
      <path d="M31 45 L30 54" />
      <path d="M29 54 L32 54" />
      <path d="M38 45 L38 54" />
      <path d="M37 54 L40 54" />
      <path d="M44 44 L45 54" />
      <path d="M44 54 L47 54" />
      {/* Fanons suggérés */}
      <path d="M22 53 C21 54.5, 22 55.5, 24 55" opacity="0.4" />
      <path d="M29 53 C28 54.5, 29 55.5, 31 55" opacity="0.4" />
    </Icon>
  );
}

/** 4. Tête de cheval de face */
export function TeteChevalFace(props: IconProps) {
  return (
    <Icon {...props} id="tete-face">
      {/* Contour de la tête — forme en amande allongée */}
      <path d="M32 4 C24 4, 19 12, 18 22 C17 30, 19 38, 23 44 C26 48, 29 50, 32 51 C35 50, 38 48, 41 44 C45 38, 47 30, 46 22 C45 12, 40 4, 32 4 Z" />
      {/* Oreille gauche */}
      <path d="M22 10 C20 5, 21 1, 24 2 C26 3, 25 7, 24 10" />
      {/* Oreille droite */}
      <path d="M42 10 C44 5, 43 1, 40 2 C38 3, 39 7, 40 10" />
      {/* Yeux — regard expressif */}
      <ellipse cx="25" cy="24" rx="2.5" ry="3" fill="currentColor" stroke="none" />
      <ellipse cx="39" cy="24" rx="2.5" ry="3" fill="currentColor" stroke="none" />
      {/* Reflets */}
      <circle cx="24" cy="23" r="0.7" fill="white" stroke="none" />
      <circle cx="38" cy="23" r="0.7" fill="white" stroke="none" />
      {/* Liste (marque blanche) */}
      <path d="M32 14 L32 34" opacity="0.15" strokeWidth="3" />
      {/* Naseaux */}
      <ellipse cx="28" cy="42" rx="2" ry="1.2" />
      <ellipse cx="36" cy="42" rx="2" ry="1.2" />
      {/* Bouche */}
      <path d="M29 46 C31 47.5, 33 47.5, 35 46" />
      {/* Toupet */}
      <path d="M28 7 C30 5, 34 5, 36 7" />
      <path d="M27 9 C29 6.5, 35 6.5, 37 9" />
      <path d="M29 8 C31 6, 33 6, 35 8" />
    </Icon>
  );
}

/* ═══════════════════════════════════════════════
   CATÉGORIE — Équitation
   ═══════════════════════════════════════════════ */

/** 5. Cavalier au galop — dynamique, forward seat */
export function CavalierGalop(props: IconProps) {
  return (
    <Icon {...props} id="galop">
      {/* Cheval — corps allongé en extension */}
      <path d="M8 34 C10 26, 18 22, 28 22 C34 22, 40 24, 44 28 C46 30, 47 33, 46 36" />
      {/* Ventre */}
      <path d="M10 36 C16 40, 26 42, 36 40 C41 39, 45 37, 46 36" />
      {/* Encolure */}
      <path d="M12 30 C10 24, 10 18, 12 13" />
      {/* Tête */}
      <path d="M12 13 C10 10, 8 9, 6 10 C4 11, 4 14, 6 15 L10 16" />
      {/* Oreilles */}
      <path d="M8 9 L6.5 6" />
      <path d="M10 8.5 L10 5.5" />
      {/* Oeil */}
      <circle cx="7.5" cy="12" r="0.7" fill="currentColor" stroke="none" />
      {/* Crinière au vent */}
      <path d="M10 10 C13 11, 15 14, 15 18" />
      <path d="M11 11 C14 13, 16 16, 16 20" />
      {/* Queue en mouvement */}
      <path d="M46 30 C50 26, 54 23, 58 21" />
      <path d="M46 32 C51 28, 55 26, 59 25" />
      {/* AV gauche — étendue vers l'avant */}
      <path d="M14 38 C10 42, 6 48, 4 54" />
      <path d="M3 54 L6 54.5" />
      {/* AV droite */}
      <path d="M22 40 C20 44, 18 48, 17 54" />
      <path d="M16 54 L19 54.5" />
      {/* AR gauche — poussée */}
      <path d="M38 40 C40 44, 44 48, 48 52" />
      <path d="M47 52 L50 52.5" />
      {/* AR droite */}
      <path d="M44 38 C46 42, 49 46, 52 50" />
      <path d="M51 50 L54 50.5" />
      {/* === Cavalier en position légère === */}
      {/* Corps penché vers l'avant */}
      <path d="M30 28 C28 22, 27 18, 28 14" />
      {/* Tête */}
      <circle cx="28" cy="12" r="3" />
      {/* Bombe */}
      <path d="M25.5 11 C25.5 9, 27 8, 29 8 C31 8, 31.5 9.5, 31 11" />
      {/* Bras vers les rênes */}
      <path d="M28 18 C24 20, 18 20, 14 18" opacity="0.6" />
      {/* Jambe */}
      <path d="M31 26 C34 30, 36 33, 37 36" />
      {/* Botte */}
      <path d="M37 36 L38.5 37.5" />
    </Icon>
  );
}

/** 6. Cavalier en dressage — élégance classique */
export function CavalierDressage(props: IconProps) {
  return (
    <Icon {...props} id="dressage">
      {/* Cheval rassemblé — corps compact */}
      <path d="M14 38 C16 30, 22 26, 30 25 C36 24, 42 26, 46 30 C48 32, 48 35, 47 38" />
      {/* Ventre */}
      <path d="M14 38 C20 42, 30 44, 40 42 C44 41, 47 39, 47 38" />
      {/* Encolure haute et arrondie */}
      <path d="M17 34 C14 28, 12 20, 14 14 C15 11, 17 10, 18 12" />
      {/* Tête fléchie (ramener) — verticale */}
      <path d="M14 14 C12 12, 11 10, 12 8 C13 6, 15 6, 16 8 C16.5 9, 16 11, 15 12" />
      {/* Oreilles */}
      <path d="M13 7 L12 4" />
      <path d="M15 6.5 L15.5 3.5" />
      {/* Oeil */}
      <circle cx="13.5" cy="10" r="0.7" fill="currentColor" stroke="none" />
      {/* Crinière tressée (petites boules) */}
      <circle cx="16.5" cy="14" r="0.8" />
      <circle cx="16" cy="17" r="0.8" />
      <circle cx="15.5" cy="20" r="0.8" />
      {/* Queue portée */}
      <path d="M47 34 C49 30, 50 26, 49 23" />
      {/* AV gauche levée (passage) */}
      <path d="M20 40 C18 42, 17 43, 18 41 L20 38" />
      {/* AV droite au sol */}
      <path d="M28 42 L27 54" />
      <path d="M26 54 L29 54" />
      {/* AR gauche */}
      <path d="M38 42 L37 54" />
      <path d="M36 54 L39 54" />
      {/* AR droite engagée */}
      <path d="M44 40 C44 44, 43 48, 42 54" />
      <path d="M41 54 L44 54" />
      {/* === Cavalier dressage — droit et élégant === */}
      {/* Buste vertical */}
      <path d="M34 30 C34 24, 34 18, 34 12" />
      {/* Tête */}
      <circle cx="34" cy="10" r="2.8" />
      {/* Haut de forme */}
      <path d="M31 9 L31 5 L37 5 L37 9" />
      <path d="M30 9 L38 9" />
      {/* Bras plié — mains basses */}
      <path d="M34 20 C30 22, 24 22, 20 20" opacity="0.6" />
      {/* Jambe longue et tendue */}
      <path d="M35 30 C38 34, 40 38, 40 42" />
      <path d="M40 42 L41.5 43.5" />
    </Icon>
  );
}

/** 7. Saut d'obstacles (CSO) — suspension au-dessus d'un oxer */
export function SautObstacles(props: IconProps) {
  return (
    <Icon {...props} id="cso">
      {/* Chandelier gauche */}
      <path d="M8 58 L8 40" />
      <path d="M5 40 L11 40" />
      {/* Chandelier droit */}
      <path d="M56 58 L56 40" />
      <path d="M53 40 L59 40" />
      {/* Barres */}
      <path d="M8 44 L56 44" />
      <path d="M8 48 L56 48" />
      {/* Cheval en plein saut — arc de cercle */}
      <path d="M16 36 C20 24, 30 18, 40 20 C44 21, 48 26, 48 32" />
      {/* Ventre en arc */}
      <path d="M20 38 C28 36, 36 34, 44 36" />
      {/* Encolure tendue vers l'avant */}
      <path d="M16 36 C12 32, 8 26, 8 20" />
      {/* Tête */}
      <path d="M8 20 C6 18, 4 17, 3 18 C2 19, 3 21, 5 21.5" />
      {/* Oreilles */}
      <path d="M5 17 L3.5 14.5" />
      <path d="M7 16.5 L6.5 13.5" />
      {/* Oeil */}
      <circle cx="5.5" cy="19.5" r="0.6" fill="currentColor" stroke="none" />
      {/* Genoux repliés (AV) */}
      <path d="M20 36 C18 34, 16 36, 18 38" />
      <path d="M24 36 C22 34, 20 35, 22 37" />
      {/* Postérieurs en détente */}
      <path d="M44 34 C48 38, 50 42, 52 44" />
      <path d="M46 32 C50 36, 52 40, 54 42" />
      {/* Queue en l'air */}
      <path d="M48 26 C52 22, 55 20, 56 18" />
      {/* === Cavalier === */}
      <path d="M30 24 C28 18, 28 14, 29 10" />
      <circle cx="29" cy="8" r="2.5" />
      {/* Bombe */}
      <path d="M27 7 C27 5.5, 28 4.5, 29.5 4.5 C31 4.5, 32 5.5, 31.5 7" />
      {/* Bras — mains sur l'encolure */}
      <path d="M28 16 C22 20, 16 24, 12 26" opacity="0.5" />
      {/* Jambe */}
      <path d="M32 24 C34 28, 36 32, 36 36" />
    </Icon>
  );
}

/** 8. Enfant sur poney — doux et rassurant */
export function EnfantPoney(props: IconProps) {
  return (
    <Icon {...props} id="enfant-poney">
      {/* Poney gentil */}
      <ellipse cx="34" cy="38" rx="13" ry="8" />
      {/* Tête poney */}
      <path d="M18 28 C16 24, 17 20, 20 18 C22 17, 24 18, 24 20" />
      {/* Encolure */}
      <path d="M24 20 C24 24, 23 28, 22 32" />
      <path d="M18 28 C18 32, 20 35, 22 37" />
      {/* Oreilles */}
      <path d="M20 18 L19 15" />
      <path d="M22 17.5 L22.5 14.5" />
      {/* Oeil poney */}
      <circle cx="19.5" cy="22" r="1" fill="currentColor" stroke="none" />
      {/* Sourire poney */}
      <path d="M17 26 C18 27, 19.5 27, 20 26" />
      {/* Queue */}
      <path d="M47 35 C49 32, 50 29, 49 27" />
      {/* Pattes */}
      <path d="M25 44 L24 54" />
      <path d="M23 54 L26 54" />
      <path d="M31 45 L30 54" />
      <path d="M29 54 L32 54" />
      <path d="M38 45 L38 54" />
      <path d="M37 54 L40 54" />
      <path d="M44 44 L45 54" />
      <path d="M44 54 L47 54" />
      {/* === Enfant cavalier === */}
      {/* Corps petit */}
      <path d="M34 34 C34 30, 34 26, 34 22" />
      {/* Tête proportionnellement grande */}
      <circle cx="34" cy="19" r="3.5" />
      {/* Casque bien visible */}
      <path d="M30.5 18 C30.5 16, 32 14.5, 34 14.5 C36 14.5, 37.5 16, 37.5 18" />
      <path d="M30 18.5 L38 18.5" />
      {/* Sourire */}
      <path d="M33 21 C33.5 21.8, 34.5 21.8, 35 21" />
      {/* Bras */}
      <path d="M33 28 C30 30, 27 30, 25 28" />
      <path d="M35 28 C38 30, 40 30, 41 28" />
      {/* Jambes courtes */}
      <path d="M32.5 34 C31 36, 29 37, 28 38" />
      <path d="M35.5 34 C37 36, 39 37, 40 38" />
    </Icon>
  );
}

/** 9. Baby-poney — tout-petit en longe, adorable */
export function BabyPoney(props: IconProps) {
  return (
    <Icon {...props} id="baby-poney">
      {/* Shetland minuscule */}
      <ellipse cx="38" cy="40" rx="10" ry="7" />
      {/* Tête shetland */}
      <ellipse cx="26" cy="32" rx="4" ry="3.5" />
      {/* Cou */}
      <path d="M29 34 C30 36, 29 38, 29 40" />
      <path d="M27 35 C27 37, 28 39, 29 41" />
      {/* Oreilles */}
      <path d="M25 29 L24 26.5" />
      <path d="M27.5 28.5 L28 26" />
      {/* Oeil */}
      <circle cx="25" cy="31.5" r="0.9" fill="currentColor" stroke="none" />
      {/* Crinière */}
      <path d="M27 28 C29 28, 30 30, 30 32" />
      <path d="M28 27.5 C30.5 28, 31 30, 30.5 33" />
      {/* Queue */}
      <path d="M48 38 C50 36, 51 34, 50 32" />
      {/* Pattes courtes */}
      <path d="M32 46 L31 54" />
      <path d="M30 54 L33 54" />
      <path d="M37 46 L37 54" />
      <path d="M36 54 L39 54" />
      <path d="M43 46 L44 54" />
      <path d="M43 54 L46 54" />
      {/* Tout-petit sur le shetland */}
      <path d="M38 38 C38 35, 38 32, 38 30" />
      <circle cx="38" cy="27.5" r="3" />
      {/* Casque */}
      <path d="M35.5 26.5 C35.5 24.5, 37 23.5, 38.5 23.5 C40 23.5, 41 25, 40.5 26.5" />
      {/* Sourire */}
      <path d="M37 29 C37.5 29.8, 38.5 29.8, 39 29" />
      {/* Longe en pointillés */}
      <path d="M23 33 C18 36, 13 38, 8 40" strokeDasharray="2 2" opacity="0.5" />
      {/* Accompagnateur */}
      <circle cx="8" cy="28" r="3" />
      <path d="M8 31 L8 44" />
      {/* Bras tenant la longe */}
      <path d="M8 35 C10 36, 12 37, 14 38" />
      <path d="M8 35 C6 37, 5 39, 5 41" />
      {/* Jambes */}
      <path d="M6.5 44 L6 54" />
      <path d="M9.5 44 L10 54" />
    </Icon>
  );
}

/* ═══════════════════════════════════════════════
   CATÉGORIE — Lieux / Installations
   ═══════════════════════════════════════════════ */

/** 10. Carrière / manège — vue aérienne schématique */
export function Carriere(props: IconProps) {
  return (
    <Icon {...props} id="carriere">
      {/* Rectangle de la carrière en perspective isométrique */}
      <path d="M6 42 L22 16 L58 16 L42 42 Z" />
      {/* Piste intérieure */}
      <path d="M12 39 L25 19 L55 19 L42 39 Z" opacity="0.3" />
      {/* Poteaux sur la lice */}
      <path d="M10 40 L10 44" />
      <path d="M18 30 L18 34" />
      <path d="M26 18 L26 22" />
      <path d="M38 18 L38 22" />
      <path d="M50 18 L50 22" />
      <path d="M46 34 L46 38" />
      <path d="M34 42 L34 46" />
      <path d="M22 42 L22 46" />
      {/* Lettres de reprise */}
      <text x="5" y="50" fontSize="5" fill="currentColor" stroke="none" fontStyle="italic" opacity="0.4">A</text>
      <text x="38" y="50" fontSize="5" fill="currentColor" stroke="none" fontStyle="italic" opacity="0.4">C</text>
      {/* Petit cavalier au centre */}
      <circle cx="35" cy="30" r="1.5" opacity="0.4" />
      <path d="M35 31.5 L35 34" opacity="0.4" />
    </Icon>
  );
}

/** 11. Box d'écurie — porte en bois avec cheval qui dépasse */
export function BoxEcurie(props: IconProps) {
  return (
    <Icon {...props} id="box">
      {/* Cadre de la porte */}
      <rect x="10" y="8" width="44" height="50" rx="1.5" />
      {/* Séparation porte haute / basse */}
      <path d="M10 34 L54 34" />
      {/* Planches en bois (porte basse) */}
      <path d="M10 40 L54 40" opacity="0.25" />
      <path d="M10 46 L54 46" opacity="0.25" />
      <path d="M10 52 L54 52" opacity="0.25" />
      {/* Verrou */}
      <path d="M44 30 L52 30 L52 33 L44 33 Z" />
      <circle cx="48" cy="31.5" r="1" />
      {/* Charnières */}
      <path d="M12 18 L16 18" />
      <path d="M12 28 L16 28" />
      <path d="M12 42 L16 42" />
      <path d="M12 52 L16 52" />
      {/* Tête de cheval qui passe par-dessus */}
      <path d="M28 32 C27 26, 28 20, 31 16 C32.5 14, 34 14.5, 34 16.5 C34 18, 33 20, 32 22" />
      {/* Oreilles */}
      <path d="M31 16 L30 13" />
      <path d="M33.5 15 L34 12" />
      {/* Oeil */}
      <circle cx="30" cy="22" r="1" fill="currentColor" stroke="none" />
      {/* Naseau */}
      <path d="M28 28 C29 29, 30 28.5, 30.5 28" />
      {/* Crinière */}
      <path d="M33 15 C34.5 17, 35 20, 34.5 24" />
    </Icon>
  );
}

/** 12. Paddock — enclos avec clôture en bois */
export function Paddock(props: IconProps) {
  return (
    <Icon {...props} id="paddock">
      {/* Poteaux de clôture */}
      <path d="M4 26 L4 50" />
      <path d="M16 24 L16 50" />
      <path d="M30 22 L30 50" />
      <path d="M44 24 L44 50" />
      <path d="M58 26 L58 50" />
      {/* Lisse haute */}
      <path d="M4 30 C10 28, 16 27, 16 28 C16 27, 22 26, 30 26 C38 26, 44 27, 44 28 C44 27, 50 28, 58 30" />
      {/* Lisse basse */}
      <path d="M4 40 C10 38, 16 37, 16 38 C16 37, 22 36, 30 36 C38 36, 44 37, 44 38 C44 37, 50 38, 58 40" />
      {/* Herbe */}
      <path d="M6 50 C7 47, 8 47, 9 50" />
      <path d="M13 50 C14 46, 15 46, 16 50" />
      <path d="M21 50 C22 47, 23 47, 24 50" />
      <path d="M28 50 C29 47, 30 47, 31 50" />
      <path d="M36 50 C37 47, 38 47, 39 50" />
      <path d="M44 50 C45 47, 46 47, 47 50" />
      <path d="M52 50 C53 47, 54 47, 55 50" />
      {/* Cheval au pré (silhouette simplifiée) */}
      <path d="M32 14 C30 11, 31 8, 34 7 C36 6, 38 7.5, 37 9.5" opacity="0.5" />
      <path d="M37 9.5 C38 11, 38 13, 37 15" opacity="0.5" />
      <ellipse cx="42" cy="16" rx="7" ry="4.5" opacity="0.5" />
      <path d="M36 19 L36 22" opacity="0.5" />
      <path d="M40 20 L40 22" opacity="0.5" />
      <path d="M44 20 L44 22" opacity="0.5" />
      <path d="M48 19 L48 22" opacity="0.5" />
    </Icon>
  );
}

/** 13. Club-house / bâtiment */
export function ClubHouse(props: IconProps) {
  return (
    <Icon {...props} id="clubhouse">
      {/* Toit à deux pentes */}
      <path d="M6 28 L32 10 L58 28" />
      {/* Tuiles suggérées */}
      <path d="M19 19 L32 10 L45 19" opacity="0.2" />
      {/* Murs */}
      <path d="M10 28 L10 56 L54 56 L54 28" />
      {/* Cheminée */}
      <path d="M44 18 L44 12 L49 12 L49 20" />
      {/* Fumée */}
      <path d="M46 12 C46 10, 47 8, 46 6" opacity="0.3" />
      {/* Fenêtre gauche à croisillons */}
      <rect x="15" y="34" width="10" height="8" rx="0.8" />
      <path d="M20 34 L20 42" />
      <path d="M15 38 L25 38" />
      {/* Fenêtre droite */}
      <rect x="39" y="34" width="10" height="8" rx="0.8" />
      <path d="M44 34 L44 42" />
      <path d="M39 38 L49 38" />
      {/* Porte double */}
      <path d="M27 56 L27 40 C27 38, 28 37, 29.5 37 L34.5 37 C36 37, 37 38, 37 40 L37 56" />
      <path d="M32 56 L32 37" />
      {/* Poignées */}
      <circle cx="30.5" cy="48" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="33.5" cy="48" r="0.7" fill="currentColor" stroke="none" />
      {/* Fer à cheval décoratif */}
      <path d="M30 32 C28.5 34, 29 36, 31 36.5 C32 36.5, 33 36.5, 34 36 C35.5 35.5, 36 34, 34.5 32" />
      {/* Sol */}
      <path d="M2 56 L62 56" />
    </Icon>
  );
}

/* ═══════════════════════════════════════════════
   CATÉGORIE — Activités
   ═══════════════════════════════════════════════ */

/** 14. Stage vacances — soleil + cheval + étoile */
export function StageVacances(props: IconProps) {
  return (
    <Icon {...props} id="stage">
      {/* Grand soleil */}
      <circle cx="14" cy="14" r="6" />
      {/* Rayons */}
      <path d="M14 5 L14 3" />
      <path d="M14 23 L14 25" />
      <path d="M5 14 L3 14" />
      <path d="M23 14 L25 14" />
      <path d="M7.5 7.5 L6 6" />
      <path d="M20.5 7.5 L22 6" />
      <path d="M7.5 20.5 L6 22" />
      <path d="M20.5 20.5 L22 22" />
      {/* Silhouette cheval compact */}
      <path d="M30 48 C28 42, 30 36, 36 34 C40 33, 44 35, 46 38 C47 40, 47 42, 46 44" />
      <path d="M30 48 C34 50, 40 50, 46 48 L46 44" />
      {/* Tête */}
      <path d="M32 36 C30 32, 30 28, 32 25 C33 23.5, 34.5 24, 34 26" />
      <circle cx="31.5" cy="28.5" r="0.6" fill="currentColor" stroke="none" />
      {/* Oreille */}
      <path d="M32.5 25 L32 22.5" />
      <path d="M34 24.5 L34.5 22" />
      {/* Pattes */}
      <path d="M33 49 L32 56" />
      <path d="M31 56 L34 56" />
      <path d="M39 50 L39 56" />
      <path d="M38 56 L41 56" />
      <path d="M44 48 L45 56" />
      <path d="M44 56 L47 56" />
      {/* Étoile */}
      <path d="M52 10 L53.8 14 L58 14.8 L55 17.5 L55.8 22 L52 20 L48.2 22 L49 17.5 L46 14.8 L50.2 14 Z" />
    </Icon>
  );
}

/** 15. Anniversaire — cheval avec chapeau de fête */
export function Anniversaire(props: IconProps) {
  return (
    <Icon {...props} id="anniversaire">
      {/* Tête de cheval de 3/4 */}
      <path d="M20 54 C18 46, 18 38, 20 32 C22 27, 25 24, 28 22 C30 21, 32 22, 32 24 C32 26, 30 28, 28 30" />
      <path d="M20 54 C24 52, 27 49, 29 46" />
      {/* Oreille visible */}
      <path d="M30 22 L31 18" />
      {/* Oeil */}
      <ellipse cx="24" cy="34" rx="1.3" ry="1.5" fill="currentColor" stroke="none" />
      <circle cx="23.5" cy="33.5" r="0.3" fill="white" stroke="none" />
      {/* Naseau */}
      <path d="M21 46 C22 47, 23.5 46.5, 24 46" />
      {/* Bouche souriante */}
      <path d="M20 50 C22 52, 25 52, 27 50" />
      {/* Crinière */}
      <path d="M31 23 C32 26, 32 30, 31 34" />
      <path d="M32 25 C33 28, 33 32, 32 36" />
      {/* === Chapeau de fête === */}
      <path d="M22 28 L28 6 L35 24" />
      {/* Bandes décoratives */}
      <path d="M24 22 C27 21, 30 21, 33 22" opacity="0.4" />
      <path d="M25.5 16 C27 15.5, 29 15.5, 31 16.5" opacity="0.4" />
      {/* Pompon */}
      <circle cx="28" cy="5" r="2" />
      {/* Élastique */}
      <path d="M22 28 C20 32, 19 36, 19 40" opacity="0.3" strokeDasharray="1.5 1.5" />
      {/* Confettis */}
      <circle cx="42" cy="14" r="1.2" opacity="0.5" />
      <circle cx="46" cy="22" r="1" opacity="0.5" />
      <circle cx="40" cy="30" r="1.5" opacity="0.5" />
      <circle cx="50" cy="18" r="0.8" opacity="0.5" />
      {/* Serpentins */}
      <path d="M44 10 C46 12, 44 14, 46 16" opacity="0.4" />
      <path d="M50 8 C52 10, 50 12, 52 14 C54 16, 52 18, 54 20" opacity="0.4" />
      {/* Étoiles */}
      <path d="M48 6 L49 8 L51 8.5 L49.5 10 L50 12 L48 11 L46 12 L46.5 10 L45 8.5 L47 8 Z" opacity="0.4" />
    </Icon>
  );
}

/** 16. Concours / Rosette — nœud avec ruban et n°1 */
export function ConcoursRosette(props: IconProps) {
  return (
    <Icon {...props} id="rosette">
      {/* Rosette plissée — pétales */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const cx = 32 + Math.cos(angle) * 16;
        const cy = 24 + Math.sin(angle) * 16;
        return (
          <circle key={i} cx={cx} cy={cy} r="5" opacity="0.2" />
        );
      })}
      {/* Cercle extérieur */}
      <circle cx="32" cy="24" r="16" />
      {/* Cercle intérieur */}
      <circle cx="32" cy="24" r="10" />
      {/* Numéro 1 */}
      <path d="M30 19 L33 17 L33 31" strokeWidth="2.5" />
      <path d="M29 31 L37 31" strokeWidth="2" />
      {/* Rubans */}
      <path d="M24 38 C22 44, 19 50, 16 56" />
      <path d="M20 38 C18 44, 16 50, 14 56" />
      <path d="M40 38 C42 44, 45 50, 48 56" />
      <path d="M44 38 C46 44, 48 50, 50 56" />
      {/* Pointes des rubans en V */}
      <path d="M14 56 L15 58 L17 55" />
      <path d="M48 56 L49 58 L51 55" />
    </Icon>
  );
}

/** 17. Galop fédéral — badge/écusson avec G et étoile */
export function GalopFederal(props: IconProps) {
  return (
    <Icon {...props} id="galop-fed">
      {/* Écusson */}
      <path d="M32 4 C22 4, 12 8, 12 14 L12 34 C12 44, 22 54, 32 60 C42 54, 52 44, 52 34 L52 14 C52 8, 42 4, 32 4 Z" />
      {/* Bordure intérieure */}
      <path d="M32 9 C24 9, 17 12, 17 16 L17 32 C17 40, 24 48, 32 53 C40 48, 47 40, 47 32 L47 16 C47 12, 40 9, 32 9 Z" opacity="0.2" />
      {/* G majuscule stylisé */}
      <path d="M38 22 C36 18, 32 16, 28 17 C24 18, 22 22, 22 26 C22 30, 24 34, 28 35 C32 36, 36 34, 38 31 L34 31 L34 27 L40 27" strokeWidth="2.2" />
      {/* Étoile */}
      <path d="M32 40 L33.5 43.5 L37.5 44 L34.5 46.5 L35.5 50.5 L32 48.5 L28.5 50.5 L29.5 46.5 L26.5 44 L30.5 43.5 Z" />
    </Icon>
  );
}

/** 18. Groupe scolaire — 3 enfants de taille croissante */
export function GroupeScolaire(props: IconProps) {
  return (
    <Icon {...props} id="scolaire">
      {/* Enfant petit (gauche) */}
      <circle cx="14" cy="30" r="4.5" />
      <path d="M14 34.5 L14 46" />
      <path d="M14 38 C11 40, 9 42, 8 44" />
      <path d="M14 38 C17 40, 19 42, 20 44" />
      <path d="M12.5 46 C12 50, 11.5 53, 11.5 56" />
      <path d="M15.5 46 C16 50, 16.5 53, 16.5 56" />
      {/* Cartable */}
      <path d="M16.5 36 C18 36, 18.5 37.5, 18.5 39 C18.5 40.5, 18 42, 16.5 42" opacity="0.4" />
      {/* Enfant moyen (centre) */}
      <circle cx="32" cy="26" r="5" />
      <path d="M32 31 L32 44" />
      <path d="M32 35 C28.5 37.5, 26 40, 25 42" />
      <path d="M32 35 C35.5 37.5, 38 40, 39 42" />
      <path d="M30.5 44 C30 48, 29.5 52, 29 56" />
      <path d="M33.5 44 C34 48, 34.5 52, 35 56" />
      {/* Livre */}
      <rect x="38" y="38" width="4" height="5.5" rx="0.5" opacity="0.5" />
      {/* Enfant grand (droite) */}
      <circle cx="50" cy="22" r="5.5" />
      <path d="M50 27.5 L50 42" />
      <path d="M50 32 C46 35, 43.5 38, 42.5 40" />
      <path d="M50 32 C54 35, 56.5 38, 57.5 40" />
      <path d="M48.5 42 C48 47, 47 52, 46.5 56" />
      <path d="M51.5 42 C52 47, 53 52, 53.5 56" />
      {/* Sol */}
      <path d="M4 56 L60 56" opacity="0.2" />
    </Icon>
  );
}

/* ═══════════════════════════════════════════════
   Export groupé
   ═══════════════════════════════════════════════ */
const OrloffIcons = {
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
};

export default OrloffIcons;
