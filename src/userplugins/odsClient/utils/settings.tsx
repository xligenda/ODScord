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

export enum Hotkeys {
    CtrlM,
    AltM,
    CtrlQ,
    AltQ
}

export const settings = definePluginSettings({
    pluginGuide: {
        type: OptionType.COMPONENT,
        description: "гайд на плагин",
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
    },
    modServerId: {
        type: OptionType.STRING,
        description: translations.modServerIdSelectorDescription[languagesCodes.russian],
        default: "684079636300300336",
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
            { label: "Ctrl + M", value: Hotkeys.CtrlM, default: true },
            { label: "Alt + M", value: Hotkeys.AltM },
            { label: "Ctrl + Q", value: Hotkeys.CtrlQ },
            { label: "Alt + Q", value: Hotkeys.AltQ },
        ] as const
    },

    verbalWarnMessage: {
        type: OptionType.STRING,
        description: translations.verbalWarnMessageDescription[languagesCodes.russian],
        default: "{{PING_USER}} Выдаю вам устное предупреждение по пункту {{REASON}}, ознакомьтесь с <#975425318984749066>",
        placeholder: "{{PING_USER}} Выдаю вам устное предупреждение по пункту {{REASON}}, ознакомьтесь с <#975425318984749066>",
    },
    discordServerLinkMessage: {
        type: OptionType.STRING,
        description: "Сообщение при отправке ссылки на дискорд сервер",
        default: "Ссылка на дискорд {{SERVER_LABLE}}({{SERVER_ID}}) - {{SERVER_LINK}}",
        placeholder: "Ссылка на дискорд {{SERVER_LABLE}}({{SERVER_ID}}) - {{SERVER_LINK}}",
    },
    enableHotKeys: {
        type: OptionType.BOOLEAN,
        description: "Включить горячие клавиши",
        default: true,

    },

    giveVerbalWarnShortcut: {
        type: OptionType.STRING,
        description: translations.giveVerbalWarnShortcutDescription[languagesCodes.russian],
        default: "!u",
        placeholder: "!u"
    },
    sendTemplateShortcut: {
        type: OptionType.STRING,
        description: translations.sendTemplateShortcutDescription[languagesCodes.russian],
        default: "!s",
        placeholder: "!s"
    },
    showPluginButtons: {
        type: OptionType.BOOLEAN,
        description: translations.showChatBarButtonsDescriptions[languagesCodes.russian],
        default: true,
        restartNeeded: true
    },






    selectedSampleId: {
        type: OptionType.NUMBER,
        description: "undefined",
        default: 0,
        hidden: true,
    },
    selectedServerId: {
        type: OptionType.NUMBER,
        description: "undefined",
        default: 0,
        hidden: true,
    }

});
