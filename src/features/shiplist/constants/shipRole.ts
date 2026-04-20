import type { ShipRole } from "@/types/ships/ships";

export const SHIP_ROLES: readonly ShipRole[] = [
  "キャピタルシップ",
  "アタッカー",
  "サポート",
  "タンク",
] as const;
