"use client";

type GameMode = "rote" | "tw" | "gac";
type RotePurpose =
  | "platoon"
  | "combat_mission"
  | "special_mission"
  | "guild_rewards"
  | "guild_strategy";

interface PurposeSelectorProps {
  mode: GameMode;
  selectedPurpose: RotePurpose | null;
  onSelectPurpose: (purpose: RotePurpose) => void;
  userNote: string;
  onNoteChange: (note: string) => void;
  onStart: () => void;
  starting: boolean;
}

const ROTE_PURPOSES: { id: RotePurpose; label: string; description: string }[] = [
  {
    id: "guild_rewards",
    label: "ギルド報酬の向上",
    description: "小隊・戦闘ミッション・SMの3軸で総合的に評価",
  },
  {
    id: "platoon",
    label: "小隊配置（Platoon）の最大化",
    description: "小隊充足率アップに特化したアドバイス",
  },
  {
    id: "combat_mission",
    label: "通常戦闘ミッションへの貢献",
    description: "ミッションで使える編成の強化に特化",
  },
  {
    id: "special_mission",
    label: "スペシャルミッションのクリア",
    description: "SM解放・クリア条件の達成に特化",
  },
  {
    id: "guild_strategy",
    label: "ギルド戦略（ギルド全体データ参照）",
    description: "ギルド全体の不足を補う育成アドバイス",
  },
];

export default function PurposeSelector({
  mode,
  selectedPurpose,
  onSelectPurpose,
  userNote,
  onNoteChange,
  onStart,
  starting,
}: PurposeSelectorProps) {
  const isRote = mode === "rote";

  return (
    <div className="bg-stone-800 rounded-lg p-6 border border-stone-600">
      <h2 className="text-xl font-semibold text-amber-400 mb-4">
        目的を選択
      </h2>

      {isRote ? (
        <div className="space-y-3 mb-6">
          {ROTE_PURPOSES.map((p) => (
            <button
              key={p.id}
              onClick={() => onSelectPurpose(p.id)}
              className={`w-full text-left px-4 py-3 rounded border transition-colors ${
                selectedPurpose === p.id
                  ? "border-amber-400 bg-amber-900/30 text-amber-300"
                  : "border-stone-600 bg-stone-700 hover:border-stone-400 text-white"
              }`}
            >
              <div className="font-semibold">{p.label}</div>
              <div className="text-sm text-stone-400 mt-0.5">{p.description}</div>
            </button>
          ))}
        </div>
      ) : (
        <p className="text-stone-300 mb-6">
          {mode === "tw"
            ? "テリトリーウォー（TW）の防衛・攻撃編成に関するアドバイスを提供します。"
            : "グランドアリーナ（GAC）の戦績向上に向けたアドバイスを提供します。"}
        </p>
      )}

      <div className="mb-6">
        <label className="block text-sm text-stone-300 mb-1">
          補足コメント（任意）
        </label>
        <textarea
          value={userNote}
          onChange={(e) => onNoteChange(e.target.value)}
          placeholder="例: 最近R7になったキャラがいる、特定のミッションが気になるなど..."
          rows={3}
          className="w-full px-4 py-2 bg-stone-700 border border-stone-500 rounded text-white placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 resize-none"
        />
      </div>

      <button
        onClick={onStart}
        disabled={starting || (isRote && !selectedPurpose)}
        className="w-full py-3 px-4 bg-amber-600 hover:bg-amber-500 disabled:bg-stone-600 disabled:cursor-not-allowed text-white font-semibold rounded transition-colors"
      >
        {starting ? "アドバイス生成中..." : "アドバイスを開始"}
      </button>
    </div>
  );
}
