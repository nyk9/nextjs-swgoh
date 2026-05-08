import type { MetadataRoute } from "next";
import shipsRaw from "@/data/.generated/ships.json";
import units from "@/data/.generated/units.json";
import type { Characters } from "@/types/characters/characters";
import type { Ship } from "@/types/ships/ships";
import { getAllGuides } from "@/lib/guides";

const BASE_URL = "https://swgoh4jp.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const characters = (units as Characters[]).filter(
    (c) => c.is_event_variant !== true,
  );
  const ships = (shipsRaw as Ship[]).filter(
    (s) => s.is_event_variant !== true,
  );

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/characters`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ships`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/advisor`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/TWCounters`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const seen = new Set<string>();
  const characterRoutes: MetadataRoute.Sitemap = [];
  for (const c of characters) {
    const raw = (c.url ?? "").trim();
    if (!raw.startsWith("/characters/")) continue;
    const slug = raw.replace(/^\/characters\//, "").replace(/\/$/, "");
    if (!slug) continue;
    const url = `${BASE_URL}/characters/${encodeURIComponent(slug)}`;
    if (seen.has(url)) continue;
    seen.add(url);
    characterRoutes.push({
      url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  const shipRoutes: MetadataRoute.Sitemap = [];
  for (const s of ships) {
    const raw = (s.url ?? "").trim();
    if (!raw.startsWith("/ships/")) continue;
    const slug = raw.replace(/^\/ships\//, "").replace(/\/$/, "");
    if (!slug) continue;
    const url = `${BASE_URL}/ships/${encodeURIComponent(slug)}`;
    if (seen.has(url)) continue;
    seen.add(url);
    shipRoutes.push({
      url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  const guideRoutes: MetadataRoute.Sitemap = getAllGuides().map((g) => ({
    url: `${BASE_URL}/guides/${g.slug}`,
    lastModified: new Date(g.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  guideRoutes.unshift({
    url: `${BASE_URL}/guides`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  });

  return [...staticRoutes, ...guideRoutes, ...characterRoutes, ...shipRoutes];
}
