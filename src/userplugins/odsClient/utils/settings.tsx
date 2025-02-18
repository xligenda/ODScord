/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";
import { languagesCodes, translations } from "./translations";
import { PluginGuideComponent } from "../components/pluginGuide";
import { fetchSamples } from "./utils";

export enum Hotkeys {
    CtrlM,
    AltM,
    AltQ,
    CtrlQ,
    None,
}

export const settings = definePluginSettings({
    guide: {
        type: OptionType.COMPONENT,
        description: "",
        component: PluginGuideComponent
    },
    language: {
        type: OptionType.SELECT,
        description: translations.languageSelectorDescription[languagesCodes.russian],
        options: [
            { label: "Русский", value: languagesCodes.russian, default: true },
            { label: "Українська", value: languagesCodes.ukrainian },
            { label: "қазақ", value: languagesCodes.kazakh },
            { label: "English", value: languagesCodes.english },
        ] as const,
        hidden: true,
    },
    enablePluginOnlyForModServer: {
        type: OptionType.BOOLEAN,
        description: "Использовать плагин только на ОДСе",
        default: false
    },
    selectHotkeyForOpeningModMenu: {
        type: OptionType.SELECT,
        description: "Выберите горячие клавиши для открытия меню модерации",
        options: [
            { label: "Нет", value: Hotkeys.None },
            { label: "Ctrl + M", value: Hotkeys.CtrlM },
            { label: "Ctrl + Q", value: Hotkeys.CtrlQ },
            { label: "Alt + M", value: Hotkeys.AltM },
            { label: "Alt + Q", value: Hotkeys.AltQ, default: true },
        ] as const
    },
    selectedConfig: {
        type: OptionType.STRING,
        description: "Выбранный конфиг",
        default: "https://ods.akurise.xyz/config/share/4",
        placeholder: "Ссылка на конфиг",
        onChange: fetchSamples,
    },

    verbalWarnMessage: {
        type: OptionType.STRING,
        description: "Сообщение при выдаче устного предупреждения",
        default: "{{PING_USER}} Прошу вас не нарушать пункт правил {{REASON}}, ознакомьтесь с <#975425318984749066>",
        placeholder: "{{PING_USER}} Прошу вас не нарушать пункт правил {{REASON}}, ознакомьтесь с <#975425318984749066>",
    },
    discordServerLinkMessage: {
        type: OptionType.STRING,
        description: "Сообщение при отправке ссылки на дискорд сервер",
        default: "Ссылка на дискорд {{SERVER_LABLE}}({{SERVER_ID}}) - {{SERVER_LINK}}",
        placeholder: "Ссылка на дискорд {{SERVER_LABLE}}({{SERVER_ID}}) - {{SERVER_LINK}}",
    },
    giveVerbalWarnShortcut: {
        type: OptionType.STRING,
        description: translations.giveVerbalWarnShortcutDescription[languagesCodes.russian],
        default: "!",
        placeholder: "!"
    },



    // internal
    modServerId: {
        type: OptionType.STRING,
        description: "",
        default: "684079636300300336",
        hidden: true
    },
    selectedSampleId: {
        type: OptionType.NUMBER,
        description: "",
        default: 0,
        hidden: true,
    },
    selectedServerId: {
        type: OptionType.NUMBER,
        description: "",
        default: 0,
        hidden: true,
    },
    isModalAlreadyOpen: {
        type: OptionType.BOOLEAN,
        description: "",
        default: false,
        hidden: true,
    },
    userToPing: {
        type: OptionType.STRING,
        description: "",
        default: "",
        hidden: true
    }
});
