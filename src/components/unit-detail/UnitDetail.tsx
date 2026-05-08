import type { ReactNode } from "react";
import Image from "next/image";

import { BBCodeText } from "@/components/elements/BBCodeText";
import type { Abilities } from "@/types/abilities/abilities";

export interface UnitDetailProps {
  name: string;
  image: string;
  subtitle?: ReactNode;
  description?: string;
  abilities: Abilities[];
  lastUpdated: string;
  notFound?: boolean;
}

export default function UnitDetail({
  name,
  image,
  subtitle,
  description,
  abilities,
  lastUpdated,
  notFound,
}: UnitDetailProps) {
  if (notFound) {
    return (
      <p className="text-[hsl(220,10%,52%)]">
        このページは存在しません。
        <br />
        URLが間違っているか、現在制作中です。
      </p>
    );
  }

  return (
    <>
      <h2 className="flex items-center gap-3 text-lg font-medium text-white mb-3">
        <Image
          alt={name}
          src={image}
          width={48}
          height={48}
          className="rounded"
          unoptimized={true}
        />
        <span>{name}</span>
      </h2>
      {subtitle ? (
        <div className="text-sm text-[hsl(220,10%,52%)] mb-3">{subtitle}</div>
      ) : null}
      {description ? (
        <div className="rounded border border-[hsl(220,12%,14%)] bg-[hsl(220,16%,10%)] p-4 mb-4 text-sm text-[hsl(220,14%,82%)] leading-relaxed">
          <BBCodeText text={description} className="block whitespace-pre-wrap" />
        </div>
      ) : null}
      {abilities.length === 0 ? (
        <p className="text-sm text-[hsl(220,10%,52%)]">
          スキル情報は準備中です。
        </p>
      ) : (
        abilities.map((item) => (
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
        ))
      )}
      <p className="text-xs text-[hsl(220,8%,36%)] mt-4">
        最終更新日: {lastUpdated}
      </p>
    </>
  );
}
