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
    <div className="min-h-screen px-4 py-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <h1 className="font-display text-3xl tracking-wider text-[hsl(199,92%,64%)] mb-1 title-glow-blue">
          Characters
        </h1>
        <p className="text-[hsl(215,16%,47%)] text-sm">
          全キャラクター一覧 —{" "}
          <span className="text-[hsl(213,32%,70%)]">{searchResults.length}</span>
          {" "}/{" "}
          <span className="text-[hsl(215,16%,47%)]">{characters.length}</span> 件
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="max-w-7xl mx-auto mb-4">
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="text"
            placeholder="キャラ名・属性で検索..."
            className="flex-1 min-w-[200px] px-4 py-3 rounded-xl border border-[hsl(228,20%,22%)] bg-[hsl(228,35%,10%)] text-[hsl(213,32%,90%)] placeholder:text-[hsl(215,16%,35%)] focus:outline-none focus:border-[hsl(199,92%,64%)]/60 focus:ring-1 focus:ring-[hsl(199,92%,64%)]/30 focus:bg-[hsl(228,35%,12%)] transition-all"
            value={searchTerm}
            onChange={handleTextChange}
          />
          <button
            onClick={toggleButtonOpen}
            className="px-5 py-3 rounded-xl border border-[hsl(228,20%,22%)] bg-[hsl(228,28%,16%)] text-[hsl(213,32%,82%)] hover:bg-[hsl(228,28%,22%)] hover:border-[hsl(199,92%,64%)]/50 hover:text-[hsl(199,92%,64%)] transition-all text-sm font-medium"
          >
            フィルター
          </button>
        </div>

        {/* Active Filters Display */}
        {(selectedProperty.length > 0 || selectedSkill.length > 0) && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {selectedProperty.map((prop) => (
              <button
                key={prop}
                onClick={() => handlePropertyChange(prop)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[hsl(199,92%,64%)]/15 text-[hsl(199,92%,64%)] border border-[hsl(199,92%,64%)]/30 hover:bg-[hsl(199,92%,64%)]/25 transition-colors"
              >
                {prop}
                <span className="text-[10px]">✕</span>
              </button>
            ))}
            {selectedSkill.map((skill) => (
              <button
                key={skill}
                onClick={() => handleSkillChange(skill)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[hsl(51,100%,50%)]/15 text-[hsl(51,100%,50%)] border border-[hsl(51,100%,50%)]/30 hover:bg-[hsl(51,100%,50%)]/25 transition-colors"
              >
                {skill}
                <span className="text-[10px]">✕</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Filter Panel (Modal Overlay) */}
      {!isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20">
          <div className="bg-[hsl(228,32%,13%)] border border-[hsl(228,20%,22%)] rounded-xl w-[90vw] max-w-lg max-h-[70vh] overflow-hidden shadow-2xl">
            {/* Filter Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[hsl(228,20%,22%)]">
              <div className="flex gap-1">
                <button
                  onClick={toggleButtonVisibilityAttribute}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isButtonVisibleAttribute
                      ? "bg-[hsl(199,92%,64%)] text-[hsl(228,40%,8%)]"
                      : "bg-[hsl(228,28%,18%)] text-[hsl(213,32%,82%)] hover:bg-[hsl(228,28%,24%)]"
                  }`}
                >
                  属性
                </button>
                <button
                  onClick={toggleButtonVisibilitySkill}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isButtonVisibleSkill
                      ? "bg-[hsl(51,100%,50%)] text-[hsl(228,40%,8%)]"
                      : "bg-[hsl(228,28%,18%)] text-[hsl(213,32%,82%)] hover:bg-[hsl(228,28%,24%)]"
                  }`}
                >
                  スキル効果
                </button>
              </div>
              <button
                onClick={toggleButtonOpen}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-[hsl(228,28%,18%)] text-[hsl(215,16%,47%)] hover:text-white transition-colors"
              >
                <IoCloseOutline className="w-6 h-6" />
              </button>
            </div>

            {/* Filter Body */}
            <div className="overflow-y-auto max-h-[calc(70vh-60px)] p-4">
              {isButtonVisibleAttribute && (
                <div className="grid grid-cols-2 gap-2">
                  {["ライトサイド", "ダークサイド", "ニュートラル", "リーダー", "アタッカー", "サポート", "タンク", "ヒーラー"].map(
                    (prop) => (
                      <button
                        key={prop}
                        onClick={() => handlePropertyChange(prop)}
                        className={`px-3 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                          selectedProperty.includes(prop)
                            ? "bg-[hsl(199,92%,64%)]/20 border-[hsl(199,92%,64%)] text-[hsl(199,92%,64%)]"
                            : "bg-[hsl(228,28%,18%)] border-[hsl(228,20%,22%)] text-[hsl(213,32%,82%)] hover:border-[hsl(228,20%,30%)]"
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
                      className={`px-3 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                        selectedProperty.includes(property)
                          ? "bg-[hsl(199,92%,64%)]/20 border-[hsl(199,92%,64%)] text-[hsl(199,92%,64%)]"
                          : "bg-[hsl(228,28%,18%)] border-[hsl(228,20%,22%)] text-[hsl(213,32%,82%)] hover:border-[hsl(228,20%,30%)]"
                      }`}
                    >
                      {property}
                    </button>
                  ))}
                </div>
              )}
              {isButtonVisibleSkill && (
                <div className="grid grid-cols-2 gap-2">
                  {skillButtons.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => handleSkillChange(skill)}
                      className={`px-3 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                        selectedSkill.includes(skill)
                          ? "bg-[hsl(51,100%,50%)]/20 border-[hsl(51,100%,50%)] text-[hsl(51,100%,50%)]"
                          : "bg-[hsl(228,28%,18%)] border-[hsl(228,20%,22%)] text-[hsl(213,32%,82%)] hover:border-[hsl(228,20%,30%)]"
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

      {/* Character Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {searchResults.map((char) => (
          <div
            className="group rounded-xl border border-[hsl(228,20%,20%)] bg-gradient-to-b from-[hsl(228,32%,14%)] to-[hsl(228,30%,12%)] hover:border-[hsl(199,92%,64%)]/40 hover:from-[hsl(228,35%,15%)] hover:to-[hsl(228,30%,13%)] transition-all duration-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_4px_20px_hsla(228,40%,5%,0.8)]"
            key={`${char.abbreviation}-${char.skill}`}
          >
            <div className="p-3">
              <h3 className="text-sm font-bold text-white text-center mb-3 leading-tight px-1">
                {char.name}
              </h3>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-[hsl(228,28%,18%)] to-[hsl(228,20%,14%)] p-0.5 border border-[hsl(228,20%,25%)]">
                  <Image
                    alt={char.name}
                    src={char.src}
                    className="rounded-md block"
                    width={60}
                    height={60}
                  />
                </div>
                <p className="text-xs text-[hsl(215,16%,55%)] leading-relaxed break-words flex-1">
                  {Array.isArray(char.property) ? char.property.join("、") : char.property}
                </p>
              </div>
            </div>
            <div className="border-t border-[hsl(228,20%,22%)] px-3 py-2 flex items-center gap-1.5">
              <Link href={`${char.url}`}>
                <Badge className="bg-[hsl(228,28%,18%)] text-[hsl(213,32%,82%)] hover:bg-[hsl(228,28%,24%)] border-[hsl(228,20%,22%)] text-[10px] cursor-pointer">
                  ゲーム内説明
                </Badge>
              </Link>
              {char.character_base_id && (
                <Link href={`/character/${char.character_base_id}`}>
                  <Badge className="bg-[hsl(199,92%,64%)]/10 text-[hsl(199,92%,64%)] hover:bg-[hsl(199,92%,64%)]/20 border-[hsl(199,92%,64%)]/30 text-[10px] cursor-pointer">
                    SWGOH.GG
                  </Badge>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
