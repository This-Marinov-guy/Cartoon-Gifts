import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import shape_line_1 from '@assets/images/shapes/shape_line_3.svg'
import shape_line_2 from '@assets/images/shapes/shape_4.svg'
import about_overlay from '@assets/images/about/about_image_8.jpg'
import services_data from '@data/common_data/service-data';



const ServiceSectionFive = () => {
  return (
    <section className="service_section section_space_lg bg_primary">
      <div className="container decoration_wrap">
        <div className="section_heading style_3 text-center text-white">
          <h2 className="heading_subtitle">
            <span>Our Service</span>
          </h2>
          <h3 className="heading_title mb-0">
            Providing Solutions
          </h3>
        </div>
        <div className="row service_items_grouped">
          {services_data.slice(18, 24).map((item) => (
            <div className="col col-lg-4 col-md-6 col-sm-6" key={item.id}>
              <div className="service_item style_4" style={{ backgroundImage: `url(${about_overlay.src})` }}>
                <div className="service_item style_4_bg"></div>
                <div className="item_icon">
                  {item.icon}
                </div>
                <div className="item_content">
                  <h3 className="item_title">
                    {item.title} <span className="d-block">{item.titleTwo}</span>
                  </h3>
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

        <div className="deco_item shape_1">
          <Image data-parallax='{"y" : 200, "smoothness": 20}' src={shape_line_2} style={{ width: "auto", height: "auto" }} alt="Paradox - Shape Image" />
        </div>
        <div className="deco_item shape_2">
          <Image data-parallax='{"y" : -200, "smoothness": 20}' src={shape_line_1} style={{ width: "auto", height: "auto" }} alt="Paradox - Shape Image" />
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionFive;