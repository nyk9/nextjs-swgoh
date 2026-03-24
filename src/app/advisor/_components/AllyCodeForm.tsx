"use client";

import { useState } from "react";

interface PlayerInfo {
  name: string;
  allyCode: number;
  level: number;
  guildName: string;
  galacticPower: number;
  characterGalacticPower: number;
  shipGalacticPower: number;
  topUnits: Array<{
    id: string;
    gearLevel: number;
    stars: number;
    relicLevel: number;
  }>;
}

interface AllyCodeFormProps {
  onPlayerLoaded: (player: PlayerInfo, allycode: string) => void;
}

export default function AllyCodeForm({ onPlayerLoaded }: AllyCodeFormProps) {
  const [allycode, setAllycode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const clean = allycode.replace(/[^0-9]/g, "");
    if (clean.length !== 9) {
      setError("アライコードは9桁の数字で入力してください");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/advice/player?allycode=${clean}`);
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "プレイヤーデータの取得に失敗しました");
        return;
      }

      onPlayerLoaded(data, clean);
    } catch {
      setError("通信エラーが発生しました。しばらくしてから再試行してください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-stone-800 rounded-lg p-6 border border-stone-600">
      <h2 className="text-xl font-semibold text-amber-400 mb-4">
        アライコードを入力
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="allycode" className="block text-sm text-stone-300 mb-1">
            アライコード（9桁の数字）
          </label>
          <input
            id="allycode"
            type="text"
            value={allycode}
            onChange={(e) => setAllycode(e.target.value)}
            placeholder="例: 123456789"
            maxLength={11}
            className="w-full px-4 py-2 bg-stone-700 border border-stone-500 rounded text-white placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-amber-600 hover:bg-amber-500 disabled:bg-stone-600 disabled:cursor-not-allowed text-white font-semibold rounded transition-colors"
        >
          {loading ? "取得中..." : "プレイヤーデータを取得"}
        </button>
      </form>
    </div>
  );
}
