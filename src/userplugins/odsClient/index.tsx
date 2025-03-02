import definePlugin from "@utils/types";
import { addMessagePreSendListener, removeMessagePreSendListener } from "@api/MessageEvents";
import { Hotkeys, settings } from "./utils/settings";
import { addChatBarButton, removeChatBarButton } from "@api/ChatButtons";
import { OdsChatBarIcon, OdsIcon } from "./components/odsIcon";
import { addProfileBadge, BadgePosition, ProfileBadge } from "@api/Badges";

import "./styles.css";
import { addMessagePopoverButton, removeMessagePopoverButton } from "@api/MessagePopover";
import { getCurrentChannel, getCurrentGuild } from "@utils/discord";
import { openODSModel } from "./components/odsModal";
import { fetchSamples } from "./utils/utils";
import { UserStore } from "@webpack/common";
import { Logger } from "@utils/Logger";

let userBadges: { [key: string]: number[]; } = {};
let badges: { [key: number]: { image: string; name: string; }; } = {};

async function fetchBadges() {
    try {
        const badgesUrl = "https://badges.akurise.xyz/badges";
        const response = await fetch(badgesUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        badges = data.reduce((acc: any, badge: { id: number; image: string; name: string; }) => {
            acc[badge.id] = { image: `https://badges.akurise.xyz${badge.image}`, name: badge.name };
            return acc;
        }, {});
        new Logger("ODS").info("Успешно загружены бейджи", badges);
    } catch (error) {
        new Logger("ODS").error("Ошибка при запросе бейджей:", error);
    }
}

async function fetchUserBadges() {
    try {
        const usersUrl = "https://badges.akurise.xyz/users";
        const response = await fetch(usersUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        userBadges = data.reduce((acc: any, user: { discord_id: string; badges: number[]; }) => {
            acc[user.discord_id] = user.badges;
            return acc;
        }, {});
        new Logger("ODS").info("Успешно загружены бейджи пользователей:", userBadges);
    } catch (error) {
        new Logger("ODS").error("Ошибка при запросе бейджей пользователей:", error);
    }
}

export default definePlugin({
    name: "ods",
    description: "Помощь в модерировании",
    authors: [
        {
            id: 888016163844534372n,
            name: "xligenda",
        },
        {
            id: 842997230532689961n,
            name: "akurise",
        },
    ],
    enabledByDefault: true,
    dependencies: ["MessageAccessoriesAPI", "MessagePopoverAPI", "MessageEventsAPI", "ChatInputButtonAPI"],
    settings,
    tags: ["ods", "одс", "щвы", "jlc"],

    flux: {
        "CONNECTION_OPEN": (event: any) => {
            fetchUsedAccounts();
        }
    },

    //keybinds
    onKey(e: KeyboardEvent) {
        if (settings.store.enablePluginOnlyForModServer && getCurrentGuild()?.id != settings.store.modServerId) return;
        if (settings.store.isModalAlreadyOpen) return;

        const selectedHotkey = settings.store.selectHotkeyForOpeningModMenu;

        let pressedRequiredKey = false;
        if (e.ctrlKey && (selectedHotkey == Hotkeys.CtrlM || selectedHotkey == Hotkeys.CtrlQ)) pressedRequiredKey = true;
        if (e.altKey && (selectedHotkey == Hotkeys.AltM || selectedHotkey == Hotkeys.AltQ)) pressedRequiredKey = true;

        if (pressedRequiredKey && (selectedHotkey == Hotkeys.AltM || selectedHotkey == Hotkeys.CtrlM)) switch (e.key.toUpperCase()) {
            case "M":
            case "Ь":
                return openODSModel();
        }

        if (pressedRequiredKey && (selectedHotkey == Hotkeys.AltQ || selectedHotkey == Hotkeys.CtrlQ)) switch (e.key.toUpperCase()) {
            case "Q":
            case "Й":
                return openODSModel();
        }
    },

    async start() {
        fetchUsedAccounts();

        await fetchBadges();
        await fetchUserBadges();
        await fetchSamples();

        settings.store.selectedSampleId = 0;
        settings.store.selectedServerId = 0;
        settings.store.isModalAlreadyOpen = false;
        document.addEventListener("keydown", this.onKey);
        addChatBarButton("ods-modal", OdsChatBarIcon);
        addMessagePopoverButton("ods-modal", (message) => {

            const channel = getCurrentChannel();
            if (!channel) return null;
            if (settings.store.enablePluginOnlyForModServer && getCurrentGuild()?.id != settings.store.modServerId) return null;

            return {
                label: "Модерация",
                icon: OdsIcon,
                message,
                channel,
                onClick: async () => {
                    openODSModel();
                }
            };
        });

        Object.keys(badges).forEach(badgeId => {
            const badge = badges[badgeId];
            const profileBadge: ProfileBadge = {
                description: badge.name,
                image: badge.image,
                key: `badge_${badgeId}`,
                shouldShow: (userInfo) => {
                    const userBadgeIds = userBadges[userInfo.userId];
                    if (!userBadgeIds) return false;
                    const shouldShow = userBadgeIds.includes(parseInt(badgeId));
                    return shouldShow;
                },
                onClick: (event, props) => {
                    window.open("https://ods.akurise.xyz/", "_blank");
                },
                position: BadgePosition.END
            };

            addProfileBadge(profileBadge);
        });

        this.preSend = addMessagePreSendListener(async (data, message) => {
            if (!message.content) return;
            switch (true) {
                case message.content.startsWith(settings.store.giveVerbalWarnShortcut) && settings.store.giveVerbalWarnShortcut != "":
                    if (settings.store.enablePluginOnlyForModServer && getCurrentGuild()?.id != settings.store.modServerId) return;
                    let userId: string = message.content.split(" ")[0].replace(settings.store.giveVerbalWarnShortcut, "");
                    let reason: string = message.content.split(" ")[1];
                    if (userId && reason) {
                        message.content = settings.store.verbalWarnMessage.replace("{{PING_USER}}", `<@${userId}>`).replace("{{REASON}}", reason);
                    };
                    return;
            }

        });
    },

    stop() {
        document.removeEventListener("keydown", this.onKey);
        removeMessagePreSendListener(this.preSend);
        removeChatBarButton("ods-samples");
        removeMessagePopoverButton("ods-sample-selector");
    },

});

const fetchUsedAccounts = () => {
    let currentId = UserStore.getCurrentUser()?.id;
    if (!currentId) return;
    if (!settings.store.usedAccounts.includes(currentId)) {
        settings.store.usedAccounts.push(currentId);
    }
};
