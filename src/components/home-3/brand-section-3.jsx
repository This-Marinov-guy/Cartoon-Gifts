import React from 'react';
import Image from "next/image";
import brand_1 from "@assets/images/clients/client_logo_1.png";
import brand_2 from "@assets/images/clients/client_logo_2.png";
import brand_3 from "@assets/images/clients/client_logo_3.png";
import brand_4 from "@assets/images/clients/client_logo_4.png";
import brand_5 from "@assets/images/clients/client_logo_5.png";

const BrandSectionThire = () => {
    return (
        <div className="client_logo_section bg_warning">
          <div className="container">
            <div className="client_logo_boxed border-0 rounded-0">
              <div className="client_logo_item">
                        <Image src={brand_1} style={{ width: "100%", height: "100%" }} alt="Paradox Client Logo" />
                    </div>
                    <div className="client_logo_item">
                        <Image src={brand_2} style={{ width: "100%", height: "100%" }} alt="Paradox Client Logo" />
                    </div>
                    <div className="client_logo_item">
                        <Image src={brand_3} style={{ width: "100%", height: "100%" }} alt="Paradox Client Logo" />
                    </div>
                    <div className="client_logo_item">
                        <Image src={brand_4} style={{ width: "100%", height: "100%" }} alt="Paradox Client Logo" />
                    </div>
                    <div className="client_logo_item">
                        <Image src={brand_5} style={{ width: "100%", height: "100%" }} alt="Paradox Client Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandSectionThire;