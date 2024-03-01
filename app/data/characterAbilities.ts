
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
    }, {
        id: 'BB-8',
        character_name: 'BB-8',
        character_image: '/charui/tex.charui_bb8.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'アーク・ウェルダー',
                name_eng: 'Arc Welder',
                image: '/ability/tex.ability_bb8_tfa_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンの間抵抗力を低下させる。ターゲットが既に抵抗力を低下させられている場合、2ターンの間めまい状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: '秘匿データ転送',
                name_eng: 'Covert Data Transfer',
                image: '/ability/tex.ability_bb8_tfa_special01.png',
                description_jp: `3ターンの間、ユニーク強化「機密情報」がBB-8およびこの効果を受けていないランダムな味方1体に発生する。さらに機密情報効果が発生している味方1体ごとに、BB-8のターンメーターが8%上昇する。アクティブな味方が全てドロイドの場合、BB-8が1ターンの挑発を行う。
                
                機密情報: 有効性が25%上昇し、他の味方が特殊スキルを使用するとそのユニットに3ターンの間機密情報効果が発生する。また、機密情報効果の発生している味方1体ごとに「イルミネート・デスティニー」のクールダウンが1減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'イルミネート・デスティニー',
                name_eng: 'Illuminated Destiny',
                image: '/ability/tex.ability_bb8_tfa_special02.png',
                description_jp: `味方全体から全ての弱体を解除し、敵全体を2ターンの間エクスポーズ状態にする。味方全体のターンメーターが80%上昇し、4 ターンの間アドバンテージが発生してクリティカル率、クリティカルダメージ、攻撃力、スピードが上昇する。味方ドロイドおよびレジスタンスのプロテクションが20%回復する。このスキルはクールダウン状態から開始し、回避できない。味方ドロイドがクリティカルヒットを決めると、このスキルのクールダウンが1減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '危機順応',
                name_eng: 'Roll with the Punches',
                image: '/abilityui/tex.abilityui_passive_counterattack.png',
                description_jp: `BB-8に80%のカウンター率が発生する。BB-8がターン外に攻撃を行うと、ランダムな味方レジスタンス1体がアシストに呼ばれる。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '自己防衛プロトコル',
                name_eng: 'Self-Preservation Protocol',
                image: '/abilityui/tex.abilityui_passive_foresight.png',
                description_jp: `BB-8がダメージを受けると、50%の確率で2ターンの間フォアサイトが発生する。各遭遇開始時、BB-8がアクティブな場合、味方ドロイドのターンメーターがアクティブな味方ドロイド1体につき8%上昇する。BB-8が回避に成功すると、味方ドロイドのHPが8%、プロテクションが8%回復する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            },
        ],
    }, {
        id: 'BT-1',
        character_name: 'BT-1',
        character_image: '/charui/tex.charui_bt1.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'オーバーチャージ・レーザー',
                name_eng: 'Overcharged Lasers',
                image: '/ability/tex.ability_bt1_basic.png',
                description_jp: `ターゲットに物理ダメージを3回与え、2ターンの間、時間経過ダメージのスタックを発生させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: '破壊工作',
                name_eng: 'Agent of Destruction',
                image: '/ability/tex.ability_bt1_special01.png',
                description_jp: `敵全体に物理ダメージを与え、2ターンの時間経過ダメージのスタックと1ターンのエクスポーズを発生させる。ターゲットにターゲットロックが発生している場合、炎上を与え、さらに2ターンの時間経過ダメージのスタックを発生させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '殺りくの相棒',
                name_eng: 'Homicidal Counterpart',
                image: '/abilityui/tex.abilityui_passive_homicidalcounterpart.png',
                description_jp: `バトル開始時、味方ドロイドごとにBT-1のクリティカルダメージが10%、味方ダークサイドごとに有効性が10%、味方ならず者ごとにスピードが5上昇する。0-0-0がアクティブな味方の場合、付与スキル「すべて抹殺せよ」を得る。0-0-0が特殊スキルを使用するたび、BT-1がアシストを行う(ダメージは40%減少)。
                
                3対3のグランドアリーナの場合: BT-1または0-0-0は敵を倒すたび、そのクールダウンがリフレッシュされ、ターンメーターが30%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true,
                is_ultimate: false,
            }, {
                ability_type: '付与スキル',
                name_jp: 'すべて抹殺せよ',
                name_eng: 'Kill Them All',
                image: '/ability/tex.ability_bt1_special02.png',
                description_jp: `敵全体に物理ダメージを与え、0-0-0をアシストに呼ぶ。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ブラストメクプロトタイプ',
                name_eng: 'Blastomech Prototype',
                image: '/abilityui/tex.abilityui_passive_dumpygunboy.png',
                description_jp: `バトル開始時、BT-1の攻撃力が100%上昇する。BT-1は敵を倒すたび、付与スキル「めちゃくちゃ」とボーナスターンを得る。このボーナスターン中、BT-1は自身のスキルブロックを取り除いて「めちゃくちゃ」のみを使用できる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '付与スキル',
                name_jp: 'めちゃくちゃ',
                name_eng: 'Haywire',
                image: '/ability/tex.ability_bt1_special03.png',
                description_jp: `他のユニット全体に物理ダメージを与える(味方全体は75%軽減)。このダメージで味方や敵は戦闘不能にならない。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            },
        ],
    }, {
        id: 'C-3PO',
        character_name: 'C-3PO',
        character_image: '/charui/tex.charui_c3p0.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'バッフリング・トリック',
                name_eng: 'Baffling Trick',
                image: '/ability/tex.ability_c3p0_basic.png',
                description_jp: `C-3POは3ターンの混乱(ユニーク弱体)を発生させる(最大3回スタック可能、回避/コピー不可)。ターゲットが既に混乱状態の場合、現在のスタックの全ての持続時間が3ターンにリセットされる。ターゲットのターンメーターが6%減少し、C-3POの通訳効果のスタックごとにさらに3%減少する(詳細はプロトコル・ドロイドの通訳の説明を確認)。
                
                混乱 - 状態異常は、累積のスタック数によって増えていく:
                1: 強化効果不可
                2: カウンター、アシスト、ボーナスターンメーター不可(レイドボスと銀河の伝説: カウンター率が30%低下)
                3: ユニットが通常スキル使用時、クールダウンを1増加させる。耐性発揮不可(レイドボスと銀河の伝説: 防御力50%低下、防御力低下はスタックしない)`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'なんですって！',
                name_eng: 'Oh My Goodness!',
                image: '/ability/tex.ability_c3p0_special01.png',
                description_jp: `C-3POは2ターンの有効性上昇とステルス効果を得る。その後、C-3POとその他指定した味方に3ターンの通訳効果が付与される。C-3POは通訳効果をその他味方全体をアシストに呼ぶ(ダメージ50%減少)。
                
                (詳細はプロトコル・ドロイドの通訳の説明を確認)`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'プロトコル・ドロイド',
                name_eng: 'Protocol Droid',
                image: '/abilityui/tex.abilityui_passive_translation.png',
                description_jp: `C-3POのスピードが20上昇する。C-3POがアクティブな間、味方銀河共和国、反乱軍、レジスタンス、イウォークは特殊スキルを使用するたび、3ターンの通訳効果を得る(最大3スタック)。通訳効果はコピーできない。ユニットに既に通訳効果が発生している場合、そのユニットの全てのスタックの有効時間が3ターンにリセットされる。通訳を適用できる味方が全て戦闘不能になった場合、通訳の全てのスタックはその効果を失う。
                
                通訳 - 強化効果は、累積のスタック数によって増えていく:
                1. 最大HP+30%上昇
                2. クリティカル率+15%上昇
                3. 通訳の効果を付与できる味方が1体だけしかない場合、この味方が通常スキル使用時、このユニットのクールダウンが1減少する(1ターンに1度のみ)`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '置いて行かないで！',
                name_eng: 'Wait for Me!',
                image: '/abilityui/tex.abilityui_passive_stealth.png',
                description_jp: `C-3POとR2-D2の回避力が、自身の通訳効果のスタック数ごとに10%上昇する。遭遇開始時、C-3POとR2-D2は3ターンの通訳効果を得る。戦う味方がいなくなると、C-3POはバトルから逃走する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '仲裁',
                name_eng: 'Intermediary',
                image: '/abilityui/tex.abilityui_passive_sootheall.png',
                description_jp: `味方全体の防御突破力が10%上昇する。味方の銀河共和国あるいはイウォークユニットがそれぞれ異なる非ユニーク、非プロテクション強化効果を得るたび、それらユニットのプロテクションが2ターンの間15%上昇する(この効果自体はスタックしない)。スタックしている通訳効果1つごとに、銀河共和国ユニットの防御突破力が10%上昇する。イウォークは上昇量2倍。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'サイボーグ関係',
                name_eng: 'Cyborg Relations',
                image: '/abilityui/tex.abilityui_passive_uniqueability.png',
                description_jp: `味方全体の有効性が10%上昇する。味方反乱軍あるいはイウォークが通常スキルを使用すると、ターゲットを2ターンの間エクスポーズ状態させる(回避不可)。スタックしている通訳効果1つごとに、味方反乱軍の有効性が10%上昇する。イウォークは上昇量2倍。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '苛立たしい仲裁',
                name_eng: 'Fretful Medator',
                image: '/abilityui/tex.abilityui_passive_soothe.png',
                description_jp: `味方全体のクリティカルダメージが10%上昇する。味方レジスタンスあるいはイウォークが特殊スキルを使用すると、ターゲットに2ターンの攻撃力低下を発生させる(回避不可)。スタックしている通訳効果1つごとに、味方レジスタンスのクリティカルダメージが10%上昇する。イウォークは上昇量2倍。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            },
        ],
    }, {
        id: 'Threepio-Chewie',
        character_name: 'C-3PO&チューイ',
        character_image: '/charui/tex.charui_chewbacca_c3po.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'フランティックショット',
                name_eng: 'Frantic Shot',
                image: '/ability/tex.ability_chew3po_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンの間回避力を低下させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'キラキラのおとり',
                name_eng: 'Shining Distraction',
                image: '/ability/tex.ability_chew3po_special01.png',
                description_jp: `C-3PO&チューイの弱体化効果を全て解除する。味方反乱軍のプロテクションが15%回復し、2ターンのアドバンテージを得る。敵全体の強化効果を全て解除し、2ターンの間暗闇状態にする。このスキルは回避できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'チューイの怒り',
                name_eng: "Chewie's Rage",
                image: '/ability/tex.ability_chew3po_special02.png',
                description_jp: `敵全体に物理ダメージを与える。バトル中に戦闘不能になった敵1体につき、追加でダメージを与える(最大5回)。C-3PO&チューイはこのスキルで敵を戦闘不能にするたび、バトル終了まで攻撃力が10%上昇する(スタック可能)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'みなさんに伝えないと',
                name_eng: 'I Must Tell The Others',
                image: '/abilityui/tex.abilityui_passive_c3po.png',
                description_jp: `味方リーダーが銀河の伝説以外の反乱軍である場合、C-3PO&チューイは最初の遭遇開始時に最大HP、最大プロテクション、攻撃力、防御力、有効性、抵抗力の40%を獲得し、味方反乱軍はその半分の量を獲得する。味方反乱軍のクリティカル回避力が15%上昇する。
                
                味方反乱軍がスキルを使用するたび、C-3PO&チューイがアシストを行い、30%の減少ダメージを与える(1ターンに1度のみ)。C-3PO&チューイが戦闘不能になった場合、味方反乱軍が復活するたび、C-3PO&チューイもHPとプロテクションが50%の状態で復活する。
                
                敵は暗闇状態の間、抵抗力が50%減少し、ターン外に攻撃できなくなる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            },
        ]
    }, {
        id: 'CC-2224-Cody',
        character_name: 'CC-2224 "コーディ"',
        character_image: '/charui/tex.charui_trooperclone_cody.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'アルファストライク',
                name_eng: 'Alpha Strike',
                image: '/ability/tex.ability_commandercody_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、ターンメーターが20%上昇する。そのターゲットのHPが半分以上ある場合、ターンメーターがさらに20%上昇する。そのターゲットのターンメーターが半分以下の場合も、ターンメーターがさらに20%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'AT-TEマスドライバーキャノン',
                name_eng: 'AT-TE Mass-Driver Cannon',
                image: '/ability/tex.ability_commandercody_special01.png',
                description_jp: `ターゲットに特殊ダメージを与え、他の敵全体には35%少ないダメージを与える。この攻撃が2体以上にクリティカルヒットした場合、メインターゲットは1ターンの間スタン状態になる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: '第212攻撃',
                name_eng: 'The 212th Attack',
                image: '/ability/tex.ability_commandercody_special02.png',
                description_jp: `全味方クローンとランダムな味方1体をアシストに呼ぶ。アシストのダメージは40%減少する。アシストがクリティカルヒットを決めるたびに、このスキルのクールダウンが1減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'ゴースト・カンパニー・コマンダー',
                name_eng: 'Ghost Company Commander',
                image: '/abilityui/tex.abilityui_passive_crit_buff.png',
                description_jp: `味方クローンのクリティカル率が30%上昇し、他の味方はその半分量上昇する。生存している味方クローン1体ごとにコーディの防御力が60%上昇し、他の味方クローンはその半分量上昇する。味方クローンは通常スキルを使用すると最大プロテクションが5%回復する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            },
        ]
    }, {
        id: 'CT-21-0408-Echo',
        character_name: 'CT-21-0408 "エコー"',
        character_image: '/charui/tex.charui_trooperclone_echo.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '援護攻撃',
                name_eng: 'Supporting Fire',
                image: '/ability/tex.ability_echo_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、ターンメーターが半分以下のランダムな味方1体のターンメーターを15%上昇させる。エコーにクリティカルダメージ上昇が発生している場合、与えるダメージが15%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'EMPグレネード',
                name_eng: 'EMP Grenade',
                image: '/ability/tex.ability_echo_special01.png',
                description_jp: `敵全体に特殊ダメージを与え、強化を全て解除する。敵ドロイドを1ターンの間スタン状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '了解',
                name_eng: 'Copy That',
                image: '/abilityui/tex.abilityui_leader_default.png',
                description_jp: `味方クローン・トルーパーまたは第501軍団がターン中に通常スキルを使用すると、エコーがアシストする。味方クローン・トルーパーまたは第501軍団の攻撃がクリティカルヒットすると、エコーの次の攻撃がクリティカルヒットになる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ドミノ分隊',
                name_eng: 'Domino Squad',
                image: '/abilityui/tex.abilityui_passive_501.png',
                description_jp: `味方クローン・トルーパーと第501軍団のクリティカル率が20%上昇する。敵が味方クローン・トルーパーまたは第501軍団の攻撃回避時、エコーが敵の最大HP20%分のダメージをその敵に与える(回避不可)。
                
                ファイブスがいる場合、ファイブスの挑発中エコーの与えるダメージが100%上昇し、ファイブスが挑発していない際は防御力が100%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            },
        ]
    }, {
        id: 'CT-5555-Fives',
        character_name: 'CT-5555 "ファイブス"',
        character_image: '/charui/tex.charui_trooperclone_fives.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'デュアルDC-17ブラスター',
                name_eng: 'Dual DC-17 Blasters',
                image: '/ability/tex.ability_ct5555_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンの間スピードを低下させる。敵がスピード低下を受けている場合、再攻撃を行う。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: '支援攻撃',
                name_eng: 'Cover Fire',
                image: '/ability/tex.ability_ct5555_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、指定した味方をアシストに呼ぶ。アシストする味方がクローン・トルーパーまたは第501軍団の場合、両攻撃ユニットのダメージが35%上昇する。ターン終了時に挑発している味方がいない場合、ファイブスが2ターンの間挑発する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'リーダースキル',
                name_jp: '熟練クローン・トルーパー',
                name_eng: 'Veteran Clone Trooper',
                image: '/abilityui/tex.abilityui_passive_def.png',
                description_jp: `味方クローン・トルーパーの防御力が50%上昇し、他の味方はその半分量上昇する。味方第501軍団はクリスタルヒットを与えると、2ターンの時間経過プロテクション(5%)を得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ドミノ分隊',
                name_eng: 'Domino Squad',
                image: '/abilityui/tex.abilityui_passive_501.png',
                description_jp: `ファイブスのカウンター率が85%上昇する。味方クローン・トルーパーまたは第501軍団がダメージを受けると、ファイブスのターンメーターが15%上昇し、他の味方はその半分量上昇する。
                
                CT-21-0408 "エコー"がいる場合、挑発中はファイブスの防御力が100%上昇し、挑発していない際は与えるダメージが100%増加する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'タクティカル・アウェアネス',
                name_eng: 'Tactical Awareness',
                image: '/abilityui/tex.abilityui_passive_heal.png',
                description_jp: `ファイブスは蘇生できない。ファイブスがアクティブな間に味方第501軍団クローン・トルーパーが戦闘不能になると、その味方のHPが100回復し、ターン終了時にファイブスが戦闘不能になる。
                
                この方法でファイブスが戦闘不能になると、バトル終了まで味方第501軍団クローン・トルーパーの最大HP、最大プロテクション、スピード、攻撃力が上昇する。
                (=この方法でファイブスが戦闘不能になると、バトル終了まで味方第501軍団クローン・トルーパーは自身のステータスに加えて、ファイブスの分の最大HP、最大プロテクション、スピード、攻撃力を得る。?)`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true,
                is_ultimate: true,
            },
        ]
    }, {
        id: 'CT-7567-Rex',
        character_name: 'CT-7567 "レックス"',
        character_image: '/charui/tex.charui_trooperclone_rex.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '妨害ショット',
                name_eng: 'Impeding Shot',
                image: '/ability/tex.ability_rex_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、ターンメーターを25%減少させる。効果がまだ発生していないランダムな味方第501軍団クローン・トルーパーに、1ターンの有効性上昇を付与する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: '編隊形成',
                name_eng: 'Form Up',
                image: '/ability/tex.ability_rex_special01.png',
                description_jp: `味方全体の弱体を全て解除し、3ターンの抵抗力上昇を付与する。味方クローン・トルーパーのターンメーターが60%上昇し、この方法で解除した弱体1つにつきさらにターンメーターが10%上昇、他の味方はその半分量上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'エアリアル・アドバンテージ',
                name_eng: 'Aerial Advantage',
                image: '/ability/tex.ability_rex_special02.png',
                description_jp: `ターゲットに物理ダメージを与え、さらにこの遭遇中美味方クローン・トルーパーが取ったターンごとにターゲットの最大HP25%分の追加ダメージを与える。このスキルはクールダウン状態から開始する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,

            }, {
                ability_type: 'リーダースキル',
                name_jp: '戦友',
                name_eng: 'Brothers in Arms',
                image: '/abilityui/tex.abilityui_passive_hp.png',
                description_jp: `味方クローン・トルーパーと第501軍団の最大HPが20%上昇する。第501軍団クローン・トルーパーには2倍、他の味方には半分の効果が発生する。また、味方がクリティカルヒットを受けると、味方クローン・トルーパー全体のターンメーターが15%上昇し、他の味方はその半分量上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '第501軍団のキャプテン',
                name_eng: 'Captain of the 501st',
                image: '/abilityui/tex.abilityui_passive_501.png',
                description_jp: `バトル開始時、戦闘不能でない味方第501軍団1体につき、味方第501軍団全体のスピードが4%上昇する。味方第501軍団クローン・トルーパーは各ターン開始時にスキルのクールダウンを1減少させる。
                
                味方にアソーカ・タノがいる場合、アソーカのHPが100%を切るとアソーカに2ターンのクリティカルヒット耐性が発生する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            },
        ]
    }, {
        id: 'HK-47',
        character_name: 'HK-47',
        character_image: '/charui/tex.charui_hk47.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'リクエスト: タオレロ、ミートバッグ！',
                name_eng: 'Request: Die, Meatbag!',
                image: '/ability/tex.ability_hk47_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターン間攻撃力が上昇する。弱体を受けている敵へのクリティカルダメージが30%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'ハボック',
                name_eng: 'Havoc',
                image: '/ability/tex.ability_hk47_special01.png',
                description_jp: `敵全体に固定ダメージ(防御力無視、クリティカルヒット不可)を与え、弱体が発生している各敵にさらにその半分のダメージを与える。その後、敵全体に2ターンの抵抗力低下を発生させる。この攻撃は敵ジェダイに対してダメージが20%増加(カウンター不可)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'アサシネーション・プロトコル',
                name_eng: 'Assassination Protocl',
                image: '/ability/tex.ability_hk47_special02.png',
                description_jp: `ターゲットの強化効果を全て解除し、物理ダメージを与える。この攻撃は回避できず、ジェダイに対しては+100%の増加ダメージを与える。ターゲットにデスマークまたは恐怖が発生している場合、このスキルのクールダウンがリセットされる。
                
                このスキルはクールダウン状態から開始し、敵に恐怖が発生するとクールダウンが1減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'ターゲット排除',
                name_eng: 'Target Elimination',
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `味方ドロイドのクリティカル率が30%、クリティカルダメージが20%上昇し、クリティカルヒット時にターンメーターが10%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '自己再生',
                name_eng: 'Self-Reconstruction',
                image: '/abilityui/tex.abilityui_passive_heal_buff.png',
                description_jp: `敵の強化効果が切れると、HK-47のHPが5%、プロテクションが5%回復する。HK-47がターン中にスキルを使用すると、ターゲットにデスマークまたは恐怖が発生している場合、ダメージが25%増加する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '設計者への忠誠',
                name_eng: 'Loyalty to the Maker',
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `HK-47のリーダーがダース・レヴァンである場合、HK-47に次の効果が発生する:
                
                - 防御力、攻撃力、有効性、抵抗力+50%
                
                - 遭遇開始時、敵ジェダイ1体ごとにクリティカル回避力+30%
                
                - 味方シス帝国が初めて戦闘不能になった際、「アサシネーション・プロトコル」のクールダウンがリセットされる
                
                - プロテクション上昇が発生している敵はボーナスターンメーターを得られない。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            },
        ]
    }, {
        id: 'IG-100-MagnaGuard',
        character_name: 'IG-100マグナガード',
        character_image: '/charui/tex.charui_magnaguard.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'エレクトロスタッフ・アサルト',
                name_eng: 'Electrostaff Assault',
                image: '/ability/tex.ability_magnaguard_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、70%の確率で2ターンのターゲットロックを発生させる。
                
                ターゲットに既にターゲットロックが発生している場合、マグナガードは自身とランダムな味方分離主義者1体の弱体を解除する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'ディスラプション',
                name_eng: 'Disruption',
                image: '/ability/tex.ability_magnaguard_special01.png',
                description_jp: `敵全体に物理ダメージを与え、味方分離主義者全体の弱体を全て解除する。2ターンの間、マグナガードとグリーヴァス将軍のスピードが上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'スタニング・ストライク',
                name_eng: 'Stunning Strike',
                image: '/ability/tex.ability_magnaguard_special02.png',
                description_jp: `ターゲットに物理ダメージを与えて強化を全て解除し、1ターンの間スタン状態にする。解除される強化効果が無い場合、このスキルのクールダウンをリセットする。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '容赦なき襲撃',
                name_eng: 'Relentless Assault',
                image: '/abilityui/tex.abilityui_passive_taunt.png',
                description_jp: `マグナガードがスキルを使用すると、カウンター率が70%上昇し、1ターンの挑発を行う。(=マグナガードはカウンター率が70%上昇し、スキルを使用すると1ターンの挑発を行う?)グリーヴァス将軍とマグナガードはターゲットロック状態の敵1体につき、抵抗力が20%、防御力が20%上昇する。
                
                グリーヴァス将軍が味方にいる場合、各遭遇開始時、味方分離主義者ドロイド全体に1ターンのステルス効果が発生する。
                
                マグナガードのHPが初めて1%になると、ボーナスターンを1回得た後で戦闘不能になる。ボーナスターン中はマグナガードの攻撃力が100%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }
        ]
    }, {
        id: 'IG-11',
        character_name: 'IG-11',
        character_image: '/charui/tex.charui_ig11_nurse.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'センサリーアドバンテージ',
                name_eng: 'Sensory Advantage',
                image: '/ability/tex.ability_ig11_nurse_basic.png',
                description_jp: `ターゲットと最弱の敵に物理ダメージを与える。敵全体に弱体化効果が発生している場合、IG-11のプロテクションが20%回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: '機能: プロテクト',
                name_eng: 'FUNCTION: PROTECT',
                image: '/ability/tex.ability_ig11_nurse_special01.png',
                description_jp: `敵全体に物理ダメージを与え、2ターンの抵抗力低下を発生させる。時間経過ダメージまたはショック状態の敵に再度物理ダメージを与える。IG-11が2ターンの間挑発を行う。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'ナースドロイド・プロトコル',
                name_eng: 'Nurse Droid Protocol',
                image: '/ability/tex.ability_ig11_nurse_special02.png',
                description_jp: `指定した味方のHPがIG-11の最大HPの30%分回復し、他の味方全員はその半分回復する。IG-11が挑発中の場合、IG-11に2ターンのヘルス・スティール上昇と報復効果が発生する。味方ドロイドとならず者に2ターンのフォアサイトが発生する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '世話好き',
                name_eng: "Child's Favor",
                image: '/abilityui/tex.abilityui_passive_ig11.png',
                description_jp: `バトル開始時、Ig-11の最大プロテクションが自身の最大HPの20%分上昇する。クイールが味方にいる場合は40%分上昇し、各遭遇開始時に2ターンの挑発を行う。
                
                味方ドロイドまたはならず者が敵のターン中に攻撃するたび、IG-11がアシストする(1ターン味方1体につき1度限り)。
                
                IG-11のターン開始時、IG-11は味方ドロイドとならず者の弱体化効果を全て解除する。この方法で味方の弱体化効果が解除されるたび、IG-11はランダムな敵に2ターンの時間経過ダメージを発生させる(回避不可)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false,
                is_ultimate: false,
            }
        ]
    }, {
        id: 'IG-12-Grogu',
        character_name: 'IG-12 & グローグー',
        character_image: '/charui/tex.charui_ig12.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'いいえ',
                name_eng: 'No.',
                image: '/ability/tex.ability_ig12_basic.png',
                description_jp: `ターゲットに2ターンの回復無効を発生させ(回避、耐性発揮不可)、ランダムなライトサイドの味方マンダロリアンをアシストに呼ぶ(ダメージは50%減少)。IG-12 & グローグーのターン中に使用した場合、1ターンのスキルブロックを発生させ(回避、耐性発揮不可)、アシストする味方のダメージペナルティを解除する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'はい',
                name_eng: 'Yes.',
                image: '/ability/tex.ability_ig12_special01.png',
                description_jp: `最弱の味方と指定した味方の弱体化効果を全て解除し、HPがIG-12 & グローグーの最大HPの30%分回復する。味方全体が2ターンの防御力上昇を得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: '特殊スキル',
                name_jp: 'いいえ。いいえ。いいえ。',
                name_eng: 'No. No. No.',
                image: '/ability/tex.ability_ig12_special02.png',
                description_jp: `指定したその他の味方をアシストに呼ぶ(=指定した味方をアシストに呼ぶ?)。敵全体に2ターンの暗闇とめまいを発生させる(回避不可)。敵全体の強化効果を全て解除し、ターゲットを1ターンの間スタン状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false,
                is_ultimate: false,
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'はい。はい。はい。',
                name_eng: 'Yes. Yes. Yes.',
                image: '/abilityui/tex.abilityui_passive_yesyesyes.png',
                description_jp: `バトル開始時にマンダロリアン(ベスカー・アーマー)が味方にいる場合、IG-12 & グローグーはバトル終了までならず者タグを得る。IG-12 & グローグーのカウンター率が100%上昇する。バトル開始時のライトサイドの味方マンダロリアン(召集された味方を除く)ごとに、IG-12 & グローグーの最大HPが20%上昇。
                
                IG-12 & グローグーのターン開始時、ライトサイドのマンダロリアンの味方全体がIG-12 & グローグーの最大HPの10%分回復する。HPが最大の場合、代わりに1ターンの間、攻撃力上昇とプロテクション上昇(10%)を得る。Ig-12 & グローグーがスキルを使用するたび、ランダムなライトサイドの味方マンダロリアンがアシストし、使用したスキルに応じて追加の効果を得る。
                
                「はい」: アシストする味方のクールダウンが1減少する。
                
                「いいえ。いいえ。いいえ。」: アシストする味方が20%の増加ダメージを与え、再度アシストを行う。
                
                ターン開始時に戦っている味方がいない場合、IG-12 & グローグーはバトルから逃走する。
                
                テリトリーウォーズの場合: ライトサイドの味方マンダロリアンが初めてプロテクションを失うたび、IG-12 & グローグーはボーナスターンを得て「いいえ。いいえ。いいえ。」のクールダウンをリセットする。IG-12 & グローグーがスキルを使用するたび追加の味方を呼び、使用したスキルに応じた追加効果を得る。
                
                「はい」: アシストする味方が10%増加ダメージを与え、プロテクションが20%回復する。
                
                「いいえ。いいえ。いいえ。」: アシストする味方のターンメーターが20%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true,
                is_ultimate: false,
            },
        ]
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