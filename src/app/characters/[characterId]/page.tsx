import CharacterSkills from "@/components/elements/characterSkills/characterSkills";
import Link from "next/link";

export default async function characterDetail(
  props: {
    params: Promise<{ characterId: string }>;
  }
) {
  const params = await props.params;
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
    </div>
  );
}
