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
    ability: Abilities[]
}

const characterAbilities: characterAbilities[] = [
    {
        id: 'General-Kenobi',
        character_name: "ケノービ将軍",
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
            }
        ]
    }
]

export default characterAbilities;