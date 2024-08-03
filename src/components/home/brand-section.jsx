import React from 'react';
import Image from "next/image";
import brand_1 from "@assets/images/clients/client_logo_1.png";
import brand_2 from "@assets/images/clients/client_logo_2.png";
import brand_3 from "@assets/images/clients/client_logo_3.png";
import brand_4 from "@assets/images/clients/client_logo_4.png";
import brand_5 from "@assets/images/clients/client_logo_5.png";

const Brand = () => {
    const { t } = useTranslation('components');
    return (
        <div className="client_logo_section">
            <div className="container">
                <div className="client_logo_boxed">
                    <div className="client_logo_item">
                        <Image src={brand_1} style={{ width: "100%", height: "100%" }} alt={t('brand-section.alt')} />
                    </div>
                    <div className="client_logo_item">
                        <Image src={brand_2} style={{ width: "100%", height: "100%" }} alt={t('brand-section.alt')} />
                    </div>
                    <div className="client_logo_item">
                        <Image src={brand_3} style={{ width: "100%", height: "100%" }} alt={t('brand-section.alt')} />
                    </div>
                    <div className="client_logo_item">
                        <Image src={brand_4} style={{ width: "100%", height: "100%" }} alt={t('brand-section.alt')} />
                    </div>
                    <div className="client_logo_item">
                        <Image src={brand_5} style={{ width: "100%", height: "100%" }} alt={t('brand-section.alt')} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;

