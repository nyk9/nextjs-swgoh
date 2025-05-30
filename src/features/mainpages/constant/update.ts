export type Updates = {
  ver: number;
  title: string;
  date: string;
  detail: string;
};

const updates: Updates[] = [
  // 最新の情報を一番上に持っていきたいので、配列の追加は上に記述する。
  {
    ver: 2.0,
    title: "TWカウンター板機能追加",
    date: "2024/07/03",
    detail: `不具合がまだあるが、カウンターを入力、表示する機能を追加`,
  },
  {
    ver: 1.3,
    title: "キャラ一覧完成",
    date: "2024/02/07",
    detail: `スキル効果での絞り込み検索のを実装
                レスポンシブデザインを適応(第一段)`,
  },
  {
    ver: 1.2,
    title: "キャラ一覧-実装",
    date: "2024/01/31",
    detail: "ボタンでの絞り込み検索を実装",
  },
  {
    ver: 1.1,
    title: "キャラ一覧-実装",
    date: "2024/01/24",
    detail: `全キャラ実装完了 アプデログ、今後の予定を追加  テキストでの絞り込み検索を実装`,
  },
  {
    ver: 1,
    title: "キャラ一覧-追加",
    date: "2024/01/18",
    detail: `サビーヌレンまで実装 その他一部UI改善
                テキストで名前, 属性の絞り込み検索実装`,
  },
];

export default updates;
