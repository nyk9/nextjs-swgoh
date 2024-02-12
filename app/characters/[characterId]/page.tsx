import CharacterSkills from "@/components/elements/characterSkills/characterSkills";
import Home from "@/components/layouts/header/header";

export default function characterDetail({ params }: {
    params: { characterId: string }
}) {
    return (
        <div
            className="pb-1 min-h-screen w-full bg-neutral-500"
        >
            <Home />
            <div className="pt-20 lg:pt-0 mx-1">
                <CharacterSkills url={params.characterId} />
            </div>
        </div>
    );
};