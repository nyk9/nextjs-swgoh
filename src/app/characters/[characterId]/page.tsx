import CharacterSkills from "@/components/elements/characterSkills/characterSkills";
import Link from "next/link";

export default async function characterDetail(
  props: {
    params: Promise<{ characterId: string }>;
  }
) {
  const params = await props.params;
  return (
    <div className="min-h-screen px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/characters"
          className="inline-flex items-center gap-1 text-sm text-[hsl(215,16%,47%)] hover:text-[hsl(213,32%,82%)] transition-colors mb-4"
        >
          &larr; キャラクター一覧へ
        </Link>
        <CharacterSkills url={params.characterId} />
      </div>
    </div>
  );
}
