"use client";
import { Badge } from "@/components/ui/badge";
import propertyButtons from "@/features/characterlist/constants/property";
import skillButtons from "@/features/characterlist/constants/skillEffect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import characters from "../../data/characters";
import {
  useButtonVisibility,
  usePropertyChange,
  useSearchResults,
  useSearchTerm,
  useSkillChange,
} from "../../hooks/serchFilter";

export default function Character() {
  const { searchTerm, setSearchTerm } = useSearchTerm();
  const { selectedProperty, handlePropertyChange } = usePropertyChange();
  const { selectedSkill, handleSkillChange } = useSkillChange();
  const searchResults = useSearchResults(
    characters,
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
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-white mb-1">キャラクター</h1>
          <p className="text-sm text-[hsl(220,10%,52%)]">
            {searchResults.length} / {characters.length} 件表示
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-5">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="名前で検索..."
              className="flex-1 min-w-[180px] px-3 py-2 rounded border border-[hsl(220,12%,18%)] bg-[hsl(220,16%,10%)] text-sm text-[hsl(220,14%,82%)] placeholder:text-[hsl(220,8%,36%)] focus:outline-none focus:border-[hsl(220,12%,28%)] transition-colors"
              value={searchTerm}
              onChange={handleTextChange}
            />
            <button
              onClick={toggleButtonOpen}
              className="px-4 py-2 rounded border border-[hsl(220,12%,18%)] bg-[hsl(220,16%,10%)] text-sm text-[hsl(220,10%,52%)] hover:text-[hsl(220,14%,82%)] hover:border-[hsl(220,12%,24%)] transition-colors"
            >
              フィルター
            </button>
          </div>

          {/* Active filters */}
          {(selectedProperty.length > 0 || selectedSkill.length > 0) && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {selectedProperty.map((prop) => (
                <button
                  key={prop}
                  onClick={() => handlePropertyChange(prop)}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-[hsl(220,14%,14%)] text-[hsl(220,14%,82%)] border border-[hsl(220,12%,18%)] hover:border-[hsl(220,12%,24%)] transition-colors"
                >
                  {prop}
                  <span className="text-[hsl(220,8%,36%)]">×</span>
                </button>
              ))}
              {selectedSkill.map((skill) => (
                <button
                  key={skill}
                  onClick={() => handleSkillChange(skill)}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-[hsl(220,14%,14%)] text-[hsl(220,14%,82%)] border border-[hsl(220,12%,18%)] hover:border-[hsl(220,12%,24%)] transition-colors"
                >
                  {skill}
                  <span className="text-[hsl(220,8%,36%)]">×</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Filter Panel */}
        {!isOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20">
            <div className="bg-[hsl(220,16%,10%)] border border-[hsl(220,12%,18%)] rounded w-[90vw] max-w-md max-h-[70vh] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[hsl(220,12%,18%)]">
                <div className="flex gap-1">
                  <button
                    onClick={toggleButtonVisibilityAttribute}
                    className={`px-3 py-1.5 rounded text-sm transition-colors ${
                      isButtonVisibleAttribute
                        ? "bg-[hsl(220,14%,82%)] text-[hsl(220,16%,6%)]"
                        : "bg-[hsl(220,14%,14%)] text-[hsl(220,14%,82%)] hover:bg-[hsl(220,14%,18%)]"
                    }`}
                  >
                    属性
                  </button>
                  <button
                    onClick={toggleButtonVisibilitySkill}
                    className={`px-3 py-1.5 rounded text-sm transition-colors ${
                      isButtonVisibleSkill
                        ? "bg-[hsl(220,14%,82%)] text-[hsl(220,16%,6%)]"
                        : "bg-[hsl(220,14%,14%)] text-[hsl(220,14%,82%)] hover:bg-[hsl(220,14%,18%)]"
                    }`}
                  >
                    スキル効果
                  </button>
                </div>
                <button
                  onClick={toggleButtonOpen}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded hover:bg-[hsl(220,14%,14%)] text-[hsl(220,8%,36%)] hover:text-white transition-colors"
                >
                  <IoCloseOutline className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-y-auto max-h-[calc(70vh-56px)] p-3">
                {isButtonVisibleAttribute && (
                  <div className="grid grid-cols-2 gap-1.5">
                    {["ライトサイド", "ダークサイド", "ニュートラル", "リーダー", "アタッカー", "サポート", "タンク", "ヒーラー"].map(
                      (prop) => (
                        <button
                          key={prop}
                          onClick={() => handlePropertyChange(prop)}
                          className={`px-3 py-2 rounded text-sm border transition-colors ${
                            selectedProperty.includes(prop)
                              ? "bg-[hsl(220,14%,82%)] text-[hsl(220,16%,6%)] border-transparent"
                              : "bg-transparent border-[hsl(220,12%,18%)] text-[hsl(220,14%,82%)] hover:border-[hsl(220,12%,24%)]"
                          }`}
                        >
                          {prop}
                        </button>
                      ),
                    )}
                    {propertyButtons.map((property) => (
                      <button
                        key={property}
                        onClick={() => handlePropertyChange(property)}
                        className={`px-3 py-2 rounded text-sm border transition-colors ${
                          selectedProperty.includes(property)
                            ? "bg-[hsl(220,14%,82%)] text-[hsl(220,16%,6%)] border-transparent"
                            : "bg-transparent border-[hsl(220,12%,18%)] text-[hsl(220,14%,82%)] hover:border-[hsl(220,12%,24%)]"
                        }`}
                      >
                        {property}
                      </button>
                    ))}
                  </div>
                )}
                {isButtonVisibleSkill && (
                  <div className="grid grid-cols-2 gap-1.5">
                    {skillButtons.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => handleSkillChange(skill)}
                        className={`px-3 py-2 rounded text-sm border transition-colors ${
                          selectedSkill.includes(skill)
                            ? "bg-[hsl(220,14%,82%)] text-[hsl(220,16%,6%)] border-transparent"
                            : "bg-transparent border-[hsl(220,12%,18%)] text-[hsl(220,14%,82%)] hover:border-[hsl(220,12%,24%)]"
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {searchResults.map((char) => (
            <div
              className="rounded border border-[hsl(220,12%,14%)] bg-[hsl(220,16%,10%)] hover:border-[hsl(220,12%,22%)] transition-colors overflow-hidden"
              key={`${char.abbreviation}-${char.skill}`}
            >
              <div className="p-3">
                <h3 className="text-sm font-medium text-white text-center mb-2 leading-tight">
                  {char.name}
                </h3>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded overflow-hidden bg-[hsl(220,14%,14%)]">
                    <Image
                      alt={char.name}
                      src={char.src}
                      className="block"
                      width={56}
                      height={56}
                    />
                  </div>
                  <p className="text-xs text-[hsl(220,10%,52%)] leading-relaxed break-words flex-1">
                    {Array.isArray(char.property) ? char.property.join("、") : char.property}
                  </p>
                </div>
              </div>
              <div className="border-t border-[hsl(220,12%,14%)] px-3 py-1.5 flex items-center gap-1.5">
                <Link href={`${char.url}`}>
                  <Badge className="bg-[hsl(220,14%,14%)] text-[hsl(220,10%,52%)] hover:text-[hsl(220,14%,82%)] border-[hsl(220,12%,18%)] text-[10px] cursor-pointer">
                    ゲーム内説明
                  </Badge>
                </Link>
                {char.character_base_id && (
                  <Link href={`/character/${char.character_base_id}`}>
                    <Badge className="bg-[hsl(220,14%,14%)] text-[hsl(40,56%,52%)] hover:text-[hsl(40,56%,62%)] border-[hsl(220,12%,18%)] text-[10px] cursor-pointer">
                      SWGOH.GG
                    </Badge>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
