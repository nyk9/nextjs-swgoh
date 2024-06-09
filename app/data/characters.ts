import { Characters } from "@/types/characters/characters";

const characters: Characters[] = [
    {
        name: "0-0-0",
        character_base_id: "TRIPLEZERO",
        property: "ダークサイド、サポート、ドロイド、ならず者",
        src: '/charui/tex.charui_triplezero.png',
        abbreviation: "卵  タマゴ  000  triple-zero triple zero Triple Zero",
        skill: `全体攻撃  カウンター  解除  ターンメーター上昇  攻撃力上昇  クールダウン減少  ショック  スタン付与  ターゲットロック  拷問`,
        url: '/characters/0-0-0'
    }, {
        name: "50R-T",
        character_base_id: "50RT",
        property: "ライトサイド、サポート、リーダー、ドロイド、旧共和国",
        src: '/charui/tex.charui_50rt.png',
        abbreviation: "shorty Shorty 50RT Sortie",
        skill: `アドバンテージ  全体攻撃  カウンター  ダメージ無効  防御力減少  防御力上昇  強化解除  弱体解除  フォアサイト  ターンメーター上昇  ヘルススティール上昇  即戦闘不能耐性  リーダー：クリティカル率上昇  リーダー：防御力上昇  リーダー：最大HP上昇  リーダー：スピード上昇  リーダー：フォアサイト  リーダー：プロテクション上昇  攻撃力上昇  プロテクション上昇  ターンメーター減少付与 蘇生  スピード低下  スピード上昇  ステルス  ターゲットロック  抵抗力上昇 `,
        url: '/characters/50R-T'
    }, {
        name: "ARCトルーパー",
        character_base_id: "ARCTROOPER501ST",
        property: "ライトサイド、アタッカー、第501軍団、クローン・トルーパー、銀河共和国",
        src: '/charui/tex.charui_trooperclone_arc.png',
        abbreviation: "ARC アーク",
        skill: `アシスト  カウンター  招集  指令  回避不可  強化解除  固定ダメージ  `,
        url: '/characters/ARC-Trooper'
    }, {
        name: "B1バトル・ドロイド",
        character_base_id: "B1BATTLEDROIDV2",
        property: "ダークサイド、アタッカー、ドロイド、分離主義者",
        src: '/charui/tex.charui_b1.png',
        abbreviation: "b1 ",
        skill: `全体攻撃  アシスト  弱体解除 ターゲットロック  ターンメーター上昇 回復  ドロイド大隊  時間経過ダメージ無効化  `,
        url: '/characters/B1-Battle-Droid'
    }, {
        name: "B2スーパー・バトル・ドロイド",
        character_base_id: "B2SUPERBATTLEDROID",
        property: "ダークサイド、タンク、ドロイド、分離主義者",
        src: '/charui/tex.charui_b2.png',
        abbreviation: "b2 ",
        skill: `全体攻撃  強化無効  強化解除  クリティカルダメージ低下  敵全体-強化解除  ターンメーター上昇  クールダウン減少  ターゲットロック `,
        url: '/characters/B2-Super-Battle-Droid'
    }, {
        name: "BB-8",
        character_base_id: "BB8",
        property: "ライトサイド、サポート、ドロイド、レジスタンス",
        src: '/charui/tex.charui_bb8.png',
        abbreviation: "bb-8 bb8",
        skill: `アドバンテージ  アシスト  カウンター  クリティカル率上昇  クリティカルダメージ上昇  めまい付与  弱体解除  味方全体-弱体解除  エクスポーズ  フォアサイト  ターンメーター上昇  攻撃力上昇  スピード上昇  挑発付与  抵抗力低下 `,
        url: '/characters/BB-8'
    }, {
        name: "BT-1",
        character_base_id: "BT1",
        property: "ダークサイド、アタッカー、ドロイド、ならず者",
        src: '/charui/tex.charui_bt1.png',
        abbreviation: "BT1 bt-1",
        skill: `全体攻撃  アシスト  炎上  時間経過ダメージ  エクスポーズ  ターンメーター上昇  ターゲットロック  クールダウンリセット  ボーナスターン  `,
        url: '/characters/BT-1'
    }, {
        name: "C-3PO",
        character_base_id: "C3POLEGENDARY",
        property: "ライトサイド、サポート、ドロイド、銀河共和国、反乱軍、レジスタンス",
        src: '/charui/tex.charui_c3p0.png',
        abbreviation: "3PO c3po",
        skill: `アシスト  カウンター不可  防御力低下  エクスポーズ  ターンメーター上昇  ステルス  攻撃力低下  有効性上昇  プロテクション上昇  クールダウン減少 クールダウンリセット  通訳  逃走  混乱状態  カウンター不可  ボーナスターンメーター不可  クールダウン増加  耐性発揮不可  `,
        url: '/characters/C-3PO'
    }, {
        name: "C-3PO&チューイ",
        character_base_id: "C3POCHEWBACCA",
        property: "ライトサイド、サポート、リーダー、ドロイド、旧共和国",
        src: '/charui/tex.charui_chewbacca_c3po.png',
        abbreviation: "3Bacca 3bacca Chewpio 3バカ ３バカ 3バッカ チューピオ",
        skill: `アドバンテージ  全体攻撃  アシスト  暗闇  カウンター  強化解除  敵全体-強化解除  弱体解除  回避力低下  復活  `,
        url: '/characters/Threepio-Chewie'
    }, {
        name: `CC-2224 "コーディ"`,
        character_base_id: "CC2224",
        property: "ライトサイド、アタッカー、リーダー、クローン・トルーパー、銀河共和国",
        src: '/charui/tex.charui_trooperclone_cody.png',
        abbreviation: "Cody cody",
        skill: `アシスト  ターンメーター上昇  リーダー：クリティカル率上昇  リーダー：防御力上昇  回復  クールダウン減少  スタン付与 `,
        url: '/characters/CC-2224-Cody'
    }, {
        name: `CT-21-0408 "エコー"`,
        character_base_id: "CT210408",
        property: "ライトサイド、サポート、第501軍団、クローン・トルーパー、銀河共和国",
        src: '/charui/tex.charui_trooperclone_echo.png',
        abbreviation: "Echo echo",
        skill: `全体攻撃  アシスト  ターンメーター上昇  スタン付与  強化解除  敵全体-強化解除 `,
        url: '/characters/CT-21-0408-Echo'
    }, {
        name: `CT-5555 "ファイブス"`,
        character_base_id: "CT5555",
        property: "ライトサイド、タンク、リーダー、第501軍団、クローン・トルーパー、銀河共和国",
        src: '/charui/tex.charui_trooperclone_fives.png',
        abbreviation: "Fives fives 5s",
        skill: `アシスト  カウンター  ターンメーター上昇  リーダー：防御力上昇  スピード低下  挑発 `,
        url: '/characters/CT-5555-Fives'
    }, {
        name: `CT-7567 "レックス"`,
        character_base_id: "CT7567",
        property: "ライトサイド、サポート、リーダー、第501軍団、クローン・トルーパー、銀河共和国",
        src: '/charui/tex.charui_trooperclone_rex.png',
        abbreviation: "Rex rex",
        skill: `クリティカルヒット耐性  弱体解除  味方全体-弱体解除  クールダウン減少  ターンメーター上昇  ターンメーター減少付与 リーダー：最大HP上昇  有効性上昇  抵抗力上昇 クールダウン状態から開始  `,
        url: '/characters/CT-7567-Rex'
    }, {
        name: "HK-47",
        character_base_id: "HK47",
        property: "ダークサイド、アタッカー、リーダー、ドロイド、シス帝国",
        src: '/charui/tex.charui_hk47.png',
        abbreviation: "hk47 HK47 hk-47",
        skill: `全体攻撃  カウンター不可  強化解除  クールダウン減少  クールダウンリセット  回避不可  攻撃力上昇  抵抗力低下  固定ダメージ  クールダウン状態から開始  リーダー:クリティカル率上昇  リーダー:クリティカルダメージ上昇  ターンメーター上昇  `,
        url: '/characters/HK-47'
    }, {
        name: "IG-100マグナガード",
        character_base_id: "MAGNAGUARD",
        property: "ダークサイド、タンク、ドロイド、分離主義者",
        src: '/charui/tex.charui_magnaguard.png',
        abbreviation: "magunaguard Magunaguard",
        skill: `全体攻撃  カウンター  弱体解除  スピード上昇  味方全体-弱体解除  強化解除  クールダウンリセット  ターゲットロック  スタン  挑発  ステルス  ボーナスターン  `,
        url: '/characters/IG-100-MagnaGuard'
    }, {
        name: "IG-11",
        character_base_id: "IG11",
        property: "ライトサイド、ヒーラー、ドロイド、ならず者",
        src: '/charui/tex.charui_ig11_nurse.png',
        abbreviation: "IG11 ig11",
        skill: `全体攻撃  抵抗力低下  挑発付与  回復  ヘルススティール上昇  報復効果  フォアサイト  弱体解除  アシスト  時間経過ダメージ  挑発  `,
        url: '/characters/IG-11'
    }, {
        name: "IG-12 & グローグー",
        character_base_id: "IG12",
        property: "ライトサイド、ヒーラー、マンダロリアン",
        src: '/charui/tex.charui_ig12.png',
        abbreviation: "IG12 ig-12 Grogu grogu",
        skill: `回復無効  スキルブロック付与  アシスト  回復  暗闇  めまい付与  強化解除  敵全体-強化解除  スタン付与  カウンター  クールダウン減少  クールダウンリセット  攻撃力上昇  プロテクション上昇  回避不可  耐性発揮不可  アシスト  防御力上昇  `,
        url: '/characters/IG-12-Grogu'
    }, {
        name: "IG-86歩哨ドロイド",
        character_base_id: "IG86SENTINELDROID",
        property: "ダークサイド、アタッカー、ドロイド",
        src: '/charui/tex.charui_ig86.png',
        abbreviation: "IG86 ig-86 ig86 Sentinel Droid sentinel droid",
        skill: `アシスト  `,
        url: '/characters/IG-86-Sntinel-Droid'
    }, {
        name: "IG-88",
        character_base_id: "IG88",
        property: "ダークサイド、アタッカー、リーダー、賞金稼ぎ、ドロイド、ならず者",
        src: '/charui/tex.charui_ig88.png',
        abbreviation: "IG88 ig-88 ig88",
        skill: `回復無効  ターゲットロック  スキルブロック付与  防御力低下  全体攻撃
            リーダー：クリティカル率上昇  時間経過ダメージ  `,
        url: '/characters/IG-88'
    }, {
        name: "K-2SO",
        character_base_id: "K2SO",
        property: "ライトサイド、タンク、ドロイド、反乱軍、反乱軍ファイター、ローグ・ワン",
        src: '/charui/tex.charui_k2so.png',
        abbreviation: "K2SO k2so k-2so ",
        skill: `攻撃力低下  アシスト  めまい付与  挑発付与 アシスト カウンター `,
        url: '/characters/K-2SO'
    }, {
        name: "L3-37",
        character_base_id: "L3_37",
        property: "ライトサイド、タンク、ならず者、ドロイド、スマグラー",
        src: '/charui/tex.charui_l337.png',
        abbreviation: "L337 l3-37 l337",
        skill: `防御力低下  準備万端  挑発付与 ターンメーター上昇  弱体解除  カウンター  クールダウン減少  抵抗力上昇  `,
        url: '/characters/L3-37'
    }, {
        name: "R2-D2",
        character_base_id: "R2D2_LEGENDARY",
        property: "ライトサイド、サポート、ドロイド・、銀河共和国、反乱軍、レジスタンス",
        src: '/charui/tex.charui_astromech_r2d2.png',
        abbreviation: "R2D2 r2d2 d2-d2",
        skill: `スタン付与  炎上  フォアサイト  アドバンテージ  ターンメーター上昇  弱体解除  回避不可  ステルス  全体攻撃 `,
        url: '/characters/R2-D2'
    }, {
        name: "STAP",
        character_base_id: "STAP",
        property: "ダークサイト、アタッカー、ドロイド、分離主義者",
        src: '/charui/tex.charui_stap.png',
        abbreviation: "stap STAP細胞はあります",
        skill: `ターゲットロック  固定状態  コピー不可  解除不可  阻止不可  回避不可  全体攻撃  誘発  アシスト  オーバーチャージ  ターンメーター減少付与  ボーナスターン  回復  ボーナスダメージ  `,
        url: '/characters/STAP'
    }, {
        name: "T3-M4",
        character_base_id: "T3_M4",
        property: "ライトサイド、サポート、ドロイド、旧共和国",
        src: '/charui/tex.charui_t3m4.png',
        abbreviation: "T3M4 t3-m4 t3m4",
        skill: `スキルブロック付与 弱体解除  回復  クリティカルヒット耐性  攻撃力上昇  強化解除  敵全体-強化解除  クリティカル率低下  攻撃力低下  ターンメーター減少付与 ターゲットロック 耐性発揮不可  `,
        url: '/characters/T3-M4'
    }, {
        name: "TIEファイター・パイロット",
        character_base_id: "TIEFIGHTERPILOT",
        property: "ダークサイド、アタッカー、帝国軍",
        src: '/charui/tex.charui_tiepilot.png',
        abbreviation: "タイファイターパイロット tie TIE Fighter Pilot",
        skill: `抵抗力低下  強化無効  スキルブロック付与 フォアサイト `,
        url: '/characters/TIE-Fighter-Pilot'
    }, {
        name: "アーマラー",
        character_base_id: "ARMORER",
        property: "ライトサイド、サポート、リーダー、マンダロリアン",
        src: '/charui/tex.charui_armorer.png',
        abbreviation: "Armorer armorer",
        skill: `ベスカー・インゴット  ベスカー・アーマー  アシスト  プロテクション上昇
            クリティカルヒット耐性  `,
        url: '/characters/THE-Armorer'
    }, {
        name: "アイデン・ヴェルシオ",
        character_base_id: "IDENVERSIOEMPIRE",
        property: "ダークサイド、アタッカー、リーダー、帝国軍、帝国軍トルーパー",
        src: '/charui/tex.charui_idenversioempire.png',
        abbreviation: "Iden iden Versio versio アイポン",
        skill: `回復  無防備  強化解除  回復無効  スタン付与  アシスト  弱体解除  敵全体-弱体解除  プロテクション上昇  受け入れるか死か  リーダー：クリティカル率上昇  リーダー：攻撃力上昇  リーダー：スピード上昇  カウンター  ターンメーター上昇  復活  `,
        url: '/characters/Iden-Versio'
    }, {
        name: "アイマ＝ガン・ダイ",
        character_base_id: "IMAGUNDI",
        property: "ライトサイド、サポート、リーダー、銀河共和国、ジェダイ",
        src: '/charui/tex.charui_imagundi.png',
        abbreviation: "アイマガンダイ Ima-Gun Di ",
        skill: `防御力低下  防御力上昇  リーダー:カウンター率上昇  回復 `,
        url: '/characters/Ima-Gun-Di'
    }, {
        name: "アイラ・セキュラ",
        character_base_id: "AAYLASECURA",
        property: "ライトサイド、サポート、リーダー、銀河共和国、ジェダイ",
        src: '/charui/tex.charui_aaylasecura.png',
        abbreviation: "Aayla Secura aayla secura",
        skill: `アシスト  回復  カウンター  スタン付与 `,
        url: '/characters/Aayla-Secura'
    }, {
        name: "ア゛ウァア゛ゥア゛ウウ",
        character_base_id: "URORRURRR",
        property: "ダークサイド・サポート・リーダー・タスケン",
        src: '/charui/tex.charui_urorrurrr.png',
        abbreviation: "URoRRuR'R'R urorrurrr アウァアゥアウウ あうぁあぅあうう ",
        skill: `スタン付与  スピード上昇  ターンメーター上昇  攻撃力上昇 `,
        url: '/characters/URoRRuRRR'
    }, {
        name: "アグノート",
        character_base_id: "UGNAUGHT",
        property: "ライトサイド、サポート",
        src: '/charui/tex.charui_ugnaught.png',
        abbreviation: "Ugnaught ugnaught",
        skill: `防御力低下  スタン付与  ターンメーター上昇 `,
        url: '/characters/Ugnaught'
    }, {
        name: "アクバー提督",
        character_base_id: "ADMIRALACKBAR",
        property: "ライトサイド、サポート、リーダー、反乱軍、艦隊司令官",
        src: '/charui/tex.charui_ackbaradmiral.png',
        abbreviation: "Admiral Ackbar admiral ackbar AA ギアル・アクバー It's a trap",
        skill: `ターンメーター上昇  弱体解除  味方全体-弱体解除  回復  軍略の天才  リーダー：スピード上昇  リーダー：抵抗力上昇  アシスト  クールダウン減少 `,
        url: '/characters/Admiral-Ackbar'
    }, {
        name: "アサージ・ヴェントレス",
        character_base_id: "ASAJVENTRESS",
        property: "ダークサイド、サポート、リーダー、ナイトシスター、分離主義者、非同盟のフォースの使い手",
        src: '/charui/tex.charui_ventress.png',
        abbreviation: "Asajj Ventress asajj ventress AV ",
        skill: `スタン付与  回復  強化解除  敵全体-強化解除  ターンメーター減少付与 クールダウンリセット  防御力低下  リーダー：スピード上昇  リーダー：攻撃力上昇  ターンメーター上昇  最大HP上昇 `,
        url: '/characters/Asajj-Ventress'
    }, {
        name: "アソーカ・タノ",
        character_base_id: "AHSOKATANO",
        property: "ライトサイド、アタッカー、リーダー、第501軍団、銀河共和国、ジェダイ",
        src: '/charui/tex.charui_ahsoka.png',
        abbreviation: "Ahsoka Tano ahsoka tano Snips",
        skill: `強化解除  弱体解除  回避不可  回復  プロテクション上昇  リーダー：回避力上昇  クリティカルヒット耐性  アシスト `,
        url: '/characters/Ahsoka-Tano'
    }, {
        name: "アソーカ・タノ(コマンダー)",
        character_base_id: "COMMANDERAHSOKA",
        property: "ライトサイド、アタッカー、銀河共和国、ならず者、非同盟のフォースの使い手",
        src: '/charui/tex.charui_commanderahsokatano.png',
        abbreviation: "CAT Commander Ahsoka Tano ahsoka tano ",
        skill: `アドバンテージ  回避力上昇  ターンメーター入れ替え  シエン・フォーム  即戦闘不能  クールダウン減少  アーマー破壊  アシスト  クールダウン状態から開始 コピー不可  解除不可  阻止不可  ターンメーター上昇  回避不可`,
        url: '/characters/Commander-Ahsoka-Tano'
    }, {
        name: "アソーカ・タノ(フルクラム)",
        character_base_id: "FULCRUMAHSOKA",
        property: "ライトサイド、アタッカー、反乱軍、非同盟のフォースの使い手",
        src: '/charui/tex.charui_ahsokaadult.png',
        abbreviation: "ATF Ahsoka Tano Fulcrum ahsoka tano fulcrum atf",
        skill: `プロテクション上昇  フォアサイト  報復効果  強化解除  弱体解除  回復  復活不可  挑発無視  ターンメーター上昇  回避不可  `,
        url: '/characters/Ahsoka-Tano-Fulcrum'
    }, {
        name: "アミダラ女王",
        character_base_id: "QUEENAMIDALA",
        property: "ライトサイド、サポート、リーダー、銀河共和国",
        src: '/charui/tex.charui_queenamidala.png',
        abbreviation: 'Queen Amidala',
        skill: `エクスポーズ  回避不可  時間経過回復  時間経過プロテクション  全体攻撃  精度上昇  よろめき  耐性発揮不可  防御突破力上昇  プロテクション無効化  クリティカルダメージ上昇  時間経過ダメージ  スピード低下  無防備  クールダウン増加  味方全体-弱体解除  アシスト  回復  ターンメーター減少  召集  侍女(おとり)  防御力上昇  抵抗力上昇  スピード上昇  ステルス  リーダー:防御力上昇  リーダー:最大HP上昇  リーダー:最大プロテクション上昇  攻撃力上昇  プロテクション上昇  クールダウン操作無効化  挑発付与  強化効果無効化  弱体化効果無効化  疑心  ボーナスターン  ダメージ体制  コピー不可  解除不可  阻止不可  女王の保護  恐怖無効化  回復無効無効化  有効性低下  抵抗力低下  アドバンテージ  `,
        url: '/characters/Queen-Amidala'
    }, {
        name: "アミリン・ホルド",
        character_base_id: "AMILYNHOLDO",
        property: "ライトサイド、タンク、レジスタンス、艦隊司令官",
        src: '/charui/tex.charui_holdo.png',
        abbreviation: "Amilyn Holdo amilyn holdo 中将",
        skill: `フォアサイト  回復  めまい付与  防御力低下  回避力低下  弱体解除  挑発  `,
        url: '/characters/Amilyn-Holdo'
    }, {
        name: "イース・コス",
        character_base_id: "EETHKOTH",
        property: "ライトサイド、サポート、リーダー、銀河共和国、ジェダイ",
        src: '/charui/tex.charui_eethkoth.png',
        abbreviation: "Eeth Koth eeth koth",
        skill: `防御力低下  スタン付与  スキルブロック付与 リーダー：防御力上昇  `,
        url: '/characters/Eeth-Koth'
    }, {
        name: "イウォーク・エルダー",
        character_base_id: "EWOKELDER",
        property: "ライトサイド、ヒーラー、イウォーク",
        src: '/charui/tex.charui_ewok_chief.png',
        abbreviation: "Ewok Elder ewok elder",
        skill: `ターンメーター上昇  回復  復活   アシスト  クールダウン減少 `,
        url: '/characters/Ewoke-Elder'
    }, {
        name: "イウォーク・スカウト",
        character_base_id: "EWOKSCOUT",
        property: "ライトサイド、アタッカー、イウォーク",
        src: '/charui/tex.charui_ewok_scout.png',
        abbreviation: "Ewok Scout ewok scout",
        skill: `ターンメーター減少付与 アシスト  ターンメーター上昇 `,
        url: '/characters/Ewoke-Scout'
    }, {
        name: "インペリアル・スーパー・コマンドー",
        character_base_id: "IMPERIALSUPERCOMMANDO",
        property: "ダークサイド、アタッカー、帝国軍、マンダロリアン",
        src: '/charui/tex.charui_imperial_super_commando.png',
        abbreviation: "Imperial Super Commando imperial super commando",
        skill: `攻撃力低下  強化無効  強化解除  カウンター  固定ダメージ  回復  攻撃力上昇  ダメージ耐性 `,
        url: '/characters/Imperial-Super-Commando'
    }, {
        name: "ヴァンドア・チューバッカ",
        character_base_id: "YOUNGCHEWBACCA",
        property: "ライトサイド、タンク、ならず者、スマグラー、ウーキー",
        src: '/charui/tex.charui_chewbacca_vandor.png',
        abbreviation: "Vandor Chewbacca ",
        skill: `アドバンテージ  プロテクション上昇  準備万端  クールダウン減少  プロテクション上昇  カウンター  復活  防御力無効化  回復  `,
        url: '/characters/Vandor-Chewbacca'
    }, {
        name: "ヴィアーズ将軍",
        character_base_id: "VEERS",
        property: "ダークサイド、サポート、リーダー、帝国軍、帝国軍トルーパー",
        src: '/charui/tex.charui_veers.png',
        abbreviation: "General Veers general veers",
        skill: `スピード上昇  アシスト  スキルブロック付与 リーダー：スピード上昇  攻撃力上昇  ターンメーター上昇  クリティカル率上昇 `,
        url: '/characters/General-Veers'
    }, {
        name: "ウィケット",
        character_base_id: "WICKET",
        property: "ライトサイド、アタッカー、イウォーク",
        src: '/charui/tex.charui_ewok_wicket.png',
        abbreviation: "Wicket wicket",
        skill: `クリティカル率上昇  アシスト  ターンメーター上昇  ステルス  クリティカルダメージ上昇  回復 `,
        url: '/characters/Wicket'
    }, {
        name: "ヴィサス・マー",
        character_base_id: "VISASMARR",
        property: "ライトサイド、ヒーラー、非同盟のフォースの使い手",
        src: '/charui/tex.charui_visas.png',
        abbreviation: "Visas marr visas marr ",
        skill: `弱体解除  回復  クールダウン減少  ヘルススティール上昇  復活  防御突破力上昇  カウンター  アシスト `,
        url: '/characters/Visas-Marr'
    }, {
        name: "ウェッジ・アンティリーズ",
        character_base_id: "WEDGEANTILLES",
        property: "ライトサイド、アタッカー、リーダー、反乱軍、反乱軍ファイター",
        src: '/charui/tex.charui_rebelpilot_wedge.png',
        abbreviation: "Wedge Antilles wedge antilles",
        skill: `防御力低下  全体攻撃  リーダー：攻撃力上昇  回復  スピード上昇 `,
        url: '/characters/Wedge-Antilles'
    }, {
        name: "エイス・ブラザー",
        character_base_id: "EIGHTHBROTHER",
        property: "ダークサイド、アタッカー、リーダー、帝国軍、尋問官、非同盟のフォースの使い手",
        src: '/charui/tex.charui_eighthbrother.png',
        abbreviation: "8B 8b Eighth Brother eighth brother",
        skill: `ステルス  粛清  精度低下  炎上  暗闇  無防備  回復  精度上昇  有効性上昇  ターンメーター上昇 `,
        url: '/characters/Eight-Brother'
    }, {
        name: "エコー",
        character_base_id: "BADBATCHECHO",
        property: "ライトサイド、サポート、バッド・バッチ、クローン・トルーパー、銀河共和国",
        src: '/charui/tex.charui_bb_echo.png',
        abbreviation: "Echo echo Bad Batch BB",
        skill: `防御力上昇  回避力上昇  エクスポーズ  アシスト  強化無効  クールダウン増加付与  強化解除  敵全体-強化解除  めまい付与  回復無効  ターンメーター上昇  攻撃力上昇  回復 `,
        url: '/characters/Echo'
    }, {
        name: "エズラ・ブリッジャー",
        character_base_id: "EZRABRIDGERS3",
        property: "ライトサイド、アタッカー、ジェダイ、フェニックス、反乱軍",
        src: '/charui/tex.charui_ezra_s3.png',
        abbreviation: "Ezra Bridger ezra bridger",
        skill: `強化解除  クールダウン減少  ターンメーター上昇  防御力上昇  プロテクション上昇  攻撃力上昇 アシスト `,
        url: '/characters/Ezra-Bridger'
    }, {
        name: "エンフィス・ネスト",
        character_base_id: "ENFYSNEST",
        property: "ライトサイド、アタッカー、ならず者、スマグラー",
        src: '/charui/tex.charui_enfys.png',
        abbreviation: "Enfys Nest enfys nest",
        skill: `エクスポーズ  強化解除  回避不可  スタン付与  強化無効  カウンター  ボーナスプロテクション  クリティカルダメージ上昇  挑発無視 `,
        url: '/characters/Enfys-Nest'
    }, {
        name: "エンボ",
        character_base_id: "EMBO",
        property: "ダークサイド、アタッカー、リーダー、賞金稼ぎ、ハット・カルテル、ならず者",
        src: '/charui/tex.charui_embo.png',
        abbreviation: "Embo",
        skill: `強化解除  カウンター  攻撃力上昇  フォアサイト  回復 `,
        url: '/characters/Embo'
    }, {
        name: "オーラ・シング",
        character_base_id: "AURRA_SING",
        property: "ダークサイド、アタッカー、リーダー、賞金稼ぎ、ならず者",
        src: '/charui/tex.charui_aurrasing.png',
        abbreviation: "Aurra Sing aurra sing",
        skill: `スタン付与  ターンメーター上昇  クリティカル率上昇  攻撃力上昇  ステルス  カウンター  `,
        url: '/characters/Aurra-Sing'
    }, {
        name: "オールド・ダカ",
        character_base_id: "DAKA",
        property: "ダークサイド、ヒーラー、リーダー、ナイトシスター",
        src: '/charui/tex.charui_daka.png',
        abbreviation: "Old Daka old daka ",
        skill: `スタン付与  復活  回復  リーダー：HP上昇  リーダー：防御力上昇  ターンメーター上昇  クールダウン減少  攻撃力上昇  防御力上昇  最大HP上昇 `,
        url: '/characters/Old-Daka'
    }, {
        name: "オビ＝ワン(パダワン)",
        character_base_id: "PADAWANOBIWAN",
        property: "ライトサイド、アタッカー、銀河共和国、ジェダイ",
        src: '/charui/tex.charui_padawanobiwan.png',
        abbreviation: "Padawan Obi-Wan Kenobi ケノービ Kenobi obi wan",
        skill: `有効性低下  ターンメーター上昇  フォアサイト  防御突破力上昇  めまい付与  ターンメーター減少  回避不可  全体攻撃  防御力低下  クリティカル率上昇  攻撃力上昇  規律  コピー不可  解除不可  耐性発揮不可  アシスト  ボーナスターン  クリティカルダメージ上昇  カウンター不可  時間経過プロテクション  プロテクション無視  回復  強化無効  回復無効  精度低下  クリティカル率低下  クリティカルダメージ低下  回避力低下  攻撃力低下  よろめき  スピード低下  抵抗力低下  精度上昇  防御力上昇  回避力上昇  攻撃力上昇  スピード上昇  `,
        url: '/characters/Padawan-Obi-Wan'
    }, {
        name: "オビ＝ワン・ケノービ(ベン爺)",
        character_base_id: "OLDBENKENOBI",
        property: "ライトサイド、タンク、リーダー、ジェダイ、反乱軍",
        src: '/charui/tex.charui_obiwanep4.png',
        abbreviation: "OB ob Obi-Wan Kenobi (Old Ben) Obi Wan obi wan obi-wan Hello There ベン・ケノービ Ben ben ",
        skill: `回避力低下  有効性上昇  回避不可  スキルブロック付与  攻撃力低下  ターンメーター減少付与  ターンメーター上昇  挑発付与 防御力上昇  回避力上昇  回復  攻撃力上昇  スピード上昇 `,
        url: '/characters/Obi-Wan-Kenobi-Old-Ben'
    }, {
        name: "オメガ",
        character_base_id: "BADBATCHOMEGA",
        property: "ライトサイド、アタッカー、バッド・バッチ、クローン・トルーパー",
        src: '/charui/tex.charui_badbatchomega.png',
        abbreviation: "Omega Bad Batch BB",
        skill: `めまい付与  暗闇  標的  射撃訓練  ターゲットロック  ターンメーター減少付与 弱体解除  ステルス  プロテクション上昇  防御突破力上昇  ターンメーター上昇  時間経過プロテクション  アシスト  ボーナスプロテクション `,
        url: '/characters/Omega'
    }, {
        name: "ガー・サクソン",
        character_base_id: "GARSAXON",
        property: "ダークサイド、タンク、リーダー、帝国軍、マンダロリアン",
        src: '/charui/tex.charui_gar_saxon.png',
        abbreviation: "Gar Saxon gar saxon",
        skill: `スピード低下  クールダウン減少  ターンメーター減少付与 リーダー：防御力上  カウンター  アシスト  全体攻撃 `,
        url: '/characters/Gar-Saxon'
    }, {
        name: "カース・オナシ",
        character_base_id: "CARTHONASI",
        property: "ライトサイド、アタッカー、リーダー、旧共和国",
        src: '/charui/tex.charui_carth.png',
        abbreviation: "Carth Onasi carth onasi",
        skill: ` 時間経過ダメージ  攻撃力上昇  全体攻撃  ターンメーター上昇  回復  リーダー：有効性上昇  リーダー：抵抗力上昇  アシスト  クールダウンリセット `,
        url: '/characters/Carth-Onasi'
    }, {
        name: "カーラ・デューン",
        character_base_id: "CARADUNE",
        property: "ライトサイド、タンク、反乱軍、反乱軍ファイター、ならず者",
        src: '/charui/tex.charui_caradune.png',
        abbreviation: "Cara Dune cara dune",
        skill: `ステルス  挑発付与 有効性上昇  スタン付与  ターンメーター減少付与 クリティカル率上昇  クリティカルダメージ上昇  クリティカルヒット耐性  ターンメーター上昇  復活  全体攻撃 `,
        url: '/characters/Cara-Dune'
    }, {
        name: "カイル・カターン",
        character_base_id: "KYLEKATARN",
        property: "ライトサイド、アタッカー、ジェダイ、反乱軍、反乱軍ファイター",
        src: '/charui/tex.charui_kylekatarn.png',
        abbreviation: "Kyle Katarn kyle katarn",
        skill: `スキルブロック付与 フォースの酔い  クリティカル率上昇  有効性上昇  回復  弱体解除  味方全体-弱体解除  防御力上昇  スピード上昇  全体攻撃  ターンメーター上昇  ジェダイ・ナイト  ボーナスプロテクション `,
        url: '/characters/Kyle-Katarn'
    }, {
        name: "カイロ・レン",
        character_base_id: "KYLOREN",
        property: "ダークサイド、アタッカー、ファースト・オーダー、非同盟のフォースの使い手",
        src: '/charui/tex.charui_kyloren.png',
        abbreviation: "Kylo Ren kylo ren",
        skill: `回復無効  時間経過ダメージ  報復  ターンメーター上昇  全体攻撃  スタン付与  クールダウンリセット `,
        url: '/characters/Kylo-Ren'
    }, {
        name: "カイロ・レン(マスクなし)",
        character_base_id: "KYLORENUNMASKED",
        property: "ダークサイド、タンク、リーダー、ファースト・オーダー、非同盟のフォースの使い手",
        src: '/charui/tex.charui_kylo_unmasked.png',
        abbreviation: "KRU マスク無し Kylo Ren Unmasked unmasked kylo ren ",
        skill: `抵抗力低下  挑発付与 スタン付与  回復  回避不可  リーダー：クリティカルダメージ上昇  リーダー：スピード上昇  ターンメーター上昇  アドバンテージ  カウンター  `,
        url: '/characters/Kylo-Ren-Unmasked'
    }, {
        name: "カイロレン最高指導者",
        character_base_id: "SUPREMELEADERKYLOREN",
        property: "銀河の伝説、ダークサイド、アタッカー、リーダー、ファースト・オーダー、非同盟のフォースの使い手",
        src: '/charui/tex.charui_kyloren_tros.png',
        abbreviation: "SLKR slkr GL Galactic Legends galactic legends Supreme Leader Kylo Ren supreme leader kylo ren",
        skill: `強化無効  アドバンテージ  サイフォン  スタン付与  マスター上昇  リーダー：スピード上昇  リーダー：クリティカルダメージ上昇  挑発付与 ターンメーター上昇  復活不可 全体攻撃  スタン無効化 `,
        url: '/characters/Supreme-Leader-kylo-Ren'
    }, {
        name: "ガモーリアン・ガード",
        character_base_id: "GAMORREANGUARD",
        property: "ダークサイド、タンク、ハット・カルテル、ならず者",
        src: '/charui/tex.charui_gamorreanguard.png',
        abbreviation: "Gamorrean Guard gamorrean guard",
        skill: `時間経過ダメージ  挑発付与 報復効果  エクスポーズ  ターンメーター減少付与  防御力上昇  クリティカル回避力上昇  回復  プロテクション上昇  抵抗力上昇  ダメージ耐性  アシスト `,
        url: '/characters/Gamorrean-Guard'
    }, {
        name: `ガラゼブ・ "ゼブ" ・オレリオス`,
        character_base_id: "ZEBS3",
        property: "ライトサイド、タンク、反乱軍、フェニックス",
        src: '/charui/tex.charui_zeb_s3.png',
        abbreviation: 'Garazeb "Zeb" Orrelios garazeb zeb orrelios',
        skill: `めまい付与  よろめき  スタン付与  ターンメーター上昇  プロテクション上昇  報復効果  抵抗力上昇  回復 `,
        url: '/characters/Garazeb-Zeb-Orrelios'
    }, {
        name: "カル・ケスティス",
        character_base_id: "CALKESTIS",
        property: "ライトサイド、サポート、非同盟のフォースの使い手",
        src: '/charui/tex.charui_calkestis.png',
        abbreviation: "Cal Kestis cal kestis CK ck",
        skill: `防御力低下  スピード低下  ヘルス・スティール上昇  クリティカル率低下  めまい付与  回復  クリティカル耐性  精度上昇  回避力低下  スピード低下  抵抗力低下  クリティカルだめ  ターンメーター上昇  スタン付与  プロテクション上昇  不屈  フォアサイト  防御力上昇  スキルブロック付与 強化無効  ターンメーター上昇 `,
        url: '/characters/Cal-Kestis'
    }, {
        name: "カレラン・ベク",
        character_base_id: "KELLERANBEQ",
        property: "ライトサイド、アタッカー、リーダー、銀河共和国、ジェダイ",
        src: '/charui/tex.charui_kelleranbeq.png',
        abbreviation: "Kelleran Beq kelleran beq",
        skill: `フォアサイト  攻撃力上昇  アシスト  回復  リーダー：防御力上昇  リーダー：スピード上昇  リーダー：抵抗力上昇  パダワンの訓戒  カウンター  プロテクション上昇  ターンメーター上昇  セカンドウィンド `,
        url: '/characters/Kelleran-Beq'
    }, {
        name: "カンデラス・オルド",
        character_base_id: "CANDEROUSORDO",
        property: "ダークサイド、アタッカー、マンダロリアン、旧共和国、ならず者",
        src: '/charui/tex.charui_canderous.png',
        abbreviation: "Canderous Ordo canderous ordo",
        skill: `抵抗力低下  攻撃力低下  時間経過ダメージ  ターンメーター上昇  クリティカル率上昇  クリティカルダメージ上昇 `,
        url: '/characters/Canderous-Ordo'
    }, {
        name: "キ＝アディ＝ムンディ",
        character_base_id: "KIADIMUNDI",
        property: "ライトサイド、アタッカー、ジェダイ、銀河共和国",
        src: '/charui/tex.charui_kiadimundi.png',
        abbreviation: "KAM kam Ki- Adi-Mundi Ki Adi Mundi ki-adi-mundi ki adi mundi",
        skill: `アタル・フォーム  マカシ・フォーム  ターンメーター上昇  回復  クールダウンリセット  弱体解除  味方全体-弱体解除  スピード上昇  最大HP上昇  攻撃力上昇  挑発  アーマー破壊  めまい付与  回避不可 `,
        url: '/characters/Ki-Adi-Mundi'
    }, {
        name: "キーラ",
        character_base_id: "QIRA",
        property: "ライトサイド、サポート、リーダー、ならず者、スマグラー",
        src: '/charui/tex.charui_qira.png',
        abbreviation: "Qira qira",
        skill: `攻撃力低下  カウンター不可  めまい付与  強化解除  よろめき  敵全体-強化解除  アシスト
            エクスポーズ  リーダー：クリティカル率上昇  回復  準備万端  ヘルススティール上昇  全体攻撃`,
        url: '/characters/Qira'
    }, {
        name: "キット・フィストー",
        character_base_id: "KITFISTO",
        property: "ライトサイド、アタッカー、リーダー、銀河共和国、ジェダイ",
        src: '/charui/tex.charui_kitfisto.png',
        abbreviation: "Kit Fisto kit fisto",
        skill: `ターンメーター上昇 全体攻撃  有効性上昇  リーダー：抵抗力上昇  リーダー：防御力上昇  カウンター `,
        url: '/characters/Kit-Fisto'
    }, {
        name: "キャシアン・アンドー",
        character_base_id: "CASSIANANDOR",
        property: "ライトサイド、サポート、反乱軍、反乱軍ファイター、ローグ・ワン",
        src: '/charui/tex.charui_cassian.png',
        abbreviation: "Cassian Andor cassian andor",
        skill: `強化無効  スキルブロック付与 防御力低下  回復無効  攻撃力低下  スピード低下  エクスポーズ  アシスト  ターンメーター上昇  プロテクション上昇  防御力上昇  有効性上昇  抵抗力上昇 `,
        url: '/characters/Cassian-Andor'
    }, {
        name: "キャド・ベイン",
        character_base_id: "CADBANE",
        property: "ダークサイド、サポート、リーダー、賞金稼ぎ、ハット・カルテル、ならず者",
        src: '/charui/tex.charui_cadbane.png',
        abbreviation: "Cad Bane cad bane",
        skill: `精度低下  ターンメーター上昇  強化解除  スタン付与  ターンメーター減少付与 最大プロテクション低下  リーダー：有効性上昇  アドバンテージ  抵抗力低下  クールダウン減少  回復  サーマル・デトネーター `,
        url: '/characters/Cad-Bane'
    }, {
        name: "キャプテン・ターパルス",
        character_base_id: "CAPTAINTARPALS",
        property: "ライトサイド、アタッカー、グンガン",
        src: '/charui/tex.charui_captaintarpals.png',
        abbreviation: "Captain Tarpals",
        skill: `ショック  強化解除   アドバンテージ  固定ダメージ  ターンメーター減少  よろめき  スタン付与  耐性発揮不可  リチャージ  回避不可  アシスト  クリティカルダメージ上昇  回復  マーク状態  解除不可  固定ダメージ  ターンメーター上昇  カウンター  弱体解除  挑発無視  強化無効  攻撃力上昇  防御力上昇  クールダウンリセット  ボーナスターン  プラズマシールド  `,
        url: '/characters/Captain-Tarpals'
    }, {
        name: "キャプテン・ドロガン",
        character_base_id: "CAPTAINDROGAN",
        property: "ライトサイド、アタッカー、反乱軍、反乱軍ファイター",
        src: '/charui/tex.charui_captaindrogan.png',
        abbreviation: "Captain Drogan captaion drogan",
        skill: `回避不可  スタン付与  攻撃力低下  強化解除  炎上  知略  弱体解除  アシスト  回復  プロテクション上昇  スキルブロック無効化 `,
        url: '/characters/Captain-Drogan'
    }, {
        name: "キャプテン・ハン・ソロ",
        character_base_id: "HOTHHAN",
        property: "ライトサイド、サポート、反乱軍、ならず者",
        src: '/charui/tex.charui_hoth_han.png',
        abbreviation: "Captain Han Solo captain han solo Hoth hoth ホスハン CHOLO CHS cholo chs",
        skill: `めまい付与  ターンメーター上昇  弱体解除  回復  クールダウン減少  復活  `,
        url: '/characters/Captaion-Han-Solo'
    }, {
        name: "キャプテン・ファズマ",
        character_base_id: "PHASMA",
        property: "ダークサイド、サポート、リーダー、ファースト・オーダー",
        src: '/charui/tex.charui_phasma.png',
        abbreviation: "Captain Phasma captain phasma",
        skill: `防御力低下  アドバンテージ  ターンメーター上昇  スピード低下  アシスト  回復  リーダー：スピード上昇  リーダー：攻撃力上昇 `,
        url: '/characters/Captain-Phasma'
    }, {
        name: "キャプテン・レックス",
        character_base_id: "CAPTAINREX",
        property: "ライトサイド、サポート、クローン・トルーパー、フェニックス、反乱軍、反乱軍ファイター",
        src: '/charui/tex.charui_captainrex.png',
        abbreviation: "CRex crex Captain Rex captain rex ",
        skill: `弱体解除  スタン付与  回復  クールダウンリセット  抵抗力低下  めまい付与  全体攻撃  攻撃力低下  ターンメーター上昇  クリティカル率上昇  攻撃力上昇  アシスト  防御力上昇  抵抗力上昇 `,
        url: '/characters/Captain-Rex'
    }, {
        name: "クイール",
        character_base_id: "KUIIL",
        property: "ライトサイド、サポート、ならず者",
        src: '/charui/tex.charui_kuiil.png',
        abbreviation: "Kuiil kuiil",
        skill: `炎上  スタン付与  ショック  スピード低下  エクスポーズ  回復  ターンメーター上昇
            メカニックの知識`,
        url: '/characters/Kuiil'
    }, {
        name: "グランドマスター・ヨーダ",
        character_base_id: "GRANDMASTERYODA",
        property: "ライトサイド、サポート、リーダー、ジェダイ、銀河共和国",
        src: '/charui/tex.charui_yodagrandmaster.png',
        abbreviation: "GMY gmy Grand Master Yoda grand master yoda",
        skill: `有効性低下  ターンメーター上昇  攻撃力上昇  防御突破力上昇  全体攻撃  ターンメーター減少付与  スタン付与  抵抗力上昇  プロテクション上昇  リーダー：抵抗力上昇  リーダー：クリティカル率上昇  リーダー：クリティカルダメージ上昇  `,
        url: '/characters/Grand-Master-Yoda'
    }, {
        name: "グランドモフ・ターキン",
        character_base_id: "GRANDMOFFTARKIN",
        property: "ダークサイド、サポート、リーダー、帝国軍、艦隊司令官",
        src: '/charui/tex.charui_tarkinadmiral.png',
        abbreviation: "Grand Moff Tarkin ターキン総督 grand moff tarkin GMT gmt",
        skill: `有効性上昇  ターンメーター減少付与 全体攻撃  クリティカル率減少  攻撃力低下  ターンメーター上昇  リーダー：スピード上昇  防御力低下  エクスポーズ  `,
        url: '/characters/Grand-Moff-Tarkin'
    }, {
        name: "グリーヴァス将軍",
        character_base_id: "GRIEVOUS",
        property: "ダークサイド、アタッカー、リーダー、ドロイド、分離主義者、艦隊司令官",
        src: '/charui/tex.charui_grievous.png',
        abbreviation: "GG General Grievous general grievous gg ゴキブリーヴァス将軍 容赦なき前進",
        skill: `回復無効  回避不可  カウンター不可  ターゲットロック  ターンメーター減少付与 ヘルススティール上昇  スタン付与  リーダー：クリティカル回避力低下  リーダー：防御力低下  ターンメーター上昇  弱体解除  クールダウンリセット `,
        url: '/characters/General-Grievous'
    }, {
        name: "グリード",
        character_base_id: "GREEDO",
        property: "ダークサイド、アタッカー、リーダー、賞金稼ぎ、ハット・カルテル、ならず者",
        src: '/charui/tex.charui_greedo.png',
        abbreviation: "Greedo greedo",
        skill: `有効性上昇  サーマル・デトネーター  ターンメーター上昇  クリティカル率上昇  ターンメーター減少  スタン付与  強化解除  リーダー：クリティカルダメージ上昇  カウンター `,
        url: '/characters/Greedo'
    }, {
        name: "グリーフ・カルガ",
        character_base_id: "GREEFKARGA",
        property: "ライトサイド、サポート、リーダー、賞金稼ぎ、ならず者",
        src: '/charui/tex.charui_greefkarga.png',
        abbreviation: "Greef Karga greef karga",
        skill: `めまい付与  回復  強化解除  アシスト  攻撃力上昇  防御突破力上昇  クリティカルダメージ上昇  クリティカル率上昇  ヘルス・スティール上昇  リーダー：最大プロテクション上昇  ステルス  クールダウン減少  カウンター  弱体解除 `,
        url: '/characters/Greef-Karga'
    }, {
        name: "クルルサンタン",
        character_base_id: "KRRSANTAN",
        property: "ダークサイド、タンク、リーダー、賞金稼ぎ、ハット・カルテル、ならず者、ウーキー",
        src: '/charui/tex.charui_krrsantan.png',
        abbreviation: "Krrsantan krrsantan",
        skill: `有効性低下  ショック  防御力上昇  挑発付与 回復  武装解除  クールダウン増加付与 スキルブロック付与 最大HP上昇  リーダー：ヘルススティール上昇  リーダー：最大HP上昇  リーダー：最大プロテクション上昇  攻撃力上昇  挑発  スピード上昇  復活  クールダウンリセット  スキルブロック無効化  クールダウン増加無効化  クリティカル回避力上昇  ダメージ耐性 `,
        url: '/characters/Krrsantan'
    }, {
        name: "クレニック長官",
        character_base_id: "DIRECTORKRENNIC",
        property: "ダークサイド、サポート、リーダー、帝国軍",
        src: '/charui/tex.charui_krennic.png',
        abbreviation: "Director Krennic 高須院長  クレニック院長",
        skill: `抵抗力低下  よろめき  全体攻撃  復活  アシスト  スタン付与  スキルブロック付与 強化無効  スピード低下  リーダー：クリティカル率上昇  リーダー：有効性上昇  耐性発揮不可  回復  クールダウン減少  挑発無視 `,
        url: '/characters/Director-Krennic'
    }, {
        name: "クローン・サージェント(フェーズI)",
        character_base_id: "CLONESERGEANTPHASEI",
        property: "ライトサイド、アタッカー、クローン・トルーパー、銀河共和国",
        src: '/charui/tex.charui_trooperclonegreen.png',
        abbreviation: "Clone Sergent - Phase Ⅰ I クローンサージェント クローン サージェント",
        skill: `ターンメーター上昇  全体攻撃  ターンメーター減少付与 クリティカル率上昇  攻撃力上昇 `,
        url: '/characters/Clone-Sergeant-Phase-I'
    }, {
        name: "クローン大戦チューバッカ",
        character_base_id: "CLONEWARSCHEWBACCA",
        property: "ライトサイド、タンク、リーダー、銀河共和国、ならず者、ウーキー",
        src: '/charui/tex.charui_clonewarschewbacca.png',
        abbreviation: "Clone Wars Chewbacca チューイ clone wars chewbacca CWC cwc",
        skill: `ターンメーター減少付与 挑発付与 最大HP上昇  弱体解除  回復  防御力上昇  ターンメーター上昇   リーダー：防御力上昇 `,
        url: '/characters/Clone-Wars-Chewbacca'
    }, {
        name: "クワイ=ガン・ジン",
        character_base_id: "QUIGONJINN",
        property: "ライトサイド、サポート、リーダー、銀河共和国、ジェダイ",
        src: '/charui/tex.charui_quigon.png',
        abbreviation: "QGJ qgj Gui-Gon Jinn gui gon jinn",
        skill: `ターンメーター上昇  ターンメーター減少付与 アシスト  回復  強化解除  攻撃力上昇  リーダー：スピード上昇  リーダー：攻撃力上昇  フォアサイト 復活不可  `,
        url: '/characters/Qui-Gon-Jinn'
    }, {
        name: "グンガン・ファランクス",
        character_base_id: "GUNGANPHALANX",
        property: "ライトサイド、タンク、グンガン",
        src: '/charui/tex.charui_gunganphalanx.png',
        abbreviation: "Gungan Phalanx",
        skill: `防御力低下  めまい付与  時間経過プロテクション  全体攻撃  抵抗力低下  誘発状態  コピー不可  解除不可  耐性発揮不可  挑発  回復  弱体解除  無防備  回避不可  シールド上昇  仕返し   固定ダメージ  有効性上昇  アシスト  シールド発生装置  リチャージ  弱体解除  プロテクション破壊無効化  フォアサイト  エクスポーズ  攻撃力上昇  ターンメーター減少  `,
        url: '/characters/Gungan-Phalanx'
    }, {
        name: "グンガン・ブーマディア",
        character_base_id: "BOOMADIER",
        property: "ライトサイド、アタッカー、グンガン",
        src: '/charui/tex.charui_gunganboomadier.png',
        abbreviation: "Gungan Boomadier",
        skill: `スピード上昇  リチャージ  スキルブロック  プロテクション破壊付与  復活不可  プラズマシールド  シールド発生装置  精度上昇  ターゲットロック無効化  ターンメーター入れ替え  フレンジー  `,
        url: '/characters/Gungan-Boomadier'
    }, {
        name: "ケイナン・ジャラス",
        character_base_id: "KANANJARRUSS3",
        property: "ライトサイド、タンク、ジェダイ、フェニックス、反乱軍",
        src: '/charui/tex.charui_kanan_s3.png',
        abbreviation: "Kanan Jarrus kanan jarrus Caleb Dume ケイレブ・デューム",
        skill: `攻撃力低下  挑発付与 弱体解除  抵抗力上昇  味方全体-弱体解除  防御力上昇  フォアサイト  プロテクション上昇  ターンメーター上昇  カウンター   回復 `,
        url: '/characters/Kanan-Jarrus'
    }, {
        name: "ケノービ将軍",
        character_base_id: "GENERALKENOBI",
        property: "ライトサイド、タンク、リーダー、銀河共和国、ジェダイ、艦隊司令官",
        src: '/charui/tex.charui_obiwangeneral.png',
        abbreviation: "GK gk General Kenobi general kenobi Hello There",
        skill: `フォアサイト  弱体解除  味方全体-弱体解除  報復効果  ターンメーター上昇  攻撃力上昇  アシスト  リーダー：最大HP上昇  リーダー防御力上昇  アドバンテージ  ステルス  挑発付与 クリティカルヒット耐性 `,
        url: '/characters/General-Kenobi'
    }, {
        name: "コルサント・アンダーワールド警察隊",
        character_base_id: "CORUSCANTUNDERWORLDPOLICE",
        property: "ライトサイド、サポート、銀河共和国",
        src: '/charui/tex.charui_coruscantpolice.png',
        abbreviation: "CUP cup Coruscant Underworld Police",
        skill: `スタン付与  攻撃力低下  全体攻撃  ターンメーター上昇 `,
        url: '/characters/Coruscant-Underworld-Police'
    }, {
        name: "サード・シスター",
        character_base_id: "THIRDSISTER",
        property: "ダークサイド、タンク、リーダー、帝国軍、尋問官、非同盟のフォースの使い手",
        src: '/charui/tex.charui_thirdsister.png',
        abbreviation: "Reva reva リーヴァ 3s 3S Third Sister third sister 3rd",
        skill: `粛清  スキルブロック付与 弱体解除  回復  アーマー破壊  全体攻撃  防御力低下  回復無効  解除不可  リーダー：攻撃力上昇  リーダー：スピード上昇  スタン無効化  回避不可  耐性発揮不可  ターンメーター上昇  クリティカルダメージ上昇  クールダウン減少  リーダー：最大HP上昇  防御突破力上昇  デスマーク  憎悪  挑発付与  クールダウンリセット  挑発無視 `,
        url: '/characters/Third-Sister'
    }, {
        name: "サヴァージ・オプレス",
        character_base_id: "SAVAGEOPRESS",
        property: "ダークサイド、アタッカー、リーダー、シス",
        src: '/charui/tex.charui_savageopress.png',
        abbreviation: "Savage Opress savage opress",
        skill: `攻撃力低下  大ダメージ  クリティカル率上昇  クリティカルダメージ上昇  リーダー：防御力上昇  リーダー：抵抗力上昇  防御力上昇  時間経過回復  攻撃力上昇  `,
        url: '/characters/Savage-Opress'
    }, {
        name: "サナ・スタロス",
        character_base_id: "SANASTARROS",
        property: "ライトサイド、アタッカー、リーダー、ならず者、スマグラー",
        src: '/charui/tex.charui_sanastarros.png',
        abbreviation: "Sana Strarros sana strarros",
        skill: `無防備  回復  弱体解除  クリティカル率上昇  ステルス  アシスト  全体攻撃  抵抗力低下  よろめき  リーダー：防御力上昇  リーダー：最大HP上昇  リーダー：最大プロテクション上昇  ターンメーター上昇  プロテクション上昇  リーダー：クリティカルダメージ上昇  ターゲットロック  クールダウン減少  挑発付与 抵抗力上昇  強化解除  敵全体-強化解除  回復無効  カウンター  疑惑  `,
        url: '/characters/Sana-Starros'
    }, {
        name: "サビーヌ・レン",
        character_base_id: "SABINEWRENS3",
        property: "ライトサイド、アタッカー、マンダロリアン、フェニックス、反乱軍",
        src: '/charui/tex.charui_sabine_s3-2.png',
        abbreviation: "Sabine Wren sabine wren",
        skill: `アーマー破壊  全体攻撃  よろめき  エクスポーズ  クリティカル率上昇  攻撃力上昇  カウンター不可  回避不可  クールダウン減少 `,
        url: '/characters/Sabine-Wren'
    }, {
        name: "ザム・ウェセル",
        character_base_id: "ZAMWESELL",
        property: "ダークサイド、アタッカー、リーダー、賞金稼ぎ、ならず者",
        src: '/charui/tex.charui_zamwesell.png',
        abbreviation: "Zam Wesell zam wesell",
        skill: `ターンメーター上昇  スピード上昇  全体攻撃  サーマル・デトネーター  回避力低下  回復  回避不可  リーダー：有効性上昇  弱体解除  ステルス  最大プロテクション上昇 `,
        url: '/characters/Zam-Wesell'
    }, {
        name: "ザルバー",
        character_base_id: "ZAALBAR",
        property: "ライトサイド、タンク、旧共和国、ならず者、ウーキー",
        src: '/charui/tex.charui_zaalbar.png',
        abbreviation: "Zaalbar",
        skill: `時間経過ダメージ  回復  全体攻撃  挑発付与 アーマー破壊  防御力上昇  報復効果  `,
        url: '/characters/Zaalbar'
    }, {
        name: "サン・ファク",
        character_base_id: "SUNFAC",
        property: "ダークサイド、タンク、ジオノージアン、分離主義者",
        src: '/charui/tex.charui_geonosian_sunfac.png',
        abbreviation: "Sun Fac sun fac 蟲",
        skill: `強化解除  回復  挑発付与 攻撃力低下  ターンメーター減少付与 回避不可  よろめき  暗闇  めまい付与  カウンター  防御力上昇  HP上昇  ヘルススティール上昇 `,
        url: '/characters/Sun-Fac'
    }, {
        name: "シア・ジュンダ",
        character_base_id: "CEREJUNDA",
        property: "ライトサイド、サポート、リーダー、ならず者、非同盟のフォースの使い手",
        src: '/charui/tex.charui_cerejunda.png',
        abbreviation: "Cere Junda cere junda",
        skill: `抵抗力上昇  精度上昇  ボーナスプロテクション  防御力上昇  ダメージ耐性  クールダウン状態から開始  防御突破力上昇  クールダウン増加付与 クールダウン減少 `,
        url: '/characters/Cere-Junda'
    }, {
        name: "ジェダイ・コンシュラー",
        character_base_id: "JEDIKNIGHTCONSULAR",
        property: "ライトサイド、ヒーラー、銀河共和国、ジェダイ",
        src: '/charui/tex.charui_jedi_consular_03.png',
        abbreviation: "Jedi Consular jedi consular",
        skill: `クールダウン減少  回復  ターンメーター上昇  アーマー無効化 `,
        url: '/characters/Jedi-Consular'
    }, {
        name: "ジェダイ・ナイト・アナキン",
        character_base_id: "ANAKINKNIGHT",
        property: "ライトサイド、アタッカー、リーダー、銀河共和国、ジェダイ",
        src: '/charui/tex.charui_anakinknight.png',
        abbreviation: "JKA jka Jedi Knight Anakin jedi knight anakin",
        skill: `回避不可  強化無効  リーダー：攻撃力上昇  全体攻撃  リーダー：クリティカルダメージ上昇  アドバンテージ  ボーナスターン  `,
        url: '/characters/Jedi-Knight-Anakin'
    }, {
        name: "ジェダイ・ナイト・カル・ケスティス",
        character_base_id: "JEDIKNIGHTCAL",
        property: "ライトサイド、アタッカー、リーダー、ジェダイ",
        src: '/charui/tex.charui_jediknightcal.png',
        abbreviation: "JKCK JKC jkck jkc Jedi Knight Cal Kestis jedi knight cal kestis",
        skill: `強化解除  ボーナスターン  挑発無視  スタンス - ダブルブレード  向こう見ず  スピード低下  スタン付与  アーマー破壊  めまい  全体攻撃  回復  プロテクション上昇  スタンス - デュアルブレード  弱体解除  味方全体-弱体解除  アシスト  切り返し  報復効果  攻撃力低下  スタンス - クロスガード  即戦闘不能  スキルブロック付与 よろめき  フォースの酔い  防御突破力上昇  プロテクション無効化  リーダー：カウンター率上昇  リーダー：防御力上昇  リーダー：攻撃力上昇  リーダー：最大HP上昇  リーダー：最大プロテクション上昇  リーダー：防御力上昇  ターンメーター上昇  フレンジー  スキルブロック無効化  恐怖無効化  スタン無効化  クールダウン操作無効化  ダメージ耐性 `,
        url: '/characters/Jedi-Knight-Cal-Kestis'
    }, {
        name: "ジェダイ・ナイト・ガーディアン",
        character_base_id: "JEDIKNIGHTGUARDIAN",
        property: "ライトサイド、タンク、銀河共和国、ジェダイ",
        src: '/charui/tex.charui_jedi_guardian_01.png',
        abbreviation: "Jedi Knight Guardian jedi knight guardian ",
        skill: `攻撃力低下  全体攻撃  スキルブロック付与 防御力上昇  回復  抵抗力上昇 `,
        url: '/characters/Jedi-Knight-Guardian'
    }, {
        name: "ジェダイ・ナイト・ルーク・スカイウォーカー",
        character_base_id: "JEDIKNIGHTLUKE",
        property: "ライトサイド、アタッカー、リーダー、ジェダイ",
        src: '/charui/tex.charui_luke_jediknight.png',
        abbreviation: "JKL jkl Jedi Knight Luke Skywalker jedi knight kuke skywalker",
        skill: `強化解除  固定ダメージ  最大プロテクション上昇  カウンター不可  アシスト  暗闇  ジェダイの意志  カウンター  スピード上昇  無防備  スタン付与  全体攻撃  最大HP減少  最大プロテクション減少  リーダー：クリティカル率上昇  リーダー：クリティカルダメージ上昇  スピード減少  英雄の覚醒  味方全体-弱体解除  弱体解除  回復  ターンメーター上昇  スタン無効化  恐怖無効化  `,
        url: '/characters/Jedi-Knight-Luke-Skywalker/'
    }, {
        name: "ジェダイ・ナイト・レヴァン",
        character_base_id: "JEDIKNIGHTREVAN",
        property: "ライトサイド・アタッカー、リーダー、ジェダイ、旧共和国",
        src: '/charui/tex.charui_jedirevan.png',
        abbreviation: "JKR jkr Jedi Knight Revan jedi knight revan 白レヴァン ",
        skill: `ターンメーター上昇  全体攻撃  弱体解除  クリティカルダメージ上昇  フォアサイト  ターンメーター入れ替え  マーク状態  クールダウン増加  スタン付与  リーダー：スピード上昇  抵抗力上昇  回復  最大HP減少  戦略的アドバンテージ  挑発無視  クリティカルヒット耐性  ボーナスターン  スタン無効化  スキルブロック無効化  `,
        url: '/characters/Jedi-Knight-Revan'
    }, {
        name: "ジェダイ・マスター・ケノービ",
        character_base_id: "JEDIMASTERKENOBI",
        property: "銀河の伝説、ライトサイド、アタッカー、リーダー、銀河共和国、ジェダイ",
        src: '/charui/tex.charui_globiwan.png',
        abbreviation: "JMK jmk Jedi Master Kenobi jedi master kenobi GL Hello There",
        skill: `スキルブロック付与 防御突破力上昇  無防備  回復無効  アシスト  回復  フォアサイト  抵抗力上昇  プロテクション上昇  ダメージ耐性  クールダウンリセット  リーダー：マスター上昇  リーダー：スピード上昇  リーダー：最大HP上昇  挑発無視  耐性発揮  挑発付与 弱体解除  有利  ステルス解除  マスター上昇  HP割合ダメージ軽減  大ダメージ軽減  プロテクション無効化  味方全体-弱体解除  カウンター  スタン無効化 `,
        url: '/characters/Jedi-Master-Kenobi'
    }, {
        name: "ジェダイ・マスター・ルーク・スカイウォーカー",
        character_base_id: "GRANDMASTERLUKE",
        property: "銀河の伝説、ライトサイド、タンク、リーダー、ジェダイ",
        src: '/charui/tex.charui_luke_jml.png',
        abbreviation: "JML jml Jedi Master Luke Skywalker jedi master luke skywalker",
        skill: `強化無効  最大HP上昇  カウンター不可  抵抗力低下  めまい付与  クールダウン増加付与 抵抗力低下  エクスポーズ  アシスト  アドバンテージ  クリティカルダメージ上昇  ジェダイの訓戒  耐性発揮不可  回避不可  全体攻撃  ターンメーター減少付与 スキルブロック付与 破損  ジェダイの意志  クリティカルヒット耐性  リーダー：最大HP上昇  リーダー：最大プロテクション上昇  リーダー：攻撃力上昇  リーダー：スピード上昇  挑発付与  弱体解除  防御力上昇  抵抗力上昇  固定ダメージ  ターンメーター上昇  クールダウン減少  HP割合ダメージ軽減  大ダメージ軽減  スタン無効化 `,
        url: '/characters/Jedi-Master-Luke-Skywalker'
    }, {
        name: "ジオノージアン・スパイ",
        character_base_id: "GEONOSIANSPY",
        property: "ダークサイド、アタッカー、ジオノージアン、分離主義者",
        src: '/charui/tex.charui_geonosian_spy.png',
        abbreviation: "Geonosian Spy geo Geo geonosian spy 蟲",
        skill: `クリティカル率上昇  回避不可  強化解除  回避力低下  有効性上昇  エクスポーズ  ステルス  ターンメーター上昇 `,
        url: '/characters/Geonosian-Spy'
    }, {
        name: "ジオノージアン・ブルード・ アルファ",
        character_base_id: "GEONOSIANBROODALPHA",
        property: "ダークサイド、サポート、リーダー、ジオノージアン、分離主義者",
        src: '/charui/tex.charui_geonosian_broodalpha.png',
        abbreviation: "GBA gba Geonosian Brood Alpha geo Geo geonosian brood alpha 蟲",
        skill: `強化解除  全体攻撃  エクスポーズ   ターンメーター減少付与 弱体解除  味方全体-弱体解除  招集  クリティカルダメージ上昇  攻撃力上昇  ターンメーター上昇  回復  リーダー：最大HP上昇  リーダー：最大プロテクション上昇  リーダー：ヘルススティール上昇  アシスト  集団意識  挑発付与 カウンター  `,
        url: '/characters/Geonosian-Brood-Alpha'
    }, {
        name: "ジオノージアン兵士",
        character_base_id: "GEONOSIANSOLDIER",
        property: "ダークサイド、アタッカー、ジオノージアン、分離主義者",
        src: '/charui/tex.charui_geonosian_soldier.png',
        abbreviation: "Geonosian Soldier geonosian soldier 蟲",
        skill: `抵抗力低下  アシスト  ターンメーター上昇 `,
        url: '/characters/Geonosian-Soldier'
    }, {
        name: "シス・アサシン",
        character_base_id: "SITHASSASSIN",
        property: "ダークサイド、アタッカー、シス、シス帝国",
        src: '/charui/tex.charui_sithassassin.png',
        abbreviation: "Sass Sith Assassin sith assassin",
        skill: `回避力低下  攻撃力上昇  ステルス  プロテクション無効化  弱体解除  フォアサイト  スピード上昇  抵抗力上昇  ターンメーター上昇  スタン付与  強化解除  `,
        url: '/characters/Sith-Assassin'
    }, {
        name: "シス・エターナルの皇帝",
        character_base_id: "SITHPALPATINE",
        property: "銀河の伝説、アタッカー、リーダー、シス",
        src: '/charui/tex.charui_espalpatine_post.png',
        abbreviation: "SEE see Sith Eternal Emperor sith eternal eternal",
        skill: `欺瞞  コピー不可  解除不可  耐性発揮不可  スピード上昇  カウンター不可  アシスト  回復  復活不可  報復効果  挑発付与 連帯  ボーナスターン  挑発無視  リーダー：マスター上昇  リーダー：有効性上昇  リーダー：スピード上昇  ターンメーター上昇  弱体解除  復活不可  挑発無効化  ターンメーター減少無効化  エクスポーズ  HP割合ダメージ軽減  大ダメージ軽減  スタン無効化  スキルブロック無効化 `,
        url: '/characters/Sith-Eternal-Emperor'
    }, {
        name: "シス・トルーパー",
        character_base_id: "FOSITHTROOPER",
        property: "ダークサイド、アタッカー、ファースト・オーダー、シス",
        src: '/charui/tex.charui_firstorder_sithtrooper.png',
        abbreviation: "SiT SithT Sith Trooper sith trooper シストル",
        skill: `クリティカルヒット耐性  全体攻撃  弱体解除  味方全体-弱体解除  アドバンテージ  アシスト  クールダウンリセット  ボーナスターン `,
        url: '/characters/Sith-Trooper'
    }, {
        name: "シス・マローダー",
        character_base_id: "SITHMARAUDER",
        property: "ダークサイド、アタッカー、シス、シス帝国",
        src: '/charui/tex.charui_sithmarauder.png',
        abbreviation: "Sith Marauder sith marauder",
        skill: `攻撃力低下  有効性上昇  最大HP減少  アーマー無効化  ターンメーター上昇 `,
        url: '/characters/Sith-Marauder'
    }, {
        name: "シス帝国トルーパー",
        character_base_id: "SITHTROOPER",
        property: "ダークサイド、タンク、シス、シス帝国",
        src: '/charui/tex.charui_sithtrooper.png',
        abbreviation: "Sith Empire Troper sith empire trooper SE SET",
        skill: `防御力低下  プロテクション無効化  攻撃力低下  プロテクション上昇  挑発付与 防御力上昇  報復効果  `,
        url: '/characters/Sith-Empire-Troper'
    }, {
        name: "ジャー・ジャー・ビンクス",
        character_base_id: "JARJARBINKS",
        property: "ライトサイド、サポート、グンガン",
        src: '/charui/tex.charui_jarjarbinks.png',
        abbreviation: "Jar Jar Binks ",
        skill: `デスマーク  ダメージ耐性  抵抗力上昇  即戦闘不能  回避不可  カウンター不可  全体攻撃  スタン付与  エクスポーズ  恐怖付与  コピー不可  解除不可  阻止不可  耐性発揮不可  残留プラズマ  コピー不可  プロテクション破壊付与  クールダウン減少  回復  ターンメーター上昇  フォアサイト  苛立ち  アシスト不可  カウンター不可  無防備  暗闇  デスマーク  クールダウンリセット  シールド上昇  アシスト  プロテクション無視  即戦闘不能耐性  `,
        url: '/characters/Jar-Jar-Binks'
    }, {
        name: "シャアク・ティ",
        character_base_id: "SHAAKTI",
        property: "ライトサイド、サポート、リーダー、銀河共和国、ジェダイ",
        src: '/charui/tex.charui_shaakti.png',
        abbreviation: "釈 Shaak Ti shaak ti",
        skill: `強化解除  攻撃力上昇  弱体解除  味方全体-弱体解除  アシスト  ターンメーター上昇  ステルス  クリティカル率上昇  スピード上昇  挑発  クリティカルヒット耐性  リーダー：スピード上昇  回復  報復効果  暗闇 `,
        url: '/characters/Shaak-Ti'
    }, {
        name: "ジャバ・ザ・ハット",
        character_base_id: "JABBATHEHUTT",
        property: "銀河の伝説、ダークサイド、サポート、リーダー、賞金稼ぎ、ハット・カルテル、スマグラー",
        src: '/charui/tex.charui_jabbathehutt.png',
        abbreviation: "Jabba jabba The Hutt the hutt GL",
        skill: `アシスト  プロテクション上昇  暗闇  回復  弱体解除  味方全体-弱体解除  スピード低下  用心棒  クリティカルヒット耐性  防御突破力上昇  スピード上昇  アドバンテージ  強化解除  強化無効  解除不可  サーマル・デトネーター  リーダー：スピード上昇  リーダー：最大HP上昇  好みの悪党  挑発無効化  クリティカルダメージ上昇  ダメージ耐性  攻撃力上昇  コピー不可  解除不可  阻止不可  クールダウンリセット  復活  挑発無視  ステルス解除  スタン解除  攻撃力上昇  ターンメーター上昇  ボーナスプロテクション  HP割合ダメージ軽減  大ダメージ軽減  即戦闘不能  固定ダメージ  カウンター不可  回避不可  スタン無効化  めまい無効化  恐怖無効化 `,
        url: '/characters/Jabba-The-Hutt'
    }, {
        name: "ジャワ",
        character_base_id: "JAWA",
        property: "ライトサイド、アタッカー、ジャワ",
        src: '/charui/tex.charui_jawa_jawa.png',
        abbreviation: "Jawa jawa",
        skill: `スピード低下  全体攻撃  スタン付与  ターンメーター上昇  `,
        url: '/characters/Jawa'
    }, {
        name: "ジャワ・エンジニア",
        character_base_id: "JAWAENGINEER",
        property: "ライトサイド、ヒーラー、ジャワ",
        src: '/charui/tex.charui_jawa_engineer.png',
        abbreviation: "Jawa Engineer jawa engineer",
        skill: `デトネーター  復活  回復  クリティカル率上昇  ターンメーター上昇  スピード上昇 `,
        url: '/characters/Jawa-Engineer'
    }, {
        name: "ジャワ・スカベンジャー",
        character_base_id: "JAWASCAVENGER",
        property: "ライトサイド、サポート、ジャワ",
        src: '/charui/tex.charui_jawa_scavenger.png',
        abbreviation: "Jawa Scavenger jawa scavenger ジャワスカ",
        skill: `攻撃力低下  サーマル・デトネーター  防御力低下  回復無効  抵抗力低下  ステルス  防御力上昇  攻撃力上昇 `,
        url: '/characters/Jawa-Scavenger'
    }, {
        name: "ジャンゴ・フェット",
        character_base_id: "JANGOFETT",
        property: "ダークサイド、アタッカー、リーダー、賞金稼ぎ、マンダロリアン、ならず者、分離主義者",
        src: '/charui/tex.charui_jangofett.png',
        abbreviation: "Jango Fett jango fett ﾌｪｯ!!",
        skill: `回復無効  よろめき  炎上  全体攻撃  回避不可  最大HP減少  抵抗力低下  リーダー：スピード上昇  有効性上昇  攻撃力上昇  賞金稼ぎの決意  復活不可  回復  復活  挑発無視  解除不可  阻止不可  スタック不可  ダメージ耐性 `,
        url: '/characters/Jango-Fett'
    }, {
        name: "ジュアニ",
        character_base_id: "JUHANI",
        property: "ライトサイド、タンク、ジェダイ、旧共和国",
        src: '/charui/tex.charui_juhani.png',
        abbreviation: "Juhani juhani ジュハニ",
        skill: `弱体解除  挑発付与 スタン付与  回避不可  回復  全体攻撃  ステルス  よろめき  カウンター  攻撃力上昇  ヘルススティール上昇  救済  アシスト  ターンメーター上昇 `,
        url: '/characters/'
    }, {
        name: "ショアトルーパー",
        character_base_id: "SHORETROOPER",
        property: "ダークサイド、タンク、帝国軍、帝国軍トルーパー",
        src: '/charui/tex.charui_troopershore.png',
        abbreviation: "Shore Trooper shore trooper",
        skill: `クリティカル率減少  回復  クリティカルヒット耐性  挑発付与 クールダウン減少  ターンメーター上昇  最大HP上昇 `,
        url: '/characters/Shore-Trooper'
    }, {
        name: "ジョリー・ビンド",
        character_base_id: "JOLEEBINDO",
        property: "ライトサイド、ヒーラー、ジェダイ、旧共和国",
        src: '/charui/tex.charui_joleebindo.png',
        abbreviation: "Jolee Bindo jolee bindo どうあがいてもジョリービンド",
        skill: `クールダウン減少  アシスト  回復  弱体解除  復活  クリティカルヒット耐性  ターンメーター減少無効化  プロテクション上昇 `,
        url: '/characters/Jolee-Bindo'
    }, {
        name: "ジン・アーソ",
        character_base_id: "JYNERSO",
        property: "ライトサイド、アタッカー、リーダー、反乱軍、反乱軍ファイター、ローグ・ワン",
        src: '/charui/tex.charui_jyn.png',
        abbreviation: "Jyn Erso jyn erso",
        skill: `アドバンテージ  ターンメーター上昇  復活  スタン付与  エクスポーズ  耐性発揮不可  強化無効無効化  スタン無効  クリティカルダメージ上昇  攻撃力上昇  クリティカルヒット耐性  挑発付与 回避力上昇  スピード上昇 `,
        url: '/characters/Jyn-Erso'
    }, {
        name: "スカイウォーカー将軍",
        character_base_id: "GENERALSKYWALKER",
        property: "ライトサイド、アタッカー、リーダー、第501軍団、銀河共和国、ジェダイ",
        src: '/charui/tex.charui_generalanakin.png',
        abbreviation: "GAS gas General Anakin Skywalker general anakin skywalker スカぴょん",
        skill: `回避不可  防御突破力上昇  アーマー破壊  めまい付与  全体攻撃  復活不可  アドバンス  カバー  挑発付与 ターンメーター上昇  クールダウン増加  弱体解除  クリティカルヒット不可  最大HP減少  耐性発揮不可  カウンター `,
        url: '/characters/General-Skywalker'
    }, {
        name: "スカウト・トルーパー",
        character_base_id: "SCOUTTROOPER_V3",
        property: "ダークサイド、サポート、帝国軍、インペリアル・レムナント、帝国軍トルーパー",
        src: '/charui/tex.charui_trooperscout.png',
        abbreviation: "Scout Trooper scout trooper",
        skill: `精度低下  有効性上昇  攻撃力上昇  強化解除  スピード低下  耐性発揮不可  回避不可  弱体解除  味方全体-弱体解除  クリティカルダメージ上昇  スピード上昇  アシスト  エクスポーズ  よろめき  アドバンテージ  ステルス  回復  ターンメーター上昇  帝国の罠 `,
        url: '/characters/Scout-Trooper'
    }, {
        name: "スカリフ同盟軍パスファインダー",
        character_base_id: "SCARIFREBEL",
        property: "ライトサイド、タンク、反乱軍、反乱軍ファイター、ローグ・ワン",
        src: '/charui/tex.charui_rebel_scarif.png',
        abbreviation: "Scarif Rebel Pathfinder scarif path finder",
        skill: `攻撃力上昇  精度上昇  挑発付与 全体攻撃  復活  ターンメーター上昇  スピード上昇 `,
        url: '/characters/Scarif-Rebel-Pathfinder'
    }, {
        name: "スキッフ・ガード(ランド・カルリジアン)",
        character_base_id: "UNDERCOVERLANDO",
        property: "ライトサイド、アタッカー、ハット・カルテル、ならず者、スマグラー",
        src: '/charui/tex.charui_lando_jabbaguard.png',
        abbreviation: "Skiff Guard Lando Calrissian skiff guard lando calrissian ",
        skill: `潜伏  時間経過ダメージ  アーマー破壊  クールダウンリフレッシュ  弱体解除  報復効果  スピード上昇  防御力上昇  HP上昇  有効性上昇  ステルス上昇  アシスト  信頼できるエージェント `,
        url: '/characters/Skiff-Guard-Lando-Calrissian'
    }, {
        name: "スターキラー",
        character_base_id: "STARKILLER",
        property: "ダークサイド、アタッカー、非同盟のフォースの使い手",
        src: '/charui/tex.charui_starkiller.png',
        abbreviation: "SK sk Starkiller sterkiller ギャレン・マレック Galen Marek galen marek",
        skill: `ショック  全体攻撃  カウンター不可  クールダウン減少  めまい付与  無防備  フォースエネルギー  回避不可  強化無効  回復無効  耐性発揮不可  味方全体-弱体解除  コピー不可  解除不可  強化解除  敵全体-強化解除  カウンター  恐怖無効化  解放  弱体解除  ボーナスターン  クールダウンリセット  スタン付与  挑発付与 アシスト  クリティカルヒット耐性  ダメージ耐性  挑発付与 スタン無効化 `,
        url: '/characters/Starkiller'
    }, {
        name: "スターク大佐",
        character_base_id: "COLONELSTARCK",
        property: "ダークサイド、サポート、帝国軍、帝国軍トルーパー",
        src: '/charui/tex.charui_colonel_stark.png',
        abbreviation: "Col.  Colonel Starck colonel starck",
        skill: `防御力低下  クリティカル率上昇  クリティカルダメージ上昇  ターンメーター上昇  全体攻撃  よろめき  強化解除  クールダウン減少  回復 `,
        url: '/characters/Colonel-Starck'
    }, {
        name: "ストームトルーパー",
        character_base_id: "STORMTROOPER",
        property: "ダークサイド、タンク、帝国軍、インペリアル、レムナント、帝国軍トルーパー",
        src: '/charui/tex.charui_trooperstorm.png',
        abbreviation: "Storm Trooper storm trooper",
        skill: `エクスポーズ  挑発付与 防御力上昇  ターンメーター減少付与 プロテクション上昇 `,
        url: '/characters/Storm-Trooper'
    }, {
        name: "スノートルーパー",
        character_base_id: "SNOWTROOPER",
        property: "ダークサイド、アタッカー、帝国軍、帝国軍トルーパー",
        src: '/charui/tex.charui_troopersnow.png',
        abbreviation: "Snowtrooper snow trooper",
        skill: `スキルブロック付与 全体攻撃  クリティカルダメージ上昇  クールダウン減少  ターンメーター上昇 `,
        url: '/characters/Snowtrooper'
    }, {
        name: "スマグラー・チューバッカ",
        character_base_id: "SMUGGLERCHEWBACCA",
        property: "ライトサイド、アタッカー、レジスタンス、ならず者、ウーキー、スマグラー",
        src: '/charui/tex.charui_tfa_chewbacca.png',
        abbreviation: "Vets Veteran Smuggler Chewbacca Chew vets veteran smuggler chewbacca",
        skill: `めまい付与  スタン付与  スピード低下  ターンメーター上昇  クールダウンリセット  ボーナスターン  `,
        url: '/characters/Veteran-Smuggler-Chewbacca'
    }, {
        name: "スマグラー・ハン",
        character_base_id: "SMUGGLERHAN",
        property: "ライトサイド、アタッカー、レジスタンス、ならず者、スマグラー",
        src: '/charui/tex.charui_tfa_han.png',
        abbreviation: "Vets vets veteran smuggler han solo Veteran Smuggler Han Solo",
        skill: `よろめき  スタン付与  スキルブロック付与 ターンメーター上昇  クールダウンリセット  ボーナスターン  `,
        url: '/characters/Veteran-Smuggler-Han-Solo'
    }, {
        name: "スローン大提督",
        character_base_id: "GRANDADMIRALTHRAWN",
        property: "ダークサイド、サポート、リーダー、帝国軍、艦隊司令官",
        src: '/charui/tex.charui_thrawn.png',
        abbreviation: "GAT gat Grand Admiral Thrawn grand admiral thrawn",
        skill: `スピード上昇  スキルブロック付与 スタン付与  耐性発揮不可  防御力低下  強化解除  ターンメーター減少付与 破砕  ターンメーター交換  回復  弱体解除  ターンメーター上昇  カウンター  `,
        url: '/characters/Grand-Admiral-Thrawn'
    }, {
        name: "セカンド・シスター",
        character_base_id: "SECONDSISTER",
        property: "ダークサイド、アタッカー、リーダー、帝国軍、尋問官、非同盟のフォースの使い手",
        src: '/charui/tex.charui_secondsister.png',
        abbreviation: "2s 2S Second Sister second sister 2女 トリラ Trilla trilla",
        skill: `粛清  耐性発揮不可  クリティカルダメージ上昇  スタン付与  ターンメーター減少付与 ターンメーター上昇  マーク状態  回避不可  `,
        url: '/characters/Second-Sister'
    }, {
        name: "セブンス・シスター",
        character_base_id: "SEVENTHSISTER",
        property: "ダークサイド、ヒーラー、リーダー、帝国軍、尋問官、非同盟のフォースの使い手",
        src: '/charui/tex.charui_seventhsister.png',
        abbreviation: "Seventh Sister seventh sister 7S 7s",
        skill: `攻撃力低下  粛清  耐性発揮不可  強化解除  ターンメーター減少付与 スキルブロック付与 めまい付与  回避不可  耐性発揮不可  回復  クリティカルヒット耐性  フォアサイト  回避力上昇  クールダウン減少  リーダー：回避力上昇  アドバンテージ  アシスト  スピード低下  命中率低下  回復無効  ターンメーター上昇 `,
        url: '/characters/Seventh-Sister'
    }, {
        name: "ソウ・ゲレラ",
        character_base_id: "SAWGERRERA",
        property: "ライトサイド、サポート、リーダー、反乱軍、反乱軍ファイター",
        src: '/charui/tex.charui_sawgerrera.png',
        abbreviation: "Saw Gerrera saw gerrera",
        skill: `防御力低下  クールダウン減少  ターンメーター減少付与 攻撃力減少  回避不可  耐性発揮不可  強化解除  敵全体-強化解除  回復  暗闇  リーダー：最大HP上昇  リーダー：クリティカルダメージ上昇  リーダー：防御力上昇  リーダー：スピード上昇  スピード上昇  クリティカルダメージ上昇  時間経過回復  抵抗力上昇  攻撃力上昇  挑発付与 ターンメーター上昇  起爆トラップ  コピー不可  解除不可  クリティカルダメージ低下  スタン付与  炎上  よろめき  ボーナスターン  クールダウン増加付与 マーク状態  ステルス  クリティカル回避力上昇 `,
        url: '/characters/Saw-Gerrera'
    }, {
        name: "ゾリ・ブリス",
        character_base_id: "ZORIIBLISS_V2",
        property: "ライトサイド、サポーター、レジスタンス、ならず者、スマグラー",
        src: '/charui/tex.charui_zoriibliss.png',
        abbreviation: "Zorri Bliss zorri bliss",
        skill: `ステルス  回避不可  強化解除  回復  弱体解除  ターンメーター上昇  挑発付与 プロテクション上昇  アシスト  エクスポーズ  回復無効  スタン付与  耐性発揮不可  報復効果  クリティカルヒット耐性  スピード低下  抵抗力上昇  最大HP上昇  ダメージ耐性  クリティカルダメージ上昇  スピード上昇 `,
        url: '/characters/Zorri-Bliss'
    }, {
        name: "ダーク・トルーパー",
        character_base_id: "DARKTROOPER",
        property: "ダークサイド、アタッカー、ドロイド、帝国軍、インペリアル・レムナント、帝国軍トルーパー",
        src: '/charui/tex.charui_darktrooper.png',
        abbreviation: "Dark Trooper dark trooper",
        skill: `全体攻撃  アドバンテージ  ダーク・トルーパー部隊  ターンメーター上昇  攻撃力上昇  弱体解除  回復 `,
        url: '/characters/Dark-Trooper'
    }, {
        name: "ダース・サイオン",
        character_base_id: "DARTHSION",
        property: "ダークサイド、タンク、シス",
        src: '/charui/tex.charui_sion.png',
        abbreviation: "Darth Sion darth sion",
        skill: `ペイン  弱体解除  全体攻撃  強化解除  クールダウン減少  回避不可  回復  増悪  弱体解除  ターンメーター上昇  クールダウン状態から開始  クールダウン減少  挑発付与 `,
        url: '/characters/Darth-Sion'
    }, {
        name: "ダース・シディアス",
        character_base_id: "DARTHSIDIOUS",
        property: "ダークサイド、アタッカー、リーダー、シス",
        src: '/charui/tex.charui_sidious.png',
        abbreviation: "Darth Sidious darth sidious ",
        skill: `回復無効  防御力無効化  時間経過ダメージ  エクスポーズ  全体攻撃  リーダー：クリティカル率上昇  リーダー：クリティカルダメージ上昇  回復  ターンメーター上昇  クールダウン減少  スピード上昇 `,
        url: '/characters/Darth-Sidious'
    }, {
        name: "ダース・タロン",
        character_base_id: "DARTHTALON",
        property: "ダークサイド、アタッカー、シス",
        src: '/charui/tex.charui_darthtalon.png',
        abbreviation: "Darth Talon darth talon",
        skill: `スキルブロック付与 クールダウン減少  ステルス  ターンメーター上昇  全体攻撃  ロイヤルハンド  クールダウン状態から開始  コピー不可  阻止不可  解除不可  弱体解除  クールダウンリフレッシュ  報復効果  挑発付与 強化無効  `,
        url: '/characters/Darth-Talon'
    }, {
        name: "ダース・トレイヤ",
        character_base_id: "DARTHTRAYA",
        property: "ダークサイド、サポート、リーダー、シス",
        src: '/charui/tex.charui_traya.png',
        abbreviation: "Darth Traya darth traya トラヤ",
        skill: `めまい付与  クールダウン減少  抵抗力低下  スキルブロック付与 回復無効  回避不可  リーダー：クリティカル回避力上昇  リーダー：有効性上昇  回復  攻撃力低下  ボーナスプロテクション上昇  弱体解除  クールダウンリセット `,
        url: '/characters/Darth-Traya'
    }, {
        name: "ダース・ナイアリス",
        character_base_id: "DARTHNIHILUS",
        property: "ダークサイド、サポート、リーダー、シス",
        src: '/charui/tex.charui_nihilus.png',
        abbreviation: "Darth Nihilus darth nihilus",
        skill: `強化解除  クールダウン減少  クールダウン増加付与 全体攻撃  則戦闘不能  クールダウン状態から開始  リーダー：攻撃力上昇  リーダー：ヘルススティール上昇  リーダー：最大HP上昇  リーダー：クリティカルヒット無効  時間経過ダメージ  最大HP低下  ターンメーター上昇  最大HP上昇  `,
        url: '/characters/Darth-Nihilus'
    }, {
        name: "ダース・ベイダー",
        character_base_id: "VADER",
        property: "ダークサイド、アタッカー、リーダー、帝国軍",
        src: '/charui/tex.charui_vader.png',
        abbreviation: "Darth Vader darth vader",
        skill: `スキルブロック付与 時間経過ダメージ  全体攻撃  弱体解除  回避不可  耐性発揮不可  カウンター不可  スピード低下  ターンメーター上昇  無慈悲  ボーナスターン  無慈悲な標的  恐怖無効化  スタン無効化  ターンメーター操作無効  挑発無視  リーダー：攻撃力上昇  ターンメーター減少付与  ターンメーター減少無効化  回復  ステルス解除  `,
        url: '/characters/Darth-Vader'
    }, {
        name: "ダース・ベイン",
        character_base_id: "DARTHBANE",
        property: "ダークサイド、アタッカー、リーダー、シス",
        src: '/charui/tex.charui_darthbane.png',
        abbreviation: "Darth Bane darth bane",
        skill: `攻撃力減少  攻撃力上昇  耐性発揮不可  サイフォン  復活不可  強化解除  敵全体-強化解除  全体攻撃  回復無効  クールダウン増加付与 ヘルススティール上昇  防御突破力上昇  スピード上昇  ターンメーター減少付与 ターンメーター上昇  防御力減少  抵抗力減少  リーダー：攻撃力上昇  リーダー：スピード上昇  復活不可  スピード低下  防御力上昇  回避力上昇  HP上昇  クールダウンリセット  回復  HP割合ダメージ軽減  スキルブロック無効化  クールダウン増加無効化  スタン無効化  ターンメーター減少無効化  最大プロテクション上昇  挑発無視  弱体解除  味方全体-弱体解除  `,
        url: '/characters/Darth-Bane'
    }, {
        name: "ダース・マラック",
        character_base_id: "DARTHMALAK",
        property: "ダークサイド、タンク、シス、シス帝国",
        src: '/charui/tex.charui_darthmalak.png',
        abbreviation: "Darth Malak darth malak",
        skill: `抵抗力  強化解除  ショック  スタン付与  ダーク・インフュージョン  コピー不可  解除不可  阻止不可  回復  クールダウン状態から開始  回復無効  挑発  ボーナスターン不可  恐怖付与  耐性発揮不可  回避不可  HP割合ダメージ軽減  ボーナスターン  クールダウンリセット `,
        url: '/characters/Darth-Malak'
    }, {
        name: "ダース・マルガス",
        character_base_id: "DARTHMALGUS",
        property: "ダークサイド、タンク、リーダー、シス、シス帝国",
        src: '/charui/tex.charui_darthmalgus.png',
        abbreviation: "Darth Malgus darth malgus gus",
        skill: `最大HP上昇  カウンター不可  回避不可  クリティカルダメージ上昇  暗闇  ショック  スキルブロック付与 挑発付与 耐性発揮不可  クリティカル率上昇  ターンメーター上昇  疑心  プロテクション上昇  ターンメーター減少無効化  リーダー：クリティカル率上昇  リーダー：最大HP上昇  リーダー：スピード上昇  恐怖付与  解除不可  帰ってきたぞ  スタン無効化  恐怖無効化  リーダー：マスター上昇  リーダー：クリティカル回避力上昇  エクスポーズ  HP割合ダメージ軽減  回復無効無効化  カウンター  `,
        url: '/characters/Darth-Malgus'
    }, {
        name: "ダース・モール",
        character_base_id: "MAUL",
        property: "ダークサイド、タンク、リーダー、シス",
        src: '/charui/tex.charui_maul.png',
        abbreviation: "Darth Maul darth maul",
        skill: `ターンメーター上昇  攻撃力上昇  全体攻撃  めまい付与  リーダー：回避力上昇  ステルス  `,
        url: '/characters/Darth-Maul'
    }, {
        name: "ダース・レヴァン",
        character_base_id: "DARTHREVAN",
        property: "ダークサイド、アタッカー、リーダー、シス、シス帝国",
        src: '/charui/tex.charui_sithrevan.png',
        abbreviation: "DR dr 黒レヴァン Darth Revan darth revan",
        skill: `強化無効  クールダウン減少  全体攻撃  ショック  回避不可  獰猛  恐怖付与  コピー不可  解除不可  耐性発揮不可  ターンメーター減少無効化  リーダー：クリティカル率上昇  リーダー：スピード上昇  リーダー：クリティカルダメージ上昇  デスマーク  フォアサイト解除  強化解除 `,
        url: '/characters/Darth-Revan'
    }, {
        name: "ターフル",
        character_base_id: "TARFFUL",
        property: "ライトサイド、サポート、リーダー、ウーキー",
        src: '/charui/tex.charui_tarfful.png',
        abbreviation: "Tarfful tarfful",
        skill: `強化解除  防御突破力上昇  防御力上昇  プロテクション上昇  アシスト  スタン付与  クリティカルダメージ上昇  スピード上昇  挑発  味方全体-弱体解除  有効性上昇  抵抗力上昇  最大HP上昇  誘発  回避不可  リーダー：防御力上昇  リーダー：最大HP上昇  回復  プロテクション上昇  抵抗力上昇  フォアサイト  報復効果  クールダウンリセット  ターンメーター上昇  アドバンテージ  時間経過ダメージ `,
        url: '/characters/Tarfful'
    }, {
        name: "タスケン・ウォーリアー",
        character_base_id: "TUSKENHUNTRESS",
        property: "ダークサイド、アタッカー、タスケン",
        src: '/charui/tex.charui_tuskenhuntress.png',
        abbreviation: "Tusken Warrior tusken warrior",
        skill: `時間経過ダメージ  モメンタム  クリティカルダメージ上昇  防御力低下  強化解除  敵全体-強化解除  カウンター不可  回避不可  弱体解除  クールダウンリセット  ボーナスターン `,
        url: '/characters/Tusken-Warrior'
    }, {
        name: "タスケン・シャーマン",
        character_base_id: "TUSKENSHAMAN",
        property: "ダークサイド、ヒーラー、タスケン",
        src: '/charui/tex.charui_tuskenshaman.png',
        abbreviation: "Tusken Shaman tusken shaman",
        skill: `時間経過ダメージ  攻撃力上昇  回復  ターンメーター上昇 `,
        url: '/characters/Tusken-Shaman'
    }, {
        name: "タスケン・レイダー",
        character_base_id: "TUSKENRAIDER",
        property: "ダークサイド、アタッカー、タスケン",
        src: '/charui/tex.charui_tuskenraider.png',
        abbreviation: "Tusken Raider tusken raider",
        skill: `ターンメーター減少付与 アシスト  挑発付与 復活  クールダウン減少  弱体解除  味方全体-弱体解除  招集 `,
        url: '/characters/Tusken-Raider'
    }, {
        name: "タスケン族長",
        character_base_id: "TUSKENCHIEFTAIN",
        property: "ダークサイド、サポート、リーダー、タスケン",
        src: '/charui/tex.charui_tuskenchief.png',
        abbreviation: "Tusken Chief tusken chief",
        skill: `アシスト  モメンタム  プロテクション上昇  弱体解除  味方全体-弱体解除  クールダウン減少  スタン付与  ボーナスターン  時間経過ダメージ  回復  時間経過ダメージ無効化 `,
        url: '/characters/Tusken-Chief'
    }, {
        name: "ダスチャ",
        character_base_id: "DATHCHA",
        property: "ライトサイド、サポート、リーダー、ジャワ",
        src: '/charui/tex.charui_jawa_dathcha.png',
        abbreviation: "Dathcha dathcha",
        skill: `ステルス  スキルブロック付与 スタン付与  防御力低下  ターンメーター減少付与 `,
        url: '/characters/Dathcha'
    }, {
        name: "ダッシュ・レイダー",
        character_base_id: "DASHRENDAR",
        property: "ライトサイド、サポート、リーダー、ならず者",
        src: '/charui/tex.charui_dashrendar.png',
        abbreviation: "Dash Rendar dash rander",
        skill: `アシスト  強化解除  スタン付与  全体攻撃  ステルス解除  めまい付与  防御力低下  クリティカルダメージ低下
            回避不可  耐性発揮不可  準備万端  クリティカルダメージ上昇  攻撃力上昇  ターンメーター上昇  `,
        url: '/characters/Dash-Rendar'
    }, {
        name: "タリア",
        character_base_id: "TALIA",
        property: "ダークサイド、ヒーラー、リーダー、ナイトシスター",
        src: '/charui/tex.charui_nightsister_talia.png',
        abbreviation: "Talia talia",
        skill: `回復  弱体解除  ターンメーター上昇  時間経過ダメージ  よろめき `,
        url: '/characters/Talia'
    }, {
        name: "タロン・マリコス",
        character_base_id: "TARONMALICOS",
        property: "ダークサイド、アタッカー、非同盟のフォースの使い手",
        src: '/charui/tex.charui_taronmalicos.png',
        abbreviation: "Tron Malicos tron malicos",
        skill: `狂気の刃  コピー不可  解除不可  阻止不可  カウンター不可  切り返し  ボーナスターン  溢れる狂気  クールダウンリセット  全体攻撃  無防備  スタン付与  耐性発揮不可  クールダウン増加付与 強化無効  回復無効  回避不可  復活不可  カウンター 挑発無視  クールダウン減少  クリティカルヒット耐性  プロテクション上昇 ダメージ耐性  攻撃力上昇  クリティカル率上昇  クリティカルダメージ上昇  固定ダメージ  `,
        url: '/characters/Tron-Malicos'
    }, {
        name: "チアルート・イムウェ",
        character_base_id: "CHIRRUTIMWE",
        property: "ライトサイド、アタッカー、反乱軍、反乱軍ファイター、ローグ・ワン",
        src: '/charui/tex.charui_chirrut.png',
        abbreviation: "Chirrut Îmwe chirrut imwe",
        skill: `時間経過回復  HP均一化  弱体無効  味方全体-弱体無効  抵抗力上昇  アシスト  回復 `,
        url: '/characters/Chirrut-Imwe'
    }, {
        name: "チャーパ族長",
        character_base_id: "CHIEFCHIRPA",
        property: "ライトサイド、サポート、リーダー、イウォーク",
        src: '/charui/tex.charui_chirpa.png',
        abbreviation: "Chief Chirpa chief chirpa",
        skill: `ターンメーター上昇  回復  時間経過回復  報復効果  スピード上昇  アシスト  リーダー：スピード上昇 `,
        url: '/characters/Chief-Chirpa'
    }, {
        name: "チューバッカ",
        character_base_id: "CHEWBACCALEGENDARY",
        property: "ライトサイド、アタッカー、反乱軍、ならず者、スマグラー、ウーキー",
        src: '/charui/tex.charui_chewbacca.png',
        abbreviation: "Chewbacca chewbacca チューイ",
        skill: `抵抗力低下  強化解除  全体攻撃  敵全体-強化解除  攻撃力上昇  防御力無効化  クリティカル率上昇  スタン付与  クールダウンリセット  回避不可  ガード  アシスト  回復  スキルブロック無効化  クールダウン増加無効化  ボーナスダメージ  クールダウン減少 `,
        url: '/characters/Chewbacca'
    }, {
        name: "チョッパー",
        character_base_id: "CHOPPERS3",
        property: "ライトサイド、サポーター、ドロイド、フェニックス、反乱軍",
        src: '/charui/tex.charui_chopper.png',
        abbreviation: "Chopper chopper",
        skill: `防御力上昇  攻撃力上昇  スピード上昇  クールダウン減少  挑発付与 強化解除  ターンメーター減少  プロテクション上昇  スタン付与  回避不可  回復  プロテクション上昇  アシスト `,
        url: '/characters/Chopper'
    }, {
        name: "ティーボ",
        character_base_id: "TEEBO",
        property: "ライトサイド、タンク、リーダー、イウォーク",
        src: '/charui/tex.charui_teebo.png',
        abbreviation: "Teebo teebo",
        skill: `ターンメーター減少付与 ステルス  ターンメーター上昇  強化解除 `,
        url: '/characters/Teebo'
    }, {
        name: "デス・トルーパー",
        character_base_id: "DEATHTROOPER",
        property: "ダークサイド、アタッカー、帝国軍、インペリアル・レムナント、帝国軍トルーパー",
        src: '/charui/tex.charui_trooperdeath.png',
        abbreviation: "Death Trooper death trooper",
        skill: `めまい付与  スタン付与  全体攻撃  強化解除  敵全体-強化解除  回復無効  クールダウン増加付与 耐性発揮不可  デスマーク  復活不可  回復  ターンメーター上昇 `,
        url: '/characters/Death-Trooper'
    }, {
        name: "テック",
        character_base_id: "BADBATCHTECH",
        property: "ライトサイド、サポート、バッド・バッチ、クローン・トルーパー、銀河共和国",
        src: '/charui/tex.charui_bb_tech.png',
        abbreviation: "Tech tech Bad Batch BB bad batch bb",
        skill: `ターゲットロック  回復  有効性上昇  ステルス  通訳  弱体解除  味方全体-弱体解除  フォアサイト  抵抗力上昇  スタン付与  コピー不可  クールダウン減少 `,
        url: '/characters/Tech'
    }, {
        name: "デンガー",
        character_base_id: "DENGAR",
        property: "ダークサイド、アタッカー、リーダー、賞金稼ぎ、ならず者",
        src: '/charui/tex.charui_dengar.png',
        abbreviation: "Denger denger",
        skill: `アシスト  スピード低下  スタン付与  抵抗力低下  時間経過ダメージ  ステルス  ターンメーター減少付与 サーマル・デトネーター  カウンター不可  リーダー：ヘルススティール上昇  クリティカルダメージ低下  ターンメータ増加  抵抗力上昇  回復 `,
        url: '/characters/Denger'
    }, {
        name: "ドゥークー伯爵",
        character_base_id: "COUNTDOOKU",
        property: "ダークサイド、アタッカー、リーダー、分離主義者、シス",
        src: '/charui/tex.charui_dooku.png',
        abbreviation: "Count Dooku cout dooku ウィリウォンカ",
        skill: `スタン付与  スキルブロック付与 カウンター不可  回避不可  ショック  スタン付与  切り返し  ステルス  弱体解除  リーダー：抵抗力上昇  リーダー：カウンター率上昇  カウンター  抵抗力低下  回復無効  耐性発揮不可  ターンメーター上昇  クリティカルヒット耐性 `,
        url: '/characters/Count-Dooku'
    }, {
        name: "ドクター・アフラ",
        character_base_id: "DOCTORAPHRA",
        property: "ダークサイド、サポート、リーダー、ならず者",
        src: '/charui/tex.charui_doctoraphra.png',
        abbreviation: "Doctor Aphra doctor aphra",
        skill: `スタン付与  最大プロテクション上昇  サイフォン  精度低下  有効性上昇  ターンメーター上昇  クリティカルダメージ上昇  攻撃力上昇  回復  復活  招集  破損  ターゲットロック  全体攻撃  クールダウン増加付与 疑心  カウンター不可  強化無効  回復無効  よろめき  リーダー：最大HP上昇  リーダー：最大プロテクション上昇  エクスポーズ  スピード低下  回避不可  耐性発揮不可  リーダー：クリティカル回避力上昇  リーダー：スピード上昇  プロテクション上昇  ダメージ耐性  時間経過ダメージ  スキルブロック無効化  回復無効無効化  アーマー破壊  復活不可 `,
        url: '/characters/Doctor-Aphra'
    }, {
        name: "トレンチ提督",
        character_base_id: "TRENCH",
        property: "ダークサイド、サポート、リーダー、分離主義者",
        src: '/charui/tex.charui_admiraltrench.png',
        abbreviation: "Admiral Trench admiral trench",
        skill: `ショック  スタン付与  時間経過回復  時間経過プロテクション  スキルブロック付与 解除不可  耐性発揮不可  クリティカルダメージ減少  ターンメーター減少付与 回復  強化解除  よろめき  アシスト  戦術的優位性  プロテクション上昇  アドバンテージ  フォアサイト  リーダー：最大HP上昇  リーダー：有効性上昇  リーダー：スピード上昇  攻撃力上昇  ステルス解除  ステルス無効化  カウンター  アシスト不可  カウンター不可  ボーナスターン不可  ターンメーター減少無効化  ターンメーター上昇  強化無効無効化  回復無効無効化  恐怖付与  `,
        url: '/characters/Admiral-Trench'
    }, {
        name: "ドロイデカ",
        character_base_id: "DROIDEKA",
        property: "ダークサイド、アタッカー、ドロイド、分離主義者",
        src: '/charui/tex.charui_droideka.png',
        abbreviation: "DDk ddk Droideka droideka",
        skill: `固定ダメージ  防御力無効化  クリティカルヒット不可  ターゲットロック  回避不可  弱体解除  ダメージ耐性  コピー不可  抵抗力上昇  回復  チャージ  アシスト  解除不可  阻止不可  最大HP上昇  めまい無効化  スタン無効化  復活 `,
        url: '/characters/Droideka'
    }, {
        name: "ナイトシスター・アコライト",
        character_base_id: "NIGHTSISTERACOLYTE",
        property: "ダークサイド、アタッカー、ナイトシスター",
        src: '/charui/tex.charui_nightsister_acolyte.png',
        abbreviation: "Nightsister Acolyte nightsister acolyte",
        skill: `ステルス  ターンメーター上昇  弱体解除  クールダウン減少 `,
        url: '/characters/Nightsister-Acolyte'
    }, {
        name: "ナイトシスター・イニシエート",
        character_base_id: "NIGHTSISTERINITIATE",
        property: "ダークサイド、アタッカー、ナイトシスター",
        src: '/charui/tex.charui_nightsister_initiate.png',
        abbreviation: "Nightsister Initiate nightsister initiate",
        skill: `時間経過ダメージ  クリティカル率上昇  強化無効  カウンター `,
        url: '/characters/Nightsister-Initiate'
    }, {
        name: "ナイトシスター・スピリット",
        character_base_id: "NIGHTSISTERSPIRIT",
        property: "ダークサイド、アタッカー、ナイトシスター",
        src: '/charui/tex.charui_nightsisters_wraith.png',
        abbreviation: "Nightsister Spirit nightsister spirit",
        skill: `スピード低下  ターンメーター減少付与 ターンメーター上昇  強化解除  スタン付与  フォアサイト  アーマー無効化 `,
        url: '/characters/Nightsister-Spirit'
    }, {
        name: "ナイトシスター・ゾンビ",
        character_base_id: "NIGHTSISTERZOMBIE",
        property: "ダークサイド、タンク、ナイトシスター",
        src: '/charui/tex.charui_nightsisters_zombie.png',
        abbreviation: "Nightsister Zombie nightsister zombie",
        skill: `抵抗力低下  弱体解除  回復  挑発付与 復活  阻止不可  スピード上昇  スピード低下  復活不可  復活 `,
        url: '/characters/Nightsister-Zombie'
    }, {
        name: "ナインス・シスター",
        character_base_id: "NINTHSISTER",
        property: "ダークサイド、タンク、リーダー、帝国軍、尋問官、非同盟のフォースの使い手",
        src: '/charui/tex.charui_ninthsister.png',
        abbreviation: "9s 9S Ninth Sister ninth sister マサナ・タイド Masana Tide masana ",
        skill: `粛清  耐性発揮不可  時間経過ダメージ  時間経過回復  強化解除  めまい付与  防御力低下  有効性低下  全体攻撃  挑発  防御力上昇  スピード制限無効化  スキルブロック無効化  スタン無効化  クリティカル回避力上昇  回復  ターンメーター上昇 `,
        url: '/characters/Ninth-Sister'
    }, {
        name: "ヌート・ガンレイ",
        character_base_id: "NUTEGUNRAY",
        property: "ダークサイド、サポート、リーダー、ならず者、分離主義者",
        src: '/charui/tex.charui_nutegunray.png',
        abbreviation: "Nute Gunray nute gunray",
        skill: `クールダウン減少  強要  恩恵  スピード低下  回避不可  強化解除  クールダウン増加付与 アシスト  リーダー：スピード上昇  リーダー：有効性上昇  スピード減少  復活  ステルス `,
        url: '/characters/Nute-Gunray'
    }, {
        name: "ネビット長老",
        character_base_id: "CHIEFNEBIT",
        property: "ライトサイド、タンク、リーダー、ジャワ",
        src: '/charui/tex.charui_jawa_nebit.png',
        abbreviation: "Chief Nebit chief nebit",
        skill: `プロテクション上昇  時間経過回復  クールダウン減少  挑発付与 アシスト  ステルス  リーダー：クリティカル率上昇  クリティカル率低下  強化解除  サーマル・デトネーター  解除不可  阻止不可  耐性発揮不可  回復 `,
        url: '/characters/Chief-Nebit'
    }, {
        name: "パオ",
        character_base_id: "PAO",
        property: "ライトサイド、アタッカー、反乱軍、反乱軍ファイター、ローグ・ワン",
        src: '/charui/tex.charui_pao.png',
        abbreviation: "Pao pao",
        skill: `攻撃力上昇  ターンメーター上昇  全体攻撃  防御力減少  クールダウン減少 `,
        url: '/characters/Pao'
    }, {
        name: "パズ・ウィズラ",
        character_base_id: "PAZVIZSLA",
        property: "ライトサイド、タンク、マンダロリアン",
        src: '/charui/tex.charui_pazvizsla.png',
        abbreviation: "Paz Vizsla paz vizsla",
        skill: `ヒート  オーバーヒート  コピー不可  解除不可  阻止不可  強靭な防御  固定ダメージ  回避不可  全体攻撃  破損  クリティカルダメージ低下  回復  クリティカル回避力上昇  めまい付与  ターンメーター減少付与 炎上  エクスポーズ  よろめき  プロテクション上昇  報復効果  フレンジー  弱体解除  ダメージ耐性  ボーナスターン  クールダウンリセット `,
        url: '/characters/Paz-Vizsla'
    }, {
        name: "バスティラ・シャン",
        character_base_id: "BASTILASHAN",
        property: "ライトサイド、サポート、リーダー、ジェダイ、旧共和国",
        src: '/charui/tex.charui_bastilashan.png',
        abbreviation: "Bastila bastila Shan shan BS bs Bast bast",
        skill: `スキルブロック付与 弱体解除  攻撃力上昇  防御力上昇  スピード上昇  精度上昇  クリティカル率上昇  アシスト  強化解除  スタン付与  強化無効  プロテクション上昇  ターンメーター上昇  挑発付与 回復  伝説の戦闘瞑想  解除不可  アドバンテージ  報復効果 `,
        url: '/characters/Bastila-Shan'
    }, {
        name: "バスティラ・シャン(フォールン)",
        character_base_id: "BASTILASHANDARK",
        property: "ダークサイド、サポート、シス、シス帝国",
        src: '/charui/tex.charui_bastilashan_dark.png',
        abbreviation: "BSF bsf 闇バス Bastila Shan (Fallen) bastila shan fallen ",
        skill: `スキルブロック付与 ショック  全体攻撃  カウンタ不可  回避不可  恐怖付与  コピー不可  解除不可  攻撃力低下  クリティカルダメージ低下  回避力低下  スピード低下  エクスポーズ  よろめき  耐性発揮不可  クールダウン増加付与  邪悪な戦闘瞑想  ターンメーター減少付与 回復  フォアサイト  アドバンテージ  フォアサイト `,
        url: '/characters/Bastila-Shan-Fallen'
    }, {
        name: "ハックス将軍",
        character_base_id: "GENERALHUX",
        property: "ダークサイド、サポート、リーダー、ファースト・オーダー、艦隊司令官",
        src: '/charui/tex.charui_generalhux.png',
        abbreviation: "General Hux general hux ハグス将軍 Hugs",
        skill: `ターンメーター上昇  アドバンテージ  強化解除  回避不可  アシスト  弱体解除  ボーナスターン  クールダウンリセット  ダメージ上昇  優位  カウンター  ボーナスターン不可 `,
        url: '/characters/General-Hux'
    }, {
        name: "パドメ・アミダラ",
        character_base_id: "PADMEAMIDALA",
        property: "ライトサイド、サポート、リーダー、銀河共和国",
        src: '/charui/tex.charui_padme_geonosis.png',
        abbreviation: "Padme Padmé Amidala padme amidala padmé PA pa",
        skill: `回避不可  プロテクション上昇  弱体解除  味方全体-弱体解除  プロテクション上昇  スタン付与  コピー不可  解除不可  アシスト  リーダー：最大HP上昇  耐性発揮  クリティカルヒット不可  勇気  阻止不可  ボーナスダメージ  恐怖無効化 `,
        url: '/characters/Padme-Amidala'
    }, {
        name: "パプルー",
        character_base_id: "PAPLOO",
        property: "ライトサイド、タンク、イウォーク",
        src: '/charui/tex.charui_paploo.png',
        abbreviation: "Paploo paploo",
        skill: `強化解除  防御力上昇  スピード低下  挑発付与 弱体解除  ターンメーター上昇  回復 `,
        url: '/characters/Paploo'
    }, {
        name: "バリス・オフィー",
        character_base_id: "BARRISSOFFEE",
        property: "ライトサイド、ヒーラー、リーダー、銀河共和国、ジェダイ",
        src: '/charui/tex.charui_barriss_light.png',
        abbreviation: "Barriss Offee barriss offee",
        skill: `回復  HP均一化  防御力上昇  リーダー：最大HP上昇  弱体解除  ターンメーター上昇 `,
        url: '/characters/Barriss-Offee'
    }, {
        name: "パルパティーン皇帝",
        character_base_id: "EMPERORPALPATINE",
        property: "ダークサイド、サポート、リーダー、帝国軍、シス",
        src: '/charui/tex.charui_palpatineemperor.png',
        abbreviation: "Emperor Palpatine emperor palpatine EP ep パワー ",
        skill: `ショック  ターンメーター上昇  スタン付与  全体攻撃  攻撃力上昇  回復  ヘルススティール上昇  リーダー：有効性上昇
            リーダー：最大HP上昇  リーダー：有効性低下  リーダー：回避力低下 `,
        url: '/characters/Emperor-Palpatine'
    }, {
        name: "ハン(ストームトルーパー)",
        character_base_id: "STORMTROOPERHAN",
        property: "ライトサイド、タンク、リーダー、反乱軍、ならず者",
        src: '/charui/tex.charui_trooperstorm_han.png',
        abbreviation: "STハン Stormtrooper Han stormtrooper han solo Solo ソロ",
        skill: `ターンメーター上昇  挑発付与 リーダー：防御力上昇  リーダー：攻撃力上昇  ターンメーター減少付与  回復 `,
        url: '/characters/Stormtrooper-Han'
    }, {
        name: "ハン・ソロ",
        character_base_id: "HANSOLO",
        property: "ライトサイド、アタッカー、反乱軍、ならず者、スマグラー",
        src: '/charui/tex.charui_han.png',
        abbreviation: "Han Solo han solo",
        skill: `ターンメーター減少付与 回避不可  スタン付与  ターンメーター上昇  クリティカル率上昇  回避力上昇  クリティカルダメージ上昇  ボーナスターン  挑発無視  `,
        url: '/characters/Han-Solo'
    }, {
        name: "ハンター",
        character_base_id: "BADBATCHHUNTER",
        property: "ライトサイド、アタッカー、リーダー、バッド・バッチ、クローン・トルーパー",
        src: '/charui/tex.charui_bb_hunter.png',
        abbreviation: "Bad Batch BB bad batch Hunter hunter",
        skill: `エクスポーズ  回避力上昇  ステルス  全体攻撃  クリティカル率上昇  攻撃力上昇  回避不可  ターンメータ入れ替え  挑発無視  スタン付与  リーダー：最大HP上昇  リーダー：最大プロテクション上昇  リーダー：有効性上昇  固定ダメージ  カウンター不可  ターンメーター減少付与  耐性発揮不可 `,
        url: '/characters/'
    }, {
        name: "ピエット提督",
        character_base_id: "ADMIRALPIETT",
        property: "ダークサイド、サポート、リーダー、帝国軍、帝国軍トルーパー、艦隊司令官",
        src: '/charui/tex.charui_piett.png',
        abbreviation: "Admiral Piett admiral piett",
        skill: `アシスト  攻撃力上昇  ステルス  マーク状態  失敗不可避  コピー不可  解除不可  耐性発揮不可  全体攻撃  強化解除  めまい  恐怖付与  コピー不可  解除不可  耐性発揮不可  リーダー：攻撃力上昇  リーダー：有効性上昇  リーダー：スピード減少  リーダー：抵抗力減少  防御力上昇  カウンター  皇帝の罠  阻止不可 `,
        url: '/characters/Admiral-Piett'
    }, {
        name: "ビスタン",
        character_base_id: "BISTAN",
        property: "ライトサイド、アタッカー、反乱軍、反乱軍ファイター、ローグ・ワン",
        src: '/charui/tex.charui_bistan.png',
        abbreviation: "Bistan bistan",
        skill: `時間経過ダメージ  フレンジー  ターンメーター上昇  ターンメーター減少付与 `,
        url: '/characters/Bistan'
    }, {
        name: "ビッグス・ダークライダー",
        character_base_id: "BIGGSDARKLIGHTER",
        property: "ライトサイド、サポート、反乱軍、反乱軍ファイター",
        src: '/charui/tex.charui_rebelpilot_biggs.png',
        abbreviation: "Biggs Darklighter biggs darklighter",
        skill: `クリティカル率上昇  クリティカルダメージ上昇  アシスト  ターンメーター上昇  回避力上昇 `,
        url: '/characters/'
    }, {
        name: "ファースト・オーダー・エクセキューショナー",
        character_base_id: "FIRSTORDEREXECUTIONER",
        property: "ダークサイド、アタッカー、ファースト・オーダー",
        src: '/charui/tex.charui_firstorder_executioner.png',
        abbreviation: "First Order Executioner first order executioner FOE foe FOX fox",
        skill: `HP上昇  アドバンテージ  ターンメータ減少  強化解除  ターンメーター上昇  クールダウンリセット  最大HP上昇 `,
        url: '/characters/First-Order-Executioner'
    }, {
        name: "ファースト・オーダー・オフィサー",
        character_base_id: "FIRSTORDEROFFICERMALE",
        property: "ダークサイド、サポート、ファースト・オーダー",
        src: '/charui/tex.charui_firstorderofficer.png',
        abbreviation: "First Order Officer FOO foo first order officer",
        skill: `ターンメーター上昇  アドバンテージ  攻撃力上昇  弱体解除  抵抗力上昇  ターンメータ減少  クールダウン減少 `,
        url: '/characters/First-Order-Officer'
    }, {
        name: "ファースト・オーダー・ストームトルーパー",
        character_base_id: "FIRSTORDERTROOPER",
        property: "ダークサイド、タンク、ファースト・オーダー",
        src: '/charui/tex.charui_firstordertrooper.png',
        abbreviation: "First Order Stormtrooper first order stormtrooper FOST fost",
        skill: `スピード低下  強化解除  ターンメーター上昇  防御力上昇  弱体解除  アドバンテージ  挑発付与 カウンター  アシスト `,
        url: '/characters/First-Order-Stormtrooper'
    }, {
        name: "ファースト・オーダーTIEパイロット",
        character_base_id: "FIRSTORDERTIEPILOT",
        property: "ダークサイド、アタッカー、ファースト・オーダー",
        src: '/charui/tex.charui_firstordertiepilot.png',
        abbreviation: "First Order TIE Pilot first order tie pilot FOTP fotp",
        skill: `アドバンテージ  攻撃力低下  強化無効  HP低下  アドバンテージ  フォアサイト  回復 `,
        url: '/characters/First-Order-TIE-Pilot'
    }, {
        name: "ファースト・オーダー特殊部隊TIEパイロット",
        character_base_id: "FIRSTORDERSPECIALFORCESPILOT",
        property: "ダークサイド、アタッカー、ファースト・オーダー",
        src: '/charui/tex.charui_firstorder_pilot.png',
        abbreviation: "First Order SF TIE Pilot first order sf tie pilot special force",
        skill: `防御力低下  アドバンテージ  全体攻撃  スピード上昇  アシスト   スタン付与 `,
        url: '/characters/First-Order-SF-TIE-Pilot'
    }, {
        name: "フィフス・ブラザー",
        character_base_id: "FIFTHBROTHER",
        property: "ダークサイド、サポート、リーダー、帝国軍、尋問官、非同盟のフォースの使い手",
        src: '/charui/tex.charui_fifthbrother.png',
        abbreviation: "Fifth Brother 5b 5B fifth brother",
        skill: `粛清  耐性発揮不可  強化解除  全体攻撃  防御力低下  エクスポーズ  有効性上昇  無防備  プロテクション上昇  ダメージ耐性  スタン付与  恐怖付与  コピー不可  解除不可  回避不可  リーダー：防御力上昇  リーダー：最大HP上昇  スピード減少  エクスポーズ  カウンター  誘発  破損  スタン解除  ターンメーター上昇 `,
        url: '/characters/Fifth-Brother'
    }, {
        name: "フィン",
        character_base_id: "FINN",
        property: "ライトサイド、タンク、リーダー、レジスタンス",
        src: '/charui/tex.charui_finnjakku.png',
        abbreviation: "Finn finn ジョン・ボイエガ",
        skill: `回復  アドバンテージ  防御力上昇  挑発付与 決意  報復効果  エクスポーズ  スタン付与  リーダー：防御力上昇  リーダー：攻撃力上昇  リーダー：有効性上昇  ターンメーター上昇  ターンメーター減少付与 クールダウン減少  リーダー：最大HP上昇  リーダー：プロテクション上昇  復活  プロテクション上昇  解除不可  阻止不可  クリティカルヒット無効化  カウンター  強化解除  回避不可  耐性発揮不可  固定ダメージ `,
        url: '/characters/Finn'
    }, {
        name: "ブーシ(レイア・オーガナ)",
        character_base_id: "BOUSHH",
        property: "ライトサイド、アタッカー、リーダー、賞金稼ぎ、ハット・カルテル、ならず者",
        src: '/charui/tex.charui_boushh.png',
        abbreviation: "Boushh (Leia Organa) boushh leia organa",
        skill: `サーマル・デトネーター  回避不可  防御力低下  全体攻撃  リーダー：最大HP上昇  リーダー：最大プロテクション上昇  強化解除  スタン無効化  復活不可  恐怖無効化  好みの悪党  コピー不可  解除不可  阻止不可  デッドリーブラフ  ターン外攻撃不可 スピード減少  ターンメーター操作無効化  アシスト  スキルブロック無効化  最大クールダウン減少 クールダウンリセット `,
        url: '/characters/Boushh-Leia-Organa'
    }, {
        name: "フェネック・シャンド",
        character_base_id: "FENNECSHAND",
        property: "ダークサイド、アタッカー、リーダー、賞金稼ぎ、ならず者",
        src: '/charui/tex.charui_fennec.png',
        abbreviation: "Fennec Shand fennec shand",
        skill: `攻撃力上昇 熟練兵  全体攻撃  アーマー破壊  自信過剰  コピー不可  耐性発揮不可  回避不可  リーダー：最大HP上昇  リーダー：最大プロテクション上昇  リーダー：防御力上昇  リーダー：攻撃力上昇  賞金稼ぎの決意  ターンメーター上昇 `,
        url: '/characters/Fennec-Shand'
    }, {
        name: "プリンセス・ニーサ",
        character_base_id: "PRINCESSKNEESAA",
        property: "ライトサイド、アタッカー、イウォーク",
        src: '/charui/tex.charui_princesskneesaa.png',
        abbreviation: "Princess Kneesaa princess knersaa",
        skill: `ボーナスターンメーター上昇無効化  攻撃力上昇  有効性低下  弱体解除  味方全体-弱体解除  アシスト  スピード低下  クリティカル率上昇  回復  スタン付与  ターンメーター減少付与 クリティカルダメージ上昇  時間経過ダメージ  固定ダメージ  アシスト  報復効果  フォアサイト  プロテクション上昇  めまい無効化  スタン無効化  ターンメーター上昇  クールダウン減少 `,
        url: '/characters/Princess-Kneesaa'
    }, {
        name: "プロ・クーン",
        character_base_id: "PLOKOON",
        property: "ライトサイド、タンク、リーダー、銀河共和国、ジェダイ",
        src: '/charui/tex.charui_plokoon.png',
        abbreviation: "Plo Koon plo koon",
        skill: `強化解除  防御力上昇  全体攻撃  攻撃力低下  ターンメーター上昇  ステルス解除  攻撃力上昇 `,
        url: '/characters/Plo-Koon'
    }, {
        name: "ベイズ・マルバス",
        character_base_id: "BAZEMALBUS",
        property: "ライトサイド、タンク、反乱軍、反乱軍ファイター、ローグ・ワン",
        src: '/charui/tex.charui_bazemalbus.png',
        abbreviation: "Baze Malbus baze malbus",
        skill: `スピード低下  ターンメーター上昇  強化解除  アシスト  挑発付与  報復効果  `,
        url: '/characters/Baze-Malbus'
    }, {
        name: "ベイダー卿",
        character_base_id: "LORDVADER",
        property: "銀河の伝説、ダークサイド、アタッカー、リーダー、帝国軍、シス",
        src: '/charui/tex.charui_lordvader.png',
        abbreviation: "Lord Vader load vader GL gl Galactic Legend LV lv",
        skill: `強化無効  回復無効  過小評価  回復  全体攻撃  めまい付与  時間経過ダメージ  耐性発揮不可  スキルブロック付与  解除不可  クールダウン増加付与 リーダー：スピード上昇  リーダー：マスター上昇  リーダー：最大HP上昇  プロテクション失う  恐怖無効化  挑発付与 マーク状態  阻止不可  最大HP減少無効化  時間経過ダメージ無効化  サーマル・デトネーター無効化  クリティカルヒット無効化  ターンメーター操作無効化  回避不可  スピード上昇  ステルス  ボーナスターンメーター無効化  HP割合ダメージ軽減  大ダメージ軽減  スタン無効化  ボーナスターン  クールダウン減少  コピー不可  共和国の灰 `,
        url: '/characters/Lord-Vader'
    }, {
        name: "ヘラ・シンドゥーラ",
        character_base_id: "HERASYNDULLAS3",
        property: "ライトサイド、サポート、リーダー、フェニックス、反乱軍",
        src: '/charui/tex.charui_hera_s3.png',
        abbreviation: "Hera Syndulla hera syndulla",
        skill: `エクスポーズ  アシスト  弱体解除  クールダウン減少  ターンメーター上昇  予備プラン  復活  カウンター `,
        url: '/characters/Hera-Syndulla'
    }, {
        name: "ベン・ソロ",
        character_base_id: "BENSOLO",
        property: "ライトサイド、アタッカー、非同盟のフォースの使い手",
        src: '/charui/tex.charui_bensolo.png',
        abbreviation: "Ben Solo ben solo ",
        skill: `防御力低下  攻撃力低下  有効性低下  スピード低下  ターンメーター減少付与 暗闇  攻撃力上昇  クールダウン減少  固定ダメージ  回復無効  コピー不可  解除不可  回避不可  耐性発揮不可  アーマー破壊  強化解除  敵全体-強化解除  ターンメーター上昇  挑発無視  プロテクション無効化  即戦闘不能耐性  復活 `,
        url: '/characters/Ben-Solo'
    }, {
        name: "ボ＝カターン(マンダロア)",
        character_base_id: "MANDALORBOKATAN",
        property: "ライトサイド、アタッカー、リーダー、マンダロリアン",
        src: '/charui/tex.charui_mandalorbokatan.png',
        abbreviation: "Bo-Katan (Mand'alor) bo-katan mand'alor bokatan ",
        skill: `固定ダメージ  回避不可  強化解除  スピード上昇  アーマー破壊  クールダウン減少  弱体解除  味方全体-弱体解除  アシスト  先祖の決意  コピー不可  解除不可  阻止不可  ボーナスターン  リーダー：最大HP上昇  リーダー：防御力上昇  リーダー：攻撃力上昇  挑発付与 復活  HP割合ダメージ軽減  回復  めまい無効化  挑発無視  スタン付与 `,
        url: '/characters/Bo-Katan-Mandalor'
    }, {
        name: "ボ＝カターン・クライズ",
        character_base_id: "BOKATAN",
        property: "ライトサイド・アタッカー・リーダー、マンダロリアン、ならず者",
        src: '/charui/tex.charui_bokatan.png',
        abbreviation: "Bo-Katan Kryze bo-katan kryze bokatan",
        skill: `脆弱  強化解除  敵全体-強化解除  アシスト  弱体解除  挑発付与 防御力上昇  抵抗力上昇  回復 `,
        url: '/characters/Bo-Katan-Kryze'
    }, {
        name: "ポー・ダメロン",
        character_base_id: "POE",
        property: "ライトサイド、タンク、リーダー、レジスタンス",
        src: '/charui/tex.charui_poe.png',
        abbreviation: "Poe Dameron poe dameron",
        skill: `攻撃力低下  挑発付与 ターンメーター減少付与 エクスポーズ  強化無効  リーダー：攻撃力上昇  リーダー：有効性上昇  回復 `,
        url: '/characters/Poe-Dameron'
    }, {
        name: "ボーディー・ルック",
        character_base_id: "BODHIROOK",
        property: "ライトサイド、サポート、反乱軍、反乱軍ファイター、ローグ・ワン",
        src: '/charui/tex.charui_bodhi.png',
        abbreviation: "Bodhi Rook bodhi rook",
        skill: `回避力低下  回避不可  攻撃力上昇  有効性上昇  ターンメーター上昇  ターンメーター減少付与 `,
        url: '/characters/Bodhi-Rook'
    }, {
        name: "ポグル",
        character_base_id: "POGGLETHELESSER",
        property: "ダークサイド、サポート、リーダー、ジオノージアン、分離主義者",
        src: '/charui/tex.charui_geonosian_poggle.png',
        abbreviation: "Poggle poggle",
        skill: `スキルブロック付与 弱体解除  味方全体-弱体解除  ターンメーター上昇  攻撃力上昇  アシスト  リーダー：攻撃力上昇  回復
            ターンメーター減少付与 ジオノージアン・ブルード  コピー不可  解除不可  阻止不可  復活 `,
        url: '/characters/Poggle'
    }, {
        name: "ボス・ナス",
        character_base_id: "BOSSNASS",
        property: 'ライトサイド、サポート、リーダー、グンガン',
        src: '/charui/tex.charui_bossnass.png',
        abbreviation: 'Boss Nass',
        skill: `攻撃力低下  アシスト  弱体解除  ターンメーター上昇  報復効果  回復  シールド発生装置  クリティカルダメージ上昇  挑発  スピード上昇   敵全体-強化解除  ターンメーター減少  エクスポーズ  防御力低下  時間経過ダメージ  回復無効  リーダー：最大プロテクション上昇  リーダー：攻撃力上昇  リーダー：スピード上昇  スピード低下  ボーナスプロテクション  リチャージ  召集  時間経過プロテクション  固定ダメージ  クールダウン減少  プラズマシールド  `,
        url: '/characters/Boss-Nass'
    }, {
        name: "ボスク",
        character_base_id: "BOSSK",
        property: "ダークサイド、タンク、リーダー、賞金稼ぎ、ならず者",
        src: '/charui/tex.charui_bossk.png',
        abbreviation: "Bossk bossk お喋りトカゲ",
        skill: `スタン付与  アシスト  クールダウン減少  弱体解除  回復  フレンジー  挑発付与 攻撃力上昇  リーダー：最大プロテクション上昇  リーダー：抵抗力上昇 `,
        url: '/characters/Bossk'
    }, {
        name: "ホス反乱軍スカウト",
        character_base_id: "HOTHREBELSCOUT",
        property: "ライトサイド、アタッカー、反乱軍、反乱軍ファイター",
        src: '/charui/tex.charui_rebelhothscout.png',
        abbreviation: "Hoth Rebel Scout hoth rebel scout",
        skill: `ターンメーター上昇  スタン付与  `,
        url: '/characters/Hoth-Rebel-Scout'
    }, {
        name: "ホス反乱軍兵士",
        character_base_id: "HOTHREBELSOLDIER",
        property: "ライトサイド、サポーター、反乱軍、反乱軍ファイター",
        src: '/charui/tex.charui_rebelhoth.png',
        abbreviation: "Hoth Rebel Soldier hoth rebel soldier",
        skill: `攻撃力低下  挑発付与 防御力上昇  HP上昇  防御力上昇  回復  カウンター `,
        url: '/characters/Hoth-Rebel-Soldier'
    }, {
        name: "ボバ・フェット",
        character_base_id: "BOBAFETT",
        property: "ダークサイド、アタッカー、リーダー、賞金稼ぎ、ハット・カルテル、ならず者",
        src: '/charui/tex.charui_bobafett.png',
        abbreviation: "Boba Fett BF boba fett ﾌｪｯ!!",
        skill: `時間経過ダメージ  全体攻撃  スキルブロック付与 強化解除  弱体解除  復活不可  クールダウン減少  回復無効  回避不可  リーダー：クリティカルダメージ上昇  リーダー：クリティカル率上昇  ターンメーター上昇  賞金稼ぎの決意  挑発無視`,
        url: '/characters/Boba-Fett'
    }, {
        name: `ボバ・フェット(ジャンゴの "息子" )`,
        character_base_id: "BOBAFETTSCION",
        property: "ダークサイド、アタッカー、リーダー、賞金稼ぎ、ならず者",
        src: '/charui/tex.charui_bobafettold.png',
        abbreviation: "大名 Daimyo BFSoJ SOJ SoJ soj bfsoj Boba Fett, Scion of Jango boba fett scion jango  ﾌｪｯ!!",
        skill: `モメンタム  解除不可  阻止不可  抵抗力上昇  コピー不可  プロテクション破壊付与  耐性発揮不可  プロテクション無効化  全体攻撃  時間経過ダメージ  抵抗力低下  有効性低下  破損  リーダー：クリティカル回避力上昇  挑発無視  固定ダメージ  賞金稼ぎの決意  ターンメーター上昇  スキルブロック無効化  スタン無効化  回復 `,
        url: '/characters/Boba-Fett-Scion-of-Jango'
    }, {
        name: "ホンドー・オナカ",
        character_base_id: "HONDO",
        property: "ニュートラル、サポート、ならず者、スマグラー",
        src: '/charui/tex.charui_hondoohnaka.png',
        abbreviation: "Hondo Ohnaca hondo ohnaca",
        skill: `身代金  コピー不可  解除不可  阻止不可  ターンメーター減少付与 ターンメーター上昇  勝利戦術  人質  耐性発揮不可  スピード0  ボーナスアタック不可  ボーナスターン不可  防御力上昇  弱体解除  味方全体-弱体解除  アシスト  スキルブロック付与  強化無効  クールダウン増加付与 逃走  エクスポーズ  フォアサイト  クリティカルヒット無効化  回復  ボーナスターンメーター `,
        url: '/characters/Hondo-Ohnaca'
    }, {
        name: "マグマトルーパー",
        character_base_id: "MAGMATROOPER",
        property: "ダークサイド、アタッカー、帝国軍、帝国軍トルーパー",
        src: '/charui/tex.charui_trooperstorm_magma.png',
        abbreviation: "Magmatrooper magmatrooper",
        skill: `全体攻撃  ターンメーター減少付与 アーマー無効化  ターンメーター上昇 `,
        url: '/characters/Magmatrooper'
    }, {
        name: "マザー・タルジン",
        character_base_id: "MOTHERTALZIN",
        property: "ダークサイド、サポート、リーダー、ナイトシスター",
        src: '/charui/tex.charui_nightsisters_talzin.png',
        abbreviation: "Mother Talzin mother talzin",
        skill: `感染  カウンター不可  プロテクション無効化  アシスト  復活  回復 リーダー：有効性上昇  リーダー：スピード上昇  回避不可  ターンメーター上昇  即戦闘不能  耐性発揮不可 `,
        url: '/characters/Mother-Talzin'
    }, {
        name: "マスター・クワイ＝ガン",
        character_base_id: "MASTERQUIGON",
        property: "ライトサイド、サポート、銀河共和国、ジェダイ",
        src: "/charui/tex.charui_masterquigon.png",
        abbreviation: "Master Qui-Gon qui gon",
        skill: `破損  防御力上昇  回復  強化解除  強化無効  ターンメーター減少  エクスポーズ  スタン付与  耐性発揮不可  伝説の戦闘瞑想  コピー不可  解除不可  阻止不可  ステルス  スピード上昇  回避不可  全体攻撃  弱体解除  クリティカルダメージ上昇  フォアサイト  抵抗力上昇  抵抗力低下  ターンメーター減少無効化  防御力上昇  アシスト  プロテクション上昇  アドバンテージ  クリティカルダメージ上昇  ボーナスターン  ターンメーター上昇  スキルブロック  回復無効  プロテクション破壊付与  `,
        url: '/characters/Master-Qui-Gon'
    }, {
        name: "マラ・ジェイド(皇帝の手)",
        character_base_id: "MARAJADE",
        property: "ダークサイド、アタッカー、帝国軍、非同盟のフォースの使い手",
        src: '/charui/tex.charui_marajade.png',
        abbreviation: "MJ mj Mara Jade, The Empeor's Hand mara jade the emprors hand",
        skill: `めまい付与  アシスト 全体攻撃  強化解除  スタン付与  無防備  抵抗力低下  攻撃力低下  ショック  よろめき  ステルス  ターンメーター上昇
            有用なコマ  コピー不可  解除不可  ロイヤルハンド  暗闇  回避不可  耐性発揮不可  プロテクション減少  最大プロテクション減少`,
        url: '/characters/Mara-Jade-The-Empeors-Hand'
    }, {
        name: "マンダロリアン",
        character_base_id: "THEMANDALORIAN",
        property: "ライトサイド、アタッカー、リーダー、賞金稼ぎ、マンダロリアン、ならず者",
        src: '/charui/tex.charui_mandalorian.png',
        abbreviation: "The Mandalorian the mandalorian Mando mando This is the way",
        skill: `クリティカル率上昇  アシスト  クリティカルダメージ上昇  リーダー：スピード上昇  リーダー：抵抗力上昇  リーダー：クリティカル率上昇  ターンメーター上昇  賞金稼ぎの決意  即戦闘不能  回避不可  復活不可 `,
        url: '/characters/The-Mandalorian'
    }, {
        name: "マンダロリアン(ベスカー・アーマー)",
        character_base_id: "THEMANDALORIANBESKARARMOR",
        property: "ライトサイド、アタッカー、リーダー、マンダロリアン、ならず者",
        src: '/charui/tex.charui_mandobeskar.png',
        abbreviation: "BAM bam The Mandalorian (Beskar Armor) the mandalorian beskar armor",
        skill: `時間経過ダメージ  ホイッスリング・バード  アシスト不可  カウンター不可 ステルス無視  挑発無視  弱体解除  味方全体-弱体解除  プロテクション均一化  回復  ターンメーター減少付与 回避不可  ダメージ耐性  コピー不可  解除不可  阻止不可  抵抗力上昇  クールダウンから開始  固定ダメージ  復活不可  リーダー：最大HP上昇  リーダー：最大プロテクション上昇  リーダー：攻撃力上昇  スキルブロック無効化  クールダウンリセット `,
        url: '/characters/The-Mandalorian-Beskar-Armor'
    }, {
        name: "ミッション・ヴァオ",
        character_base_id: "MISSIONVAO",
        property: "ライトサイド、アタッカー、旧共和国、ならず者",
        src: '/charui/tex.charui_mission.png',
        abbreviation: "MV Mission Vao mission vao",
        skill: `めまい付与  ターンメーター上昇  弱体解除  ステルス  プロテクション上昇  暗闇  時間経過ダメージ  回避不可  アシスト  回復 `,
        url: '/characters/Mission-Vao'
    }, {
        name: "メイス・ウィンドゥ",
        character_base_id: "MACEWINDU",
        property: "ライトサイド、タンク、リーダー、銀河共和国、ジェダイ、艦隊司令官",
        src: '/charui/tex.charui_macewindu.png',
        abbreviation: "Mace Windu mace windu",
        skill: `スキルブロック付与 ターンメーター上昇  回復  強化解除  スタン付与  ターンメーター減少付与 アシスト   ターンメーター入れ替え  強靭な防御  リーダー：最大HP上昇  リーダー：攻撃力  リーダー：クリティカル率上昇  カウンター  ステルス解除  スピード低下  シャッターポイント  回避不可  耐性発揮不可  フォアサイト `,
        url: '/characters/Mace-Windu'
    }, {
        name: "メリン",
        character_base_id: "MERRIN",
        property: "ダークサイド、サポート、ナイトシスター",
        src: '/charui/tex.charui_merrin.png',
        abbreviation: "Merrin merrin",
        skill: `感染  回復  強化解除  弱体解除  マジックステルス  味方全体-弱体解除  復活  ターンメーター上昇不可  阻止不可  ターンメーター操作無効化  即戦闘不能耐性  コピー不可  解除不可  阻止不可 `,
        url: '/characters/Merrin'
    }, {
        name: "モール",
        character_base_id: "MAULS7",
        property: "ダークサイド、アタッカー、リーダー、マンダロリアン、非同盟のフォースの使い手",
        src: '/charui/tex.charui_maul_cyborg.png',
        abbreviation: "Maul maul",
        skill: `苦悩  強化解除  敵全体-強化解除  全体攻撃  攻撃力低下  ターンメーター上昇  固定ダメージ  強化無効  クールダウン増加付与 カウンター不可  リーダー：最大HP上昇  リーダー：攻撃力上昇  マンダロア  コピー不可  解除不可  阻止不可  アシスト  弱体解除  挑発付与 回避不可  フレンジー  報復効果  スタン無効化  スキルブロック無効化  挑発無視`,
        url: '/characters/Maul'
    }, {
        name: "モブ・エンフォーサー",
        character_base_id: "HUMANTHUG",
        property: "ダークサイド、サポート、ハット・カルテル、ならず者",
        src: '/charui/tex.charui_mob_enforcer.png',
        abbreviation: "Mob Enforcer mob enforcer",
        skill: `防御力低下  めまい付与  エクスポーズ  無防備  サーマル・デトネーター  ターンメーター上昇  ボーナスターン  クールダウン減少 `,
        url: '/characters/Mob-Enforcer'
    }, {
        name: "モフ・ギデオン",
        character_base_id: "MOFFGIDEONS1",
        property: "ダークサイド、サポート、リーダー、帝国軍、インペリアル・レムナント、帝国軍トルーパー",
        src: '/charui/tex.charui_moffgideon.png',
        abbreviation: "Moff Gideon moff gideon Long Live the Empire",
        skill: `洞察  コピー不可  解除不可  阻止不可  全体攻撃  めまい付与  耐性発揮不可  アーマー破壊  アシスト  ターンメーター減少付与  ターンメーター増加  挑発付与 攻撃力上昇  プロテクション上昇  リーダー：最大HP上昇  リーダー：最大プロテクション上昇  リーダー：攻撃力上昇  戦意喪失 `,
        url: '/characters/Moff-Gideon'
    }, {
        name: "モフ・ギデオン(ダーク・トルーパー)",
        character_base_id: "MOFFGIDEONS3",
        property: "ダークサイド、タンク、リーダー、帝国軍、インペリアル・レムナント",
        src: '/charui/tex.charui_moffgideons3.png',
        abbreviation: "Dark Trooper Moff Gideon dark trooper moff gideon Long Live the Empire DTMG",
        skill: `洞察  めまい付与  攻撃力低下  よろめき  スタン付与  ターンメーター減少付与 固定ダメージ  回復無効  解除不可  耐性発揮不可  精度上昇  防御力上昇  挑発付与 阻止不可  アシスト  ステルス  復活  報復効果  リーダー：クリティカル率上昇  リーダー：防御力上昇  リーダー：攻撃力上昇  回復  リーダー：マスター上昇  リーダー：スピード上昇  味方全体-弱体解除  敵全体-強化解除  ボーナスターン `,
        url: '/characters/Dark-Trooper-Moff-Gideon'
    }, {
        name: "モン・モスマ",
        character_base_id: "MONMOTHMA",
        property: "ライトサイド、サポート、リーダー、反乱軍",
        src: '/charui/tex.charui_monmothma.png',
        abbreviation: "MM mm Mon Mothma mon mothma",
        skill: `弱体解除  回復  復活  HP均一化  挑発付与 クリティカルヒット耐性  アシスト  招集  クールダウン減少  挑発無効化  逃走  防御突破力上昇  終結  挑発解除  めまい  `,
        url: '/characters/Mon-Mothma'
    }, {
        name: "ヤング・ハン・ソロ",
        character_base_id: "YOUNGHAN",
        property: "ライトサイド、アタッカー、ならず者、スマグラー",
        src: '/charui/tex.charui_han_young.png',
        abbreviation: "Yolo yolo Young Han Solo young han solo",
        skill: `スピード低下  準備万端  プロテクション上昇  報復効果  回復  クリティカルダメージ上昇  アシスト `,
        url: '/characters/Young-Han-Solo'
    }, {
        name: "ヤング・ランド・カルリジアン",
        character_base_id: "YOUNGLANDO",
        property: "ライトサイド、アタッカー、ならず者、スマグラー",
        src: '/charui/tex.charui_younglando.png',
        abbreviation: "Young Lando Calrissian young lando calrissian",
        skill: `有効性上昇  カウンター不可  ボーナスターン不可  スキルブロック付与 クールダウン減少  弱体解除  ステルス  ターンメーター上昇  スピード上昇  `,
        url: '/characters/Young-Lando-Calrissian'
    }, {
        name: "ヨーダ(ハーミット)",
        character_base_id: "HERMITYODA",
        property: "ライトサイド、サポート、ジェダイ",
        src: '/charui/tex.charui_yodahermit.png',
        abbreviation: "Hoda HYoda HY hoda hyoda hy 隠者 Hermit Yoda hermit yoda",
        skill: `回復  ターンメーター上昇  マスターの訓練  アシスト  HP均一化  フォアサイト  ステルス  逃走  クールダウンリセット `,
        url: '/characters/Hermit-Yoda'
    }, {
        name: "ラダス提督",
        character_base_id: "ADMIRALRADDUS",
        property: "ライトサイド、サポート、リーダー、反乱軍、ローグ・ワン、艦隊司令官",
        src: '/charui/tex.charui_admiralraddus.png',
        abbreviation: "Admiral Raddus admiral raddus AdRad",
        skill: `プロテクション上昇  回復  挑発付与 反乱の口火  アシスト  クールダウン増加付与 復活不可  ターンメーター上昇  弱体解除  味方全体-弱体解除  リーダー：スピード上昇  リーダー：HP上昇  リーダー：有効性上昇  めまい付与  耐性発揮不可  エクスポーズ  リーダー：最大HP上昇  クリティカル率上昇  クリティカルダメージ上昇  防御力上昇  HP上昇  攻撃力上昇  有効性上昇  戦闘不能不可  ボーナスターン  固定ダメージ  プロテクション破壊付与  回復無効  解除不可 `,
        url: '/characters/Admiral-Raddus'
    }, {
        name: "ランド・カルリジアン",
        character_base_id: "ADMINISTRATORLANDO",
        property: "ライトサイド、アタッカー、リーダー、反乱軍、反乱軍ファイター、ならず者",
        src: '/charui/tex.charui_landobespin.png',
        abbreviation: "Lando Calrissian lando calrissian ランド・カルリジアンからのお別れの挨拶",
        skill: `クールダウンリセット  全体攻撃  リーダー：スピード上昇  リーダー：クリティカルダメージ上昇  クリティカル率上昇 `,
        url: '/characters/Lando-Calrissian'
    }, {
        name: "ルーク・スカイウォーカー(農民)",
        character_base_id: "LUKESKYWALKER",
        property: "ライトサイド、アタッカー、リーダー、反乱軍",
        src: '/charui/tex.charui_luke_ep4.png',
        abbreviation: "Luke Skywalker (Farmboy) luke skywalker farmboy 農民ルーク",
        skill: `ターンメーター上昇  時間経過ダメージ  防御力上昇  スピード低下  スタン付与  強化解除  リーダー：抵抗力上昇  アドバンテージ  クリティカルダメージ上昇  攻撃力上昇  回復 `,
        url: '/characters/Luke-Skywalker-Farmboy'
    }, {
        name: "ルーク・スカイウォーカー中佐",
        character_base_id: "COMMANDERLUKESKYWALKER",
        property: "ライトサイド、アタッカー、リーダー、反乱軍、非同盟のフォースの使い手",
        src: '/charui/tex.charui_lukebespin.png',
        abbreviation: "CLS cls Commander Luke Skywalker commander luke skywalker",
        skill: `スピード低下  防御力低下  ターンメーター減少付与 スタン付与  強化解除  強化無効  抵抗力低下  クールダウン減少  リーダー：防御力上昇  リーダー：攻撃力上昇  カウンター  ターンメーター上昇  行動喚起  挑発無視`,
        url: '/characters/Commander-Luke-Skywalker'
    }, {
        name: "ルーセン・レイエル",
        character_base_id: "LUTHENRAEL",
        property: "ライトサイド、サポート、反乱軍、反乱軍ファイター",
        src: '/charui/tex.charui_luthenrael.png',
        abbreviation: "Luthen Rael",
        skill: ``,
        url: '/characters/Luthen-Rael'
    }, {
        name: "ルミナーラ・アンドゥリ",
        character_base_id: "LUMINARAUNDULI",
        property: "ライトサイド、ヒーラー、リーダー、銀河共和国、ジェダイ",
        src: '/charui/tex.charui_luminara.png',
        abbreviation: "Luminara Unduli luminara unduli",
        skill: `回避力上昇  スキルブロック付与 回復  時間経過回復  弱体解除  味方全体-弱体解除  抵抗力上昇  ターンメーター減少無効化  クールダウン減少  リーダー：回避力上昇  `,
        url: '/characters/Luminara-Unduli'
    }, {
        name: "レイ",
        character_base_id: "GLREY",
        property: "銀河の伝説、ライトサイド、アタッカー、リーダー、レジスタンス、非同盟のフォースの使い手",
        src: '/charui/tex.charui_rey_tros.png',
        abbreviation: "GL Rey rey Garactic Legends garactic legends",
        skill: `アーマー無視  ボーナスプロテクション  クリティカルヒット耐性  活力源  コピー不可  解除不可  阻止不可  大ダメージ  復活不可  カウンター不可  回避不可  リーダー：最大HP上昇  リーダー：マスター上昇  リーダー：スピード上昇  ダメージ耐性  触発  弱体解除  ターンメーター減少無効化  HP割合ダメージ軽減  大ダメージ軽減  スタン無効化  固定ダメージ  カウンター不可  防御力無効化  クリティカルヒット不可 `,
        url: '/characters/Rey'
    }, {
        name: "レイ(ジェダイ・トレーニング)",
        character_base_id: "REYJEDITRAINING",
        property: "ライトサイド、タンク、リーダー、レジスタンス、非同盟のフォースの使い手",
        src: '/charui/tex.charui_rey_tlj.png',
        abbreviation: "RJT JTR 修行中レイ rjt jtr Rey(Jedi Trainig) rey jedi training",
        skill: `回復無効  コピー不可  解除不可  耐性発揮不可  アシスト  弱体解除  フォアサイト  強化解除  スキルブロック付与 めまい付与  攻撃力低下  スピード低下 ターンメーター減少付与 ターンメーター上昇  回避不可  リーダー：クリティカル率上昇  リーダー：クリティカルダメージ上昇  エクスポーズ  クールダウン減少  回復  フォアサイト  クリティカルダメージ上昇 `,
        url: '/characters/Rey-Jedi-Trainig'
    }, {
        name: "レイ(スカベンジャー)",
        character_base_id: "REY",
        property: "ライトサイド、アタッカー、レジスタンス、非同盟のフォースの使い手",
        src: '/charui/tex.charui_reyjakku.png',
        abbreviation: "Rey (Scavenger) rey scavenger",
        skill: `フォアサイト  攻撃力上昇  めまい付与  耐性発揮不可 `,
        url: '/characters/Rey-Scavenger'
    }, {
        name: "レイア・オーガナ",
        character_base_id: "GLLEIA",
        property: "銀河の伝説、ライトサイド、タンク、リーダー、反乱軍",
        src: '/charui/tex.charui_leiaendor.png',
        abbreviation: "GL GLレイア gl Geractic Legends garactic legends Leia Organa leia organa",
        skill: `報復効果  固定ダメージ  強化解除  弱体解除  味方全体-弱体解除  回復  アシスト  ターンメーター減少付与 待ち伏せ  コピー不可  解除不可  阻止不可  回避不可  耐性発揮不可  解除不可  めまい付与  よろめき  強化無効  不意打ち  プロテクション無効化  ステルス  クリティカル率低下  クリティカルダメージ低下  有効性低下  抵抗力低下  防御力低下  無防備  リーダー：スピード上昇  リーダー：マスター上昇  リーダー：最大HP上昇  リーダー：最大プロテクション上昇  防御力上昇  プロテクション上昇  最大HP低下無効化  感染無効化  フォアサイト解除  ステルス解除  ダメージ耐性  セカンドウィンド  クールダウン操作無効化  恐れ知らず   ボーナスプロテクション  エクスポーズ無効化  恐怖無効化  HP割合ダメージ軽減  大ダメージ軽減  スタン無効化  破砕  抵抗力上昇  復活  カウンター不可 `,
        url: '/characters/Leia-Organa'
    }, {
        name: "レイア・オーガナ(反乱軍オフィサー)",
        character_base_id: "HOTHLEIA",
        property: "ライトサイド、アタッカー、リーダー、反乱軍",
        src: '/charui/tex.charui_leiahoth.png',
        abbreviation: "ROLO rolo ホスレイア Rebel Officer Leia Organa",
        skill: `強化無効  ターンメーター上昇  全体攻撃  スキルブロック付与 クールダウン減少  カウンター不可  リーダー：抵抗力上昇  リーダー：クリティカル率上昇  フォアサイト  リーダー：スピード上昇  回復 `,
        url: '/characters/Rebel-Officer-Leia-Organa'
    }, {
        name: "レイア姫",
        character_base_id: "PRINCESSLEIA",
        property: "ライトサイド、アタッカー、リーダー、反乱軍",
        src: '/charui/tex.charui_leia_princess.png',
        abbreviation: "Princess Leia princess leia",
        skill: `ターンメーター上昇  ステルス  クリティカルダメージ上昇  攻撃力上昇  フォアサイト  リーダー：クリティカル率上昇  報復効果  抵抗力上昇 `,
        url: '/characters/Princess-Leia'
    }, {
        name: "レジスタンス・トルーパー",
        character_base_id: "RESISTANCETROOPER",
        property: "ライトサイド、アタッカー、レジスタンス",
        src: '/charui/tex.charui_resistancetrooper.png',
        abbreviation: "Resistance Trooper rasistance trooper レジトル",
        skill: `エクスポーズ  強化解除  スピード低下  クールダウン減少  ターンメーター上昇 `,
        url: '/characters/Resistance-Trooper'
    }, {
        name: "レジスタンス・パイロット",
        character_base_id: "RESISTANCEPILOT",
        property: "ライトサイド、アタッカー、レジスタンス",
        src: '/charui/tex.charui_resistancepilot.png',
        abbreviation: "Resistance Pilot resistane pilot レジパイ",
        skill: `ターンメーター上昇  エクスポーズ  フォアサイト `,
        url: '/characters/Resistance^Pilot'
    }, {
        name: "レジスタンスの英雄フィン",
        character_base_id: "EPIXFINN",
        property: "ライトサイド、アタッカー、レジスタンス",
        src: '/charui/tex.charui_finn.png',
        abbreviation: "Resistance Hero Finn resistance hero finn",
        skill: `回復  触発  クールダウン減少  回避不可  ターンメーター入れ替え  挑発付与 クリティカルヒット耐性  アシスト  カウンター  ターンメーター上昇 `,
        url: '/characters/Resistance-Hero-Finn'
    }, {
        name: "レジスタンスの英雄ポー",
        character_base_id: "EPIXPOE",
        property: "ライトサイド、アタッカー、レジスタンス",
        src: '/charui/tex.charui_poe_tros.png',
        abbreviation: "Resistance Hero Poe resistance hero poe",
        skill: `無防備  めまい付与  よろめき  時間経過ダメージ  スタン付与  強化解除  回避不可  プロテクション減少  触発 `,
        url: '/characters/Resistance-Hero-Poe'
    }, {
        name: "レッカー",
        character_base_id: "BADBATCHWRECKER",
        property: "ライトサイド、タンク、バッド・バッチ、クローン・トルーパー、銀河共和国",
        src: '/charui/tex.charui_bb_wrecker.png',
        abbreviation: "Wrecker wrecker Bad Batch bad batch BB bb",
        skill: `スピード低下  回復  逆上  ステルス解除  ターンメーター上昇  挑発付与 防御力上昇  抵抗力上昇  スタン付与  全体攻撃  怒り  コピー不可  解除不可  阻止不可 `,
        url: '/characters/Wrecker'
    }, {
        name: "レンジ・トルーパー",
        character_base_id: "RANGETROOPER",
        property: "ダークサイド、サポート、帝国軍、帝国軍トルーパー",
        src: '/charui/tex.charui_trooperranger.png',
        abbreviation: "Renge Trooper renge trooper",
        skill: `プロテクション上昇  報復効果  アシスト `,
        url: '/characters/Renge-Trooper'
    }, {
        name: "ロイヤル・ガード",
        character_base_id: "ROYALGUARD",
        property: "ダークサイド、タンク、帝国軍",
        src: '/charui/tex.charui_royalguard.png',
        abbreviation: "Royal Guard royal guard RG",
        skill: `スピード低下  スタン付与  防御力上昇  時間経過回復  HP上昇  報復効果  挑発付与 回復  `,
        url: '/characters/Royal-Guard'
    }, {
        name: "ローズ・ティコ",
        character_base_id: "ROSETICO",
        property: "ライトサイド、アタッカー、レジスタンス",
        src: '/charui/tex.charui_rose.png',
        abbreviation: "Rose Tico rose tico",
        skill: `抵抗力上昇  防御力上昇  ターンメーター上昇  ターンメーター減少付与 回避不可  スタン付与  めまい付与  耐性発揮不可 `,
        url: '/characters/Rose-Tico'
    }, {
        name: "ログレイ",
        character_base_id: " LOGRAY",
        property: "ライトサイド、サポート、イウォーク",
        src: '/charui/tex.charui_ewok_logray.png',
        abbreviation: "Logray logray",
        skill: `抵抗力上昇  強化解除  ターンメーター減少付与 めまい付与  回避不可  ターンメーター上昇  フォアサイト  アドバンテージ  攻撃力上昇  HP上昇  回復 `,
        url: '/characters/Logray'
    }, {
        name: "ロボト",
        character_base_id: "LOBOT",
        property: "ライトサイド、サポート、リーダー、反乱軍",
        src: '/charui/tex.charui_lobot.png',
        abbreviation: "Lobot lobot",
        skill: `防御力低下  フォアサイト  防御力上昇  ターゲットロック  味方全体-弱体解除  回復  ターンメーター上昇  リーダー：有効性上昇  リーダー：スピード上昇  スピード上昇  ターンメーター減少付与 耐性発揮不可  スピード低下  アシスト `,
        url: '/characters/Lobot'
    }, {
        name: "ワット・タンバー",
        character_base_id: "WATTAMBOR",
        property: "ダークサイド、サポート、分離主義者",
        src: '/charui/tex.charui_wattambor.png',
        abbreviation: "Wat Tambor wat tambor",
        skill: `弱体解除  時間経過回復  時間経過ダメージ  回避不可  ターンメーター減少付与 復活  時間経過プロテクション  アシスト  逃走  ボーナスターン  コピー不可  解除不可  阻止不可  チーワプ社製医療パック  バクトイド社製シールド発生器  ブラステック社製ウェポンモッド 挑発付与 復活不可  ターンメーター上昇 `,
        url: '/characters/Wat-Tambor'
    }, {
        name: "ワンパ",
        character_base_id: "WAMPA",
        property: "ダークサイド、アタッカー",
        src: '/charui/tex.charui_wampa.png',
        abbreviation: "Wampa wampa DE WANNA WANGA",
        skill: `時間経過ダメージ  スタン付与  ターンメーター上昇  回避不可  全体攻撃  弱体解除  めまい付与  プロテクション上昇  解除不可  阻止不可
            回復無効  クールダウン状態から開始  カウンター  クールダウン減少 `,
        url: '/characters/Wampa'
    }, {
        name: "大尋問官",
        character_base_id: "GRANDINQUISITOR",
        property: "ダークサイド、アタッカー、リーダー、帝国軍、尋問官、非同盟のフォースの使い手",
        src: '/charui/tex.charui_grandinquisitor.png',
        abbreviation: "GI gi Grand Inquisitor grand inquisitor Ready to Die?",
        skill: `粛清  耐性発揮不可  固定ダメージ  回避不可  弱体解除  味方全体-弱体解除  HP均一化  プロテクション均一化  スキルブロック付与  脆弱  回復  クリティカルダメージ上昇  ターンメーター減少付与 拷問  解除不可  耐性発揮不可  攻撃力上昇  スピード上昇  抵抗力上昇  攻撃力上昇  スピード上昇  抵抗力上昇  ボーナスターン不可  クールダウンリセット  強化無効  阻止不可  即戦闘不能  復活不可  リーダー：最大HP上昇  リーダー：最大プロテクション上昇  リーダー：スピード上昇  スキルブロック無効化  防御突破力上昇  攻撃力上昇  アドバンテージ  フォアサイト  挑発付与  挑発無視  フォアサイト解除  ボーナスターン ターンメーター上昇 `,
        url: '/characters/Grand-Inquisitor'
    }, {
        name: "帝国軍偵察ドロイド",
        character_base_id: "IMPERIALPROBEDROID",
        property: "ダークサイド、サポート、ドロイド、帝国軍",
        src: '/charui/tex.charui_probedroid.png',
        abbreviation: "Imperial Probe Droid IPD",
        skill: `エクスポーズ  強化解除  敵全体-強化解除  ターゲットロック  ターンメーター減少付与 回避不可  即戦闘不能  復活不可
            大ダメージ  挑発無視  復活`,
        url: '/characters/Imperial-Probe-Droid'
    }

];

export default characters;

// export default function handler( req: NextApiRequest, res: NextApiResponse<Characters[]>){
//     res.status(200).json(characters)
// }