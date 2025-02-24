import CharacterSkills from "@/components/elements/characterSkills/characterSkills";

export default async function characterDetail(
  props: {
    params: Promise<{ characterId: string }>;
  }
) {
  const params = await props.params;
  return (
    <div className="pb-1 min-h-screen w-full bg-neutral-500">
      <div className="pt-1 lg:pt-0 mx-1">
        <CharacterSkills url={params.characterId} />
      </div>
    </div>
  );
}
