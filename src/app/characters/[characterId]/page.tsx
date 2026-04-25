import CharacterSkills from "@/components/elements/characterSkills/characterSkills";
import characters from "@/data/characters";
import type { Characters } from "@/types/characters/characters";
import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://swgoh4jp.com";

function extractSlug(character: Characters): string {
  return (character.url ?? "")
    .replace(/^\/characters\//, "")
    .replace(/\/$/, "");
}

function findCharacter(characterId: string): Characters | undefined {
  let decoded = characterId;
  try {
    decoded = decodeURIComponent(characterId);
  } catch {
    decoded = characterId;
  }
  const candidates = new Set([characterId, decoded]);
  return characters.find((c) => {
    const slug = extractSlug(c);
    return slug && candidates.has(slug);
  });
}

export async function generateStaticParams() {
  return characters
    .map((c) => extractSlug(c))
    .filter((slug) => slug.length > 0)
    .map((slug) => ({ characterId: slug }));
}

function formatProperty(property: Characters["property"]): string {
  return Array.isArray(property) ? property.join("・") : property;
}

export async function generateMetadata(props: {
  params: Promise<{ characterId: string }>;
}): Promise<Metadata> {
  const { characterId } = await props.params;
  const character = findCharacter(characterId);

  if (!character) {
    const title = "キャラクター詳細";
    const description =
      "SWGoH（銀河の英雄）のキャラクター詳細ページ。スキル・アビリティ・所属派閥を日本語で確認できます。";
    return {
      title,
      description,
      robots: { index: false, follow: true },
    };
  }

  const propertyText = formatProperty(character.property);
  const title = `${character.name}｜キャラクター詳細`;
  const description = `${character.name}（${propertyText}）のスキル・アビリティ・所属派閥を日本語で解説。SWGoH（銀河の英雄）の育成・編成判断に。`;
  const canonical = character.url && character.url !== "/characters/" ? character.url : undefined;

  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      images: character.src ? [{ url: character.src }] : undefined,
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: character.src ? [character.src] : undefined,
    },
  };
}

export default async function CharacterDetail(props: {
  params: Promise<{ characterId: string }>;
}) {
  const params = await props.params;
  const character = findCharacter(params.characterId);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "キャラクター図鑑",
        item: `${SITE_URL}/characters`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: character?.name ?? params.characterId,
        item: character?.url
          ? `${SITE_URL}${character.url.replace(/\/$/, "")}`
          : `${SITE_URL}/characters/${encodeURIComponent(params.characterId)}`,
      },
    ],
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/characters"
          className="text-sm text-[hsl(220,10%,52%)] hover:text-[hsl(220,14%,82%)] transition-colors"
        >
          ← キャラクター一覧
        </Link>
        <div className="mt-4">
          <CharacterSkills url={params.characterId} />
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </div>
  );
}
