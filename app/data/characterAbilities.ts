// スキル説明文の特殊記号等のメモ:
// ** : 囲まれたところは黄色文字(特殊効果、スキル等が該当)
// $$ : 囲まれたところは白色+太字(オミクロンが該当)
// ## : 囲まれたところはオレンジ色(アルティメットチャージが該当)
// ++ : 囲まれたところは薄水色(ロールなど)
// @@ : 囲まれたところは赤色(ダークサイド)
// ^^ : 囲まれたところは青色(ライトサイド)

import { CharacterAbilities } from "@/types/abilities/abilities";

const characterAbilities: CharacterAbilities[] = [
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
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 5,
                name_jp: '拷問特化',
                name_eng: 'Specialized in Torture',
                image: '/ability/tex.ability_000_special01.png',
                description_jp: `ターゲットに特殊ダメージを与え、1ターンの間、「拷問」を発生させる(コピー、解除、回避、耐性発揮不可)。ターゲットに既に「拷問」が発生している場合、代わりに敵全体に特殊ダメージを与え、ダークサイドの味方全員に3ターンの間「通訳」のスタックを与える(最大3)。
                
                $3対3のグランドアリーナの場合:$ 拷問効果が2ターン続く。BT-1がアクティブな味方の場合、BT-1と0-0-0のHPとプロテクションが20%回復する。このスキルで敵を倒した場合、遭遇終了まで、ダークサイドの味方全体の(=味方全員の?)攻撃力が10%上昇する(スタック可能) (ダークサイドのドロイドの場合はその2倍)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: true
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '尋問プロトコル',
                name_eng: 'Interrogation Protocol',
                image: '/abilityui/tex.abilityui_passive_translation.png',
                description_jp: `ダークサイドの味方全体の(=味方全員の?)クリティカルダメージが20%上昇する。味方ダークサイドは「拷問」が発生している敵にスキルを使用するたび、3ターンの間「通訳」のスタックを1得る(最大3)。味方ダークサイドは、自身の「通訳」のスタックごとに有効性が5%上昇する(ドロイドは2倍)。
                
                *通訳* - 合計スタック数に応じて強化効果が発生する: 
                
                *スタックx1:* 最大HP30%上昇
                *スタックx2:* クリティカル率上昇
                *スタックx3:* 「通訳」を付与できる味方が1体しかいない場合、その味方の通常スキル使用時にクールダウンを1減少させる(1ターンにつき1回限り)`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '血液収集',
                name_eng: 'Drain Organics',
                image: '/abilityui/tex.abilityui_passive_drainorganics.png',
                description_jp: `0-0-0とBT-1のどちらかが「通訳」のスタックを得るたび、もう片方も「通訳」のスタックを得る(1ターンにつき1回限り)。0-0-0のターン開始時、まだターゲットロックが発生していないランダムなドロイド以外の敵に、1ターンのターゲットロックを発生させる。ドロイド以外の敵が戦闘不能になるたび、攻撃した味方のHPとプロテクションが30%回復する。攻撃した味方がダークサイドのドロイドだった場合、2ターンの攻撃力上昇と、15%のターンメーターを得る。攻撃した味方がBT-1の場合、2ターンの攻撃力上昇と、30%のターンメーターを代わりに得る。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
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
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: 'サバック・シャッフル',
                name_eng: 'Sabacc Shuffle',
                image: '/ability/tex.ability_50rt_special01.png',
                description_jp: `敵全体に物理ダメージを3回与え、2ターンの間防御力を低下させる。味方全体が分離主義者以外のドロイドの場合、バトル開始時に(=バトル開始時に味方全員が分離主義者以外のドロイドの場合、?)この攻撃は60%の確率でターゲットロックを発生させ、ダメージ発生ごとにターンメータを10%減少させる(最大30%)。さらに、このスキルを使用するたび、味方の攻撃力が遭遇終了まで10%上昇する(スタック可能)
                
                このスキルが発生している弱体ごとに(=このスキルで発生した弱体化効果ごとに?)味方全体のターンメーターが5%上昇する(最大60%)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'タクティカル・アドバンテージ',
                name_eng: 'Tactical Advantage',
                image: '/ability/tex.ability_50rt_special02.png',
                description_jp: `最弱の味方の弱体を全て解除し、2ターンの間アドバンテージ、ヘルス・スティール、スピードが上昇する(=上昇を得る?)。味方が分離主義者以外のドロイドで、この方法で弱体が解除された場合、その味方は2ターンの攻撃力上昇と抵抗力上昇を得て、最弱の敵に2ターンのスピード低下とターゲットロックを発生させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'スペアパーツ',
                name_eng: 'Spare Parts',
                image: '/abilityui/tex.abilityui_leader_spareparts.png',
                description_jp: `味方ドロイドの防御力が35%、スピードが35上昇し、バトル終了まで*スペアパーツ*を得る(コピー、解除、阻止不可)。バトル開始時、味方全員がドロイドの場合、50R-Tの最大HPが30%、スピードが40上昇する。
                
                *スペアパーツ:* クリティカル率が30%、攻撃力が30%上昇する。このユニットが戦闘不能になると、HPが100%の状態で復活し、2ターンのフォアサイトとプロテクション上昇(50%)を得て、味方全体からこの強化を解除する。また、この復活は阻止できない。
                
                $征服モード中、味方全体が分離主義者以外のドロイドの場合:$ 最初にターンを得た敵が初めて戦闘不能になると、他のアクティブな敵(招集を除く)がいる場合、味方全体(=味方全員?)がHP60%の状態で復活し、2ターンのダメージ耐性と即戦闘不能耐性を得る。これらの強化効果はコピー、解除、阻止できない。この復活は阻止できない。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'VIP待遇',
                name_eng: 'VIP Treatment',
                image: '/abilityui/tex.abilityui_passive_viptreatment.png',
                description_jp: `バトル開始時、最弱の他の味方が*VIP*を得る。VIPがダメージを受けると、2ターンのステルス効果が発生し、50R-TのHPとプロテクションが5%回復する。50R-Tがダメージを受けると、VIP状態の味方のHPとプロテクションが50R-Tの最大HPとプロテクションの5%分回復し、2ターンの間攻撃力が上昇し、50R-Tは2ターンの間防御力が上昇し、プロテクションが上昇する(スタック可能、最大250%)。バトル開始時に味方全員がドロイドの場合、50R-TとVIPはターンメーター減少を無効化する。
                
                *VIP:* ダメージを受けると、VIPを利用しているユニットからボーナスを得る`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
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
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '指令を与える',
                name_eng: 'Assign Command',
                image: '/ability/tex.ability_trooperclone_arc_special01.png',
                description_jp: `ターゲットに物理攻撃(=ダメージ?)を与える。ブラスタータレットが存在する場合、指令対象クローンが戦闘不能になるか他の味方へ*指令*が与えられるまで、味方クローンに*指令*を与える。
                
                *指令:* ユニットがターン中にスキルを使用するとブラスタータレットがアシストする`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ARCアーセナル',
                name_eng: 'ARC Arsenal',
                image: '/abilityui/tex.abilityui_passive_commandoassault.png',
                description_jp: `ARCトルーパーはカウンター率35%を得る。ARCトルーパーはブラスター・タレットが存在している間は常に*指令*を受け、遭遇開始時や復活時に同盟スロットへブラスター・タレットを招集する。ブラスター・タレットはARCトルーパーがターン外に攻撃を行った時にアシストする。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ブラスター・タレット',
                name_eng: 'Blaster Turret',
                image: '/ability/tex.ability_trooperclone_arc_special02.png',
                description_jp: `*[通常]「粉砕ブラスト」:* 回避不可能攻撃で、ターゲットの強化を全て解除し固定ダメージを与える。
                
                *[ユニーク]「オブジェクト召集」: *このオブジェクトは召集したユニットのステータスを引き継ぐ。同盟スロットに空きがある場合にのみ召集される。レイドでは召集できない。このオブジェクトは復活できない。戦闘不能ユニット数に応じた効果に対して、召集されたオブジェクトはカウントされない。他の味方が全て撃破された場合、このオブジェクトはバトルから離脱する。このオブジェクトが同盟スロットにいる場合、他のユニットは復活できない。
                
                *[ユニーク]「オブジェクトの特性」:* このオブジェクトが標的とされることはなく、ダメージ耐性とあらゆるステータス効果に耐性を持ち、ターン上昇しない。*指令*を受けた味方がいなくなった場合、ブラスター・タレットは破壊される。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
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
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                name_jp: '撃て!',
                name_eng: 'Blast Them!',
                image: '/ability/tex.ability_b1_special01.png',
                description_jp: `敵全体に物理ダメージを与え、ターゲットに2ターンのターゲットロックを発生させる。味方分離主義者1体つきドロイド大隊のスタックが1増加する。ドロイド大隊のスタック1つにつき、指定した味方分離主義者のHPが0.5%、プロテクションが0.5%上昇する(=回復する?)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ラジャー ラジャー',
                name_eng: 'Roger Roger',
                image: '/abilityui/tex.abilityui_passive_counterattack.png',
                description_jp: `味方分離主義者がターン中にスキルを使用すると、B1がアシストを行う(ダメージは40%減少)。味方ドロイドが特殊スキルを使用すると、b1のターンメーターが15%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ドロイド大隊',
                name_eng: 'Droid Battalion',
                image: '/abilityui/tex.abilityui_passive_mechanicalmenace.png',
                description_jp: `B1はクリスタルヒットや復活ができない。B1はプロテクションがなく、HP1と「ドロイド大隊」のスタック100を持ち、「ドロイド大隊」を備えている間は戦闘不能または破壊されることはない。「ドロイド大隊」のストック(=スタック?)が全てなくなった際、B1は即座に破壊される。B1は時間経過ダメージを無効化でき、最大HPと最大プロテクションは増加させることができない。
                
                B1がダメージを受けると、受けている弱体化効果を全て解除し、「ドロイド大隊」のスタックを8失う。B1のターン開始時、「ドロイド大隊」のスタックを3得る。
                
                B1はシス三頭レイドでロード・オブ・ベトレイアルからのダメージを無効化する。
                
                *ドロイド大隊:* スタック1つにつき、B1の攻撃力が2%上昇し、分離主義者の味方全体の抵抗力とクリティカル回避力が0.5%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
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
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '一掃',
                name_eng: 'Mow Down',
                image: '/ability/tex.ability_b2_special01.png',
                description_jp: `敵全体に物理ダメージを与え、全ての強化を解除する。さらに80%の確率で2ターンの強化無効を発生させる(ダメージ前に適用)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '容赦なき集中砲火',
                name_eng: 'Relentless Barrage',
                image: '/abilityui/tex.abilityui_passive_targetlock.png',
                description_jp: `他の味方が攻撃を回避される、または攻撃でダメージを受けると、40%の確率でB2のターンメーターが100%上昇する。ターゲットロック状態の敵のクリティカル率が25%、回避力が25%減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'リアクティブ・プロトコル',
                name_eng: 'Reactive Protocol',
                image: '/abilityui/tex.abilityui_passive_faction_separatist.png',
                description_jp: `味方分離主義者が攻撃を回避される、または攻撃でダメージを受けると、40%の確率でB2のクールダウンが1減少する。B2に弱体効果が発生すると、他の味方分離主義者ドロイド全体(=全員?)のターンメーターが5%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
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
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                name_jp: '秘匿データ転送',
                name_eng: 'Covert Data Transfer',
                image: '/ability/tex.ability_bb8_tfa_special01.png',
                description_jp: `3ターンの間、ユニーク強化*「機密情報」*がBB-8およびこの効果を受けていないランダムな味方1体に発生する。さらに*機密情報*効果が発生している味方1体ごとに、BB-8のターンメーターが8%上昇する。アクティブな味方が全てドロイドの場合、BB-8が1ターンの挑発を行う。
                
                *機密情報:* 有効性が25%上昇し、他の味方が特殊スキルを使用するとそのユニットに3ターンの間機密情報効果が発生する。また、機密情報効果の発生している味方1体ごとに「イルミネート・デスティニー」のクールダウンが1減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 70,
                name_jp: 'イルミネート・デスティニー',
                name_eng: 'Illuminated Destiny',
                image: '/ability/tex.ability_bb8_tfa_special02.png',
                description_jp: `味方全体から全ての弱体を解除し、敵全体を2ターンの間エクスポーズ状態にする。味方全体のターンメーターが80%上昇し、4 ターンの間アドバンテージが発生してクリティカル率、クリティカルダメージ、攻撃力、スピードが上昇する。味方ドロイドおよびレジスタンスのプロテクションが20%回復する。このスキルはクールダウン状態から開始し、回避できない。味方ドロイドがクリティカルヒットを決めると、このスキルのクールダウンが1減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '危機順応',
                name_eng: 'Roll with the Punches',
                image: '/abilityui/tex.abilityui_passive_counterattack.png',
                description_jp: `BB-8に80%のカウンター率が発生する。BB-8がターン外に攻撃を行うと、ランダムな味方レジスタンス1体がアシストに呼ばれる。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '自己防衛プロトコル',
                name_eng: 'Self-Preservation Protocol',
                image: '/abilityui/tex.abilityui_passive_foresight.png',
                description_jp: `BB-8がダメージを受けると、50%の確率で2ターンの間フォアサイトが発生する。各遭遇開始時、BB-8がアクティブな場合、味方ドロイドのターンメーターがアクティブな味方ドロイド1体につき8%上昇する。BB-8が回避に成功すると、味方ドロイドのHPが8%、プロテクションが8%回復する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
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
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '破壊工作',
                name_eng: 'Agent of Destruction',
                image: '/ability/tex.ability_bt1_special01.png',
                description_jp: `敵全体に物理ダメージを与え、2ターンの時間経過ダメージのスタックと1ターンのエクスポーズを発生させる。ターゲットにターゲットロックが発生している場合、炎上を与え、さらに2ターンの時間経過ダメージのスタックを発生させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '殺りくの相棒',
                name_eng: 'Homicidal Counterpart',
                image: '/abilityui/tex.abilityui_passive_homicidalcounterpart.png',
                description_jp: `バトル開始時、味方ドロイドごとにBT-1のクリティカルダメージが10%、味方ダークサイドごとに有効性が10%、味方ならず者ごとにスピードが5上昇する。0-0-0がアクティブな味方の場合、付与スキル*「すべて抹殺せよ」*を得る。0-0-0が特殊スキルを使用するたび、BT-1がアシストを行う(ダメージは40%減少)。
                
                $3対3のグランドアリーナの場合:$ BT-1または0-0-0は敵を倒すたび、そのクールダウンがリフレッシュされ、ターンメーターが30%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }, {
                ability_type: '付与スキル',
                cooldown: 5,
                name_jp: 'すべて抹殺せよ',
                name_eng: 'Kill Them All',
                image: '/ability/tex.ability_bt1_special02.png',
                description_jp: `敵全体に物理ダメージを与え、0-0-0をアシストに呼ぶ。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ブラストメクプロトタイプ',
                name_eng: 'Blastomech Prototype',
                image: '/abilityui/tex.abilityui_passive_dumpygunboy.png',
                description_jp: `バトル開始時、BT-1の攻撃力が100%上昇する。BT-1は敵を倒すたび、付与スキル*「めちゃくちゃ」*とボーナスターンを得る。このボーナスターン中、BT-1は自身のスキルブロックを取り除いて「めちゃくちゃ」のみを使用できる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '付与スキル',
                name_jp: 'めちゃくちゃ',
                name_eng: 'Haywire',
                image: '/ability/tex.ability_bt1_special03.png',
                description_jp: `他のユニット全体に物理ダメージを与える(味方全体は75%軽減)。このダメージで味方や敵は戦闘不能にならない。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
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
                description_jp: `C-3POは3ターンの*混乱*(ユニーク弱体)を発生させる(最大3回スタック可能、回避/コピー不可)。ターゲットが既に*混乱状態*の場合、現在のスタックの全ての持続時間が3ターンにリセットされる。ターゲットのターンメーターが6%減少し、C-3POの*通訳*効果のスタックごとにさらに3%減少する(詳細はプロトコル・ドロイドの*通訳*の説明を確認)。
                
                *混乱* - 状態異常は、累積のスタック数によって増えていく:
                1: 強化効果不可
                2: カウンター、アシスト、ボーナスターンメーター不可(レイドボスと銀河の伝説: カウンター率が30%低下)
                3: ユニットが通常スキル使用時、クールダウンを1増加させる。耐性発揮不可(レイドボスと銀河の伝説: 防御力50%低下、防御力低下はスタックしない)`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'なんですって！',
                name_eng: 'Oh My Goodness!',
                image: '/ability/tex.ability_c3p0_special01.png',
                description_jp: `C-3POは2ターンの有効性上昇とステルス効果を得る。その後、C-3POとその他指定した味方に3ターンの*通訳*効果が付与される。C-3POは*通訳*効果をその他味方全体をアシストに呼ぶ(ダメージ50%減少)。
                
                (詳細はプロトコル・ドロイドの*通訳*の説明を確認)`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'プロトコル・ドロイド',
                name_eng: 'Protocol Droid',
                image: '/abilityui/tex.abilityui_passive_translation.png',
                description_jp: `C-3POのスピードが20上昇する。C-3POがアクティブな間、味方銀河共和国、反乱軍、レジスタンス、イウォークは特殊スキルを使用するたび、3ターンの通訳効果を得る(最大3スタック)。通訳効果はコピーできない。ユニットに既に通訳効果が発生している場合、そのユニットの全てのスタックの有効時間が3ターンにリセットされる。通訳を適用できる味方が全て戦闘不能になった場合、通訳の全てのスタックはその効果を失う。
                
                *通訳* - 強化効果は、累積のスタック数によって増えていく:
                1. 最大HP+30%上昇
                2. クリティカル率+15%上昇
                3. 通訳の効果を付与できる味方が1体だけしかない場合、この味方が通常スキル使用時、このユニットのクールダウンが1減少する(1ターンに1度のみ)`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '置いて行かないで！',
                name_eng: 'Wait for Me!',
                image: '/abilityui/tex.abilityui_passive_stealth.png',
                description_jp: `C-3POとR2-D2の回避力が、自身の*通訳*効果のスタック数ごとに10%上昇する。遭遇開始時、C-3POとR2-D2は3ターンの通訳効果を得る。戦う味方がいなくなると、C-3POはバトルから逃走する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '仲裁',
                name_eng: 'Intermediary',
                image: '/abilityui/tex.abilityui_passive_sootheall.png',
                description_jp: `味方全体の防御突破力が10%上昇する。味方の銀河共和国あるいはイウォークユニットがそれぞれ異なる非ユニーク、非プロテクション強化効果を得るたび、それらユニットのプロテクションが2ターンの間15%上昇する(この効果自体はスタックしない)。スタックしている通訳効果1つごとに、銀河共和国ユニットの防御突破力が10%上昇する。イウォークは上昇量2倍。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'サイボーグ関係',
                name_eng: 'Cyborg Relations',
                image: '/abilityui/tex.abilityui_passive_uniqueability.png',
                description_jp: `味方全体の有効性が10%上昇する。味方反乱軍あるいはイウォークが通常スキルを使用すると、ターゲットを2ターンの間エクスポーズ状態させる(回避不可)。スタックしている*通訳*効果1つごとに、味方反乱軍の有効性が10%上昇する。イウォークは上昇量2倍。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '苛立たしい仲裁',
                name_eng: 'Fretful Medator',
                image: '/abilityui/tex.abilityui_passive_soothe.png',
                description_jp: `味方全体のクリティカルダメージが10%上昇する。味方レジスタンスあるいはイウォークが特殊スキルを使用すると、ターゲットに2ターンの攻撃力低下を発生させる(回避不可)。スタックしている*通訳*効果1つごとに、味方レジスタンスのクリティカルダメージが10%上昇する。イウォークは上昇量2倍。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
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
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 2,
                name_jp: 'キラキラのおとり',
                name_eng: 'Shining Distraction',
                image: '/ability/tex.ability_chew3po_special01.png',
                description_jp: `C-3PO&チューイの弱体化効果を全て解除する。味方反乱軍のプロテクションが15%回復し、2ターンのアドバンテージを得る。敵全体の強化効果を全て解除し、2ターンの間暗闇状態にする。このスキルは回避できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'チューイの怒り',
                name_eng: "Chewie's Rage",
                image: '/ability/tex.ability_chew3po_special02.png',
                description_jp: `敵全体に物理ダメージを与える。バトル中に戦闘不能になった敵1体につき、追加でダメージを与える(最大5回)。C-3PO&チューイはこのスキルで敵を戦闘不能にするたび、バトル終了まで攻撃力が10%上昇する(スタック可能)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
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
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
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
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: 'AT-TEマスドライバーキャノン',
                name_eng: 'AT-TE Mass-Driver Cannon',
                image: '/ability/tex.ability_commandercody_special01.png',
                description_jp: `ターゲットに特殊ダメージを与え、他の敵全体には35%少ないダメージを与える。この攻撃が2体以上にクリティカルヒットした場合、メインターゲットは1ターンの間スタン状態になる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 6,
                name_jp: '第212攻撃',
                name_eng: 'The 212th Attack',
                image: '/ability/tex.ability_commandercody_special02.png',
                description_jp: `全味方クローンとランダムな味方1体をアシストに呼ぶ。アシストのダメージは40%減少する。アシストがクリティカルヒットを決めるたびに、このスキルのクールダウンが1減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'ゴースト・カンパニー・コマンダー',
                name_eng: 'Ghost Company Commander',
                image: '/abilityui/tex.abilityui_passive_crit_buff.png',
                description_jp: `味方クローンのクリティカル率が30%上昇し、他の味方はその半分量上昇する。生存している味方クローン1体ごとにコーディの防御力が60%上昇し、他の味方クローンはその半分量上昇する。味方クローンは通常スキルを使用すると最大プロテクションが5%回復する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
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
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: 'EMPグレネード',
                name_eng: 'EMP Grenade',
                image: '/ability/tex.ability_echo_special01.png',
                description_jp: `敵全体に特殊ダメージを与え、強化を全て解除する。敵ドロイドを1ターンの間スタン状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '了解',
                name_eng: 'Copy That',
                image: '/abilityui/tex.abilityui_leader_default.png',
                description_jp: `味方クローン・トルーパーまたは第501軍団がターン中に通常スキルを使用すると、エコーがアシストする。味方クローン・トルーパーまたは第501軍団の攻撃がクリティカルヒットすると、エコーの次の攻撃がクリティカルヒットになる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ドミノ分隊',
                name_eng: 'Domino Squad',
                image: '/abilityui/tex.abilityui_passive_501.png',
                description_jp: `味方クローン・トルーパーと第501軍団のクリティカル率が20%上昇する。敵が味方クローン・トルーパーまたは第501軍団の攻撃回避時、エコーが敵の最大HP20%分のダメージをその敵に与える(回避不可)。
                
                ファイブスがいる場合、ファイブスの挑発中エコーの与えるダメージが100%上昇し、ファイブスが挑発していない際は防御力が100%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
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
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '支援攻撃',
                name_eng: 'Cover Fire',
                image: '/ability/tex.ability_ct5555_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、指定した味方をアシストに呼ぶ。アシストする味方がクローン・トルーパーまたは第501軍団の場合、両攻撃ユニットのダメージが35%上昇する。ターン終了時に挑発している味方がいない場合、ファイブスが2ターンの間挑発する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '熟練クローン・トルーパー',
                name_eng: 'Veteran Clone Trooper',
                image: '/abilityui/tex.abilityui_passive_def.png',
                description_jp: `味方クローン・トルーパーの防御力が50%上昇し、他の味方はその半分量上昇する。味方第501軍団はクリスタルヒットを与えると、2ターンの時間経過プロテクション(5%)を得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ドミノ分隊',
                name_eng: 'Domino Squad',
                image: '/abilityui/tex.abilityui_passive_501.png',
                description_jp: `ファイブスのカウンター率が85%上昇する。味方クローン・トルーパーまたは第501軍団がダメージを受けると、ファイブスのターンメーターが15%上昇し、他の味方はその半分量上昇する。
                
                CT-21-0408 "エコー"がいる場合、挑発中はファイブスの防御力が100%上昇し、挑発していない際は与えるダメージが100%増加する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
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
                is_omicron: true
            }
        ],
        last_updated: '2024年3月13日'
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
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '編隊形成',
                name_eng: 'Form Up',
                image: '/ability/tex.ability_rex_special01.png',
                description_jp: `味方全体の弱体を全て解除し、3ターンの抵抗力上昇を付与する。味方クローン・トルーパーのターンメーターが60%上昇し、この方法で解除した弱体1つにつきさらにターンメーターが10%上昇、他の味方はその半分量上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: 'エアリアル・アドバンテージ',
                name_eng: 'Aerial Advantage',
                image: '/ability/tex.ability_rex_special02.png',
                description_jp: `ターゲットに物理ダメージを与え、さらにこの遭遇中美味方クローン・トルーパーが取ったターンごとにターゲットの最大HP25%分の追加ダメージを与える。このスキルはクールダウン状態から開始する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false

            }, {
                ability_type: 'リーダースキル',
                name_jp: '戦友',
                name_eng: 'Brothers in Arms',
                image: '/abilityui/tex.abilityui_passive_hp.png',
                description_jp: `味方クローン・トルーパーと第501軍団の最大HPが20%上昇する。第501軍団クローン・トルーパーには2倍、他の味方には半分の効果が発生する。また、味方がクリティカルヒットを受けると、味方クローン・トルーパー全体のターンメーターが15%上昇し、他の味方はその半分量上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '第501軍団のキャプテン',
                name_eng: 'Captain of the 501st',
                image: '/abilityui/tex.abilityui_passive_501.png',
                description_jp: `バトル開始時、戦闘不能でない味方第501軍団1体につき、味方第501軍団全体のスピードが4%上昇する。味方第501軍団クローン・トルーパーは各ターン開始時にスキルのクールダウンを1減少させる。
                
                味方にアソーカ・タノがいる場合、アソーカのHPが100%を切るとアソーカに2ターンのクリティカルヒット耐性が発生する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
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
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'ハボック',
                name_eng: 'Havoc',
                image: '/ability/tex.ability_hk47_special01.png',
                description_jp: `敵全体に固定ダメージ(防御力無視、クリティカルヒット不可)を与え、弱体が発生している各敵にさらにその半分のダメージを与える。その後、敵全体に2ターンの抵抗力低下を発生させる。この攻撃は敵ジェダイに対してダメージが20%増加(カウンター不可)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 9,
                name_jp: 'アサシネーション・プロトコル',
                name_eng: 'Assassination Protocl',
                image: '/ability/tex.ability_hk47_special02.png',
                description_jp: `ターゲットの強化効果を全て解除し、物理ダメージを与える。この攻撃は回避できず、ジェダイに対しては+100%の増加ダメージを与える。ターゲットにデスマークまたは恐怖が発生している場合、このスキルのクールダウンがリセットされる。
                
                このスキルはクールダウン状態から開始し、敵に恐怖が発生するとクールダウンが1減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'ターゲット排除',
                name_eng: 'Target Elimination',
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `味方ドロイドのクリティカル率が30%、クリティカルダメージが20%上昇し、クリティカルヒット時にターンメーターが10%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '自己再生',
                name_eng: 'Self-Reconstruction',
                image: '/abilityui/tex.abilityui_passive_heal_buff.png',
                description_jp: `敵の強化効果が切れると、HK-47のHPが5%、プロテクションが5%回復する。HK-47がターン中にスキルを使用すると、ターゲットにデスマークまたは恐怖が発生している場合、ダメージが25%増加する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
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
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
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
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'ディスラプション',
                name_eng: 'Disruption',
                image: '/ability/tex.ability_magnaguard_special01.png',
                description_jp: `敵全体に物理ダメージを与え、味方分離主義者全体の弱体を全て解除する。2ターンの間、マグナガードとグリーヴァス将軍のスピードが上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'スタニング・ストライク',
                name_eng: 'Stunning Strike',
                image: '/ability/tex.ability_magnaguard_special02.png',
                description_jp: `ターゲットに物理ダメージを与えて強化を全て解除し、1ターンの間スタン状態にする。解除される強化効果が無い場合、このスキルのクールダウンをリセットする。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
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
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
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
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '機能: プロテクト',
                name_eng: 'FUNCTION: PROTECT',
                image: '/ability/tex.ability_ig11_nurse_special01.png',
                description_jp: `敵全体に物理ダメージを与え、2ターンの抵抗力低下を発生させる。時間経過ダメージまたはショック状態の敵に再度物理ダメージを与える。IG-11が2ターンの間挑発を行う。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'ナースドロイド・プロトコル',
                name_eng: 'Nurse Droid Protocol',
                image: '/ability/tex.ability_ig11_nurse_special02.png',
                description_jp: `指定した味方のHPがIG-11の最大HPの30%分回復し、他の味方全員はその半分回復する。IG-11が挑発中の場合、IG-11に2ターンのヘルス・スティール上昇と報復効果が発生する。味方ドロイドとならず者に2ターンのフォアサイトが発生する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
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
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
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
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 2,
                name_jp: 'はい',
                name_eng: 'Yes.',
                image: '/ability/tex.ability_ig12_special01.png',
                description_jp: `最弱の味方と指定した味方の弱体化効果を全て解除し、HPがIG-12 & グローグーの最大HPの30%分回復する。味方全体が2ターンの防御力上昇を得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'いいえ。いいえ。いいえ。',
                name_eng: 'No. No. No.',
                image: '/ability/tex.ability_ig12_special02.png',
                description_jp: `指定したその他の味方をアシストに呼ぶ(=指定した味方をアシストに呼ぶ?)。敵全体に2ターンの暗闇とめまいを発生させる(回避不可)。敵全体の強化効果を全て解除し、ターゲットを1ターンの間スタン状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'はい。はい。はい。',
                name_eng: 'Yes. Yes. Yes.',
                image: '/abilityui/tex.abilityui_passive_yesyesyes.png',
                description_jp: `バトル開始時にマンダロリアン(ベスカー・アーマー)が味方にいる場合、IG-12 & グローグーはバトル終了までならず者タグを得る。IG-12 & グローグーのカウンター率が100%上昇する。バトル開始時のライトサイドの味方マンダロリアン(召集された味方を除く)ごとに、IG-12 & グローグーの最大HPが20%上昇。
                
                IG-12 & グローグーのターン開始時、ライトサイドのマンダロリアンの味方全体がIG-12 & グローグーの最大HPの10%分回復する。HPが最大の場合、代わりに1ターンの間、攻撃力上昇とプロテクション上昇(10%)を得る。Ig-12 & グローグーがスキルを使用するたび、ランダムなライトサイドの味方マンダロリアンがアシストし、使用したスキルに応じて追加の効果を得る。
                
                *「はい」:* アシストする味方のクールダウンが1減少する。
                
                *「いいえ。いいえ。いいえ。」:* アシストする味方が20%の増加ダメージを与え、再度アシストを行う。
                
                ターン開始時に戦っている味方がいない場合、IG-12 & グローグーはバトルから逃走する。
                
                $テリトリーウォーズの場合:$ ライトサイドの味方マンダロリアンが初めてプロテクションを失うたび、IG-12 & グローグーはボーナスターンを得て「いいえ。いいえ。いいえ。」のクールダウンをリセットする。IG-12 & グローグーがスキルを使用するたび追加の味方を呼び、使用したスキルに応じた追加効果を得る。
                
                *「はい」:* アシストする味方が10%増加ダメージを与え、プロテクションが20%回復する。
                
                *「いいえ。いいえ。いいえ。」:* アシストする味方のターンメーターが20%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'IG-86-Sntinel-Droid',
        character_name: 'IG-86歩哨ドロイド',
        character_image: '/charui/tex.charui_ig86.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'プリサイス・ストライク',
                name_eng: 'Precision Strike',
                image: '/ability/tex.ability_ig86sentineldroid_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、クリティカルヒット率が50%上昇する。(=この攻撃のクリティカル率が50%上昇する。?)`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 2,
                name_jp: 'アサシン・ドロイドの戦術',
                name_eng: 'Assassin Droid Tactics',
                image: '/ability/tex.ability_ig86sentineldroid_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、ランダムな味方をアシストに呼ぶ。アシストがドロイドの場合、両攻撃者のクリティカルダメージが75%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ドロイドチーム戦術',
                name_eng: 'Droid Squad Tactics',
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `生存している味方ドロイド1体ごとに、IG-86歩哨ドロイドのクリティカル率が4.5%上昇する。さらにクリティカルダメージが20%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'IG-88',
        character_name: 'IG-88',
        character_image: '/charui/tex.charui_ig88.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '致命傷',
                name_eng: 'Mortal Wound',
                image: '/ability/tex.ability_ig88_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、60%の確率で2ターンの回復無効を発生させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: 'ラピッド・ファイア',
                name_eng: 'Rapid Fire',
                image: '/ability/tex.ability_ig88_special01.png',
                description_jp: `敵全体に物理ダメージを与え、55%の確率で1ターンのスキルブロックを発生させ、50%の確率で2ターンの間防御力を低下させる。クリティカルヒットした敵には3ターンの間ターゲットロックを発生させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '機略に優れた追跡者',
                name_eng: 'Resourceful Pursuer',
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `味方全体のクリティカル率が20%上昇する。クリティカルヒットを与えると、時間経過ダメージ効果を発生させる。IG-88がリーダースロットに設定されていると、次の契約が発動する(同盟スロットでは不可):
                
                *契約:* 弱体化効果発生中の敵にクリティカルヒットを10回与える。回数をカウントするには、攻撃を始める前に敵に弱体化効果が発生している必要がある(契約達成には味方賞金稼ぎのみ参加可能)。
                
                *報酬:* バトル終了まで、味方賞金稼ぎ全体の攻撃力と有効性が25上昇し、ボーナス効果が発動する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '適応型エイムアルゴリズム',
                name_eng: 'Adaptive Aim Algorithm',
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `ターゲットロック状態の敵にダメージを与えると、IG-88のクリティカルダメージが45%上昇し、HPが50%回復する。さらに、弱体発生中の敵1体ごとに攻撃力が20%上昇し、ターゲットロック状態の敵に対する回避力が50%上昇する。IG-88がアクティブな間、ターゲットロック状態の敵はHPとプロテクションを回復できない。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'IG-88のボーナス',
                name_eng: "IG-88's Payout",
                image: '/abilityui/tex.abilityui_passive_contract.png',
                description_jp: `IG-88は契約報酬を受け取ると、次のボーナスも獲得する(契約は特定の賞金稼ぎリーダースキルによって付与される)。
                
                *ボーナス:* バトル終了まで、IG-88はクリスタルヒットを与えた敵の抵抗力が10%低下させ(スタック可能)、ターゲットロック状態の敵の防御力を50%無力化し、ターゲットロック状態の敵が1体でもいる場合、攻撃力が25%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'K-2SO',
        character_name: 'K-2SO',
        character_image: '/charui/tex.charui_k2so.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'カーボプラスト複合材フィスト',
                name_eng: 'Carboplast Composite Fist',
                image: '/ability/tex.ability_k2so_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、70%の確率で2ターンの間攻撃力を低下させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 2,
                name_jp: 'コンダクティブ・チャージ',
                name_eng: 'Conductive Charge',
                image: '/ability/tex.ability_k2so_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンのめまい効果を発生させる。キャシアン・アンドーがいる場合、キャシアンをアシストに呼ぶ。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '執行者',
                name_eng: 'Enforcer',
                image: '/abilityui/tex.abilityui_passive_taunt.png',
                description_jp: `K-2Soがスキルを使用すると75%の確率で1ターンの挑発を行う(強化効果発生中は100%)。この挑発はK-2SOがダメージを受けると終了する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '再プログラム済み帝国軍ドロイド',
                name_eng: 'Reprogrammed Imperial Droid',
                image: '/abilityui/tex.abilityui_passive_counterattack.png',
                description_jp: `K-2SOのカウンター率が97.6%上昇する。K-2SOに弱体が発生している間は、この確率が半分になる。さらにK-2SOがダメージを受けると最大プロテクションが1%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'L3-37',
        character_name: 'L3-37',
        character_image: '/charui/tex.charui_l337.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '猛進',
                name_eng: 'Daring Advance',
                image: '/ability/tex.ability_l337_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンの防御力を低下させる。
                
                *準備万端:* L3-37が準備万端状態の場合、遭遇終了まで最大HPが10%上昇する(スタック可能)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '希望の灯',
                name_eng: 'Spark of Hope',
                image: '/ability/tex.ability_l337_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、1ターンの間挑発を行う。
                
                *準備万端:* 味方ならず者および味方ドロイド全体をL3の最大HPの50%分回復させ、準備万端状態の味方全体の抵抗力を2ターンの間上昇させる。準備万端状態の味方が1体でもいる場合、このスキルのクールダウンが1減少する。L3-37の準備万端は解除される。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ドロイドのために',
                name_eng: 'For the Droids',
                image: '/abilityui/tex.abilityui_passive_removeharmful.png',
                description_jp: `L3-37のターン開始時、前ターン以降に敵からダメージを受けていない場合、L3-37は準備万端状態になる。他の味方ドロイドあるいは味方ならず者がダメージを受けると、L3-37のターンメーターが15%上昇する。L3-37が攻撃ダメージを受けると、弱体発生中のランダムな味方ならず者1体から弱体が解除される。各味方ドロイドはHPが1%まで減少すると、1度だけL3-37と同量のHPまで回復する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '自己書き換え',
                name_eng: 'Self Modificationl',
                image: '/abilityui/tex.abilityui_passive_heal.png',
                description_jp: `L3-37の最大プロテクションが25%上昇する。L3-37は準備万端状態になると、1ターンの挑発を行う。各戦闘を開始する時にL3-37は準備万端状態になる。遭遇開始時(=バトル開始時?)に特殊スキル*「アップグレードMk I」*が使用可能になる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '付与スキル',
                name_jp: 'アップグレードMk I',
                name_eng: 'Enhance (MK I)',
                image: '/ability/tex.ability_l337_special02.png',
                description_jp: `バトル終了までL3-37のクリティカル率が50%上昇し、準備万端状態になる。使用するとこのスキルは「アップグレードMk II」に強化される。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '付与スキル',
                name_jp: 'アップグレードMk II',
                name_eng: 'Enhance (MK II)',
                image: '/ability/tex.ability_l337_special02.png',
                description_jp: `L3-37のクリティカル回避力が30%上がり、バトル終了まで防御力が100%上昇、さらに準備万端状態になる。使用するとこのスキルはMk IIIに強化される`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '付与スキル',
                name_jp: 'アップグレードMk III',
                name_eng: 'Enhance (MK III)',
                image: '/ability/tex.ability_l337_special02.png',
                description_jp: `L3-37のカウンター率がバトル終了まで50%上昇し、準備万端状態になる。このスキルは一度しか使用できない。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'R2-D2',
        character_name: 'R2-D2',
        character_image: '/charui/tex.charui_astromech_r2d2.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '電気ショック・プロッド',
                name_eng: "Electroshock Prod",
                image: '/ability/tex.ability_r2d2_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、80%の確率で1ターンの間スタン状態にする。この攻撃は炎上状態の敵に対してダメージが30%増加する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '煙幕',
                name_eng: 'Smoke Screen',
                image: '/ability/tex.ability_r2d2_special01.png',
                description_jp: `指定した味方が2ターンのフォアサイトおよびアドバンテージを得る。他の味方全体が2ターンのステルス効果を得る。R2-D2のターンメーターが40%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                name_jp: '臨機応変',
                name_eng: 'Improvise',
                image: '/ability/tex.ability_r2d2_special02.png',
                description_jp: `敵全体に特殊ダメージを与え、3ターンの炎上効果を発生させる。この攻撃は回避できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                cooldown: 4,
                name_jp: '戦闘分析',
                name_eng: 'Combat Analysis',
                image: '/abilityui/tex.abilityui_passive_crit_buff.png',
                description_jp: `R2-D2がアクティブな間、味方全体のクリティカル率が10%、精度が10%上昇する。R2-D2がアクティブな間、味方ライトサイドユニットはクリティカルヒットを決めると弱体が全て解除される。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '計算処理',
                name_eng: 'Number Crunch',
                image: '/abilityui/tex.abilityui_passive_extraturn.png',
                description_jp: `バトル開始時に、R2-D2の最大プロテクションが味方ドロイド1体につき10%、攻撃力が味方銀河共和国1体につき10%、最大HPが味方反乱軍1体につき10%、有効性が味方レジスタンス1体につき10%上昇する。
                
                バトル開始時およびR2-D2の復活時に、他の味方ドロイド、銀河共和国、反乱軍、レジスタンスはR2-D2の最大プロテクション、攻撃力、最大HP、有効性の10%分をR2-D2が戦闘不能になるまで得る。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'STAP',
        character_name: 'STAP',
        character_image: '/charui/tex.charui_stap.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '検問所制圧！',
                name_eng: 'Checkpoint Secure!',
                image: '/ability/tex.ability_stap_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンのターゲットロックを発生させる。既にターゲットロック状態の場合、代わりに2ターンの間*固定*状態にする(コピー不可、解除、阻止不可。この攻撃は回避できない)。
                
                *固定:* ボーナスターンメーターを獲得できず、スピードが25%低下する。破損やスピード低下とはスタックしない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 2,
                name_jp: '死ね、ジェダイの犬め！',
                name_eng: 'Die, Jedi Dogs!',
                image: '/ability/tex.ability_stap_special01.png',
                description_jp: `敵全体に物理ダメージを与える(ジェダイは回避不可)。敵全体を2ターンの間、誘発状態にする。固定状態の敵に再度ダメージを与える。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: 'リチャージが必要だ！',
                name_eng: 'We Need to Recharge!',
                image: '/ability/tex.ability_stap_special02.png',
                description_jp: `HPとプロテクションが20%回復し、オーバーチャージのスタックを5得る(最大5。コピー、解除、阻止不可)。指定した味方が攻撃を行い、STAPがアシストを行う。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'シングル・トルーパー・エアリアル・プラットフォーム',
                name_eng: 'Single Trooper Aerial Platform',
                image: '/abilityui/tex.abilityui_passive_singletrooperaerialplatform.png',
                description_jp: `STAPは自身のオーバーチャージのスタックごとにスピードが10上昇する。
                
                バトル開始時、味方全員が分離主義者ドロイドの場合、味方は敵に固定またはターゲットロックを発生させるたび、その敵の最大HP10%分のボーナスダメージをその敵に与える。
                
                STAPは「リチャージが必要だ！」以外のスキルを使用するたび、オーバーチャージのスタックを1失う。
                
                STAPまたは味方の分離主義者ドロイドタンクが敵から固定ダメージを受ける度、味方全ての分離主義者ドロイドはターンメーターを15%失う(敵1体につき1ターン1回まで)。
                
                $グランドアリーナかつ味方全体が分離主義者ドロイドの場合:$ STAPはバトル開始時にボーナスターンを得て、敵が最初のターンを開始すると追加のボーナスターンを得る。
                
                STAPがオーバーチャージを得ると、味方全体の最大HPがバトル終了まで20%(スタック可能)上昇し、HPとプロテクションが10%回復する。
                
                敵クローン・トルーパーの攻撃力が30%低下し、固定またはターゲットロック状態になると、その敵は自身の最大HP10%分のボーナスダメージを受ける(回避不可)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'T3-M4',
        character_name: 'T3-M4',
        character_image: '/charui/tex.charui_t3m4.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '無力化',
                name_eng: 'Disable',
                image: '/ability/tex.ability_t3m4_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、75%の確率で1ターンの間スキルブロック状態にする。敵が破損状態の場合、スキルブロックは耐性発揮されない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '修理キット',
                name_eng: 'Repair Kit',
                image: '/ability/tex.ability_t3m4_special01.png',
                description_jp: `指定した味方の弱体効果を全て解除する。その味方がドロイドの場合、さらにHPを50%、プロテクションを50%回復させ、2ターンのクリティカルヒット耐性および攻撃力上昇が発生する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: 'カーボナイトプロジェクター',
                name_eng: 'Carbonite Projector',
                image: '/ability/tex.ability_t3m4_special02.png',
                description_jp: `敵全体の強化効果を全て解除し、特殊ダメージを与える。2ターンのクリティカル率低下と攻撃力低下を発生させ、敵全体のターンメーターを20%減少させる。ターゲットロック状態の敵はこれら弱体効果を耐性発揮できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '戦闘ロジック強化',
                name_eng: 'Combat Logic Upgrade',
                image: '/abilityui/tex.abilityui_passive_crit_buff.png',
                description_jp: `T3-M4がスキルを使用する毎に、味方ドロイドの有効性とクリティカルヒット率が8%上昇する。また弱体発生中の敵ごとに味方ドロイドのクリティカルダメージが8%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'マスターギアヘッド',
                name_eng: 'Master Gearhead',
                image: '/abilityui/tex.abilityui_passive_penetration.png',
                description_jp: `T3-M4の防御突破力が100%上昇し、味方ドロイドはT3-M4の防御突破力の100%を得る。さらに、T3-M4がターンを開始するたび、75%の確率で効果が発生していないランダムな敵に2ターンのターゲットロックを発生させる。このターゲットロックは回避できない。
                
                $テリトリーウォーズの場合:$ 遭遇開始時、T3-M4に2ターンのステルス効果が発生し、味方ドロイドのアーマー突破力が15、最大HPが30%上昇する。味方ドロイドはターゲットロック状態の敵ごとに防御力が20%、弱体化効果発生中に防御力が20%、強化効果発生中に防御力が20%上昇する。T3-M4のターン開始時、効果が発生していないランダムな敵に2ターンのターゲットロックを発生させ(回避不可)、ターゲットロック状態の敵ごとに味方全体のHPとプロテクションを5%回復する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'TIE-Fighter-Pilot',
        character_name: 'TIEファイター・パイロット',
        character_image: '/charui/tex.charui_tiepilot.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '照準コンピューター',
                name_eng: 'Targeting Computer',
                image: '/ability/tex.ability_tiepilot_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、弱体の発生している敵1体ごとにダメージが35%上昇する。クリティカルヒット時には2ターンの間抵抗力を低下させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: 'TIEストライク',
                name_eng: 'TIE Sreike',
                image: '/ability/tex.ability_tiepilot_special01.png',
                description_jp: `敵全体に物理ダメージを与え、80%の確率で2ターンの強化無効を発生させる。メインターゲットを1ターンの間スキルブロック状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '回避行動',
                name_eng: 'Evasive Maneuvers',
                image: '/abilityui/tex.abilityui_passive_foresight.png',
                description_jp: `各ターンの最後に、TIEファイター・パイロットのターンメーターが弱体を受けている敵1体ごとに10%上昇し、35%の確率で1ターンのフォアサイトが発生する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'THE-Armorer',
        character_name: 'アーマラー',
        character_image: '/charui/tex.charui_armorer.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'テンパード・ストライク',
                name_eng: 'Tempered Strike',
                image: '/ability/tex.ability_armorer_basic.png',
                description_jp: `ターゲットに2回物理ダメージを与える。ターゲットがアーマー破壊状態の場合、アーマラーは「ベスカー・インゴット」のスタックを1得る(最大3スタック)。
                
                *ベスカー・インゴット:* 味方にベスカー・アーマーを与えるのに使用。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                cooldown: 3,
                name_jp: '印を得よ',
                name_eng: 'Earn Your Signet',
                image: '/ability/tex.ability_armorer_special01.png',
                description_jp: `アーマラーがベスカー・インゴットのスタックを全て失い、指定した味方に遭遇終了までベスカー・インゴットの消費スタック数に応じたレベルのベスカー・アーマーを付与する(コピー、解除、阻止不可)。アーマラーにベスカー・インゴットのスタックがない場合や指定した味方のベスカー・アーマーのレベルがそれ以上上がらない場合、このスキルは使用できない。
                
                *ベスカー・アーマー* - スタック数が多いほど、強化効果が高まる:
                *スタック1:* 防御力+50%、最大HP+15%
                *スタック2:* ターン終了時にプロテクション30%回復
                *スタック3:* カウンター率が100%上昇し、クリティカルヒットを受けない`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '我らの道',
                name_eng: 'This is The Way',
                image: '/ability/tex.ability_armorer_special02.png',
                description_jp: `バトル終了までターゲットをアーマー破壊状態にする。ベスカー・アーマー状態の味方マンダロリアンと味方全体をアシストに呼ぶ(ダメージは10%減少)。(=味方マンダロリアン全体とベスカー・アーマー状態の味方をアシストに呼ぶ?)`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '生き残ることが強さ',
                name_eng: 'Our Survival is our Strength',
                image: '/abilityui/tex.abilityui_passive_survivalstrength.png',
                description_jp: `バトル開始時、味方マンダロリアンのプロテクションが上昇(200%、解除・阻止不可)し、2ターンのクリティカルヒット耐性が発生する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ハンターであり獲物',
                name_eng: 'Both Hunter and Prey',
                image: '/abilityui/tex.abilityui_passive_hunterprey.png',
                description_jp: `味方の体力が初めて60%を下回ると、アーマラーがベスカー・インゴットのスタックを1得て、その味方のプロテクションが40%上昇する。アーマラーはベスカー・インゴットのスタックを2持った状態で開始する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Iden-Versio',
        character_name: 'アイデン・ヴェルシオ',
        character_image: '/charui/tex.charui_idenversioempire.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '掃射',
                name_eng: 'Take Them Down',
                image: '/ability/tex.ability_idenversioempire_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。リーダータグを持つ味方が他にいない場合、アイデンがさらに2回ダメージを与える。クリティカルヒットごとにアイデンのHPとプロテクションが5%回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 2,
                name_jp: '前進',
                name_eng: 'Push Forward',
                image: '/ability/tex.ability_idenversioempire_special01.png',
                description_jp: `敵全体に物理ダメージを与え、2ターンの間、無防備状態にする。ターゲットの強化効果を全て解除し、2ターンの回復無効を発生させ、1ターンの間スタン状態にする。敵反乱軍はこれらの効果を耐性発揮できない。リーダータグを持つ味方が他にいない場合、ドロイド以外の帝国軍トルーパーの味方全体をアシストに呼び、20%の減少ダメージを与える。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '悲しむのはあとでいい',
                name_eng: 'We Can Grieve Later',
                image: '/ability/tex.ability_idenversioempire_special02.png',
                description_jp: `味方帝国軍トルーパーの弱体化効果を全て解除する。アイデンのプロテクションが2ターンの間上昇し(100%)、帝国軍トルーパーの味方全体のプロテクションが上昇する(50%)、味方帝国軍トルーパーのプロテクションが35%回復する。
                
                リーダータグを持つ味方が他にいない場合、ドロイド以外の味方帝国軍トルーパー全体に3ターンの*「受け入れるか死か」*の効果が発生する(コピー不可)。
                
                *「受け入れるか死か」:* クリティカル率が30%、攻撃力が30%、スピードが30上昇する。戦闘不能になるとHP70%の状態で復活する。解除された場合、HPが80%回復、ターンメーターが80%上昇し、2ターンの間クリティカルヒットを受けない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '計画通り',
                name_eng: 'Exactly as Planned',
                image: '/abilityui/tex.abilityui_passive_empire.png',
                description_jp: `味方帝国軍トルーパーのクリティカル率が35%、攻撃力が35%、スピードが35上昇する。
                
                バトル開始時にリーダータグを持つ味方が他にいない場合、ドロイド以外の味方帝国軍トルーパーがターン外に攻撃するたび、遭遇終了まで攻撃力が2%上昇し(スタック可能)、各遭遇開始時クリティカルダメージが2ターンの間上昇、カウンター率が100%上昇して、無防備状態の敵のスピードが25%減少する。

                $グランドアリーナの場合:$ バトル開始時、リーダータグを持つ味方が他にいない場合、味方帝国軍トルーパーの最大HPと最大プロテクションも35%上昇し、敵がターン外に攻撃を行うたび、未kた帝国軍トルーパーのHPとプロテクションが20%回復してターンメーターが10%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: true
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ファーストイン・ラストアウト',
                name_eng: 'First In, Last Out',
                image: '/abilityui/tex.abilityui_passive_firstinlastout.png',
                description_jp: `リーダータグを持つ味方が他におらず、また味方全体がドロイド以外の帝国軍トルーパーの場合、各遭遇開始時にアイデンのターンメーターが100%上昇し、アイデンは戦闘不能になってもアクティブな味方帝国軍トルーパーが他にいれば、HPとプロテクションが100%の状態で復活する。
                
                アイデンはプロテクション上昇中、有効性が30%上昇する。アイデンがアクティブな間、味方帝国軍トルーパーの攻撃力が30%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Ima-Gun-Di',
        character_name: 'アイマ=ガン・ダイ',
        character_image: '/charui/tex.charui_imagundi.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '切断',
                name_eng: 'Sunder',
                image: '/ability/tex.ability_imagundi_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、50%の確率で2ターンの間防御力を低下させる。ドロイドに対して、この攻撃のダメージは100%上昇し、防御力低下を100%発生させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '𠮟責',
                name_eng: 'Rebuke',
                image: '/ability/tex.ability_imagundi_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、3ターンの間味方全体の防御力が上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'ジェダイの策士',
                name_eng: 'Jedi Strategist',
                image: '/abilityui/tex.abilityui_passive_def.png',
                description_jp: `味方全体の防御力が30上昇し、味方ジェダイはカウンター率が35%、カウンターダメージが25%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ラストスタンド',
                name_eng: 'Last Stand',
                image: '/abilityui/tex.abilityui_passive_heal_buff.png',
                description_jp: `アイマ=ガン・ダイがクリティカルヒットを受けると、3ターンの間ターンごとに最大HPの15%分回復する。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Aayla-Secura',
        character_name: 'アイラ・セキュラ',
        character_image: '/charui/tex.charui_aaylasecura.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'トリガー・ストライク',
                name_eng: 'Inspiring Strike',
                image: '/ability/tex.ability_aayla_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、35%の確率で味方のアシストを呼ぶ。アシストがジェダイの場合、そのダメージが50%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'サバイバー',
                name_eng: 'Survivor',
                image: '/ability/tex.ability_aayla_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、与えたダメージの65%分HPが回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'ジェダイの武勇',
                name_eng: 'Jedi Valor',
                image: '/abilityui/tex.abilityui_passive_def_resistance.png',
                description_jp: `味方ジェダイの抵抗力が40%上昇し、状態異常に対して耐性発揮すると最大HPの10%が回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '高等付き返し',
                name_eng: 'Superior Riposte',
                description_jp: `アイラのカウンター率が65%になり、クリティカル率が10%、カウンターダメージが50%上昇する。さらに、クリティカルヒット時にはターゲットを1ターンの間スタン状態にする。`,
                image: '/abilityui/tex.abilityui_passive_counterattack.png',
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'URoRRuRRR',
        character_name: 'ア゛ウァア゛ゥア゛ウウ',
        character_image: '/charui/tex.charui_urorrurrr.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'ガダッフィ・スラム',
                name_eng: 'Gaffi Srick Slam',
                image: '/ability/tex.ability_urorrurrr_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、60%の確率で1ターンの間スタン状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '隠密隊',
                name_eng: 'Single File to Hide Their Numbers',
                image: '/ability/tex.ability_urorrurrr_special01.png',
                description_jp: `味方タスケンのターンメーターが100%上昇し、2ターンの間スピードが上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'タスケン族長',
                name_eng: 'Tusken Chief',
                image: '/abilityui/tex.abilityui_passive_def.png',
                description_jp: `味方タスケンの防御力が55上昇し、他の味方はその半分量上昇する。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '奇襲本能',
                name_eng: 'Ambush Instincts',
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `敵がスタン状態になると、ア゛ウァア゛ゥア゛ウウの攻撃力が4ターンの間上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Ugnaught',
        character_name: 'アグノート',
        character_image: '/charui/tex.charui_ugnaught.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'ブレーク・オープン',
                name_eng: 'Break Open',
                image: '/ability/tex.ability_ugnaught_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。ドロイドに対して、この攻撃のダメージは100%上昇し、2ターンの間防御力を低下させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'ドロイドエキスパート',
                name_eng: 'Droid Experts',
                image: '/ability/tex.ability_ugnaught_special01.png',
                description_jp: `敵全体に物理ダメージを与え、75%の確率でドロイドを1ターンの間スタン状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '先回り',
                name_eng: 'One Step Ahead',
                image: '/abilityui/tex.abilityui_passive_dodge.png',
                description_jp: `敵ドロイド1体ごとに、アグノートの回避力が9%上昇する。さらに攻撃を回避するとターンメーターが25%上昇する。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Admiral-Ackbar',
        character_name: 'アクバー提督',
        character_image: '/ability/tex.ability_ackbar_basic.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'クイックショット',
                name_eng: 'Quick Shot',
                image: '/ability/tex.ability_ackbar_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、55%の確率でターンメーターが45%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '仕掛けられた罠',
                name_eng: "It's a Trap!",
                image: '/ability/tex.ability_ackbar_special01.png',
                description_jp: `味方全体から状態異常を全て解除する。これによって解除された効果1つごとに、各自最大HPの9%分が回復する。アクバー提督は25%の確率でターンメーターが40%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '軍略の天才',
                name_eng: 'Tactical Genius',
                image: '/ability/tex.ability_ackbar_special02.png',
                description_jp: `アクバー提督が各味方に*「軍略の天才」*の効果を発生させる。効果発生中、最初に特殊スキルを使った味方はターンメーターが100%上昇し、最大HPの30%分回復する。味方の誰かがこの効果を発動させるか、アクバー提督の次のターンが終了すると*「軍略の天才」*の効果はなくなる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '反乱軍の指揮',
                name_eng: 'Rebel Coordination',
                image: '/abilityui/tex.abilityui_passive_speed.png',
                description_jp: `味方反乱軍のスピードが25%、抵抗力が10%上昇する。さらに、味方が攻撃以外のスキルを使用するたび、ランダムな味方反乱軍をアシストに呼ぶ。
                
                グランドアリーナの場合: バトル開始時、味方反乱軍の抵抗力が2ターンの間上昇する。味方全体が反乱軍の場合、味方の強化効果が切れるたび、その味方のターンメーターが3%上昇する。味方が攻撃以外のスキルを使用するたび、味方全体のHPが5%回復し、ランダムな味方の代わりに、他の最弱の味方2体をアシストに呼ぶ。アシストした味方クールダウンが1減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: true
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Asajj-Ventress',
        character_name: 'アサージ・ヴェントレス',
        character_image: '/charui/tex.charui_ventress.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '冷酷な攻撃',
                name_eng: 'Cruel Strike',
                image: '/ability/tex.ability_ventress_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、50%の確率で1ターンのスタン状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'ストライク・フィアー',
                name_eng: 'Strike Fear',
                image: '/ability/tex.ability_ventress_special01.png',
                description_jp: `敵全体から強化を全て解除し、味方ナイトシスターのHPが40%回復する。解除した強化1つごとに、50%の確率でその敵のターンメーターを20%減少させ、味方ナイトシスターのHPが10%回復する。この攻撃には回避、耐性発揮が行えない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '果てなき怒り',
                name_eng: 'Endless Wrath',
                image: '/ability/tex.ability_ventress_special02.png',
                description_jp: `敵全体に特殊ダメージを与え、2ターンの間防御力を低下させる。敵にとどめを刺すと全てのクールダウンがリフレッシュされる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'ナイトシスターの早業',
                name_eng: 'Nightsister Swiftness',
                image: '/abilityui/tex.abilityui_passive_speed.png',
                description_jp: `味方ナイトシスターのスピードが30、攻撃力が30%上昇し、そのHPが100%を下回るとターンメーターが50%上昇し、味方ナイトシスターは敵にダメージを与えると50%の確率でターンメーターを20%減少させる。このターンメーター減少には耐性発揮が行えない。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ランページ',
                name_eng: 'Rampage',
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `味方または敵が戦闘不能になるたび、アサージのターンメーターが35%上昇し、遭遇終了まで、攻撃力が15%、クリティカル率が15%、最大HPが5%上昇する(スタック可能)。強化効果が発生していない敵ごとにアサージのスピードが15上昇する。
                
                $グランドアリーナの場合:$ 味方ナイトシスターの最大HP、有効性、抵抗力が30%上昇する。味方また敵が戦闘不能になると、ナイトシスターの味方全体のターンメーターが10%上昇し、プロテクションが25%回復、「果てしなき怒り」のクールダウンがリセットされる。アサージが「果てしなき怒り」を使用すると、敵全体に2ターンの回復無効を発生させ、遭遇終了まで敵の防御力と最大HPを4%減少させる(銀河の伝説は除く)。弱体化効果発生中の敵ごとに、アサージのクリティカルダメージが10%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Ahsoka-Tano',
        character_name: 'アソーカ・タノ',
        character_image: '/charui/tex.charui_ahsoka.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'フォーカス・スラッシュ',
                name_eng: 'Focused Slash',
                image: '/ability/tex.ability_ahsokatanopadawan_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、強化を全て解除する。クリティカルヒットになると、アソーカとランダムな味方銀河共和国1体の弱体化効果を全て解除する。ターゲットがフォアサイトを得ていてもこの攻撃は回避できない。第501軍団がいる場合、アソーカのHPが15%回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '防衛戦略',
                name_eng: 'Protective Maneuver',
                image: '/ability/tex.ability_ahsokatanopadawan_special01.png',
                description_jp: `ターゲットに物理ダメージを与える。ジェダイ・ナイト・アナキンかケノービ将軍が味方にいる場合、再度ダメージを与え、両ユニットが味方にいる場合はさらにもう一度ダメージを与える。味方リーダーが銀河共和国の場合、この攻撃によるダメージが50%増加する。味方全体のHPが20%回復し、味方銀河共和国全体のプロテクションが1ターンの間20%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'クイック・ステップ',
                name_eng: 'Quick Steps',
                image: '/abilityui/tex.abilityui_passive_dodge.png',
                description_jp: `味方ジェダイとナイトシスターの回避力が14%上昇し、回避するとターンメーターが20%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '勇敢なパダワン',
                name_eng: 'Daring Padawan',
                image: '/abilityui/tex.abilityui_passive_hp.png',
                description_jp: `アソーカ・タノの最大HPが40%、回避力が10%、クリティカル率が10%、スピードが25上昇する。アソーカにクリティカルヒット耐性が発生している場合はこれらの効果が2倍になる。
                
                ジェダイ・ナイト・アナキンが味方にいる場合、各遭遇開始時、そしてアソーカが特殊スキルを使用するたびに、アソーカに2ターンのクリティカルヒット耐性が発生する。
                
                味方リーダーが銀河共和国の場合、他の味方銀河共和国が特殊スキルを使用するとアソーカがアシストする。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Commander-Ahsoka-Tano',
        character_name: 'アソーカ・タノ(コマンダー)',
        character_image: '/charui/tex.charui_commanderahsokatano.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'ジャーカイ・マスター',
                name_eng: "Jar'Kai Master",
                image: '/ability/tex.ability_commanderahsoka_basic.png',
                description_jp: `ターゲットに2回特殊ダメージを与える。銀河共和国またはならず者が味方にいる場合、アソーカは3ターンのアドバンテージを得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: 'シエン',
                name_eng: 'Shien',
                image: '/ability/tex.ability_commanderahsoka_special01.png',
                description_jp: `アソーカと指定した味方銀河共和国またはならず者が4ターンのシエン効果と2ターンの回避力上昇を得る。アソーカはその味方とターンメーターを入れ替えてその味方をアシストに呼び、20%の増加ダメージを与える。*シエン・フォーム*はコピー、解除、阻止不可。
                
                *シエン・フォーム:* このユニットが回避またはターン外に攻撃するたび、アソーカ・タノ(コマンダー)の「フォース・リープ」のクールダウンが1減少し、「フォース・リープ」のダメージが次に使用するまでさらに50%増加する    (スタック可能)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 8,
                name_jp: 'フォース・リープ',
                name_eng: 'Force Leap',
                image: '/ability/tex.ability_commanderahsoka_special01.png',
                description_jp: `遭遇中に初めて「フォース・リープ」が使用されると、即座にターゲットを倒し、各味方ライトサイドのターンメーターが35%上昇する。
                
                ターゲットに特殊ダメージを与え、3ターンのクリティカルダメージ上昇を得る。このスキルのクールダウンが4減少する。
                
                アソーカ・タノ(コマンダー)にシエン効果が発生している場合、遭遇終了までアーマー破壊を与える。
                
                「フォース・リープ」(体レイドボス): 味方銀河共和国全体をアシストに呼び、10%の増加ダメージを与える。
                
                このスキルはクールダウン状態から開始し、回避できない。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '己の道',
                name_eng: 'Her Own Path',
                image: '/abilityui/tex.abilityui_passive_commanderahsoka.png',
                description_jp: `アソーカの攻撃力とクリティカルダメージが50%上昇する。ライトサイドの非同盟のフォースの使い手、銀河共和国、またはならず者が味方にいる場合、アソーカの最大HPと防衛力も50%上昇し、これらのボーナスのすべてを味方ライトサイドと共有する。
                
                味方の数が敵よりも少ない場合、味方銀河共和国またはならず者1体につき、攻撃力、クリティカルダメージ、HP、防御力のボーナスが10%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Ahsoka-Tano-Fulcrum',
        character_name: 'アソーカ・タノ(フルクラム)',
        character_image: '/charui/tex.charui_ahsokaadult.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'バランス攻撃',
                name_eng: 'Balanced Strike',
                image: '/ability/tex.ability_ahsoka_adult_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。2ターンの間プロテクションが40%上昇する。この効果を受けていないランダムな味方1体の2ターンの間プロテクションが40%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '瞑想',
                name_eng: 'Meditate',
                image: '/ability/tex.ability_ahsoka_adult_basic.png',
                description_jp: `アソーカがフォアサイト、報復効果および他の味方に発生している各非ユニーク強化(挑発を除く)を2ターン得る。さらに、アソーカに発生中の強化1つごとにターンメーターが15%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'ワーるウィンド',
                name_eng: 'Whirlwind',
                image: '/ability/tex.ability_ahsoka_adult_special02.png',
                description_jp: `アソーカの非ユニーク強化を全て消費し、ターゲットに物理ダメージを与える。消費された強化1種類ごとに追加ヒットが発生する。ターゲットはこの攻撃に対し回避ができずアーマーが50%減少する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '忍耐',
                name_eng: 'Perseverance',
                image: '/abilityui/tex.abilityui_passive_rebel.png',
                description_jp: `アソーカは時間経過ダメージ効果を無効化し、クリティカル回避力が30%上昇する。各ターン開始時、アソーカは自身の弱体化効果を全て解除し、解除された弱体化効果ごとにHPを10%失う。その後自身の強化効果ごとにHPを5%回復する。このHP減少ではアソーカは戦闘不能にならない。
                
                $テリトリーウォーズの場合:$ アソーカ・タノ(フルクラム)の防御力、最大HP、防御力、最大プロテクションが25%、スピードが35上昇する。バトル開始時にアクティブな味方がいない場合、アソーカ・タノ(フルクラム)のアーマー突破力とクリティカル回避力がさらに100%、防御力、最大HP、攻撃力、最大プロテクションが75%上昇し、抵抗力が60%減少する。アソーカ・タノ(フルクラム)は「忍耐」で弱体化効果を解除すると、この方法で解除した弱体化効果につき、反対の強化効果(可能な場合)、ターンメーター20%、2ターンのプロテクション上昇(+20%、スタック可能)を得る。アソーカ・タノ(フルクラム)は挑発効果を無視し、アソーカ・タノ(フルクラム)に戦闘不能にされた敵は復活できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: true
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Queen-Amidala',
        character_name: 'アミダラ女王',
        character_image: '/charui/tex.charui_queenamidala.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'S-5ヘビー・ブラスター・ピストル',
                name_eng: "S-5 Heavy Blaster Pistol",
                image: '/ability/tex.ability_queenamidala_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンの間エクスポーズ状態にする(アクティブな味方侍女(おとり)がいる場合は回避不可)。銀河共和国の味方全体は2ターンの時間経過回復および時間経過プロテクションのスタックを3得る。
                
                アクティブな味方侍女(おとり)がいる場合、味方銀河共和国のHPとプロテクションが5%回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '私がアミダラ女王です',
                name_eng: 'I am Queen Amidala',
                image: '/ability/tex.ability_queenamidala_special01.png',
                description_jp: `敵全体の強化効果を全て解除し、物理ダメージを与える。味方全体が2ターンの精度上昇を得る。
                
                アクティブな味方侍女(おとり)がいる場合、ターゲットを2ターンのよろめき状態にする(回避、耐性発揮不可)。銀河共和国の味方全体が、2ターンの間、防御突破力上昇と、時間経過回復および時間経過プロテクションのスタックを3得る。この攻撃は回避できない。
                
                $グランドアリーナで、味方に銀河の伝説がいない場合:$この攻撃は敵のプロテクションを無効化し、味方全体がクリティカルダメージ上昇と、時間経過回復および時間経過プロテクションのスタック4を2ターンの間得る。アクティブな味方銀河共和国ごとに、敵全体に時間経過ダメージのスタック1とスピード低下、そして無防備状態が2ターン発生し、クールダウンが1増加する(耐性発揮不可)。アクティブな味方侍女(おとり)がいる場合、これらの効果は回避できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: true
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: 'アセンション・ガン',
                name_eng: 'Ascension Gun',
                image: '/ability/tex.ability_queenamidala_special02.png',
                description_jp: `味方全体の弱体化効果を全て解除する。銀河の伝説以外の銀河共和国の味方全体をアシストに呼び、その味方とアミダラ女王のHPとプロテクションが20%回復する。ターゲットのターンメーターを50%減少させる(耐性発揮不可)。
                
                味方全体が銀河共和国で、味方に銀河の伝説やならず者がいない場合、同盟スロットが使用可能であれば味方侍女(おとり)をバトルに召集する。
                
                味方侍女(おとり)が既に存在する場合、銀河共和国の味方全体が2ターンの間、防御力上昇、スピード上昇、抵抗力上昇を得て、タンク以外の味方銀河共和国が2ターンの間ステルス状態になる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '民と共に',
                name_eng: 'My Place is with My Peole',
                image: '/abilityui/tex.abilityui_passive_myplaceiswithmypeople.png',
                description_jp: `味方全体の防御力が20%、最大HPと最大プロテクションが15%上昇する。
                
                バトル開始時、味方全体が銀河共和国で、味方に銀河の伝説の伝説がいない場合:
                
                - 敵はターン外に攻撃するたび、1ターンの時間経過ダメージが発生し(回避、耐性発揮不可)、敵全体のターンメーターが10%減少する(耐性発揮不可)。
                - 各味方はターン開始時、ターン終了まで、自身の時間経過回復のスタックごとにクリティカルダメージが3%上昇し(スタック可能)、自身の時間経過プロテクションのスタックごとに攻撃力が3%上昇する(スタック可能)。
                - 敵はクリスタルヒットを与えるたび、遭遇終了まで、クリティカルダメージ、防御力、攻撃力が5%低下する(スタック可能、最大-50%、耐性発揮不可)。
                
                $グランドアリーナで、味方に銀河の伝説が存在せず、味方全体が銀河共和国の場合:$ 味方は特殊スキルを使用するたび、役割に応じたボーナスを得る:
                
                - +アタッカー:+ 2ターンの攻撃力上昇を得て、別のランダムな味方をアシストに呼び、20%の増加ダメージを与える
                - +ヒーラーとサポート:+ プロテクション城所(50%、スタック可能)とスピード上昇を3ターンの間得る
                - +タンク:+ HPとプロテクションが25%回復する`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '忠実な護衛',
                name_eng: 'Loyal Bodyguard',
                image: '/abilityui/tex.abilityui_passive_handmaidendecoy.png',
                description_jp: `アミダラ女王の最大HPと最大プロテクションが20%、クリティカル率とクリティカルダメージが10%上昇し、味方全体がクールダウン操作を無効化する。
                
                味方侍女(おとり)は召集されるたび、戦闘不能になるまで挑発を行う(解除、阻止不可)。侍女(おとり)は他の全ての強化効果と弱体化効果を無効化し、ターンを開始しない。侍女(おとり)が戦闘不能になるたび、彼女を戦闘不能にした敵は2ターンの間疑心状態になり(回避、耐性発揮不可)、アミダラ女王がボーナスターンと2ターンのダメージ耐性を得る(コピー、解除、阻止不可)。
                
                アクティブな味方侍女(おとり)がいる場合:
                
                - 味方銀河共和国の時間経過回復または時間経過プロテクションが切れるたび、その味方のHPとプロテクションが5%回復する。
                - アミダラ女王の時間経過回復または時間経過プロテクションが切れるたび、バトル終了までアミダラ女王は*女王の保護*のスタックを1得る(最大10。コピー、解除、阻止不可)。アミダラ女王の女王の保護のスタックごとに、銀河共和国の味方全体がその2倍のステータスを得る。味方侍女(おとり)はこれらの効果を無効化し、おとりが戦闘不能になってもその効果は持続するが、アミダラ女王が戦闘不能になると解除される。
                
                *女王の保護:*
                最大HPと最大プロテクションが3%、有効性と抵抗力が5%、スピードが5上昇する(スタックごと)
                
                $グランドアリーナで、味方に銀河の伝説またはならず者がおらず、味方全体が銀河共和国の場合:$ 味方全体のクリティカルダメージが25%、マスターが40%上昇し、恐怖と回復無効を無効化する。
                味方は時間経過ダメージのスタックが発生するたび、それを解除し、味方全体が2ターンの時間経過回復および時間経過プロテクションのスタックを1得る。
                各遭遇開始時、味方侍女(おとり)1体を招集する。味方のおとりがクリティカルヒットを受けるたび、敵全体に2ターンの間、有効性低下と抵抗力低下が発生する(回避不可)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '侍女(おとり)',
                name_eng: 'Handmaiden Decoy',
                image: '/charui/tex.charui_queenamidala_decoy.png',
                description_jp: `ライトサイド、タンク、銀河共和国
                
                *[通常] ボディーガード:* 味方銀河共和国のHPとプロテクションが10%回復する。アドバンテージがまだ発生していないランダムな敵に、1ターンのアドバンテージを与える(回避、耐性発揮不可)。
                
                *[ユニーク] 召集:* このユニットのステータスは召集者のステータスによって変化する。特定のレイドではこのユニットを召集できない。このユニットは復活できない。効果で戦闘不能のユニットを数える場合、このユニットは数に含めない。味方戦闘ユニットがいなくなった場合、このユニットはバトルから逃走する。この召集ユニットがスロットにいる場合、ユニットは復活できない。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月15日'
    }, {
        id: 'Amilyn-Holdo',
        character_name: 'アミリン・ホルド',
        character_image: '/charui/tex.charui_holdo.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'メジャーショット',
                name_eng: 'Measured Shot',
                image: '/ability/tex.ability_holdo_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、最もコンディションの悪い他の味方レジスタンスに2ターンのフォアサイト効果が切れると、その味方のHPが10%回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 5,
                name_jp: 'バンカーバスター',
                name_eng: 'Bunker Buster',
                image: '/ability/tex.ability_holdo_special01.png',
                description_jp: `敵全体に特殊ダメージを与え、2ターンのめまい効果を発生させる。メインターゲットの防御力と回避力を2ターンの間低下させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 5,
                name_jp: '救済',
                name_eng: 'Reprieve',
                image: '/ability/tex.ability_holdo_special02.png',
                description_jp: `指定した他の味方1体の弱体を全て解除し、そのユニットはHPが40%、プロテクションが20%回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '秘めたる自身',
                name_eng: 'Quiet Confidence',
                image: '/abilityui/tex.abilityui_passive_uniqueability.png',
                description_jp: `他の味方レジスタンスのフォアサイト効果が失われると、アミリン・ホルドは1ターンの挑発を行い、HPが10%回復する。挑発が発生していない間は、アミリン・ホルドのスピードが50上昇し、他の味方レジスタンス全員のクリティカル回避力が20%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Eeth-Koth',
        character_name: 'イース・コス',
        character_image: '/charui/tex.charui_eethkoth.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'ブリーチ・ストライク',
                name_eng: 'Breaching Strike',
                image: '/ability/tex.ability_eethkoth_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、50%の確率で3ターンの間防御力を低下させる。相手がドロイドの場合、確率は100%になる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'フォースプッシュ',
                name_eng: 'Force Pushl',
                image: '/ability/tex.ability_eethkoth_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、75%の確率で1ターンの間スタン状態にする。ターゲットがドロイドの場合、さらに100%の確率で3ターンの間スキルブロック状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '熱心なジェダイのディフェンダー',
                name_eng: 'Stalwart Jedi Defender',
                image: '/abilityui/tex.abilityui_passive_def.png',
                description_jp: `味方ジェダイの防御力が60上昇する。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '対ドロイド・スペシャリスト',
                name_eng: 'Anti-Droid Specialist',
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `ドロイド攻撃時、イース・コスのクリティカル率が35%、クリティカルダメージが20%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Ewoke-Elder',
        character_name: 'イウォーク・エルダー',
        character_image: '/charui/tex.charui_ewok_chief.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'ガイド・ストライク',
                name_eng: 'Guiding Strike',
                image: '/ability/tex.ability_ewok_elder_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、60%の確率でターンメーターが50%上昇する。さらに他の味方イウォークはその半分量、その他の味方は10%ターンメーターが上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '部族の癒し手',
                name_eng: 'Tribial Healer',
                image: '/ability/tex.ability_ewok_elder_special01.png',
                description_jp: `味方全体から弱体を全て解除する。味方全体のHPがイウォーク・エルダーの最大HPの30%分回復し、35%の確率で戦闘不能になった味方がHP15%で復活する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 7,
                name_jp: '森の力',
                name_eng: 'Power of the Forest',
                image: '/ability/tex.ability_ewok_elder_special02.png',
                description_jp: `戦闘不能になった味方をランダムに1体、HP40%で復活させる。イウォーク・エルダーは55%の確率でターンメーターが45%上昇する。復活した味方がイウォークの場合、そのユニットをアシストに呼ぶ。味方イウォークが戦闘不能になると、このスキルのクールダウンが1減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Ewoke-Scout',
        character_name: 'イウォーク・スカウト',
        character_image: '/charui/tex.charui_ewok_scout.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'イウォークの奇襲',
                name_eng: 'Ewoke Ambush',
                image: '/ability/tex.ability_ewok_scout_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、55%の確率でターンメーターを50%減少させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'ラッシュ・アタック',
                name_eng: 'Rushing Attack',
                image: '/ability/tex.ability_ewok_scout_special01.png',
                description_jp: `クリティカルヒット率が50%上昇した攻撃でターゲットに物理ダメージを与え、ランダムな味方1体をアシストに呼ぶ。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '種族の戦術',
                name_eng: 'Tribal Tactics',
                image: '/abilityui/tex.abilityui_passive_dodge.png',
                description_jp: `生存している味方イウォーク1体ごとに、イウォーク・スカウトの回避力が5%上昇する。さらに攻撃を回避するかクリティカルヒットを決めるとターンメーターが30%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Imperial-Super-Commando',
        character_name: 'インペリアル・スーパー・コマンドー',
        character_image: '/charui/tex.charui_imperial_super_commando.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'アドバンテージ確保',
                name_eng: 'Seize the Advantage',
                image: '/ability/tex.ability_imperial_super_commando_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、70%の確率で2ターンの間攻撃力を低下させる。ターゲットのターンメーターが50%を下回る場合、再攻撃を行う。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 2,
                name_jp: '高度戦略',
                name_eng: 'Superior tactics',
                image: '/ability/tex.ability_imperial_super_commando_special01.png',
                description_jp: `ターゲットに物理ダメージを与えて強化を全て解除し、2ターンの強化無効を発生させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '優位確保',
                name_eng: 'Upper Hand',
                image: '/abilityui/tex.abilityui_passive_counterattack.png',
                description_jp: `インペリアル・スーパー・コマンドーのカウンター率が100%上昇し、強化効果が発生していない敵ごとに攻撃力が15%上昇する。
                
                バトル開始時、味方全体がダークサイドのマンダロリアンまたは帝国だった場合: 
                
                - ダークサイドの味方マンダロリアンはターン外に攻撃するたび、追加の固定ダメージを与え、プロテクションが10%回復する
                
                - インペリアル・スーパー・コマンドーまたはガー・サクソンがターン外に攻撃するたび、他のもう一体も同様に攻撃する(1ターンに1回限り)`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'スーパー・コマンドー・ベスカー・アーマー',
                name_eng: 'Super Commando Beskar Armor',
                image: '/abilityui/tex.abilityui_passive_def.png',
                description_jp: `インペリアル・スーパー・コマンドーとガー・サクソンの防御力が30%、クリティカル回避力が50%、最大HPと最大プロテクションが20%上昇する。
                
                インペリアル・スーパー・コマンドーまたはガー・サクソンが初めて戦闘不能になった場合、代わりに2ターンのダメージ体制を得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Vandor-Chewbacca',
        character_name: 'ヴァンドア・チューバッカ',
        character_image: '/charui/tex.charui_chewbacca_vandor.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'アンチェインド',
                name_eng: 'Unchained',
                image: '/ability/tex.ability_chewbacca_vandor_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。チューバッカのターンである場合、2ターンのアドバンテージを得る。この攻撃は防御力を無効化する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '自由の戦士',
                name_eng: 'Freedom Fighter',
                image: '/ability/tex.ability_chewbacca_vandor_special01.png',
                description_jp: `攻撃力ではなくチューバッカの最大HPに応じた物理ダメージをターゲットに2回与える。指定した味方のHPが、そのダメージの50%分回復する。さらに、チューバッカとその味方は2ターンのプロテクション上昇(30%)を得る。
                
                *準備万端:* チューバッカが準備万端状態の時、この攻撃のダメージが2倍になり、与えたダメージの50%分チューバッカのHPが回復し、このスキルのクールダウンが2減少し、準備万端状態の味方全てに2ターンのプロテクション上昇(30%)が発生する。その後、チューバッカの準備万端状態は解除される。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ザ・ビースト',
                name_eng: 'The Beast',
                image: '/abilityui/tex.abilityui_passive_firstaid.png',
                description_jp: `チューバッカの最大プロテクションが40%減少する代わりに、最大HPが80%上昇する。さらに、チューバッカに強化効果が発生している間、敵全体の与えるダメージが25%減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '凶暴な守護者',
                name_eng: 'Ferocious Protector',
                image: '/abilityui/tex.abilityui_passive_def.png',
                description_jp: `強化発生中、チューバッカの100%のカウンター率が発生する。強化発生中の各ターン終了時、いずれかの味方が攻撃ダメージを受けてチューバッカが攻撃ダメージを受けなかった場合、チューバッカのプロテクションが最大HPの10%分回復し、他のならず者はその半分量回復する。この方法でチューバッカのプロテクションが最大まで回復すると、チューバッカが準備万端状態になる。チューバッカが準備万端状態の時にライトサイドの味方ライトサイドが戦闘不能になると、HP60%の状態で復活させる。その後、チューバッカの準備万端状態は解除される。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'General-Veers',
        character_name: 'ヴィアーズ将軍',
        character_image: '/charui/tex.charui_veers.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '大胆な攻撃',
                name_eng: 'Daring Attack',
                image: '/ability/tex.ability_veers_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、それぞれ70%の確率で2ターンのスピード上昇をヴィアーズ将軍とランダムな味方帝国軍トルーパー1体に発生させる(この効果を受けていない場合)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '無慈悲な襲撃',
                name_eng: 'Ruthless Assault',
                image: '/ability/tex.ability_veers_special01.png',
                description_jp: `敵全体に物理ダメージを与え、55%の確率で1ターンの間スキルブロック状態にする。生存している敵反乱軍1体ごとにダメージが10%増加する。全ての味方帝国軍トルーパーをアシストに呼ぶ(ダメージは40%減少)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '帝国アサルト・コマンダー',
                name_eng: 'Imperial Assault Commander',
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `味方帝国軍の攻撃力が30%上昇する。味方帝国軍トルーパーはスピードが20上昇し、強化を得るとターンメーターが10%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '攻撃的戦術家',
                name_eng: 'Aggressive Tectician',
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `ヴィアーズ将軍がアクティブな間に敵が戦闘不能になると、味方帝国軍トルーパーは2ターンの間攻撃力上昇、ターンメーターは50%上昇し、プロテクションが10%回復する。
                
                ヴィアーズ将軍がアクティブな間、味方帝国軍トルーパーはクリティカル率が15%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Wicket',
        character_name: 'ウィケット',
        character_image: '/charui/tex.charui_ewok_wicket.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '探究者の一突き',
                name_eng: 'Inquisitive Jab',
                image: '/ability/tex.ability_ewok_wicket_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンの間クリティカル率が上昇する。味方イウォークがウィケットをアシストに呼ぶと、そのユニットも2ターンの間クリティカル率が上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '森林奇襲',
                name_eng: 'Forest Ambush',
                image: '/ability/tex.ability_ewok_wicket_special01.png',
                description_jp: `敵全体に物理ダメージを与える。クリティカルヒット1回ごとに味方イウォークのターンメーターが10%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'ゲリラ奇襲',
                name_eng: 'Guerrilla Strike',
                image: '/ability/tex.ability_ewok_wicket_special02.png',
                description_jp: `ターゲットに物理ダメージを与え、指定した味方をアシストに呼ぶ。指定した味方がイウォークの場合、ウィケットとそのユニットに2ターンのステルス効果の発生とクリティカルダメージが上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '隠密作戦',
                name_eng: 'Furtive Tactics',
                image: '/abilityui/tex.abilityui_passive_extraturn.png',
                description_jp: `生存している味方イウォークおよびステルス状態の味方1体ごとに、ウィケットのクリティカルダメージが10%上昇する。ウィケットは自ターン終了時に50%の確率で追加ターンを開始する。前のターンでこの効果が発動している場合、この確率は10%に減少する。ウィケットのクリティカルヒット時に、全味方イウォークのHPが4%、プロテクションが2%回復する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Visas-Marr',
        character_name: 'ヴィサス・マー',
        character_image: '/charui/tex.charui_visas.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'テレキネシスブラスト',
                name_eng: 'Telekinetic Blast',
                image: '/ability/tex.ability_visas_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、ヴィサスと弱体を受けているランダムな味方1体の弱体を全て解除する。ターゲットがシスの場合、ヴィサス・マーとHPが最も低い味方の最大HPが25%回復する。弱体が1つでも解除された場合、ダークヒーリングのクールダウンが1減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 8,
                name_jp: 'ダークヒーリング',
                name_eng: 'Dark Healing',
                image: '/ability/tex.ability_visas_special01.png',
                description_jp: `敵全体に物理ダメージを与える。味方全体のヘルス・スティールが1ターン上昇し、ヴィサス・マーの最大HPの35%分HPが回復する。スキル使用後にヴィサス・マーのHPが最大値である場合、ランダムな戦闘不能の味方をHP50%の状態で復活させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '貫通ストライク',
                name_eng: 'Piercing Strike',
                image: '/ability/tex.ability_visas_special02.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンの間味方全体の防御突破力が上昇する。この攻撃はプロテクションを無効化する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '光への回帰',
                name_eng: 'Returned to the Light',
                image: '/abilityui/tex.abilityui_passive_counterattack.png',
                description_jp: `弱体が発生していない間、ヴィサス・マーのカウンター率が100%上昇し、他の味方が敵シスを攻撃すると1ターンに1度60%の確率でアシストする。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Wedge-Antilles',
        character_name: 'ウェッジ・アンティリーズ',
        character_image: '/charui/tex.charui_rebelpilot_wedge.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '集中攻撃',
                name_eng: 'Focused Fire',
                image: '/ability/tex.ability_wedge_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、ウェッジの次のターンの終わりまで防御力を低下させる。防御力低下が発生している敵に対して、この攻撃のダメージは50%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'レッド中隊ストライク',
                name_eng: 'Red Squadron Strike',
                image: '/ability/tex.ability_wedge_special01.png',
                description_jp: `敵全体に物理ダメージを与える。帝国軍またはHPが半分以上の敵に対して、この攻撃のダメージは50%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '反乱軍の勇壮',
                name_eng: 'Rebel Heroism',
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `味方反乱軍の攻撃力が30%上昇し、クリティカルヒット時には最大HPの15%回復、ターンメーターが10%上昇する。さらに、敵を倒すと最大HPの25%が回復する。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'レッド・リーダー',
                name_eng: 'Red Leader',
                image: '/abilityui/tex.abilityui_leader_default.png',
                description_jp: `HP最大状態の味方1体ごとにウェッジの攻撃力が12%、スピードが9上昇する。さらに、HPが最大でない味方(戦闘不能を含む)1体ごとにスピードが15上昇する。ビッグズ・ダークライダーがいる場合、彼もこれらのボーナスが発生する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Eight-Brother',
        character_name: 'エイス・ブラザー',
        character_image: '/charui/tex.charui_eighthbrother.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '回転攻撃',
                name_eng: 'Whirling Strike',
                image: '/ability/tex.ability_eighthbrother_basic.png',
                description_jp: `このターン、エイス・ブラザーにステルス効果が発生していない場合、3ターンのステルス効果が発生する。その後、ターゲットに物理ダメージを与え、ターゲットがジェダイの場合、遭遇終了まで「粛清」のスタックを1発生させる(最大6、コピー、体制発揮不可)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'フォトン・グレネード',
                name_eng: 'Photon Grenades',
                image: '/ability/tex.ability_eighthbrother_special01.png',
                description_jp: `このターン、エイス・ブラザーにステルス効果が発生していない場合、3ターンのステルス効果が発生する。敵全体に物理ダメージを与え、2ターンの間、精度低下と炎上を発生させる。このスキルによるダメージを受けた敵ジェダイには、代わりに2ターンの間、暗闇と炎上を発生させる(耐性発揮不可)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 5,
                name_jp: 'ブレード・ヒルト',
                name_eng: 'Bladed Hilt',
                image: '/ability/tex.ability_eighthbrother_special02.png',
                description_jp: `このターン、エイス・ブラザーにステルス効果が発生していない場合、3ターンのステルス効果が発生する。物理ダメージを与え、「粛清」のスタックを最大5消費する。以降、「粛清」のスタックがこの方法で消費されるたび、再度物理ダメージを与える。
                
                - *スタック消費1以上:* 2ターンの回復無効
                - *スタック消費2以上:* 2ターンのスピード低下
                - *スタック消費3以上:* 1ターンのスキルブロック
                - *スタック消費4以上:* 2ターンの強化無効
                - *スタック5消費:* バトル終了までアーマー破壊
                
                敵ジェダイはこれらの弱体化効果を耐性発揮できない。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'もうたくさんだ',
                name_eng: 'More Than Enough',
                image: '/abilityui/tex.abilityui_leader_inquisitor.png',
                description_jp: `味方帝国軍の精度と有効性が5%上昇する。尋問官はさらに30%上昇する。また、ジェダイのユニークスキルでフォアサイトを得た敵ジェダイは、2ターンの間、暗闇状態になる(回避、耐性発揮不可)。味方尋問官が通常スキルを使用するたび、30%の確率で遭遇終了まで「粛清」のスタックを1発生させる(最大6。コピー、回避、耐性発揮不可)。
                
                $テリトリーウォーズの場合:$ 敵ジェダイがジェダイのユニークスキルで挑発を行うたび、敵全体は自身の最大HP20%分のダメージを受ける。このダメージでは敵を戦闘不能にできない。敵ジェダイがジェダイのユニークスキルでクリティカルヒット耐性を得るたび、敵はクリスタルヒット耐性を解除し、代わりに1ターンの無防備状態になる(耐性発揮不可)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: true
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'シャドウハント',
                name_eng: 'Hunting A Shadow',
                image: '/abilityui/tex.abilityui_passive_stealth.png',
                description_jp: `バトル開始時、エイス・ブラザーに3ターンのステルス効果が発生する。エイス・ブラザーはステルス効果を得るたび、HPが20%、プロテクションが20%回復する。
                
                エイス・ブラザーがターン中にスキルを使用するたび、そのターン開始時にステルス状態だった場合、ステルス効果を失い、2ターンの間、精度と有効性が上昇する。そのスキルが「回転攻撃」または「フォトン・グレネード」だった場合、これらのスキルによるダメージを受けた敵に「粛清」のスタックを1発生させる(最大6)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '忍耐',
                name_eng: 'Patience',
                image: '/abilityui/tex.abilityui_passive_jediwillneverbevictorious.png',
                description_jp: `味方全体(3体以上)が尋問官の場合、このユニットの最大HP、最大プロテクション、有効性が20%上昇する。ターン開始時にこのユニットがステルス状態の場合、ステルス状態の間、このユニットの防御突破力と攻撃力が40%上昇する。敵がターン外に攻撃するたび、その敵は「粛清」のスタックを1得る(最大6。回避、耐性発揮不可)。敵に発生している「粛清」が消費または解除されるたび、このユニットのターンメーターが3%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Echo',
        character_name: 'エコー',
        character_image: '/charui/tex.charui_bb_echo.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '攻撃的防御',
                name_eng: 'Daring Defense',
                image: '/ability/tex.ability_bbecho_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。最弱の味方クローン・トルーパーに2ターンの防御力上昇と回避力上昇を与える(この効果を受けていない場合)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '先回り',
                name_eng: 'One Step Ahead',
                image: '/ability/tex.ability_bbecho_special01.png',
                description_jp: `ターゲットに2ターンの強化無効を発生させ、敵全体を2ターンの間エクスポーズ状態にする。
                指定した味方クローン・トルーパーの弱体化効果を全て解除してアシストに呼ぶ。その味方がバッド・バッチの場合、エコーは敵ターゲットのクールダウンを1増加させる(銀河の伝説を除く)。この攻撃は回避できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '疑う余地なし',
                name_eng: 'Never Any Doubt',
                image: '/ability/tex.ability_bbecho_special02.png',
                description_jp: `味方クローン・トルーパーに2ターンの回避力上昇を与える。敵全体の強化効果を全て解除し、2ターンのめまいと回復無効を発生させる。
                
                解除された強化効果1つにつき、味方クローン・トルーパーの攻撃力が次のターン終了まで10%上昇し、味方バッド・バッチのターンメーターが5%上昇する。この攻撃は回避または耐性発揮できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '生き延びるために',
                name_eng: 'One That Survives',
                image: '/abilityui/tex.abilityui_passive_bbecho.png',
                description_jp: `味方クローン・トルーパーが強化効果を得るまたは失うたび、その味方のHPとプロテクションが4%回復する(味方バッド・バッチはその2場合)。
                
                味方バッド・バッチが敵に弱体化効果を与えるたび、その敵のプロテクションが8%減少する。その敵のプロテクションが50%を下回り、かつHPが50%を上回ている場合は、さらにHPも8%減少する。この効果はレイドボスや銀河の伝説には適用されない。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Ezra-Bridger',
        character_name: 'エズラ・ブリッジャー',
        character_image: '/charui/tex.charui_ezra_s3.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'ラッシュ・ストライク',
                name_eng: 'Rushing Strike',
                image: '/ability/tex.ability_ezra_s3_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、40%の確率で再攻撃を行う。エズラが弱体を受けていない場合、この確率は２倍になる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'フラリッシュ',
                name_eng: 'Flourish',
                image: '/ability/tex.ability_ezra_s3_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、強化を全て解除する。強化が発生していない場合、この攻撃のクールダウンが1減少し、エズラのターンメーターが75%上昇する。エズラの防御力が2ターンの間上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'ウォッチ&ラーン',
                name_eng: 'Watch and Learn',
                image: '/ability/tex.ability_ezra_s3_special02.png',
                description_jp: `指定した味方が攻撃を行い、エズラがアシストする(ダメージが20%増加)。選択した味方のタイプに応じて、両攻撃者は以下のボーナス効果を得る:
                
                - アタッカー: 可能な場合この攻撃がクリティカルヒットになる
                
                - タンク: 2ターンのプロテクション上昇(40%)
                
                - サポート: ターンメーターが40%上昇する`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '完遂',
                name_eng: 'Push Through',
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `遭遇終了まで、エズラはターン終了時に攻撃力が10%上昇する(スタック可能、最大40%)。戦闘不能になるとリセットされる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Enfys-Nest',
        character_name: 'エンフィス・ネスト',
        character_image: '/charui/tex.charui_enfys.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'カットスルー',
                name_eng: 'Cut Thruough',
                image: '/ability/tex.ability_enfys_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、1ターンの間エクスポーズ状態にする。ターゲットに防御系強化が発生している場合、その効果を解除する。この攻撃は回避できない。
                
                (防御系強化には防御力、HP、プロテクション、回避力、抵抗力上昇に加え、挑発、ステルス、フォアサイト、時間経過回復、クリティカル耐性が含まれる。)`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'サドンインパクト',
                name_eng: 'Sudden Impact',
                image: '/ability/tex.ability_enfys_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、1ターンの間スタン状態にし、3ターンの強化無効を発生させる。ターゲットにプロテクションがある場合、50%の追加ダメージを与え、アーマーを無効化する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: 'キネタイトチャージ',
                name_eng: 'Kinetite Charge',
                image: '/ability/tex.ability_enfys_special02.png',
                description_jp: `敵全体に特殊ダメージを与え、2ターンのめまい効果を発生させ、HPが最大値の敵のターンメーターを20%減少させる。さらにHPが最大値を下回っている敵1体ごとに、ターンメーターが40%上昇する。この攻撃はカウンターおよび回避ができない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '闘争本能',
                name_eng: 'Fighting Instinct',
                image: '/abilityui/tex.abilityui_passive_enfys.png',
                description_jp: `ネストのカウンター率が80%上昇し、自ターン中は挑発を無効化する。
                
                攻撃ダメージを受けると、クリティカル率30%およびボーナスプロテクション40%を得る(スタック可能)。ボーナスプロテクションは毎回40%ずつ上昇する。ボーナスはどちらも、次ターン終了時に解除およびリセットされる。
                
                敵が強化あるいは弱体を失うと、遭遇終了までネストのクリティカルダメージとヘルス・スティールが2%上昇する(スタック可能)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Embo',
        character_name: 'エンボ',
        character_image: '/charui/tex.charui_embo.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '分解ショット',
                name_eng: 'Dismantling Shot',
                image: '/ability/tex.ability_embo_basic.png',
                description_jp: `強化効果を全て解除し、ターゲットに物理ダメージを与える。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'キューゾ戦闘ヘルメット',
                name_eng: 'Kyuzo War Helmet',
                image: '/ability/tex.ability_embo_special01.png',
                description_jp: `ターゲットに物理ダメージを与える。この攻撃はエンボの最大プロテクションの35%に等しい分のボーナスダメージを与える。その後、エンボはプロテクションを50%失う。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '寡黙なアサシン',
                name_eng: 'The Quiet Assassin',
                image: '/abilityui/tex.abilityui_passive_seizetheday.png',
                description_jp: `賞金稼ぎ全体のカウンター率が50%、ヘルス・スティールが50%上昇する。エンボがリーダースロットに設定されていると、次の契約が発動する(同盟スロットでは不可)
                
                *契約:* 強化なしで敵にダメージを15回与える(契約達成には味方賞金稼ぎのみが参加可能)
                
                *報酬:* 味方賞金稼ぎ全体の攻撃力が50%上昇する。味方賞金稼ぎが通常スキルを使うと、ターゲットの最大プロテクションの7%分ボーナスダメージを与える`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'キューゾ流',
                name_eng: 'Way of the Kyuzo',
                image: '/abilityui/tex.abilityui_passive_embo.png',
                description_jp: `エンボがクリティカルヒットを受けなくなる。エンボにプロテクションがある場合はエンボの攻撃力が30%上昇し、プロテクションが無い場合はクリスタル率が30%上昇する。敵1体から攻撃ダメージを受けた際にプロテクションがない場合は、エンボに2ターンのフォアサイトが発生する。
                
                $テリトリーウォーズの場合:$ 味方賞金稼ぎの最大プロテクションが40%上昇する。エンボのターン終了時、味方賞金稼ぎのプロテクションがエンボの最大プロテクションの25%分回復(エンボの場合は2倍)。エンボにプロテクションが発生している間、味方賞金稼ぎが弱体化効果発生中にダメージを受けると、賞金稼ぎの味方全体の防御力が30%、ターンメーターが5%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'エンボのボーナス',
                name_eng: "Embo's Payout",
                image: '/abilityui/tex.abilityui_passive_contract.png',
                description_jp: `エンボは契約報酬を受け取ると、次のボーナスも獲得する(契約は特定の賞金稼ぎリーダースキルによって付与される)。
                
                *ボーナス:* エンボクリティカルヒットを決めた後にボーナスヒットを決めた跡にボーナスターンを得る。ボーナスターンは連続では得られない。エンボは新しい特殊スキル*「エルーシブ・ストライク」*を得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: 'エルーシブ・ストライク',
                name_eng: "Embo's Payout",
                image: '/ability/tex.ability_embo_special02.png',
                description_jp: `物理ダメージを与え、与えたダメージと等しい分のプロテクションを回復させる。この攻撃はプロテクションを無効化する。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Aurra-Sing',
        character_name: 'オーラ・シング',
        character_image: '/charui/tex.charui_aurrasing.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '弱体ショット',
                name_eng: 'Weakening Shot',
                image: '/ability/tex.ability_aurrasing_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、70%の確率で1ターンの間スタン状態にする。ターゲットが弱体効果を受けている場合、オーラ・シングのターンメーターが20%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '活性化',
                name_eng: 'Hustle',
                image: '/ability/tex.ability_aurrasing_special01.png',
                description_jp: `オーラ・シングのクリティカル率と攻撃力が3ターン上昇し、次のスキル使用時のダメージが35%上昇する。オーラ・シングが既にステルス状態の場合、ボーナスターンを得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: 'スナイパーの技術',
                name_eng: 'Snipers Expertise',
                image: '/ability/tex.ability_aurrasing_special02.png',
                description_jp: `ターゲットに物理ダメージを与える。ターゲットが転倒状態の場合、この攻撃によるダメージが200%になり、このスキルのクールダウンがリセットされる(レイドボスのみ転倒状態にできる)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'ゲームプラン',
                name_eng: 'Game Plan',
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `ステルス状態の間、味方賞金稼ぎとならず者の攻撃力が30%上昇する。バトル開始時および味方賞金稼ぎが敵に倒されると、味方賞金稼ぎアタッカー全体に2ターンのステルス効果が発生する。オーラ・シングがリーダースロットに設定されていると、次の契約が発動する(同盟スロットでは不可):
                
                *契約:* 強化発生中にスキル1つを10回使用する(契約達成には味方賞金稼ぎのみが参加可能)
                
                *報酬:* 味方賞金稼ぎ全体のカウンター率が50%上昇し、ボーナス効果が発動する。敵が倒れると、味方賞金稼ぎのプロテクションが25%回復し、ターンメーターが25%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '冷酷な殺し屋',
                name_eng: 'Relentless Killer',
                image: '/abilityui/tex.abilityui_passive_stealth.png',
                description_jp: `オーラ・シングのクリティカルダメージが40%上昇する。このボーナス効果はステルス状態の間2倍になる。味方賞金稼ぎが敵に倒されると、バトル終了までオーラ・シングのクリティカル率が10%上昇する(スタック可能)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'オーラ・シングのボーナス',
                name_eng: "Aurra Sing's Payout",
                image: '/abilityui/tex.abilityui_passive_contract.png',
                description_jp: `オーラ・シングは契約報酬を受け取ると、次のボーナスも獲得する(契約は特定の賞金稼ぎリーダースキルによって付与される)。
                
                *ボーナス:* オーラ・シングの攻撃力が25%、ヘルス・スティールが50%上昇する。特殊スキルを使用すると1ターンの間オーラ・シングがステルス状態になる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Old-Daka',
        character_name: 'オールド・ダカ',
        character_image: '/charui/tex.charui_daka.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'インサイトフル・ブロー',
                name_eng: 'Insightful Blow',
                image: '/ability/tex.ability_daka_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、75%の確率で1ターンの間スタン状態にする。ランダムな敵1体に物理ダメージを与え、55%の確率で1ターンの間スタン状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '復活の詠唱',
                name_eng: 'Chant of Resurrection',
                image: '/ability/tex.ability_daka_special01.png',
                description_jp: `戦闘不能になったランダムな味方ナイトシスター1体をHP1で復活させ、35%の確率(ナイトシスターは成功率2倍)で戦闘不能になった他の味方もHP1で復活させる。味方全体のHPがオールド・ダカの最大HPの50%分回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'ナイトシスター・エルダー',
                name_eng: 'Nightsister Elder',
                image: '/abilityui/tex.abilityui_passive_def.png',
                description_jp: `味方ナイトシスターのHPが50%、防御力が50%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'サーブ・アゲイン',
                name_eng: 'Serve Again',
                image: '/abilityui/tex.abilityui_passive_heal_buff.png',
                description_jp: `他の味方が戦闘不能になると、オールド・ダカのターンメーターが50%上昇し、「復活の詠唱」のクールダウンが1減少する。オールド・ダカがアクティブな間に他の味方が復活すると、復活した味方はターンメーターが20%上昇し、2ターンの間攻撃力と防御力が上昇する。さらに、遭遇終了までオールド・ダカの最大HPが10%上昇する(スタック可能)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Obi-Wan-Kenobi-Old-Ben',
        character_name: 'オビ=ワン・ケノービ(ベン爺)',
        character_image: '/charui/tex.charui_obiwanep4.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'エレガントフォーム',
                name_eng: 'Elegant Form',
                image: '/ability/tex.ability_obiwankenobioldhermit_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンの回避力低下を発生させ、2ターンの間有効性が上昇する。この攻撃は回避できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 5,
                name_jp: 'マインド・トリック',
                name_eng: 'Mind Tricks',
                image: '/ability/tex.ability_obiwankenobioldhermit_special01.png',
                description_jp: `敵全体を1ターンの間スキルブロック状態にし、2ターンの間攻撃力を低下させる。さらに80%の確率でターンメーターを60%減少させる。味方ジェダイおよび反乱軍は、耐性発揮した効果1つごとにターンメーターが3%上昇する。この攻撃は回避できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '真なる守護者',
                name_eng: 'Devoted Protector',
                image: '/ability/tex.ability_obiwankenobioldhermit_event01.png',
                description_jp: `ベン爺が2ターンの挑発を行う。この挑発が終わると、ベン爺は1ターンの挑発を行う。味方全体の防御力が2ターンの間上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'ジェダイの老騎士',
                name_eng: 'Old Jedi Knight',
                image: '/abilityui/tex.abilityui_passive_dodge.png',
                description_jp: `味方全体の回避力が15%上昇する。さらに攻撃を回避するとターンメーターが30%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '不屈の心',
                name_eng: 'If You Strike Me Down',
                image: '/abilityui/tex.abilityui_passive_removeharmful.png',
                description_jp: `味方ジェダイまたは反乱軍がダメージを受けると、ベン爺のターンメーターが5%上昇する。ベン爺が初めて戦闘不能になった時に味方全体が2ターンの攻撃力上昇とスピード上昇を得て、HPが50%、プロテクションが50%回復し、ターンメーターが25%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: "2024年3月15日"
    }, {
        id: 'Omega',
        character_name: 'オメガ',
        character_image: '/charui/tex.charui_badbatchomega.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '鎮圧射撃',
                name_eng: 'Disarming Shot',
                image: '/ability/tex.ability_badbatchomega_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。オメガに回避力上昇が発生している場合、1ターンの暗闇とめまいを発生させる。
                
                オメガに解除可能な強化効果が発生しており、かつオメガのターンである場合、オメガは再びダメージを与える(ダメージは50%減少)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'アダプティブラーナー',
                name_eng: 'Adaptive Learner',
                image: '/ability/tex.ability_badbatchomega_special01.png',
                description_jp: `物理ダメージを与え、ターゲットを*標的*状態にする。他の全ての敵から標的を解除し、オメガは*射撃訓練*のスタックを1得る。これらの効果はコピー、解除、阻止、耐性発揮できず、遭遇が終了するか敵から標的効果が取り除かれるかオメガが戦闘不能になるまで継続する。
                
                ターゲットがエクスポーズ状態の場合、この攻撃で敵に2ターンのターゲットロックが発生し、ターンメーターが10%減少する。
                
                *標的:* ユニットがこの効果を受けている間、オメガに射撃訓練の効果が発生する。オメガは挑発を無視してこの敵をターゲットにできる
                
                *射撃訓練:* スタックごとに、クリティカル率と攻撃力が5%、クリティカルダメージが10%上昇する`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '共感力',
                name_eng: 'Empathy First',
                image: '/ability/tex.ability_badbatchomega_special02.png',
                description_jp: `オメガは自身の弱体化効果を全て解除し、2ターンのステルス効果を得る。味方バッド・バッチが2ターンのプロテクション上昇(40%)と防御突破力上昇、10%のターンメーターを得る。
                
                オメガにクリティカル率上昇が発生している場合、味方バッド・バッチのターンメーターがさらに20%上昇し、2ターンの時間経過プロテクション(20%)を得る。
                
                オメガが既にステルス状態かつ敵に標的効果が発生している場合、オメガは射撃訓練のスタックを1つ得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'チームの一員',
                name_eng: 'Part of the Squad',
                image: '/abilityui/tex.abilityui_passive_badbatchomega.png',
                description_jp: `遭遇開始時に味方全員がバッド・バッチの場合、味方リーダーがターンを開始するたび、遭遇終了までオメガのスピードが5、攻撃力が2%上昇する(スタック可能、最大でスピード50、攻撃力20%)。
                
                オメガはステルス状態の間、クリティカルダメージが10%上昇する。味方バッド・バッチが特殊スキルを使用すると、オメガがアシストする(ダメージは60%減少)。オメガは防御突破力上昇中、クリティカル率が10%上昇する。
                
                オメガの攻撃は、オメガに発生している強化ごとに与えるダメージが5%、敵に発生している弱体化効果ごとにダメージが5%増加する。
                
                $テリトリーバトルの場合:$ バトル開始時、バッド・バッチの味方全体の最大HPが、その味方のレリックアンプレベルごとに最大プロテクションの10%分上昇する(最大100%)。その後、プロテクションを全て失う。味方バッド・バッチがHP割合ダメージ効果で受けるダメージが減少する。これらのボーナスはオメガが初めて戦闘不能になるまで持続する。
                
                各遭遇開始時、オメガのレリックアンプレベルごとに、味方バッド・バッチは2ターンの間、10%のボーナスプロテクションを得る(最大100%)。オメガは通常スキルを使用するたび、味方バッド・バッチごとに再度ダメージを与える(ダメージ50%減少)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }
        ],
        last_updated: '2024年3月15日'
    }, {
        id: 'Gar-Saxon',
        character_name: 'ガー・サクソン',
        character_image: '/charui/tex.charui_gar_saxon.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'オン・ザ・ハント',
                name_eng: 'On the Hunt',
                image: '/ability/tex.ability_gar_saxon_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、70%の確率で2ターンの間スピードを低下させる。ターゲットが既にスピード低下を受けている場合、ガー・サクソンのクールダウンが1減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 5,
                name_jp: '精密奇襲',
                name_eng: 'Calculated Ambush',
                image: '/ability/tex.ability_gar_saxon_special01.png',
                description_jp: `敵全体に物理ダメージを与える。ターンメーターが50%以下の敵に対してはダメージが2倍になる。ターンメーターが50%以上ある敵はターンメーターが30%減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'マンダロリアンの報復',
                name_eng: 'Mandalorian Retaliation',
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `味方帝国軍のカウンター率が50%、防御力が40%上昇する。味方帝国軍が通常攻撃を使用すると、そのユニットはHPが5%回復する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '総督の復讐',
                name_eng: "Viceroy's Vengeance",
                image: '/abilityui/tex.abilityui_passive_assist.png',
                description_jp: `敵のターン中に他の味方が攻撃を行うと、ガー・サクソンが100%の確率でアシストする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月15日'
    }, {
        id: 'Carth-Onasi',
        character_name: 'カース・オナシ',
        character_image: '/charui/tex.charui_carth.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'ラピッドショット',
                name_eng: 'Rapid Shot',
                image: '/ability/tex.ability_carth_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンの時間経過ダメージ効果を発生させる。敵に発生している時間経過ダメージ効果ごとに、攻撃ダメージがさらに10%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '撃ち続けるのみ',
                name_eng: 'Just Keep Shooting',
                image: '/ability/tex.ability_carth_special01.png',
                description_jp: `敵全体に物理ダメージを与え、2ターンの間攻撃力が上昇する。この攻撃がクリティカルヒットになるごとに、カースのターンメーターが15%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '旧共和国の兵士',
                name_eng: 'Soldier of the Old Republic',
                image: '/abilityui/tex.abilityui_passive_def.png',
                description_jp: `味方旧共和国の有効性、抵抗力、クリティカル回避力が30%上昇する。敵に時間経過ダメージ効果が発生するたび、旧共和国の味方全体のHPとプロテクションが3%回復する。
                
                味方旧共和国がターン中に通常スキルを使用すると、80%の確率で他の味方旧共和国をアシストに呼び、50%の減少ダメージを与える(1ターンに一度のみ)。
                
                $テリトリーバトルの場合:$ 旧共和国の味方1体につき、カウンター率、防御力、最大HPが20%上昇する。味方旧共和国が特殊スキルを使用するたび、ターゲット時間経過ダメージ効果を4つ発生させ(回避不可)、カースをアシストに呼ぶ。味方旧共和国はターン外に攻撃するたび、HPとプロテクションが5%回復し、遭遇終了まで攻撃力が25%上昇する(スタック可能)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '兵士の訓練',
                name_eng: "Soldier's Training",
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `攻撃中、アクティブな各敵および味方旧共和国ユニットごとにカースの攻撃力が10%上昇する。カースが敵を倒すと、クリティカル率とクリティカルダメージが10%上昇し(スタック可能)、「撃ち続けるのみ」のクールダウンがリセットされる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月15日'
    }, {
        id: 'Cara-Dune',
        character_name: 'カーラ・デューン',
        character_image: '/charui/tex.charui_caradune.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'バールーム・ブロウラー',
                name_eng: 'Bar Room Brawler',
                image: '/ability/tex.ability_caradune_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。リーダースロットに設定されている味方がならず者の場合、カーラ・デューンは次のターン終了までステルス状態になる。リーダースロットに設定されている味方が反乱軍の場合、カーラ・デューンはステルス効果を失い、2ターンの間挑発する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 2,
                name_jp: '即興戦術',
                name_eng: 'Improvised Strategy',
                image: '/ability/tex.ability_caradune_special01.png',
                description_jp: `カーラ・デューンの有効性が1ターン上昇し、敵全体に物理ダメージを与え、ターンメーターを50%減少させる。敵帝国軍は1ターンの間スタン状態になる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '潜入者',
                name_eng: 'Infiltrator',
                image: '/abilityui/tex.abilityui_passive_crit_buff.png',
                description_jp: `ステルス状態の間、カーラ・デューンのクリティカル率が100%、クリティカルダメージが50%上昇する。カーラ・デューンは挑発効果を失うと、次のターン開始時に1ターンのステルス効果を得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '元反乱軍ショック・トルーパー',
                name_eng: 'Ex-Rebel Shock Trooper',
                image: '/abilityui/tex.abilityui_passive_shocktrooper.png',
                description_jp: `カーラ・デューンは、敵帝国軍が戦闘不能になると、2ターンのクリティカルヒット耐性を獲得し、ターンメーターが100%上昇する。帝国軍以外の敵の場合はその半分量上昇する。カーラ・デューンが倒れた時に有効性上昇の効果が発生していた場合、最大体力の50%で復活し、1ターンの間有効性が上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月15日'
    }, {
        id: 'Kyle-Katarn',
        character_name: 'カイル・カターン',
        character_image: '/charui/tex.charui_kylekatarn.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '面白くなってきた',
                name_eng: 'This Should Be Interesting',
                image: '/ability/tex.ability_kylekatarn_basic.png',
                description_jp: `ターゲットに物理ダメージを2回与える。カイル・カターンのターンの場合、1ターンのスキルブロックを発生させる。それ以外の場合は、3回目のダメージを与える。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'ただのライトセーバー使い',
                name_eng: 'Just a Guy With a Lightsaber',
                image: '/ability/tex.ability_kylekatarn_special01.png',
                description_jp: `ターゲットに物理ダメージを2回与える。ターゲットに*フォース酔い*の効果が発生している場合、2回目に与えるダメージが75%増加する。2ターンの間、味方全体がクリティカル率上昇と有効性上昇を得る。
                
                *ジェダイ・ナイト:* 最初に与えるダメージが75%増加する。味方反乱軍ファイター全体のHPとプロテクションが50%回復する`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '谷の力',
                name_eng: 'Power of the Valley',
                image: '/ability/tex.ability_kylekatarn_special02.png',
                description_jp: `味方反乱軍ファイター全体の弱体化効果を全て解除する。2ターンの間、反乱軍ファイターが防御力上昇とスピード上昇を得る。敵全体に物理ダメージを与え、ターゲットに2ターンの間*フォース酔い*の効果を発生させる(コピー不可)。
                
                *ジェダイ・ナイト:* 2ターンの間、敵全体にフォース酔いの効果を発生させる
                
                *フォース酔い:* アシスト、カウンター、強化効果の獲得不可(レイドボスと銀河の伝説: カウンター率30%減少)`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ブルー・ミルク・ラン',
                name_eng: 'Blue Milk Run',
                image: '/abilityui/tex.abilityui_passive_jediknight.png',
                description_jp: `各遭遇開始時、味方反乱軍ファイター1体ごとにカイル・カターンのターンメーターが10%上昇する。
                
                味方反乱軍ファイターがターン外に攻撃するたび、その味方の攻撃力が次のターン終了時まで12%上昇する(スタック可能、最大60%)。
                
                カイル・カターンはターン外に攻撃するたび、バトル終了まで*フォースの繋がり*のスタックを得る(コピー、解除、阻止不可)(スタック可能、最大10スタック)。
                カイル・カターンは「フォースの繋がり」のスタックが10溜まると、クールダウンをリセットして「フォースの繋がり」のスタックを全て失い、バトル終了まで*ジェダイ・ナイト*の効果を得る(コピー、解除、阻止不可)。
                
                遭遇開始時、敵のリーダーがシスだった場合、遭遇終了まで味方反乱軍ファイターの防御力と抵抗力が50%上昇し、最大HPが25%上昇する。
                
                *フォースの繋がり:* 防御力と攻撃力が2%上昇する
                
                *ジェダイ・ナイト:* カイル・カターンおよび味方反乱軍ファイターの防御力と攻撃力が50%上昇する。「フォースの繋がり」は得られない。テリトリーバトルではこのボーナスが味方ジェダイにも適用される
                
                $テリトリーバトル中:$ 敵はボーナスターンメーターを得られず、「フォース酔い」の効果を耐性発揮できない。カイル・カターンがターン外に攻撃すると、「フォースの繋がり」のスタックを得て、他の味方ジェダイにも「ジェダイ・ナイト」の効果によるボーナスが適用される。各バトル開始時、ジェダイおよび反乱軍ファイターの味方全体がバトル終了まで75%のボーナスプロテクションを得る。各バトル開始時、味方ジェダイ1体ごとにカイル・カターンのターンメーターが10%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: true
            }
        ],
        last_updated: '2024年3月15日'
    }, {
        id: 'Kylo-Ren',
        character_name: 'カイロ・レン',
        character_image: '/charui/tex.charui_kyloren.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'ラフ・カット',
                name_eng: 'Ragged Cut',
                image: '/ability/tex.ability_kyloren_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。さらに75%の確率で2ターンの回復無効と、75%の確率で3ターンの時間経過ダメージを発生させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '猛撃',
                name_eng: 'Lash Out',
                image: '/ability/tex.ability_kyloren_special02.png',
                description_jp: `敵全体に物理ダメージを与え、2ターンの報復効果が発生する。この攻撃はクリスタルヒットすることがなく、カイロ・レンのクリティカルダメージの50%に相当するボーナスダメージが発生する。味方ファースト・オーダーおよびアドバンテージ発生中の味方のターンメーターが25%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'アウトレイジ',
                name_eng: 'Outrage',
                image: '/ability/tex.ability_kyloren_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、1ターンの間スタン状態にする。カイロのHPが最大値を下回ると、この攻撃のダメージは75%上昇する。与えたダメージと同量のプロテクションが回復する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'アンストッパブル',
                name_eng: 'Unstoppable',
                image: '/abilityui/tex.abilityui_passive_counterattack.png',
                description_jp: `カイロがダメージを受けた時、1ターンの間防御力が50%(スタック可能)、攻撃力が15%(スタック可能)上昇する。さらに、50%の確率でクールダウンがリセットされる。カイロの受けるHP割合ダメージの効果が軽減され、カイロに発生している弱体1つごとにスピードが10上昇する。カイロは特殊スキル使用時に2ターンの時間経過ダメージを得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月15日'
    }, {
        id: 'Kylo-Ren-Unmasked',
        character_name: 'カイロ・レン(マスクなし)',
        character_image: '/charui/tex.charui_kylo_unmasked.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '強硬ストライク',
                name_eng: 'Aggressive Strike',
                image: '/ability/tex.ability_kylo_unmasked_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンの間抵抗力を低下させる。ターゲットが既に弱体を受けていてカイロのターン中である場合、カイロが1ターンの間挑発を行う。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '強制停止',
                name_eng: 'Halt',
                image: '/ability/tex.ability_kylo_unmasked_special01.png',
                description_jp: `ターゲットの強化を全て解除し、2ターンの間スタン状態にする。カイロのHPが10%回復し、1ターンの間挑発を行う。この攻撃は回避または耐性発揮できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: 'フォーカス・レイジ',
                name_eng: 'Focused Rage',
                image: '/ability/tex.ability_kylo_unmasked_special02.png',
                description_jp: `ターゲットに物理ダメージを与え、与えたダメージ分HPが回復する。ターゲットがスタン状態の場合、ダメージが2倍になる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '冷徹なる追撃',
                name_eng: 'Merciless Pursuit',
                image: '/abilityui/tex.abilityui_passive_crit_buff.png',
                description_jp: `味方ファースト・オーダーのクリティカルダメージが40%、スピードが30上昇する。味方ファースト・オーダーがクリティカルヒットを決めると、そのユニットのターンメーターが20%上昇する。味方ファースト・オーダーがステータス効果を得ると、そのユニットはHPが5%、プロテクションが5%回復する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '傷跡',
                name_eng: 'Scarred',
                image: '/abilityui/tex.abilityui_passive_counterattack.png',
                description_jp: `ダメージを受けるとカイロのHPが8%回復し、この効果を受けていないランダムな味方ファースト・オーダー1体に2ターンのアドバンテージが発生する。カイロのカウンター率が50%上昇する(挑発中は上昇量2倍)。HP割合ダメージの効果が減少し、各遭遇開始時に1ターンの間挑発を行う。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月15日'
    }, {
        id: 'Supreme-Leader-kylo-Ren',
        character_name: 'カイロ・レン最高指導者',
        character_image: '/charui/tex.charui_kyloren_tros.png',
        ability: [
            {
                ability_type: 'アルティメットスキル',
                name_jp: '底知れぬ激情',
                name_eng: 'Depths of Rage',
                image: '/ability/tex.ability_kyloren_tros_ultimate.png',
                description_jp: `使用するには#アルティメットチャージ#が少なくとも60%必要
                
                #アルティメットチャージ:# カイロ・レン最高指導者は味方ダークサイドが物理または特殊ダメージを敵に与えた際に2%のアルティメットチャージを獲得する。クリティカルヒットの場合は5%獲得する。
                
                カイロ・レンは自身の弱体化効果を全て解除し、攻撃態勢に入り、敵全体に物理ダメージを与える(回避不可)。この態勢の間、カイロ・レンはダメージおよび状態異常が無効になり、戦闘不能にならない。またサイフォンが倍になり、スキルのクールダウンが0になる。
                
                - #アルティメットチャージ60%:# 攻撃態勢が1ターン持続する
                - #アルティメットチャージ85%:# 攻撃態勢が2ターン持続する
                - #アルティメットチャージ100%:# 攻撃態勢が3ターン持続する`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '通常スキル',
                name_jp: 'ブルータル・アサルト',
                name_eng: 'Brutal Assault',
                image: '/ability/tex.ability_kyloren_tros_basic.png',
                description_jp: `ターゲットに2ターンの強化無効を発生させ、物理ダメージを2回与える。ターゲットがスタン状態だった場合、再度ダメージを与えて2ターンのアドバンテージを得る。カイロ・レンのターンでは、遭遇終了まで*サイフォン*が10発生する。
                
                *サイフォン:* スタック1つにつき、このユニットはステータスの1%を得て、ターゲットは同じ分を失う`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'ステイシス・ストライク',
                name_eng: 'Stasis Strike',
                image: '/ability/tex.ability_kyloren_tros_special01.png',
                description_jp: `敵全体の強化を全て解除し、ターゲットを2ターンのスタン状態にする(コピー、解除、耐性発揮不可)。その後ターゲットに物理ダメージを与え、カイロ・レンは遭遇終了まで20のサイフォンを得る。クリティカルヒットになると代わりに40のサイフォンを得る。この攻撃は回避できない。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '荒ぶる猛攻',
                name_eng: 'Furious Onslaught',
                image: '/ability/tex.ability_kyloren_tros_special02.png',
                description_jp: `敵全体に物理ダメージを与え、#サイフォン・マスター#でターゲットのマスターを吸収する(耐性発揮不可)。ターゲットがスタン状態だった場合、吸収量は2倍になる。その後、味方ダークサイド全体の弱体化効果を全て解除し、2ターンのアドバンテージを付与する。
                
                #サイフォン・マスター:# 遭遇終了まで、このユニットに発生しているサイフォンと同じ割合のマスターを獲得する。ターゲットは同量のマスターを失う(スタック可能。ただし、レイドボスおよび銀河の伝説ユニットは除く)`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '最高指導者',
                name_eng: 'Supreme Leader',
                image: '/abilityui/tex.abilityui_passive_kyloren_tros.png',
                description_jp: `味方ダークサイドのスピードが30、マスターが40%、クリティカルダメージが50%上昇する。
                
                味方ダークサイドがクリティカルヒットを与えずにアドバンテージを失うと、ターン終了時にその味方に1ターンのアドバンテージが発生する。
                
                味方ダークサイドにまだアドバンテージが発生していない状態でアドバンテージが発生すると、その味方は役割に応じたボーナスを得る:
                - +タンク+は2ターン挑発する
                - +アタッカー+は2ターンのクリティカルダメージ上昇を得る
                - +サポート+と+ヒーラー+はターンメーターが20%上昇する`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '攻勢での追撃',
                name_eng: 'Press the Advantage',
                image: '/abilityui/tex.abilityui_press_advantage.png',
                description_jp: `カイロ・レン最高指導者はよろめきを無効化し、挑発効果を得られない。カイロのターン中に戦闘不能になった敵は復活できない。
                
                味方ダークサイドはターンメーターを失うと、現在の最大HPと最大プロテクションの10%を得る(スタック可能)。
                
                味方ダークサイドはボーナスターンを得ると、現在の最大HPと最大プロテクションの10%を失う(スタック可能)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '銀河の伝説',
                name_eng: 'Galactic Legend',
                image: '/abilityui/tex.abilityui_passive_galacticlegend.png',
                description_jp: `このユニットはHP割合ダメージと大ダメージ効果によるダメージを軽減する。破壊効果から大ダメージを受け(レイドボスは除く)、スタン効果を無効化する。
                
                このユニットの最大HPと最大プロテクションがレリックアンプのレベルごとに10%上昇し、受けるダメージが30%減少する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月15日'
    }, {
        id: 'Gamorrean-Guard',
        character_name: 'ガモーリアン・ガード',
        character_image: '/charui/tex.charui_gamorreanguard.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'ハック&スラッシュ',
                name_eng: 'Hack and Slash',
                image: '/ability/tex.ability_gamorrguard_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、3ターンの時間経過ダメージを2つ発生させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '強行突破',
                name_eng: 'Muscle In',
                image: '/ability/tex.ability_gamorrguard_special01.png',
                description_jp: `ガモーリアン・ガードが2ターンの挑発を行い、2ターンの報復効果が発生する。挑発中、ガモーリアン・ガードに最大HPの20%に相当するプロテクションが発生する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'パンチ・スルー',
                name_eng: 'Punch Through',
                image: '/ability/tex.ability_gamorrguard_special02.png',
                description_jp: `ターゲットの強化効果を解除し、物理ダメージを与え、2ターンの間エクスポーズ状態にする。
                
                リーダースロットの味方がハット・カルテルで、ターゲットに時間経過ダメージまたはサーマルデトネーターが発生している場合、ターンメーターを２０％減少させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '忠実なエンフォーサー',
                name_eng: 'Loyal Enforcer',
                image: '/abilityui/tex.abilityui_passive_taunt.png',
                description_jp: `バトル開始時、味方ハット・カルテルごとにガモーリアン・ガードの最大HPが10%上昇し、「好みの悪党」のスタックを1得る。ガモーリアン・ガードがアクティブな間、敵の抵抗力が20%減少する。
                
                リーダースロットの味方がジャバ・ザ・ハットの場合: ガモーリアン・ガードのクリティカル回避力が50%上昇する。ガモーリアン・ガードは挑発効果を失うたび、2ターンの防御力上昇を得て、ジャバが特殊スキルを使用かつガモーリアン・ガードが挑発中の場合、HPが20%回復する。
                
                リーダースロットの味方がハット・カルテルの場合、ガモーリアン・ガードの防御力上昇中に味方ハット・カルテルのHPが70%を下回るたび、ガモーリアン・ガードは挑発を行い、2ターンのプロテクション上昇(100%)を得る。
                
                $テリトリーバトルの場合:$ ガモーリアン・ガードのクリティカル回避力、防御力、抵抗力が50%上昇する。他の味方ハット・カルテルの最大HPと最大プロテクションが50%上昇する。味方ハット・カルテルのHPが初めて50%を下回ると、その味方は1ターンのダメージ耐性を得る(コピー、解除、阻止不可)。リーダースロットの味方がハット・カルテルでガモーリアン・ガードではない場合、味方がアビリティを使用するたびに、ガモーリアン・ガードがアシストする。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }
        ],
        last_updated: '2024年3月15日'
    }, {
        id: 'Garazeb-Zeb-Orrelios',
        character_name: 'ガラゼブ・"ゼブ"・オレリオス',
        character_image: '/charui/tex.charui_zeb_s3.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'バッシュ',
                name_eng: 'Bash',
                image: '/ability/tex.ability_zeb_s3_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンのめまい効果を発生させる。その敵が既にめまい、エクスポーズ、よろめき状態の場合は、1ターンのスタンを発生させる。この攻撃は弱体発生中の敵に対してダメージが30%増加する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'スタッガー・スイーフ',
                name_eng: 'Staggering Sweep',
                image: '/ability/tex.ability_zeb_s3_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、1ターンのよろめき効果を発生させる。アクティブな味方フェニックス1体ごとに、ゼブのターンメーターが10%上昇する。ターゲットに弱体が発生していない場合、この攻撃は耐性発揮不可となり、ダメージが2倍になり、ターゲットの最大HPの20%分のボーナスダメージが発生する。ターゲットに強化が発生している場合、ターゲットのアーマーを無効化する。ターゲットに弱体が発生している場合、この攻撃のクリティカルダメージは50%増加する。この攻撃は回避できない。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '儀仗兵',
                name_eng: 'Honor Guard',
                image: '/abilityui/tex.abilityui_passive_hp.png',
                description_jp: `2ターンの間、ゼブと指定した味方がプロテクション上昇(50%)を得る。ゼブまたは指定した味方は、弱体化効果が発生している場合は2ターンの間報復状態になり、それ以外の場合は、2ターンの抵抗力上昇を得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '受け流し',
                name_eng: 'Shrung Off',
                image: '/abilityui/tex.abilityui_passive_hp.png',
                description_jp: `ゼブの最大HP+40%分、最大プロテクションが上昇する。ターン開始時にはプロテクションが15%回復する。ゼブが弱体を受けている場合、この回復量が2倍になる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月15日'
    }, {
        id: 'Cal-Kestis',
        character_name: 'カル・ケスティス',
        character_image: '/charui/tex.charui_calkestis.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'オーバーヘッド・スラッシュ',
                name_eng: 'Overhead Slash',
                image: '/ability/tex.ability_calkestis_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、1ターンの間、防御力低下とスピード低下を発生させる。カルのHPの状況に応じて、このスキルで様々な効果が発生する:
                
                - *HP75%以下:* 1ターンのヘルス・スティール上昇を得る
                - *HP60%以下:* 再攻撃を行い、1ターンのクリティカル率低下を発生させる
                - *HP40%以下:* 3回目の攻撃を行い、1ターンのめまい効果を発生させる`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '助けてくれ、BD-1',
                name_eng: 'Help Me, BD-1',
                image: '/ability/tex.ability_calkestis_special01.png',
                description_jp: `指定した味方の弱体化効果を全て解除し、その味方のHPが45%回復する。指定した味方のHPが最大の場合、代わりにそのユニットのプロテクションが30%回復する。指定した味方のHPとプロテクションが最大の場合、代わりに2ターンのクリティカル耐性を与える。指定した味方がライトサイドの場合、2ターンの精度上昇を得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '待つんだ',
                name_eng: 'Not So Fast',
                image: '/ability/tex.ability_calkestis_special02.png',
                description_jp: `敵全体に2ターンの間、回避力低下、スピード低下、抵抗力低下を発生させ、味方全体が2ターンの間、クリティカルダメージ上昇とスピード上昇を得る。敵が耐性発揮した弱体化効果ごとに、非同盟のフォースの使い手の味方全体のターンメーターが3%上昇する。敵に既にスピード低下が発生している場合、1ターンの間スタン状態にする。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '俺はあきらめない',
                name_eng: "I'm Persistent",
                image: '/abilityui/tex.abilityui_passive_impersistent.png',
                description_jp: `バトル開始時、非同盟のフォースの使い手の味方全体の最大HPが30%、抵抗力が30%上昇する。味方がクリティカルヒットを受けるたび、その味方とカルのHPとプロテクションが5%回復する。また、味方がライトサイドまたはダークサイドの非同盟のフォースの使い手の場合、味方とカルが2ターンのプロテクション上昇を得る(10%、スタック可能、最大50%)。
                
                ユニット同士が使用した特殊スキルごとに、カルは不屈のスタックを1得る(コピー、解除、阻止不可)。遭遇で相手が最初のターンの開始すると、カルが*不屈*のスタックを15得る。
                
                *不屈:* ターン開始時、カルは不屈のスタック数に応じて以下の効果を発生させる:
                
                - *10スタック以上:* カルと非同盟のフォースの使い手の味方全体が2ターンの間、フォアサイトを得る
                - *20スタック以上:* カルと非同盟のフォースの使い手の味方全体が2ターンの間、防御力上昇とプロテクション上昇(30%)を得る
                - *30スタック:* 敵全体に2ターンの間、スキルブロックと強化無効を発生させる(回避、耐性発揮不可)。敵全体のターンメーターが50%上昇する(ライトサイドの非同盟のフォースの使い手の場合はこの効果が2倍)(=味方全体のターンメーターが50%上昇する?)。 不屈のスタックがリセットされる。
                
                $テリトリーウォーズでアップグレードされたオミクロンスキルを持つアソーカ・タノ(フルクラム)が味方にいる場合:$ アソーカ単体のオミクロン効果は、味方がいる間は無効化されなくなる。この効果は戦闘不能になるまで持続する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }
        ],
        last_updated: '2024年3月16日'
    }, {
        id: 'Kelleran-Beq',
        character_name: 'カレラン・ベク',
        character_image: '/charui/tex.charui_kelleranbeq.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'セーバー・スタビリティ',
                name_eng: 'Saber Stability',
                image: '/ability/tex.ability_kelleranbeq_basic.png',
                description_jp: `2ターンの間、ターゲットに物理ダメージを与え、フォアサイトが発生していないランダムな味方1体にフォアサイトを付与する。カレラン・ベクのターンの場合、もう一度攻撃する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'ライトセーバーの移行',
                name_eng: 'Lightsaber training',
                image: '/ability/tex.ability_kelleranbeq_special01.png',
                description_jp: `ターゲットに物理ダメージを与える。味方全体が2ターンの間攻撃力上昇を得る。銀河共和国ジェダイの味方全体をアシストに呼ぶ。味方に銀河の伝説がいない場合、味方のHPとプロテクションがターン終了までに与えたダメージの50%分回復する。そうでない場合は、ターン終了まで与えたダメージの5%分HPとプロテクションが回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 2,
                name_jp: 'ジェダイの勇気',
                name_eng: 'Jedi Bravery',
                image: '/ability/tex.ability_kelleranbeq_special02.png',
                description_jp: `味方全体の弱体化効果を全て解除する。ターゲットに物理ダメージを与え、カレラン・ベクの最大プロテクション20%分の追加固定ダメージを与える。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '評議会の意志により',
                name_eng: 'By The Will Of The Council',
                image: '/abilityui/tex.abilityui_passive_jedi.png',
                description_jp: `味方銀河共和国ジェダイの防御力と抵抗力が50%、スピードが30上昇する。
                
                バトル開始時、他の銀河共和国ジェダイの味方全体が、バトル終了までカレラン・ベクのスタック数と同じ分のパダワンの訓戒を得る。
                
                各遭遇開始時、ジェダイの味方全体が2ターンのフォアサイトを得る。
                
                $テリトリーウォーズで、銀河の伝説が存在せず、味方全体が銀河共和国ジェダイの場合:$ バトル開始時、味方は自身のパダワンの訓戒のスタックごとに攻撃力がさらに5%上昇する(フォアサイトが発生している場合は2倍)。
                
                プロテクションを持つ味方がターン中にスキルを使用するたび、ランダムな味方をアシストに呼ぶ。
                
                各味方は初めてプロテクションを全て失うと、ターンメーターが50%回復し、3ターンの間、ボーナスプロテクション150%上昇を得て、クリティカル率、クリティカルダメージ、攻撃力が10%上昇し、さらに自身のパダワンの訓戒のスタックごとに追加で2%上昇する。
                
                カレランがアクティブな間、味方の防御力が500%上昇する。他の味方にプロテクションが発生している間、カレランは戦闘不能にならない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'セーバー・ハンド',
                name_eng: 'The Sabered Hand',
                image: '/abilityui/tex.abilityui_passive_thesaberedhand.png',
                description_jp: `味方全体が銀河共和国ジェダイの場合、カレラン・ベクは最大HPを40%失い、その2倍分を最大プロテクションとして得る。
                
                バトル開始時、カレラン・ベクは自身のプロテクション10,000ごとに、バトル終了まで*パダワンの訓戒*のスタックを得る(最大100スタック)。
                
                プロテクションが発生しているいる間、カレラン・ベクはカウンター率が100%になり、通常スキルを使用するたび50%の確率でもう一度攻撃を行い、またHPが100%を下回らない。
                
                味方に銀河の伝説がいない場合:
                
                - 味方銀河共和国ジェダイは回復無効状態になるたび、1ターンの間、プロテクション上昇(40%)と抵抗力上昇を得る
                - 味方銀河共和国ジェダイはターゲットロック状態になるたび、HPとプロテクションが20%回復してターンメーターが10%上昇する。
                
                カレラン・ベクが同盟スロットではなくリーダースロットにいる場合、初めて戦闘不能になった際、代わりにHPとプロテクションが100%回復し、ボーナスターンを得る。それ以外の場合で、バトル開始時に味方リーダーが銀河共和国ジェダイで銀河の伝説ではなかった場合は、バトル終了まで「セカンドウィンド」を得る(コピー、解除、阻止不可)。
                
                *パダワンの訓戒:* 防御突破力+20%、スタック1つにつき攻撃力が5%上昇する`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月16日'
    }, {
        id: 'Canderous-Ordo',
        character_name: 'カンデラス・オルド',
        character_image: '/charui/tex.charui_canderous.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'エンドレスアサルト',
                name_eng: 'Interminable Assault',
                image: '/ability/tex.ability_canderous_basic.png',
                description_jp: `物理ダメージを与え、再攻撃を行う。この攻撃前に敵がプロテクションを得ていた場合、カンデラスは3回目の攻撃を行い、2ターンの間抵抗力を低下させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '圧倒的破壊力',
                name_eng: 'Overwhelming Firepower',
                image: '/ability/tex.ability_canderous_special01.png',
                description_jp: `敵全体に物理ダメージを与え、2ターンの間攻撃力低下を発生させる。この攻撃は防御力を無効化する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'マンダロリアンの熟練兵',
                name_eng: 'Mandalorian Veteran',
                image: '/abilityui/tex.abilityui_passive_mandalorian.png',
                description_jp: `バトル開始時、味方マンダロリアン、旧共和国、ならず者ユニットごとにカンデラスのヘルス・スティールと有効性が10%上昇する。カンデラスは敵にダメージを与えると2ターンの時間経過ダメージを発生させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '困難は好きだ',
                name_eng: 'I Like a Challenge',
                image: '/abilityui/tex.abilityui_passive_penetration.png',
                description_jp: `「エンドレスアサルト」と「圧倒的破壊力」で挑発、デスマーク、マーク状態の敵を攻撃すると、カンデラスが与えるダメージが50%増加する。敵が攻撃でダメージを負うたび、カンデラスのターンメーターが8%上昇する。敵が挑発を行う、あるいやデスマークやマーク状態になると、カンデラスが2ターンの間クリティカル率上昇とクリティカルダメージ上昇を得る。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月18日'
    }, {
        id: 'Ki-Adi-Mundi',
        character_name: 'キ＝アディ＝ムンディ',
        character_image: '/charui/tex.charui_kiadimundi.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'ヴァーサタイル・ストライク',
                name_eng: 'Versatile Strike',
                image: '/ability/tex.ability_kiadimundi_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。
                
                キ＝アディ＝ムンディが*アタル・フォーム*を使用している場合、もう一度攻撃する。*マカシ・フォーム*を使用している場合、ターンメーターが15%上昇し、プロテクションが10%回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 2,
                name_jp: 'アダプティブ・フォーム',
                name_eng: 'Adaptive Form',
                image: '/ability/tex.ability_kiadimundi_special02.png',
                description_jp: `フォームを切り替えると、弱体を全て解除し、ターンメーターが100%上昇する。
                
                *アタル・フォーム: *攻撃力+100%、防御突破力+30%、スピード+20
                
                *マカシ・フォーム: *カウンター率+100%、抵抗力+60%、クリティカルヒット耐性
                
                このスキルはクールダウン操作を無効にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: 'デサイシブ・スラスト',
                name_eng: 'Decisive Thrust',
                image: '/ability/tex.ability_kiadimundi_special01.png',
                description_jp: `ターゲットに物理ダメージを与える。この攻撃は味方銀河共和国ジェダイ1体につきダメージが100%上昇する。
                
                キ＝アディ＝ムンディが*アタル・フォーム*を使用している場合、このスキルで敵を倒すと全てのクールダウンがリセットされる。
                
                *マカシ・フォーム*を使用している場合、味方銀河共和国ジェダイの弱体が全て解除され、ターンメーターが25%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ジェダイ評議会',
                name_eng: 'Jedi Council',
                image: '/abilityui/tex.abilityui_passive_jedi.png',
                description_jp: `味方全てが銀河共和国ジェダイだった場合、各バトル開始時に味方銀河共和国ジェダイのスピードが30、最大HPが40%、攻撃力が20%上昇する。
                
                サポートもしくはヒーラークラスの味方銀河共和国ジェダイは最大HPの10%分の追加攻撃力を得る。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'フォーム・マスター',
                name_eng: 'Master of Forms',
                image: '/abilityui/tex.abilityui_passive_uniqueability.png',
                description_jp: `バトル開始時、キ＝アディ＝ムンディは*アタル・フォーム*を使用する。キ＝アディ＝ムンディは使用するフォームに応じて追加スキルを得る。
                
                *マカシ・フォーム*に切り替えると、プロテクションが10%回復し、3ターンの挑発を行う。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '付与スキル',
                cooldown: 3,
                name_jp: 'アタル・ランジ',
                name_eng: 'Ataru Lange',
                image: '/ability/tex.ability_kiadimundi_special03a.png',
                description_jp: `ターゲットに物理ダメージを与え、アーマー破壊状態にする。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '付与スキル',
                cooldown: 3,
                name_jp: 'マカシ・ジャブ',
                name_eng: 'Makashi Jab',
                image: '/ability/tex.ability_kiadimundi_special03b.png',
                description_jp: `敵全体を2ターンの間めまい状態にし、ターゲットに物理ダメージを与える。このスキルは回避できない。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月18日'
    }, {
        id: 'Qira',
        character_name: 'キーラ',
        character_image: '/charui/tex.charui_qira.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'デッドリーダブル',
                name_eng: 'Deadly Double',
                image: '/ability/tex.ability_qira_basic.png',
                description_jp: `ターゲットに物理ダメージを2回与え、2ターンの攻撃力低下を発生させる。この攻撃はカウンターができない。この攻撃がクリティカルヒットした場合、さらに1ターンの間めまい状態にする。攻撃が2回ともクリティカルヒットした場合、ターゲットの最大HP10%分の追加ダメージを与える。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '拡散ブラスト',
                name_eng: 'Scattering Blast',
                image: '/ability/tex.ability_qira_special01.png',
                description_jp: `ターゲットの強化を全て解除し、敵全体に物理ダメージを与えて2ターンの間よろめき状態にする。強化発生中の敵ごとに25%の追加ダメージが発生する。
                
                *準備万端: *キーラが準備万端状態の場合、敵全体から全ての強化を解除する。その後、キーラの準備万端状態は解除される。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '共同作戦',
                name_eng: 'Joint Operation',
                image: '/ability/tex.ability_qira_special02.png',
                description_jp: `ターゲットに物理ダメージを与え、指定した味方1体をアシストに呼ぶ。その味方がならず者の場合、両者の攻撃ダメージが30%増加する。回避された場合も、それぞれの攻撃は50%の確率で2ターンのエクスポーズを発生させる。
                
                *準備万端: *他の準備万端状態の味方全ての防御突破力を3ターンの間上昇させ、アシストに呼ぶ。その後、キーラの準備万端状態は解除される。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '商売道具',
                name_eng: 'Tools of the Trade',
                image: '/abilityui/tex.abilityui_passive_crit_buff.png',
                description_jp: `味方ならず者のクリティカル率が20%上昇する。さらに味方(=味方ならず者?)がクリティカルヒットを決めると、味方のプロテクションが10%回復し、バトル終了まで各クラスに応じた追加ボーナスが付与される。
                
                アタッカー: 攻撃力+30(最大3スタック)
                タンク: クリティカル回避力+20%(最大3スタック)
                サポート、ヒーラー: スピード+20(最大3スタック)`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '追い打ち',
                name_eng: 'Insult to Injury',
                image: '/ability/tex.ability_passive_healthsteal.png',
                description_jp: `攻撃時、ターゲットに弱体が発生していない場合はキーラの有効性が40%上昇し、弱体が発生している場合はクリティカルダメージが30%上昇する。他の味方ならず者も、攻撃時にその半分の効果を得る。さらに各ターン終了時、いずれか敵が2回以上クリティカルヒットを受けていると、キーラは準備万端状態となり、ターンメーターが15%上昇し、1ターンの間ヘルス・スティールが上昇する。このターン中にスキルを使用した他の味方も、それぞれ1ターンの間ヘルス・スティールが上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月18日'
    }, {
        id: 'Kit-Fisto',
        character_name: 'キット・フィストー',
        character_image: '/charui/tex.charui_kitfisto.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'ライトセーバー・マスター',
                name_eng: 'Lightsaber Mastery',
                image: '/ability/tex.ability_kitfisto_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、30%の確率で再攻撃を行う。キット・フィストーは攻撃ごとに50%の確率でターンメーターが15%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '潮流変化',
                name_eng: 'Turn the Tide',
                image: '/ability/tex.ability_kitfisto_special01.png',
                description_jp: `敵全体に物理ダメージを与え、3ターンの間、味方全体の有効性が上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'ジェダイ・プロテクター',
                name_eng: 'Jedi Protector',
                image: '/abilityui/tex.abilityui_passive_def_resistance.png',
                description_jp: `味方全体の抵抗力が25%上昇し、さらに味方ジェダイは防御力が45上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '高等剣術',
                name_eng: 'Superior Bladework',
                image: '/abilityui/tex.abilityui_passive_counterattack.png',
                description_jp: `キット・フィストーのカウンター率が35%になり、攻撃力が20%上昇する。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月18日'
    }, {
        id: 'Cassian-Andor',
        character_name: 'キャシアン・アンドー',
        character_image: '/charui/tex.charui_cassian.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '2歩先回り',
                name_eng: 'Two Steps Ahead',
                image: '/ability/tex.ability_cassian_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、85%の確率で2ターンの強化無効を発生させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 2,
                name_jp: 'ショックグレネード',
                name_eng: 'Shock Grenade',
                image: '/ability/tex.ability_cassian_special01.png',
                description_jp: `スキルブロック、防御力低下、回復無効、攻撃力低下、スピード低下(各1度ずつ)をランダムな敵に2ターン発生させる。メインターゲットが帝国軍の場合、2ターンの間エクスポーズ状態にする。K-2SOがいる場合、K-2SOをアシストに呼ぶ。さらに、弱体を受けている敵1体ごとにターンメーターが20%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'クリップリング・ショット',
                name_eng: 'Crippling Shot',
                image: '/ability/tex.ability_cassian_special02.png',
                description_jp: `ターゲットに物理ダメージを与える。他の敵に発生している各弱体を、ターゲットに1ターン発生させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '下準備',
                name_eng: 'Groundwork',
                image: '/abilityui/tex.abilityui_passive_rebel.png',
                description_jp: `各バトル開始時(=各遭遇開始時?)、味方反乱軍が3ターンのプロテクション上昇(20%)を得て、味方反乱軍アタッカーは3ターンの防御力上昇、味方反乱軍サポートは3ターンの有効性上昇、味方反乱軍タンクは3ターンの抵抗力上昇を得る。K-2SOは、生存中の場合にこれらの強化効果をすべて得る。
                
                $テリトリーバトルの場合: $バトル開始時、味方全員がローグ・ワンの場合、キャシアン・アンドーはボーナスターンを得て、バトル終了まで敵ユニットに変装する。変装中、キャシアンはユニークスキルと勢力を維持し、変装先の勢力に加えて、ローグ・ワン勢力のメンバーと見なされる。各遭遇開始時、反乱軍の味方全体は、3ターンの防御力上昇、有効性上昇、抵抗力上昇を得る。キャシアンはスキルを使用するたび、弱体化効果発生中の敵ごとにターンメーターが12%上昇し、ターゲットに1ターンのスキルブロックと強化無効および2ターンの防御力低下と回復無効を発生させ、K-2SOをアシストに呼び、97.8%の増加ダメージを与える。
                
                - +テリトリーバトル「反乱軍の襲撃」: +キャシアンがスノートルーパー・オプス(精鋭)に変装する。
                - +テリトリーバトル「銀河共和国の攻撃」: +キャシアンがワット・タンバーに変装する。
                - +テリトリーバトル「帝国の台頭」: +キャシアンが改造版のマグマトルーパーに変装する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }
        ],
        last_updated: '2024年3月19日'
    }, {
        id: 'Cad-Bane',
        character_name: 'キャド・ベイン',
        character_image: '/charui/tex.charui_cadbane.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'ガンスリンガー',
                name_eng: 'Gun Slinger',
                image: '/ability/tex.ability_cadbane_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、65%の確率で再攻撃を行う。2ターンの間ターゲットの精度を低下させる。クリティカルヒットを決める毎に、キャド・ベインのターンメーターが15%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'スタン・グローブ',
                name_eng: 'Stun Glove',
                image: '/ability/tex.ability_cadbane_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、全ての強化効果を解除し、1ターンの間スタン状態にする。さらに、ターンメーターを50%減少させる(敵ジェダイに対しては2倍)。ターゲットが弱体を受けている場合、最大プロテクションを25%低下させる(スタック可能)。この攻撃は回避できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'どんな仕事でも',
                name_eng: 'At Your Service',
                image: '/abilityui/tex.abilityui_passive_dodge.png',
                description_jp: `味方賞金稼ぎの有効性が100%上昇し、弱体を発生させると2ターンのアドバンテージを得る。キャド・ベインがリーダースロットに設定されていると、次の契約が発動する(同盟スロットでは不可):
                
                *契約: *敵に弱体を20発生させる(契約達成には味方賞金稼ぎのみが参加可能。)。
                
                *報酬: *バトル終了まで、敵全体の抵抗力が50%減少する。味方賞金稼ぎ全体にボーナス効果が発動する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'それなりの報酬をよこせ',
                name_eng: "For The Right Price",
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `キャド・ベインのクリティカル率が30%、クリティカルダメージが30%上昇する。キャド・ベインが弱体を与えると、最大HPと最大プロテクションが5%回復する。キャド・ベインがクリティカルヒットを決めると、50%の確率でクールダウンを1減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'キャド・ベインのボーナス',
                name_eng: "Cad Bane's Payout",
                image: '/abilityui/tex.abilityui_passive_contract.png',
                description_jp: `キャド・ベインは契約報酬を受け取ると、次のボーナスも獲得する(契約は特定の賞金稼ぎリーダースキルによって付与される)。
                
                *ボーナス: *キャド・ベインの回避力が25%上昇する。キャド・ベインが回避を行うと、攻撃をしてきた敵に2ターンのサーマル・デトネーターを発生させる。このサーマル・デトネーターは回避できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月19日'
    }, {
        id: 'Captain-Tarpals',
        character_name: 'キャプテン・ターパルス',
        character_image: '/charui/tex.charui_captaintarpals.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'おい、ユーたち！',
                name_eng: 'Hey, Yousa!',
                image: '/ability/tex.ability_captaintarpals_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、1ターンの間ショック状態にする。ターゲットに強化効果が発生していた場合、その効果を解除して追加ダメージを与える。味方グンガンは2ターンのアドバンテージを得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '覚悟はいいか',
                name_eng: 'Ouch Time',
                image: '/ability/tex.ability_captaintarpals_special01.png',
                description_jp: `敵全体に固定ダメージを与える。弱体化効果発生中の敵ごとに与えるダメージが10%増加する。敵全体のターンメーターを10%減少させる。弱体化効果が発生していない敵は1ターンの間よろめき状態になる。弱体化効果のない敵分離主義者は1ターンの間スタン状態になる(耐性発揮不可)。味方シールド発生装置からリチャージのスタックを2取り除く。このスキルは回避できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '諦めるな',
                name_eng: 'No Giben Up',
                image: '/ability/tex.ability_captaintarpals_special02.png',
                description_jp: `ターゲットに物理ダメージを与え、ターゲットの弱体化効果ごとに与えるダメージが10%増加する。指定した味方をアシストに呼ぶ。味方グンガンは1ターンのクリティカルダメージ上昇を得て、プロテクションが25%回復する。1ターンの間、ターゲットをマーク状態にする(まだ発生していない場合)。ターゲットが分離主義者の場合、2ターンの間、敵リーダーもマーク状態にする(解除、回避、耐性発揮不可)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ミーが何か手を考える',
                name_eng: "Mesa Tink of Something",
                image: '/abilityui/tex.abilityui_passive_mesatinkofsomething.png',
                description_jp: `バトル開始時、キャプテン・ターパルスの最大HPが75%減少し、それと同量分、最大プロテクションが上昇する。キャプテン・ターパルスがターン外に攻撃するたび、最大プロテクション5%分のボーナス固定ダメージを与え(回避不可)、1ターンのキャプテン・ターパルスと最弱の味方グンガンのプロテクションが10%回復する。
                
                キャプテン・ターパルスがクリティカルヒットを決めるたび、味方シールド発生装置からリチャージのスタックを1取り除く。味方シールド発生装置から取り除かれたリチャージのスタックごとに、味方グンガンの防御突破力が1ターンの間5%上昇する(スタック可能)。
                
                敵が弱体化効果を受けるたび、キャプテン・ターパルスのターンメーターが1%上昇する。弱体化効果発生中の敵がキャプテン・ターパルスを攻撃するたび、キャプテン・ターパルスはカウンター攻撃を行う。
                
                アクティブな味方シールド発生装置がある場合: キャプテン・ターパルスのターン開始時、キャプテン・ターパルスの弱体化効果を全て解除して挑発を無効化(=無視?)し、キャプテン・ターパルスがターン外に攻撃するたび、1ターンの強化無効を発生させる。
                
                $テリトリーバトルの場合: $各遭遇開始時、アクティブな味方グンガンごとにキャプテン・ターパルスの攻撃力が20%上昇し、グンガンの味方全体が2ターンのクリティカルダメージ上昇を得て、遭遇終了まで最大プロテクションが100%上昇する。
                
                各味方グンガンのターン開始時に、味方シールド発生装置からリチャージのスタックを1取り除く。
                
                各味方グンガンは、HPが初めて50%を下回ると、HPとプロテクションが100%回復する。キャプテン・ターパルスのターン開始時にその最大プロテクションが50%を超えている場合、グンガン全体が2ターンの攻撃力上昇を得る。それ以外の場合は、2ターンの防御力上昇を得る。
                
                味方グンガンはめまい状態またはスタン状態になるたび、その効果を解除してクールダウンをリセットし、ボーナスターンを得る。キャプテン・ターパルスがクリティカルヒットを決めるたび、味方シールド発生装置に「プラズマシールド」のスタックを1追加する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }
        ],
        last_updated: '2024年3月19日'
    }, {
        id: 'Captain-Drogan',
        character_name: 'キャプテン・ドロガン',
        character_image: '/charui/tex.charui_captaindrogan.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '同時射撃',
                name_eng: 'Coordinated Shot',
                image: '/ability/tex.ability_captaindrogan_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。リーダースロットの味方がタンクの場合、この攻撃は回避できない。
                
                ドロガンのターンの場合、ターゲットを1ターンの間スタン状態にする。ドロガン以外のターンで敵が帝国の場合、1ターンの攻撃力低下を発生させる。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '援護射撃',
                name_eng: 'Fire Support',
                image: '/ability/tex.ability_captaindrogan_special01.png',
                description_jp: `ターゲットの強化効果を全て解除し、特殊ダメージを2回与える。既に弱体化効果が発生している場合は、追加で特殊ダメージを与える。ターゲットを2ターンの間炎上状態にする。
                
                ターゲットが既に炎上状態の場合、まだ炎上が発生していないランダムな敵を炎上状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '知略',
                name_eng: 'Battle Plan',
                image: '/ability/tex.ability_captaindrogan_special02.png',
                description_jp: `指定した味方と*知略*状態の味方の弱体化効果を全て解除する。指定した味方にまた知略が発生していない場合、その味方はバトル終了まで知略を得る(コピー、解除、阻止不可)。
                
                知略状態の味方全体をアシストに呼ぶ。ドロガン・指定した味方・知略状態の味方のプロテクションが20%回復する。指定した味方が反乱軍の場合、その味方のプロテクションが30%回復する。
                
                *知略: *攻撃力と有効性が25%上昇する`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '副司令官',
                name_eng: 'Second in Command',
                image: '/abilityui/tex.abilityui_passive_secondincommand.png',
                description_jp: `ドロガンの有効性が50%上昇する。ドロガンはターンメーターが減少するたび、プロテクションが20%回復し、1ターンの間攻撃力が60%上昇する(1ターンに1回限り)。各バトルでドロガンが初めて自分のターンで「同時射撃」を使用すると、75%の増加ダメージを与える。
                
                バトル開始時、ドロガンは遭遇終了まで知略を得る。知略状態の味方がターン中にスキルを使用するたび、ドロガンはアシストを行い、30%の減少ダメージを与える(1ターンに1回限り)。ドロガンが敵にダメージを与えるたび、ドロガンと知略状態の味方全体のプロテクションが5%回復する。味方反乱軍は、知略によるステータス効果が2倍。
                
                各遭遇開始時、リーダースロットの味方が反乱軍タンクの場合、ドロガンは1ターンのプロテクション上昇(100%)を得る。
                
                $グランドアリーナの場合: $ドロガンの最大HPが50%上昇する。
                
                バトル開始時、リーダースロットの味方が反乱軍タンクの場合、ドロガンはスキルブロックを無効化する。各ターン開始時、ドロガンはランダムな味方の弱体化効果を全て解除し、HPとプロテクションを25%回復する。
                
                バトル開始時、リーダースロットの味方が反乱軍ファイター・サポートの場合、ドロガンがクリティカルヒットを決めるたび、反乱軍の味方全体のターンメーターが10%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }
        ],
        last_updated: '2024年3月19日'
    }, {
        id: 'Captaion-Han-Solo',
        character_name: 'キャプテン・ハン・ソロ',
        character_image: '/charui/tex.charui_hoth_han.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '無力化ショット',
                name_eng: 'Disabling Shot',
                image: '/ability/tex.ability_han_hoth_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンのめまい効果を発生させる。帝国軍はこの攻撃に耐性発揮、回避が行えず、2倍のダメージを受ける。ハンのHPが最大値の場合、ターンメーターが30%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 10,
                name_jp: '潜伏',
                name_eng: 'Hunker Down',
                image: '/ability/tex.ability_han_hoth_special01.png',
                description_jp: `ハンと指定した他の味方の弱体を全て解除し、両者のHPがハンの最大HPの40%分回復し、ターンメーターが25%上昇する。指定した味方がHPが最大値の場合、さらにプロテクションが20%回復する。
                
                味方が弱体を受けると、このスキルのクールダウンが1減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 6,
                name_jp: 'サーチ&レスキュー',
                name_eng: 'Search and Rescue',
                image: '/ability/tex.ability_han_hoth_special02.png',
                description_jp: `戦闘不能になった味方をランダムに1体、HP1%、ターンメーター0%の状態で復活させる。それが反乱軍の場合、HPが50%回復し、ターンメーターが50%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '間一髪',
                name_eng: 'Nick of Time',
                image: '/abilityui/tex.abilityui_passive_crit_buff.png',
                description_jp: `キャプテン・ハン・ソロのクリティカル率が15%、クリティカルダメージが30%上昇する。さらに自ターン終了時、ハンは最大HPの10%分回復する。HPが既に最大値の場合、最もコンディションの悪い味方が代わりに回復する。ハンは通常攻撃を使用すると、3ターンの間最大HPが10%上昇する(スタック可能)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月19日'
    }, {
        id: 'Captain-Phasma',
        character_name: 'キャプテン・ファズマ',
        character_image: '/charui/tex.charui_phasma.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '猛襲',
                name_eng: 'Onslaught',
                image: '/ability/tex.ability_phasma_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、クリティカルヒット時に2ターンの間防御力を低下させる。クリティカルヒットでなかった場合は、ファズマに50%の確率で2ターンの間アドバンテージが発生する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '勝利の更新',
                name_eng: 'Victory March',
                image: '/ability/tex.ability_phasma_special02.png',
                description_jp: `味方全体に50%のターンメーター上昇と2ターンのアドバンテージが発生する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '一斉攻撃',
                name_eng: 'Fusillade',
                image: '/ability/tex.ability_phasma_special01.png',
                description_jp: `敵全体に物理ダメージを与え、90%の確率で2ターンの間スピードを低下させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '各自攻撃',
                name_eng: 'Fire at Will',
                image: '/abilityui/tex.abilityui_leader_default.png',
                description_jp: `味方ファースト・オーダーの有効性が20%上昇し、各遭遇開始時に2ターンの間アドバンテージを得る。アドバンテージ発生中はクリスタルヒットを受けない。味方は攻撃するたび、20%の確率でランダムな味方をアシストに呼ぶ。味方がファースト・オーダーの場合、この確率は3倍になる。味方にアドバンテージが発生していた場合、再び2ターンの間アドバンテージを得る。
                
                $テリトリーウォーズの場合: $ランダムな味方をアシストに呼ぶ確率がさらに10%上昇する。キャプテン・ファズマのスピードが100上昇。味方ファースト・オーダーがターン外に攻撃するたび、味方ファースト・オーダーのHPとプロテクションが5%回復する。味方ファースト・オーダーがアドバンテージを得るたび、その味方はバトル終了まで攻撃力10%も得て(スタック可能)、ファースト・オーダーの味方全体のターンメーターが7.5%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }
        ],
        last_updated: '2024年3月19日'
    }, {
        id: 'Captain-Rex',
        character_name: 'キャプテン・レックス',
        character_image: '/charui/tex.charui_captainrex.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '狙って撃つ',
                name_eng: 'Aim, Then Shoot',
                image: '/ability/tex.ability_captainrex_basic.png',
                description_jp: `ターゲットに物理ダメージを2回与える。この攻撃がクリティカルヒットを決めるたび、キャプテン・レックスとランダムな味方クローン・トルーパーまたはフェニックスの弱体化効果を全て解除する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'マスター・マークスマン',
                name_eng: 'Master Marksman',
                image: '/ability/tex.ability_captainrex_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、1ターンのスタン状態にする。この攻撃がクリティカルヒットすると、味方全体のHPとプロテクションが15%回復する。この攻撃でターゲットを戦闘不能にした場合、クローン・トルーパーとフェニックスの味方全体のクールダウンをリセットする。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '制圧射撃',
                name_eng: 'Suppressing Fire',
                image: '/ability/tex.ability_captainrex_special02.png',
                description_jp: `敵全体に2ターンの抵抗力低下(回避不可)とめまいを発生させる。敵全体に物理ダメージを与え、2ターンの間攻撃力を低下させる。このスキルにより発生させた弱体化効果ごとに味方クローン・トルーパーとフェニックスのターンメーターが5%上昇し、味方全体が2ターンのクリティカル率上昇と攻撃力上昇を得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '消えた戦士',
                name_eng: 'The Lost Commander',
                image: '/abilityui/tex.abilityui_passive_thelostcommander.png',
                description_jp: `キャプテン・レックスのクリティカル率が25%、最大HPが40%、スピードが25、抵抗力が40%上昇する。
                
                味方フェニックスが特殊スキルを使用するたび、レックスがアシストを行い、40%の減少ダメージを与える。味方クローン・トルーパーはHPが50%を下回るたび、HPとプロテクションが35%回復し(1ターンに1度限り)、2ターンの間、防御力と抵抗力が50%上昇する。味方クローン・トルーパーまたはフェニックスに弱体化効果が発生するたび、レックスのターンメーターが弱体化効果ごとに5%上昇し、味方全体のHPとプロテクションが5%回復する。
                
                $グランドアリーナの場合: $レックスのクリティカルダメージが30%、最大HPが追加で60%、スピードが25上昇する。
                
                $5対5のグランドアリーナで、バトル開始時に味方全体がフェニックスの場合: $味方はスキルブロック状態またはめまい状態になるたび、その効果を解除して敵全体に3ターンの時間経過ダメージのスタックを2つ発生させる(回避、耐性発揮不可)。キャプテン・レックスは通常スキルを使用するたび、HPとプロテクションが10%回復する。
                
                $3対3のグランドアリーナで、遭遇開始時に味方全体がクローン・トルーパーの場合: $味方はアシストを行うたび、50%の確率でターゲットの強化効果を全て解除し、バトル終了までアーマー破壊を発生させる(回避、耐性発揮不可)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }
        ],
        last_updated: '2024年3月19日'
    }, {
        id: 'Kuiil',
        character_name: 'クイール',
        character_image: '/charui/tex.charui_kuiil.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'エンジニアのギャンビット',
                name_eng: "Engineer's Gambit",
                image: '/ability/tex.ability_kuiil_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、3ターンの間炎上状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 2,
                name_jp: 'ボルタイックショット',
                name_eng: 'Voltaic Shot',
                image: '/ability/tex.ability_kuiil_special01.png',
                description_jp: `ターゲットに特殊ダメージを与え、1ターンの間スタン状態にし、3ターンのショックとスピード低下を与える。ターゲットに既に炎上効果が発生している場合、2ターンの間エクスポーズ状態にする。ターゲットに既にショックが発生している場合は、効果が発生していない最弱の敵を3ターンの間ショック状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '有無は言わせん',
                name_eng: 'I Have Spoken',
                image: '/ability/tex.ability_kuiil_special02.png',
                description_jp: `味方全体のHPがクイールの最大HPの20%分回復し、プロテクションがクイールの最大プロテクションの20%分回復する(味方ドロイドとならず者はその2倍)。味方ならず者のターンメーターが25%上昇する。味方ならず者とライトサイドのドロイドに2ターンの*メカニックの知識*が発生する(コピー不可)。
                
                #メカニックの知識は、味方の勢力に応じて異なるボーナス効果を付与する:#
                
                - +ドロイド:+ 攻撃力が40%上昇する。戦闘不能になると、HPとプロテクションが80%の状態で復活する
                - +ならず者:+ クリティカル率が20%上昇し、クリティカルダメージと防御突破力が40%上昇する`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'フロンティア・ウィズダム',
                name_eng: 'Frontier Wisdom',
                image: '/abilityui/tex.abilityui_passive_frontierwisdom.png',
                description_jp: `バトル開始時、味方ドロイドとならず者はクイールの最大HP、攻撃力、有効性の40%を得る。またクイールが初めて戦闘不能になるまで、味方はクイールの最大プロテクションの40%を得る。
                
                敵にショックが発生するたび、クイールと味方ドロイドのプロテクションが20%回復する。
                
                クイールとIG-11が味方にいる間: クイールとIG-11のヘルス・スティールが10%、有効性が30%上昇する。クイールはクリスタルヒットやスタンを受けず、IG-11がクリティカルヒットを決めるたびプロテクションが20%回復する。`,
                is_omega: true,
                is_omicron: true,
                is_zeta: false
            }
        ],
        last_updated: '2024年3月26日'
    }, {
        id: 'Grand-Master-Yoda',
        character_name: 'グランドマスター・ヨーダ',
        character_image: '/charui/tex.charui_yodagrandmaster.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'アタル',
                name_eng: 'Ataru',
                image: '/ability/tex.ability_yodagrandmaster_basic.png',
                description_jp: `ターゲットに特殊ダメージを与え、1ターンの間有効性を低下させる。その敵のHPが50%以上残っている場合、ヨーダのターンメーターが40%上昇し、2ターンのフォアサイトが発生する。その敵のHPが50%未満の場合、2ターンの間攻撃力と防御突破力が上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'マスターストローク',
                name_eng: 'Masterstroke',
                image: '/ability/tex.ability_yodagrandmaster_special03.png',
                description_jp: `敵全体に特殊ダメージを与える。その後、敵に発生している各強化効果をグランドマスター・ヨーダに3ターン発生させる(*ユニーク*ステータス効果はコピー不可)。グランドマスター・ヨーダは、他の味方ジェダイが生存している限り、追加ターンを得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: 'アンストッパブル・フォース',
                name_eng: 'Unstoppable Force',
                image: '/ability/tex.ability_yodagrandmaster_special01.png',
                description_jp: `ターゲットに特殊ダメージを与え、ターンメーターを70%減少させる。その敵のHPが100%を下回っている場合、1ターンの間スタン状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '戦闘瞑想',
                name_eng: 'Battle Meditation',
                image: '/ability/tex.ability_yodagrandmaster_special02.png',
                description_jp: `ヨーダが2ターンの抵抗力上昇、プロテクション上昇(35%)、フォアサイトを得て、ヨーダに発生している全ての非ユニーク強化(ステルスと挑発を除く)を各味方に2ターン付与する。さらにヨーダのターンメーターが35%上昇し、生存している味方ジェダイ1体につき10%ターンメーターが上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'グランドマスターの導き',
                name_eng: "Grand Master's Guidance",
                image: '/abilityui/tex.abilityui_passive_removeharmful.png',
                description_jp: `味方ジェダイの抵抗力が30%上昇する。味方ジェダイが弱体に対して耐性発揮を行うと、その味方は次の効果を得る: ターンメーター30%上昇、2ターンのクリティカル率上昇し、2ターンのクリティカルダメージ上昇。味方ジェダイが弱体を受けると、ターン終了時その味方に1ターンの抵抗力上昇が発生する。グランドマスター・ヨーダはショック効果を無効化する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月26日'
    }, {
        id: 'Grand-Moff-Tarkin',
        character_name: 'グランドモフ・ターキン',
        character_image: '/charui/tex.charui_tarkinadmiral.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'グランドモフ・アタック',
                name_eng: "Grand Moff's Attack",
                image: '/ability/tex.ability_grandmofftarkin_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。この攻撃は、生存している味方1体ごとに10%ダメージが上昇する。次に「超火力」が使用されるまで、ターキンの有効性が50%上昇する(スタック可能)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '超火力',
                name_eng: "Ultimate Firepower",
                image: '/ability/tex.ability_grandmofftarkin_special01.png',
                description_jp: `敵全体に物理ダメージを与え、100%の確率でターンメーターを50%減少させる。この攻撃はターキンの有効性値の2倍分、攻撃力が上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '威圧戦術',
                name_eng: "Intimidation Tactics",
                image: '/ability/tex.ability_grandmofftarkin_special02.png',
                description_jp: `3ターンの間有効性が上昇する。敵全体のクリティカル率および攻撃力を3ターンの間低下させる。敵反乱軍はこの弱体に耐性発揮が行えない。さらに弱体を受けた敵1体ごとにターンメーターが15%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'タイト・グリップ',
                name_eng: "Tighten the Grip",
                image: '/abilityui/tex.abilityui_passive_speed.png',
                description_jp: `味方帝国軍のスピードが30上昇する。味方帝国軍のターン中にHPが100%を下回った敵には、2ターンの防御力低下およびエクスポーズを発生させる。この効果には耐性発揮が行えない。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '冷酷なる信念',
                name_eng: "Callous Conviction",
                image: '/abilityui/tex.abilityui_passive_empire.png',
                description_jp: `グランドモフ・ターキンの防御力が、有効性の値分上昇する。さらに弱体を受けている敵1体ごとに有効性が20%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月26日'
    }, {
        id: 'General-Grievous',
        character_name: 'グリーヴァス将軍',
        character_image: '/charui/tex.charui_grievous.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'フィリアス・アサルト',
                name_eng: "Furious Assault",
                image: '/ability/tex.ability_grievous_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンの間、回復無効状態にする。この攻撃は回避、カウンターができない。ターゲットに既に弱体が発生していた場合、さらに30%の増加ダメージを与える。グリーヴァスの攻撃は、物理ダメージの代わりに最大HPに応じたダメージを与える。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: 'グリーヴァス・ウーンド',
                name_eng: "Grievous Wonds",
                image: '/ability/tex.ability_grievous_special02.png',
                description_jp: `敵全体にグリーヴァスの最大HPに応じた物理ダメージを与え、2ターンのターゲットロックを発生させる。さらに敵のターンメーターを30%減少させる。この攻撃は回避できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '駆けまわる怪物',
                name_eng: "Skittering Horror",
                image: '/ability/tex.ability_grievous_special01.png',
                description_jp: `2ターンのヘルス・スティール上昇を得て、ターゲットにグリーヴァスの最大HPに応じた物理ダメージを与え、1ターンの間スタン状態にする。ターゲットに既に弱体化効果が発生していた場合、ターゲットは最大HPの10%を失い、遭遇終了までグリーヴァスの最大HPが10%上昇する(レイドボスと銀河の伝説は対象外、耐性発揮不可)。この攻撃は回避できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '重圧',
                name_eng: "Daunting Presence",
                image: '/abilityui/tex.abilityui_passive_def.png',
                description_jp: `敵全体のクリティカル回避力が40%、防御力が50%低下する。味方ダークサイドドロイドが耐性発揮されると、遭遇終了までそのドロイドの有効性が10%上昇する(スタック可能)。ターゲットロック状態の敵はカウンター攻撃できない。
                
                ターゲットロック状態の敵がダメージを受けると、味方ドロイドと分離主義者のターンメーターが2%上昇する(グリーヴァスに対しては2倍)。攻撃ダメージを受けると、敵ダークサイドのターンメーターが5%、敵ライトサイドの有効性が2%減少する(スタック可能)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'メタロイド・モンスター',
                name_eng: "Metalloid Monstrosity",
                image: '/abilityui/tex.abilityui_passive_speed.png',
                description_jp: `グリーヴァスのターン開始時、味方ドロイド全てがグリーヴァスの最大HPの8%相当のダメージを受ける(ライトサイドのドロイドに対しては2倍)。グリーヴァスは遭遇終了まで、味方ドロイド1体につき、最大HPと有効性を5%上昇させる。このダメージではユニットは戦闘不能にならない。
                
                全ユニットのターン開始時、グリーヴァスのHPが100%を下回っている場合、ターン終了まで自身とマーク状態の最良コンディションの味方の弱体を全て解除する(=各ターン開始時、グリーヴァスのHPが100%を下回っている場合、自身の弱体化効果を全て解除し、ターン終了まで最もHPが高い味方ドロイド1体をマーク状態にする?)。味方ドロイドまたは分離主義者が戦闘不能になると、グリーヴァスは自身の弱体を全て解除し、全スキルのクールダウンをリセットさせ、ボーナスターンを1得る。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月26日'
    }, {
        id: 'Greedo',
        character_name: 'グリード',
        character_image: '/charui/tex.charui_greedo.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '誰が先に撃った？',
                name_eng: "Who Shot First?",
                image: '/ability/tex.ability_greedo_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、70%の確率で1ターンの間有効性が上昇する。サーマル・デトネーター付きの敵を攻撃した場合、この攻撃のクリティカルダメージが25%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 5,
                name_jp: '爆破工作',
                name_eng: "Explosive Sabotage",
                image: '/ability/tex.ability_greedo_special01.png',
                description_jp: `敵全体にサーマル・デトネーターを投擲する。このサーマル・デトネーターは1ターン後に起爆し、爆発したサーマル・デトネーター1つごとにグリードのターンメーターが25%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '脅威',
                name_eng: "Threaten",
                image: '/ability/tex.ability_greedo_special02.png',
                description_jp: `2ターンの間、味方全体のクリティカル率が上昇する。またグリードのクリティカル率分の値分、敵ターゲットのターンメーターを減少させる(レイドボスと銀河の伝説は対象外、耐性発揮不可)。グリードはこれによって減少させた量のターンメーターを得る。ターゲットのターンメーターが20%を下回った場合、1ターンの間スタン状態にする(耐性発揮不可)。さらに、敵ターゲットの強化を全て解除する。この攻撃は回避できない。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '奇襲',
                name_eng: "Ambuscade",
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `味方ならず者のクリティカルダメージが50%上昇する。グリードがリーダースロットに設定されていると、次の契約が発動する(同盟スロットでは不可):
                
                *契約: *ターンメーターが50%を下回る敵に通常スキルで10回ダメージを与える(契約達成には味方賞金稼ぎのみが参加可能)
                
                *報酬: *バトル終了まで味方賞金稼ぎ全体のクリティカルダメージが50%上昇し、ボーナス効果が発動する`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '挫けぬ心',
                name_eng: "If at First You Don't Succeed",
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `グリードのクリティカル率が15%上昇し、クリティカルヒット時には50%の確率でもう一度攻撃する(制限なし)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'グリードのボーナス',
                name_eng: "Greedo's Payout",
                image: '/abilityui/tex.abilityui_passive_contract.png',
                description_jp: `グリードは契約報酬を受け取ると、次のボーナスも獲得する(契約は特定の賞金稼ぎリーダースキルによって付与される)。
                
                *ボーナス: *バトル終了までグリードのヘルス・スティールが50%、クリティカルダメージが25%上昇し、カウンター率が75%になる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月26日'
    }, {
        id: 'Greef-Karga',
        character_name: 'グリーフ・カルガ',
        character_image: '/charui/tex.charui_greefkarga.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'デュアルショット',
                name_eng: "Dual Shot",
                image: '/ability/tex.ability_greefkarga_basic.png',
                description_jp: `ターゲットに物理ダメージを2回与え、2ターンのめまいを発生させる。ボーナスがアクティブな味方全体のHPとプロテクションが5%回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 6,
                name_jp: '冷たくしてでも連れてこい',
                name_eng: "Bring Them in Cold",
                image: '/ability/tex.ability_greefkarga_special01.png',
                description_jp: `ターゲットの強化効果を全て解除する(回避不可)。味方賞金稼ぎ全体をアシストに呼ぶ。ボーナスがアクティブな味方の与えるダメージが30%増加する。このスキルで敵が戦闘不能になった場合、味方賞金稼ぎの攻撃力、防御突破力、クリティカルダメージ、クリティカル率、ヘルス・スティールが3ターンの間上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 5,
                name_jp: '色を付ける',
                name_eng: "Sweeten the Deal",
                image: '/ability/tex.ability_greefkarga_special02.png',
                description_jp: `味方賞金稼ぎの弱体化効果を全て解除する。味方賞金稼ぎ全体に2ターンの報復効果を与え、HPとプロテクションを25%回復する(味方のボーナスがアクティブな場合は効果2倍)。ボーナスがアクティブな味方は抵抗力が2ターン上昇し、ターンメーターが50%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'ロイヤリティ・ペイ',
                name_eng: "Loyalty Pays",
                image: '/abilityui/tex.abilityui_passive_mil_fal_pristine.png',
                description_jp: `味方賞金稼ぎの最大プロテクションが30%上昇する。味方賞金稼ぎが強化効果を受けると、その味方のプロテクションが5%回復する。グリーフがリーダースロットに設定されていると、次の契約が発動する(同盟スロットでは不可):
                
                *契約: *ターン外に20回攻撃する(契約達成には味方賞金稼ぎのみが参加可能)
                
                *報酬: *味方賞金稼ぎ全体がボーナスを獲得し、クリティカル率と攻撃力が20%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ギルドのボス',
                name_eng: "Boss of the Guild",
                image: '/abilityui/tex.abilityui_passive_guildboss.png',
                description_jp: `遭遇開始時、グリーフは2ターンの間ステルス状態になる。賞金稼ぎがボーナスを獲得するたび、味方賞金稼ぎのクールダウンが1減少し、グリーフは次のボーナスを獲得する:カウンター率、クリティカル回避力、最大体力(=最大HP?)が10%上昇する(スタック可能)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'グリーフ・カルガのボーナス',
                name_eng: "Greef Karga's Payout",
                image: '/abilityui/tex.abilityui_passive_contract.png',
                description_jp: `グリーフは契約報酬を受け取ると、次のボーナスも獲得する(契約は特定の賞金稼ぎリーダースキルによって付与される)。
                
                *ボーナス*: グリーフは味方賞金稼ぎの弱体化効果を全て解除し、HPとプロテクションを100%回復する。自分の各ターン開始時、グリーフは1ターンの間ステルス状態になる。弱体化効果を受けるたび、グリーフのクールダウンが1減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月26日'
    }, {
        id: 'Krrsantan',
        character_name: 'クルルサンタン',
        character_image: '/charui/tex.charui_krrsantan.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'ナックル・ダスター',
                name_eng: "Knuckle Duster",
                image: '/ability/tex.ability_krrsantan_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンの間有効性を低下させる。さらに10%の確率で2ターンのショックを発生させる。
                
                バトル開始時に味方全体がハット・カルテルで、クルルサンタンが挑発中の場合、ターゲットに2ターンの回避力低下とショックを発生させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '猛攻',
                name_eng: "Dismember",
                image: '/ability/tex.ability_krrsantan_special01.png',
                description_jp: `ターゲットに物理ダメージを与える。2ターンの防御力上昇と挑発を得て、HPとプロテクションが10%回復する。
                
                リーダースロットにいる味方がハット・カルテルの場合、2ターンの間プロテクションが上昇し、味方ハット・カルテルごとにHPとプロテクションが5%回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 8,
                name_jp: '解体',
                name_eng: "Dismember",
                image: '/ability/tex.ability_krrsantan_special02.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンの間またはクルルサンタンが戦闘不能になるまで*「武装解除」*を発生させ、その他の敵全体からその効果を解除する。この弱体化効果はコピー、解除、耐性発揮できない。このスキルはクールダウン状態からスタートする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '恐ろしく獰猛',
                name_eng: "Formidable Ferocity",
                image: '/abilityui/tex.abilityui_passive_formidableferocity.png',
                description_jp: `味方ならず者のヘルス・スティール、最大HP、最大プロテクションが30%上昇する。
                
                味方ハット・カルテルがクリティカルヒットを受けるたび、2ターンの間攻撃力が5%上昇する(スタック可能)。
                
                クルルサンタンが同盟スロットではなく、リーダースロットにいる場合、次の契約が有効になる:
                
                *契約: *敵リーダーを倒す(契約に貢献できるのは味方ならず者のみ)。
                
                *報酬: *賞金稼ぎの味方全体のボーナスが有効になり、賞金稼ぎまたはならず者の味方全体のヘルス・スティールと最大HPが25%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '闘技場のチャンピオン',
                name_eng: "Champion of the Fighting Pits",
                image: '/abilityui/tex.abilityui_passive_hardware.png',
                description_jp: `バトル開始時、クルルサンタンの防御力と最大HPが30%上昇する。クルルサンタンは挑発を失うたび、HPとプロテクションが10%回復する。
                
                遭遇開始時に味方全体がハット・カルテルだった場合、各バトル開始時にクルルサンタンが挑発を行い、スピードが上昇する(2ターンの間)。リーダースロットの味方のプロテクションが50%を超えている場合、クルルサンタンは挑発を失うたびに1ターンの挑発を行う。初めて戦闘不能になると、リーダースロットの味方のターン終了時にHP60%で復活し、プロテクションが60%回復する。「解体」がクールダウン状態から開始しなくなり、各遭遇開始時にそのクールダウンがリセットされる。
                
                $グランドアリーナの場合: $バトル開始時、クルルサンタンの最大プロテクションが40%上昇する。クルルサンタンがアクティブな間、敵全体の有効性が30%低下する。
                
                バトル開始時に味方全体がハット・カルテルだった場合: クルルサンタンはスキルブロックとクールダウン上昇を無効化し、リーダースロット(自分を除く)の味方HPが初めてHPが初めて50%を下回ると、2ターンの挑発を行い、リーダースロットの味方のプロテクションが50%回復する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'クルルサンタンのボーナス',
                name_eng: "Krrsantan's Payout",
                image: '/abilityui/tex.abilityui_passive_contract.png',
                description_jp: `クルルサンタンは契約報酬を受け取るたび、次のボーナスも獲得する(契約は特定の賞金稼ぎリーダースキルによって付与される)。
                
                *ボーナス: *バトル終了まで、クルルサンタンのクリティカル回避力が50%上昇する。クルルサンタンは2ターンの挑発を行い、HPとプロテクションが40%回復する。
                
                リーダースロットの味方が銀河の伝説とハット・カルテルの場合、クルルサンタンはさらに2ターンのダメージ耐性と、バトル終了まで抵抗力が30%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月26日'
    }, {
        id: 'Director-Krennic',
        character_name: 'クレニック長官',
        character_image: '/charui/tex.charui_krennic.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '防御力検証',
                name_eng: "Test Their Defenses",
                image: '/ability/tex.ability_krennic_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、3ターンの間抵抗力を低下させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'デス・トルーパー・アサルト',
                name_eng: "Death Trooper Assault",
                image: '/ability/tex.ability_krennic_special02.png',
                description_jp: `敵全体に特殊ダメージを与え、70%の確率で2ターンのよろめき効果を発生させる。弱体された敵がいる場合、1体ごとにHP20%でデス・トルーパーを復活させる。デス・トルーパーがいる場合、デス・トルーパーをアシストに呼ぶ。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '実験兵器',
                name_eng: "Experimental Weaponry",
                image: '/ability/tex.ability_krennic_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンの弱体を発生させる(アタッカー: スタン、ヒーラー/サポート: スキルブロック、タンク: 強化無効)。ターゲットが反乱軍の場合、2ターンの間スピードを低下させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '先進兵器研究部門長官',
                name_eng: "Director of Advanced Weapons Research",
                image: '/abilityui/tex.abilityui_passive_empire.png',
                description_jp: `味方帝国軍のクリティカル率が25%、有効性が25%上昇する。味方帝国軍のターン中にクリティカルヒットを受けた弱体発生中の敵は、1ターンの間スキルブロック状態になる。この効果には耐性発揮が行えない。味方帝国軍はクリスタルヒット時にプロテクションが10%回復する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '絶大なる力',
                name_eng: "Immeasurable Power",
                image: '/abilityui/tex.abilityui_passive_crit_buff.png',
                description_jp: `弱体化効果発生中の敵1体につき、クレニック長官のクリティカルダメージが10%上昇し、敵反乱軍1体につき、クリティカルダメージが10%上昇する。デス・トルーパーがいる場合、デス・トルーパーもこれらのボーナスを得る。
                
                $グランドアリーナの場合$: クレニックの防御突破力、HP、攻撃力が30%上昇する。デス・トルーパーがいる場合、デス・トルーパーもこれらのボーナスを得る。クレニックが攻撃するたび、デス・トルーパーがアシストを行い、クールダウンが1減少する。味方デス・トルーパーがアクティブな間、クレニックとデス・トルーパーは挑発を無効化する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: true
            }
        ],
        last_updated: '2024年3月26日'
    }, {
        id: 'Clone-Sergeant-Phase-I',
        character_name: 'クローン・サージェント(フェーズI)',
        character_image: '/charui/tex.charui_trooperclonegreen.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'Z-6ロータリーブラスター',
                name_eng: "Z-6 Rotary Blaster",
                image: '/ability/tex.ability_clonesergeant_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、クリティカルヒット時にターンメーターが50%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '制圧射撃',
                name_eng: "Suppressive Fire",
                image: '/ability/tex.ability_clonesergeant_special01.png',
                description_jp: `敵全体に物理ダメージを与え、ターンメーターを50%減少させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '集中射撃',
                name_eng: "Councentrated Fire",
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `生存している味方クローン1体ごとに、クローン・サージェント(フェーズI)のクリティカル率が4.5%上昇する。さらにクリティカルダメージが10%上昇し、クリティカルヒット時には2ターンの間攻撃力が上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月26日'
    }, {
        id: 'Clone-Wars-Chewbacca',
        character_name: 'クローン大戦チューバッカ',
        character_image: '/charui/tex.charui_clonewarschewbacca.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'ボウキャスター',
                name_eng: "Bowcaster",
                image: '/ability/tex.ability_chewbacca_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、55%の確率でターンメーターを50%減少させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'ウーキーレイジ',
                name_eng: "Wookiee Rage",
                image: '/ability/tex.ability_chewbacca_special01.png',
                description_jp: `2ターンの間、チューバッカが挑発を行いHPが30%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '反抗のうなり',
                name_eng: "Defiant Roar",
                image: '/ability/tex.ability_chewbacca_special02.png',
                description_jp: `チューバッカが自分に発生している弱体を全て解除し、最大HPの50%分回復する。さらに3ターンの間防御力が上昇し、50%の確率でターンメーターが25%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'ウーキーの決意',
                name_eng: "Wookiee Resolve",
                image: '/abilityui/tex.abilityui_passive_def.png',
                description_jp: `味方全体の防御力が50上昇し、味方はダメージを受けると50%の確率で3ターンの間防御力が上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月26日'
    }, {
        id: 'Qui-Gon-Jinn',
        character_name: 'クワイ＝ガン・ジン',
        character_image: '/charui/tex.charui_quigon.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'クイックストライク',
                name_eng: "Quick Strike",
                image: '/ability/tex.ability_quigonjinn_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、65%の確率でターンメーターを30%減少させる。65%の確率でターンメーターが30%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 2,
                name_jp: '連携アサルト',
                name_eng: "Harmonious Assault",
                image: '/ability/tex.ability_quigonjinn_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、ランダムな味方をアシストに呼ぶ。アシストする味方は75%の増加ダメージを与え、HPが20%回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '謙虚な一撃',
                name_eng: "Humbling Blow",
                image: '/ability/tex.ability_quigonjinn_special02.png',
                description_jp: `ターゲットに物理ダメージを与え、強化効果を全て解除する。強化効果が解除された場合、味方全体が3ターンの攻撃力上昇を得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '俊敏性訓練',
                name_eng: "Agility Training",
                image: '/abilityui/tex.abilityui_passive_speed.png',
                description_jp: `味方ジェダイのスピードが30上昇し、各自のスピードの3倍の攻撃力を得る。さらに各バトル開始時およびいずれかのユニットが戦闘不能になると、2ターンのフォアサイトが発生する。
                
                $グランドアリーナの場合: $バトル開始時に銀河の伝説が存在せず、味方が全てジェダイの場合、味方全体は代わりに各自のスピードの30倍の攻撃力を得る(フォアサイト発生中はその2倍)。また味方はクワイ＝ガン・ジンがアクティブな間は戦闘不能にならない。クワイ＝ガン・ジンはダメージ耐性またはステルスを得られなくなり、復活できなくなる。クワイ＝ガン・ジンが戦闘不能になると、味方全体のHPとプロテクションが100%回復し、2ターンの間クワイ＝ガン・ジンの攻撃力の400%を得る。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }
        ],
        last_updated: '2024年3月26日'
    }, {
        id: 'Kanan-Jarrus',
        character_name: "ケイナン・ジャラス",
        character_image: '/charui/tex.charui_kanan_s3.png',
        ability: [
            {
                ability_type: "通常スキル",
                name_jp: "武装解除攻撃",
                name_eng: "Disarming Strike",
                image: '/ability/tex.ability_kanan_s3_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、ケイナンの次ターン開始まで、または戦闘不能になるまで攻撃力を低下させる。この攻撃がクリティカルヒットした場合、この効果には耐性発揮が行えなくなる。フルHPではない味方1体ごとに、このスキルのクリティカル率は15%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 3,
                name_jp: "介入",
                name_eng: "Intervene",
                image: '/ability/tex.ability_kanan_s3_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンの挑発を行う。さらに指定した味方から弱体を全て解除する。ケイナンは挑発を行っている間、抵抗力が2倍になる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 3,
                name_jp: "トータルディフェンス",
                name_eng: "Total Defense",
                image: "/ability/tex.ability_kanan_s3_special02.png",
                description_jp: `味方フェニックスから弱体を全て解除し、3ターンの間防御力を上昇させる。ケイナンと指定した味方は2ターンの間フォアサイトが発生してプロテクションが40%上昇し、それぞれのフォアサイト終了時にケイナンのターンメーターが100%、他の味方フェニックスのターンメーターが50%上昇する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: "ユニークスキル",
                name_jp: "クリア・マインド",
                name_eng: "Clear Mind",
                image: "/abilityui/tex.abilityui_passive_phoenix.png",
                description_jp: `ケイナンの70%のカウンター率を得て、弱体を受けるとHPが25%回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月29日'
    }, {
        id: 'Gungan-Boomadier',
        character_name: "グンガン・ブーマディア",
        character_image: '/charui/tex.charui_gunganboomadier.png',
        ability: [
            {
                ability_type: "通常スキル",
                name_jp: "これでも食らえ！",
                name_eng: "Catch This!",
                image: '/ability/tex.ability_gunganboomadier_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、敵がショック状態の場合、このダメージは3倍になる。1ターンのスピード上昇を得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 3,
                name_jp: "クラスター・ブーマ",
                name_eng: "Cluster Booma",
                image: '/ability/tex.ability_gunganboomadier_special01.png',
                description_jp: `ターゲットに物理ダメージを与える。ターゲットに発生している攻撃力低下、防御力低下、回復無効、スピード低下ごとに追加でダメージを与える(最大5)。敵分離主義者には常に5回ダメージを与える。与えたダメージごとに味方シールド発生装置からリチャージのスタックを1取り除く。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 5,
                name_jp: "オータ・グンガのホーン",
                name_eng: "Horn of Otoh Gunga",
                image: '/ability/tex.ability_gunganboomadier_special02.png',
                description_jp: `敵全体に物理ダメージを与え、1ターンの間スキルブロック状態にする。敵分離主義者に2ターンの間、プロテクション破壊が発生する(コピー、解除、耐性発揮不可)。味方シールド発生装置からリチャージのスタックを3取り除き、プラズマシールドのスタックを2得る。指定した味方グンガンとターンメーターを入れ替える。ブーマディアは1ターンの間フレンジー状態になる。指定した味方グンガンの精度が2ターンの間上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "ユニークスキル",
                name_jp: "グランド・アーミー・スペシャリスト",
                name_eng: "Grand Army Specialist",
                image: '/abilityui/tex.abilityui_passive_grandarmyspecialist.png',
                description_jp: `バトル開始時、グンガン・ブーマディアの最大HPが75%減少し、それと同量分、最大プロテクションが上昇する。
                
                グンガン・ブーマディアの防御突破力と攻撃力が30%上昇する。
                
                味方シールド発生装置がアクティブな場合:
                 - グンガンのアタッカーによって戦闘不能になった敵は復活できない
                 - グンガン・ブーマディアが特殊スキルを使用するたび、バトル終了まで防御突破力と攻撃力が5%上昇する(スタック可能、戦闘不能になるまで持続)
                 - 味方グンガンは報復効果発生中、ターゲットロックを無効化する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月29日'
    }, {
        id: 'General-KenImperial Probe Droidobi',
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
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: 'ネゴシエーター',
                name_eng: 'The Negotiator',
                image: '/ability/tex.ability_generalkenobi_special01.png',
                description_jp: '味方全体の弱体化効果を全て無効化し、2ターンの間、逆の強化効果を発生させる。弱体化効果の発生していなかった味方は3ターンの報復効果が発生する。ケノービ将軍のターンメーターが60%上昇する。',
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '戦闘指揮',
                name_eng: 'lead the Charge',
                image: '/ability/tex.ability_generalkenobi_special02.png',
                description_jp: 'ターゲットに物理ダメージを与え、ランダムな味方1体に2ターンの攻撃力上昇を付与する。強化効果が発生しているすべての味方をアシストに呼び、30%の低下ダメージを与える。ジェダイ・ナイト・アナキンとアソーカ・タノはこれによるダメージペナルティを受けない。',
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '第212攻撃大隊コマンダー',
                name_eng: '212th Attack Battalion Commnader',
                image: '/abilityui/tex.abilityui_passive_hp.png',
                description_jp: '味方ジェダイおよびクローンの最大HPが30%、防御力が70%上昇する。味方ジェダイが全体回復の特殊スキルを使用すると、HPが最大値の味方全員がアシストを行う。アシスト時の攻撃はダメージが50%減少する。味方クローンは特殊スキルを使用すると1ターンの強化(アタッカー: アドバンテージ、サポート: ステルス、タンク: 挑発)が発生する',
                is_omega: false,
                is_zeta: false,
                is_omicron: false
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
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Coruscant-Underworld-Police',
        character_name: "コルサント・アンダーワールド警察隊",
        character_image: '/charui/tex.charui_coruscantpolice.png',
        ability: [
            {
                ability_type: "通常スキル",
                name_jp: "非致死攻撃",
                name_eng: "Non-Lethal Takedown",
                image: '/ability/tex.ability_coruscantpolice_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、50%の確率で1ターンの間スタン状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 3,
                name_jp: "非致死性の群衆整理",
                name_eng: "Non-Lethal Crowd Control",
                image: '/ability/tex.ability_coruscantpolice_special01.png',
                description_jp: `敵全体に物理ダメージを与え、70%の確率で2ターンの間攻撃力を低下させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "ユニークスキル",
                name_jp: "ノンリーサル・スペシャリスト",
                name_eng: "Non-Lethal Specialist",
                image: '/abilityui/tex.abilityui_passive_speed.png',
                description_jp: `コルサント・アンダーワールド警察隊の有効性が30%上昇する。さらに、状態異常を発生させるとターンメーターが20%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月29日'
    }, {
        id: 'Third-Sister',
        character_name: "サード・シスター",
        character_image: '/charui/tex.charui_thirdsister.png',
        ability: [
            {
                ability_type: "通常スキル",
                name_jp: "隠れるのは終わり",
                name_eng: "No More Hiding",
                image: '/ability/tex.ability_thirdsister_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、遭遇終了まで「粛清」のスタックを1発生させる(最大6。回避不可)。ターゲットに既に「粛清」が発生していた場合、2ターンのスキルブロックを発生させ、サード・シスターの弱体化効果を全て解除する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 3,
                name_jp: "不屈の猛攻",
                name_eng: "Unyielding Onslaught",
                image: '/ability/tex.ability_thirdsister_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、与えたダメージ分HPが回復する。敵に発生している「粛清」のスタックごとに、この攻撃のダメージが30%上昇する。このスキル使用後にサード・シスターのHPが満タンの場合、遭遇終了までターゲットにアーマー破壊を発生させる。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 4,
                name_jp: "無謀な一掃",
                name_eng: "Reckless Sweep",
                image: '/ability/tex.ability_thirdsister_special02.png',
                description_jp: `敵全体に物理ダメージを与え、各敵の「粛清」のスタックを1消費する。敵全体に「粛清」のスタックが1以上ある場合、敵全体に2ターンの間、防御力低下と回復無効を発生させる(解除、回避、耐性発揮不可)。尋問官の味方全体のターンメーターが20%上昇する。そうでない場合、2ターンの間、敵全体に防御力低下と回復無効を発生させる。
                
                $グランドアリーナの場合: $尋問官の味方全体のクリティカルダメージが2ターンの間上昇し、クールダウンが1減少する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }, {
                ability_type: "リーダースキル",
                name_jp: "抑えがたき衝動",
                name_eng: "Harbored Aggression",
                image: '/abilityui/tex.abilityui_leader_inquisitor.png',
                description_jp: `味方尋問官の最大HPが40%、攻撃力が20%、スピードが30上昇し、スタンを無効化する。遭遇開始時または味方尋問官が戦闘不能になるか敵を戦闘不能にするたび、遭遇終了まで敵全体に「粛清」のスタックが5発生する(最大6。耐性発揮不可)。味方尋問官の攻撃は、「粛清」のスタックが5以上ある敵に対して常にクリティカルヒットになる(可能な場合)。敵がプロテクションを回復するかプロテクション上昇を得るたび、遭遇終了まで敵全体の防御力が2%減少する(スタック可能、最大50%)。
                
                $グランドアリーナの場合: $味方または敵が戦闘不能になるたび、尋問官の味方全体が2ターンの防御突破力上昇を得る。敵のターン中に「粛清」が解除されるたび、そのユニット(銀河の伝説を除く)に2ターンの*デスマーク*が発生する(解除、耐性発揮不可)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }, {
                ability_type: "ユニークスキル",
                name_jp: "復讐の衝動",
                name_eng: "Driven by Revenge",
                image: '/abilityui/tex.abilityui_passive_drivenbyrevenge.png',
                description_jp: `サード・シスターの最大HPが30%、スピードが30上昇する。サード・シスターがHP割合ダメージの効果で受けるダメージが減少する。サード・シスターはバトル開始時および初めて戦闘不能になった際に、バトル終了まで*憎悪*の効果を得る。サード・シスターが復活するたび、遭遇終了まで、攻撃力と防御力が100%(スタック可能、最大200%)、クリティカル率が25%(スタック可能、最大50%)上昇する。敵のターン中に「粛清」が解除されるたび、または敵が味方2体以上にダメージを与える攻撃を行うたび、「粛清」のスタックが1発生し(最大6)、サード・シスターが2ターンの挑発を行う。
                
                $グランドアリーナの場合: $「憎悪」からサード・シスターが復活するたび、「不屈の猛攻」のクールダウンがリフレッシュされ、次に攻撃するまで攻撃力が100%上昇し、1ターンの間挑発効果を無効化する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: true
            }, {
                ability_type: "ユニークスキル",
                name_jp: "短気",
                name_eng: "Impatience",
                image: '/abilityui/tex.abilityui_passive_jediwillneverbevictorious.png',
                description_jp: `バトル開始時、味方全体(3体以上)が尋問官の場合、このユニットのクリティカルダメージ、最大HP、攻撃力が20%上昇する。遭遇開始時および味方または敵が戦闘不能になるたび、このユニットは2ターンの挑発を行う。敵がターン外にこのユニットに攻撃ダメージを与えるたび、その敵は「粛清」のスタックを1得る(最大6。回避、耐性発揮不可)。「粛清」が消費または解除されるたび、このユニットのターンメーターが3%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月31日'
    }, {
        id: 'Savage-Opress',
        character_name: "サヴァージ・オプレス",
        character_image: '/charui/tex.charui_savageopress.png',
        ability: [
            {
                ability_type: "通常スキル",
                name_jp: "強打",
                name_eng: "Staggering Blow",
                image: '/ability/tex.ability_savageopress_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。サヴァージは50%の確率で2ターンの攻撃力低下を発生させる(クリティカルヒットを決めた場合、この確率は2倍になる)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 3,
                name_jp: "征服",
                name_eng: "Overpower",
                image: '/ability/tex.ability_savageopress_special01.png',
                description_jp: `ターゲットに物理ダメージを与える。ターゲットのHPが50%以下の場合、この攻撃は大ダメージを与える(回避不可)。このスキルで敵を倒した場合、サヴァージはクリティカル率上昇と、クリティカルダメージ上昇を3ターン得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "リーダースキル",
                name_jp: "痛みに耐えよ",
                name_eng: "Pain Is Weakness",
                image: '/abilityui/tex.abilityui_passive_def.png',
                description_jp: `味方シスの防御力が75%、抵抗力が30%上昇する(他の味方はその半分量上昇する)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "ユニークスキル",
                name_jp: "ブルート",
                name_eng: "Brute",
                image: '/abilityui/tex.abilityui_passive_def.png',
                description_jp: `サヴァージはダメージを受けるたび、2ターンの間、防御力上昇、時間経過回復、攻撃力上昇を得て、ターンメーターが30%上昇する。
                
                サヴァージはクリティカルヒットを受けるたび、自身の弱体化効果を全て解除する。ターン終了時に、サヴァージはランダムな他の味方シス1体から弱体化効果を全て解除し、それらの弱体化効果を1ターンの間受ける。
                
                $グランドアリーナの場合: $サヴァージの防御力、最大HP、攻撃力が50%上昇し、スピードが30上昇する。遭遇開始時、サヴァージは「強靭な防御」のスタックを2得る。自ターン終了時、味方シスの弱体化効果ごとに、サヴァージは「強靭な防御」のスタック2つ(最大10)とターンメーター10%上昇(最大10%)を得る。
                サヴァージがクリティカルヒットを受けるたび、サヴァージのヘルス・スティールと攻撃力が16%上昇(スタック可能、最大160%)し、シスの味方全体のヘルス・スティールと攻撃力が4%上昇する(スタック可能、最大40%)。またHPとプロテクションが15%回復し、バトル終了までターンメーターが10%上昇する。
                
                サヴァージに「強靭な防御」が発生している間、スタックごとに防御力が50%上昇し、無防備状態になる(阻止、解除不可)。サヴァージは挑発を得るたび、それを解除して「強靭な防御」のスタックを2得る。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }
        ],
        last_updated: '2024年3月31日'
    }, {
        id: 'Sana-Starros',
        character_name: "サナ・サタロス",
        character_image: '/charui/tex.charui_sanastarros.png',
        ability: [
            {
                ability_type: "通常スキル",
                name_jp: "チープショット",
                name_eng: "Cheap Shot",
                image: '/ability/tex.ability_sanastarros_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、1ターンの間無防備状態にする。敵が既に無防備状態の場合、敵全体を1ターンの間無防備状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 4,
                name_jp: "コアシオンの教訓",
                name_eng: "Lessons in Coercion",
                image: '/ability/tex.ability_sanastarros_special01.png',
                description_jp: `反乱軍ならず者タンクのプロテクションが20%回復する。タンク以外の味方反乱軍とサナの弱体化効果が全て解除され、2ターンのクリティカル率上昇とステルス効果が発生する。その後、ステルス効果が発生している味方全体を、クリティカルダメージが100%上昇した状態でアシストに呼ぶ。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 3,
                name_jp: "スマート照準散弾ブラスター",
                name_eng: "Smart-targeting Scatterblaster",
                image: '/ability/tex.ability_sanastarros_special02.png',
                description_jp: `敵全体に特殊ダメージを与え、2ターンの抵抗力低下を発生させる。ターゲットロック状態の敵全体に再びダメージを与え、1ターンのよろめき効果を発生させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "リーダースキル",
                name_jp: "反乱軍シンバ",
                name_eng: "Rebel Sympathizer",
                image: '/abilityui/tex.abilityui_passive_rebelsympathizer.png',
                description_jp: `タンク以外の味方反乱軍またはサナが攻撃ダメージを受けるたび、反乱軍ならず者タンクの防御力、最大HP、最大プロテクションが30%上昇し、ターンメーターが15%上昇する。味方反乱軍とサナの攻撃力と有効性が30%上昇する。バトル開始時、スキルを使用するまで、味方反乱軍とサナがプロテクション上昇(100%)を得る。
                
                味方反乱軍またはサナのターンメーターが100%を下回り、ボーナスターンメーターを獲得するたび、敵にクリティカルヒットを与えるまでクリティカルダメージが25%上昇する(スタック可能)。反乱軍ならず者が敵のターンメーターを減少させた場合、その敵は自身の最大HP20%分のダメージを受ける(回避不可)。このダメージでは敵は戦闘不能にならない。味方反乱軍またはセナ各ターンで初めて複数回ダメージを与えると、遭遇終了まで最大HPが25%上昇する(スタック可能、最大200%)。味方反乱軍またはサナが敵にクリティカルヒットを与えるたび、1ターンのターゲットロックを発生させる(回避不可)。敵にターゲットロックが発生するたび、反乱軍ならず者タンクのクールダウンが1減少する。
                
                $テリトリーウォーズの場合: $反乱軍ならず者とサナはめまいを無効化する。バトル開始時、反乱軍ならず者タンクが1ターンの挑発を行い、反乱軍ならず者とサナは1ターンの抵抗力上昇を得てバトルを開始する。このスキルによるターゲットロックは耐性発揮不可。味方反乱軍とサナが各ターンで初めて複数回ダメージを与えると、敵全体の強化効果を全て解除し、1ターンの回復無効を発生させる。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }, {
                ability_type: "ユニークスキル",
                name_jp: "信頼できそうなプロ",
                name_eng: "A Professional I Can Trust...ish",
                image: '/abilityui/tex.abilityui_passive_marriageofconvenience.png',
                description_jp: `サナのカウンター率が35%、クリティカル率上昇する。各味方反乱軍のターン開始時、サナが攻撃を回避するか、サナがターン外に攻撃を行うたび、ならず者以外の味方全体に1ターンの*疑惑*の効果が発生する(コピー、耐性発揮不可)。アタッカー以外の反乱軍ならず者が特殊スキルを特殊スキルを使用するたび、サナがアシストを行う。この方法でサナがアシストするたび、サナのプロテクションが20%回復し、味方はその半分量回復する。敵にターゲットロックが発生するたび、サナのターンメーターが5%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年4月4日'
    }, {
        id: 'Sabine-Wren',
        character_name: 'サビーヌ・レン',
        character_image: '/charui/tex.charui_sabine_s3-2.png',
        ability: [
            {
                ability_type: "通常スキル",
                name_jp: "2丁ブラスター",
                name_eng: "Blasters Akimbo",
                image: '/ability/tex.ability_sabine_s3_basic.png',
                description_jp: `ターゲットに物理ダメージを2回与える。ターゲットが次の条件を満たす場合、それぞれ追加ヒットが発生する:
                
                - ターンメーターが70%未満
                
                - ターンメーターが30%未満
                
                - 弱体が発生している
                
                2回目以降の攻撃はダメージが75%減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 2,
                name_jp: "ダークセーバーストライク",
                name_eng: "Darksaber Strike",
                image: '/ability/tex.ability_sabine_s3_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、バトル終了までアーマー破壊状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 5,
                name_jp: "デモリッシュ",
                name_eng: "Demolish",
                image: '/ability/tex.ability_sabine_s3_special02.png',
                description_jp: ``,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: "ユニークスキル",
                name_jp: "テイクバック",
                name_eng: "Take It Back",
                image: '/abilityui/tex.abilityui_passive_crit_buff.png',
                description_jp: `サビーヌのクリティカル率が25%、クリティカルダメージが25%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年4月4日'
    }, {
        id: 'Zam-Wesell',
        character_name: "ザム・ウェセル",
        character_image: '/charui/tex.charui_zamwesell.png',
        ability: [
            {
                ability_type: "通常スキル",
                name_jp: "起爆ショット",
                name_eng: "Detonating Shot",
                image: '/ability/tex.ability_zamwesell_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。ターゲット上のサーマル・デトネーターが全て起爆し、即座にダメージを与える。サーマル・デトネーターが起爆した場合、生存している味方ならず者ごとにザムのターンメーターが20%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 4,
                name_jp: "爆薬設置",
                name_eng: "See What Sticks",
                image: '/ability/tex.ability_zamwesell_special01.png',
                description_jp: `敵全体に2ターン後に爆発するサーマル・デトネーターを設置する。ザムのスピードが3ターン上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 3,
                name_jp: "エレクトロゴーグル",
                name_eng: "Electro-goggles",
                image: '/ability/tex.ability_zamwesell_special02.png',
                description_jp: `敵全体の回避力を4ターン低下させ、既にサーマル・デトネーターがついている敵に2ターンのサーマル・デトネーターを発生させる。サーマル・デトネーター付きの敵ごとにザムのプロテクションが10%回復し、ザムのターンメーターが50%上昇する。この攻撃は回避できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "リーダースキル",
                name_jp: "気分高揚",
                name_eng: "Having a Blast",
                image: '/abilityui/tex.abilityui_passive_potency.png',
                description_jp: `敵がサーマル・デトネーターによってダメージを受けるたび、味方賞金稼ぎの有効性が25%上昇し、HPとプロテクションが4%回復する。味方賞金稼ぎが特殊スキルを使用すると、指定したターゲットに2ターンのサーマル・デトネーターを発生させる(回避不可)。ザム・ウェセルがリーダースロットに設定されていると、次の契約が発動する(同盟スロットでは不可):
                
                *契約*: 敵にサーマル・デトネーターを20回発生させる。(契約達成には味方賞金稼ぎのみが参加可能。)
                
                *報酬*: 全ての賞金稼ぎが、戦闘不能になった際に敵全体にサーマル・デトネーターを発生させる(回避不可)。味方賞金稼ぎ全体にボーナス効果が発生する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "ユニークスキル",
                name_jp: "変身能力",
                name_eng: "Shapeshifter",
                image: '/abilityui/tex.abilityui_passive_dodge.png',
                description_jp: `バトル開始時、ザムは次の効果を得る:
                
                味方ならず者アタッカーごとにザムの攻撃力が20%上昇する
                
                味方ならず者サポートおよびヒーラーごとに最大HPが20%上昇する
                
                味方ならず者タンクごとに最大プロテクションが20%上昇する。
                
                $グランドアリーナの場合: $ザムの攻撃力、最大HP、最大プロテクションが60%上昇する。他の味方賞金稼ぎごとにザムのスピードが5%上昇する。他の味方賞金稼ぎは、ザムが初めて戦闘不能になるまで、ザムの現在の攻撃力、最大HP、最大プロテクション、スピードの20%を得る。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: "ユニークスキル",
                name_jp: "ザムのボーナス",
                name_eng: "Zam's Payout",
                image: '/abilityui/tex.abilityui_passive_contract.png',
                description_jp: `ザムは契約報酬を受け取ると、次のボーナスも獲得する(契約は特定の賞金稼ぎリーダースキルによって付与される)。
                
                *ボーナス*: 敵がサーマル・デトネーターのダメージを受けるとザムは25%の確率で自身の弱体効果を全て解除し、1ターンのステルス効果を得る。また遭遇終了まで最大プロテクションが2%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年4月4日'
    }, {
        id: 'Zaalbar',
        character_name: "ザルバー",
        character_image: '/charui/tex.charui_zaalbar.png',
        ability: [
            {
                ability_type: "通常スキル",
                name_jp: "たくましい味方",
                name_eng: "Stalwart Ally",
                image: '/ability/tex.ability_zaalbar_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンの間時間経過ダメージ効果を2つ発生させる。ザルバーのHPが10%回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 3,
                name_jp: "パワーブラスト",
                name_eng: "Power Blast",
                image: '/ability/tex.ability_zaalbar_special01.png',
                description_jp: `敵全体に物理ダメージを与え、3ターンの間挑発を行う。クリティカルヒットを与えると、バトル終了までターゲットにアーマー破壊を発生させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "ユニークスキル",
                name_jp: "ウーキータフネス",
                name_eng: "Wookiee Toughness",
                image: '/abilityui/tex.abilityui_passive_def.png',
                description_jp: `1ターンに1回攻撃ダメージを受けるたび、ザルバーの防御力が20%上昇する(スタック可能)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "ユニークスキル",
                name_jp: "ミッションのガーディアン",
                name_eng: "Mission's Guardian",
                image: '/abilityui/tex.abilityui_passive_mission_zaalbar.png',
                description_jp: `ザルバーのクリティカル回避力が25%上昇する。ミッションがいる場合、ミッションにもボーナス効果が発生する。他の味方のHPが10%を下回ると、ザルバーは2ターンの挑発と報復効果を発生させる。各ターン開始時、時間経過ダメージ効果が発生している敵ごとに、ザルバーとミッションのプロテクションが10%回復する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年4月4日'
    }, {
        id: 'Sun-Fac',
        character_name: "サン・ファク",
        character_image: '/charui/tex.charui_geonosian_sunfac.png',
        ability: [
            {
                ability_type: "通常スキル",
                name_jp: "威圧",
                name_eng: "Browbeat",
                image: '/ability/tex.ability_sunfac_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、強化を全て解除する。これによって効果が解除されると、サン・ファクが最大HPの20%分回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 3,
                name_jp: "支配",
                name_eng: "Subjugate",
                image: '/ability/tex.ability_sunfac_special01.png',
                description_jp: `サン・ファクは2ターンの間挑発し、敵に2ターンの攻撃力低下を発生させる。その後、敵のターンメーターを40%減少させる。この攻撃は回避できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 4,
                name_jp: "卑劣攻撃",
                name_eng: "Spiteful Strike",
                image: '/ability/tex.ability_sunfac_special02.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンのよろめき効果を発生させる。この攻撃の前にターゲットが既に弱体発生中の場合、さらに2ターンの間暗闇状態とめまい状態にする。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "ユニークスキル",
                name_jp: "ハイヴの戦術",
                name_eng: "Hive Tactics",
                image: '/abilityui/tex.abilityui_passive_hivemind.png',
                description_jp: `サン・ファクのカウンター率が50%上昇する。さらにサン・ファクがターン外に攻撃すると、有効性が25%上昇し、2ターンのクリティカル率低下を付与する。
                
                *集団意識ボーナス: *サン・ファクは挑発すると、2ターンの防御力上昇、HP上昇、ヘルス・スティール上昇を得る。挑発効果が切れると、他の味方ジオノージアンがそれらの強化効果を得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年4月7日'
    }, {
        id: 'Cere-Junda',
        character_name: "シア・ジュンダ",
        character_image: '/charui/tex.charui_cerejunda.png',
        ability: [
            {
                ability_type: "通常スキル",
                name_jp: "闘いを諦めない",
                name_eng: "Keep Fighting",
                image: '/ability/tex.ability_cerejunda_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。非同盟のフォースの使い手の味方全体が2ターンの間、抵抗力上昇を得て、味方全体が2ターンの間、精度上昇を得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 5,
                name_jp: "フォースバリア",
                name_eng: "Force Barrier",
                image: '/ability/tex.ability_cerejunda_special01.png',
                description_jp: `味方全体が2ターンの間、10%のボーナスプロテクションを得る。アクティブな味方ジェダイごとに、2ターンの間、追加で5%の(=ボーナス?)プロテクションを得て、アクティブな味方ダークサイドまたはライトサイドの非同盟のフォースの使い手ごとに、2ターンの間、さらに10%のボーナスプロテクションを得る。非同盟のフォースの使い手の味方全体が2ターンの間、防御力上昇を得る。
                
                最弱な味方ダークサイドまたはライトサイドの非同盟のフォースの使い手が1ターンの間、ダメージ耐性を得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 10,
                name_jp: "決意の突撃",
                name_eng: "Determined Assault",
                image: '/ability/tex.ability_cerejunda_special02.png',
                description_jp: `ターゲットに物理ダメージを与え、この遭遇中に敵が開始したターンごとにターゲットの最大HP(最大200%)の10%分のボーナスダメージを与える。このスキルはクールダウン状態から開始する(回避不可)。非同盟のフォースの使い手の味方全体が3ターンの間、防御突破力上昇を得る。
                
                最弱の他の味方ライトサイドの非同盟のフォースの使い手のHPが50%回復する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: "リーダースキル",
                name_jp: "再燃",
                name_eng: "Rekindle",
                image: '/abilityui/tex.abilityui_passive_protection.png',
                description_jp: `味方全体の防御力、最大HP、最大プロテクションが20%上昇する(味方非同盟のフォースの使い手の場合は2倍)。各遭遇開始時、非同盟のフォースの使い手とジェダイの味方全体が、2ターンのプロテクション上昇(50%)と抵抗力上昇を得る。
                
                バトル開始時、味方全体がダークサイドまたはライトサイドの非同盟のフォースの使い手であり、味方に銀河の伝説がいない場合: 味方が最初のターンを開始するまで、敵がターンを開始するたび、非同盟のフォースの使い手の味方全体のクリティカル率、クリティカルダメージ、攻撃力がバトル終了まで5%上昇する(スタック可能)。味方は精度上昇中、クリティカルダメージが50%上昇する。味方非同盟のフォースの使い手が敵からダメージを受けるたび、非同盟のフォースの使い手のその他の味方全体のターンメーターが5%上昇する。
                
                $グランドアリーナでのバトル開始時、味方全体がダークサイドまたはライトサイドの非同盟のフォースの使い手であり、味方に銀河の伝説がいない場合: $味方全体の最大HPと最大プロテクションが30%上昇し、スキルブロックとめまいを無効化する。各遭遇開始時、非同盟のフォースの使い手とジェダイの味方全体は、代わりにプロテクション上昇(75%)を得る。味方非同盟のフォースの使い手は敵にダメージを与えるたび、2ターンの間、攻撃力が10%上昇する(スタック可能)。味方が最初のターンを開始するまで、敵がターンを開始するたび、非同盟のフォースの使い手の味方全体のクリティカル率、クリティカルダメージ、攻撃力が10%上昇する(スタック可能)。味方は弱体化効果を解除するたび、HPとプロテクションが15%回復し、ターン終了時に2ターンのフォアサイトを得る。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }, {
                ability_type: "ユニークスキル",
                name_jp: "逆境を乗り越える結果",
                name_eng: "Unity Through Adversity",
                image: '/abilityui/tex.abilityui_leader_default.png',
                description_jp: `バトル開始時、味方ダークサイドの非同盟のフォースの使い手ごとにシアの抵抗力が20%上昇し、味方ライトサイドの非同盟のフォースの使い手ごとに最大プロテクションが20%上昇する。さらに、味方ジェダイごとに防御力が20%上昇する。
                
                バトル開始時、味方全体がダークサイドまたはライトサイドの非同盟のフォースの使い手であり、味方に銀河の伝説がいない場合: シアの各ターン終了時、シアのクールダウンが1増加する。敵がターンを開始するたび、シアのクールダウンが1減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年4月7日'
    }, {
        id: 'Jedi-Consular',
        character_name: "ジェダイ・コンシュラー",
        character_image: '/charui/tex.charui_jedi_consular_03.png',
        ability: [
            {
                ability_type: "通常スキル",
                name_jp: "セーバーストライク",
                name_eng: "Saber Strike",
                image: '/ability/tex.ability_jediconsular_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、50%の確率でジェダイ・コンシュラーのクールダウンを1減少させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 3,
                name_jp: "ジェダイの癒し",
                name_eng: "Jedi Healing",
                image: '/ability/tex.ability_jediconsular_special01.png',
                description_jp: ``,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 3,
                name_jp: "ドレインアタック",
                name_eng: "Attack as Defense",
                image: '/ability/tex.ability_jediconsular_special02.png',
                description_jp: `ターゲットに物理ダメージを与え、与えたダメージの30%分HPが回復する。この攻撃は50%の確率でターゲットのアーマーを無効化する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年4月9日'
    }, {
        id: 'Jedi-Knight-Anakin',
        character_name: "ジェダイ・ナイト・アナキン",
        character_image: '/charui/tex.charui_anakinknight.png',
        ability: [
            {
                ability_type: "通常スキル",
                name_jp: "巧みな剣さばき",
                name_eng: "Deft Bladework",
                image: '/ability/tex.ability_anakinknight_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、80%の確率で2たーんの回復および強化無効を発生させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 3,
                name_jp: "オーバーパワー・アサルト",
                name_eng: "Overpowering Assault",
                image: '/ability/tex.ability_anakinknight_special01.png',
                description_jp: `敵全体に物理ダメージを与え、味方全体に2ターンの攻撃力上昇とクリティカル率上昇を付与する。敵にクリティカルヒットするたび、各味方銀河共和国は1ターンの間プロテクションが10%上昇する(スタック可能)。パドメ・アミダラが味方にいる場合、敵全体の強化効果をすべて解除する。この攻撃は回避できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "リーダースキル",
                name_jp: "攻勢",
                name_eng: "On the Offensive",
                image: '/abilityui/tex.abilityui_passive_attack_buff.png',
                description_jp: `味方ジェダイおよびクローンの攻撃力が30%、クリティカルダメージが20%上昇し、他の味方はその半分量上昇する。味方は攻撃の回避に成功すると、2ターンの間アドバンテージが発生する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "ユニークスキル",
                name_jp: "義憤",
                name_eng: "Righteous Fury",
                image: '/abilityui/tex.abilityui_passive_speed.png',
                description_jp: `味方のHPが半分以下または戦闘不能になると、アナキンはボーナスターンを得て、バトル開始時に味方がすべて銀河共和国だった場合、次の攻撃ダメージが100%上昇する。パドメ・アミダラが味方にいる場合、アナキンの各ボーナスターン後にパドメにボーナスターンが発生する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年4月9日'
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
                
                1ターンの間、*「ワールウィンドスラム」*、*「ウィンドミルガード」*、*「向こう見ずの攻撃」*が利用可能になる。ジェダイ・ナイト・カル・ケスティスがボーナスターンを得る。
                
                このボーナスターン中、ジェダイ・ナイト・カル・ケスティスは「ワールウィンドスラム」「ウィンドミルガード」「向こう見ずの攻撃」のみ使用可能。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',

                name_jp: 'ワールウィンドスラム',
                name_eng: 'Whirlwind Slam',
                image: '/ability/tex.ability_jediknightcal_special01.png',
                description_jp: `*「スタンス - ダブルブレード」*が発生していない場合、ジェダイ・ナイト・カル・ケスティスはスタンスを失い、遭遇終了まで「スタンス - ダブルブレード」を獲得し、「向こう見ず」のスタックを5得る(最大30)。
                
                敵全体に物理ダメージを与え、2ターンのスピード低下を発生させる。
                
                ターン開始時、ジェダイ・ナイト・カル・ケスティスに「スタンス - ダブルブレード」が発生していない場合:
                - ターゲットを1ターンの間スタン状態にし、遭遇終了までアーマー破壊を発生させる
                - その他の敵全体を2ターンのめまい状態にする
                
                *スタンス - ダブルブレード:* 攻撃力と抵抗力が50%上昇する。「向こう見ず」のスタックごとにスピードが2上昇する。
                
                $テリトリーバトルの場合:$ ジェダイ・ナイト・カル・ケスティスは「ウィンドブルガード」の次回使用時、HPとプロテクションが50%回復し、「ウィンドミルガード」を最後に使用してから「ワールウィンドスラム」を使用するたび、味方全体がプロテクション上昇(20%)2ターンを得る(スタック可能)
                
                ターン開始時、ジェダイ・ナイト・カル・ケスティスに「スタンス - ダブルブレード」が発生していない場合:
                
                - 敵全体を1ターンの間スタン状態にし、遭遇終了までアーマー破壊を発生させる`,
                is_omega: true,
                is_zeta: false,
                is_omicron: true
            }, {
                ability_type: '特殊スキル',

                name_jp: 'ウィンドミルガード',
                name_eng: 'Windmil Defense',
                image: '/ability/tex.ability_jediknightcal_special02.png',
                description_jp: `ターン開始時に*「スタンス - デュアルブレード」*が発生していない場合、ジェダイ・ナイト・カル・ケスティスはスタンスを失い、遭遇終了まで「スタンス - デュアルブレード」を獲得し、「向こう見ず」のスタックを5得る(最大30)。
                
                味方全体の弱体化効果を全て解除し、他の指定した味方をアシストに呼ぶ。ジェダイ・ナイト・カル・ケスティスはが4ターンの間プロテクション上昇を得る(スタック可能50%、コピー不可)。
                
                ターン開始時、ジェダイ・ナイト・カル・ケスティスに「スタンス - デュアルブレード」が発生していない場合:
                - ジェダイ・ナイト・カル・ケスティスは2ターンの間切り返しを得る(コピー、解除、阻止不可)
                - 味方ジェダイが2ターンの間プロテクション上昇(スタック可能20%)と報復効果を得る
                - 指定した味方ジェダイがボーナスターンを得る。
                
                *スタンス - デュアルブレード:* 防御力が100%上昇し、「向こう見ず」のスタックごとに敵の攻撃力が2%減少する。他の味方がターン外に攻撃すると、このユニットがアシストに呼ばれる(1ターンにつき1回限り)`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',

                name_jp: '向こう見ずの攻撃',
                name_eng: 'Impetuous Assault',
                image: '/ability/tex.ability_jediknightcal_special03.png',
                description_jp: `ターン開始時に*「スタンス - クロスガード」*が発生していない場合、ジェダイ・ナイト・カル・ケスティスはスタンスを失い、バトル終了まで「スタンス - クロスガード」を獲得し、「向こう見ず」のスタックを5失う。
                
                この遭遇で初めて「向こう見ずの攻撃」が使用されると、ターゲットを即座に戦闘不能にする。
                
                ターゲットに物理ダメージを与える。ターゲットは1ターンの間スキルブロックとよろめき状態になり、敵全体が4ターンの間フォース酔い(=フォースの酔い?)状態になる。その他味方全体が2ターンの防御突破力上昇を得る。
                
                *スタンス - クロスガード:* クリティカルダメージが50%上昇、防御力が25%減少、スピードが25減少する。さらに攻撃時に追加でこのユニットの最大25%分をダメージとして与える
                
                $テリトリーバトルの場合:$ 「向こう見ずの攻撃」が追加でジェダイ・ナイト・カル・ケスティスのレベルごとにターゲットの最大HP10%分のダメージを与える。「向こう見ずの攻撃」使用後、ジェダイ・ナイト・カル・ケスティスの攻撃はプロテクションを無効化し、味方全体がジェダイ・ナイト・カル・ケスティスの基本攻撃力の300%分をバトル終了まで得る。
                
                *このスキルはジェダイ・ナイト・カル・ケスティスに「向こう見ず」のスタックが30ないと使用できない。*`,
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }, {
                ability_type: 'リーダースキル',

                name_jp: '銀河の歪み',
                name_eng: 'Weight of the Galaxy',
                image: '/abilityui/tex.abilityui_passive_jedi.png',
                description_jp: `味方ジェダイのカウンター率、防御力、攻撃力が50%上昇する。
                
                $テリトリーバトルの場合:$ バトル開始時、味方の最大HPと最大プロテクションが100%上昇し、ジェダイ・ナイト・カル・ケスティスの防御力の300%を得る。各遭遇開始時、味方のターンメーターとフレンジーが2ターンの間25%上昇する(=ターンメーターが25%上昇し、2ターンの間フレンジーを得る?)。戦闘不能になった敵は復活できない。遭遇が終了しても、「向こう見ず」のスタック数は持続する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: true
            }, {
                ability_type: 'ユニークスキル',

                name_jp: 'ジェダイ・サバイバー',
                name_eng: 'Jedi Survivor',
                image: '/abilityui/tex.abilityui_passive_jedisurvivor.png',
                description_jp: `ジェダイ・ナイト・カル・ケスティスはスキルブロック、恐怖、スタンを無効化する。
                
                味方ジェダイがターン外に攻撃すると、ジェダイ・ナイト・カル・ケスティスのHPが10%回復する。
                
                ジェダイの味方全体が敵からのクールダウン操作を無効化する。
                
                味方ジェダイは恐怖状態になると、1ターンのダメージ耐性を得て、ターンメーターが60%上昇する。
                
                ジェダイ・ナイト・カル・ケスティスはスタンスを得るたび、遭遇終了まで*「向こう見ず」*のスタックを5得る(最大30)。
                
                *向こう見ず:* 攻撃力が1%上昇し、防御力が1%減少する。スキルに追加効果が発生する`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Jedi-Knight-Guardian',
        character_name: "ジェダイ・ナイト・ガーディアン",
        character_image: '/charui/tex.charui_jedi_guardian_01.png',
        ability: [
            {
                ability_type: "通常スキル",
                name_jp: "セーバースイープ",
                name_eng: "Saber Sweep",
                image: '/ability/tex.ability_jediguardian_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、55%の確率で2ターンの間攻撃力を低下させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "特殊スキル",
                cooldown: 4,
                name_jp: "セーバー・スロー",
                name_eng: "Saber Throw",
                image: '/ability/tex.ability_jediguardian_special01.png',
                description_jp: `敵全体に物理ダメージを与え、55%の確率で1ターンの間スキルブロック状態にする。クリティカルヒット時にはこの確率が100%に上昇する。さらに、ジェダイ・ナイト・カーディアンは2ターンの間防御力が上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: "ユニークスキル",
                name_jp: "騎士団の防衛",
                name_eng: "Defend the Order",
                image: '/abilityui/tex.abilityui_passive_def.png',
                description_jp: `HPが50%以下になると、ジェダイ・ナイト・ガーディアンの抵抗力が30%上昇し、各ターン開始時に最大HPの15%分回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年4月9日'
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
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '堅固な前進',
                name_eng: 'Stalwart Advance',
                image: '/ability/tex.ability_luke_jediknight_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、指定した味方をアシストに呼ぶ。敵ターゲットは2ターンの間暗闇状態となる。
                
                ジェダイ・ナイト・ルーク・スカイウォーカーは2ターンの間*ジェダイの意志*を得る(コピー、解除、阻止不可)。指定した味方がジェダイの場合(旧共和国ジェダイは除く)、その味方にも2ターンの*ジェダイの意志*が発生する。
                
                *ジェダイの意志*: カウンター率+100%、攻撃力+50%、スピード;25%、抵抗力+25%`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 5,
                name_jp: '拒絶',
                name_eng: 'Repulse',
                image: '/ability/tex.ability_luke_jediknight_special02.png',
                description_jp: `敵全体に1ターンのスタンと2ターンの無防備を与える。遭遇終了まで、敵全体の最大HPとプロテクションが10%減少する(スタック可能、最大50%)。
                
                拒絶(対レイドボスと銀河の伝説): ターゲットに物理ダメージを3回与え、2ターンの間無防備状態にする。
                
                このスキルは回避、耐性発揮できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'ジェダイの帰還',
                name_eng: 'Return of the Jedi',
                image: '/abilityui/tex.abilityui_passive_jedi.png',
                description_jp: `味方ライトサイド全体のクリティカル率とクリティカルダメージが15%上昇する(味方ジェダイはその2倍)。
                
                ジェダイ・ナイト・ルーク・スカイウォーカーの各ターン開始時、遭遇終了まで敵全体のスピードがルークのベーススピードまで減少し、この方法によってスピードが制限されると敵のベーススピードは増加できなくなる(ベースの値は、強化や弱体化効果が適用される前の遭遇開始時の値となる)。このスピード制限はレイドボスには影響せず、また征服バトルでルークのスタミナが40を切っている場合や敵側もスピード制限スキルや銀河の伝説を持っている場合は発動しない。
                
                遭遇開始時、味方ジェダイ全体(旧共和国ジェダイを除く)に付与スキル*「英雄の覚醒」*が発生する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: '付与スキル',
                cooldown: 10,
                name_jp: '英雄の覚醒',
                name_eng: 'Heroes Arise',
                image: '/ability/tex.ability_luke_jediknight_special03.png',
                description_jp: `味方全体の弱体化効果を全て解除し、味方ジェダイをアシストに呼ぶ(ダメージは20%減少)。味方ジェダイ全体(旧共和国ジェダイを除く)のHPとプロテクションが25%回復し、2ターンの間ジェダイの意志が発生する。ジェダイ・ナイト・ルーク・スカイウォーカーのターンメーターが100%上昇する。
                
                このスキルのクールダウンは*「英雄の覚醒」*が発生している味方の間で共有され、クールダウン操作を無効化する(クールダウン: 10)。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
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
                is_omicron: false
            },
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Jedi-Knight-Revan',
        character_name: 'ジェダイ・ナイト・レヴァン',
        character_image: '/charui/tex.charui_jedirevan.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'フェローシャスチャージ',
                name_eng: 'Ferocious Charge',
                image: '/ability/tex.ability_jedirevan_basic.png',
                description_jp: `ターゲットに物理ダメージを与える。ダークサイドの敵に対して、この攻撃のダメージは25%上昇する。ターゲットがマークされている場合、レヴァンのターンメーターが20%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'ストラテジスト・マスター',
                name_eng: 'Master Strategist',
                image: '/ability/tex.ability_jedirevan_special01.png',
                description_jp: `敵全体に特殊ダメージを与える。味方ジェダイと旧共和国ユニットごとにそれらユニットを10%回復する。レヴァンは3ターンのクリティカルダメージ上昇とフォアサイトを得る。ターンメーターを指定した他の味方ジェダイと入れ替える。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'ダイレクトフォーカス',
                name_eng: 'Direct Focus',
                image: '/ability/tex.ability_jedirevan_special02.png',
                description_jp: `ターゲットに2ターンの間マーク状態にさせ、強化無効を発生させる(コピー、解除、耐性発揮不可)。ターゲットのクールダウンが1増加し(耐性発揮不可)、ターンメーターを50%減少させ、1ターンスタン状態にする。この攻撃は回避できない。味方ジェダイを全てアシストに呼ぶ(ダメージは50%減少)。
                
                *マーク状態*: 全ての敵がこのユニットをターゲットにする`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '将軍',
                name_eng: 'General',
                image: '/abilityui/tex.abilityui_passive_jedirevan.png',
                description_jp: `バトル開始時、味方ジェダイと旧共和国ユニットごとに(召集された味方を除く)、各々のスピードが5、クリティカル率が5%、攻撃力が5%上昇する。バトル開始時、味方ジェダイに1ターンの抵抗力上昇が発生する。レヴァンがリーダースロットに設定されている間(同盟スロットでは不可)、ユニットはバトルの最初のターンが開始されるまで、リーダースキルによるボーナスターンメーター効果を受けない。
                
                味方ジェダイはターン外に攻撃すると、最大プロテクションが20%回復し、ダメージが35%上昇する。味方ジェダイがボーナスプロテクションが発生している敵に対して通常スキルを使用すると、ターゲットの最大HPを10%減少させる(スタック可能、レイドボスには機能しない)。味方ジェダイユニットの各ターン開始時に戦略的アドバンテージが味方の誰にも発生していない場合、味方ジェダイに戦略的アドバンテージが発生する。戦略的アドバンテージを持つ味方ジェダイはカウンターできない＝されない？。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: '付与スキル',
                cooldown: 1,
                name_jp: '戦略的アドバンテージ',
                name_eng: 'Strategic Advantage',
                image: '/ability/tex.ability_jedirevan_special03.png',
                description_jp: `指定した味方ジェダイの弱体を全て解除する。指定した味方が通常スキルを使用すると、戦略的アドバンテージとアシストが発生する。このユニットが通常スキルを使用すると戦略的アドバンテージの効果は失われる。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '救世主',
                name_eng: 'Savior',
                image: '/abilityui/tex.abilityui_passive_uniqueability.png',
                description_jp: `別の味方ジェダイ1体がアクティブな間、レヴァンは挑発を無効化する。
                
                味方ジェダイ1体のHpが初めて1%まで減少し、レヴァンがアクティブである場合、彼らの最大HPとプロテクションが100%回復およびターン終了まで倒されない。また2ターンのクリティカルヒット耐性を付与し、ボーナスターンを発生させユニットの弱体を全て解除する。レヴァンがリーダースロットに設定されている場合、レヴァンは「救世主」によって守られる(同盟スロットでは不可)。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '英雄',
                name_eng: 'Hero',
                image: '/abilityui/tex.abilityui_leader_default.png',
                description_jp: `ジェダイ・ナイト・レヴァンはスタンとスキルブロックを無効にする。レヴァンの抵抗力、ヘルス・スティール、最大HP、最大プロテクション、クリティカルヒット回避力、防御力、クリティカルダメージが10%上昇する。その他味方ライトサイドユニットはレヴァンがアクティブな間、これらボーナスの半分の効果を得る。レヴァンがリーダースロットに設定されている間、これらのボーナスは2倍になる(同盟スロットでは不可)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年6月16日'
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
                description_jp: `使用するには#アルティメットチャージ#が50%以上必要

                #アルティメットチャージ:# ジェダイ・マスター・ケノービはスキルを使用するとアルティメットチャージを行う。ジェダイ・マスター・ケノービがリーダーの場合、味方ライトサイドが通常スキルを使用すると、ケノービのアルティメットチャージが3%上昇(味方のターンの場合はその2場合)。
                
                バトルの開始時に銀河共和国でもある味方非同盟のフォースの使い手(ライトサイド)がいる場合、味方ジェダイ全体は敵のシスをターゲット中、プロテクションを無効化し、敵シスはバトル終了までカウンター不可となる。味方ライトサイドの弱体化効果を全て解除する。味方ライトサイド全体はこのスキルで使用したアルティメットチャージと同等の割合のマスターを得る(スタック可能)。アルティメットチャージ100%で2倍、遭遇終了まで有効。
                
                100%を下回るアルティメットチャージを使用すると、ジェダイ・マスター・ケノービに2ターンの*有利*の効果が発生する(コピー、解除、阻止不可)。味方銀河共和国全体のプロテクションが3ターンの間20%上昇する(解除、阻止不可)。
                
                アルティメットチャージを100%使用した場合、ジェダイ・マスター・ケノービに5ターンの有利の強化効果が発生する(コピー、解除、阻止不可)。味方ライトサイド全体のHPとプロテクションが60%回復し、味方銀河共和国全体のプロテクションが3ターンの間50%上昇する(解除、阻止不可)。
                
                *有利:* ターン外に攻撃すると35%の増加ダメージを与える。カウンター率が100%上昇。スピードが35%減少。アルティメットチャージは獲得不可`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '通常スキル',
                name_jp: '烈火の剣さばき',
                name_eng: 'Ardent Bladework',
                image: '/ability/tex.ability_globiwan_basic.png',
                description_jp: 'ターゲットに物理ダメージを与え、ターゲットがダークサイドの場合、1ターンのスキルブロックを発生させる(銀河の伝説を覗く)。防御突破力上昇が発生していない最弱の味方ライトサイドに2ターンの防御突破力上昇が発生する。ジェダイ・マスター・ケノービのターン中にこのスキルを使用すると、アルティメットチャージが9%上昇する。',
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 2,
                name_jp: '私の義務を果たす',
                name_eng: 'I Will Do What I Must',
                image: '/ability/tex.ability_globiwan_special01.png',
                description_jp: 'ターゲットに物理ダメージを与え、2ターンの無防備と回復効果を発生させる(解除、耐性発揮不可)。指定した味方ライトサイドをアシストに呼び、50%の増加ダメージを与える。ジェダイ・マスター・ケノービが選択された場合、ケノービはアシストを行わない代わりに、アルティメットチャージが12%上昇し(リーダーである場合はその2倍)、次のこのスキル使用時に50%の増加ダメージを与える(スタック可能、最大10スタック)。',
                is_omega: true,
                is_zeta: true,
                is_omicron: true
            }, {
                ability_type: '特殊スキル',
                cooldown: 5,
                name_jp: 'やあ',
                name_eng: 'Hello There',
                image: '/ability/tex.ability_globiwan_special02.png',
                description_jp: `味方ライトサイドのHPとプロテクションが40%回復し、3ターンのフォアサイトと抵抗力上昇を得る。味方銀河共和国とライトサイドの非同盟のフォースの使い手のプロテクションが2ターン上昇する(20%)。指定した味方銀河共和国が1ターンのダメージ耐性を得て(コピー、解除、阻止不可)、クールダウンがリセットされる(付与スキルを覗く)。
                
                味方ライトサイド全体の強化効果1つにつき、ジェダイ・マスター・ケノービのアルティメットチャージが1%上昇する(最大30%)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
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
                is_omicron: false
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
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '銀河の伝説',
                name_eng: 'Galactic Legend',
                image: '/abilityui/tex.abilityui_passive_galacticlegend.png',
                description_jp: `このユニットはHP割合ダメージと大ダメージ効果によるダメージを軽減する。破壊効果から大ダメージを受け(レイドボスは除く)、スタン効果を無効化する。
                
                このユニットの最大HPと最大プロテクションがレリックアンプのレベルごとに10%上昇し、受けるダメージが30%減少する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年3月13日'
    }, {
        id: 'Jedi-Master-Luke-Skywalker',
        character_name: 'ジェダイ・マスター・ルーク・スカイウォーカー',
        character_image: '/charui/tex.charui_luke_jml.png',
        ability: [
            {
                ability_type: 'アルティメットスキル',
                name_jp: 'ヒロイックスタンド',
                name_eng: 'Heroic Stand',
                image: '/ability/tex.ability_luke_jml_ultimate.png',
                description_jp: `#アルティメットチャージ#100%で発動
                
                #アルティメットチャージ：# 味方ジェダイがジェダイの訓戒を得るか現在のジェダイの訓戒の全スタックの持続時間がリセットされるたび、ジェダイ・マスター・ルーク・スカイウォーカーのアルティメットチャージが8%上昇する。
                
                ジェダイ・マスター・ルーク・スカイウォーカーは、ジェダイ・マスター・ルーク・スカイウォーカー(英雄)に変化し、味方ジェダイ全体のジェダイの訓戒を解除する。
                
                味方ジェダイ全体の弱体化効果を全て解除し、特殊スキルのクールダウンをリセットする。味方ジェダイ全体は2ターンのクリティカル率上昇とクリティカルダメージ上昇を得る。さらにバトル終了まで、ジェダイの意志が発生して攻撃力が35%上昇する。
                
                ルークが変化すると、*「超えるべき存在」*と*「エフラクス」*の最大クールダウンが2減少する。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '通常スキル',
                name_jp: 'インドミタブル・ブラスト',
                name_eng: 'Indomitable Blast',
                image: '/ability/tex.ability_luke_jml_basic.png',
                description_jp: `ターゲットに2ターンの強化無効を発生させ、特殊ダメージを与える。ルークの最大HPが遭遇終了まで2%上昇する(スタック可能、最大20%)。可能ならこの攻撃はクリティカルヒットになる(カウンター不可)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '超えるべき存在',
                name_eng: 'They Grow Beyond',
                image: '/ability/tex.ability_luke_jml_special01.png',
                description_jp: `ターゲットに2ターンの抵抗力低下を与え、その後2ターンの間めまい状態にする。ターゲットのクールダウンが1増加する。
                
                レイドボス：ターゲットに2ターンの抵抗力低下を与え、その後2ターンのエクスポーズを3発生させる。
                
                指定した味方ライトサイドをアシストに呼ぶ。その後、その味方とジェダイ・マスター・ルーク・スカイウォーカーに2ターンのアドバンテージとクリティカルダメージが発生する。
                
                指定した味方がジェダイの場合、その味方に3ターンの*ジェダイの訓戒*の効果が発生する(コピー不可)。既に味方に*ジェダイの訓戒*が発生している場合、現在の全スタックの持続時間が3ターンにリセットされる(最大3スタック)。
                
                このスキルは耐性発揮または回避できない。
                
                *ジェダイの訓戒：* スタックごとにマスターが20%上昇する`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: 'エフラクス',
                name_eng: 'Efflux',
                image: '/ability/tex.ability_luke_jml_special02.png',
                description_jp: `敵全体に特殊ダメージを与える。その後、敵からターンメーターを20%取り除き、2ターンのスキルブロックと破損効果を与える。ジェダイの訓戒またはジェダイの意志が発生している味方1体につき、与えるダメージが10%増加し、ターンメーターをさらに5%取り除く。
                
                味方ジェダイ全体のターンメーターが15%上昇し、1ターンのクリティカルヒット耐性を得る。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: '伝説のジェダイ',
                name_eng: 'Legend of the Jedi',
                image: '/abilityui/tex.abilityui_passive_lifeblood.png',
                description_jp: `味方ライトサイド全体の最大HPと最大プロテクションが10%上昇する(味方ジェダイは2倍)。味方ジェダイ全体の攻撃力が30%、スピードが40上昇する。
                
                バトル開始時味方が全てジェダイの場合(召集された味方を除く)、ジェダイ・マスター・ルーク・スカイウォーカーはプロテクション発生中に挑発を行う。
                
                他の味方ジェダイのHPが初めて100%を下回ると、味方ジェダイは自身の弱体化効果を全て解除し、2ターンのクリティカルヒット無効、防御力上昇、抵抗力上昇を得る。その後、ルークが2ターンの挑発を行う(コピー、解除、阻止不可)。
                
                バトル開始時、味方ジェダイは付与スキル*「継承されし教え」*を得る。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '付与スキル',
                cooldown: 2,
                name_jp: '継承されし教え',
                name_eng: 'Inherited Teachings',
                image: '/ability/tex.ability_luke_jml_event.png',
                description_jp: `ジェダイの訓戒の効果が3ターン発生し、指定した味方ライトサイドをアシストに呼ぶ(ダメージは90%減少)。その後、ジェダイ・マスター・ルーク・スカイウォーカーの最大ベースプロテクション60%分に応じた固定ダメージをターゲットに与える(回避不可)。
                
                指定した味方がジェダイの場合、その味方にジェダイの訓戒の効果が3ターン発生し、ターンメーターが15%上昇する。またルークの最大ベースプロテクション5%分のプロテクションが回復し、スキル*「継承されし教え」*のクールダウンが1減少する。
                
                他にアクティブな味方ジェダイがいない場合、このスキルは使用できない（クールダウン：2）。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ジェダイの遺志',
                name_eng: 'Jedi Legacy',
                image: '/abilityui/tex.abilityui_passive_masterslessons.png',
                description_jp: `味方ジェダイがジェダイの訓戒を得る。
                
                他の味方ライトサイドのHPが初めて100%を下回ると、味方ライトサイドのHPとプロテクションが15%回復する(味方ジェダイは2倍)。
                
                バトル開始時、ジェダイ・マスター・ルーク・スカイウォーカーはバトル終了まで*ジェダイの遺志*を得る(コピー、解除、阻止不可)。
                
                *ジェダイの遺志：* ターン中にマスターが100%上昇し挑発効果を無視する=マスターが100%上昇しターン中は挑発効果を無視する?。ジェダイの訓戒の効果は得られない。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '銀河の伝説',
                name_eng: 'Galactic Legend',
                image: '/abilityui/tex.abilityui_passive_galacticlegend.png',
                description_jp: `このユニットはHP割合ダメージと大ダメージ効果によるダメージを軽減する。破壊効果から大ダメージを受け(レイドボスは除く)、スタン効果を無効化する。
                
                このユニットの最大HPと最大プロテクションがレリックアンプのレベルごとに10%上昇し、受けるダメージが30%減少する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年6月18日'
    }, {
        id: 'Geonosian-Spy',
        character_name: 'ジオノージアン・スパイ',
        character_image: '/charui/tex.charui_geonosian_spy.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'フェイント',
                name_eng: 'Feint',
                image: '/ability/tex.ability_geonosianspy_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンの間ジオノージアン・スパイのクリティカル率が上昇する。このスキルは回避できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'サイレントストライク',
                name_eng: 'Silent Strike',
                image: '/ability/tex.ability_geonosianspy_special01.png',
                description_jp: `ターゲットに物理ダメージを与える。このスキルの使用時にジオノージアン・スパイがステルス状態だった場合、自分とターゲットのすべての強化を解除する。これによって解除された強化ごとにダメージが40%増加する。このスキルは回避できない。
                
                *集団意識ボーナス：*全ての効果が解除された後、ターゲットに2ターンの回避力低下を発生させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 4,
                name_jp: '違法情報',
                name_eng: 'Illicit Intel',
                image: '/ability/tex.ability_geonosianspy_special02.png',
                description_jp: `味方分離主義者全体に2ターンの有効性上昇を付与し、敵全体を2ターンの間エクスポーズ状態にする。このスキルは回避できない。
                
                *集団意識ボーナス：*「サイレントストライク」のクールダウンが1減少する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ハイブの戦術',
                name_eng: 'Hive Tactics',
                image: '/abilityui/tex.abilityui_passive_hivemind.png',
                description_jp: `各遭遇の開始時およびクリティカルヒット時に、ジオノージアン・スパイに3ターンのステルス効果が発生する。味方ジオノージアンが敵に弱体効果を発生させると、ジオノージアン・スパイのターンメーターが35%上昇する。
                
                *集団意識ボーナス：*エクスポーズ状態になった敵は、ステルスを失う。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年6月20日'
    }, {
        id: 'Geonosian-Brood-Alpha',
        character_name: 'ジオノージアン・ブルード・アルファ',
        character_image: '/charui/tex.charui_geonosian_broodalpha.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'シールドバッシュ',
                name_eng: 'Shield Bash',
                image: '/ability/tex.ability_geonosian_broodalpha_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、クリティカルヒット時に強化効果を全て解除する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'グレイブ・スイープ',
                name_eng: 'Glaive Sweep',
                image: '/ability/tex.ability_geonosian_broodalpha_special01.png',
                description_jp: `敵全体の強化を全て解除する。敵全体に物理ダメージを与え、2ターンの間エクスポーズ状態にする。その後、弱体発生中の敵のターンメーターを15%減少させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '徴集',
                name_eng: 'Conscription',
                image: '/ability/tex.ability_geonosian_broodalpha_special02.png',
                description_jp: `味方ジオノージアン全体の弱体を解除する。同盟スロットが使用できる場合、ジオノージアン・ブルートをバトルに召集する。ジオノージアン・ブルードが既にいる場合はブルートのクリティカルダメージと攻撃力が2ターンの間上昇する。その後、味方ジオノージアン全体のターンメーターが15%上昇し、HPとプロテクションが35%回復する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'ジオノージアン・スウォーム',
                name_eng: 'Geonosian Swarm',
                image: '/abilityui/tex.abilityui_passive_firstaid.png',
                description_jp: `味方ジオノージアンの最大HPと最大プロテクションが15,000上昇し、ヘルス・スティールが50%上昇する。味方ジオノージアンは通常スキルを使用するとプロテクションが3%回復する。強化発生中の敵1体につき、味方ジオノージアンの通常スキルで与えるダメージが10%増加する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '女王の遺志',
                name_eng: "Queen's Will",
                image: '/abilityui/tex.abilityui_passive_hivemind.png',
                description_jp: `ジオノージアン・ブルード・アルファの抵抗力が60%上昇する。ジオノージアン・ブルード・アルファがアクティブな間、味方ジオノージアン全体に集団意識の強化効果が発生する(解除、阻止不可)。味方ジオノージアンが戦闘不能になると、「徴集」のクールダウンが1減少する。遭遇開始時、1ターン挑発を行うジオノージアン・ブルートを召集する。
                
                *集団意識：* 味方ジオノージアンがターン中にスキルを使用するとアシストを行う(ダメージは50%減少)。敵がスキルを使用すると、集団意識効果が発生している味方とHPとプロテクションを均一化する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ジオノージアン・ブルート',
                name_eng: 'Geonosian Brood',
                image: '/ability/tex.ability_geonosian_broodalpha_special03.png',
                description_jp: `ダークサイド、タンク、ジオノージアン、分離主義者
                
                *[通常]　[ゴーディング・ストライク]：*ターゲットに物理ダメージを与え、1ターン挑発する。
                *[特殊]　[スウォーム戦術]：*ターゲットに物理ダメージを与え、その他味方ジオノージアンを全てアシストに呼ぶ。
                *[ユニーク]　[無謀な報復]：*アクティブな味方ジオノージアンごとにジオノージアン・ブルートの攻撃力が100%上昇し、カウンター率が25%上昇する。
                *[ユニーク]　[召集]：*このユニットのステータスは、召集したユニットのステータスに対応する。このユニットは同盟スロットが使用可能な場合のみ召集される。特定のレイドではこのユニットを召集できない。このユニットは復活できない。ある効果が戦闘不能ユニットをカウントする際、このユニットはカウントに含まれない。味方戦闘ユニットがいない場合、このユニットはバトルから逃走する。この召集ユニットがスロットにいる場合、ユニットは蘇生できない。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年6月21日'
    }, {
        id: 'Geonosian-Soldier',
        character_name: 'ジオノージアン兵士',
        character_image: '/charui/tex.charui_geonosian_soldier.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: 'アグレッシブ・アドバンス',
                name_eng: 'Aggressive Advance',
                image: '/ability/tex.ability_geonosiansoldier_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンの間抵抗力を低下させる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'スワーム',
                name_eng: 'Swarm',
                image: '/ability/tex.ability_geonosiansoldier_special01.png',
                description_jp: `ターゲットに物理ダメージを与え、ランダムな味方をアシストに呼ぶ。アシストする味方がジオノージアンの場合、両方のアタッカーのダメージが25%増加する。
                
                *集団意識ボーナス：* アシストする味方を選択できる。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: 'ハイブの戦術',
                name_eng: 'Hive Tactics',
                image: '/abilityui/tex.abilityui_passive_hivemind.png',
                description_jp: `味方ジオノージアンのクリティカル率が15%上昇する。クリティカルヒット時には、ジオノージアン兵士のターンメーターが25%上昇する。
                
                *集団意識ボーナス： * 味方ジオノージアンの防御突破力が35%上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年6月22日'
    }, {
        id: 'Sith-Assassin',
        character_name: 'シス・アサシン',
        character_image: '/charui/tex.charui_sithassassin.png',
        ability: [
            {
                ability_type: '通常スキル',
                name_jp: '弱点看破',
                name_eng: 'Expose Weakness',
                image: '/ability/tex.ability_sithassassin_basic.png',
                description_jp: `ターゲットに物理ダメージを与え、2ターンの間回避力を低下させる。さらにシス・アサシンの攻撃力が2ターンの間上昇する。ターゲットが既に弱体を受けている場合、2ターンのステルス効果が発生する。シス・アサシンが既にステルス状態の場合は、ターゲットのプロテクションを無効化=無視?する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: 'ダークシュラウド',
                name_eng: 'Dark Shroud',
                image: '/ability/tex.ability_sithassassin_special01.png',
                description_jp: `シス・アサシンから全ての弱体を解除し、2ターンの間ステルスとフォアサイトが発生する。既にステルス状態の場合は、スピードと抵抗力が2ターンの間上昇する。味方シスはシス・アサシンに発生している強化1つごとに12%ターンメーターが上昇する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '電撃',
                name_eng: 'Electrocute',
                image: '/ability/tex.ability_sithassassin_special02.png',
                description_jp: `ターゲットに物理ダメージを与え、1ターンの間スタン状態にする。シス・アサシンがステルス状態の場合、シス・アサシンから全ての強化を解除するが、解除された効果1つごと、生存している味方シス1体ごとにダメージが5%増加する。この攻撃はターゲットのプロテクションを無効化=無視?する。`,
                is_omega: true,
                is_zeta: false,
                is_omicron: false
            }
        ],
        last_updated: '2024年6月23日'
    }, {
        id: 'Sith-Eternal-Emperor',
        character_name: 'シス・エターナルの皇帝',
        character_image: '/charui/tex.charui_espalpatine_post.png',
        ability: [
            {
                ability_type: 'アルティメットスキル',
                name_jp: '余がシスのすべてだ',
                name_eng: 'I Am All The Sith',
                image: '/ability/tex.ability_espalpatine_pre_special03.png',
                description_jp: `#アルティメットチャージ#100%で発動
                
                #アルティメットチャージ：# 欺瞞状態の敵がスキルを使用するたび、シス・エターナルの皇帝のアルティメットチャージが2%上昇する。またシス・エターナルの皇帝がリーダーの場合、連帯状態の敵がスキルを使用するたびにアルティメットチャージが8%上昇する。
                
                シス・エターナルの皇帝は、バトル終了まで現在のマスターと同じ分のマスターを獲得し、シス・エターナルの皇帝（復活）に変化する。リーダーの場合、味方ダークサイド全体がバトル終了まで現在のマスターと同じ分のマスターを得る。欺瞞状態の敵全体から欺瞞を解除し、遭遇終了までそれらの敵を欺瞞状態にする（コピー、解除、耐性発揮不可）。
                
                シス・エターナルの皇帝は変化すると、*「偽装」*と*「好きにしろ、ジェダイ」*のスキルを失い、新たに2つのスキルを得る。
                
                *[Basic=通常?] 「リバイタルショック」：* ターゲットに特殊ダメージを与え、2ターンの間ショック状態にする（コピー、解除不可）。この子劇ダメージは、欺瞞状態の敵ライトサイドに対して150%に増加する。ターゲットが既に欺瞞状態の場合、欺瞞状態の敵1体につき「無限のパワーを食らえ！」のクールダウンを1減少する。この攻撃は回避できない。
                
                *[Special=特殊?] 「無限のパワーを食らえ！」：* 連帯状態の敵を即座に戦闘不能にし、敵全体に特殊ダメージを与える。その後、欺瞞状態の敵の強化効果を全て解除し、特殊ダメージを与える。このスキルによって戦闘不能になった敵は復活できない。この攻撃は回避不可。`,
                is_omega: false,
                is_zeta: false,
                is_omicron: false
            }, {
                ability_type: '通常スキル',
                name_jp: '偽装',
                name_eng: 'Deception',
                image: '/ability/tex.ability_espalpatine_pre_basic.png',
                description_jp: `ターゲットに特殊ダメージを与える。ターゲットが欺瞞状態ではない場合、2ターンの間*欺瞞状態*になる(ジェダイの場合は3ターン。コピー、解除、耐性発揮不可)。シス・エターナルの皇帝は2ターンの間スピードが上昇する。このスキルはカウンターできない。
                
                *欺瞞：* 別の敵シスがいる場合、そのターンにシス・エターナルの皇帝をターゲットにできない。スキルを使用すると、シス・エターナルの皇帝の「アルティメットチャージ」が2%上昇する`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 3,
                name_jp: '好きにしろ、ジェダイ',
                name_eng: 'So Be It, Jedi',
                image: '/ability/tex.ability_espalpatine_pre_special01.png',
                description_jp: `ターゲットに特殊ダメージを与え、全ての味方ダークサイドをアシストに呼ぶ。欺瞞状態の敵1体につきダメージが10%増加する。味方ダークサイドのプロテクションが50%回復する。このターンで倒された敵ジェダイは復活できない。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: '特殊スキル',
                cooldown: 6,
                name_jp: 'ほどかれし運命',
                name_eng: 'Unraveled Destiny',
                image: '/ability/tex.ability_espalpatine_pre_special02.png',
                description_jp: `味方ダークサイドが3ターンの報復効果を得て、味方ダークサイドのタンクが2ターンの挑発を行う。敵全体の連帯状態を解除する。その後、連帯状態の敵が戦闘不能になるか遭遇が終了するまで敵ターゲットを*連帯状態*にする。シス・エターナルの皇帝は付与スキル「絡み合う運命」とボーナスターンを得る。
                
                このボーナスターン中、シス・エターナルの皇帝は「絡み合う運命」のみ使用できる(スキルブロック、挑発無効効果、連帯状態のユニットのターゲットは不可)。
                
                *連帯：* ユニットが連帯状態になる
                
                *「絡み合う運命」：* ターゲットが連帯状態になる。このスキルは解除されると「ほどかれし運命」が使用されるまで使用できない。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'リーダースキル',
                name_jp: 'シス・エターナル',
                name_eng: 'Sith Eternal',
                image: '/abilityui/tex.abilityui_passive_sith_e9.png',
                description_jp: `味方ダークサイドのマスターが25%、有効性が30%、スピードが20上昇する(味方シスは2倍)。
                
                欺瞞または連帯状態の敵がスキルを使用するたび、遭遇終了までシス・エターナルの皇帝のマスターが10%上昇(スタック可能)し、味方シスはその半分量上昇する。連帯状態の敵がスキルを使用するたび、シス・エターナルの皇帝のアルティメットチャージが8%上昇する。
                
                各遭遇開始時、敵が解除不可の強化効果を得るたび、味方シスのターンメーターが5%上昇する。
                
                =味方シスが倒されるたび?シスの弱体化効果が全て解除され、そのHPとプロテクションが100%回復する。味方シスは復活できず、敵ジェダイをターゲット中は防御力を無視する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '不和の種',
                name_eng: 'Sow Discord',
                image: '/abilityui/tex.abilityui_passive_sowdiscord.png',
                description_jp: `シス・エターナルの皇帝は挑発効果やターンメーター減少を無効化する。欺瞞状態の敵はカウンター攻撃できず、また欺瞞状態の敵反乱軍およびジェダイはボーナスターンを得られない。
                
                シス・エターナルの皇帝のターン開始時、敵が欺瞞状態出ない場合、最弱の敵ライトサイドを2ターンの間欺瞞状態にする。欺瞞状態の敵がスキルを使用するたび、欺瞞状態ではない最弱の敵がシス・エターナルの皇帝が発生させた最大期間の欺瞞状態になり(1ターンにつき1回)、シス・エターナルの皇帝のプロテクションが2%回復する。欺瞞状態はコピー、解除、耐性発揮不可。
                
                各連帯状態の敵のターン開始時、連帯状態の敵は最大プロテクションを20%(ジェダイは4倍)失い、シス・エターナルの皇帝はその損失分の25%を得る。連帯状態のレイドボスは代わりに2ターンの間エクスポーズ状態となる(耐性発揮不可)。
                
                連帯状態の敵はクリティカルヒットを与えられず、与えるダメージが25%減少する(銀河の伝説は除く)。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }, {
                ability_type: 'ユニークスキル',
                name_jp: '銀河の伝説',
                name_eng: 'Galactic Legend',
                image: '/abilityui/tex.abilityui_passive_galacticlegend.png',
                description_jp: `このユニットはHP割合ダメージと大ダメージ効果によるダメージを軽減する。破壊効果から大ダメージを受け(レイドボスは除く)、スタン効果を無効化する。

                このユニットの最大HPと最大プロテクションがレリックアンプのレベルごとに10%上昇し、受けるダメージが30%減少する。`,
                is_omega: true,
                is_zeta: true,
                is_omicron: false
            }
        ],
        last_updated: '2024年6月23日'
    }
];

export default characterAbilities;