"use client"
import Home from "@/components/layouts/header/header";
import propertyButtons from "@/features/characterlist/constants/property";
import skillButtons from "@/features/characterlist/constants/skillEffect";
import Image from "next/image";
import React from "react";
import characters from "../data/characters";
import { useButtonVisibility, usePropertyChange, useSearchResults, useSearchTerm, useSkillChange } from "../utils/serchFilter";
import "./styles.css";
export default function Character() {
    const { searchTerm, setSearchTerm } = useSearchTerm();
    const { selectedProperty, handlePropertyChange } = usePropertyChange();
    const { selectedSkill, handleSkillChange } = useSkillChange();
    const searchResults = useSearchResults(characters, searchTerm, selectedProperty, selectedSkill);
    const { isButtonVisibleAttribute, isButtonVisibleSkill, toggleButtonVisibilityAttribute, toggleButtonVisibilitySkill } = useButtonVisibility();

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="bg-neutral-700 min-h-screen">
            <Home />
            <div>
                <div className="flex flex-wrap items-center">
                    <input
                        type="text"
                        placeholder="キャラ名等を入力してください"
                        className="mt-20 m-1 lg:mt-1 w-full md:w-1/3 xl:py-2 text-black"
                        value={searchTerm}
                        onChange={handleTextChange}
                    />
                    <button onClick={toggleButtonVisibilityAttribute} className="border m-1 px-1 sm:mt-20 lg:mt-1 w-full md:w-1/4 xl:py-2 bg-purple-400">フィルター：属性</button>
                    <button onClick={toggleButtonVisibilitySkill} className="border m-1 px-1 md:mt-20 lg:mt-1 w-full md:w-1/4 xl:py-2 bg-orange-300">フィルター：スキル効果</button>
                </div>
                {!isButtonVisibleAttribute && (
                    <div className="border mt-2 m-1 h-20 bg-purple-400 overflow-y-auto">
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
                                className="border m-1 bg-indigo-300"
                            />
                        ))}
                    </div>
                )}
                {!isButtonVisibleSkill && (
                    <div className="center border mt-2 m-1 p-1 h-20 bg-orange-300 overflow-y-auto ">
                        {skillButtons.map((property, index) => (
                            <input
                                key={index}
                                type="button"
                                onClick={() => handleSkillChange(property)}
                                value={property}
                                className="border m-1 w-4/5 md:w-1/3 bg-indigo-300"
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
                            <h1 className="text-2xl text-center text-white">{char.name}</h1>
                            <div className="flex grid">
                                <Image alt={char.name} src={char.src} className="group" />
                                <small className="group">{char.property}</small>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}