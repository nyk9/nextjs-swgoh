import { Updates } from "./update";

const schedules: Updates[] = [
  {
    ver: 1,
    title: "キャラ一覧の完成",
    date: "2024/1/24",
    detail: "全キャラクターの情報を載せる",
  },
  {
    ver: 2,
    title: "絞り込み検索実装(text)",
    date: "2024/2/14",
    detail: "キャラ一覧でテキストでの絞り込み検索を実装する",
  },
  {
    ver: 3,
    title: "2024/2/28",
    date: "絞り込み検索の調整",
    detail: "キャラ一覧で属性・スキル効果、略語での絞り込み検索を実装する",
  },
  {
    ver: 4,
    title: "tailwind cssを含む UI部分を完璧に仕上げる",
    date: "2024/3/6",
    detail:
      "見た目の調整などを行って、使いやすい 使ってよかったと思ってもらえるようなものに仕上げます",
  },
  {
    ver: 5,
    title: "キャラ詳細ページ実装",
    date: "2024/3/27",
    detail: "全キャラの詳細ページを実装します。",
  },
];

export default schedules;
