import fs from "node:fs";
import path from "node:path";

import shipAbilitiesRaw from "@/data/.generated/ship_abilities.json";
import shipsRaw from "@/data/.generated/ships.json";
import unitsRaw from "@/data/.generated/units.json";
import UnitDetail from "@/components/unit-detail/UnitDetail";
import type { Abilities, ShipAbilities } from "@/types/abilities/abilities";
import type { Characters } from "@/types/characters/characters";
import type { Ship } from "@/types/ships/ships";
import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://swgoh4jp.com";

const ships = (shipsRaw as Ship[]).filter((s) => s.is_event_variant !== true);

const shipAbilitiesByBaseId = new Map<string, ShipAbilities>();
for (const item of shipAbilitiesRaw as Omit<ShipAbilities, "last_updated">[]) {
  shipAbilitiesByBaseId.set(item.base_id, { ...item, last_updated: "" });
}

const characterUrlByBaseId = new Map<string, { name: string; url: string }>();
for (const c of unitsRaw as Characters[]) {
  if (!c.character_base_id || !c.url) continue;
  characterUrlByBaseId.set(c.character_base_id, {
    name: c.name,
    url: c.url,
  });
}

const SHIP_ABILITIES_LAST_UPDATED = (() => {
  try {
    const stat = fs.statSync(
      path.join(process.cwd(), "src/data/.generated/ship_abilities.json"),
    );
    return stat.mtime.toISOString();
  } catch {
    return "";
  }
})();

function shipSlug(ship: Ship): string {
  return (ship.base_id ?? "").toLowerCase();
}

function findShip(shipId: string): Ship | undefined {
  let decoded = shipId;
  try {
    decoded = decodeURIComponent(shipId);
  } catch {
    decoded = shipId;
  }
  const candidates = new Set([shipId.toLowerCase(), decoded.toLowerCase()]);
  return ships.find((s) => {
    const slug = shipSlug(s);
    return slug && candidates.has(slug);
  });
}

function resolveAbilities(ship: Ship | undefined): Abilities[] {
  if (!ship?.base_id) return [];
  return shipAbilitiesByBaseId.get(ship.base_id)?.ability ?? [];
}

export async function generateStaticParams() {
  return ships
    .map((s) => shipSlug(s))
    .filter((slug) => slug.length > 0)
    .map((slug) => ({ shipId: slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ shipId: string }>;
}): Promise<Metadata> {
  const { shipId } = await props.params;
  const ship = findShip(shipId);

  if (!ship) {
    return {
      title: "艦船詳細",
      description:
        "SWGoH（銀河の英雄）の艦船詳細ページ。スキル・乗員・所属派閥を日本語で確認できます。",
      robots: { index: false, follow: true },
    };
  }

  const slug = shipSlug(ship);
  const factionText = ship.faction.join("・");
  const roleText = ship.role.join("・") || "艦船";
  const pilotText = ship.pilot ? `パイロット: ${ship.pilot}。` : "";
  const title = `${ship.name}｜艦船詳細`;
  const description = `${factionText}の${roleText}「${ship.name}」。${pilotText}スキル・乗員・所属派閥を日本語で解説。SWGoH（銀河の英雄）の艦隊編成判断に。`;
  const canonical = `/ships/${slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      images: ship.src ? [{ url: ship.src }] : undefined,
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: ship.src ? [ship.src] : undefined,
    },
  };
}

export default async function ShipDetail(props: {
  params: Promise<{ shipId: string }>;
}) {
  const params = await props.params;
  const ship = findShip(params.shipId);
  const abilities = resolveAbilities(ship);

  const slug = ship ? shipSlug(ship) : params.shipId;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "艦船図鑑",
        item: `${SITE_URL}/ships`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: ship?.name ?? params.shipId,
        item: `${SITE_URL}/ships/${encodeURIComponent(slug)}`,
      },
    ],
  };

  const subtitle = ship ? buildShipSubtitle(ship) : null;

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/ships"
          className="text-sm text-[hsl(220,10%,52%)] hover:text-[hsl(220,14%,82%)] transition-colors"
        >
          ← 艦船一覧
        </Link>
        <div className="mt-4">
          <UnitDetail
            name={ship?.name ?? params.shipId}
            image={ship?.src ?? ""}
            subtitle={subtitle}
            description={ship?.description_jp}
            abilities={abilities}
            lastUpdated={SHIP_ABILITIES_LAST_UPDATED}
            notFound={!ship}
          />
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </div>
  );
}

function buildShipSubtitle(ship: Ship) {
  const parts: React.ReactNode[] = [];
  if (ship.faction.length > 0) parts.push(ship.faction.join("・"));
  if (ship.role.length > 0) parts.push(ship.role.join("・"));

  const crewLinks: React.ReactNode[] = [];
  const crewIds = ship.crew_base_ids ?? [];
  for (let i = 0; i < crewIds.length; i++) {
    const baseId = crewIds[i];
    const meta = characterUrlByBaseId.get(baseId);
    if (!meta) continue;
    if (crewLinks.length > 0) crewLinks.push("、");
    crewLinks.push(
      <Link
        key={`${baseId}-${i}`}
        href={meta.url}
        className="underline decoration-dotted underline-offset-2 hover:text-[hsl(220,14%,82%)] transition-colors"
      >
        {meta.name}
      </Link>,
    );
  }

  return (
    <div className="space-y-1">
      {parts.length > 0 ? <div>{parts.join(" / ")}</div> : null}
      {crewLinks.length > 0 ? (
        <div>
          <span className="text-[hsl(220,8%,36%)] mr-1">乗員:</span>
          {crewLinks}
        </div>
      ) : ship.pilot ? (
        <div>
          <span className="text-[hsl(220,8%,36%)] mr-1">パイロット:</span>
          {ship.pilot}
        </div>
      ) : null}
    </div>
  );
}
