"use client";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import propertyButtons from "@/features/shiplist/constants/property";
import skillButtons from "@/features/shiplist/constants/skillEffect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import ships from "../../data/ships";
import {
  useButtonVisibility,
  usePropertyChange,
  useSearchResults,
  useSearchTerm,
  useSkillChange,
} from "../../hooks/serchFilter";
import "../characters/styles.css";

export default function Ship() {
  const { searchTerm, setSearchTerm } = useSearchTerm();
  const { selectedProperty, handlePropertyChange } = usePropertyChange();
  const { selectedSkill, handleSkillChange } = useSkillChange();
  const searchResults = useSearchResults(
    ships,
    searchTerm,
    selectedProperty,
    selectedSkill,
  );
  const {
    isButtonVisibleAttribute,
    toggleButtonVisibilityAttribute,
    isButtonVisibleSkill,
    toggleButtonVisibilitySkill,
    isOpen,
    toggleButtonOpen,
  } = useButtonVisibility();

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-neutral-500 min-h-screen ">
      <div className="">
        <div className="flex flex-wrap items-center">
          <input
            type="text"
            placeholder="シップ名等を入力してください"
            className="m-1 lg:mt-1 w-full md:w-1/3 xl:py-2 text-black"
            value={searchTerm}
            onChange={handleTextChange}
          />
          <button
            onClick={toggleButtonOpen}
            className="border m-1 px-1 sm:mt-20 lg:mt-1 w-full md:w-1/4 xl:py-2 bg-green-400"
          >
            フィルター
          </button>
        </div>
        {!isOpen && (
          <div className="absolute top-0 left-0 h-full w-full bg-gray-900 bg-opacity-50">
            <button
              onClick={toggleButtonOpen}
              className="absolute top-0 right-3 border m-1 bg-red-400 hover:bg-white closeline"
            >
              <IoCloseOutline />
            </button>

            <div className="flex justify-center items-center ">
              <div className="">
                <div className="flexd border h-12 bg-gray-600 ">
                  <button
                    onClick={toggleButtonVisibilityAttribute}
                    className="border m-1 px-1 w-[1/2-1] xl:py-2 bg-purple-400"
                  >
                    属性
                  </button>
                  <button
                    onClick={toggleButtonVisibilitySkill}
                    className="border m-1 px-1 w-[1/2-1] xl:py-2 bg-orange-300"
                  >
                    スキル効果
                  </button>
                </div>
                <div className="text-xs h-80 w-full overflow-y-auto overflow-x-auto">
                  {isButtonVisibleAttribute && (
                    <div className="">
                      <div className="flex justify-center">
                        <div className="grid grid-cols-2 border md:w-[40rem] px-auto mx-auto bg-purple-400 overflow-y-auto">
                          <input
                            type="button"
                            onClick={() => handlePropertyChange("ライトサイド")}
                            value={"ライトサイド"}
                            className="m-1 border-2 text-blue-700 bg-indigo-300"
                          />
                          <input
                            type="button"
                            onClick={() => handlePropertyChange("ダークサイド")}
                            value={"ダークサイド"}
                            className="m-1 border-2 text-red-700 bg-indigo-300"
                          />
                          <input
                            type="button"
                            onClick={() => handlePropertyChange("ニュートラル")}
                            value={"ニュートラル"}
                            className="m-1 border-2 bg-indigo-300"
                          />
                          <input
                            type="button"
                            onClick={() => handlePropertyChange("キャピタルシップ")}
                            value={"キャピタルシップ"}
                            className="m-1 border bg-indigo-300"
                          />
                          <input
                            type="button"
                            onClick={() => handlePropertyChange("アタッカー")}
                            value={"アタッカー"}
                            className="m-1 border text-green-300 bg-indigo-300"
                          />
                          <input
                            type="button"
                            onClick={() => handlePropertyChange("サポート")}
                            value={"サポート"}
                            className="m-1 border text-green-300 bg-indigo-300"
                          />
                          <input
                            type="button"
                            onClick={() => handlePropertyChange("タンク")}
                            value={"タンク"}
                            className="m-1 border text-green-300 bg-indigo-300"
                          />
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
                      </div>
                    </div>
                  )}
                  {isButtonVisibleSkill && (
                    <div className="justify-center ">
                      <div className="grid border rounded-lg md:w-[40rem] px-auto grid-cols-2 bg-orange-300 overflow-y-auto">
                        {skillButtons.map((property, index) => (
                          <input
                            key={index}
                            type="button"
                            onClick={() => handleSkillChange(property)}
                            value={property}
                            className="grid border m-1 bg-indigo-300"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <p>
          押したボタン： 属性:{selectedProperty} ,スキル効果:{selectedSkill}{" "}
        </p>
      </div>
      <div className="mb-32 grid text-center lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left p-4">
        {searchResults.map((ship) => {
          return (
            <div
              className="border rounded-lg border-gray-300 m-1 bg-gradient-to-r from-neutral-700 to-neutral-800"
              key={`${ship.abbreviation}-${ship.skill}`}
            >
              <h1 className="text-2xl text-center text-white">{ship.name}</h1>
              <div className="flex">
                <Image
                  alt={ship.name}
                  src={ship.src}
                  className="group"
                  width={75}
                  height={75}
                  unoptimized={true}
                />
                <small className="group">{ship.property}</small>
              </div>
              <Separator />
              <div className="flex items-end py-1">
                <Link href={`${ship.url}`}>
                  <Badge className="">ゲーム内説明（手動入力）</Badge>
                </Link>
                {ship.ship_base_id && (
                  <>
                    <Link href={`/ship/${ship.ship_base_id}`}>
                      <Badge>英文（SWGOH.GG）</Badge>
                    </Link>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
