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
    AltQ,
    None
}

export const settings = definePluginSettings({
    guide: {
        type: OptionType.COMPONENT,
        description: "",
        component: PluginGuideComponent,
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
            { label: "Alt + M", value: Hotkeys.AltM },
            { label: "Alt + Q", value: Hotkeys.AltQ, default: true },
        ] as const
    },

    verbalWarnMessage: {
        type: OptionType.STRING,
        description: "Сообщение при выдаче устного предупреждения\n\n{{PING_USER}} - упоминание пользователя\n{{REASON}} - пункт правил",
        default: "{{PING_USER}} Выдаю вам устное предупреждение по пункту {{REASON}}, ознакомьтесь с <#975425318984749066>",
        placeholder: "{{PING_USER}} Выдаю вам устное предупреждение по пункту {{REASON}}, ознакомьтесь с <#975425318984749066>",
    },
    discordServerLinkMessage: {
        type: OptionType.STRING,
        description: "Сообщение при отправке ссылки на дискорд сервер\n\n{{SERVER_LABLE}} - название сервера\n{{SERVER_ID}} - номер сервера\n{{SERVER_LINK}} - сслылка на сервер",
        default: "Ссылка на дискорд {{SERVER_LABLE}}({{SERVER_ID}}) - {{SERVER_LINK}}",
        placeholder: "Ссылка на дискорд {{SERVER_LABLE}}({{SERVER_ID}}) - {{SERVER_LINK}}",
    },

    giveVerbalWarnShortcut: {
        type: OptionType.STRING,
        description: translations.giveVerbalWarnShortcutDescription[languagesCodes.russian],
        default: "!",
        placeholder: "!"
    },

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
