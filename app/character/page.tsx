"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import characters, { Characters } from "./characters";
import "./styles.css";

export default function Character(
) {
    // char:各キャラクターの情報をまとめた配列
    const char: Characters[] = characters;
    // 絞り込み検索に必要なもの
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Characters[]>(char);
    const [selectedProperty, setSelectedProperty] = useState<string[]>([]);
    const [selectedSkill, setSelectedSkill] = useState<string[]>([]);
    const propertyButtons: string[] = [
        'イウォーク', 'インペリアル・レムナント', 'ウーキー', 'クローン・トルーパー', 'ジェダイ', 'ジオノージアン', 'シス', 'シス帝国', 'タスケン', 'ドロイド', 'ナイトシスター',
        'ならず者', 'ハット・カルテル', 'バッド・バッチ', 'ファースト・オーダー', 'フェニックス', 'マンダロリアン', 'レジスタンス', 'ローグ・ワン', '艦隊司令官', '旧共和国',
        '銀河共和国', '賞金稼ぎ', '尋問官', '第501軍団', '帝国軍', '帝国軍トルーパー', '反乱軍', '反乱軍ファイター', '非同盟のフォースの使い手', '分離主義者'
    ];
    const skillButtons: string[] = [
        'アーマー破壊', 'アシスト', 'アドバンテージ', '溢れる狂気', '怒り', '炎上', 'エクスポーズ', 'オーバーヒート', '恩恵', 'ガード', '回避不可', '回避力上昇', '回避力低下', '回復',
        '回復無効', '解放', 'カウンター', 'カウンター率低下', 'カウンター不可', '帰ってきたぞ', '過小評価', '感染', '疑心', '欺瞞', '救済', '強化解除', '敵全体-強化解除', '強化無効',
        '恐怖', '強要', '共和国の灰', '切り返し', 'クールダウン減少', 'クールダウン増加', 'クールダウン状態から開始', 'クールダウンリセット', '苦悩', '起爆トラップ', '狂気の刃',
        'クリティカルダメージ上昇', 'クリティカルダメージ低下', 'クリティカルヒット無効', 'クリティカル率減少', 'クリティカル率上昇', '疑惑', '暗闇', '軍略の天才', '決意', '攻撃無効',
        '攻撃力低下', '攻撃力上昇', '強靭な防御', '行動喚起', '拷問', '好みの悪党', 'サーマル・デトネーター', '最大HP上昇', 'サイフォン', 'ジェダイ・ナイト', 'ジェダイの意志', 'ジェダイの訓戒',
        'シエン・フォーム', 'ジオノージアン・ブルード', '時間経過ダメージ', '邪悪な戦闘瞑想', '弱体解除', '味方全体-弱体解除', '射撃訓練', '集団意識', '粛清', '準備万端', '招集',
        '賞金稼ぎの決意', '触発', 'ショック', '信頼できるエージェント', 'スキルブロック', 'スタン', 'スタンス - クロスガード', 'スタンス - ダブルブレード', 'スタンス - デュアルブレード',
        'ステルス', 'ステルス解除', 'スピード上昇', 'スピード低下', '精度低下', '精度上昇', '憎悪', '即戦闘不能', '即戦闘不能耐性', 'セカンドウィンド', '全体攻撃', '潜伏',
        'ダーク・インフュージョン', 'ターゲットロック', 'ターンメーター入れ替え', 'ターンメーター減少', 'ターンメーター上昇', 'チーワプ社製医療パック', '知略', 'チャージ', '挑発',
        '通訳', '抵抗力低下', '抵抗力上昇', '帝国の罠', 'デスマーク', '伝説の戦闘瞑想', 'デッドリーブラフ', '洞察', '破砕', 'パダワンの訓戒', 'ヒート', '標的', 'フォアサイト', 'フォースエネルギー',
        'フォースの繋がり', 'フォースの酔い', '不屈', '武装解除', '復活', '復活不可', 'ブラステック社製ウェポンモッド', 'フレンジー', 'プロテクション上昇', 'ベスカー・アーマー', 'ベスカー・インゴット',
        'ヘルススティール上昇', 'ボーナス攻撃', 'ホイッスリング・バード', '防御突破力上昇', '防御力低下', '防御力上昇', '報復',
        'マスターの訓練', 'マジックステルス', 'マンダロア', '向こう見ず', '無慈悲', '無慈悲な標的', 'メカニックの知識', 'めまい', '無防備',
        '優位', '勇気', '有効性上昇', '有効性減少', '有用なコマ', '有利', '用心棒', '予備プラン', 'よろめき',
        'リーダー：HP上昇', 'リーダー：アシスト', 'リーダー：回復', 'リーダー：クリティカル率上昇', 'リーダー：最大HP上昇', 'リーダー：スピード上昇', 'リーダー：抵抗力上昇',
        'リーダー：フォアサイト', 'リーダー：プロテクション上昇', 'リーダー：防御力上昇', '連帯', 'ロイヤルハンド',
    ];
    // 絞り込み検索の関数
    const handleSearch = useCallback(() => {
        // console.log('検索したもの', searchTerm); // デバック用
        // console.log('選んだボタン', selectedProperty); // デバック用
        const results = char.filter((item) =>
            (new RegExp(searchTerm, 'i').test(item.name) || new RegExp(searchTerm, 'i').test(item.property)
                || new RegExp(searchTerm, 'i').test(item.abbreviation)) &&
            (selectedProperty.length === 0 || selectedProperty.some(prop => item.property.includes(prop))) &&
            (selectedSkill.length === 0 || selectedSkill.some(skill => item.skill.includes(skill)))
        );
        setSearchResults(results);
    }, [char, searchTerm, selectedProperty, selectedSkill]);
    const handlePropertyChange = (property: string) => {
        const isSelected = selectedProperty.includes(property);
        const updateProperty = isSelected
            ? selectedProperty.filter(prop => prop !== property)
            : [...selectedProperty, property];
        // console.log('updateProperty:',updateProperty); // デバック用
        setSelectedProperty(updateProperty);
        handleSearch();
    };
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        handleSearch();
    };
    const handleSkillChange = (skill: string) => {
        const isSelected = selectedSkill.includes(skill);
        const updateSkill = isSelected
            ? selectedSkill.filter(s => s !== skill)
            : [...selectedSkill, skill];
        setSelectedSkill(updateSkill);
        handleSearch();
    };
    useEffect(() => {
        const handleSearchCallback = () => {
            handleSearch();
        };
        handleSearchCallback();
    }, [selectedProperty, handleSearch]);
    // フィルターボタンでタグボタン等を表示
    const [isButtonVisibleAttribute, setIsButtonVisibleAttribute] = useState(true);
    const toggleButtonVisibilityAttribute = () => {
        // console.log(isButtonVisibleAttribute);
        setIsButtonVisibleAttribute(!isButtonVisibleAttribute);

    };
    const [isButtonVisibleSkill, setIsButtonVisibleSkill] = useState(true);
    const toggleButtonVisibilitySkill = () => {
        // console.log(isButtonVisibleSkill);
        setIsButtonVisibleSkill(!isButtonVisibleSkill);

    };
    return (
        <div
            className="bg-neutral-700 min-h-screen"
        >
            <Link
                href={"/"}
                className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30"
            >  Home  </Link>
            <div>
                <div className="flex flex-wrap items-center">
                    <input
                        type="text"
                        placeholder="キャラ名等を入力してください"
                        className="mt-20 text-black w-64 "
                        value={searchTerm}
                        onChange={handleTextChange}
                        onInput={() => handleSearch()}
                    />
                    <button onClick={toggleButtonVisibilityAttribute} className="border mt-1 px-5 sm:mt-20 w-64 bg-purple-400">フィルター：属性</button>
                    <button onClick={toggleButtonVisibilitySkill} className="border mt-1 px-5 sm:mt-20 w-64 bg-orange-300">フィルター：スキル効果</button>
                </div>
                {isButtonVisibleAttribute && (
                    <div className="border mt-2 h-20 bg-purple-400 overflow-y-auto">
                        <input
                            type="button"
                            onClick={() => handlePropertyChange('ライトサイド')}
                            value={'ライトサイド'}
                            className="m-1 border border-2 text-blue-700 bg-indigo-300"
                        />
                        <input
                            type="button"
                            onClick={() => handlePropertyChange('ダークサイド')}
                            value={'ダークサイド'}
                            className="m-1 border-2 text-red-700 bg-indigo-300"
                        />
                        <input
                            type="button"
                            onClick={() => handlePropertyChange('ニュートラル')}
                            value={'ニュートラル'}
                            className="m-1 border-2 bg-indigo-300"
                        /> <br />
                        <input
                            type="button"
                            onClick={() => handlePropertyChange('リーダー')}
                            value={'リーダー'}
                            className="m-1 border bg-indigo-300"
                        /> <br />
                        <input
                            type="button"
                            onClick={() => handlePropertyChange('アタッカー')}
                            value={'アタッカー'}
                            className="m-1 border text-green-300 bg-indigo-300"
                        />
                        <input
                            type="button"
                            onClick={() => handlePropertyChange('サポート')}
                            value={'サポート'}
                            className="m-1 border text-green-300 bg-indigo-300"
                        />
                        <input
                            type="button"
                            onClick={() => handlePropertyChange('タンク')}
                            value={'タンク'}
                            className="m-1 border text-green-300 bg-indigo-300"
                        />
                        <input
                            type="button"
                            onClick={() => handlePropertyChange('ヒーラー')}
                            value={'ヒーラー'}
                            className="m-1 border text-green-300 bg-indigo-300"
                        /> <br />
                        {propertyButtons.map((property, index) => (
                            <input
                                key={index}
                                type="button"
                                onClick={() => handlePropertyChange(property)}
                                value={property}
                                className="m-1 border bg-indigo-300"
                            />
                        ))}
                    </div>
                )} <br />
                {isButtonVisibleSkill && (
                    <div className="border h-20 mt-2 bg-orange-300 overflow-y-auto ">
                        {skillButtons.map((property, index) => (
                            <input
                                key={index}
                                type="button"
                                onClick={() => handleSkillChange(property)}
                                value={property}
                                className="m-1 border bg-indigo-300"
                            />
                        ))}
                    </div>
                )}
            </div>
            <div>
                <p>押したボタン： 属性:{selectedProperty} ,スキル効果:{selectedSkill} </p>
            </div>
            <div className="mb-32 grid text-center lg:w-full lg:mb-0 lg:grid-cols-5 lg:text-left p-4">
                {searchResults.map((char) => {
                    return (
                        <div
                            className="border border-gray-300 rounded m-1 bg-black"
                            key={`${char.abbreviation}-${char.skill}`}
                        >
                            <h1 className="text-yellow-900">{char.name}</h1>
                            <Image alt={char.name} src={char.src}></Image>
                            <small>{char.property}</small>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}