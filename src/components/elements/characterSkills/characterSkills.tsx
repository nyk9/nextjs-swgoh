import { BBCodeText } from "@/components/elements/BBCodeText";
import abilitiesRaw from "@/data/.generated/abilities.json";
import { Abilities, CharacterAbilities } from "@/types/abilities/abilities";
import fs from "node:fs";
import Image from "next/image";
import path from "node:path";

const abilitiesPath = path.join(
  process.cwd(),
  "src/data/.generated/abilities.json",
);
const lastUpdated = fs.statSync(abilitiesPath).mtime.toISOString();
const data: CharacterAbilities[] = (
  abilitiesRaw as Omit<CharacterAbilities, "last_updated">[]
).map((a) => ({ ...a, last_updated: lastUpdated }));

export default async function CharacterSkills(params: { url: string }) {
  let abilityIndex: number = -1;
  for (let i: number = 0; i < data.length; i++) {
    if (data[i].id === params.url) {
      abilityIndex = i;
      break;
    }
  }

  if (abilityIndex == -1) {
    return (
      <p className="text-[hsl(220,10%,52%)]">
        このキャラクターのページは存在しません。
        <br />
        URLが間違っているか、現在制作中です。
      </p>
    );
  }

  return (
    <>
      <h2 className="flex items-center gap-3 text-lg font-medium text-white mb-5">
        <Image
          alt={data[abilityIndex].character_name}
          src={data[abilityIndex].character_image}
          width={48}
          height={48}
          className="rounded"
          unoptimized={true}
        />
        <span>{data[abilityIndex].character_name}</span>
      </h2>
      {data[abilityIndex].ability.map((item: Abilities) => {
        return (
          <div
            key={item.name_jp}
            className="rounded border border-[hsl(220,12%,14%)] bg-[hsl(220,16%,10%)] mt-2 p-4"
          >
            <h3 className="flex flex-wrap items-center gap-2 mb-2">
              <Image
                src={item.image}
                alt={item.name_jp}
                width={40}
                height={40}
                className="object-cover"
                unoptimized={true}
              />
              <span className="text-white font-medium">{item.name_jp}</span>
              <span className="text-[hsl(220,10%,52%)] text-sm">
                {item.ability_type}
              </span>
              <div className="flex items-center gap-1">
                {item.cooldown && (
                  <span className="text-xs text-[hsl(220,8%,36%)]">
                    CT: {item.cooldown}
                  </span>
                )}
                {item.ability_type !== "付与スキル" &&
                  (item.ability_type === "アルティメットスキル" ? (
                    <Image
                      src="/skill/tex.skill_abilitymaterial_ultimate.png"
                      alt="ultimate"
                      width={15}
                      height={15}
                      unoptimized={true}
                    />
                  ) : item.is_omicron === true && item.is_zeta === true ? (
                    <>
                      <Image
                        src="/skill/tex.skill_hexagon_white.png"
                        alt="omicron"
                        width={15}
                        height={15}
                        unoptimized={true}
                      />
                      <Image
                        src="/skill/tex.skill_zeta.png"
                        alt="zeta"
                        width={15}
                        height={15}
                        unoptimized={true}
                      />
                    </>
                  ) : item.is_omicron === true ? (
                    <Image
                      src="/skill/tex.skill_hexagon_white.png"
                      alt="omicron"
                      width={15}
                      height={15}
                      unoptimized={true}
                    />
                  ) : item.is_zeta === true ? (
                    <Image
                      src="/skill/tex.skill_zeta.png"
                      alt="zeta"
                      width={15}
                      height={15}
                      unoptimized={true}
                    />
                  ) : item.is_omega === true ? (
                    <Image
                      src="/skill/tex.skill_pentagon_gold.png"
                      alt="omega"
                      width={15}
                      height={15}
                      unoptimized={true}
                    />
                  ) : (
                    <Image
                      src="/skill/tex.skill_pentagon_white.png"
                      alt="skill"
                      width={15}
                      height={15}
                      unoptimized={true}
                    />
                  ))}
              </div>
            </h3>
            <div className="text-sm text-[hsl(220,14%,82%)] leading-relaxed">
              <BBCodeText
                text={item.description_jp}
                className="block whitespace-pre-wrap"
              />
            </div>
          </div>
        );
      })}
      <p className="text-xs text-[hsl(220,8%,36%)] mt-4">
        最終更新日: {data[abilityIndex].last_updated}
      </p>
    </>
  );
}
