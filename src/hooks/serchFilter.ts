"use client";

import { Characters, Property, Skills } from "@/types/characters/characters";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useSearchTerm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const searchTerm = searchParams.get("q") ?? "";

  const setSearchTerm = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return { searchTerm, setSearchTerm };
};

export const useSearchResults = (
  char: Characters[],
  searchTerm: string,
  selectedProperty: string[],
  selectedSkill: string[],
) => {
  const [searchResults, setSearchResults] = useState<Characters[]>(char);

  useEffect(() => {
    const results = char.filter(
      (item) =>
        (new RegExp(searchTerm, "i").test(item.name) ||
          new RegExp(searchTerm, "i").test(item.property as string) ||
          new RegExp(searchTerm, "i").test(item.abbreviation)) &&
        (selectedProperty.length === 0 ||
          selectedProperty.every((prop) =>
            item.property.includes(prop as Property),
          )) &&
        (selectedSkill.length === 0 ||
          selectedSkill.every((skill) => item.skill.includes(skill as Skills))),
    );
    setSearchResults(results);
  }, [char, searchTerm, selectedProperty, selectedSkill]);

  return searchResults;
};

export const usePropertyChange = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedProperty = searchParams.get("prop")
    ? searchParams.get("prop")!.split(",")
    : [];

  const handlePropertyChange = (property: string) => {
    const isSelected = selectedProperty.includes(property);
    const updateProperty = isSelected
      ? selectedProperty.filter((prop) => prop !== property)
      : [...selectedProperty, property];

    const params = new URLSearchParams(searchParams.toString());
    if (updateProperty.length > 0) {
      params.set("prop", updateProperty.join(","));
    } else {
      params.delete("prop");
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });

    return updateProperty;
  };

  return { selectedProperty, handlePropertyChange };
};

export const useSkillChange = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedSkill = searchParams.get("skill")
    ? searchParams.get("skill")!.split(",")
    : [];

  const handleSkillChange = (skill: string) => {
    const isSelected = selectedSkill.includes(skill);
    const updateSkill = isSelected
      ? selectedSkill.filter((s) => s !== skill)
      : [...selectedSkill, skill];

    const params = new URLSearchParams(searchParams.toString());
    if (updateSkill.length > 0) {
      params.set("skill", updateSkill.join(","));
    } else {
      params.delete("skill");
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });

    return updateSkill;
  };

  return { selectedSkill, handleSkillChange };
};

export const useButtonVisibility = () => {
  const [isButtonVisibleAttribute, setIsButtonVisibleAttribute] =
    useState(true);
  const [isButtonVisibleSkill, setIsButtonVisibleSkill] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const toggleButtonVisibilityAttribute = () => {
    setIsButtonVisibleAttribute(true);
    setIsButtonVisibleSkill(false);
  };

  const toggleButtonVisibilitySkill = () => {
    setIsButtonVisibleSkill(true);
    setIsButtonVisibleAttribute(false);
  };
  const toggleButtonOpen = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return {
    isButtonVisibleAttribute,
    toggleButtonVisibilityAttribute,
    isButtonVisibleSkill,
    toggleButtonVisibilitySkill,
    isOpen,
    toggleButtonOpen,
  };
};
