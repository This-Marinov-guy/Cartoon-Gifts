import { changeLanguage } from "@utils/globals";
import React, { useEffect } from "react";
import icon_globe from "@assets/images/icons/icon_globe.svg";
import Image from "next/image";

const GoogleTranslate = (props) => {

    return (
        <div className="center_div">
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
