import React from 'react';
import client_logo_1 from '@assets/images/clients/client_logo_1.png';
import client_logo_2 from '@assets/images/clients/client_logo_2.png';
import client_logo_3 from '@assets/images/clients/client_logo_3.png';
import client_logo_4 from '@assets/images/clients/client_logo_4.png';
import client_logo_5 from '@assets/images/clients/client_logo_5.png';
import Image from 'next/image';


const ClientLogoSection = () => {
  return (
    <div className="client_logo_section section_space_lg pb-0">
      <div className="container">
        <div className="client_logo_boxed">
          <div className="client_logo_item">
            <Image src={client_logo_1} style={{ width: "100%", height: "100%" }} alt="Paradox Client Logo" />
          </div>
          <div className="client_logo_item">
            <Image src={client_logo_2} style={{ width: "100%", height: "100%" }} alt="Paradox Client Logo" />
          </div>
          <div className="client_logo_item">
            <Image src={client_logo_3} style={{ width: "100%", height: "100%" }} alt="Paradox Client Logo" />
          </div>
          <div className="client_logo_item">
            <Image src={client_logo_4} style={{ width: "100%", height: "100%" }} alt="Paradox Client Logo" />
          </div>
          <div className="client_logo_item">
            <Image src={client_logo_5} style={{ width: "100%", height: "100%" }} alt="Paradox Client Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogoSection;