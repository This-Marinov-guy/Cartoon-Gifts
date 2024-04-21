import { changeLanguage } from "@utils/globals";
import React, { useEffect } from "react";

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
        <div className="google_btn" id="google_translate_element"></div>
    );
};

export default GoogleTranslate;
