export type Updates = {
    ver: number;
    title: string;
    date: string;
    detaill: string;
}

const updates: Updates[] = [
    // 最新の情報を一番上に持っていきたいので、配列の追加は上に記述する。
    {   
        ver: 1,
        title: 'キャラ一覧(簡易)追加',
        date: '2024/01/18',
        detaill: `サビーヌレンまで実装 その他一部UI改善`
    }
];

export default updates;