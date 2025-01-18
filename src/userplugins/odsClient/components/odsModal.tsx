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

import { Margins } from "@utils/margins";
import { closeModal, ModalCloseButton, ModalContent, ModalHeader, ModalProps, ModalRoot } from "@utils/modal";
import { Button, Forms, SearchableSelect, Switch, useMemo, useState } from "@webpack/common";

import { settings } from "../utils/settings";
import { cl, Discord, getDiscordByLable, getDiscords, getSampleIdByLable, getSamples, Sample, sendSelectedDiscord, sendSelectedSample } from "../utils/utils";
import { translations } from "../utils/translations";

function SampleSelect() {

    const samples: Sample[] = getSamples();
    const [currentValue, setCurrentValue] = useState(samples[settings.store.selectedSampleId]);

    const options = useMemo(
        () => {
            return samples.map(sample => ({
                value: sample.label || "undefined",
                label: sample.label || "undefined"
            }));
        }, []
    );


    return (
        <section className={Margins.bottom16}>
            <Forms.FormTitle tag="h3">
                {translations.sampleChoosingModelTitle[settings.store.language || "ru"]}
            </Forms.FormTitle>

            <SearchableSelect
                options={options}
                value={{
                    label: currentValue.label,
                    value: currentValue.label
                }}
                placeholder={translations.choosingSamplePlaceholder[settings.store.language || "ru"]}
                maxVisibleItems={5}
                closeOnSelect={true}
                onChange={(v) => {
                    settings.store.selectedSampleId = getSampleIdByLable(v);
                    setCurrentValue(samples[getSampleIdByLable(v)]);
                }}
            />

        </section>
    );
}


function DiscordSelect() {

    const discords: Discord[] = getDiscords();
    const [currentValue, setCurrentValue] = useState(discords[settings.store.selectedServerId]);

    const options = useMemo(
        () => {
            return discords.map(discords => ({
                value: discords.label,
                label: `${discords.id} | ${discords.label}`
            }));
        }, []
    );


    return (
        <section className={Margins.bottom16}>
            <Forms.FormTitle tag="h3">
                {"Выбор сервера"}
            </Forms.FormTitle>

            <SearchableSelect
                options={options}
                value={{
                    label: `${currentValue.id} | ${currentValue.label}`,
                    value: currentValue.label,

                }}
                placeholder={"Выберите сервер"}
                maxVisibleItems={5}
                closeOnSelect={true}
                onChange={(v) => {
                    settings.store.selectedServerId = getDiscordByLable(v) - 1;
                    setCurrentValue(discords[getDiscordByLable(v) - 1]);
                }}
            />

        </section>
    );
}




export function OdsModal({ key, rootProps }: { key: string, rootProps: ModalProps; }) {

    return (
        <ModalRoot {...rootProps}>
            <ModalHeader className={cl("modal-header")}>
                <Forms.FormTitle tag="h2">
                    {"Модерация"}
                </Forms.FormTitle>
                <ModalCloseButton onClick={rootProps.onClose} />
            </ModalHeader>

            <ModalContent className={cl("modal-content")}>
                <SampleSelect />

                <Button onClick={() => {
                    rootProps.onClose();
                    sendSelectedSample();
                }}>{translations.sendButtonTitle[settings.store.language || "ru"]}</Button>
            </ModalContent>

            <Forms.FormDivider className={Margins.bottom16} />


            <ModalContent className={cl("modal-content")}>
                <DiscordSelect />

                <Button onClick={() => {
                    rootProps.onClose();
                    sendSelectedDiscord();
                }}>{translations.sendButtonTitle[settings.store.language || "ru"]}</Button>

                <Forms.FormDivider className={Margins.bottom8} />
            </ModalContent>


        </ModalRoot>
    );
}
