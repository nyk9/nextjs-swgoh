"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import characters, { Characters } from "./characters";
import "./styles.css";

export default function Character(
    // prop:{
    //     prop: React.ReactNode
    // }
) {
    // char:各キャラクターの情報をまとめた配列
    const char: Characters[] = characters;
    // 絞り込み検索に必要なもの
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Characters[]>(char);
    const [selectedProperty, setSelectedProperty] = useState<string[]>([]);
    const propertyButtons: string[] = [
        'イウォーク', 'インペリアル・レムナント', 'ウーキー', 'クローン・トルーパー', 'ジェダイ', 'ジオノージアン', 'シス', 'シス帝国', 'タスケン', 'ドロイド', 'ナイトシスター',
        'ならず者', 'ハット・カルテル', 'バッド・バッチ', 'ファースト・オーダー', 'フェニックス', 'マンダロリアン', 'レジスタンス', 'ローグ・ワン', '艦隊司令官', '旧共和国',
        '銀河共和国', '賞金稼ぎ', '尋問官', '第501軍団', '帝国軍', '帝国軍トルーパー', '反乱軍', '反乱軍ファイター', '非同盟のフォースの使い手', '分離主義者'
    ];
    const skillButtons: string[] = [
        'スキルブロック', '精度上昇',  '精度低下', 'アドバンテージ', '全体攻撃', 'アーマー破壊', 'アシスト', '暗闇', 'ボーナス攻撃', '強化無効', '炎上', 'カウンター', 'カウンター率低下', 'カウンター不可', '報復', 'クリティカル率減少',
        'クリティカル率上昇', 'クリティカルダメージ低下', 'クリティカルダメージ上昇', 'クリティカルヒット無効', '攻撃無効', 'めまい', 'デスマーク', '防御力低下', '防御突破力上昇',
        '防御力上昇', '強化解除', '弱体解除', '味方全体-弱体解除', '敵全体-強化解除', '時間経過ダメージ', '疑心', '回避力低下', '回避力上昇', '回避不可', 'エクスポーズ', '恐怖', 'フォアサイト', 'フレンジー',
        'ターンメーター上昇', 'ターンメーター入れ替え', '回復', '回復無効', 'ヘルススティール上昇', '最大HP上昇', '即戦闘不能耐性', '触発', 'リーダー：クリティカル率上昇', 'リーダー：防御力上昇',
        'リーダー：最大HP上昇', 'リーダー：スピード上昇', 'リーダー：抵抗力上昇', 'リーダー：アシスト', 'リーダー：フォアサイト', 'リーダー：回復', 'リーダー：HP上昇', 'リーダー：プロテクション上昇',
        '攻撃力低下', '攻撃力上昇', '感染', '有効性上昇', '有効性減少', 'プロテクション上昇', '粛清', 'ターンメーター減少', 'クールダウン減少', '復活', '復活不可', '切り返し','クールダウンリセット',
        'ショック', 'スピード低下', 'スピード上昇', 'よろめき', 'ステルス', 'スタン', 'ターゲットロック', '挑発', '抵抗力低下', '抵抗力上昇', 'サーマル・デトネーター', '準備万端', 'ベスカー・インゴット', 'ベスカー・アーマー',
        '拷問', '無防備' , '軍略の天才', 'シエン・フォーム', '即戦闘不能', '標的', '射撃訓練', 'フォースの酔い', 'フォースの繋がり', 'ジェダイ・ナイト', 'サイフォン', '不屈', 'パダワンの訓戒', 'セカンドウィンド', '知略', 'メカニックの知識', '武装解除',
        '憎悪', '疑惑', 'スタンス - ダブルブレード', '向こう見ず', 'スタンス - デュアルブレード', 'スタンス - クロスガード', 'ジェダイの意志', '有利', 'ステルス解除', 'ジェダイの訓戒', '招集', '集団意識', '欺瞞', '連帯', '用心棒', '好みの悪党',
        '賞金稼ぎの決意', '救済', '帝国の罠', '潜伏', '信頼できるエージェント', 'フォースエネルギー', '解放', '破砕', '起爆トラップ', 'ロイヤルハンド'
    ];


    // 絞り込み検索の関数
    const handleSearch = useCallback(() => {
        // console.log('検索したもの', searchTerm); // デバック用
        // console.log('選んだボタン', selectedProperty); // デバック用
        const results = char.filter((item) =>
            (new RegExp(searchTerm, 'i').test(item.name) || new RegExp(searchTerm, 'i').test(item.property) 
            || new RegExp(searchTerm, 'i').test(item.abbreviation)) &&
            (selectedProperty.every(prop => item.property.includes(prop)) &&
            selectedProperty.every(prop => item.skill.includes(prop))) 
        );
        // console.log('results', results); // デバック用
        setSearchResults(results);
        // console.log(selectedProperty);
    },[char, searchTerm, selectedProperty]);
    const handlePropertyChange = (property: string) => {
        const isSelected = selectedProperty.includes(property);
        const updateProperty = isSelected
            ? selectedProperty.filter(prop => prop !== property)
            : [...selectedProperty, property];
        // console.log('updateProperty:',updateProperty); // デバック用
        setSelectedProperty(updateProperty);
        // handleSearch();
    };
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
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
        console.log(isButtonVisibleAttribute);
        setIsButtonVisibleAttribute(!isButtonVisibleAttribute);

    };
    const [isButtonVisibleSkill, setIsButtonVisibleSkill] = useState(true);
    const toggleButtonVisibilitySkill = () => {
        console.log(isButtonVisibleSkill);
        setIsButtonVisibleSkill(!isButtonVisibleSkill);

    };
    return (
        <div
            className="bg-neutral-400"
        >
            <Link
                href={"/"}
                className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30"
            >Home</Link>
            <div>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="キャラ名"
                        className=" mt-20 text-black "
                        value={searchTerm}
                        onChange={handleTextChange}
                        onInput={() => handleSearch()}
                    />
                    <button onClick={toggleButtonVisibilityAttribute} className="mt-20 mx-1 border bg-purple-400">フィルター：属性</button>
                    <button onClick={toggleButtonVisibilitySkill} className="mt-20 mx-1 border bg-orange-300">フィルター：スキル効果</button>
                </div>
                {isButtonVisibleAttribute && (
                    <div className="border bg-purple-400 h-20 overflow-y-auto">
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
                )} <br/>
                {isButtonVisibleSkill && (
                    <div className="border h-20 overflow-y-auto bg-orange-300">
                        {skillButtons.map((property, index) => (
                            <input
                                key={index}
                                type="button"
                                onClick={() => handlePropertyChange(property)}
                                value={property}
                                className="m-1 border bg-indigo-300"
                            />
                        ))}
                    </div>
                )}
            </div>
            <div>
                <p>押したボタン： {selectedProperty} </p>
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