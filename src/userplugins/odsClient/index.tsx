import definePlugin from "@utils/types";
import { addPreSendListener, removePreSendListener } from "@api/MessageEvents";
import { Hotkeys, settings } from "./utils/settings";
import { addChatBarButton, removeChatBarButton } from "@api/ChatButtons";
import { OdsChatBarIcon, OdsIcon } from "./components/odsIcon";

import "./styles.css";
import { addButton, removeButton } from "@api/MessagePopover";
import { getCurrentChannel, getCurrentGuild } from "@utils/discord";
import { openODSModal } from "./components/odsModal";


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
                return openODSModal();
        }

        if (pressedRequiredKey && (selectedHotkey == Hotkeys.AltQ || selectedHotkey==Hotkeys.CtrlQ)) switch (e.key.toUpperCase()) {
            case "Q":
            case "Й":
                return openODSModal();
        }
    },

    start() {
        settings.store.selectedSampleId = 0;
        settings.store.selectedServerId = 0;
        settings.store.isModalAlreadyOpen = false;
        document.addEventListener("keydown", this.onKey);
        addChatBarButton("ods-modal", OdsChatBarIcon);
        addButton("ods-modal", (message) => {

            const channel = getCurrentChannel();
            if (!channel) return null;
            if (settings.store.enablePluginOnlyForModServer && getCurrentGuild()?.id != settings.store.modServerId) return null;

            return {
                label: "Модерация",
                icon: OdsIcon,
                message,
                channel,
                onClick: async () => {
                    openODSModal();
                }
            };
        });


        this.preSend = addPreSendListener(async (data, message) => {
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
        removePreSendListener(this.preSend);
        removeChatBarButton("ods-samples");
        removeButton("ods-sample-selector");
    },

});
