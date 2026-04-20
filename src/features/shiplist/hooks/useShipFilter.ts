"use client";

import type { Ship } from "@/types/ships/ships";
import { useCallback, useMemo, useState } from "react";

const normalize = (value: string) => value.trim().toLowerCase();

const includes = (haystack: string, needle: string) =>
  normalize(haystack).includes(normalize(needle));

const toggle = (list: string[], value: string) =>
  list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

export type ShipFilterState = {
  searchTerm: string;
  selectedFactions: string[];
  selectedRoles: string[];
};

export type UseShipFilterResult = {
  state: ShipFilterState;
  results: Ship[];
  activeFilterCount: number;
  hasActiveFilter: boolean;
  setSearchTerm: (term: string) => void;
  toggleFaction: (faction: string) => void;
  toggleRole: (role: string) => void;
  reset: () => void;
};

export function useShipFilter(source: Ship[]): UseShipFilterResult {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFactions, setSelectedFactions] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const results = useMemo(() => {
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
  }, [source, searchTerm, selectedFactions, selectedRoles]);

  const toggleFaction = useCallback((faction: string) => {
    setSelectedFactions((prev) => toggle(prev, faction));
  }, []);

  const toggleRole = useCallback((role: string) => {
    setSelectedRoles((prev) => toggle(prev, role));
  }, []);

  const reset = useCallback(() => {
    setSearchTerm("");
    setSelectedFactions([]);
    setSelectedRoles([]);
  }, []);

  const activeFilterCount = selectedFactions.length + selectedRoles.length;
  const hasActiveFilter = activeFilterCount > 0 || searchTerm.trim().length > 0;

  return {
    state: { searchTerm, selectedFactions, selectedRoles },
    results,
    activeFilterCount,
    hasActiveFilter,
    setSearchTerm,
    toggleFaction,
    toggleRole,
    reset,
  };
}
