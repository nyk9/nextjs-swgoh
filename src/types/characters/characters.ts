export type Characters = {
  name: string;
  character_base_id?: string;
  src: string;
  property: string | Property[];
  abbreviation: string;
  skill: Skills[];
  url: string;
};

export type Property =
  | "ダークサイド"
  | "ライトサイド"
  | "ニュートラル"
  | "タンク"
  | "サポート"
  | "アタッカー"
  | "ヒーラー"
  | "リーダー"
  | "イウォーク"
  | "インペリアル・レムナント"
  | "ウーキー"
  | "クローン・トルーパー"
  | "グンガン"
  | "ジェダイ"
  | "ジオノージアン"
  | "シス"
  | "シス帝国"
  | "タスケン"
  | "ドロイド"
  | "ナイトシスター"
  | "ならず者"
  | "ハット・カルテル"
  | "バッド・バッチ"
  | "ファースト・オーダー"
  | "フェニックス"
  | "マンダロリアン"
  | "レジスタンス"
  | "ローグ・ワン"
  | "艦隊司令官"
  | "旧共和国"
  | "銀河共和国"
  | "賞金稼ぎ"
  | "尋問官"
  | "第501軍団"
  | "帝国軍"
  | "帝国軍トルーパー"
  | "反乱軍"
  | "反乱軍ファイター"
  | "非同盟のフォースの使い手"
  | "分離主義者";

