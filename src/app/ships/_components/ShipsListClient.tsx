"use client";

import { Badge } from "@/components/ui/badge";
import {
  SHIP_CORE_FACTIONS,
  SHIP_FACTIONS,
} from "@/features/shiplist/constants/shipFaction";
import { SHIP_ROLES } from "@/features/shiplist/constants/shipRole";
import { filterShips } from "@/features/shiplist/filterShips";
import { useUrlList, useUrlReset, useUrlString } from "@/hooks/useUrlFilterState";
import type { Ship } from "@/types/ships/ships";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

type FilterTab = "faction" | "role";

const URL_KEYS = ["q", "factions", "roles"];

export function ShipsListClient({ ships }: { ships: Ship[] }) {
  const [searchTerm, setSearchTerm] = useUrlString("q");
  const [selectedFactions, toggleFaction] = useUrlList("factions");
  const [selectedRoles, toggleRole] = useUrlList("roles");
  const reset = useUrlReset(URL_KEYS);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<FilterTab>("faction");

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

  const factionFilters = useMemo(
    () => [...SHIP_CORE_FACTIONS, ...SHIP_FACTIONS],
    [],
  );

  const results = useMemo(
    () =>
      filterShips(ships, {
        searchTerm,
        selectedFactions,
        selectedRoles,
      }),
    [ships, searchTerm, selectedFactions, selectedRoles],
  );

  const activeFilterCount = selectedFactions.length + selectedRoles.length;
  const hasActiveFilter =
    activeFilterCount > 0 || searchTerm.trim().length > 0;
  const matchRate =
    ships.length > 0 ? Math.round((results.length / ships.length) * 100) : 0;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[hsl(220,16%,6%)] text-white">
      <BackgroundLayers />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-8 md:px-6 md:pt-10">
        <TopNav />

        <HeroSection
          totalCount={ships.length}
          matchRate={matchRate}
          activeFilterCount={activeFilterCount}
          resultCount={results.length}
          onReset={reset}
          canReset={hasActiveFilter}
        />

        <SearchSection
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onOpenFilter={openFilter}
          selectedFactions={selectedFactions}
          selectedRoles={selectedRoles}
          onToggleFaction={toggleFaction}
          onToggleRole={toggleRole}
        />

        {isFilterOpen && (
          <FilterModal
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onClose={closeFilter}
            factionFilters={factionFilters}
            roleFilters={SHIP_ROLES}
            selectedFactions={selectedFactions}
            selectedRoles={selectedRoles}
            onToggleFaction={toggleFaction}
            onToggleRole={toggleRole}
          />
        )}

        <ResultGrid totalCount={ships.length} results={results} />
      </div>
    </main>
  );
}

function BackgroundLayers() {
  return (
    <>
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
    </>
  );
}

function TopNav() {
  return (
    <div className="mb-6 flex items-center justify-between">
      <Link
        href="/"
        className="text-sm font-medium text-white/60 transition hover:text-white/90"
      >
        ← トップ
      </Link>
      <Link
        href="/characters"
        className="rounded-lg border border-white/20 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-white/80 transition hover:bg-white/[0.09]"
      >
        キャラクター図鑑へ
      </Link>
    </div>
  );
}

type HeroProps = {
  totalCount: number;
  matchRate: number;
  activeFilterCount: number;
  resultCount: number;
  canReset: boolean;
  onReset: () => void;
};

function HeroSection({
  totalCount,
  matchRate,
  activeFilterCount,
  resultCount,
  canReset,
  onReset,
}: HeroProps) {
  return (
    <section className="mb-6 grid gap-4 md:grid-cols-12">
      <article className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-5 backdrop-blur md:col-span-8 md:p-7">
        <p className="mb-2 inline-flex items-center rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-cyan-100">
          SHIP INDEX
        </p>
        <h1 className="text-2xl font-black leading-tight text-white md:text-3xl">
          艦隊図鑑
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
          名前・パイロット・派閥・役割で横断フィルター。艦隊編成に必要な情報へ、最短で到達できます。
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/20 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
            全 {totalCount.toLocaleString("ja-JP")} 隻
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
          {resultCount.toLocaleString("ja-JP")}
        </p>
        <p className="mt-1 text-xs text-white/55">マッチした艦船</p>
        <button
          type="button"
          onClick={onReset}
          disabled={!canReset}
          className="mt-4 w-full rounded-xl border border-white/20 bg-white/[0.03] px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/[0.09] disabled:cursor-not-allowed disabled:opacity-40"
        >
          条件をリセット
        </button>
      </aside>
    </section>
  );
}

type SearchProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onOpenFilter: () => void;
  selectedFactions: string[];
  selectedRoles: string[];
  onToggleFaction: (faction: string) => void;
  onToggleRole: (role: string) => void;
};

function SearchSection({
  searchTerm,
  onSearchChange,
  onOpenFilter,
  selectedFactions,
  selectedRoles,
  onToggleFaction,
  onToggleRole,
}: SearchProps) {
  const hasChips = selectedFactions.length > 0 || selectedRoles.length > 0;
  return (
    <section className="mb-5 rounded-2xl border border-white/12 bg-white/[0.03] p-4 md:p-5">
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="艦名・パイロット・派閥で検索（例：ファルコン）"
            className="w-full rounded-xl border border-white/15 bg-[hsl(220,16%,10%)] px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            aria-label="艦船検索"
          />
        </div>
        <button
          type="button"
          onClick={onOpenFilter}
          className="rounded-xl border border-white/20 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white/85 transition hover:bg-white/[0.1]"
        >
          フィルターを開く
        </button>
      </div>

      {hasChips && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {selectedFactions.map((faction) => (
            <Chip
              key={`faction-${faction}`}
              label={faction}
              onRemove={() => onToggleFaction(faction)}
            />
          ))}
          {selectedRoles.map((role) => (
            <Chip
              key={`role-${role}`}
              label={role}
              tone="amber"
              onRemove={() => onToggleRole(role)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

type ChipProps = {
  label: string;
  onRemove: () => void;
  tone?: "default" | "amber";
};

function Chip({ label, onRemove, tone = "default" }: ChipProps) {
  const toneClass =
    tone === "amber"
      ? "border-amber-200/25 bg-amber-300/10 text-amber-100 hover:bg-amber-300/15"
      : "border-white/20 bg-white/[0.06] text-white/85 hover:bg-white/[0.12]";
  const closeClass = tone === "amber" ? "text-amber-100/70" : "text-white/60";
  return (
    <button
      type="button"
      onClick={onRemove}
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs transition ${toneClass}`}
      aria-label={`${label} を解除`}
    >
      {label}
      <span className={closeClass}>×</span>
    </button>
  );
}

type FilterModalProps = {
  activeTab: FilterTab;
  onTabChange: (tab: FilterTab) => void;
  onClose: () => void;
  factionFilters: readonly string[];
  roleFilters: readonly string[];
  selectedFactions: string[];
  selectedRoles: string[];
  onToggleFaction: (faction: string) => void;
  onToggleRole: (role: string) => void;
};

function FilterModal({
  activeTab,
  onTabChange,
  onClose,
  factionFilters,
  roleFilters,
  selectedFactions,
  selectedRoles,
  onToggleFaction,
  onToggleRole,
}: FilterModalProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="艦船フィルター"
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-16 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/15 bg-[hsl(220,16%,10%)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-5">
          <div className="flex gap-1.5">
            <TabButton
              active={activeTab === "faction"}
              onClick={() => onTabChange("faction")}
            >
              派閥
            </TabButton>
            <TabButton
              active={activeTab === "role"}
              onClick={() => onTabChange("role")}
            >
              役割
            </TabButton>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg text-white/60 transition hover:bg-white/[0.1] hover:text-white"
            aria-label="フィルターを閉じる"
          >
            <IoCloseOutline className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[72vh] overflow-y-auto p-4 md:p-5">
          {activeTab === "faction" && (
            <FilterOptionGrid
              heading="SHIP FACTIONS"
              options={factionFilters}
              selected={selectedFactions}
              onToggle={onToggleFaction}
              tone="default"
            />
          )}
          {activeTab === "role" && (
            <FilterOptionGrid
              heading="SHIP ROLES"
              options={roleFilters}
              selected={selectedRoles}
              onToggle={onToggleRole}
              tone="amber"
            />
          )}
        </div>
      </div>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg px-3 py-1.5 text-sm transition ${
        active
          ? "bg-white text-[hsl(220,16%,6%)] font-semibold"
          : "bg-white/[0.06] text-white/80 hover:bg-white/[0.12]"
      }`}
    >
      {children}
    </button>
  );
}

type FilterOptionGridProps = {
  heading: string;
  options: readonly string[];
  selected: string[];
  onToggle: (value: string) => void;
  tone: "default" | "amber";
};

function FilterOptionGrid({
  heading,
  options,
  selected,
  onToggle,
  tone,
}: FilterOptionGridProps) {
  const activeClass =
    tone === "amber"
      ? "border-transparent bg-amber-300 text-[hsl(220,16%,6%)] font-semibold"
      : "border-transparent bg-white text-[hsl(220,16%,6%)] font-semibold";
  return (
    <>
      <p className="mb-3 text-xs font-semibold tracking-wider text-white/50">
        {heading}
      </p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {options.map((option) => {
          const isActive = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => onToggle(option)}
              aria-pressed={isActive}
              className={`rounded-lg border px-3 py-2 text-sm transition ${
                isActive
                  ? activeClass
                  : "border-white/15 bg-transparent text-white/85 hover:border-white/30"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
}

function ResultGrid({
  totalCount,
  results,
}: {
  totalCount: number;
  results: Ship[];
}) {
  return (
    <section>
      <div className="mb-3 flex items-end justify-between">
        <h2 className="text-lg font-extrabold text-white/95">検索結果</h2>
        <p className="text-xs text-white/50">
          {results.length.toLocaleString("ja-JP")} /{" "}
          {totalCount.toLocaleString("ja-JP")} 件
        </p>
      </div>

      {results.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-10 text-center">
          <p className="text-base font-semibold text-white/85">
            条件に一致する艦船が見つかりませんでした
          </p>
          <p className="mt-2 text-sm text-white/55">
            検索語やフィルター条件を緩めて再検索してみてください。
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((ship) => (
            <ShipCard key={ship.base_id ?? ship.name} ship={ship} />
          ))}
        </div>
      )}
    </section>
  );
}

function ShipCard({ ship }: { ship: Ship }) {
  const href = ship.url ?? (ship.base_id ? `/ships/${ship.base_id.toLowerCase()}` : null);

  const cardBody = (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
      <div className="p-4">
        <h3 className="mb-3 line-clamp-2 text-sm font-bold leading-snug text-white">
          {ship.name}
        </h3>
        <div className="flex items-start gap-3">
          <div className="shrink-0 overflow-hidden rounded-lg border border-white/10 bg-[hsl(220,14%,14%)]">
            <Image
              alt={ship.name}
              src={ship.src}
              className="block"
              width={60}
              height={60}
            />
          </div>
          <div className="min-w-0 flex-1">
            {ship.pilot && (
              <p className="mb-1 line-clamp-1 text-[11px] text-white/55">
                パイロット: {ship.pilot}
              </p>
            )}
            <p className="line-clamp-3 text-xs leading-relaxed text-white/65">
              {ship.faction.join("、")}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 border-t border-white/10 px-4 py-2.5">
        {ship.role.map((role) => (
          <Badge
            key={role}
            className="border-amber-200/25 bg-amber-300/10 text-[10px] text-amber-100"
          >
            {role}
          </Badge>
        ))}
      </div>
    </article>
  );

  if (!href) return cardBody;

  return (
    <Link
      href={href}
      className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/40"
    >
      {cardBody}
    </Link>
  );
}
