import { changeLanguage } from "@utils/globals";
import React, { useEffect } from "react";
import icon_globe from "@assets/images/icons/icon_globe.svg";
import Image from "next/image";

const GoogleTranslate = (props) => {
    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: "en",
                includedLanguages: "en,bg,ro",
            },
            "google_translate_element"
        );
    };

    useEffect(() => {
        var addScript = document.createElement("script");
        addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);

    return (
        <div className="center_div" style={{ marginLeft: '20px', position:'relative' }}>
            <Image
                src={icon_globe}
                style={{ width: "40px", height: "auto" }}
                alt="Globe Icon"
            />
            <div className="google_btn" id="google_translate_element"></div>
        </div>
    );
};

export default GoogleTranslate;