export type Skills =
  //
  | "HP均一化"
  | "HP割合ダメージ軽減"
  // ア行
  | "アーマー破壊"
  | "アーマー無効化"
  | "アーマー無視"
  | "アシスト"
  | "アシスト不可"
  | "アタル・フォーム"
  | "アドバンス"
  | "アドバンテージ"
  | "溢れる狂気"
  | "怒り"
  | "苛立ち"
  | "受け入れるか死か"
  | "運命を紡ぐ"
  | "英雄の覚醒"
  | "エクスポーズ"
  | "エクスポーズ無効化"
  | "炎上"
  | "オーバーヒート"
  | "オーバーチャージ"
  | "大型ユニット"
  | "恐れ知らず"
  | "恩恵"
  // カ行
  | "ガード"
  | "解除不可"
  | "回避不可"
  | "回避力上昇"
  | "回避力低下"
  | "回復"
  | "回復無効"
  | "回復無効無効化"
  | "解放"
  | "カウンター"
  | "カウンター率低下"
  | "カウンター不可"
  | "帰ってきたぞ"
  | "影の賜物"
  | "過小評価"
  | "活力源"
  | "カバー"
  | "感染"
  | "感染無効化"
  | "疑心"
  | "欺瞞"
  | "起爆トラップ"
  | "逆上"
  | "救済"
  | "強化解除"
  | "強化効果無効化"
  | "敵全体-強化解除"
  | "強化無効"
  | "強化無効無効化"
  | "狂気の刃"
  | "恐怖付与"
  | "恐怖無効化"
  | "強要"
  | "共和国の灰"
  | "切り返し"
  | "規律"
  | "疑惑"
  | "クールダウン減少付与"
  | "クールダウン減少無効化"
  | "クールダウン増加付与"
  | "クールダウン増加無効化"
  | "クールダウン操作無効化"
  | "クールダウン状態から開始"
  | "クールダウンリセット"
  | "苦悩"
  | "クリティカル回避力上昇"
  | "クリティカル耐性"
  | "クリティカルダメージ減少"
  | "クリティカルダメージ上昇"
  | "クリティカルダメージ低下"
  | "クリティカルヒット耐性"
  | "クリティカルヒット不可"
  | "クリティカルヒット無効"
  | "クリティカル率減少"
  | "クリティカル率上昇"
  | "クリティカル率低下"
  | "暗闇"
  | "軍略の天才"
  | "決意"
  | "減衰"
  | "攻撃無効"
  | "攻撃力低下"
  | "攻撃力上昇"
  | "強靭な防御"
  | "皇帝の罠"
  | "行動喚起"
  | "拷問"
  | "固定状態"
  | "固定ダメージ"
  | "好みの悪党"
  | "コピー不可"
  | "混乱状態"
  // サ行
  | "サーマル・デトネーター"
  | "サーマル・デトネーター無効化"
  | "最大HP減少"
  | "最大HP減少無効化"
  | "最大HP上昇"
  | "最大プロテクション減少"
  | "最大プロテクション上昇"
  | "最大プロテクション低下"
  | "サイフォン"
  | "残留プラズマ"
  | "シールド上昇"
  | "シールド発生装置"
  | "ジェダイ・ナイト"
  | "ジェダイの意志"
  | "ジェダイの訓戒"
  | "シエン・フォーム"
  | "ジオノージアン・ブルード"
  | "仕返し"
  | "時間経過回復"
  | "時間経過ダメージ"
  | "時間経過ダメージ無効化"
  | "時間経過プロテクション"
  | "自信過剰"
  | "侍女(おとり)"
  | "失敗不可避"
  | "邪悪な戦闘瞑想"
  | "弱体解除"
  | "味方全体-弱体解除"
  | "弱体化効果無効化"
  | "射撃訓練"
  | "シャッターポイント"
  | "終結"
  | "集団意識"
  | "粛清"
  | "祝福"
  | "熟練兵"
  | "準備万端"
  | "招集"
  | "賞金稼ぎの決意"
  | "勝利戦術"
  | "女王の保護"
  | "触発"
  | "ショック"
  | "指令"
  | "信頼できるエージェント"
  | "衰退"
  | "戦術的優位性"
  | "戦略的アドバンテージ"
  | "スキルブロック解除"
  | "スキルブロック付与"
  | "スキルブロック無効化"
  | "スタック可能"
  | "スタン解除"
  | "スタン付与"
  | "スタン無効化"
  | "スタンス - クロスガード"
  | "スタンス - ダブルブレード"
  | "スタンス - デュアルブレード"
  | "ステルス"
  | "ステルス解除"
  | "ステルス無効化"
  | "スピード0"
  | "スピード減少"
  | "スピード上昇"
  | "スピード制限無効化"
  | "スピード低下"
  | "脆弱"
  | "精度低下"
  | "精度上昇"
  | "セカンドウィンド"
  | "戦意喪失"
  | "先祖の決意"
  | "全体攻撃"
  | "憎悪"
  | "即戦闘不能"
  | "即戦闘不能耐性"
  | "即戦闘不能無効"
  | "戦闘不能不可"
  | "潜伏"
  | "阻止不可"
  // タ行
  | "ダーク・インフュージョン"
  | "ダーク・トルーパー部隊"
  | "ターゲットロック"
  | "ターゲットロック無効化"
  | "ターン外攻撃不可"
  | "ターンメーター入れ替え"
  | "ターンメーター減少付与"
  | "ターンメーター減少無効化"
  | "ターンメーター上昇付与"
  | "ターンメーター上昇無効化"
  | "ターンメーター上昇不可"
  | "ターンメーター操作無効化"
  | "耐性発揮"
  | "耐性発揮不可"
  | "大ダメージ"
  | "大ダメージ軽減"
  | "ダメージ上昇"
  | "ダメージ耐性"
  | "ダメージ無効"
  | "チーワプ社製医療パック"
  | "知略"
  | "チャージ"
  | "挑発解除"
  | "挑発付与"
  | "挑発無効化"
  | "挑発無視"
  | "通訳"
  | "抵抗力低下"
  | "抵抗力上昇"
  | "帝国の罠"
  | "デスマーク"
  | "伝説の戦闘瞑想"
  | "デッドリーブラフ"
  | "洞察"
  | "逃走"
  | "獰猛"
  | "ドロイド大隊"
  // ハ行
  | "バーギルの群れ"
  | "バクトイド社製シールド発生器"
  | "破砕"
  | "破損"
  | "パダワンの訓戒"
  | "破滅"
  | "反乱の口火"
  | "ヒート"
  | "人質"
  | "標的"
  | "不意打ち"
  | "フォアサイト"
  | "フォアサイト解除"
  | "フォースエネルギー"
  | "フォースの繋がり"
  | "フォースの酔い"
  | "不屈"
  | "武装解除"
  | "復活"
  | "復活不可"
  | "ブラステック社製ウェポンモッド"
  | "プラズマシールド"
  | "フレンジー"
  | "プロテクション失う"
  | "プロテクション均一化"
  | "プロテクション減少"
  | "プロテクション上昇"
  | "プロテクション破壊付与"
  | "プロテクション破壊無効化"
  | "プロテクション無効化"
  | "プロテクション無視"
  | "ペイン"
  | "ベスカー・アーマー"
  | "ベスカー・インゴット"
  | "ヘルススティール上昇"
  | "ボーナス攻撃"
  | "ボーナス攻撃不可"
  | "ボーナスターン"
  | "ボーナスターンメーター不可"
  | "ボーナスダメージ"
  | "ボーナスプロテクション"
  | "ホイッスリング・バード"
  | "防御突破力上昇"
  | "防御力低下"
  | "防御力減少"
  | "防御力上昇"
  | "防御力無効化"
  | "報復"
  | "報復効果"
  // マ行
  | "マーク状態"
  | "マカシ・フォーム"
  | "マジックステルス"
  | "マスター上昇"
  | "マスターの訓練"
  | "待ち伏せ"
  | "マンダロア"
  | "身代金"
  | "向こう見ず"
  | "無慈悲"
  | "無慈悲な標的"
  | "無防備"
  | "メカニックの知識"
  | "めまい付与"
  | "めまい無効化"
  | "モメンタム"
  // ヤ行
  | "雇われ兵"
  | "優位"
  | "勇気"
  | "有効性上昇"
  | "有効性低下"
  | "誘発"
  | "有用なコマ"
  | "有利"
  | "用心棒"
  | "予備プラン"
  | "よろめき"
  // ラ行
  | "リーダー：HP上昇"
  | "リーダー：アシスト"
  | "リーダー：回避力上昇"
  | "リーダー：回避力低下"
  | "リーダー：回復"
  | "リーダー：カウンター率上昇"
  | "リーダー：クリティカル回避力低下"
  | "リーダー：クリティカル回避力上昇"
  | "リーダー：クリティカルダメージ上昇"
  | "リーダー：クリティカルヒット無効"
  | "リーダー：クリティカル率上昇"
  | "リーダー：攻撃力上昇"
  | "リーダー：最大HP上昇"
  | "リーダー：最大プロテクション上昇"
  | "リーダー：スピード減少"
  | "リーダー：スピード上昇"
  | "リーダー：スピード低下"
  | "リーダー：抵抗力減少"
  | "リーダー：抵抗力上昇"
  | "リーダー：フォアサイト"
  | "リーダー：プロテクション上昇"
  | "リーダー：ヘルススティール上昇"
  | "リーダー：防御力低下"
  | "リーダー：防御力上昇"
  | "リーダー：マスター上昇"
  | "リーダー：有効性上昇"
  | "リーダー：有効性低下"
  | "リチャージ"
  | "流浪"
  | "連帯"
  | "ロイヤルハンド";
