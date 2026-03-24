/**
 * RotE TB チャットアドバイス用プロンプト組み立てモジュール
 *
 * チャット形式対応:
 * - buildSystemPrompt: セッション開始時に1回だけ組み立てるシステムプロンプト
 *   プレイヤー情報・目的・手動JSONデータを全て埋め込む
 * - 会話履歴は呼び出し元（client.ts）が管理する
 *
 * purposeの追加・変更は ROTE_PURPOSE_CONFIG だけを編集すればよい。
 * ラベル・ガイドライン・初回ユーザーメッセージをまとめて一元管理している。
 */

import type { FormattedUnit, FormattedPlayer, RoteGameData, GuildAggregation } from "../comlink/types";
import { getPlatoonPhases } from "../data/roteData";
import { formatGuildProfile } from "../comlink/formatGuildProfile";

// -------------------------------------------------------
// 型定義
// -------------------------------------------------------

/** 対応しているゲームモード */
export type GameMode = "rote" | "tw" | "gac";

/** RotE TBの目的 */
export type RotePurpose =
  | "platoon"
  | "combat_mission"
  | "special_mission"
  | "guild_rewards"
  | "guild_strategy";

/** 選択されたモードと目的 */
export type ModeSelection =
  | { mode: "rote"; purpose: RotePurpose }
  | { mode: "tw" }
  | { mode: "gac" };

/**
 * システムプロンプト生成に必要な入力データ
 */
export interface ChatSystemPromptInput {
  /** プレイヤー名 */
  playerName: string;
  /** アライコード */
  allyCode: number;
  /** プレイヤーレベル */
  level: number;
  /** ギルド名 */
  guildName: string;
  /** 総GP */
  galacticPower: number;
  /** キャラクターGP */
  characterGalacticPower: number;
  /** 艦隊GP */
  shipGalacticPower: number;
  /** R5以上キャラ一覧（AIへのアドバイス用・レリック降順） */
  topUnits: FormattedUnit[];
  /** 全キャラのMap（要件達成状況チェック用・R5未満も含む） */
  allUnitsMap: FormattedPlayer["units"];
  /** 選択されたモードと目的 */
  selection: ModeSelection;
  /** ユーザーが入力した自由記述の補足（任意） */
  userNote?: string;
  /**
   * Comlinkから取得したRotE TBゲームデータ（任意）
   * 指定された場合はSM要件・星閾値をプロンプトに含める
   */
  roteGameData?: RoteGameData;
  /**
   * ギルドメンバー全体の育成集計データ（任意）
   * 指定された場合はギルド全体の育成状況をプロンプトに含める
   */
  guildAggregation?: GuildAggregation;
}

// -------------------------------------------------------
// RotE purpose 一元定義
// -------------------------------------------------------

/**
 * RotE TB の各目的（purpose）に対応する定義オブジェクト。
 *
 * 新しい purpose を追加・変更する場合はここだけ編集すればよい。
 * - label:          選択UIや「今回の目的」セクションに表示する日本語ラベル
 * - guidelines:     システムプロンプトの「アドバイスの方針」に追加する目的固有の指示
 * - initialMessage: セッション開始時にAIへ送る最初のユーザーメッセージ
 */
const ROTE_PURPOSE_CONFIG: Record<
  RotePurpose,
  { label: string; guidelines: string[]; initialMessage: string }
> = {
  platoon: {
    label: "小隊配置（Platoon）の最大化",
    guidelines: [
      "- 今回の目的は**小隊配置（Platoon）の最大化**である",
      "- 小隊に必要なキャラクターを優先して育てることを軸にアドバイスすること",
      "- 小隊充足率を上げることにフォーカスし、それ以外の観点（ミッション強化等）は参考程度に留めること",
    ],
    initialMessage:
      "私のキャラクター育成状況を踏まえて、RotE TBの小隊配置（Platoon）を最大化するための育成アドバイスをしてください。優先的に育てるべきキャラクターのトップ5と、その理由を教えてください。",
  },

  combat_mission: {
    label: "通常戦闘ミッションへの貢献",
    guidelines: [
      "- 今回の目的は**通常戦闘ミッションへの貢献**である",
      "- RotE TBの通常ミッションで使える編成を強化することを軸にアドバイスすること",
      "- ミッション貢献度を上げることにフォーカスし、それ以外の観点（小隊充足等）は参考程度に留めること",
    ],
    initialMessage:
      "私のキャラクター育成状況を踏まえて、RotE TBの通常戦闘ミッションに貢献するための育成アドバイスをしてください。今すぐ使える編成と、今後育てるべきキャラクターを教えてください。",
  },

  special_mission: {
    label: "スペシャルミッションのクリア",
    guidelines: [
      "- 今回の目的は**スペシャルミッションのクリア**である",
      "- スペシャルミッションに必要なキャラクターと必要レリックを満たすことを軸にアドバイスすること",
      "- ミッション解放・クリア条件の達成にフォーカスし、それ以外の観点（小隊充足等）は参考程度に留めること",
    ],
    initialMessage:
      "私のキャラクター育成状況を踏まえて、RotE TBのスペシャルミッションをクリアするための育成アドバイスをしてください。どのミッションが達成可能で、何を育てれば次のミッションが解放されるか教えてください。",
  },

  guild_strategy: {
    label: "ギルド戦略（ギルド全体データ参照）",
    guidelines: [
      "- 今回の目的は**ギルド全体の戦略的育成アドバイス**である",
      "- 「ギルド全体の育成状況」セクションに含まれるデータを必ず参照すること",
      "- 個人の育成だけでなく、ギルド全体で不足しているキャラクターの補完を重視すること",
      "- 「このキャラを育てるとギルド内で○人目のR7になる」等、具体的な貢献度を示すこと",
      "- 育成不足のキャラクター（所持率が低い・高レリック保持者が少ない）を優先的に提案すること",
      "- 個人の現状（R5以上キャラ一覧）とギルドの不足を照らし合わせて、最も効果的な育成候補を示すこと",
    ],
    initialMessage:
      "私のキャラクター育成状況とギルド全体のデータを踏まえて、ギルドへの貢献を最大化するための育成アドバイスをしてください。ギルド内で不足しているキャラクターと、私が優先すべき育成候補をTop5で教えてください。",
  },

  guild_rewards: {
    label: "ギルド報酬の向上",
    guidelines: [
      "- 今回の目的は**RotE TBでのギルド報酬の向上**である",
      "",
      "## RotE TBの報酬メカニズム（正確に理解すること）",
      "- ギルド報酬は「獲得した星の総数」によって完全に決まる",
      "- 星は各惑星（ゾーン）に設定されたTP閾値を超えることで獲得できる（1惑星につき最大☆3）",
      "- TP閾値は1フェーズで超えられなかった場合、次フェーズでその惑星の続きを戦うことで積み上げられる",
      "  （例: ☆1条件 1B TP、☆2条件 1.5B TPの惑星で P1に700M TPを稼いだ場合、P2に800M TP追加で☆2獲得）",
      "- TPを稼ぐ手段は以下の3つのみである:",
      "  1. 小隊配置（Platoon）: 1小隊を埋めると約10M TP。1小隊は15体のキャラで構成される",
      "  2. 戦闘ミッション（CM）クリア: 1ミッションにつき約250K TP",
      "  3. キャラ配置（Deploy）: 配置したキャラのGP値がそのままTP値になる",
      "- 「個人のGPを上げる」こと自体は目的ではない。GPはキャラ配置時のTP換算にしか使われない",
      "",
      "## スペシャルミッション（SM）について",
      "- SMクリアはTPには直接寄与しないが、Mk2/Mk3ギルドイベントトークンやRevaのかけら等の追加報酬を獲得できる",
      "- SMは特定キャラ・特定レリックレベルが必要な編成縛りがある",
      "- SMクリア報酬はギルドメンバー全員に配られる（1人がクリアするたびに全員が受け取る）",
      "",
      "## アドバイスの出し方",
      "- 育成候補キャラについて、以下の3軸でのギルド貢献度を評価し、総合的なおすすめ優先順位を示すこと:",
      "  1. 小隊配置: 何フェーズ・何か所の小隊に必要か（=TP貢献量）",
      "  2. 戦闘ミッション: どのミッションが解放・強化されるか（=TP貢献量）",
      "  3. SM: どのスペシャルミッション報酬が獲得できるようになるか",
      "- 各キャラについて3軸の貢献度を明示した上で、総合的なおすすめ度と優先順位を示すこと",
      "- 「GP向上」「GP上げ」「GPを増やす」などの表現は使わないこと",
    ],
    initialMessage:
      "私のキャラクター育成状況を踏まえて、RotE TBでのギルド報酬を向上させるための育成アドバイスをしてください。小隊配置・戦闘ミッション・スペシャルミッションの3軸でギルドへの貢献度を評価し、優先して育てるべきキャラクターとその理由を教えてください。",
  },
};

// -------------------------------------------------------
// ユーティリティ
// -------------------------------------------------------

/**
 * ユニット一覧をプロンプト用テキストに変換する
 */
function formatTopUnits(topUnits: FormattedUnit[]): string {
  if (topUnits.length === 0) {
    return "  （データなし）";
  }

  return topUnits
    .map((u, i) => {
      const status =
        u.gearLevel < 13
          ? `Gear${u.gearLevel} / ${u.stars}★`
          : `Relic${u.relicLevel} / ${u.stars}★`;
      return `  ${i + 1}. ${u.id}: ${status}`;
    })
    .join("\n");
}

/**
 * RotE TB スペシャルミッション要件達成状況テキストを生成する
 *
 * roteGameData.specialMissions を走査し、
 * 各SMについて「クリア可能か・何が足りないか」をプレイヤーデータと照合する。
 */
function formatRoteSmStatus(
  allUnitsMap: FormattedPlayer["units"],
  roteGameData: RoteGameData,
): string {
  const { specialMissions } = roteGameData;

  if (specialMissions.length === 0) {
    return "  （SMデータ未取得）";
  }

  const lines: string[] = [];

  for (const sm of specialMissions) {
    const phaseLabel = `P${sm.phase}`;
    const rewardSummary =
      sm.rewards.length > 0
        ? sm.rewards.map((r) => `${r.itemId} x${r.quantity}`).join(", ")
        : "追加報酬なし";

    // 必須キャラの充足チェック
    const missingUnits: string[] = [];
    const insufficientRelic: string[] = [];
    const okUnits: string[] = [];

    for (const unitId of sm.mandatoryUnitIds) {
      const unit = allUnitsMap.get(unitId);
      if (unit === undefined) {
        missingUnits.push(`${unitId}（未所持）`);
        continue;
      }
      if (unit.gearLevel < 13) {
        insufficientRelic.push(
          `${unitId}（Gear${unit.gearLevel} - Gear13未到達）`,
        );
        continue;
      }
      if (unit.relicLevel < sm.minimumRelicLevel) {
        const deficit = sm.minimumRelicLevel - unit.relicLevel;
        insufficientRelic.push(
          `${unitId}（R${unit.relicLevel} → R${sm.minimumRelicLevel} 必要、あと${deficit}不足）`,
        );
        continue;
      }
      okUnits.push(`${unitId}（R${unit.relicLevel} ✓）`);
    }

    // カテゴリ縛り（mandatoryUnitIds が空でカテゴリのみの場合）
    const categoryNote =
      sm.mandatoryUnitIds.length === 0 && sm.categoryIds.length > 0
        ? `カテゴリ縛り: [${sm.categoryIds.join(", ")}]`
        : "";

    const isReady =
      missingUnits.length === 0 && insufficientRelic.length === 0;
    const statusIcon = isReady ? "✅" : "❌";

    lines.push(
      `${statusIcon} [${phaseLabel}] ${sm.missionId}  最低R: R${sm.minimumRelicLevel}  編成: ${sm.maxUnitCount}体  報酬: ${rewardSummary}`,
    );
    if (categoryNote) lines.push(`     ${categoryNote}`);
    if (missingUnits.length > 0)
      lines.push(`     未所持: ${missingUnits.join(", ")}`);
    if (insufficientRelic.length > 0)
      lines.push(`     レリック不足: ${insufficientRelic.join(", ")}`);
    if (okUnits.length > 0)
      lines.push(`     達成済み必須: ${okUnits.join(", ")}`);
  }

  return lines.join("\n");
}

/**
 * RotE TB 小隊配置達成状況テキストを生成する
 *
 * getPlatoonPhases() から小隊データを取得し、
 * 各小隊について「何体充足しているか・何が足りないか」をプレイヤーデータと照合する。
 */
function formatRotePlatoonStatus(
  allUnitsMap: FormattedPlayer["units"],
): string {
  const phases = getPlatoonPhases();

  // プレースホルダーチェック: UNIT_ID_HERE が含まれていれば未入力と判定
  const hasPlaceholder = phases.some((phase) =>
    phase.zones.some((zone) =>
      zone.platoons.some((platoon) =>
        platoon.units.some((unit) => unit.id === "UNIT_ID_HERE")
      )
    )
  );

  if (phases.length === 0 || hasPlaceholder) {
    return "  （小隊データ未入力）";
  }

  const lines: string[] = [];

  for (const phase of phases) {
    lines.push(`### ${phase.name}`);

    for (const zone of phase.zones) {
      lines.push(`#### ${zone.zoneName}`);

      for (const platoon of zone.platoons) {
        let fulfilledCount = 0;
        const missingUnits: string[] = [];
        const insufficientRelic: string[] = [];

        for (const unit of platoon.units) {
          // requiredRelicLevel が 0 の場合は任意枠としてスキップ
          if (unit.requiredRelicLevel === 0) {
            fulfilledCount++;
            continue;
          }

          const playerUnit = allUnitsMap.get(unit.id);
          if (playerUnit === undefined) {
            missingUnits.push(`${unit.id}（未所持）`);
            continue;
          }
          if (playerUnit.gearLevel < 13) {
            insufficientRelic.push(
              `${unit.id}（Gear${playerUnit.gearLevel} - Gear13未到達）`
            );
            continue;
          }
          if (playerUnit.relicLevel < unit.requiredRelicLevel) {
            const deficit = unit.requiredRelicLevel - playerUnit.relicLevel;
            insufficientRelic.push(
              `${unit.id}（R${playerUnit.relicLevel} → R${unit.requiredRelicLevel} 必要、あと${deficit}不足）`
            );
            continue;
          }
          fulfilledCount++;
        }

        const totalCount = platoon.units.length;
        const statusIcon = fulfilledCount === totalCount ? "✅" : "⚠️";
        lines.push(
          `- ${statusIcon} ${platoon.platoonName}: ${fulfilledCount}/${totalCount}`
        );

        if (missingUnits.length > 0) {
          lines.push(`  未所持: ${missingUnits.join(", ")}`);
        }
        if (insufficientRelic.length > 0) {
          lines.push(`  レリック不足: ${insufficientRelic.join(", ")}`);
        }
      }
    }
  }

  return lines.join("\n");
}

/**
 * 選択されたモード・目的を「今回の目的」セクション用テキストに変換する
 */
function formatSelectionLabel(selection: ModeSelection): string {
  if (selection.mode === "rote") {
    return `Rise of the Empire TB / ${ROTE_PURPOSE_CONFIG[selection.purpose].label}`;
  }
  if (selection.mode === "tw") {
    return "テリトリーウォー（TW）";
  }
  return "グランドアリーナ（GAC）";
}

/**
 * 選択されたpurposeに応じたアドバイス方針ガイドラインを返す
 * rote 以外のモードでは空文字を返す
 */
function formatPurposeGuidelines(selection: ModeSelection): string {
  if (selection.mode !== "rote") return "";
  return ROTE_PURPOSE_CONFIG[selection.purpose].guidelines.join("\n") + "\n";
}

// -------------------------------------------------------
// システムプロンプト組み立て
// -------------------------------------------------------

/**
 * チャットセッション全体で使うシステムプロンプトを組み立てる
 *
 * セッション開始時に1回だけ呼ばれる。
 * プレイヤー情報・目的・Comlinkから取得したRotEデータを全て埋め込み、
 * 以降の会話の土台となる文脈を提供する。
 *
 * @param input - システムプロンプト生成に必要なデータ
 * @returns Claude APIに渡すシステムプロンプト文字列
 */
export function buildSystemPrompt(input: ChatSystemPromptInput): string {
  const {
    playerName,
    allyCode,
    level,
    guildName,
    galacticPower,
    characterGalacticPower,
    shipGalacticPower,
    topUnits,
    allUnitsMap,
    selection,
    userNote,
    roteGameData,
    guildAggregation,
  } = input;

  const topUnitsText = formatTopUnits(topUnits);
  const selectionLabel = formatSelectionLabel(selection);
  const purposeGuidelines = formatPurposeGuidelines(selection);

  const rotePlatoonStatusText =
    selection.mode === "rote" ? formatRotePlatoonStatus(allUnitsMap) : null;

  const roteSmStatusText =
    selection.mode === "rote" && roteGameData != null
      ? formatRoteSmStatus(allUnitsMap, roteGameData)
      : null;

  const smCount = roteGameData?.specialMissions.length ?? 0;

  const guildProfileText =
    guildAggregation != null ? formatGuildProfile(guildAggregation) : null;

  return `
あなたはStar Wars: Galaxy of Heroes（SWGoH）の育成アドバイザーです。
以下のプレイヤー情報を元に、具体的で実践的な育成アドバイスを提供してください。
プレイヤーとの対話形式で、質問には丁寧かつ簡潔に日本語で答えてください。

## プレイヤー情報

- プレイヤー名: ${playerName}
- アライコード: ${allyCode}
- プレイヤーレベル: ${level}
- ギルド: ${guildName || "（ギルド未加入）"}
- 総GP: ${galacticPower.toLocaleString("ja-JP")}（キャラ: ${characterGalacticPower.toLocaleString("ja-JP")} / 艦隊: ${shipGalacticPower.toLocaleString("ja-JP")}）

## 今回の目的

${selectionLabel}
${userNote ? `\n補足: ${userNote}` : ""}

## R5以上キャラクター一覧（レリック降順・全${topUnits.length}件）

${topUnitsText}

${
  rotePlatoonStatusText != null && !rotePlatoonStatusText.includes("未入力")
    ? `## RotE TB 小隊配置達成状況

${rotePlatoonStatusText}
`
    : ""
}${
  roteSmStatusText != null
    ? `## RotE TB スペシャルミッション要件達成状況（全${smCount}件）

${roteSmStatusText}
`
    : ""
}${
  guildProfileText != null
    ? `## ギルド全体の育成状況

${guildProfileText}
`
    : ""
}
## アドバイスの方針

${purposeGuidelines}
- 上記のキャラクター実データを必ず参照してアドバイスすること
- 「今のプレイヤーの状況」に基づいた具体的なキャラクター名を挙げること
- RotE TBデータが取得できていない場合でも、育成状況から推測してアドバイスすること
- 育成の優先順位を明確にすること（なぜそのキャラが優先かも説明する）
- 短期（次のTBまで）・中期（2〜3ヶ月）の目標を分けて考えること
- プレイヤーからの追加質問には、前の会話の文脈を踏まえて答えること
`.trim();
}

/**
 * チャットセッションの最初のユーザーメッセージ（初回アドバイス依頼）を返す
 *
 * @param selection - 選択されたモードと目的
 * @returns 最初のユーザーメッセージ文字列
 */
export function buildInitialUserMessage(selection: ModeSelection): string {
  if (selection.mode === "rote") {
    return ROTE_PURPOSE_CONFIG[selection.purpose].initialMessage;
  }
  if (selection.mode === "tw") {
    return "私のキャラクター育成状況を踏まえて、テリトリーウォー（TW）での貢献を最大化するための育成アドバイスをしてください。";
  }
  return "私のキャラクター育成状況を踏まえて、グランドアリーナ（GAC）での戦績を上げるための育成アドバイスをしてください。";
}

/**
 * RotE TB の全 purpose のラベルを返す
 * CLI・Discordの選択肢UI構築に使用する
 */
export const ROTE_PURPOSE_LABELS: Record<RotePurpose, string> = Object.fromEntries(
  Object.entries(ROTE_PURPOSE_CONFIG).map(([key, config]) => [key, config.label]),
) as Record<RotePurpose, string>;
