export type Abilities = {
    ability_type: string,
    name_jp: string,
    name_eng: string,
    image: string,
    description_jp: string,
    description_eng: string,
    is_omega: boolean,
    is_zeta: boolean,
    is_omicron: boolean,
    is_ultimate: boolean,
}

export type characterAbilities = {
    id: string,
    character_name: string,
    character_image: string,
    ability: Abilities[]
}

const characterAbilities: characterAbilities[] = [
    {
        id: '',
        character_name: '',
        character_image: '',
        ability: []
    }, {
        id: 'General-Kenobi',
        character_name: "ケノービ将軍",
        character_image: '/charui/tex.charui_obiwangeneral.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '直観的攻撃',
                name_eng: 'Intuitive Strike',
                image: '/ability/tex.ability_generalkenobi_basic.png',
                description_jp: 'ターゲットに物理ダメージを与え、75%の確率でランダムな味方1体に2ターンの間フォアサイトを発生させる(フォアサイトが発生していない味方のみが対象)。味方全員が強化を得ている場合、ダメージが2倍になる。',
                description_eng: `Deal Physical damage to target enemy with a 75% chance to grant Foresight to a random ally that doesn't have it for 2 turns. If all allies are buffed, deal double damage.`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'ネゴシエーター',
                name_eng: 'The Negotiator',
                image: '/ability/tex.ability_generalkenobi_special01.png',
                description_jp: '味方全体の弱体化効果を全て無効化し、2ターンの間、逆の強化効果を発生させる。弱体化効果の発生していなかった味方は3ターンの報復効果が発生する。ケノービ将軍のターンメーターが60%上昇する。',
                description_eng: 'Dispel all debuffs from all allies and grant them the opposite buffs, if any, for 2 turns. All allies that were not debuffed gain Retribution for 3 turns. General Kenobi gains 60% Turn Meter.',
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: '戦闘指揮',
                name_eng: 'lead the Charge',
                image: '/ability/tex.ability_generalkenobi_special02.png',
                description_jp: 'ターゲットに物理ダメージを与え、ランダムな味方1体に2ターンの攻撃力上昇を付与する。強化効果が発生しているすべての味方をアシストに呼び、30%の低下ダメージを与える。ジェダイ・ナイト・アナキンとアソーカ・タノはこれによるダメージペナルティを受けない。',
                description_eng: 'Deal Physical damage to target enemy and grant a random other ally Offense Up for 2 turns. Call all other buffed allies to assist, dealing 30% less damage. Jedi Knight Anakin and Ahsoka Tano are not affected by this damage penalty.',
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'リーダースキル',
                name_jp: '第212攻撃大隊コマンダー',
                name_eng: '212th Attack Battalion Commnader',
                image: '/abilityui/tex.abilityui_passive_hp.png',
                description_jp: '味方ジェダイおよびクローンの最大HPが30%、防御力が70%上昇する。味方ジェダイが全体回復の特殊スキルを使用すると、HPが最大値の味方全員がアシストを行う。アシスト時の攻撃はダメージが50%減少する。味方クローンは特殊スキルを使用すると1ターンの強化(アタッカー: アドバンテージ、サポート: ステルス、タンク: 挑発)が発生する',
                description_eng: `Jedi and Clone allies have +30% Max Health and +70% Defense. After a Jedi ally uses a team healing Special ability, all other allies at full health are called to Assist, dealing 50% less damage. When a Clone ally uses a Special ability they gain a buff (Attacker: Advantage, Support: Stealth, Tank: Taunt) for 1 turn.`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ソレス',
                name_eng: 'Soresu',
                image: '/abilityui/tex.abilityui_passive_foresight.png',
                description_jp: `ケノービ将軍の各ターン終了時に65%の確率で2ターンのフォアサイトが発生する。

                ケノービ将軍生存時に味方がクリティカルヒットを受けると、1ターンのクリティカルヒット耐性が発生し、ケノービ将軍が1ターンの間挑発を行う。

                味方がすべての銀河共和国の場合、味方銀河共和国がプロテクション上昇を失うと、ケノービ将軍が1ターンの間挑発を行う。`,
                description_eng: `At the end of his turn, General Kenobi has a 65% chance to gain Foresight for 2 turns.

                Whenever another ally is critically hit, if General Kenobi is alive, they gain Critical Hit Immunity for 1 turn and General Kenobi Taunts for 1 turn.
                
                If all allies are Galactic Republic, General Kenobi Taunts for 1 turn whenever another Galactic Republic ally loses any Protection Up.`,
                is_omega: false,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            },
        ],
    }, {
        id: 'Jedi-Knight-Cal-Kestis',
        character_name:'ジェダイ・ナイト・カル・ケスティス',
        character_image: '/charui/tex.charui_jediknightcal.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '文化的ではない時代',
                name_eng: 'Less Civilized Age',
                image: '/ability/tex.ability_jediknightcal_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。
                
                ジェダイ・ナイト・カル・ケスティスのターンの場合:
                
                1ターンの間、「ワールウィンドスラム」、「ウィンドミルガード」、「向こう見ずの攻撃」が利用可能になる。ジェダイ・ナイト・カル・ケスティスがボーナスターンを得る。
                
                このボーナスターン中、ジェダイ・ナイト・カル・ケスティスは「ワールウィンドスラム」「ウィンドミルガード」「向こう見ずの攻撃」のみ使用可能。`,
                description_eng: ``,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'ワールウィンドスラム',
                name_eng: 'Whirlwind Slam',
                image: '/ability/tex.ability_jediknightcal_special01.png',
                description_jp: `「スタンス - ダブルブレード」が発生していない場合、ジェダイ・ナイト・カル・ケスティスはスタンスを失い、遭遇終了まで「スタンス - ダブルブレード」を獲得し、「向こう見ず」のスタックを5得る(最大30)。
                
                敵全体に物理ダメージを与え、2ターンのスピード低下を発生させる。
                
                ターン開始時、ジェダイ・ナイト・カル・ケスティスに「スタンス - ダブルブレード」が発生していない場合:
                - ターゲットを1ターンの間スタン状態にし、遭遇終了までアーマー破壊を発生させる
                - その他の敵全体を2ターンのめまい状態にする
                
                スタンス - ダブルブレード: 攻撃力と抵抗力が50%上昇する。「向こう見ず」のスタックごとにスピードが2上昇する。
                
                テリトリーバトルの場合: ジェダイ・ナイト・カル・ケスティスは「ウィンドブルガード」の次回使用時、HPとプロテクションが50%回復し、「ウィンドミルガード」を最後に使用してから「ワールウィンドスラム」を使用するたび、味方全体がプロテクション上昇(20%)2ターンを得る(スタック可能)
                
                ターン開始時、ジェダイ・ナイト・カル・ケスティスに「スタンス - ダブルブレード」が発生していない場合:
                
                - 敵全体を1ターンの間スタン状態にし、遭遇終了までアーマー破壊を発生させる`,
                description_eng: ``,
                is_omega: true,
                is_zeta: false,
                is_omicron: true,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'ウィンドミルガード',
                name_eng: 'Windmil Defense',
                image: '/ability/tex.ability_jediknightcal_special02.png',
                description_jp: `ターン開始時に「スタンス - デュアルブレード」が発生していない場合、ジェダイ・ナイト・カル・ケスティスはスタンスを失い、遭遇終了まで「スタンス - デュアルブレード」を獲得し、「向こう見ず」のスタックを5得る(最大30)。
                
                味方全体の弱体化効果を全て解除し、他の指定した味方をアシストに呼ぶ。ジェダイ・ナイト・カル・ケスティスはが4ターンの間プロテクション上昇を得る(スタック可能50%、コピー不可)。
                
                ターン開始時、ジェダイ・ナイト・カル・ケスティスに「スタンス - デュアルブレード」が発生していない場合:
                - ジェダイ・ナイト・カル・ケスティスは2ターンの間切り返しを得る(コピー、解除、阻止不可)
                - 味方ジェダイが2ターンの間プロテクション上昇(スタック可能20%)と報復効果を得る
                - 指定した味方ジェダイがボーナスターンを得る。
                
                スタンス - デュアルブレード: 防御力が100%上昇し、「向こう見ず」のスタックごとに敵の攻撃力が2%減少する。他の味方がターン外に攻撃すると、このユニットがアシストに呼ばれる(1ターンにつき1回限り)`,
                description_eng: ``,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: '向こう見ずの攻撃',
                name_eng: 'Impetuous Assault',
                image: '/ability/tex.ability_jediknightcal_special03.png',
                description_jp: `ターン開始時に「スタンス - クロスガード」が発生していない場合、ジェダイ・ナイト・カル・ケスティスはスタンスを失い、バトル終了まで「スタンス - クロスガード」を獲得し、「向こう見ず」のスタックを5失う。
                
                この遭遇で初めて「向こう見ずの攻撃」が使用されると、ターゲットを即座に戦闘不能にする。
                
                ターゲットに物理ダメージを与える。ターゲットは1ターンの間スキルブロックとよろめき状態になり、敵全体が4ターンの間フォース酔い(=フォースの酔い?)状態になる。その他味方全体が2ターンの防御突破力上昇を得る。
                
                スタンス - クロスガード: クリティカルダメージが50%上昇、防御力が25%減少、スピードが25減少する。さらに攻撃時に追加でこのユニットの最大25%分をダメージとして与える
                
                テリトリーバトルの場合: 「向こう見ずの攻撃」が追加でジェダイ・ナイト・カル・ケスティスのレベルごとにターゲットの最大HP10%分のダメージを与える。「向こう見ずの攻撃」使用後、ジェダイ・ナイト・カル・ケスティスの攻撃はプロテクションを無効化し、味方全体がジェダイ・ナイト・カル・ケスティスの基本攻撃力の300%分をバトル終了まで得る。
                
                このスキルはジェダイ・ナイト・カル・ケスティスに「向こう見ず」のスタックが30ないと使用できない。`,
                description_eng: ``,
                is_omega: true,
                is_zeta: true,
                is_omicron: true,
                is_ultimate: false,
            }, {
                ability_type: 'リーダースキル',
                name_jp: '銀河の歪み',
                name_eng: 'Weight of the Galaxy',
                image: '/abilityui/tex.abilityui_passive_jedi.png',
                description_jp: `味方ジェダイのカウンター率、防御力、攻撃力が50%上昇する。
                
                テリトリーバトルの場合: バトル開始時、味方の最大HPと最大プロテクションが100%上昇し、ジェダイ・ナイト・カル・ケスティスの防御力の300%を得る。各遭遇開始時、味方のターンメーターとフレンジーが2ターンの間25%上昇する(=ターンメーターが25%上昇し、2ターンの間フレンジーを得る?)。戦闘不能になった敵は復活できない。遭遇が終了しても、「向こう見ず」のスタック数は持続する。`,
                description_eng: ``,
                is_omega: true,
                is_zeta: false,
                is_omicron: true,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ジェダイ・サバイバー',
                name_eng: 'Jedi Survivor',
                image: '/abilityui/tex.abilityui_passive_jedisurvivor.png',
                description_jp: `ジェダイ・ナイト・カル・ケスティスはスキルブロック、恐怖、スタンを無効化する。
                
                味方ジェダイがターン外に攻撃すると、ジェダイ・ナイト・カル・ケスティスのHPが10%回復する。
                
                ジェダイの味方全体が敵からのクールダウン操作を無効化する。
                
                味方ジェダイは恐怖状態になると、1ターンのダメージ耐性を得て、ターンメーターが60%上昇する。
                
                ジェダイ・ナイト・カル・ケスティスはスタンスを得るたび、遭遇終了まで「向こう見ず」のスタックを5得る(最大30)。
                
                向こう見ず: 攻撃力が1%上昇し、防御力が1%減少する。スキルに追加効果が発生する`,
                description_eng: ``,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            }
        ],
    }, {
        id: 'Jedi-Knight-Luke-Skywalker',
        character_name: 'ジェダイ・ナイト・ルーク・スカイウォーカー',
        character_image: '/charui/tex.charui_luke_jediknight.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '優勢攻撃',
                name_eng: 'Prevailing Strike',
                image: '/ability/tex.ability_luke_jediknight_basic.png',
                description_jp: `弱体化効果を全て解除し、ターゲットに物理ダメージを与える。またその敵がタンクの場合は固定ダメージも与える(レイドボスと銀河の伝説は除く)。その後、敵のクリティカルダメージを10%減少させる(スタック可能)。遭遇終了まで、ジェダイ・ナイト・ルーク・スカイウォーカーの最大プロテクションが10%上昇する(スタック可能、最大100%)。この攻撃はカウンター不可。`,
                description_eng: ``,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: '堅固な前進',
                name_eng: 'Stalwart Advance',
                image: '/ability/tex.ability_luke_jediknight_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、指定した味方をアシストに呼ぶ。敵ターゲットは2ターンの間暗闇状態となる。
                
                ジェダイ・ナイト・ルーク・スカイウォーカーは2ターンの間ジェダイの意志を得る(コピー、解除、阻止不可)。指定した味方がジェダイの場合(旧共和国ジェダイは除く)、その味方にも2ターンのジェダイの意志が発生する。
                
                ジェダイの意志: カウンター率+100%、攻撃力+50%、スピード;25%、抵抗力+25%`,
                description_eng: ``,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: '拒絶',
                name_eng: 'Repulse',
                image: '/ability/tex.ability_luke_jediknight_special02.png',
                description_jp: `敵全体に1ターンのスタンと2ターンの無防備を与える。遭遇終了まで、敵全体の最大HPとプロテクションが10%減少する(スタック可能、最大50%)。
                
                拒絶(対レイドボスと銀河の伝説): ターゲットに物理ダメージを3回与え、2ターンの間無防備状態にする。
                
                このスキルは回避、耐性発揮できない。`,
                description_eng: ``,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'ジェダイの帰還',
                name_eng: 'Return of the Jedi',
                image: '/abilityui/tex.abilityui_passive_jedi.png',
                description_jp: `味方ライトサイド全体のクリティカル率とクリティカルダメージが15%上昇する(味方ジェダイはその2倍)。
                
                ジェダイ・ナイト・ルーク・スカイウォーカーの各ターン開始時、遭遇終了まで敵全体のスピードがルークのベーススピードまで減少し、この方法によってスピードが制限されると敵のベーススピードは増加できなくなる(ベースの値は、強化や弱体化効果が適用される前の遭遇開始時の値となる)。このスピード制限はレイドボスには影響せず、また征服バトルでルークのスタミナが40を切っている場合や敵側もスピード制限スキルや銀河の伝説を持っている場合は発動しない。
                
                遭遇開始時、味方ジェダイ全体(旧共和国ジェダイを除く)に付与スキル「英雄の覚醒」が発生する。`,
                description_eng: ``,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '付与スキル',
                name_jp: '英雄の覚醒',
                name_eng: 'Heroes Arise',
                image: '/ability/tex.ability_luke_jediknight_special03.png',
                description_jp: `味方全体の弱体化効果を全て解除し、味方ジェダイをアシストに呼ぶ(ダメージは20%減少)。味方ジェダイ全体(旧共和国ジェダイを除く)のHPとプロテクションが25%回復し、2ターンの間ジェダイの意志が発生する。ジェダイ・ナイト・ルーク・スカイウォーカーのターンメーターが100%上昇する。
                
                このスキルのクールダウンは「英雄の覚醒」が発生している味方の間で共有され、クールダウン操作を無効化する(クールダウン: 10)。`,
                description_eng: ``,
                is_omega: false,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ジェダイ・ナイトの決意',
                name_eng: "Jedi Knight7s Resolve",
                image: '/abilityui/tex.abilityui_passive_protection.png',
                description_jp: `ジェダイ・ナイト・ルーク・スカイウォーカーはダメージを受けるたび、ターン中に「優勢攻撃」を使うまで、ターンメーターが5%、攻撃力が5%上昇する(スタック可能、最大25%)。
                
                ターン外に攻撃するかクリティカルヒットを受けると、遭遇終了までスピードが2上昇する(スタック可能、最大20)。
                
                味方ジェダイ(旧共和国ジェダイを除く)のターン終了時、ジェダイ・ナイト・ルーク・スカイウォーカーが10%上昇する。
                
                ジェダイ・ナイト・ルーク・スカイウォーカーはスタンと恐怖を無効化する。`,
                description_eng: ``,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            },
        ],
    }, {
        id: 'Jedi-Master-Kenobi',
        character_name: 'ジェダイ・マスター・ケノービ',
        character_image: '/charui/tex.charui_globiwan.png',
        ability: [
            {
                ability_type: 'アルティメットスキル',
                name_jp: '終わりだ',
                name_eng: "It's Over",
                image: '/ability/tex.ability_globiwan_ultimate.png',
                description_jp: `使用するにはアルティメットチャージが50%以上必要

                アルティメットチャージ: ジェダイ・マスター・ケノービはスキルを使用するとアルティメットチャージを行う。ジェダイ・マスター・ケノービがリーダーの場合、味方ライトサイドが通常スキルを使用すると、ケノービのアルティメットチャージが3%上昇(味方のターンの場合はその2場合)。
                
                バトルの開始時に銀河共和国でもある味方非同盟のフォースの使い手(ライトサイド)がいる場合、味方ジェダイ全体は敵のシスをターゲット中、プロテクションを無効化し、敵シスはバトル終了までカウンター不可となる。味方ライトサイドの弱体化効果を全て解除する。味方ライトサイド全体はこのスキルで使用したアルティメットチャージと同等の割合のマスターを得る(スタック可能)。アルティメットチャージ100%で2倍、遭遇終了まで有効。
                
                100%を下回るアルティメットチャージを使用すると、ジェダイ・マスター・ケノービに2ターンの有利の効果が発生する(コピー、解除、阻止不可)。味方銀河共和国全体のプロテクションが3ターンの間20%上昇する(解除、阻止不可)。
                
                アルティメットチャージを100%使用した場合、ジェダイ・マスター・ケノービに5ターンの有利の強化効果が発生する(コピー、解除、阻止不可)。味方ライトサイド全体のHPとプロテクションが60%回復し、味方銀河共和国全体のプロテクションが3ターンの間50%上昇する(解除、阻止不可)。
                
                有利: ターン外に攻撃すると35%の増加ダメージを与える。カウンター率が100%上昇。スピードが35%減少。アルティメットチャージは獲得不可`,
                description_eng: ``,
                is_omega: false,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: true,
            }, {
                ability_type: '通常スキル',
                name_jp: '烈火の剣さばき',
                name_eng: 'Ardent Bladework',
                image: '/ability/tex.ability_globiwan_basic.png',
                description_jp: 'ターゲットに物理ダメージを与え、ターゲットがダークサイドの場合、1ターンのスキルブロックを発生させる(銀河の伝説を覗く)。防御突破力上昇が発生していない最弱の味方ライトサイドに2ターンの防御突破力上昇が発生する。ジェダイ・マスター・ケノービのターン中にこのスキルを使用すると、アルティメットチャージが9%上昇する。',
                description_eng: "",
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: '私の義務を果たす',
                name_eng: 'I Will Do What I Must',
                image: '/ability/tex.ability_globiwan_special01.png',
                description_jp: 'ターゲットに物理ダメージを与え、2ターンの無防備と回復効果を発生させる(解除、耐性発揮不可)。指定した味方ライトサイドをアシストに呼び、50%の増加ダメージを与える。ジェダイ・マスター・ケノービが選択された場合、ケノービはアシストを行わない代わりに、アルティメットチャージが12%上昇し(リーダーである場合はその2倍)、次のこのスキル使用時に50%の増加ダメージを与える(スタック可能、最大10スタック)。',
                description_eng: ``,
                is_omega: true,
                is_zeta: true,
                is_omicron: true,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'やあ',
                name_eng: 'Hello There',
                image: '/ability/tex.ability_globiwan_special02.png',
                description_jp: `味方ライトサイドのHPとプロテクションが40%回復し、3ターンのフォアサイトと抵抗力上昇を得る。味方銀河共和国とライトサイドの非同盟のフォースの使い手のプロテクションが2ターン上昇する(20%)。指定した味方銀河共和国が1ターンのダメージ耐性を得て(コピー、解除、阻止不可)、クールダウンがリセットされる(付与スキルを覗く)。
                
                味方ライトサイド全体の強化効果1つにつき、ジェダイ・マスター・ケノービのアルティメットチャージが1%上昇する(最大30%)。`,
                description_eng: ``,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: true,
            }, {
                ability_type: 'リーダースキル',
                name_jp: '共鳴する意志',
                name_eng: 'Harmonious Will',
                image: '/abilityui/tex.abilityui_passive_harmoniouswill.png',
                description_jp: `味方ライトサイド全体のマスターが25%、スピードが30、最大HPが25%上昇する。味方銀河共和国は4ターンのプロテクション上昇を得る(75%、解除不可)。
                
                ジェダイ・マスター・ケノービに「有利」の効果が発生している間、味方ライトサイドは受けるダメージが20%減少し、挑発を無効(=無視？)し、弱体化効果を全て耐性発揮する。また味方銀河共和国がターン中にスキルを使用すると、ジェダイ・マスター・ケノービがアシストする。
                
                バトル開始時に味方全体がライトサイドの場合、プロテクション上昇が発生している味方銀河共和国はクリティカルヒットを受けない。銀河共和国タンクがまだ挑発していない場合、各遭遇開始時に銀河共和国タンクは2ターンの挑発を行う。挑発を失うと、プロテクション上昇中で未挑発の場合に限り、銀河共和国タンクは2ターン挑発を行う。バトル開始時に味方全体が銀河共和国かライトサイトの非同盟のフォースの使い手の場合、味方は初めて1%になると、自身の弱体化効果を全て解除してHPとプロテクションを50%回復し、2ターンのプロテクション上昇(50%)を得る。
                
                味方ライトサイドが通常スキルを使用するたび、ジェダイ・マスター・ケノービのアルティメットチャージが3%上昇する(味方のターンの場合はその2倍)。
                
                シスをターゲット中、味方ジェダイのアーマー突破力が2倍になる。敵と味方はターンメーター操作を受けない(レイドボスを覗く)。`,
                description_eng: ``,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: true,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'フォースと共にあれ',
                name_eng: 'May The Force Be With You',
                image: '/abilityui/tex.abilityui_passive_maytheforcebewithyou.png',
                description_jp: `ターン中、ジェダイ・マスター・ケノービは挑発を無効化(=無視?)する。「有利」の効果を得ている間、ジェダイ・マスター・ケノービはターン開始時に敵全体のステルス効果を解除する。
                
                味方ライトサイドがスキルでジェダイ・マスター・ケノービを指定すると、ケノービの弱体化効果を全て解除し、ケノービは遭遇終了までその味方が持つ10%分のマスターを得る(スタック可能)。ジェダイ・マスター・ケノービがスキルで味方銀河共和国またはライトサイドの非同盟のフォースの使い手を指定すると、味方は遭遇終了までケノービが持つ20%分のマスターを得る(スタック可能)。これらの効果は付与スキルによっては発生せず、またマスターの獲得はユーザーがマスターを1個以上持っている場合にのみ発生する。
                
                味方銀河共和国がターン外に攻撃すると、味方銀河共和国全体のHPとプロテクションが2%回復し、最弱の味方ライトサイドをアシストに呼び、20%の減少ダメージを与える(1ターンに1度のみ)。`,
                description_eng: ``,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '銀河の伝説',
                name_eng: 'Galactic Legend',
                image: '/abilityui/tex.abilityui_passive_galacticlegend.png',
                description_jp: `このユニットはHP割合ダメージと大ダメージ効果によるダメージを軽減する。破壊効果から大ダメージを受け(レイドボスは除く)、スタン効果を無効化する。
                
                このユニットの最大HPと最大プロテクションがレリックアンプのレベルごとに10%上昇し、受けるダメージが30%減少する。`,
                description_eng: ``,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            },
        ],
    },
];

export default characterAbilities;