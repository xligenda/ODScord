import { classNameFactory } from "@api/Styles";
import { findByPropsLazy } from "@webpack";
export const cl = classNameFactory("vc-trans-");
import { getCurrentChannel, sendMessage } from "@utils/discord";
import { settings } from "./settings";
import { getTheme, insertTextIntoChatInputBox, Theme } from "@utils/discord";
import config from "../config.json";

export interface Sample {
    id: number,
    label: string,
    keys: string[],
    value: string;
}

export interface Discord {
    id: number,
    label: string,
    link: string;
}

let samples: Sample[] = [];

export const fetchSamples = async (): Promise<void> => {
    try {
        const response = await fetch(settings.store.sampleFileUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        samples = await response.json();
        console.log("[ODS]🔰 | Успешно загружены samples:", samples);
    } catch (error) {
        console.log("[ODS]🔰 | Ошибка при запросе samples:", error);
    }
};

export const getSamples = (): Sample[] => {
    return samples;
};

export const getSampleIdByLable = (lable: string): number => {
    for (const sample of samples) {
        if (sample.label == lable) return sample.id;
    }
    return 0;
};

export const sendSelectedSample = () => {
    const selectedSampleId = settings.store.selectedSampleId;
    insertTextIntoChatInputBox(getSamples()[selectedSampleId || 0]?.value || "undefined");
};

export const getDiscords = (): Discord[] => {
    return config.discords;
};

export const sendSelectedDiscord = (): void => {
    const selectedServerId = settings.store.selectedServerId;
    const discordData = getDiscords()[selectedServerId || 0];
    const providedMessage = (settings.store.discordServerLinkMessage).replace("{{SERVER_LABLE}}", discordData.label).replace("{{SERVER_ID}}", discordData.id.toString()).replace("{{SERVER_LINK}}", discordData.link);
    insertTextIntoChatInputBox(providedMessage);
};

export const getDiscordByLable = (lable: string): number => {
    for (const discord of config.discords) {
        if (discord.label == lable) return discord.id;
    }
    return 0;
};

export const insertUserPing = (id: string): void => {
    insertTextIntoChatInputBox(`<@${id}>`);
};
