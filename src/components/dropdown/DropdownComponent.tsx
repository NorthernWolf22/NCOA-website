"use client";
import { useState } from "react";
import { DropdownComponentOption } from "./DropdownComponent.types";
import IconComponent from "../IconComponent";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


type DropdownComponentProps = {
    options: DropdownComponentOption[];
    value: string;
    onChange: (value: string) => void;
};

function DropdownComponent({ options, value, onChange }: DropdownComponentProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option: DropdownComponentOption) => {
        onChange(option.value);
        setIsOpen(false);
    };

    return (
        <div id="dropdown" className="dropdown">
            <button
                type="button"
                className="dropdown__button"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="dropdown__label">{value ? value : "All"}</span>
                <IconComponent
                    iconType="decorative"
                    iconName={faChevronDown}
                    iconSize="small"
                    variant="secondary-unfilled"
                />
            </button>
            {
                isOpen &&
                <div className={isOpen ? "dropdown__panel dropdown__panel--isOpen" : "dropdown__panel"}>
                    {
                        options?.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                className="dropdown__option"
                                onClick={() => handleOptionClick(option)}
                            >
                                {option.label}
                            </button>
                        ))
                    }
                </div>
            }
        </div>
    );
}

export default DropdownComponent;