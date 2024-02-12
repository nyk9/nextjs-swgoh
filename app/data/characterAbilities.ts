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
                ability_type: '通常攻撃',
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
                description_eng: `Requires at least 50% Ultimate Charge to activate
                
                Ultimate Charge: Jedi Master Kenobi gains Ultimate Charge when he uses his abilities. If Jedi Master Kenobi is the Leader, he also gains 3% Ultimate Charge when another Light Side ally uses a Basic ability, doubled during their turn.
                
                If at the start of battles there was a Light Side Unaliogned Force User ally that is also Galactic Republic, all Jedi allies ignore Protection when targeting a Sith enemy and Sith enemies can't counter attack for the rest of battle. Dispel all debuffes on Light Side allies. All other Light Side allies gain a percentage of Mastery (stacking) equal to the amout of Ultimate Charge used with this ability, doubled at 100% Ultimate Charge, until the end of the encounter.
                
                If less than 100% Ultimate Charge was used, Jedi Master Kenobi gains the High Groud buff for 2 turns, which can't be copied, dispelled, or prevented. All Galactic Republic allies gain Protection Up (20%) for 3 turns which can't be dispelled or prevented.
                
                If 100% Ultimate Charge was used, Jedi Master Kenobi gains the High Ground buff for 5 turns, which can't be copied, dispelled, or prevented. All Light Side allies recover 60% Health and Protection, and all Galactic Republic allies gain Protection Up (50%) for 3 turns which can't be dispelled or prevented.
                
                High Ground: Deals 35% more damage with out of turn attaks; +100% Counter Chance; -35% Speed; can't gain Ultimate Charge`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: true,
            }, {
                ability_type: '通常攻撃',
                name_jp: '烈火の剣さばき',
                name_eng: 'Ardent Bladework',
                image: '/ability/tex.ability_globiwan_basic.png',
                description_jp: 'ターゲットに物理ダメージを与え、ターゲットがダークサイドの場合、1ターンのスキルブロックを発生させる(銀河の伝説を覗く)。防御突破力上昇が発生していない最弱の味方ライトサイドに2ターンの防御突破力上昇が発生する。ジェダイ・マスター・ケノービのターン中にこのスキルを使用すると、アルティメットチャージが9%上昇する。',
                description_eng: "Deal Physical damage to target enemy and if the target was Dark Side, inflict Ability Block for 1 turn (excludes Galactic Legends). The weakest Light Side ally without Defense Penetration Up gains it for 2 turns. If this ability is used during Jedi Master Kenobi's turn, he gains 9% Ultimate Charge.",
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
                description_eng: `Deal Physical damage to target enemy and inflict Vulnerable and Healing Immunity for 2 turns, which can't be dispelled or resisted. Call target Light Side ally to assist, dealing 50% more damage. If Jedi Master Kenobi was selected, he is not called to assist and instead gains 12% Ultimate Charge, doubled if he is the Leader, and this ability deals 50% more damage on subsequent uses (stacking, max 10 stacks).`,
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
                description_eng: `Light Side allies recover 40% Health and Protection and gain Foresight and Tenacity Up for 3 turns. Galactic Republic and Light Side Unaligned Force User allies gain Protection Up (20%) for 2 turns. Target other Galactic Republic ally gains Damage Immunity for 1 turn, which cna't be copied, dispelled, or prevented, and their cooldowns are reset (excludes granted abilities).
                
                Jedi Master Kenobi gains 1 % Ultimate Charge (max 30%) for each buff on all Light Side allies.`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: true,
            },{
                ability_type: 'リーダースキル',
                name_jp: '共鳴する意志',
                name_eng: 'Harmonious Will',
                image: '/abilityui/tex.abilityui_passive_harmoniouswill.png',
                description_jp: `味方ライトサイド全体のマスターが25%、スピードが30、最大HPが25%上昇する。味方銀河共和国は4ターンのプロテクション上昇を得る(75%、解除不可)。
                
                ジェダイ・マスター・ケノービに「有利」の効果が発生している間、味方ライトサイドは受けるダメージが20%減少し、挑発を無効(=無視？)し弱体化効果を全て耐性発揮する。また味方銀河共和国がターン中にスキルを使用すると、ジェダイ・マスター・ケノービがアシストする。
                
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
            }
        ],
    },
];

export default characterAbilities;