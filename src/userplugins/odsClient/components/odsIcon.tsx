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

import { ChatBarButton } from "@api/ChatButtons";
import { openModal } from "@utils/modal";
import { settings } from "../utils/settings";
import { cl } from "../utils/utils";
import { OdsModal } from "./odsModal";
import { translations } from "../utils/translations";

export function OdsIcon({ height = 24, width = 24, className }: { height?: number; width?: number; className?: string; }) {
    return (
        <svg width={width} height={height} viewBox="0 0 85.101 57.8" className={className} xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M 84.1 6.9 L 84 7.2 Q 83.7 7.9 83.4 7.9 A 0.853 0.853 0 0 1 82.878 7.721 A 1.07 1.07 0 0 1 82.85 7.7 A 3.643 3.643 0 0 0 82.67 7.564 Q 82.525 7.463 82.4 7.4 Q 78.7 4.7 75.35 3.5 A 20.41 20.41 0 0 0 70.63 2.442 A 25.572 25.572 0 0 0 67.9 2.3 A 20.293 20.293 0 0 0 63.371 2.779 A 14.143 14.143 0 0 0 57.6 5.5 A 10.264 10.264 0 0 0 53.648 12.945 A 13.667 13.667 0 0 0 53.6 14.1 A 10.449 10.449 0 0 0 53.943 16.848 A 7.79 7.79 0 0 0 55.85 20.25 A 16.077 16.077 0 0 0 58.808 22.657 A 21.651 21.651 0 0 0 61.7 24.2 A 83.17 83.17 0 0 0 67.847 26.635 A 93.879 93.879 0 0 0 69.35 27.15 A 61.578 61.578 0 0 1 75.601 29.608 A 55.098 55.098 0 0 1 76.95 30.25 A 19.375 19.375 0 0 1 80.725 32.663 A 16.519 16.519 0 0 1 82.8 34.7 Q 85.1 37.4 85.1 41.7 A 18.193 18.193 0 0 1 84.375 46.961 A 14.211 14.211 0 0 1 80.35 53.4 A 15.885 15.885 0 0 1 73.28 57.129 Q 70.603 57.8 67.4 57.8 A 29.868 29.868 0 0 1 63.723 57.586 Q 61.198 57.272 59.15 56.5 A 22.9 22.9 0 0 1 56.371 55.248 Q 54.738 54.369 53.5 53.3 A 18.745 18.745 0 0 1 51.916 51.771 Q 51.17 50.955 50.636 50.139 A 10.006 10.006 0 0 1 50.25 49.5 Q 49.319 47.816 49.214 46.681 A 3.035 3.035 0 0 1 49.2 46.4 A 4.179 4.179 0 0 1 49.25 45.74 A 3.394 3.394 0 0 1 49.35 45.3 A 0.712 0.712 0 0 1 49.505 45.017 Q 49.633 44.878 49.84 44.828 A 1.109 1.109 0 0 1 50.1 44.8 A 0.845 0.845 0 0 1 50.801 45.167 Q 50.913 45.315 51.001 45.524 A 2.708 2.708 0 0 1 51.1 45.8 A 12.054 12.054 0 0 0 55.003 51.423 A 16.352 16.352 0 0 0 56.95 52.8 A 18.667 18.667 0 0 0 64.899 55.389 A 23.286 23.286 0 0 0 67.2 55.5 Q 74.5 55.5 78.5 51.85 A 12.002 12.002 0 0 0 82.242 44.873 A 17.514 17.514 0 0 0 82.5 41.8 A 10.235 10.235 0 0 0 82.149 39.053 A 7.747 7.747 0 0 0 80.2 35.65 A 17.703 17.703 0 0 0 77.028 33.106 A 23.242 23.242 0 0 0 74.35 31.65 Q 70.8 30 66.75 28.65 A 63.931 63.931 0 0 1 60.007 25.981 A 58.215 58.215 0 0 1 59.1 25.55 A 19.676 19.676 0 0 1 55.656 23.437 A 15.885 15.885 0 0 1 53.25 21.15 A 9.254 9.254 0 0 1 51.248 16.918 A 13.169 13.169 0 0 1 51 14.3 A 13.837 13.837 0 0 1 51.63 10.056 A 11.987 11.987 0 0 1 53.25 6.8 A 14.967 14.967 0 0 1 58.601 2.15 A 17.86 17.86 0 0 1 59.3 1.8 A 18.683 18.683 0 0 1 65.138 0.159 A 23.429 23.429 0 0 1 67.9 0 Q 72.6 0 75.9 1.2 A 40.706 40.706 0 0 1 80.569 3.225 A 35.935 35.935 0 0 1 82 4 A 22.284 22.284 0 0 1 82.643 4.416 Q 83.583 5.05 83.93 5.461 A 1.571 1.571 0 0 1 84 5.55 Q 84.4 6.1 84.1 6.9 Z M 14.1 56.7 L 0.3 56.7 A 0.432 0.432 0 0 1 0.181 56.685 Q 0.048 56.647 0.013 56.511 A 0.442 0.442 0 0 1 0 56.4 L 0 1.4 A 0.432 0.432 0 0 1 0.015 1.281 Q 0.053 1.148 0.189 1.113 A 0.442 0.442 0 0 1 0.3 1.1 L 14.2 1.1 A 35.66 35.66 0 0 1 24.607 2.486 Q 36.045 5.979 39.039 18.276 A 41.634 41.634 0 0 1 40.1 28.1 A 45.586 45.586 0 0 1 38.9 39.069 Q 34.514 56.7 14.1 56.7 Z M 2.6 3.4 L 2.6 54.4 L 14.2 54.4 Q 22.545 54.4 27.914 51.088 A 17.437 17.437 0 0 0 31.65 48 A 19.691 19.691 0 0 0 35.597 41.226 Q 36.668 38.222 37.136 34.508 A 49.727 49.727 0 0 0 37.5 28.3 A 44.966 44.966 0 0 0 37.011 21.425 Q 36.458 17.858 35.278 15.015 A 18.188 18.188 0 0 0 31.8 9.5 Q 26.1 3.4 14.2 3.4 L 2.6 3.4 Z" vector-effect="non-scaling-stroke" />
        </svg>
    );
}

export const OdsChatBarIcon: ChatBarButton = ({ isMainChat }) => {
    if (!isMainChat) return null;

    const button = (
        <ChatBarButton
            tooltip={translations.openSampleSenderModalTitle[settings.store.language || "ru"]}
            onClick={e => {
                const key = openModal(props => (
                    <OdsModal rootProps={props} key={key} />
                ));
            }}
            buttonProps={{
                "aria-haspopup": "dialog"
            }}
        >
            <OdsIcon className={cl({ "chat-button": true })} />
        </ChatBarButton>
    );

    return button;
};

