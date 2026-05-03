import type { Ship } from "@/types/ships/ships";

const normalize = (value: string) => value.trim().toLowerCase();

const includes = (haystack: string, needle: string) =>
  normalize(haystack).includes(normalize(needle));

export type ShipFilterState = {
  searchTerm: string;
  selectedFactions: string[];
  selectedRoles: string[];
};

export function filterShips(
  source: Ship[],
  { searchTerm, selectedFactions, selectedRoles }: ShipFilterState,
): Ship[] {
  const term = searchTerm.trim();
  return source.filter((ship) => {
    const matchesTerm =
      term.length === 0 ||
      includes(ship.name, term) ||
      includes(ship.abbreviation, term) ||
      includes(ship.pilot ?? "", term) ||
      ship.faction.some((f) => includes(f, term));

    const matchesFactions =
      selectedFactions.length === 0 ||
      selectedFactions.every((f) =>
        ship.faction.some((entry) => entry === f),
      );

    const matchesRoles =
      selectedRoles.length === 0 ||
      selectedRoles.every((r) => ship.role.some((entry) => entry === r));

    return matchesTerm && matchesFactions && matchesRoles;
  });
}
