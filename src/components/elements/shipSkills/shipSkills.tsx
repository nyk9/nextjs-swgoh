import { Abilities } from "@/types/abilities/abilities";
import Image from "next/image";

export default async function ShipSkills(params: { url: string }) {
  const apilink: string = "https://swgoh4jp.com/api/shipAbilities";
  const res: globalThis.Response = await fetch(apilink, {
    next: {
      revalidate: 3 * 60 * 60,
    },
  });

  if (!res.ok) {
    throw new Error("Error!!!");
  }
  let data = await res.json();
  let abilityIndex: number = -1;
  for (let i: number = 0; i < data.length; i++) {
    if (data[i].id === params.url) {
      abilityIndex = i;
      break;
    }
  }

  if (abilityIndex == -1) {
    return (
      <>
        <p>
          このシップのページは存在しません。
          <br />
          URLが間違っているか、現在制作中です。
        </p>
      </>
    );
  } else {
    for (let i: number = 0; i < data[abilityIndex].ability.length; i++) {
      let str: string = data[abilityIndex].ability[i].description_jp;
      data[abilityIndex].ability[i].description_jp = str.replaceAll("\n", ">>");
    }
    return (
      <>
        <h1 className="flex text-2xl">
          <Image
            alt={data[abilityIndex].ship_name}
            src={data[abilityIndex].ship_image}
            width={50}
            height={50}
            unoptimized={true}
          />
          <span>{data[abilityIndex].ship_name}</span>
        </h1>
        {data[abilityIndex].ability.map((item: Abilities) => {
          return (
            <div
              key={item.name_jp}
              className="border border-blue-300 mt-1 bg-gradient-to-r from-neutral-700 to-neutral-800"
            >
              <h1 className="">
                <Image
                  src={item.image}
                  alt={item.name_jp}
                  width={50}
                  height={50}
                  className="object-cover px-1"
                  unoptimized={true}
                />
                <span className="text-sky-300 text-2xl">{item.name_jp}:</span>
                <span className="text-sky-700 text-2xl">
                  ({item.ability_type})
                </span>
                <div className="flex">
                  <span className="text-xs">
                    {item.cooldown ? (
                      <span className="text-sky-100">
                        クールダウン: {item.cooldown}
                      </span>
                    ) : (
                      <></>
                    )}
                  </span>
                  {item.ability_type !== "付与スキル" ? (
                    item.ability_type === "アルティメットスキル" ? (
                      <Image
                        src={"/skill/tex.skill_abilitymaterial_ultimate.png"}
                        alt="ultimate"
                        width={15}
                        height={15}
                        unoptimized={true}
                      />
                    ) : item.is_omicron === true && item.is_zeta === true ? (
                      <>
                        <Image
                          src={"/skill/tex.skill_hexagon_white.png"}
                          alt="ultimate"
                          width={15}
                          height={15}
                          unoptimized={true}
                        />
                        <Image
                          src={"/skill/tex.skill_zeta.png"}
                          alt="ultimate"
                          width={15}
                          height={15}
                          unoptimized={true}
                        />
                      </>
                    ) : item.is_omicron === true ? (
                      <Image
                        src={"/skill/tex.skill_hexagon_white.png"}
                        alt="ultimate"
                        width={15}
                        height={15}
                        unoptimized={true}
                      />
                    ) : item.is_zeta === true ? (
                      <Image
                        src={"/skill/tex.skill_zeta.png"}
                        alt="ultimate"
                        width={15}
                        height={15}
                        unoptimized={true}
                      />
                    ) : item.is_omega === true ? (
                      <Image
                        src={"/skill/tex.skill_pentagon_gold.png"}
                        alt="ultimate"
                        width={15}
                        height={15}
                        unoptimized={true}
                      />
                    ) : (
                      <Image
                        src={"/skill/tex.skill_pentagon_white.png"}
                        alt="ultimate"
                        width={15}
                        height={15}
                        unoptimized={true}
                      />
                    )
                  ) : (
                    <></>
                  )}
                </div>
              </h1>
              <div className="">
                {item.description_jp.includes(">") ||
                item.description_jp.includes("*") ||
                item.description_jp.includes("$") ||
                item.description_jp.includes("#") ||
                item.description_jp.includes("+") ? (
                  item.description_jp
                    .split(">")
                    .map((line: string, lineIndex: number) => {
                      if (lineIndex % 2 !== 0 && lineIndex !== 0) {
                        return (
                          <span key={lineIndex}>
                            <br />
                          </span>
                        );
                      } else if (line.includes("*")) {
                        return line
                          .split("*")
                          .map((yellow: string, yellowIndex: number) => {
                            if (yellowIndex % 2 !== 0) {
                              return (
                                <span
                                  className="text-yellow-200"
                                  key={yellowIndex}
                                >
                                  {yellow}
                                </span>
                              );
                            } else if (yellow.includes("$")) {
                              return yellow
                                .split("$")
                                .map((white: string, whiteIndex: number) => {
                                  if (whiteIndex % 2 !== 0) {
                                    return (
                                      <span
                                        className="font-bold text-lg drop-shadow"
                                        key={whiteIndex}
                                      >
                                        {white}
                                      </span>
                                    );
                                  } else if (yellow.includes("#")) {
                                    return yellow
                                      .split("#")
                                      .map(
                                        (
                                          orange: string,
                                          orangeIndex: number,
                                        ) => {
                                          if (orangeIndex % 2 !== 0) {
                                            return (
                                              <span
                                                className="font-bold text-lg drop-shadow"
                                                key={orangeIndex}
                                              >
                                                {orange}
                                              </span>
                                            );
                                          } else if (yellow.includes("+")) {
                                            return yellow
                                              .split("+")
                                              .map(
                                                (
                                                  sky: string,
                                                  skyIndex: number,
                                                ) => {
                                                  if (skyIndex % 2 !== 0) {
                                                    return (
                                                      <span
                                                        className="font-bold text-lg drop-shadow"
                                                        key={skyIndex}
                                                      >
                                                        {sky}
                                                      </span>
                                                    );
                                                  } else {
                                                    return (
                                                      <span key={skyIndex}>
                                                        {sky}
                                                      </span>
                                                    );
                                                  }
                                                },
                                              );
                                          } else {
                                            return (
                                              <span key={orangeIndex}>
                                                {orange}
                                              </span>
                                            );
                                          }
                                        },
                                      );
                                  } else {
                                    return (
                                      <span key={whiteIndex}>{white}</span>
                                    );
                                  }
                                });
                            } else if (yellow.includes("#")) {
                              return yellow
                                .split("#")
                                .map((orange: string, orangeIndex: number) => {
                                  if (orangeIndex % 2 !== 0) {
                                    return (
                                      <span
                                        className="font-bold text-lg drop-shadow"
                                        key={orangeIndex}
                                      >
                                        {orange}
                                      </span>
                                    );
                                  } else if (yellow.includes("+")) {
                                    return yellow
                                      .split("+")
                                      .map((sky: string, skyIndex: number) => {
                                        if (skyIndex % 2 !== 0) {
                                          return (
                                            <span
                                              className="font-bold text-lg drop-shadow"
                                              key={skyIndex}
                                            >
                                              {sky}
                                            </span>
                                          );
                                        } else {
                                          return (
                                            <span key={skyIndex}>{sky}</span>
                                          );
                                        }
                                      });
                                  } else {
                                    return (
                                      <span key={orangeIndex}>{orange}</span>
                                    );
                                  }
                                });
                            } else if (yellow.includes("+")) {
                              return yellow
                                .split("+")
                                .map((sky: string, skyIndex: number) => {
                                  if (skyIndex % 2 !== 0) {
                                    return (
                                      <span
                                        className="font-bold text-lg drop-shadow"
                                        key={skyIndex}
                                      >
                                        {sky}
                                      </span>
                                    );
                                  } else {
                                    return <span key={skyIndex}>{sky}</span>;
                                  }
                                });
                            } else {
                              return <span key={yellowIndex}>{yellow}</span>;
                            }
                          });
                      } else if (line.includes("$")) {
                        return line
                          .split("$")
                          .map((omicron: string, omicronIndex: number) => {
                            if (omicronIndex % 2 !== 0) {
                              return (
                                <span
                                  key={omicronIndex}
                                  className="font-bold text-lg drop-shadow"
                                >
                                  {omicron}
                                </span>
                              );
                            } else if (omicron.includes("#")) {
                              return omicron
                                .split("#")
                                .map((orange: string, orangeIndex: number) => {
                                  if (orangeIndex % 2 !== 0) {
                                    return (
                                      <span
                                        className="font-bold text-lg drop-shadow"
                                        key={orangeIndex}
                                      >
                                        {orange}
                                      </span>
                                    );
                                  } else if (omicron.includes("+")) {
                                    return omicron
                                      .split("+")
                                      .map((sky: string, skyIndex: number) => {
                                        if (skyIndex % 2 !== 0) {
                                          return (
                                            <span
                                              className="font-bold text-lg drop-shadow"
                                              key={skyIndex}
                                            >
                                              {sky}
                                            </span>
                                          );
                                        } else {
                                          return (
                                            <span key={skyIndex}>{sky}</span>
                                          );
                                        }
                                      });
                                  } else {
                                    return (
                                      <span key={orangeIndex}>{orange}</span>
                                    );
                                  }
                                });
                            } else if (omicron.includes("+")) {
                              return omicron
                                .split("+")
                                .map((sky: string, skyIndex: number) => {
                                  if (skyIndex % 2 !== 0) {
                                    return (
                                      <span
                                        className="font-bold text-lg drop-shadow"
                                        key={skyIndex}
                                      >
                                        {sky}
                                      </span>
                                    );
                                  } else {
                                    return <span key={skyIndex}>{sky}</span>;
                                  }
                                });
                            } else {
                              return <span key={omicronIndex}>{omicron}</span>;
                            }
                          });
                      } else if (line.includes("#")) {
                        return line
                          .split("#")
                          .map((ult: string, ultIndex: number) => {
                            if (ultIndex % 2 !== 0) {
                              return (
                                <span
                                  key={ultIndex}
                                  className="text-orange-400"
                                >
                                  {ult}
                                </span>
                              );
                            } else if (ult.includes("+")) {
                              return ult
                                .split("+")
                                .map((sky: string, skyIndex: number) => {
                                  if (skyIndex % 2 !== 0) {
                                    return (
                                      <span
                                        className="font-bold text-lg drop-shadow"
                                        key={skyIndex}
                                      >
                                        {sky}
                                      </span>
                                    );
                                  } else {
                                    return <span key={skyIndex}>{sky}</span>;
                                  }
                                });
                            } else {
                              return <span key={ultIndex}>{ult}</span>;
                            }
                          });
                      } else if (line.includes("+")) {
                        return line
                          .split("+")
                          .map((role: string, roleIndex: number) => {
                            if (roleIndex % 2 !== 0) {
                              return (
                                <span key={roleIndex} className="text-sky-200">
                                  {role}
                                </span>
                              );
                            } else {
                              return <span key={roleIndex}>{role}</span>;
                            }
                          });
                      } else {
                        return <span key={lineIndex}>{line}</span>;
                      }
                    })
                ) : (
                  <span>{item.description_jp}</span>
                )}
              </div>
            </div>
          );
        })}
        <footer>最終更新日: {data[abilityIndex].last_updated}</footer>
      </>
    );
  }
}
