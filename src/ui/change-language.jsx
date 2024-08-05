import React from 'react'
import Image from "next/image";
import NiceSelect from "@ui/niceSelect";
import { LANGUAGES } from '@utils/defines';
import icon_globe from "@assets/images/icons/icon_globe.svg";
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';

const ChangeLanguage = () => {
    const { lang } = useTranslation();

    const changeClientLanguage = async (lang = '') => {
        if (!lang) return;

        await setLanguage(lang);
        localStorage.setItem('language', lang);
    }

    return (
        <div className="select_option m-0">
            {/* <div className="icon_wrap">
                <Image
                    src={icon_globe}
                    alt="Globe Icon"
                />
            </div> */}
            <NiceSelect
                options={LANGUAGES}
                defaultCurrent={LANGUAGES.findIndex(language => language.value === (localStorage.get('lang') ?? lang))}
                onChange={(e) => changeClientLanguage(e.value)}
            />
        </div>
    )
}

export default ChangeLanguage