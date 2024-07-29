import React from 'react';
import Image from "next/image";
import brand_1 from "@assets/images/clients/client_logo_6.png";
import brand_2 from "@assets/images/clients/client_logo_7.png";
import brand_3 from "@assets/images/clients/client_logo_8.png";
import brand_4 from "@assets/images/clients/client_logo_9.png";
import brand_5 from "@assets/images/clients/client_logo_10.png";

import shape_text_overlay from "@assets/images/shapes/shape_text_our_client.svg";

const BrandSectionSix = () => {
  return (
    <div className="client_logo_section">
      <div className="container">
        <div className="client_logo_boxed bg_primary" style={{ backgroundImage: `url(${shape_text_overlay.src})` }}>
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

export default BrandSectionSix;