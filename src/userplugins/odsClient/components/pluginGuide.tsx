import React from "react";
import { Margins } from "@utils/margins";


interface IPluginOptionComponentProps {
    onChange: (value: string) => void;
    selectedOption: string;
}

const PluginGuideDropdown: React.FC<IPluginOptionComponentProps> = (props) => {
    const options = [
        { value: "plugin", label: "Плагин" },
        { value: "hotkeys", label: "Горячие клавиши" },
        { value: "templates", label: "Шаблоны" },
        { value: "warnings", label: "Устные предупреждения" },
    ];

    return (
        <div>
            <label htmlFor="pluginGuideSelect">Выберите категорию:</label>
            <select
                id="pluginGuideSelect"
                value={props.selectedOption}
                onChange={(e) => props.onChange(e.target.value)}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export const PluginGuideComponent = () => {
    return (
        <section className={Margins.bottom16}>
            unluck
            Lorem, ipsum dolor.
            Lorem ipsum dolor sit amet.
        </section>
    );
};
