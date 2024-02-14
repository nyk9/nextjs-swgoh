
export type Abilities = {
    ability_type: string,
    name_jp: string,
    name_eng: string,
    image: string,
    description_jp: string,
    is_omega: boolean,
    is_zeta: boolean,
    is_omicron: boolean,
    is_ultimate: boolean,
}

export type characterAbilities = {
    id: string,
    character_name: string,
    character_image: string,
    ability: Abilities[],
}

const characterAbilities: characterAbilities[] = [
    {
        id: '0-0-0',
        character_name: '0-0-0',
        character_image: '/charui/tex.charui_triplezero.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'フェイタルショック',
                name_eng: 'Fatale Shock',
                image: '/ability/tex.ability_000_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、1ターンの間ショック状態にする。ターゲットがドロイド以外の敵で既にショック状態の場合、代わりに1ターンの間スタン状態にする。このスキルで敵を倒した場合、3ターンの間、「通訳」のスタックを得る(最大3)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: '拷問特化',
                name_eng: 'Specialized in Torture',
                image: '/ability/tex.ability_000_special01.png',
                description_jp: `ターゲットに特殊ダメージを与え、1ターンの間、「拷問」を発生させる(コピー、解除、回避、耐性発揮不可)。ターゲットに既に「拷問」が発生している場合、代わりに敵全体に特殊ダメージを与え、ダークサイドの味方全員に3ターンの間「通訳」のスタックを与える(最大3)。
                
                3対3のグランドアリーナの場合: 拷問効果が2ターン続く。BT-1がアクティブな味方の場合、BT-1と0-0-0のHPとプロテクションが20%回復する。このスキルで敵を倒した場合、遭遇終了まで、ダークサイドの味方全体の(=味方全員の?)攻撃力が10%上昇する(スタック可能) (ダークサイドのドロイドの場合はその2倍)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: true,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '尋問プロトコル',
                name_eng: 'Interrogation Protocol',
                image: '/abilityui/tex.abilityui_passive_translation.png',
                description_jp: `ダークサイドの味方全体の(=味方全員の?)クリティカルダメージが20%上昇する。味方ダークサイドは「拷問」が発生している敵にスキルを使用するたび、3ターンの間「通訳」のスタックを1得る(最大3)。味方ダークサイドは、自身の「通訳」のスタックごとに有効性が5%上昇する(ドロイドは2倍)。
                
                通訳 - 合計スタック数に応じて強化効果が発生する: 
                
                スタックx1: 最大HP30%上昇
                スタックx2: クリティカル率上昇
                スタックx3: 「通訳」を付与できる味方が1体しかいない場合、その味方の通常スキル使用時にクールダウンを1減少させる(1ターンにつき1回限り)`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '血液収集',
                name_eng: 'Drain Organics',
                image: '/abilityui/tex.abilityui_passive_drainorganics.png',
                description_jp: `0-0-0とBT-1のどちらかが「通訳」のスタックを得るたび、もう片方も「通訳」のスタックを得る(1ターンにつき1回限り)。0-0-0のターン開始時、まだターゲットロックが発生していないランダムなドロイド以外の敵に、1ターンのターゲットロックを発生させる。ドロイド以外の敵が戦闘不能になるたび、攻撃した味方のHPとプロテクションが30%回復する。攻撃した味方がダークサイドのドロイドだった場合、2ターンの攻撃力上昇と、15%のターンメーターを得る。攻撃した味方がBT-1の場合、2ターンの攻撃力上昇と、30%のターンメーターを代わりに得る。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            },
        ],
    }, {
        id: '50R-T',
        character_name: "50R-T",
        character_image: '/charui/tex.charui_50rt.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '緻密な勝算',
                name_eng: 'Calculated Odds',
                image: '/ability/tex.ability_50rt_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。もしターゲットが破損状態の場合、攻撃が当てられる場合は(=可能な場合は?)必ずクリティカルヒットになる。味方全体がドロイドで、この攻撃がクリティカルヒットになると、ターン開始時に次の味方に2ターンのアドバンテージが発生する`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'サバック・シャッフル',
                name_eng: 'Sabacc Shuffle',
                image: '/ability/tex.ability_50rt_special01.png',
                description_jp: `敵全体に物理ダメージを3回与え、2ターンの間防御力を低下させる。味方全体が分離主義者以外のドロイドの場合、バトル開始時に(=バトル開始時に味方全員が分離主義者以外のドロイドの場合、?)この攻撃は60%の確率でターゲットロックを発生させ、ダメージ発生ごとにターンメータを10%減少させる(最大30%)。さらに、このスキルを使用するたび、味方の攻撃力が遭遇終了まで10%上昇する(スタック可能)
                
                このスキルが発生している弱体ごとに(=このスキルで発生した弱体化効果ごとに?)味方全体のターンメーターが5%上昇する(最大60%)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'タクティカル・アドバンテージ',
                name_eng: 'Tactical Advantage',
                image: '/ability/tex.ability_50rt_special02.png',
                description_jp: `最弱の味方の弱体を全て解除し、2ターンの間アドバンテージ、ヘルス・スティール、スピードが上昇する(=上昇を得る?)。味方が分離主義者以外のドロイドで、この方法で弱体が解除された場合、その味方は2ターンの攻撃力上昇と抵抗力上昇を得て、最弱の敵に2ターンのスピード低下とターゲットロックを発生させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'スペアパーツ',
                name_eng: 'Spare Parts',
                image: '/abilityui/tex.abilityui_leader_spareparts.png',
                description_jp: `味方ドロイドの防御力が35%、スピードが35上昇し、バトル終了までスペアパーツを得る(コピー、解除、阻止不可)。バトル開始時、味方全員がドロイドの場合、50R-Tの最大HPが30%、スピードが40上昇する。
                
                スペアパーツ: クリティカル率が30%、攻撃力が30%上昇する。このユニットが戦闘不能になると、HPが100%の状態で復活し、2ターンのフォアサイトとプロテクション上昇(50%)を得て、味方全体からこの強化を解除する。また、この復活は阻止できない。
                
                征服モード中、味方全体が分離主義者以外のドロイドの場合: 最初にターンを得た敵が初めて戦闘不能になると、他のアクティブな敵(招集を除く)がいる場合、味方全体(=味方全員?)がHP60%の状態で復活し、2ターンのダメージ耐性と即戦闘不能耐性を得る。これらの強化効果はコピー、解除、阻止できない。この復活は阻止できない。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'VIP待遇',
                name_eng: 'VIP Treatment',
                image: '/abilityui/tex.abilityui_passive_viptreatment.png',
                description_jp: `バトル開始時、最弱の他の味方がVIPを得る。VIPがダメージを受けると、2ターンのステルス効果が発生し、50R-TのHPとプロテクションが5%回復する。50R-Tがダメージを受けると、VIP状態の味方のHPとプロテクションが50R-Tの最大HPとプロテクションの5%分回復し、2ターンの間攻撃力が上昇し、50R-Tは2ターンの間防御力が上昇し、プロテクションが上昇する(スタック可能、最大250%)。バトル開始時に味方全員がドロイドの場合、50R-TとVIPはターンメーター減少を無効化する。
                
                VIP: ダメージを受けると、VIPを利用しているユニットからボーナスを得る`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            },
        ],
    }, {
        id: 'ARC-Trooper',
        character_name: 'ARCトルーパー',
        character_image: '/charui/tex.charui_trooperclone_arc.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'クロスファイア',
                name_eng: 'Crossfire',
                image: '/ability/tex.ability_trooperclone_arc_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。この攻撃前にターゲットに強化がない場合は、ダメージが30%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: '指令を与える',
                name_eng: 'Assign Command',
                image: '/ability/tex.ability_trooperclone_arc_special01.png',
                description_jp: `ターゲットに物理攻撃(=ダメージ?)を与える。ブラスタータレットが存在する場合、指令対象クローンが戦闘不能になるか他の味方へ指令が与えられるまで、味方クローンに指令を与える。
                
                指令: ユニットがターン中にスキルを使用するとブラスタータレットがアシストする`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ARCアーセナル',
                name_eng: 'ARC Arsenal',
                image: '/abilityui/tex.abilityui_passive_commandoassault.png',
                description_jp: `ARCトルーパーはカウンター率35%を得る。ARCトルーパーはブラスター・タレットが存在している間は常に指令を受け、遭遇開始時や復活時に同盟スロットへブラスター・タレットを招集する。ブラスター・タレットはARCトルーパーがターン外に攻撃を行った時にアシストする。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ブラスター・タレット',
                name_eng: 'Blaster Turret',
                image: '/ability/tex.ability_trooperclone_arc_special02.png',
                description_jp: `[通常]「粉砕ブラスト」: 回避不可能攻撃で、ターゲットの強化を全て解除し固定ダメージを与える。
                
                [特殊]「オブジェクト召集」: このオブジェクトは召集したユニットのステータスを引き継ぐ。同盟スロットに空きがある場合にのみ召集される。レイドでは召集できない。このオブジェクトは復活できない。戦闘不能ユニット数に応じた効果に対して、召集されたオブジェクトはカウントされない。他の味方が全て撃破された場合、このオブジェクトはバトルから離脱する。このオブジェクトが同盟スロットにいる場合、他のユニットは復活できない。
                
                [特殊]「オブジェクトの特性」: このオブジェクトが標的とされることはなく、ダメージ耐性とあらゆるステータス効果に耐性を持ち、ターン上昇しない。指令を受けた味方がいなくなった場合、ブラスター・タレットは破壊される。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }
        ],
    }, {
        id: 'B1-Battle-Droid',
        character_name: 'B1バトル・ドロイド',
        character_image: '/charui/tex.charui_b1.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'B1集中攻撃',
                name_eng: 'B1 Barrage',
                image: '/ability/tex.ability_b1_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。ターゲットにターゲットロックが発生していた場合、味方ドロイド全体のHPがリーダーの最大HPの5%分回復、プロテクションが最大プロテクションの5%分回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: '撃て!',
                name_eng: 'Blast Them!',
                image: '/ability/tex.ability_b1_special01.png',
                description_jp: `敵全体に物理ダメージを与え、ターゲットに2ターンのターゲットロックを発生させる。味方分離主義者1体つきドロイド大隊のスタックが1増加する。ドロイド大隊のスタック1つにつき、指定した味方分離主義者のHPが0.5%、プロテクションが0.5%上昇する(=回復する?)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ラジャー ラジャー',
                name_eng: 'Roger Roger',
                image: '/abilityui/tex.abilityui_passive_counterattack.png',
                description_jp: `味方分離主義者がターン中にスキルを使用すると、B1がアシストを行う(ダメージは40%減少)。味方ドロイドが特殊スキルを使用すると、b1のターンメーターが15%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ドロイド大隊',
                name_eng: 'Droid Battalion',
                image: '/abilityui/tex.abilityui_passive_mechanicalmenace.png',
                description_jp: `B1はクリスタルヒットや復活ができない。B1はプロテクションがなく、HP1と「ドロイド大隊」のスタック100を持ち、「ドロイド大隊」を備えている間は戦闘不能または破壊されることはない。「ドロイド大隊」のストック(=スタック?)が全てなくなった際、B1は即座に破壊される。B1は時間経過ダメージを無効化でき、最大HPと最大プロテクションは増加させることができない。
                
                B1がダメージを受けると、受けている弱体化効果を全て解除し、「ドロイド大隊」のスタックを8失う。B1のターン開始時、「ドロイド大隊」のスタックを3得る。
                
                B1はシス三頭レイドでロード・オブ・ベトレイアルからのダメージを無効化する。
                
                ドロイド大隊: スタック1つにつき、B1の攻撃力が2%上昇し、分離主義者の味方全体の抵抗力とクリティカル回避力が0.5%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            },
        ],
    }, {
        id: 'B2-Super-Battle-Droid',
        character_name: 'B2スーパー・バトル・ドロイド',
        character_image: '/charui/tex.charui_b2.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'ヘビーアーム',
                name_eng: 'Heavy Arms',
                image: '/ability/tex.ability_b2_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。ターゲットロックが発生していた場合、2ターンのクリティカルダメージ低下を発生させる。そうでない場合は、2ターンの間ターゲットロック状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: '一掃',
                name_eng: 'Mow Down',
                image: '/ability/tex.ability_b2_special01.png',
                description_jp: `敵全体に物理ダメージを与え、全ての強化を解除する。さらに80%の確率で2ターンの強化無効を発生させる(ダメージ前に適用)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '容赦なき集中砲火',
                name_eng: 'Relentless Barrage',
                image: '/abilityui/tex.abilityui_passive_targetlock.png',
                description_jp: `他の味方が攻撃を回避される、または攻撃でダメージを受けると、40%の確率でB2のターンメーターが100%上昇する。ターゲットロック状態の敵のクリティカル率が25%、回避力が25%減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'リアクティブ・プロトコル',
                name_eng: 'Reactive Protocol',
                image: '/abilityui/tex.abilityui_passive_faction_separatist.png',
                description_jp: `味方分離主義者が攻撃を回避される、または攻撃でダメージを受けると、40%の確率でB2のクールダウンが1減少する。B2に弱体効果が発生すると、他の味方分離主義者ドロイド全体(=全員?)のターンメーターが5%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            },
        ],
    },{
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
                is_omega: false,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            },
        ],
    }, {
        id: 'Jedi-Knight-Cal-Kestis',
        character_name: 'ジェダイ・ナイト・カル・ケスティス',
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
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            },
        ],
    },
];

export default characterAbilities;