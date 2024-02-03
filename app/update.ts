export type Updates = {
    ver: number;
    title: string;
    date: string;
    detaill: string;
}

const updates: Updates[] = [
    // 最新の情報を一番上に持っていきたいので、配列の追加は上に記述する。
    {
        ver: 1.2,
        title: "キャラ一覧-実装",
        date: "2024/01/31",
        detaill: "ボタンでの絞り込み検索を実装"
    },{
        ver: 1.1,
        title: "キャラ一覧-実装",
        date: "2024/01/24",
        detaill: `全キャラ実装完了 アプデログ、今後の予定を追加  テキストでの絞り込み検索を実装`
    },{   
        ver: 1,
        title: 'キャラ一覧-追加',
        date: '2024/01/18',
        detaill: `サビーヌレンまで実装 その他一部UI改善
                  テキストで名前, 属性の絞り込み検索実装`
    }
];

export default updates;