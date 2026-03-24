"use client";

type GameMode = "rote" | "tw" | "gac";

interface ModeSelectorProps {
  selected: GameMode | null;
  onSelect: (mode: GameMode) => void;
}

const MODES: { id: GameMode; label: string; description: string }[] = [
  {
    id: "rote",
    label: "Rise of the Empire TB",
    description: "RotE テリトリーバトル向けアドバイス",
  },
  {
    id: "tw",
    label: "テリトリーウォー（TW）",
    description: "TW 防衛・攻撃向けアドバイス",
  },
  {
    id: "gac",
    label: "グランドアリーナ（GAC）",
    description: "GAC 戦績向上向けアドバイス",
  },
];

export default function ModeSelector({ selected, onSelect }: ModeSelectorProps) {
  return (
    <div className="bg-stone-800 rounded-lg p-6 border border-stone-600">
      <h2 className="text-xl font-semibold text-amber-400 mb-4">
        モードを選択
      </h2>
      <div className="space-y-3">
        {MODES.map((mode) => (
          <button
            key={mode.id}
            onClick={() => onSelect(mode.id)}
            className={`w-full text-left px-4 py-3 rounded border transition-colors ${
              selected === mode.id
                ? "border-amber-400 bg-amber-900/30 text-amber-300"
                : "border-stone-600 bg-stone-700 hover:border-stone-400 text-white"
            }`}
          >
            <div className="font-semibold">{mode.label}</div>
            <div className="text-sm text-stone-400 mt-0.5">{mode.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
