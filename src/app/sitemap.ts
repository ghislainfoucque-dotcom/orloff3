import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://centre-equestre-orloff3.fr";

  const routes = [
    "",
    "/activites",
    "/activites/stages",
    "/accueil-chevaux",
    "/cavalerie",
    "/la-team",
    "/contact",
    "/contact/tarifs",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
