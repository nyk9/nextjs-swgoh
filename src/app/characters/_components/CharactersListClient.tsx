"use client";

import { Badge } from "@/components/ui/badge";
import propertyButtons from "@/features/characterlist/constants/property";
import skillButtons from "@/features/characterlist/constants/skillEffect";
import { useUrlList, useUrlReset, useUrlString } from "@/hooks/useUrlFilterState";
import type { Characters, Property, Skills } from "@/types/characters/characters";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const CORE_PROPERTIES = [
  "ライトサイド",
  "ダークサイド",
  "ニュートラル",
  "リーダー",
  "アタッカー",
  "サポート",
  "タンク",
  "ヒーラー",
] as const;

const URL_KEYS = ["q", "properties", "skills"];

type FilterTab = "attribute" | "skill";

const normalize = (value: string) => value.trim().toLowerCase();

const includes = (haystack: string, needle: string) =>
  normalize(haystack).includes(normalize(needle));

function filterCharacters(
  source: Characters[],
  searchTerm: string,
  selectedProperty: string[],
  selectedSkill: string[],
): Characters[] {
  const term = searchTerm.trim();
  return source.filter((item) => {
    const properties: Property[] = Array.isArray(item.property)
      ? item.property
      : [];

    const matchesTerm =
      term.length === 0 ||
      includes(item.name, term) ||
      includes(item.abbreviation, term) ||
      properties.some((p) => includes(p, term));

    const matchesProperty =
      selectedProperty.length === 0 ||
      selectedProperty.every((prop) => properties.includes(prop as Property));

    const matchesSkill =
      selectedSkill.length === 0 ||
      selectedSkill.every((skill) => item.skill.includes(skill as Skills));

    return matchesTerm && matchesProperty && matchesSkill;
  });
}

