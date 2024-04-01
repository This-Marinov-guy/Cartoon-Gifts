import React from 'react';
import service_data from '@data/common_data/service-data';
import Link from 'next/link';

import Image from 'next/image';

const ServiceTwo = () => {
  return (
    <section className="service_section section_space_lg">
      <div className="container">
        <div className="row">
          {
            service_data.slice(0, 6).map((item) => (
              <div className="col col-lg-4 col-md-6 col-sm-6" key={item.id}>
                <div className="service_item style_2">
                  <div className="item_icon">
                    <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="Paradox illustration Icon" />
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">
                      {item.category}
                    </h3>
                    <p className="item_description mb-0">
                      {item.item_description}
                    </p>
                  </div>
                  <Link className="item_details_btn" href={`/service-details/${item.id}`}>
                    <span className="btn_icon">
                      <Image src={item.btn_icon} style={{ width: "100%", height: "100%" }} alt="Paradox icons" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTwo;