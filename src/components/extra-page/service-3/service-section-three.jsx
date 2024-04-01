import service_data from "@data/common_data/service-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceSectionThree = () => {
  return (
    <section className="service_section section_space_lg">
      <div className="container">
        <div className="row">
          {service_data.slice(33, 39).map((item) => (
            <div className="col col-lg-4 col-md-6 col-sm-6" key={item.id}>
              <div className="service_item style_3">
                <div className="item_icon">
                  <i className={item.font_awasame_icon}></i>
                </div>
                <div className="item_content">
                  <h3 className="item_title">{item.item_title}</h3>
                  <p className="item_description">{item.item_description}</p>
                </div>
                <Link className="btn-link" href={`/service-details/${item.id}`}>
                  <span className="btn_text">View Details</span>
                  <span className="btn_icon">
                    <Image
                      src={item.icon}
                      style={{ width: "100%", height: "100%" }}
                      alt="Paradox icons"
                    />
                    <Image
                      src={item.primary_icon}
                      style={{ width: "100%", height: "100%" }}
                      alt="Paradox icons"
                    />
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

export default ServiceSectionThree;
