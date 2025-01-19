import { React, useState } from "@webpack/common";
import { Select } from "@webpack/common";

interface IPluginOptionComponentProps {
    onChange: (value: string) => void;
    selectedOption: string;
}

const PluginGuideDropdown = ({ selectedOption, onChange }: IPluginOptionComponentProps) => {
    const options = [
        { value: 'plugin', label: 'Плагин' },
        { value: 'shortcuts', label: 'Горячие клавиши' },
        { value: 'templates', label: 'Шаблоны' },
        { value: 'warnings', label: 'Устные предупреждения' },
    ];

    function handleChange(newValue) {
        onChange(newValue);
    }

    return (
        <Select
            options={options}
            placeholder="Выберите опцию"
            maxVisibleItems={5}
            closeOnSelect={true}
            select={handleChange}
            isSelected={v => v === selectedOption}
            serialize={v => String(v)}
        />
    );
};

export const PluginGuideComponent = () => {
    const [selectedTab, setSelectedTab] = useState('plugin');

    return (
        <section className="ods-guide-content">
            <div className="ods-guide-content">
                <PluginGuideDropdown
                    selectedOption={selectedTab}
                    onChange={setSelectedTab}
                />
                {selectedTab === 'plugin' && (
                    <div className="guide-text-div">
                        <p>Плагин создан для облегчения работы модератора, с помощью него можно быстрее выдавать устные предупреждения, отправлять шаблоны и ссылки на сервера.</p>
                    </div>
                )}
                {selectedTab === 'shortcuts' && (
                    <div className="guide-text-div">
                        <p>Вы можете выбрать удобное сочитание клавиш для открытия меню плагина. По умолчанию в плагине есть 3 комбинации.</p>
                        <p><strong>Alt + Q</strong></p>
                        <p><strong>Alt + M</strong></p>
                        <p><strong>Ctrl + M</strong></p>
                    </div>
                )}
                {selectedTab === 'templates' && (
                    <div className="guide-text-div">
                        <p>По умолчанию в плагине присутсвуют нужные шаблоны, в соответсвии с <a href="https://ods-3.gitbook.io/ods-instrukcii/reporty/shablony">документацией по работе.</a></p>
                        <p>Чтобы выбрать шаблон или сервер вы можете открыть меню при помощи сочитания клавишь или кнопки в поле для ввода текста в чате</p>
                        <p>Вы можете редактировать вид отправляемых сообщений с ссылками на сервера для этого предоставляется пункт в настройках плагина.</p>
                        <p><strong>&#123;&#123; SERVER_LABLE &#125;&#125; - название сервера</strong></p>
                        <p><strong>&#123;&#123; SERVER_ID &#125;&#125; - номер сервера</strong></p>
                        <p><strong>&#123;&#123; SERVER_LINK &#125;&#125; - ссылка на сервер</strong></p>
                    </div>
                )}
                {selectedTab === 'warnings' && (
                    <div className="guide-text-div">
                        <p>Мы можете упростить процесс выдачи устынх предупреждений. Для этого в плагине есть возможность установить префикс команды &#40;<strong>!</strong> по умолчанию&#41;</p>
                        <p>Чтобы выдать устное предупреждение используйте префикс слитно с айди пользователя а затем через пробел причину устного предупреждения. Так-же стоит учитывать, что причина не должна содержать в себе пробелов</p>
                        <p>Пример использования: <strong>!424939643591589898 2.1</strong></p>
                        <p><strong>&#123;&#123; PING_USER &#125;&#125; - упоминание пользователя</strong></p>
                        <p><strong>&#123;&#123; REASON &#125;&#125; - причина устного предупреждения</strong></p>
                    </div>
                )}
            </div>
        </section>
    );
};