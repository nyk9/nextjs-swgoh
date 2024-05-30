"use client"

import { Characters } from "@/types/characters/characters";
import { useEffect, useState } from "react";


export const useSearchTerm = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    return { searchTerm, setSearchTerm };
};

export const useSearchResults = (char: Characters[], searchTerm: string, selectedProperty: string[], selectedSkill: string[]) => {
    const [searchResults, setSearchResults] = useState<Characters[]>(char);

    useEffect(() => {
        const results = char.filter((item) =>
            (new RegExp(searchTerm, 'i').test(item.name) || new RegExp(searchTerm, 'i').test(item.property)
                || new RegExp(searchTerm, 'i').test(item.abbreviation)) &&
            (selectedProperty.length === 0 || selectedProperty.every(prop => item.property.includes(prop))) &&
            (selectedSkill.length === 0 || selectedSkill.every(skill => item.skill.includes(skill))
            ));
        setSearchResults(results);
    }, [char, searchTerm, selectedProperty, selectedSkill]);

    return searchResults;
};

export const usePropertyChange = () => {
    const [selectedProperty, setSelectedProperty] = useState<string[]>([]);

    const handlePropertyChange = (property: string) => {
        const isSelected = selectedProperty.includes(property);
        const updateProperty = isSelected
            ? selectedProperty.filter(prop => prop !== property)
            : [...selectedProperty, property];
        setSelectedProperty(updateProperty);
        return updateProperty;
    };

    return { selectedProperty, handlePropertyChange };
};

export const useSkillChange = () => {
    const [selectedSkill, setSelectedSkill] = useState<string[]>([]);

    const handleSkillChange = (skill: string) => {
        const isSelected = selectedSkill.includes(skill);
        const updateSkill = isSelected
            ? selectedSkill.filter(s => s !== skill)
            : [...selectedSkill, skill];
        setSelectedSkill(updateSkill);
        return updateSkill;
    };

    return { selectedSkill, handleSkillChange };
};

export const useButtonVisibility = () => {
    const [isButtonVisibleAttribute, setIsButtonVisibleAttribute] = useState(true);
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
            if (isOpen){
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }

    };

    return {
        isButtonVisibleAttribute, toggleButtonVisibilityAttribute,
        isButtonVisibleSkill, toggleButtonVisibilitySkill,
        isOpen, toggleButtonOpen
    };
};