export function CharactersListClient({
  characters,
}: {
  characters: Characters[];
}) {
  const [searchTerm, setSearchTerm] = useUrlString("q");
  const [selectedProperty, toggleProperty] = useUrlList("properties");
  const [selectedSkill, toggleSkill] = useUrlList("skills");
  const reset = useUrlReset(URL_KEYS);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<FilterTab>("attribute");

  const openFilter = useCallback(() => setIsFilterOpen(true), []);
  const closeFilter = useCallback(() => setIsFilterOpen(false), []);

  useEffect(() => {
    if (!isFilterOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeFilter();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isFilterOpen, closeFilter]);

  const allPropertyFilters = useMemo(
    () => [...CORE_PROPERTIES, ...propertyButtons],
    [],
  );

  const searchResults = useMemo(
    () =>
      filterCharacters(
        characters,
        searchTerm,
        selectedProperty,
        selectedSkill,
      ),
    [characters, searchTerm, selectedProperty, selectedSkill],
  );

  const activeFilterCount = selectedProperty.length + selectedSkill.length;
  const hasActiveFilter =
    activeFilterCount > 0 || searchTerm.trim().length > 0;
  const matchRate =
    characters.length > 0
      ? Math.round((searchResults.length / characters.length) * 100)
      : 0;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[hsl(220,16%,6%)] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(58% 42% at 12% 8%, rgba(34,211,238,0.15) 0%, rgba(34,211,238,0) 72%), radial-gradient(42% 32% at 88% 16%, rgba(245,158,11,0.12) 0%, rgba(245,158,11,0) 75%), radial-gradient(40% 26% at 50% 92%, rgba(217,70,239,0.12) 0%, rgba(217,70,239,0) 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-8 md:px-6 md:pt-10">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium text-white/60 transition hover:text-white/90"
          >
            ← トップ
          </Link>
          <Link
            href="/advisor"
            className="rounded-lg border border-white/20 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-white/80 transition hover:bg-white/[0.09]"
          >
            育成アドバイザーへ
          </Link>
        </div>

        <section className="mb-6 grid gap-4 md:grid-cols-12">
          <article className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-5 backdrop-blur md:col-span-8 md:p-7">
            <p className="mb-2 inline-flex items-center rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-cyan-100">
              CHARACTER INDEX
            </p>
            <h1 className="text-2xl font-black leading-tight text-white md:text-3xl">
              キャラクター図鑑
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
              名前検索・属性・スキル効果で横断フィルター。必要なキャラ情報へ、最短で到達できます。
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/20 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
                全 {characters.length.toLocaleString("ja-JP")} 体
              </span>
              <span className="rounded-full border border-white/20 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
                該当率 {matchRate}%
              </span>
              {activeFilterCount > 0 && (
                <span className="rounded-full border border-amber-200/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-100">
                  フィルター {activeFilterCount} 件適用中
                </span>
              )}
            </div>
          </article>

          <aside className="rounded-2xl border border-white/15 bg-white/[0.03] p-5 backdrop-blur md:col-span-4 md:p-6">
            <p className="mb-2 text-xs font-semibold tracking-wider text-white/55">
              RESULT SNAPSHOT
            </p>
            <p className="text-3xl font-black text-white">
              {searchResults.length.toLocaleString("ja-JP")}
            </p>
            <p className="mt-1 text-xs text-white/55">マッチしたキャラクター</p>
            <button
              type="button"
              onClick={reset}
              disabled={!hasActiveFilter}
              className="mt-4 w-full rounded-xl border border-white/20 bg-white/[0.03] px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/[0.09] disabled:cursor-not-allowed disabled:opacity-40"
            >
              条件をリセット
            </button>
          </aside>
        </section>

        <section className="mb-5 rounded-2xl border border-white/12 bg-white/[0.03] p-4 md:p-5">
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="キャラクター名で検索（例：ルーク）"
                className="w-full rounded-xl border border-white/15 bg-[hsl(220,16%,10%)] px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                aria-label="キャラクター検索"
              />
            </div>
            <button
              type="button"
              onClick={openFilter}
              className="rounded-xl border border-white/20 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white/85 transition hover:bg-white/[0.1]"
            >
              フィルターを開く
            </button>
          </div>

          {(selectedProperty.length > 0 || selectedSkill.length > 0) && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {selectedProperty.map((prop) => (
                <button
                  key={prop}
                  type="button"
                  onClick={() => toggleProperty(prop)}
                  className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/[0.06] px-2.5 py-1 text-xs text-white/85 transition hover:bg-white/[0.12]"
                  aria-label={`${prop} を解除`}
                >
                  {prop}
                  <span className="text-white/60">×</span>
                </button>
              ))}
              {selectedSkill.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => toggleSkill(skill)}
                  className="inline-flex items-center gap-1 rounded-full border border-amber-200/25 bg-amber-300/10 px-2.5 py-1 text-xs text-amber-100 transition hover:bg-amber-300/15"
                  aria-label={`${skill} を解除`}
                >
                  {skill}
                  <span className="text-amber-100/70">×</span>
                </button>
              ))}
            </div>
          )}
        </section>

        {isFilterOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="キャラクターフィルター"
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-16 backdrop-blur-sm"
            onClick={closeFilter}
          >
            <div
              className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/15 bg-[hsl(220,16%,10%)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-5">
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveTab("attribute")}
                    className={`rounded-lg px-3 py-1.5 text-sm transition ${
                      activeTab === "attribute"
                        ? "bg-white text-[hsl(220,16%,6%)] font-semibold"
                        : "bg-white/[0.06] text-white/80 hover:bg-white/[0.12]"
                    }`}
                  >
                    属性
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("skill")}
                    className={`rounded-lg px-3 py-1.5 text-sm transition ${
                      activeTab === "skill"
                        ? "bg-white text-[hsl(220,16%,6%)] font-semibold"
                        : "bg-white/[0.06] text-white/80 hover:bg-white/[0.12]"
                    }`}
                  >
                    スキル効果
                  </button>
                </div>
                <button
                  type="button"
                  onClick={closeFilter}
                  className="flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg text-white/60 transition hover:bg-white/[0.1] hover:text-white"
                  aria-label="フィルターを閉じる"
                >
                  <IoCloseOutline className="h-5 w-5" />
                </button>
              </div>

              <div className="max-h-[72vh] overflow-y-auto p-4 md:p-5">
                {activeTab === "attribute" && (
                  <>
                    <p className="mb-3 text-xs font-semibold tracking-wider text-white/50">
                      CHARACTER ATTRIBUTES
                    </p>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                      {allPropertyFilters.map((property) => {
                        const isActive = selectedProperty.includes(property);
                        return (
                          <button
                            key={property}
                            type="button"
                            onClick={() => toggleProperty(property)}
                            aria-pressed={isActive}
                            className={`rounded-lg border px-3 py-2 text-sm transition ${
                              isActive
                                ? "border-transparent bg-white text-[hsl(220,16%,6%)] font-semibold"
                                : "border-white/15 bg-transparent text-white/85 hover:border-white/30"
                            }`}
                          >
                            {property}
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}

                {activeTab === "skill" && (
                  <>
                    <p className="mb-3 text-xs font-semibold tracking-wider text-white/50">
                      SKILL EFFECTS
                    </p>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                      {skillButtons.map((skill) => {
                        const isActive = selectedSkill.includes(skill);
                        return (
                          <button
                            key={skill}
                            type="button"
                            onClick={() => toggleSkill(skill)}
                            aria-pressed={isActive}
                            className={`rounded-lg border px-3 py-2 text-sm transition ${
                              isActive
                                ? "border-transparent bg-amber-300 text-[hsl(220,16%,6%)] font-semibold"
                                : "border-white/15 bg-transparent text-white/85 hover:border-white/30"
                            }`}
                          >
                            {skill}
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        <section>
          <div className="mb-3 flex items-end justify-between">
            <h2 className="text-lg font-extrabold text-white/95">検索結果</h2>
            <p className="text-xs text-white/50">
              {searchResults.length.toLocaleString("ja-JP")} /{" "}
              {characters.length.toLocaleString("ja-JP")} 件
            </p>
          </div>

          {searchResults.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-10 text-center">
              <p className="text-base font-semibold text-white/85">
                条件に一致するキャラクターが見つかりませんでした
              </p>
              <p className="mt-2 text-sm text-white/55">
                検索語やフィルター条件を緩めて再検索してみてください。
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {searchResults.map((char) => (
                <article
                  key={char.character_base_id ?? char.url ?? char.name}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
                >
                  <div className="p-4">
                    <h3 className="mb-3 line-clamp-2 text-sm font-bold leading-snug text-white">
                      {char.name}
                    </h3>
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 overflow-hidden rounded-lg border border-white/10 bg-[hsl(220,14%,14%)]">
                        <Image
                          alt={char.name}
                          src={char.src}
                          className="block"
                          width={60}
                          height={60}
                        />
                      </div>
                      <p className="line-clamp-4 text-xs leading-relaxed text-white/65">
                        {Array.isArray(char.property)
                          ? char.property.join("、")
                          : char.property}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 border-t border-white/10 px-4 py-2.5">
                    <Link href={char.url}>
                      <Badge className="cursor-pointer border-white/20 bg-white/[0.06] text-[10px] text-white/85 hover:bg-white/[0.14]">
                        ゲーム内説明
                      </Badge>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
